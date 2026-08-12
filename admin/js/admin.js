// ClearImmi blog admin panel.
//
// No framework, no backend, no database. This page talks directly to the
// GitHub Contents API using a token pasted in by hand and stored only in
// localStorage. It commits blog/posts/<slug>.md files to the repo; a
// GitHub Action (.github/workflows/build-blog.yml) then builds those into
// static blog/<slug>.html pages. See README.md "Blog build pipeline" for
// the full design.
//
// SECURITY NOTE, stated plainly rather than buried: this page is reachable
// by anyone who knows the URL (it's excluded from robots.txt but that is
// obscurity, not access control). Nobody can save or edit anything without
// pasting in a valid GitHub token scoped to this repo — the token never
// leaves this browser except in requests to api.github.com, and is never
// logged. That is the entire security model. It is an accepted tradeoff
// for a single-admin static site, not an oversight.

(function () {
  'use strict';

  const OWNER = 'l3x509';
  const REPO = 'clearimmi-proxy';
  const BRANCH = 'main';
  const POSTS_PATH = 'blog/posts';
  const API_BASE = 'https://api.github.com';
  const TOKEN_KEY = 'clearimmi_admin_token';

  // Must exactly match TOPIC_LABELS in scripts/build-blog.js and the
  // taxonomy documented in README.md — do not edit one without the others.
  const TOPICS = [
    ['tps', 'TPS'],
    ['career-licensing', 'Career Licensing'],
    ['forms-filing', 'Forms & Filing'],
    ['green-cards', 'Green Cards'],
    ['asylum', 'Asylum'],
    ['know-your-rights', 'Know Your Rights'],
    ['enforcement', 'Enforcement'],
    ['work-permits', 'Work Permits'],
  ];

  const app = document.getElementById('app');

  // ---- Token storage --------------------------------------------------
  function getToken() {
    try { return localStorage.getItem(TOKEN_KEY) || ''; } catch (e) { return ''; }
  }
  function setToken(t) {
    try { localStorage.setItem(TOKEN_KEY, t); } catch (e) {}
  }
  function clearToken() {
    try { localStorage.removeItem(TOKEN_KEY); } catch (e) {}
  }

  // ---- GitHub Contents API ---------------------------------------------
  async function ghRequest(path, options) {
    options = options || {};
    const res = await fetch(API_BASE + path, {
      method: options.method || 'GET',
      headers: Object.assign({
        'Authorization': 'Bearer ' + getToken(),
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      }, options.headers || {}),
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    return res;
  }

  async function ghGetFile(repoPath) {
    const res = await ghRequest(`/repos/${OWNER}/${REPO}/contents/${repoPath}?ref=${BRANCH}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub API error ${res.status} reading ${repoPath}`);
    const json = await res.json();
    return { content: b64DecodeUtf8(json.content), sha: json.sha };
  }

  async function ghListDir(repoPath) {
    const res = await ghRequest(`/repos/${OWNER}/${REPO}/contents/${repoPath}?ref=${BRANCH}`);
    if (res.status === 404) return [];
    if (!res.ok) throw new Error(`GitHub API error ${res.status} listing ${repoPath}`);
    const json = await res.json();
    return Array.isArray(json) ? json : [];
  }

  async function ghPutFile(repoPath, contentUtf8, message, sha) {
    const body = {
      message,
      content: b64EncodeUtf8(contentUtf8),
      branch: BRANCH,
    };
    if (sha) body.sha = sha;
    const res = await ghRequest(`/repos/${OWNER}/${REPO}/contents/${repoPath}`, { method: 'PUT', body });
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(`GitHub API error ${res.status}: ${errJson.message || 'save failed'}`);
    }
    return res.json();
  }

  async function ghPutBinaryFile(repoPath, base64Content, message, sha) {
    const body = { message, content: base64Content, branch: BRANCH };
    if (sha) body.sha = sha;
    const res = await ghRequest(`/repos/${OWNER}/${REPO}/contents/${repoPath}`, { method: 'PUT', body });
    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(`GitHub API error ${res.status}: ${errJson.message || 'image upload failed'}`);
    }
    return res.json();
  }

  function b64DecodeUtf8(b64) {
    const binary = atob(b64.replace(/\n/g, ''));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
  }
  function b64EncodeUtf8(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  // ---- Frontmatter (must round-trip exactly with scripts/build-blog.js) --
  function serializeArray(items, quoteEach) {
    return '[' + items.map(s => quoteEach ? JSON.stringify(s) : s).join(', ') + ']';
  }

  function buildMarkdown(post) {
    const lines = ['---'];
    lines.push(`title: ${JSON.stringify(post.title)}`);
    lines.push(`slug: ${post.slug}`);
    lines.push(`date: ${post.date}`);
    lines.push(`topics: ${serializeArray(post.topics, false)}`);
    lines.push(`description: ${JSON.stringify(post.description)}`);
    lines.push('author: ClearImmi Team');
    if (post.featured_image) {
      lines.push(`featured_image: ${post.featured_image}`);
      lines.push(`featured_image_alt: ${JSON.stringify(post.featured_image_alt || post.title)}`);
    }
    if (post.sources && post.sources.length) {
      lines.push(`sources: ${serializeArray(post.sources, true)}`);
    }
    lines.push(`draft: ${post.draft ? 'true' : 'false'}`);
    lines.push('---');
    lines.push('');
    lines.push(post.body || '');
    return lines.join('\n') + '\n';
  }

  // Quote-aware array parser — mirrors parseArrayItems in scripts/build-blog.js.
  function parseArrayItems(inner) {
    const items = [];
    const re = /\s*(?:"([^"]*)"|'([^']*)'|([^,]+))\s*(?:,|$)/g;
    let match, lastIndex = 0;
    while (lastIndex < inner.length && (match = re.exec(inner))) {
      if (match.index !== lastIndex) break;
      const val = match[1] !== undefined ? match[1] : match[2] !== undefined ? match[2] : match[3].trim();
      if (val !== '') items.push(val);
      lastIndex = re.lastIndex;
      if (match[0].length === 0) break;
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

  // ---- Utilities --------------------------------------------------------
  function slugify(s) {
    return s.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function compressImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = () => { img.src = reader.result; };
      reader.onerror = reject;
      img.onload = () => {
        const maxW = 1600;
        const scale = Math.min(1, maxW / img.width);
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        resolve({ base64: dataUrl.split(',')[1], dataUrl });
      };
      img.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Deliberately not loading marked.js (or any third-party script) into
  // this page — it holds a GitHub token in memory/localStorage, and that's
  // not a page to add a new trust surface to. This preview only needs to
  // be close enough for the author to gauge structure; the real HTML
  // always comes from the Action's server-side marked pass.
  function roughMarkdownPreview(md) {
    let html = md
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*)$/gm, '<h1>$1</h1>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    html = html.split(/\n{2,}/).map(block => {
      if (/^<h[1-3]>/.test(block)) return block;
      if (/^- /.test(block)) {
        const items = block.split('\n').filter(l => l.startsWith('- ')).map(l => `<li>${l.slice(2)}</li>`).join('');
        return `<ul>${items}</ul>`;
      }
      if (/^\|/.test(block)) return '<p><em>(table — see real preview after publish)</em></p>';
      return block.trim() ? `<p>${block.trim().replace(/\n/g, '<br>')}</p>` : '';
    }).join('\n');
    return html;
  }

  // ---- App state ----------------------------------------------------
  let state = { screen: 'auth', posts: null, editing: null, statusMsg: null };

  function setStatus(msg, isErr) {
    state.statusMsg = msg ? { text: msg, isErr: !!isErr } : null;
  }

  // ---- Screens ----------------------------------------------------------
  function renderAuthScreen() {
    app.innerHTML = `
      <div class="admin-card">
        <h2 style="margin-top:0;">Sign in</h2>
        <div class="admin-notice">
          Paste a <strong>fine-grained GitHub Personal Access Token</strong>
          scoped to <strong>this repository only</strong>, with
          <strong>Contents: Read and write</strong> permission — nothing
          broader. It's stored only in this browser's localStorage and is
          only ever sent to api.github.com. This page is reachable by
          anyone who knows the URL, but nothing can be saved without a
          valid token — that's obscurity, not real access control, and
          that's an accepted tradeoff for a single-admin site.
        </div>
        <div class="admin-field">
          <label for="tokenInput">GitHub token</label>
          <input type="password" id="tokenInput" class="admin-input" placeholder="github_pat_...">
        </div>
        <button class="admin-btn admin-btn-primary" id="tokenSaveBtn">Continue</button>
        ${renderStatus()}
      </div>`;
    document.getElementById('tokenSaveBtn').addEventListener('click', async () => {
      const val = document.getElementById('tokenInput').value.trim();
      if (!val) return;
      setToken(val);
      setStatus('Checking token…');
      render();
      const ok = await verifyTokenAndLoad();
      if (!ok) { clearToken(); setStatus('Could not verify token — check it has Contents read/write on this repo.', true); state.screen = 'auth'; render(); }
    });
  }

  async function verifyTokenAndLoad() {
    try {
      const res = await ghRequest(`/repos/${OWNER}/${REPO}`);
      if (!res.ok) return false;
      await loadPostList();
      state.screen = 'list';
      setStatus(null);
      render();
      return true;
    } catch (e) {
      return false;
    }
  }

  async function loadPostList() {
    const files = await ghListDir(POSTS_PATH);
    const posts = [];
    for (const f of files) {
      if (!f.name.endsWith('.md') || f.name.toLowerCase() === 'readme.md') continue;
      const file = await ghGetFile(`${POSTS_PATH}/${f.name}`);
      if (!file) continue;
      const parsed = parseFrontmatter(file.content);
      if (!parsed) continue;
      posts.push({ filename: f.name, data: parsed.data, body: parsed.body, sha: file.sha });
    }
    posts.sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
    state.posts = posts;
  }

  function renderStatus() {
    if (!state.statusMsg) return '';
    return `<div class="admin-status-msg ${state.statusMsg.isErr ? 'err' : 'ok'}">${escapeHtml(state.statusMsg.text)}</div>`;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function renderListScreen() {
    const rows = (state.posts || []).map((p, i) => `
      <div class="admin-list-row">
        <div>
          <div class="admin-list-row-title">${escapeHtml(p.data.title)}
            <span class="admin-badge ${p.data.draft ? 'admin-badge-draft' : 'admin-badge-published'}">${p.data.draft ? 'Draft' : 'Published'}</span>
          </div>
          <div class="admin-list-row-meta">${escapeHtml(p.data.date)} · ${escapeHtml((p.data.topics || []).join(', '))}</div>
        </div>
        <button class="admin-btn" data-edit-index="${i}">Edit</button>
      </div>`).join('');

    app.innerHTML = `
      <div class="admin-header">
        <div class="admin-brand">CLEARIMMI ADMIN</div>
        <div class="admin-header-actions">
          <button class="admin-btn" id="newPostBtn">+ New Post</button>
          <button class="admin-btn" id="logoutBtn">Sign out</button>
        </div>
      </div>
      ${renderStatus()}
      <div class="admin-card">
        <h2 style="margin-top:0;">Posts</h2>
        ${rows || '<div class="admin-empty">No posts yet. Click "+ New Post" to write one.</div>'}
      </div>
      <div class="admin-notice">
        Only posts created through this panel (in <code>blog/posts/</code>)
        show up here. The site's original hand-written posts aren't managed
        by this tool and won't appear in this list.
      </div>`;

    document.getElementById('newPostBtn').addEventListener('click', () => {
      state.editing = null;
      state.screen = 'form';
      render();
    });
    document.getElementById('logoutBtn').addEventListener('click', () => {
      clearToken();
      state = { screen: 'auth', posts: null, editing: null, statusMsg: null };
      render();
    });
    app.querySelectorAll('[data-edit-index]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.editing = state.posts[Number(btn.dataset.editIndex)];
        state.screen = 'form';
        render();
      });
    });
  }

  function renderFormScreen() {
    const editing = state.editing;
    const data = editing ? editing.data : {};
    const topics = data.topics || [];
    const sources = data.sources || [];
    const today = new Date().toISOString().slice(0, 10);

    const topicChips = TOPICS.map(([slug, label]) =>
      `<button type="button" class="admin-topic-chip ${topics.includes(slug) ? 'active' : ''}" data-topic="${slug}">${label}</button>`
    ).join('');

    const sourceRows = (sources.length ? sources : ['']).map(s => `
      <div class="admin-sources-row">
        <input type="text" class="admin-input source-input" value="${escapeHtml(s)}" placeholder="e.g. USCIS — Form I-765 Instructions, 2026">
        <button type="button" class="admin-btn removeSourceBtn">×</button>
      </div>`).join('');

    app.innerHTML = `
      <div class="admin-header">
        <div class="admin-brand">CLEARIMMI ADMIN</div>
        <button class="admin-btn" id="backBtn">← Back to posts</button>
      </div>
      ${renderStatus()}
      <div class="admin-card">
        <div class="admin-form-grid">
          <div class="admin-field">
            <label for="fTitle">Title</label>
            <input type="text" id="fTitle" class="admin-input" value="${escapeHtml(data.title || '')}">
          </div>
          <div class="admin-field">
            <label for="fSlug">Slug</label>
            <input type="text" id="fSlug" class="admin-input" value="${escapeHtml(data.slug || '')}" ${editing ? '' : ''}>
            <div class="admin-hint">Used in the URL — becomes /blog/&lt;slug&gt;.html. Auto-fills from title for new posts.</div>
          </div>
        </div>
        <div class="admin-form-grid">
          <div class="admin-field">
            <label for="fDate">Date</label>
            <input type="date" id="fDate" class="admin-input" value="${data.date || today}">
          </div>
          <div class="admin-field">
            <label for="fImage">Featured image (optional)</label>
            <input type="file" id="fImage" class="admin-input" accept="image/*">
            <div class="admin-hint">Resized client-side to max 1600px wide. If left empty, a branded poster image is generated automatically.</div>
            ${data.featured_image ? `<img class="admin-image-preview" id="fImagePreview" alt="">` : `<img class="admin-image-preview" id="fImagePreview" alt="" style="display:none;">`}
          </div>
        </div>
        <div class="admin-field">
          <label>Topics</label>
          <div class="admin-topics" id="fTopics">${topicChips}</div>
        </div>
        <div class="admin-field">
          <label for="fDescription">Description (SEO meta / dek, 1–2 sentences)</label>
          <textarea id="fDescription" class="admin-textarea" rows="2" style="font-family:inherit;">${escapeHtml(data.description || '')}</textarea>
        </div>
        <div class="admin-field">
          <label>Sources</label>
          <div id="fSources">${sourceRows}</div>
          <button type="button" class="admin-btn" id="addSourceBtn">+ Add source</button>
        </div>
        <div class="admin-form-grid">
          <div class="admin-field">
            <label for="fBody">Body (Markdown)</label>
            <textarea id="fBody" class="admin-textarea admin-textarea-body">${escapeHtml(editing ? editing.body : '')}</textarea>
          </div>
          <div class="admin-field">
            <label>Preview</label>
            <div class="admin-preview-pane" id="fPreview"></div>
          </div>
        </div>
        <div style="display:flex; gap:10px; margin-top:8px;">
          <button class="admin-btn" id="saveDraftBtn">Save Draft</button>
          <button class="admin-btn admin-btn-primary" id="publishBtn">Publish</button>
        </div>
      </div>`;

    let slugTouched = !!editing;
    let imageUpload = null; // { base64, dataUrl, filename } once picked

    document.getElementById('backBtn').addEventListener('click', () => { state.screen = 'list'; render(); });

    const titleEl = document.getElementById('fTitle');
    const slugEl = document.getElementById('fSlug');
    titleEl.addEventListener('input', () => {
      if (!slugTouched) slugEl.value = slugify(titleEl.value);
    });
    slugEl.addEventListener('input', () => { slugTouched = true; });

    app.querySelectorAll('.admin-topic-chip').forEach(chip => {
      chip.addEventListener('click', () => chip.classList.toggle('active'));
    });

    function bindSourceRow(row) {
      row.querySelector('.removeSourceBtn').addEventListener('click', () => {
        if (document.querySelectorAll('.admin-sources-row').length > 1) row.remove();
        else row.querySelector('.source-input').value = '';
      });
    }
    document.querySelectorAll('.admin-sources-row').forEach(bindSourceRow);
    document.getElementById('addSourceBtn').addEventListener('click', () => {
      const div = document.createElement('div');
      div.className = 'admin-sources-row';
      div.innerHTML = `<input type="text" class="admin-input source-input" placeholder="e.g. USCIS — Form I-765 Instructions, 2026"><button type="button" class="admin-btn removeSourceBtn">×</button>`;
      document.getElementById('fSources').appendChild(div);
      bindSourceRow(div);
    });

    const bodyEl = document.getElementById('fBody');
    const previewEl = document.getElementById('fPreview');
    function updatePreview() { previewEl.innerHTML = roughMarkdownPreview(bodyEl.value); }
    bodyEl.addEventListener('input', updatePreview);
    updatePreview();

    const imageInput = document.getElementById('fImage');
    const imagePreview = document.getElementById('fImagePreview');
    if (data.featured_image) imagePreview.src = '../' + data.featured_image;
    imageInput.addEventListener('change', async () => {
      const file = imageInput.files[0];
      if (!file) return;
      const { base64, dataUrl } = await compressImage(file);
      imageUpload = { base64, filename: file.name.replace(/[^a-zA-Z0-9.\-]/g, '-').replace(/\.[^.]+$/, '.jpg') };
      imagePreview.src = dataUrl;
      imagePreview.style.display = 'block';
    });

    function collectForm() {
      const topics = Array.from(document.querySelectorAll('.admin-topic-chip.active')).map(c => c.dataset.topic);
      const sources = Array.from(document.querySelectorAll('.source-input')).map(i => i.value.trim()).filter(Boolean);
      return {
        title: titleEl.value.trim(),
        slug: slugEl.value.trim(),
        date: document.getElementById('fDate').value,
        topics,
        description: document.getElementById('fDescription').value.trim(),
        sources,
        body: bodyEl.value,
        featured_image: data.featured_image || '',
        featured_image_alt: data.featured_image_alt || '',
      };
    }

    async function save(draft) {
      const post = collectForm();
      if (!post.title || !post.slug || !post.date || !post.description || post.topics.length === 0) {
        setStatus('Title, slug, date, description, and at least one topic are required.', true);
        render();
        return;
      }
      setStatus((draft ? 'Saving draft' : 'Publishing') + '…');
      render();
      try {
        if (imageUpload) {
          const imgPath = `blog/images/${post.slug}/${imageUpload.filename}`;
          await ghPutBinaryFile(imgPath, imageUpload.base64, `Add featured image for ${post.slug}`);
          post.featured_image = imgPath;
          post.featured_image_alt = post.title;
        }
        post.draft = draft;
        const md = buildMarkdown(post);
        const path = `${POSTS_PATH}/${post.slug}.md`;
        const existingSha = editing && editing.data.slug === post.slug ? editing.sha : null;
        let sha = existingSha;
        if (!sha) {
          const existing = await ghGetFile(path);
          if (existing) sha = existing.sha; // editing under a changed filename edge case, or re-saving
        }
        await ghPutFile(path, md, `${sha ? 'Update' : 'Create'} post: ${post.title}`, sha);
        setStatus(`Saved. ${draft ? 'Still a draft — it' : 'Your post'} will be live at /blog/${post.slug}.html within about a minute, once the build finishes.`);
        await loadPostList();
        state.screen = 'list';
        render();
      } catch (e) {
        setStatus('Save failed: ' + e.message, true);
        render();
      }
    }

    document.getElementById('saveDraftBtn').addEventListener('click', () => save(true));
    document.getElementById('publishBtn').addEventListener('click', () => save(false));
  }

  function render() {
    if (state.screen === 'auth') renderAuthScreen();
    else if (state.screen === 'list') renderListScreen();
    else if (state.screen === 'form') renderFormScreen();
  }

  // ---- Boot ---------------------------------------------------------
  (async function boot() {
    if (getToken()) {
      state.screen = 'list';
      render();
      const ok = await verifyTokenAndLoad();
      if (!ok) {
        clearToken();
        state = { screen: 'auth', posts: null, editing: null, statusMsg: { text: 'Saved token no longer works — please sign in again.', isErr: true } };
        render();
      }
    } else {
      render();
    }
  })();
})();
