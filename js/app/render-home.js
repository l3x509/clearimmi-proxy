// Homepage widgets: the FAQ accordion and the dynamic stats bar
// ('11 plans · 8 upgrade paths · 28 careers · 5 languages').
// FAQ content lives in js/data/faq.js — this file only renders it.

const statsUi = {
  plans: { en: "step-by-step plans", ht: "plan etap pa etap", fr: "plans étape par étape", es: "planes paso a paso", pt: "planos passo a passo", zh: "分步计划", ar: "خطط خطوة بخطوة" },
  upgrades: { en: "upgrade paths", ht: "chemen monte", fr: "parcours de progression", es: "caminos de avance", pt: "caminhos de avanço", zh: "晋升路径", ar: "مسارات الترقية" },
  careers: { en: "careers", ht: "karyè", fr: "carrières", es: "carreras", pt: "carreiras", zh: "职业", ar: "مهن" },
  languages: { en: "languages", ht: "lang", fr: "langues", es: "idiomas", pt: "idiomas", zh: "语言", ar: "لغات" }
};

function renderFAQ(containerId, type) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const lang = currentLang;
  const data = faqData[type] || faqData.plan;
  const heading = data.heading[lang] || data.heading.en;
  let html = '<div class="faq-section"><div class="faq-heading">' + heading + '</div>';
  data.items.forEach((item, i) => {
    const q = item.q[lang] || item.q.en;
    const a = item.a[lang] || item.a.en;
    html += '<div class="faq-item">' +
      '<button class="faq-q" onclick="toggleFAQ(this)" aria-expanded="false">' +
        '<span>' + q + '</span><span class="faq-chevron">›</span>' +
      '</button>' +
      '<div class="faq-a" role="region">' + a + '</div>' +
    '</div>';
  });
  html += '</div>';
  el.innerHTML = html;
}

function toggleFAQ(btn) {
  const a = btn.nextElementSibling;
  const open = a.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
}

function renderStatsBar() {
  const bar = document.getElementById('statsBar');
  if (!bar) return;
  const lang = currentLang;
  const statePlans = getStatePlans();
  let planCount = 0;
  Object.keys(statePlans).forEach(f => { planCount += Object.keys(statePlans[f]).length; });
  const upgradeCount = Object.keys(getStateUpgrades()).length;
  const careerCount = careers.length;
  const langCount = 5;
  const dot = '<span class="stat-dot">·</span>';
  bar.innerHTML =
    `<span><b>${planCount}</b> ${statsUi.plans[lang] || statsUi.plans.en}</span>${dot}` +
    `<span><b>${upgradeCount}</b> ${statsUi.upgrades[lang] || statsUi.upgrades.en}</span>${dot}` +
    `<span><b>${careerCount}</b> ${statsUi.careers[lang] || statsUi.careers.en}</span>${dot}` +
    `<span><b>${langCount}</b> ${statsUi.languages[lang] || statsUi.languages.en}</span>`;
}
