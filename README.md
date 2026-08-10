# ClearImmi Pathways

A free, multilingual (EN/HT/FR/ES/PT/ZH/AR) site helping immigrants
navigate US career licensing, understand their immigration status and
forms in plain language, and stay current on policy changes. No sign-up,
no accounts, nothing stored server-side — everything lives in the
visitor's own browser (`localStorage`).

Zero build step. Deploy by uploading this whole folder — e.g. to
Hostinger's `public_html/pathways/`. `index.html` is the entry point.

## Why this file exists

This project gets picked up across many separate sessions, often with no
memory of prior work. This README is the fastest way for a new session
(human or AI) to get oriented safely. Read it before making changes.

## Folder structure

```
index.html          — page structure only (all screens, no logic)
css/style.css        — all styling (dark navy/gold theme)
js/config.js          — deploy-time settings: SITE_URL, AI endpoints
js/data/               — content, no logic. Safe to edit without touching app/
  states/ma.js          — Massachusetts pathway plans, disclaimers, upgrades
  states/fl.js           — Florida pathway plans, disclaimers, upgrades
  careers.js               — the 28-career quiz catalog (state-agnostic)
  glossary.js               — Status & Form Filling Help content
  updates.js                  — Immigration Updates feed items
  faq.js                        — FAQ shown on results screens
  translations.js                 — ES/PT layer (see "Translation system" below)
js/app/                — logic, no content. Safe to edit without touching data/
  storage.js              — localStorage helpers
  navigation.js             — screen switching, language switching, state
                               switching — see warning below
  render-pathways.js          — plan/upgrade results, income ladder, roadmap
  render-quiz.js                — career finder quiz
  render-glossary.js              — status/form glossary screens
  render-updates.js                 — immigration updates feed
  render-home.js                      — FAQ accordion, stats bar
  ai-features.js                        — letter explainer + filing help
  share.js                                — WhatsApp / native share
  main.js                                   — startup; must load LAST
```

## Load order matters

`index.html` loads scripts in this order: `config.js` → all of `data/*`
→ all of `app/*` (storage first, `main.js` last). Data files must load
before app files because app files reference their variables
(`plans`, `careers`, `glossaryData`, etc.) as globals. `main.js` must
load last because it runs the startup routines and needs everything
else already defined.

If you add a new script file, add its `<script src="...">` tag in
`index.html` in the right position — data before app, `main.js` always
last.

## Cache-busting — bump this on every JS/CSS change

Hostinger serves `css/style.css` and every `js/**/*.js` file with
`cache-control: public, max-age=604800` (7 days), and there's no build
step to fingerprint filenames. Without a cache-buster, a browser that
visited the site anytime in the last week keeps running week-old JS/CSS
against a freshly-deployed `index.html` — this actually happened (Aug
2026: a structural sidebar change shipped, and devices with cached
`navigation.js` rendered sections that activated internally but stayed
visually blank, because the stale JS didn't know about the new
show/hide containers). `index.html` itself isn't cached this
aggressively, so it's specifically the JS/CSS asset requests that go
stale.

Every local `<script src="js/...">` and `<link ... href="css/style.css">`
tag (in `index.html` and every `blog/*.html`) carries a `?v=YYYYMMDD`
query string. **Whenever you change any file under `js/` or
`css/style.css`, bump `?v=` to the current date on every tag that
references it** (all script tags in `index.html`, and the stylesheet
link in every `blog/*.html`) — a query-string change forces browsers to
fetch a fresh copy regardless of the 7-day cache. If you deploy more
than once on the same calendar date, the date alone isn't a new
string — append a letter suffix (`?v=20260806b`, then `c`, ...) so each
deploy still gets a distinct URL. If you forget to bump it, the
fix only reaches visitors who happen to hard-refresh.

## ⚠ The bug this structure exists to prevent

A real translation bug shipped once: switching languages updated visible
button labels but not dynamically-rendered content (glossary entries,
the updates feed), because `setLang()` in `navigation.js` didn't know
those screens existed yet — they were added in later sessions.

**If you add a screen with content that's injected via JS
(`innerHTML`/`textContent`), not just static `data-en`/`data-ht`
attributes, you must add a re-render call for it inside `setLang()` in
`navigation.js`.** Search that function for the existing pattern
(`if (document.getElementById('screen-X').classList.contains('active'))`)
and follow it.

## Adding a new state

1. Copy `js/data/states/fl.js` as a starting template (it's smaller than
   `ma.js`).
2. Research and verify every fact yourself — phone numbers, fees, agency
   names, legal requirements — against that state's actual licensing
   boards. **Never adapt another state's facts by swapping the state
   name.** Licensing rules are not portable between states.
3. Add the new state to `stateRegistry` in `navigation.js` with
   `status: 'live'` once content is ready (use `status: 'comingSoon'`
   with empty `plans`/`disclaimers`/`upgrades` objects as a placeholder
   before that).
4. Add a `<script src="js/data/states/XX.js">` tag in `index.html`,
   before the `js/app/` scripts.

## Translation system

- EN/HT/FR live inline as `data-en`/`data-ht`/`data-fr` attributes in
  `index.html`, or as `{ en: ..., ht: ..., fr: ... }` objects in JS data.
- ES/PT do NOT use `data-es`/`data-pt` attributes for most static HTML —
  `setLang()` resolves ES/PT through `staticT` in
  `js/data/translations.js`, keyed by the exact `data-en` text. If you
  add new static HTML text, add its ES/PT translation to `staticT` too,
  or it will silently fall back to English.
- ZH/AR currently only cover the FAQ, UI chrome, and general strings —
  NOT the full pathway plans or career descriptions. That's a real,
  known gap, not an oversight — see the AI's own notes from when ZH/AR
  were added.
- `langExtra` in `translations.js` deep-merges ES/PT into `plans`,
  `careers`, `ui`, `disclaimers`, and `shareMsg` at load time via
  `mergeLang()` in `navigation.js`.

## The two dormant AI features

Both `EXPLAIN_ENDPOINT` (Letter Explainer) and `FILING_HELP_ENDPOINT`
(Form Filing Help) in `js/config.js` are currently empty strings. The UI
detects this and shows an honest "not connected yet" message instead of
failing. To activate either:

1. Deploy a backend (e.g. on Railway) that accepts the POST payload
   shape each function sends (see `explainLetter()` and
   `explainFormFields()` in `js/app/ai-features.js` for the exact
   request/response shapes expected).
2. Fill in the URL in `js/config.js`.

These are deliberately separate endpoints with separate prompts. The
Letter Explainer returns free-text. Filing Help must return structured
per-field JSON and must never fill in an answer for a field that
requires legal judgment — it should flag those instead (see
`legalJudgment: true` pattern in `js/data/glossary.js` for the model to
follow).

## Analytics (GA4)

GA4 property already exists (measurement ID `G-JJT7LTX09F`) and is wired
into every page's `<head>` — `index.html` and all `blog/*.html`
files. If you add a new HTML page, copy the GA snippet from the top of
`index.html`'s `<head>` into it.

Beyond pageviews, `js/app/analytics.js` defines `trackEvent(name, params)`
— a thin wrapper around `gtag()` that never throws if GA is blocked or
not loaded. Custom events currently tracked:

- `generate_plan` — field, goal, state (someone got a pathway plan)
- `generate_upgrade` — job, state (someone got an upgrade path)
- `select_state` — which state someone switched to
- `select_coming_soon_state` — tapped a not-yet-live state; this is real
  signal for which state to build next
- `select_language` — which language someone chose
- `complete_quiz` — top_matches (which careers people actually match into)
- `share` — method (whatsapp/native), content (which plan/path was shared)

`analytics.js` must load early — after `storage.js`, before everything
else that calls `trackEvent()`. See the script order in `index.html`.

This event data is what eventually supports the B2B pitch to agencies
(real usage numbers) — see the "Best revenue path" discussion elsewhere
in project history. Don't remove these calls without replacing them.

## Blog (SEO)

`blog/` is a separate content type from Immigration Updates, and
deliberately built differently:

- **Immigration Updates** (`js/data/updates.js`) — short, dated,
  time-sensitive news, rendered client-side inside the app. Not built
  to rank in search; built for trust with people who already found you.
  New items go to the TOP of the array — nothing is ever removed, so
  the feed only grows. If you're asked to "add" an update, prepend it;
  never delete or replace an existing entry.
- **Blog** (`blog/*.html`) — long-form, evergreen, keyword-targeted,
  static HTML per post. Built to rank in search and bring new people in.

Each blog post is a standalone `.html` file (not JS-rendered) so search
engines can read it without executing anything. They reuse `css/style.css`
(the `.blog-*` classes near the bottom of that file) so they look
consistent with the rest of the site.

Posts do carry their own bilingual toggle (EN / Kreyòl / Español) — see
"Blog post translations" below — but it's a small, self-contained inline
script per post, not the SPA's `data-en`/`setLang()` system, since
English-language SEO content still needs to be crawlable without JS.

To add a new post:
1. Copy an existing post in `blog/` as a template.
2. Research the topic properly — real search queries, real competitor
   content, and verify every fact against an official source. Same
   standard as everywhere else in this project: no fabricated numbers,
   no invented requirements.
3. Set `<title>`, `<meta name="description">`, and `<link rel="canonical">`
   in the `<head>` — these are what search engines and social shares
   actually use.
4. Link back into the app somewhere relevant (the `.blog-cta` box
   pattern) — the blog's job is to bring people to the actual product,
   not just to rank on its own.
5. Add the post to `blog/index.html`'s listing, with a `data-topics`
   attribute (see "Blog topic tags" below).
6. Add its URL to `sitemap.xml`.
7. Include a `.blog-disclaimer` block and cite sources in
   `.blog-sources`, same discipline as the glossary — especially for
   any post touching immigration status or legal topics.
8. Add the bilingual toggle (see "Blog post translations" below) —
   every post should ship in EN/HT/ES from day one now, not as a
   follow-up.

### Blog post translations

Every post ships with an EN / Kreyòl / Español toggle
(`ice-ankle-monitors-atd-explained.html` is the reference
implementation). The pattern, copied verbatim into each post:

1. A `.blog-lang-toggle` button bar right after the breadcrumb:
   `<button class="lang-btn" data-blang="en" onclick="setBlogLang('en')">EN</button>`
   (and `ht`/`es` siblings, labeled `Kreyòl` / `Español`).
2. Three parallel `data-blang="en"` / `data-blang="ht" hidden` /
   `data-blang="es" hidden"` sibling blocks wrapping: the meta line +
   `<h1>` + dek together, the entire `.blog-body`, and the closing
   `.blog-disclaimer`. `.blog-sources` is left untranslated and shown
   once — bibliographic citations stay in their original language.
3. A small inline script before `</body>` (copy it as-is) that shows
   only the matching `[data-blang]` elements and reads/writes the same
   `lang` key in `localStorage` that the main SPA's `setLang()` uses
   (`js/app/navigation.js`) — so a language picked on the blog carries
   over to the app, and vice versa, without sharing any other code.

Translation rules, non-negotiable: case names, docket numbers,
statute/form citations, dollar figures, dates, and organization names
must be byte-identical across all three language blocks — only
surrounding prose gets translated. Verify tag balance (div/table/ul/
li/h2 open counts equal close counts) and that each `data-blang` value
appears exactly 4 times (1 toggle button + 3 content wrappers) before
shipping.

### Blog topic tags

Posts are tagged by **topic only** (what the post is fundamentally
about) — not by state or content-type. The known taxonomy so far:

- `tps` — Temporary Protected Status
- `career-licensing` — career/credential licensing guides (CNA, etc.)
- `forms-filing` — USCIS forms, fees, and filing mechanics
- `green-cards` — green card issuance, renewal, and replacement
- `asylum` — asylum and related humanitarian relief
- `know-your-rights` — constitutional rights during enforcement encounters
- `enforcement` — how enforcement programs/mechanisms themselves work (e.g.
  ATD/ankle monitors) — distinct from `know-your-rights`, which covers what
  to do in an encounter
- `work-permits` — not used by any post yet, but anticipated given the
  app's own feature areas (Status & Form Filling Help covers this) —
  reuse this exact slug when a post needing it is added, don't invent
  new spellings.

A post can carry more than one topic (space-separated in
`data-topics`, e.g. `data-topics="asylum green-cards"`) if it genuinely
spans more than one.

To tag a new post:
1. On its `.blog-list-item` in `blog/index.html`, set
   `data-topics="..."` to the relevant slug(s), and set the
   `.blog-list-tag` span's text to the matching human-readable label
   (e.g. `tps` → "TPS", `career-licensing` → "Career Licensing").
2. On the post's own page, set the last `<span>` in `.blog-meta` to the
   same human-readable label (append " — Breaking" there, not in the
   filter tag, if the post is time-sensitive news — that's a display
   nuance, not a filterable dimension).
3. If the post introduces a genuinely new topic not in the list above,
   add a new `<button class="blog-tag-filter-btn" data-filter="...">`
   to the `.blog-tag-filter` bar in `blog/index.html`, and add the new
   slug to the taxonomy list above so the next session doesn't
   reinvent it under a different name.

The filter bar (`#blogTagFilter` in `blog/index.html`) is small inline
JS scoped to that one page only — it toggles a `.filtered-out` class
(defined in `css/style.css`) on non-matching `.blog-list-item`s.
Individual post pages stay fully static with no JS dependency, per the
SEO rationale above.

## Content safety rules (apply everywhere, not just the glossary)

- No AI fabrication of fees, phone numbers, deadlines, or requirements —
  ever. If a fact isn't verified against an official source, it doesn't
  ship.
- The Status & Form Filling Help section is general education only —
  never case-specific advice. Every glossary page and every Immigration
  Updates item ends with a disclaimer and a link to the DOJ's
  accredited-representative finder. Keep that pattern when adding
  content.
- Immigration Updates content goes stale fast. Each item should carry a
  clear date and a live source link. Re-verify and refresh periodically
  — this is not a "write once" section.
