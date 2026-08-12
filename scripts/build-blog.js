#!/usr/bin/env node
// Builds blog/posts/*.md (written by /admin/) into static blog/<slug>.html
// pages matching the site's existing hand-authored blog template, then
// updates the marker-bounded regions of blog/index.html and sitemap.xml.
//
// This script NEVER touches the 11 hand-authored posts or any content
// outside the BUILD:BLOG-POSTS markers. See README.md "Blog build
// pipeline" for the full design rationale (marker-comment insertion +
// a manifest-based collision guard, chosen specifically so this script
// cannot silently drop or overwrite hand-authored content).
//
// Run with: npm run build:blog

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'blog', 'posts');
const BLOG_DIR = path.join(ROOT, 'blog');
const IMAGES_DIR = path.join(ROOT, 'blog', 'images');
const TEMPLATE_PATH = path.join(__dirname, 'templates', 'post.html');
const MANIFEST_PATH = path.join(__dirname, 'generated-posts.json');
const INDEX_PATH = path.join(BLOG_DIR, 'index.html');
const SITEMAP_PATH = path.join(ROOT, 'sitemap.xml');
const MARKER_START = '<!-- BUILD:BLOG-POSTS:START (managed by scripts/build-blog.js — do not hand-edit between these markers) -->';
const MARKER_END = '<!-- BUILD:BLOG-POSTS:END -->';

// Must match README.md's "Blog topic tags" taxonomy exactly — do not add a
// slug here without also adding it to the README and, if it needs a new
// filter button, to blog/index.html's .blog-tag-filter bar.
const TOPIC_LABELS = {
  'tps': 'TPS',
  'career-licensing': 'Career Licensing',
  'forms-filing': 'Forms & Filing',
  'green-cards': 'Green Cards',
  'asylum': 'Asylum',
  'know-your-rights': 'Know Your Rights',
  'enforcement': 'Enforcement',
  'work-permits': 'Work Permits',
};

function fail(msg) {
  console.error('BUILD FAILED: ' + msg);
  process.exit(1);
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function jsonInline(s) {
  // For embedding a string inside an already-templated JSON block —
  // escape exactly what JSON.stringify would, minus the wrapping quotes.
  return JSON.stringify(String(s)).slice(1, -1);
}

// ---- Frontmatter parsing --------------------------------------------
// Deliberately hand-rolled, not a dependency (gray-matter etc.) — the
// format is simple and both ends of the pipe (admin.js's writer, this
// reader) are code we control, so it only needs to round-trip what we
// ourselves emit. NOT a general YAML parser: no nested objects, no
// multi-line strings. Array items ARE allowed to contain commas as long
// as the item itself is quoted (e.g. source citations routinely look like
// "Org Name, 2026") — parseArrayItems below is quote-aware specifically
// because that case is common, not hypothetical.
function parseArrayItems(inner) {
  const items = [];
  const re = /\s*(?:"([^"]*)"|'([^']*)'|([^,]+))\s*(?:,|$)/g;
  let match;
  let lastIndex = 0;
  while (lastIndex < inner.length && (match = re.exec(inner))) {
    if (match.index !== lastIndex) break; // malformed — stop rather than misparse
    const val = match[1] !== undefined ? match[1] : match[2] !== undefined ? match[2] : match[3].trim();
    if (val !== '') items.push(val);
    lastIndex = re.lastIndex;
    if (match[0].length === 0) break; // safety valve against infinite loop
  }
  return items;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return null;
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!kv) continue;
    let val = kv[2].trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      val = parseArrayItems(val.slice(1, -1));
    } else if (val === 'true' || val === 'false') {
      val = val === 'true';
    } else {
      if (/^".*"$/.test(val)) {
        try { val = JSON.parse(val); } catch (e) { val = val.slice(1, -1); }
      } else {
        val = val.replace(/^'(.*)'$/, '$1');
      }
    }
    data[kv[1]] = val;
  }
  return { data, body: m[2].trim() };
}

// ---- Fallback poster SVG ----------------------------------------------
// Only used when a post has no featured_image. Same navy/gold/wordmark
// template as the hand-built posters already in images/blog/ — this is
// the brand template applied to real frontmatter (title, topic), not
// invented content.
function wrapTitleLines(title, maxCharsPerLine) {
  const words = title.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? cur + ' ' + w : w;
    if (next.length > maxCharsPerLine && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = next;
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 3); // hard cap at 3 lines — see font-size scaling below
}

function renderFallbackPosterSvg(title, topicLabel) {
  const maxCharsPerLine = 22;
  const lines = wrapTitleLines(title, maxCharsPerLine);
  const fontSize = lines.length >= 3 ? 42 : lines.length === 2 ? 50 : 58;
  const lineHeight = fontSize + 12;
  const titleStartY = 270;
  const titleTspans = lines.map((line, i) =>
    `<tspan x="78" dy="${i === 0 ? 0 : lineHeight}">${xmlEscape(line)}</tspan>`
  ).join('');
  const subtitleY = titleStartY + (lines.length - 1) * lineHeight + 60;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07101E"/>
      <stop offset="100%" stop-color="#0D1B32"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#C8922A"/>
  <circle cx="1080" cy="150" r="220" fill="#C8922A" opacity="0.06"/>
  <circle cx="1080" cy="150" r="140" fill="#C8922A" opacity="0.07"/>
  <text x="80" y="100" font-family="'DM Sans', Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="2" fill="#C8922A">CLEARIMMI</text>
  <text x="80" y="190" font-family="'JetBrains Mono', 'Courier New', monospace" font-size="20" font-weight="600" letter-spacing="3" fill="#C8922A">${xmlEscape(topicLabel.toUpperCase())}</text>
  <text x="78" y="${titleStartY}" font-family="'DM Sans', Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#F6F2EA">${titleTspans}</text>
  <rect x="80" y="${subtitleY}" width="64" height="4" rx="2" fill="#C8922A"/>
  <text x="80" y="590" font-family="'DM Sans', Arial, sans-serif" font-size="17" fill="#6B7280">clearimmi.com/blog</text>
</svg>
`;
}

// ---- Manifest ----------------------------------------------------------
function readManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) return { slugs: [] };
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

function writeManifest(manifest) {
  manifest.slugs.sort();
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
}

// ---- Main ---------------------------------------------------------------
function main() {
  const manifest = readManifest();
  const manifestSet = new Set(manifest.slugs);

  if (!fs.existsSync(POSTS_DIR)) {
    console.log('No blog/posts/ directory — nothing to build.');
    return;
  }
  // Strip the explanatory HTML comment at the top of the template file —
  // it's documentation for whoever edits scripts/templates/post.html, not
  // something that should ship in every generated page's <head>.
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8').replace(/^<!--[\s\S]*?-->\s*/, '');
  const mdFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md') && f.toLowerCase() !== 'readme.md');

  const posts = [];
  for (const file of mdFiles) {
    const filePath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = parseFrontmatter(raw);
    if (!parsed) fail(`${file}: missing or malformed frontmatter block`);
    const { data, body } = parsed;

    const required = ['title', 'slug', 'date', 'topics', 'description'];
    for (const field of required) {
      if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
        fail(`${file}: missing required frontmatter field "${field}"`);
      }
    }
    const expectedSlug = file.replace(/\.md$/, '');
    if (data.slug !== expectedSlug) {
      fail(`${file}: frontmatter slug "${data.slug}" does not match filename (expected "${expectedSlug}")`);
    }
    for (const t of data.topics) {
      if (!TOPIC_LABELS[t]) {
        fail(`${file}: unknown topic "${t}" — add it to TOPIC_LABELS in scripts/build-blog.js and README.md first`);
      }
    }
    data.draft = data.draft === true; // default false if absent/unparsed
    data.sources = Array.isArray(data.sources) ? data.sources : [];
    posts.push({ file, data, body });
  }

  // Collision guard: never let a new slug overwrite a file this script
  // doesn't already own.
  for (const { file, data } of posts) {
    if (data.draft) continue;
    const htmlPath = path.join(BLOG_DIR, `${data.slug}.html`);
    if (!manifestSet.has(data.slug) && fs.existsSync(htmlPath)) {
      fail(`${file}: blog/${data.slug}.html already exists and is not a slug this script manages (manifest: scripts/generated-posts.json). Refusing to overwrite — this is almost certainly a slug collision with a hand-authored post.`);
    }
  }

  // Remove generated output for slugs that are now draft or whose source
  // .md was deleted — only ever for manifest-owned slugs.
  const currentSlugs = new Set(posts.filter(p => !p.data.draft).map(p => p.data.slug));
  for (const slug of manifest.slugs) {
    if (!currentSlugs.has(slug)) {
      const htmlPath = path.join(BLOG_DIR, `${slug}.html`);
      const imgDir = path.join(IMAGES_DIR, slug);
      if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
      if (fs.existsSync(imgDir)) fs.rmSync(imgDir, { recursive: true, force: true });
    }
  }

  // Build published posts.
  const published = posts.filter(p => !p.data.draft);
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  for (const { data, body } of published) {
    const wordCount = body.split(/\s+/).filter(Boolean).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));
    const [y, mo, d] = data.date.split('-').map(Number);
    const dateHuman = `${monthNames[mo - 1]} ${d}, ${y}`;

    let imageRelSrc, imageAbsUrl, imageAlt;
    if (data.featured_image) {
      imageRelSrc = '../' + data.featured_image.replace(/^\/+/, '');
      imageAbsUrl = 'https://clearimmi.com/' + data.featured_image.replace(/^\/+/, '');
      imageAlt = data.featured_image_alt || data.title;
    } else {
      const primaryLabel = TOPIC_LABELS[data.topics[0]];
      const svg = renderFallbackPosterSvg(data.title, primaryLabel);
      const imgDir = path.join(IMAGES_DIR, data.slug);
      fs.mkdirSync(imgDir, { recursive: true });
      fs.writeFileSync(path.join(imgDir, 'poster.svg'), svg);
      imageRelSrc = `../images/blog/${data.slug}/poster.svg`;
      imageAbsUrl = `https://clearimmi.com/images/blog/${data.slug}/poster.svg`;
      imageAlt = data.title;
    }

    let bodyHtml = marked.parse(body);
    bodyHtml = bodyHtml
      .replace(/<table>/g, '<div class="blog-table-wrap"><table class="blog-table">')
      .replace(/<\/table>/g, '</table></div>');

    let sourcesBlock = '';
    if (data.sources.length) {
      sourcesBlock = `  <div class="blog-sources">\n    <strong>Sources:</strong> ${data.sources.map(xmlEscape).join(' · ')}\n  </div>\n`;
    }

    const primaryTopicLabel = TOPIC_LABELS[data.topics[0]];
    const keywords = data.topics.map(t => TOPIC_LABELS[t]).join(', ');

    let html = template
      .replaceAll('{{TITLE}}', xmlEscape(data.title))
      .replaceAll('{{TITLE_JSON}}', jsonInline(data.title))
      .replaceAll('{{DESCRIPTION}}', xmlEscape(data.description))
      .replaceAll('{{DESCRIPTION_JSON}}', jsonInline(data.description))
      .replaceAll('{{SLUG}}', data.slug)
      .replaceAll('{{DATE}}', data.date)
      .replaceAll('{{DATE_HUMAN}}', dateHuman)
      .replaceAll('{{READ_TIME}}', String(readTime))
      .replaceAll('{{PRIMARY_TOPIC_LABEL}}', xmlEscape(primaryTopicLabel))
      .replaceAll('{{PRIMARY_TOPIC_LABEL_JSON}}', jsonInline(primaryTopicLabel))
      .replaceAll('{{KEYWORDS_JSON}}', jsonInline(keywords))
      .replaceAll('{{IMAGE_REL_SRC}}', xmlEscape(imageRelSrc))
      .replaceAll('{{IMAGE_ABS_URL}}', xmlEscape(imageAbsUrl))
      .replaceAll('{{IMAGE_ALT}}', xmlEscape(imageAlt))
      .replace('{{BODY_HTML}}', bodyHtml)
      .replace('{{SOURCES_BLOCK}}', sourcesBlock);

    fs.writeFileSync(path.join(BLOG_DIR, `${data.slug}.html`), html);
  }

  // Reverse-chronological.
  published.sort((a, b) => (a.data.date < b.data.date ? 1 : a.data.date > b.data.date ? -1 : 0));

  // blog/index.html listing fragment.
  const listingHtml = published.map(({ data }) => {
    const primaryLabel = TOPIC_LABELS[data.topics[0]];
    return `  <a class="blog-list-item" href="${data.slug}.html" data-topics="${xmlEscape(data.topics.join(' '))}">
    <span class="blog-list-tag">${xmlEscape(primaryLabel)}</span>
    <h3>${xmlEscape(data.title)}</h3>
    <p>${xmlEscape(data.description)}</p>
  </a>`;
  }).join('\n\n');
  replaceMarkerRegion(INDEX_PATH, listingHtml);

  // sitemap.xml fragment.
  const sitemapHtml = published.map(({ data }) => {
    return `  <url>
    <loc>https://clearimmi.com/blog/${data.slug}.html</loc>
    <lastmod>${data.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('\n');
  replaceMarkerRegion(SITEMAP_PATH, sitemapHtml);

  writeManifest({ slugs: published.map(p => p.data.slug) });

  console.log(`Build complete: ${published.length} published, ${posts.length - published.length} draft/skipped.`);
  if (published.length) console.log('Slugs: ' + published.map(p => p.data.slug).join(', '));
}

function replaceMarkerRegion(filePath, replacementHtml) {
  const content = fs.readFileSync(filePath, 'utf8');
  const startIdx = content.indexOf(MARKER_START);
  const endIdx = content.indexOf(MARKER_END);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    fail(`${path.relative(ROOT, filePath)}: BUILD:BLOG-POSTS markers not found — refusing to fall back to full-file regeneration. Restore the marker comments (see README.md "Blog build pipeline") before running this script.`);
  }
  const before = content.slice(0, startIdx + MARKER_START.length);
  const after = content.slice(endIdx);
  const middle = replacementHtml ? `\n${replacementHtml}\n  ` : '\n  ';
  fs.writeFileSync(filePath, before + middle + after);
}

main();
