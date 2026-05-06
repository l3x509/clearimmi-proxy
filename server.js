/**
 * ClearImmi — USCIS Case Status Proxy v5
 * Changes from v4:
 *   - USCIS JSON endpoint doesn't exist (Next.js 404). Back to HTML POST.
 *   - Uses ScraperAPI's structured POST API to send form data through residential IPs
 */

const express   = require('express');
const https     = require('https');
const http      = require('http');
const { parse } = require('node-html-parser');
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

// ── USCIS fetch via ScraperAPI structured POST ────────────────────────────────
const USCIS_URL = 'https://egov.uscis.gov/casestatus/mycasestatus.do';

async function fetchUSCISStatus(receiptNum) {
  const SCRAPERAPI_KEY = process.env.SCRAPERAPI_KEY;
  if (!SCRAPERAPI_KEY) throw new Error('SCRAPERAPI_KEY environment variable is not set.');

  const payload = JSON.stringify({
    api_key     : SCRAPERAPI_KEY,
    url         : USCIS_URL,
    method      : 'POST',
    body        : `appReceiptNum=${encodeURIComponent(receiptNum)}&initCaseSearch=CHECK+STATUS`,
    country_code: 'us',
    headers     : {
      'Content-Type'   : 'application/x-www-form-urlencoded',
      'Origin'         : 'https://egov.uscis.gov',
      'Referer'        : USCIS_URL,
      'User-Agent'     : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept'         : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });

  console.log(`[uscis] POSTing for ${receiptNum} via ScraperAPI`);

  const resp = await httpRequest('https://api.scraperapi.com/', {
    method : 'POST',
    headers: {
      'Content-Type'  : 'application/json',
      'Content-Length': Buffer.byteLength(payload),
    },
  }, payload);

  console.log(`[uscis] ScraperAPI response: ${resp.status}`);
  if (resp.status !== 200) throw new Error(`ScraperAPI returned HTTP ${resp.status}`);

  return parseUSCISHtml(resp.text, receiptNum);
}

// ── HTML parser ───────────────────────────────────────────────────────────────
function parseUSCISHtml(html, receiptNum) {
  const root        = parse(html);
  const statusBlock = root.querySelector('.rows.text-center') || root.querySelector('.appointment-sec');

  if (!statusBlock) {
    const bodyText = root.querySelector('body')?.text ?? '';
    if (/not found|unable to find|no case/i.test(bodyText)) {
      return { found: false, receiptNum, status: null, description: null, formType: null, lastChecked: new Date().toISOString() };
    }
    console.warn('[parse] No status block found. HTML snippet:', html.slice(0, 800));
    throw new Error('Unexpected USCIS response — could not find status block.');
  }

  const statusTitle = statusBlock.querySelector('h1')?.text?.trim() ?? null;
  const description = statusBlock.querySelector('p')?.text?.trim()  ?? null;
  const formMatch   = description?.match(/Form\s+(I-\d+[A-Z]?)/i);
  const formType    = formMatch ? formMatch[1].toUpperCase() : null;

  if (!statusTitle) {
    return { found: false, receiptNum, status: null, description: null, formType: null, lastChecked: new Date().toISOString() };
  }

  return {
    found      : true,
    receiptNum,
    status     : statusTitle,
    description,
    formType,
    lastChecked: new Date().toISOString(),
    source     : 'uscis-html',
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

// Debug route — shows raw ScraperAPI/USCIS response (remove before production)
app.get('/api/debug/:receiptNum', async (req, res) => {
  try {
    const SCRAPERAPI_KEY = process.env.SCRAPERAPI_KEY;
    const receiptNum = req.params.receiptNum.toUpperCase().replace(/[-\s]/g, '');
    const payload = JSON.stringify({
      api_key     : SCRAPERAPI_KEY,
      url         : USCIS_URL,
      method      : 'POST',
      body        : `appReceiptNum=${encodeURIComponent(receiptNum)}&initCaseSearch=CHECK+STATUS`,
      country_code: 'us',
      headers     : {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin'      : 'https://egov.uscis.gov',
        'Referer'     : USCIS_URL,
        'User-Agent'  : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });
    const resp = await httpRequest('https://api.scraperapi.com/', {
      method : 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) },
    }, payload);
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

app.listen(PORT, () => console.log(`ClearImmi proxy v5 on :${PORT} — ScraperAPI: ${!!process.env.SCRAPERAPI_KEY}`));
