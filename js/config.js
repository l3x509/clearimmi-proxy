// ClearImmi — deploy-time configuration.
// Load this FIRST (before any data/*.js or app/*.js file).
// Everything in this file is something you edit when deploying or
// redeploying — nothing here is application logic.

// The canonical URL for this deployment. Used in WhatsApp/native share text.
const SITE_URL = 'https://clearimmi.com/pathways';

// ---- AI feature endpoints ----
// Both are currently EMPTY, meaning both features are dormant — the UI
// detects the empty string and shows an honest "not connected yet" message
// instead of failing silently. Fill in the real URL once each backend is
// deployed. These are two SEPARATE pipelines with different jobs, prompts,
// and output shapes — never point them at the same endpoint:

// 1. Letter Explainer — reads a confusing government letter (photo or
//    pasted text) and returns a free-text plain-language summary.
const EXPLAIN_ENDPOINT = ""; // e.g. "https://clearimmi-proxy.up.railway.app/explain"

// 2. Form Filing Help — reads a specific form section (photo or pasted
//    text) and returns a structured, field-by-field walkthrough. Must
//    never fill in an answer for a field that requires legal judgment —
//    it should flag those instead. See js/data/glossary.js for the
//    pattern this mirrors (legalJudgment: true on relevant fields).
const FILING_HELP_ENDPOINT = ""; // e.g. "https://clearimmi-filing-help.up.railway.app/explain-fields"
