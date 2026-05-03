/**
 * ClearImmi — USCIS Case Status Proxy
 *
 * Scrapes the public egov.uscis.gov case status endpoint and returns
 * clean JSON. Sits between the ClearImmi frontend and USCIS so:
 *   1. We can cache results (6-hour TTL) to avoid hammering USCIS
 *   2. We can rate-limit per IP before we ever touch USCIS
 *   3. We can normalize the raw HTML into a consistent shape
 *
 * Deploy anywhere Node runs: Railway, Render, Fly.io, a plain VPS.
 * Set PORT env var; everything else works out of the box.
 */

const express    = require('express');
const fetch      = require('node-fetch');
const { parse }  = require('node-html-parser');
const cors       = require('cors');
const rateLimit  = require('express-rate-limit');

const app  = express();
const PORT = process.env.PORT || 3001;

/* ── CORS ───────────────────────────────────────────────────────────
   In production, lock this down to your actual domain.              */
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST'],
}));

app.use(express.json());

/* ── RATE LIMITING ──────────────────────────────────────────────────
   30 lookups / 15 min per IP. Generous for real users, tight enough
   to block scrapers and protect your USCIS relationship.            */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a few minutes and try again.' },
});
app.use('/api/', limiter);

/* ── IN-MEMORY CACHE ────────────────────────────────────────────────
   Key: receipt number (uppercase). TTL: 6 hours.
   Swap this for Redis/Upstash when you go to production at scale.   */
const cache = new Map(); // { receiptNum: { data, expiresAt } }
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) { cache.delete(key); return null; }
  return entry.data;
}

function setCache(key, data) {
  cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
}

/* ── RECEIPT VALIDATION ─────────────────────────────────────────────
   USCIS receipt numbers: 3 letters + 10 digits (13 chars total).
   Valid prefixes cover all service centers.                          */
const VALID_PREFIXES = [
  'IOE','MSC','WAC','EAC','SRC','LIN','NBC','YSC','VSC','CSC','NSC','TSC',
];
const RECEIPT_RE = /^[A-Z]{3}\d{10}$/i;

function validateReceipt(num) {
  if (!num || typeof num !== 'string') return 'Receipt number is required.';
  const clean = num.trim().toUpperCase().replace(/[-\s]/g, '');
  if (!RECEIPT_RE.test(clean)) return 'Invalid format. Expected 3 letters + 10 digits (e.g. IOE0123456789).';
  const prefix = clean.slice(0, 3);
  if (!VALID_PREFIXES.includes(prefix)) return `Unknown prefix "${prefix}". Valid prefixes: ${VALID_PREFIXES.join(', ')}.`;
  return null; // valid
}

/* ── USCIS SCRAPER ──────────────────────────────────────────────────
   POST to the public egov endpoint and parse the HTML response.     */
const USCIS_URL = 'https://egov.uscis.gov/casestatus/mycasestatus.do';

const USCIS_HEADERS = {
  'Content-Type'    : 'application/x-www-form-urlencoded',
  'User-Agent'      : 'Mozilla/5.0 (compatible; ClearImmi/1.0)',
  'Accept'          : 'text/html,application/xhtml+xml',
  'Accept-Language' : 'en-US,en;q=0.9',
  'Origin'          : 'https://egov.uscis.gov',
  'Referer'         : 'https://egov.uscis.gov/casestatus/mycasestatus.do',
};

async function fetchUSCISStatus(receiptNum) {
  const body = new URLSearchParams({
    appReceiptNum  : receiptNum,
    initCaseSearch : 'CHECK STATUS',
  });

  const res = await fetch(USCIS_URL, {
    method  : 'POST',
    headers : USCIS_HEADERS,
    body    : body.toString(),
    timeout : 12_000, // 12 s — USCIS can be slow
  });

  if (!res.ok) throw new Error(`USCIS returned HTTP ${res.status}`);

  const html = await res.text();
  return parseUSCISHtml(html, receiptNum);
}

/* ── HTML PARSER ────────────────────────────────────────────────────
   USCIS wraps the result in:
     <div class="rows text-center">
       <h1>Case Status Title</h1>
       <p>Description paragraph</p>
     </div>
   We also grab the form number from the page when available.        */
function parseUSCISHtml(html, receiptNum) {
  const root = parse(html);

  // Primary status block
  const statusBlock = root.querySelector('.rows.text-center') ||
                      root.querySelector('.appointment-sec');

  if (!statusBlock) {
    // USCIS sometimes returns "not found" outside the normal block
    const bodyText = root.querySelector('body')?.text ?? '';
    if (bodyText.includes('not found') || bodyText.includes('Unable to find')) {
      return { found: false, receiptNum, status: null, description: null, formType: null, lastChecked: new Date().toISOString() };
    }
    throw new Error('Unexpected USCIS response structure — HTML may have changed.');
  }

  const statusTitle = statusBlock.querySelector('h1')?.text?.trim() ?? null;
  const description = statusBlock.querySelector('p')?.text?.trim()  ?? null;

  // Try to extract form type from the description (e.g. "Form I-485")
  const formMatch   = description?.match(/Form\s+(I-\d+[A-Z]?)/i);
  const formType    = formMatch ? formMatch[1].toUpperCase() : null;

  if (!statusTitle) {
    return { found: false, receiptNum, status: null, description: null, formType: null, lastChecked: new Date().toISOString() };
  }

  return {
    found       : true,
    receiptNum,
    status      : statusTitle,
    description,
    formType,
    lastChecked : new Date().toISOString(),
    source      : 'uscis-public',
  };
}

/* ── SEVERITY CLASSIFIER ────────────────────────────────────────────
   Maps raw USCIS status strings → severity levels for the frontend. */
const SEV_MAP = [
  { pattern: /request for evidence|rfe/i,              sev: 'urgent'  },
  { pattern: /notice of intent to deny|noid/i,         sev: 'urgent'  },
  { pattern: /denied/i,                                sev: 'denied'  },
  { pattern: /approved|card was produced/i,            sev: 'success' },
  { pattern: /card was delivered/i,                    sev: 'success' },
  { pattern: /interview|biometric/i,                   sev: 'action'  },
  { pattern: /response.*received|we received/i,        sev: 'normal'  },
  { pattern: /case.*received/i,                        sev: 'normal'  },
  { pattern: /actively review|being reviewed/i,        sev: 'normal'  },
  { pattern: /transferred/i,                           sev: 'normal'  },
  { pattern: /withdrawn/i,                             sev: 'denied'  },
];

function classifySeverity(status) {
  if (!status) return 'normal';
  for (const { pattern, sev } of SEV_MAP) {
    if (pattern.test(status)) return sev;
  }
  return 'normal';
}

/* ── ROUTES ─────────────────────────────────────────────────────────*/

// Health check
app.get('/health', (_req, res) => res.json({ ok: true, cacheSize: cache.size }));

// Main lookup endpoint
// POST /api/case-status  { "receiptNum": "IOE0123456789" }
// GET  /api/case-status?receiptNum=IOE0123456789
app.all('/api/case-status', async (req, res) => {
  try {
    const rawNum = (req.body?.receiptNum ?? req.query?.receiptNum ?? '').trim();
    const receiptNum = rawNum.toUpperCase().replace(/[-\s]/g, '');

    // Validate
    const validationError = validateReceipt(receiptNum);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    // Cache hit?
    const cached = getCached(receiptNum);
    if (cached) {
      return res.json({ ...cached, cached: true });
    }

    // Fetch from USCIS
    const data     = await fetchUSCISStatus(receiptNum);
    const severity = classifySeverity(data.status);
    const result   = { ...data, severity, cached: false };

    // Only cache successful / "not found" responses (not errors)
    setCache(receiptNum, result);

    return res.json(result);

  } catch (err) {
    console.error('[case-status error]', err.message);

    // Surface timeout separately so the frontend can show a friendly message
    if (err.type === 'request-timeout' || err.message?.includes('timeout')) {
      return res.status(504).json({ error: 'USCIS is responding slowly. Please try again in a moment.' });
    }

    return res.status(502).json({ error: 'Could not reach USCIS. Please try again shortly.' });
  }
});

// Cache bust (e.g. after user reports stale data)
// DELETE /api/case-status/:receiptNum
app.delete('/api/case-status/:receiptNum', (req, res) => {
  const key = req.params.receiptNum.toUpperCase().replace(/[-\s]/g, '');
  const deleted = cache.delete(key);
  res.json({ deleted, key });
});

app.listen(PORT, () => {
  console.log(`ClearImmi proxy running on :${PORT}`);
});
