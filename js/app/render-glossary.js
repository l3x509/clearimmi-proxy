// Rendering for the Status & Form Filling Help glossary screens.
// Content lives in js/data/glossary.js — this file only renders it.

let currentGlossaryEntry = null;

let glossaryView = 'simple';

const glossaryUi = {
  statusEyebrow: { en: "Status Type", ht: "Tip Estati", fr: "Type de Statut" },
  formEyebrow: { en: "Form", ht: "Fòm", fr: "Formulaire" },
  asOf: { en: "As of Aug 4, 2026", ht: "Kòm Out 4, 2026", fr: "Au 4 août 2026" },
  sourcesLabel: { en: "Sources: ", ht: "Sous: ", fr: "Sources : " },
  formPurpose: { en: "What it's for", ht: "Pou kisa li ye", fr: "À quoi ça sert" },
  fieldsExplained: { en: "Key fields explained", ht: "Prensipal chan eksplike", fr: "Champs clés expliqués" },
  legalJudgment: { en: "⚠ This needs a real person, not a guess", ht: "⚠ Sa bezwen yon vrè moun, pa yon devinèt", fr: "⚠ Ceci nécessite une vraie personne, pas une supposition" }
};

function renderGlossaryIndex() {
  const lang = currentLang;
  const statusList = document.getElementById('glossaryStatusList');
  const formsList = document.getElementById('glossaryFormsList');
  if (statusList) {
    statusList.innerHTML = glossaryData.status.map(e => `
      <button class="glossary-item" onclick="openGlossaryEntry('status','${e.id}')">
        <span class="glossary-item-icon">${e.icon}</span>
        <span class="glossary-item-body">
          <span class="glossary-item-title">${e.title[lang] || e.title.en}</span>
          <span class="glossary-item-sub">${e.subtitle[lang] || e.subtitle.en}</span>
        </span>
        <span class="intent-arrow">›</span>
      </button>`).join('');
  }
  if (formsList) {
    formsList.innerHTML = glossaryData.forms.map(e => `
      <button class="glossary-item" onclick="openGlossaryEntry('forms','${e.id}')">
        <span class="glossary-item-icon">${e.icon}</span>
        <span class="glossary-item-body">
          <span class="glossary-item-title">${e.title[lang] || e.title.en}</span>
          <span class="glossary-item-sub">${e.subtitle[lang] || e.subtitle.en}</span>
        </span>
        <span class="intent-arrow">›</span>
      </button>`).join('');
  }
}

function openGlossaryEntry(category, id) {
  const list = glossaryData[category];
  const entry = list.find(e => e.id === id);
  if (!entry) return;
  currentGlossaryEntry = entry;
  const lang = currentLang;

  document.getElementById('glossaryEntryEyebrow').textContent = category === 'status'
    ? (glossaryUi.statusEyebrow[lang] || glossaryUi.statusEyebrow.en)
    : (glossaryUi.formEyebrow[lang] || glossaryUi.formEyebrow.en);
  document.getElementById('glossaryEntryTitle').textContent = entry.title[lang] || entry.title.en;
  document.getElementById('glossaryEntryDate').textContent = glossaryUi.asOf[lang] || glossaryUi.asOf.en;

  const volEl = document.getElementById('glossaryEntryVolatility');
  if (entry.volatile && entry.volatilityNote) {
    volEl.innerHTML = `<div class="volatility-warning">⚠️ ${entry.volatilityNote[lang] || entry.volatilityNote.en}</div>`;
  } else {
    volEl.innerHTML = '';
  }

  const formFieldsEl = document.getElementById('glossaryFormFields');
  const simpleEl = document.getElementById('glossarySimpleView');
  const fullEl = document.getElementById('glossaryFullView');
  const toggleEl = document.querySelector('.glossary-view-toggle');

  if (category === 'forms') {
    // Forms use a fixed layout: purpose + field-by-field, no simple/full toggle
    toggleEl.style.display = 'none';
    simpleEl.style.display = 'none';
    fullEl.style.display = 'none';
    formFieldsEl.innerHTML = `
      <div class="glossary-cat-label" style="margin-top:0;">${glossaryUi.formPurpose[lang] || glossaryUi.formPurpose.en}</div>
      <p class="full-text-body">${entry.purpose[lang] || entry.purpose.en}</p>
      <div class="glossary-cat-label">${glossaryUi.fieldsExplained[lang] || glossaryUi.fieldsExplained.en}</div>
      ${entry.fields.map(f => `
        <div class="form-field-item">
          <div class="field-name">${f.name[lang] || f.name.en}</div>
          <div class="field-explain">${f.explain[lang] || f.explain.en}</div>
          ${f.legalJudgment ? `<div class="legal-judgment-flag">${glossaryUi.legalJudgment[lang] || glossaryUi.legalJudgment.en}</div>` : ''}
        </div>`).join('')}
      <button class="form-help-cta" onclick="openFilingHelp('${entry.id}')">
        <span class="form-help-cta-icon">✍️</span>
        <span class="form-help-cta-body">
          <h4>${filingHelpUi.ctaTitle[lang] || filingHelpUi.ctaTitle.en}</h4>
          <p>${filingHelpUi.ctaSub[lang] || filingHelpUi.ctaSub.en}</p>
        </span>
        <span class="form-help-cta-arrow">›</span>
      </button>
    `;
  } else {
    toggleEl.style.display = 'flex';
    formFieldsEl.innerHTML = '';
    setGlossaryView(glossaryView);
  }

  document.getElementById('glossaryEntrySources').textContent = (glossaryUi.sourcesLabel[lang] || glossaryUi.sourcesLabel.en) + entry.sources;
  showScreen('screen-glossary-entry');
}

function setGlossaryView(view) {
  glossaryView = view;
  if (!currentGlossaryEntry || !currentGlossaryEntry.simple) return;
  const lang = currentLang;
  document.getElementById('viewSimpleBtn').classList.toggle('active', view === 'simple');
  document.getElementById('viewFullBtn').classList.toggle('active', view === 'full');
  const simpleEl = document.getElementById('glossarySimpleView');
  const fullEl = document.getElementById('glossaryFullView');
  if (view === 'simple') {
    simpleEl.style.display = 'block';
    fullEl.style.display = 'none';
    simpleEl.innerHTML = (currentGlossaryEntry.simple[lang] || currentGlossaryEntry.simple.en).map(p => `<li>${p}</li>`).join('');
  } else {
    simpleEl.style.display = 'none';
    fullEl.style.display = 'block';
    fullEl.textContent = currentGlossaryEntry.full[lang] || currentGlossaryEntry.full.en;
  }
}
