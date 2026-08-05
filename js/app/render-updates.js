// Rendering for the Immigration Updates feed.
// Content lives in js/data/updates.js — this file only renders it.

function renderUpdatesFeed() {
  const el = document.getElementById('updatesFeed');
  if (!el) return;
  const lang = currentLang;
  el.innerHTML = updatesData.map(u => `
    <div class="update-card">
      <div class="update-card-date">${u.date[lang] || u.date.en}</div>
      <div class="update-tags">${u.tags.map(t => `<span class="update-tag">${t}</span>`).join('')}</div>
      <h3>${u.title[lang] || u.title.en}</h3>
      <p>${u.summary[lang] || u.summary.en}</p>
      <div class="update-source">Source: <a href="${u.source.url}" target="_blank" rel="noopener">${u.source.label}</a></div>
    </div>
  `).join('');
}
