// Screen switching, language switching, and state (MA/FL/...) switching.
// This is the file that owns setLang() — if you add a screen with content
// that's rendered dynamically (not just data-en/data-ht attributes), you
// MUST add a re-render call for it inside setLang() here, or it will show
// stale-language content when someone switches languages mid-session.
// (This exact bug shipped once already — see the screen-glossary-entry
// and screen-updates checks below for the pattern to follow.)

let currentLang = 'en';

let currentField = null;

let currentGoalKey = null;

const ui = {
  completedStep: { en: "I've completed this step", ht: "Mwen fini etap sa a", fr: "J'ai terminé cette étape" },
  writeLetter: { en: "✎ Write this request letter for me", ht: "✎ Jenere lèt demann lan pou mwen", fr: "✎ Rédiger cette lettre de demande pour moi" },
  seePathway: { en: "See the full pathway →", ht: "Wè chemen konplè a →", fr: "Voir le parcours complet →" },
  comingSoon: { en: "Detailed pathway coming soon", ht: "Chemen detaye ap vini byento", fr: "Parcours détaillé bientôt disponible" },
  pasteFirst: { en: "Please paste your letter text or take a photo above.", ht: "Tanpri kole tèks lèt ou a oswa pran yon foto anwo a.", fr: "Veuillez coller le texte de votre lettre ou prendre une photo ci-dessus." },
  notConnected: { en: "This feature is coming soon — the explanation server is not yet connected.", ht: "Fonksyon sa a ap vini byento — sèvè eksplikasyon an poko konekte.", fr: "Cette fonction arrive bientôt — le serveur d'explication n'est pas encore connecté." },
  analyzing: { en: "Analyzing your letter...", ht: "Ap analize lèt ou a...", fr: "Analyse de votre lettre en cours..." },
  errorTry: { en: "Something went wrong. Please try again.", ht: "Yon erè rive. Eseye ankò.", fr: "Une erreur est survenue. Veuillez réessayer." },
  copied: { en: "Copied! ✓", ht: "Kopye! ✓", fr: "Copié ! ✓" },
  copyLetter: { en: "Copy letter", ht: "Kopye lèt la", fr: "Copier la lettre" }
};

const stateRegistry = {
  MA: {
    name: { en: "Massachusetts", ht: "Massachusetts", fr: "Massachusetts", es: "Massachusetts", pt: "Massachusetts" },
    status: "live",
    plans: plans,
    disclaimers: disclaimers,
    upgrades: upgrades
    // careers[] (career finder) is currently state-agnostic (BLS national
    // medians) and stays shared across states until state-level income data
    // is worth the added complexity.
  },
  FL: {
    name: { en: "Florida", ht: "Florid", fr: "Floride", es: "Florida", pt: "Flórida" },
    status: "live",
    plans: plansFL,
    disclaimers: disclaimersFL,
    upgrades: upgradesFL
  }
};

let currentState = 'MA';

function getStatePlans() { return stateRegistry[currentState].plans; }

function getStateDisclaimers() { return stateRegistry[currentState].disclaimers; }

function getStateUpgrades() { return stateRegistry[currentState].upgrades; }

const stateUi = {
  comingSoon: { en: "coming soon", ht: "ap vini byento", fr: "bientôt disponible", es: "próximamente", pt: "em breve", zh: "即将推出", ar: "قريباً" },
  chooseState: { en: "Choose your state", ht: "Chwazi eta ou", fr: "Choisissez votre État", es: "Elige tu estado", pt: "Escolha seu estado", zh: "选择您的州", ar: "اختر ولايتك" },
  otherStatesNote: { en: "More states are on the way. Pick Massachusetts for now — pathways for other states aren't written yet.", ht: "Plis eta ap vini. Chwazi Massachusetts pou kounye a — chemen pou lòt eta yo poko ekri.", fr: "D'autres États arrivent bientôt. Choisissez le Massachusetts pour l'instant — les parcours des autres États ne sont pas encore rédigés.", es: "Vienen más estados pronto. Elige Massachusetts por ahora — los caminos de otros estados aún no están escritos.", pt: "Mais estados estão a caminho. Escolha Massachusetts por enquanto — os caminhos de outros estados ainda não foram escritos.", zh: "更多州即将推出。现在先选择马萨诸塞州——其他州的路径尚未编写。", ar: "المزيد من الولايات في الطريق. اختر ماساتشوستس الآن — مسارات الولايات الأخرى لم تُكتب بعد." }
};

function setState(code) {
  if (!stateRegistry[code]) return;
  if (stateRegistry[code].status !== 'live') {
    // Coming-soon state tapped: show the note, don't switch, don't pretend.
    // Still worth tracking — this is real signal for which state to build next.
    trackEvent('select_coming_soon_state', { state: code });
    const note = document.getElementById('stateNote');
    if (note) {
      note.textContent = stateUi.otherStatesNote[currentLang] || stateUi.otherStatesNote.en;
      note.classList.add('show');
    }
    return;
  }
  currentState = code;
  saveProgress('state', code);
  trackEvent('select_state', { state: code });
  const note = document.getElementById('stateNote');
  if (note) note.classList.remove('show');
  renderStateStrip();
  renderStatsBar();
  renderFieldAvailability();
}

function renderStateStrip() {
  const strip = document.getElementById('stateStrip');
  if (!strip) return;
  const lang = currentLang;
  let html = `<span class="state-strip-label">${(stateUi.chooseState[lang] || stateUi.chooseState.en)}</span>`;
  Object.keys(stateRegistry).forEach(code => {
    const s = stateRegistry[code];
    const isActive = code === currentState;
    const isSoon = s.status !== 'live';
    const label = s.name[lang] || s.name.en;
    const suffix = isSoon ? ` (${stateUi.comingSoon[lang] || stateUi.comingSoon.en})` : '';
    html += `<button class="state-btn${isActive ? ' active' : ''}${isSoon ? ' soon' : ''}" data-state="${code}" onclick="setState('${code}')">${label}${suffix}</button>`;
  });
  strip.innerHTML = html;
}

function mergeLang(target, extra) {
  for (const k in extra) {
    if (extra[k] && typeof extra[k] === 'object' && !Array.isArray(extra[k]) && target[k] && typeof target[k] === 'object') {
      mergeLang(target[k], extra[k]);
    } else {
      target[k] = extra[k];
    }
  }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'screen-home') renderRoadmap();
  if (id === 'screen-quiz') restoreQuizAnswers();
  if (id === 'screen-glossary') renderGlossaryIndex();
  if (id === 'screen-updates') renderUpdatesFeed();
}

function goHome() { currentField = null; showScreen('screen-home'); }

const fieldUi = {
  notInState: { en: "Not available in {state} yet — Massachusetts only for now.", ht: "Poko disponib nan {state} — Massachusetts sèlman pou kounye a.", fr: "Pas encore disponible en {state} — Massachusetts uniquement pour l'instant.", es: "Aún no disponible en {state} — solo Massachusetts por ahora.", pt: "Ainda não disponível na {state} — apenas Massachusetts por enquanto.", zh: "{state}尚不可用——目前仅限马萨诸塞州。", ar: "غير متاح في {state} بعد — ماساتشوستس فقط حالياً." },
  maOnlyTag: { en: "MA only", ht: "MA sèlman", fr: "MA seulement", es: "solo MA", pt: "só MA", zh: "仅MA", ar: "MA فقط" }
};

function renderFieldAvailability() {
  const statePlans = getStatePlans();
  document.querySelectorAll('#screen-fields .field-card').forEach(btn => {
    const m = (btn.getAttribute('onclick') || '').match(/openField\('(\w+)'\)/);
    if (!m) return;
    const available = !!statePlans[m[1]];
    btn.classList.toggle('unavailable', !available);
  });
  const note = document.getElementById('fieldsStateNote');
  if (note) note.classList.remove('show');
}

function openField(field) {
  if (!getStatePlans()[field]) {
    const note = document.getElementById('fieldsStateNote');
    if (note) {
      const stateName = stateRegistry[currentState].name[currentLang] || stateRegistry[currentState].name.en;
      note.textContent = (fieldUi.notInState[currentLang] || fieldUi.notInState.en).replace('{state}', stateName);
      note.classList.add('show');
    }
    return;
  }
  currentField = field;
  showScreen('screen-' + field);
  if (field === 'nursing' && currentState === 'MA') {
    renderLadder('nursingGoalLadder', 'nursing_cna_lpn_rn');
  } else if (field === 'nursing') {
    const lw = document.getElementById('nursingGoalLadder');
    if (lw) lw.innerHTML = '';
  }
}

function backToIntake() {
  if (currentField) showScreen('screen-' + currentField);
  else goHome();
}

function setLang(lang) {
  currentLang = lang;
  saveProgress('lang', lang);
  trackEvent('select_language', { language: lang });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');

  document.querySelectorAll('[data-en]').forEach(el => {
    let val;
    if (lang === 'es' || lang === 'pt') {
      val = staticT[lang][el.getAttribute('data-en')];
    } else {
      val = el.getAttribute(`data-${lang}`);
    }
    if (val) el.textContent = val;
  });

  if (document.getElementById('screen-results').classList.contains('active') && currentField) {
    generatePlan(currentField);
  }
  if (document.getElementById('screen-quiz-results').classList.contains('active')) {
    runQuiz();
  }
  if (document.getElementById('screen-glossary').classList.contains('active')) {
    renderGlossaryIndex();
  }
  if (document.getElementById('screen-glossary-entry').classList.contains('active') && currentGlossaryEntry) {
    // Re-open the same entry so every dynamically-injected string (title, dates,
    // volatility note, simple/full body, sources, form fields) re-renders in
    // the new language — not just the static data-en/data-ht attributes above.
    const cat = glossaryData.status.includes(currentGlossaryEntry) ? 'status' : 'forms';
    openGlossaryEntry(cat, currentGlossaryEntry.id);
  }
  if (document.getElementById('screen-updates').classList.contains('active')) {
    renderUpdatesFeed();
  }
  renderStateStrip();
  renderRoadmap();
  renderStatsBar();
  renderUpdatesStrip();
  renderFieldAvailability();
}
