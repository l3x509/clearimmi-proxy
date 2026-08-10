# clearimmi-filing-help

Backend for ClearImmi's **Form Filing Help** feature. One endpoint: given a
photo or pasted text of a government form section, returns a field-by-field
plain-language explanation — and flags any field that requires a legal
judgment call instead of guessing at an answer.

This is intentionally the *only* feature this backend serves. The Letter
Explainer (`EXPLAIN_ENDPOINT`) is a separate, differently-prompted pipeline
per the main site's README — not built here.

## Why this exists

`clearimmi.com`'s static site (repo: `clearimmi-proxy`) can't safely call the
Anthropic API directly — an API key embedded in client-side JS is public and
can't be revoked without breaking every visitor's session. This is the small
server that holds the key privately and proxies the request.

## Request / response contract

`POST /explain-fields`

```json
{
  "lang": "en",
  "formId": "i765",
  "formText": "optional pasted text",
  "image": "optional base64 image data",
  "imageType": "image/jpeg"
}
```

At least one of `formText` or `image` is required. Response:

```json
{
  "fields": [
    { "name": "Application type", "howTo": "...", "legalJudgment": false },
    { "name": "Eligibility category", "howTo": "...", "legalJudgment": true }
  ]
}
```

This exact shape is consumed by `explainFormFields()` in the main site's
`js/app/ai-features.js` — don't change it without updating that file too.

## Deploy (Railway)

1. Push this folder to its own GitHub repo (don't reuse `clearimmi-proxy` —
   that repo is the static site Hostinger deploys from).
2. In Railway: New Project → Deploy from GitHub repo → select this repo.
3. Set environment variables in the Railway service settings:
   - `ANTHROPIC_API_KEY` — required
   - `ALLOWED_ORIGINS` — defaults to `https://clearimmi.com`; add more,
     comma-separated, if the site is ever served from another origin
   - `ANTHROPIC_MODEL` — defaults to `claude-opus-5`
4. Railway auto-detects `railway.toml` and runs `node server.js`. Once
   deployed, copy the public URL Railway gives you.
5. In the **main site repo** (`clearimmi-proxy`), set
   `FILING_HELP_ENDPOINT` in `js/config.js` to
   `https://<your-railway-url>/explain-fields`, bump the cache-busting
   `?v=` on `index.html`'s script tags per that repo's README, and deploy.

## Local dev

```bash
cp .env.example .env   # fill in ANTHROPIC_API_KEY
npm install
npm run dev
```

## Notes

- Rate-limited to 20 requests / 15 min per IP (`express-rate-limit`) — this
  is a public, unauthenticated endpoint calling a paid API, so this bounds
  worst-case cost. Adjust in `server.js` if real usage needs differ.
- Uses [structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
  (`output_config.format`) so the response always matches the JSON schema —
  no manual parsing/retry logic needed.
- Model is configurable via `ANTHROPIC_MODEL`. Defaults to `claude-opus-5`
  for accuracy on legally-sensitive content; `claude-sonnet-5` is a cheaper
  alternative worth evaluating if request volume grows and quality holds up
  on your own test cases.
