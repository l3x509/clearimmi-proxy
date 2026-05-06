/**
 * ClearImmi — USCIS Case Status Proxy v6
 * Changes from v5:
 *   - USCIS migrated to Next.js. Old mycasestatus.do is dead.
 *   - New internal API endpoint: /csol-api/case-statuses/{receiptNumber}
 *   - Returns JSON directly — no HTML parsing needed
 */

const express   = require('express');
const https     = require('https');
const http      = require('http');
const cors      = require('cors');
const rateLimit = require('express-rate-limit');

const app  = express();
const PORT = process.env.PORT || 3001;

if (!process.env.SCRAPERAPI_KEY) {
  console.error('[startup] WARNING: SCRAPERAPI_KEY is not set. Requests will fail.');
}

app.set('trust proxy', 1);
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*', methods: ['GET', 'POST', 'DELETE'] }));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 30,
  standardHeaders: true, legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a few minutes and try again.' },
});
app.use('/api/', limiter);

// ── Cache ─────────────────────────────────────────────────────────────────────
const cache = new Map();
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) { cache.delete(key); return null; }
  return entry.data;
}
function setCache(key, data) {
  cache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
}

// ── Validation ────────────────────────────────────────────────────────────────
const VALID_PREFIXES = ['IOE','MSC','WAC','EAC','SRC','LIN','NBC','YSC','VSC','CSC','NSC','TSC'];
const RECEIPT_RE = /^[A-Z]{3}\d{10}$/i;
function validateReceipt(num) {
  if (!num || typeof num !== 'string') return 'Receipt number is required.';
  const clean = num.trim().toUpperCase().replace(/[-\s]/g, '');
  if (!RECEIPT_RE.test(clean)) return 'Invalid format. Expected 3 letters + 10 digits (e.g. IOE0123456789).';
  const prefix = clean.slice(0, 3);
  if (!VALID_PREFIXES.includes(prefix)) return `Unknown prefix "${prefix}". Valid: ${VALID_PREFIXES.join(', ')}.`;
  return null;
}

// ── HTTP helper ───────────────────────────────────────────────────────────────
function httpRequest(url, options, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const lib    = parsed.protocol === 'https:' ? https : http;
    const req = lib.request({
      hostname : parsed.hostname,
      path     : parsed.pathname + parsed.search,
      method   : options.method || 'GET',
      headers  : options.headers || {},
    }, (res) => {
      if ([301, 302].includes(res.statusCode) && res.headers.location) {
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : `https://${parsed.hostname}${res.headers.location}`;
        return httpRequest(next, { ...options, method: 'GET' }, null).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, text: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', reject);
    req.setTimeout(25000, () => req.destroy(new Error('Request timed out after 25s')));
    if (body) req.write(body);
    req.end();
  });
}

// ── USCIS fetch via ScraperAPI ────────────────────────────────────────────────
// USCIS Next.js internal API — what their own frontend calls on form submit
const USCIS_API = 'https://egov.uscis.gov/csol-api/case-statuses';

async function fetchUSCISStatus(receiptNum) {
  const SCRAPERAPI_KEY = process.env.SCRAPERAPI_KEY;
  if (!SCRAPERAPI_KEY) throw new Error('SCRAPERAPI_KEY environment variable is not set.');

  const targetUrl  = `${USCIS_API}/${receiptNum}`;
  const scraperUrl = `http://api.scraperapi.com?api_key=${SCRAPERAPI_KEY}&url=${encodeURIComponent(targetUrl)}&country_code=us`;

  console.log(`[uscis] Fetching ${receiptNum} from csol-api via ScraperAPI`);
  const resp = await httpRequest(scraperUrl, {
    method : 'GET',
    headers: {
      'Accept'         : 'application/json',
      'Referer'        : 'https://egov.uscis.gov/',
      'Origin'         : 'https://egov.uscis.gov',
    },
  });

  console.log(`[uscis] ScraperAPI response: ${resp.status}`);
  if (resp.status === 404) {
    return { found: false, receiptNum, status: null, description: null, formType: null, lastChecked: new Date().toISOString() };
  }
  if (resp.status !== 200) throw new Error(`ScraperAPI returned HTTP ${resp.status}`);

  let data;
  try {
    data = JSON.parse(resp.text);
  } catch (e) {
    console.error('[parse] Raw response:', resp.text.slice(0, 500));
    throw new Error('Could not parse USCIS response.');
  }

  // Handle case not found
  if (!data || (!data.caseStatus && !data.receiptNumber)) {
    return { found: false, receiptNum, status: null, description: null, formType: null, lastChecked: new Date().toISOString() };
  }

  const formMatch = (data.caseStatusDesc || data.description || '')
    .match(/Form\s+(I-\d+[A-Z]?)/i);

  return {
    found      : true,
    receiptNum,
    status     : data.caseStatus     || data.status     || null,
    description: data.caseStatusDesc || data.description || null,
    formType   : formMatch ? formMatch[1].toUpperCase() : (data.formNum || data.form || null),
    updateDate : data.updateDate || data.lastUpdated || null,
    lastChecked: new Date().toISOString(),
    source     : 'uscis-csol-api',
  };
}

// ── Severity classifier ───────────────────────────────────────────────────────
const SEV_MAP = [
  { pattern: /request for evidence|rfe/i,       sev: 'urgent'  },
  { pattern: /notice of intent to deny|noid/i,  sev: 'urgent'  },
  { pattern: /denied/i,                         sev: 'denied'  },
  { pattern: /approved|card was produced/i,     sev: 'success' },
  { pattern: /card was delivered/i,             sev: 'success' },
  { pattern: /interview|biometric/i,            sev: 'action'  },
  { pattern: /case.*received|we received/i,     sev: 'normal'  },
  { pattern: /actively review|being reviewed/i, sev: 'normal'  },
  { pattern: /transferred/i,                    sev: 'normal'  },
  { pattern: /withdrawn/i,                      sev: 'denied'  },
];
function classifySeverity(status) {
  if (!status) return 'normal';
  for (const { pattern, sev } of SEV_MAP) { if (pattern.test(status)) return sev; }
  return 'normal';
}

// ── Routes ────────────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({
  ok        : true,
  cacheSize : cache.size,
  node      : process.version,
  scraperapi: !!process.env.SCRAPERAPI_KEY,
}));

// Debug route — shows raw USCIS API response
app.get('/api/debug/:receiptNum', async (req, res) => {
  try {
    const SCRAPERAPI_KEY = process.env.SCRAPERAPI_KEY;
    const receiptNum = req.params.receiptNum.toUpperCase().replace(/[-\s]/g, '');
    const targetUrl  = `${USCIS_API}/${receiptNum}`;
    const scraperUrl = `http://api.scraperapi.com?api_key=${SCRAPERAPI_KEY}&url=${encodeURIComponent(targetUrl)}&country_code=us`;
    const resp = await httpRequest(scraperUrl, {
      method : 'GET',
      headers: { 'Accept': 'application/json', 'Referer': 'https://egov.uscis.gov/' },
    });
    res.json({ httpStatus: resp.status, rawResponse: resp.text.slice(0, 3000) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.all('/api/case-status', async (req, res) => {
  try {
    const rawNum     = (req.body?.receiptNum ?? req.query?.receiptNum ?? '').trim();
    const receiptNum = rawNum.toUpperCase().replace(/[-\s]/g, '');
    const err        = validateReceipt(receiptNum);
    if (err) return res.status(400).json({ error: err });

    const cached = getCached(receiptNum);
    if (cached) return res.json({ ...cached, cached: true });

    const data     = await fetchUSCISStatus(receiptNum);
    const severity = classifySeverity(data.status);
    const result   = { ...data, severity, cached: false };
    setCache(receiptNum, result);
    return res.json(result);
  } catch (err) {
    console.error('[case-status error]', err.message);
    if (/timeout/i.test(err.message))        return res.status(504).json({ error: 'USCIS is responding slowly. Please try again.' });
    if (/SCRAPERAPI_KEY/i.test(err.message)) return res.status(500).json({ error: 'Proxy misconfigured — SCRAPERAPI_KEY missing.' });
    return res.status(502).json({ error: 'Could not reach USCIS. Please try again shortly.', detail: err.message });
  }
});

app.delete('/api/case-status/:receiptNum', (req, res) => {
  const key = req.params.receiptNum.toUpperCase().replace(/[-\s]/g, '');
  res.json({ deleted: cache.delete(key), key });
});

app.listen(PORT, () => console.log(`ClearImmi proxy v6 on :${PORT} — ScraperAPI: ${!!process.env.SCRAPERAPI_KEY}`));
