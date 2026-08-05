// Rendering for the Career & Credential Pathways section: plan/upgrade
// results, cost/time summaries, the income ladder chart, progress
// tracking, the roadmap ('pick up where you left off') tile, and the
// report-a-problem link.

let photoBase64 = null;

let photoMediaType = null;

function generateUpgrade() {
  const job = document.getElementById('u-job').value;
  const data = getStateUpgrades()[job];
  if (!data) {
    const note = document.getElementById('upgradeStateNote');
    if (note) {
      const stateName = stateRegistry[currentState].name[currentLang] || stateRegistry[currentState].name.en;
      note.textContent = (fieldUi.notInState[currentLang] || fieldUi.notInState.en).replace('{state}', stateName);
      note.classList.add('show');
    }
    return;
  }
  const hideNote = document.getElementById('upgradeStateNote');
  if (hideNote) hideNote.classList.remove('show');
  touchActivePathway('upgrade', job, null);
  trackEvent('generate_upgrade', { job: job, state: currentState, upgrade_title: data.title.en });

  document.getElementById('upgradeTitleEl').textContent = data.title[currentLang];
  document.getElementById('upgradeMetaEl').textContent = data.meta[currentLang];
  document.getElementById('upgradeBadgeEl').textContent = data.badge[currentLang];
  document.getElementById('upgradeDisclaimer').textContent = data.disclaimer[currentLang];

  const content = document.getElementById('upgradeContent');
  content.innerHTML = '';

  const pathLabels = {en:'Your path forward',ht:'Chemen ou',fr:'Votre chemin de progression',es:'Tu camino de avance',pt:'Seu caminho de avanço'};
  const startLabels = {en:'Starting from where you are right now',ht:'Kòmanse kote ou ye kounye a',fr:"En partant d'où vous êtes maintenant",es:'Empezando desde donde estás ahora',pt:'Começando de onde você está agora'};

  const sTitle = document.createElement('div');
  sTitle.className = 'section-title';
  sTitle.textContent = pathLabels[currentLang];
  const sSub = document.createElement('div');
  sSub.className = 'section-sub';
  sSub.textContent = startLabels[currentLang];
  content.appendChild(sTitle);
  content.appendChild(sSub);

  const list = document.createElement('div');
  data.steps[currentLang].forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'step';
    const num = document.createElement('div');
    num.className = 'step-num';
    num.textContent = i + 1;
    const body = document.createElement('div');
    body.className = 'step-body';
    const t = document.createElement('strong');
    t.textContent = step.title;
    const d = document.createElement('p');
    d.textContent = step.desc;
    const det = document.createElement('span');
    det.className = 'detail';
    det.textContent = step.detail;
    body.appendChild(t); body.appendChild(d); body.appendChild(det);
    div.appendChild(num); div.appendChild(body);
    list.appendChild(div);
  });
  content.appendChild(list);

  // Summary strip
  const upgradeSummaryMap = {
    cna:      { cost:{en:'~$1,500',ht:'~$1,500',fr:'~$1 500',es:'~$1,500',pt:'~$1.500'}, time:{en:'12–18 months',ht:'12–18 mwa',fr:'12–18 mois',es:'12–18 meses',pt:'12–18 meses'} },
    hha:      { cost:{en:'~$0 (call DPH)',ht:'~$0 (rele DPH)',fr:'~$0',es:'~$0',pt:'~$0'}, time:{en:'1–3 months',ht:'1–3 mwa',fr:'1–3 mois',es:'1–3 meses',pt:'1–3 meses'} },
    uber:     { cost:{en:'~$1,500–$5,000',ht:'~$1,500–$5,000',fr:'~$1 500–5 000',es:'~$1,500–$5,000',pt:'~$1.500–5.000'}, time:{en:'2–3 months',ht:'2–3 mwa',fr:'2–3 mois',es:'2–3 meses',pt:'2–3 meses'} },
    cook:     { cost:{en:'~$15–$180',ht:'~$15–$180',fr:'~$15–$180',es:'~$15–$180',pt:'~$15–$180'}, time:{en:'2–4 weeks',ht:'2–4 semèn',fr:'2–4 semaines',es:'2–4 semanas',pt:'2–4 semanas'} },
    security: { cost:{en:'~$100–$300',ht:'~$100–$300',fr:'~$100–$300',es:'~$100–$300',pt:'~$100–$300'}, time:{en:'4–8 weeks',ht:'4–8 semèn',fr:'4–8 semaines',es:'4–8 semanas',pt:'4–8 semanas'} },
    para:     { cost:{en:'~$2,000–$8,000',ht:'~$2,000–$8,000',fr:'~$2 000–$8 000',es:'~$2,000–$8,000',pt:'~$2.000–$8.000'}, time:{en:'1–3 years',ht:'1–3 ane',fr:'1–3 ans',es:'1–3 años',pt:'1–3 anos'} },
    cosmo:    { cost:{en:'~$68 license fee',ht:'~$68 lisans',fr:'~$68 frais',es:'~$68 tasa',pt:'~$68 taxa'}, time:{en:'1–3 months',ht:'1–3 mwa',fr:'1–3 mois',es:'1–3 meses',pt:'1–3 meses'} },
    laborer:  { cost:{en:'~$150–$500',ht:'~$150–$500',fr:'~$150–$500',es:'~$150–$500',pt:'~$150–$500'}, time:{en:'2–6 months',ht:'2–6 mwa',fr:'2–6 mois',es:'2–6 meses',pt:'2–6 meses'} }
  };
  const job2 = job;
  const upgradeSummaryFL = {
    cna: { cost:{en:'WIOA may cover it ($0 out of pocket)',ht:'WIOA ka kouvri li ($0 nan pòch ou)',fr:'WIOA peut le couvrir (0 $ de votre poche)',es:'WIOA puede cubrirlo ($0 de tu bolsillo)',pt:'WIOA pode cobrir (US$0 do seu bolso)'}, time:{en:'12–18 months',ht:'12–18 mwa',fr:'12–18 mois',es:'12–18 meses',pt:'12–18 meses'} }
  };
  const uMeta = currentState === 'FL' ? upgradeSummaryFL[job2] : upgradeSummaryMap[job2];
  const lang = currentLang;
  const numSteps2 = data.steps[lang] ? data.steps[lang].length : 0;
  const sStrip = document.getElementById('upgradeSummaryStrip');
  if (sStrip && uMeta) {
    sStrip.innerHTML =
      `<div class="summary-chip"><span class="chip-icon">💰</span>${uMeta.cost[lang]||uMeta.cost.en}</div>` +
      `<div class="summary-chip"><span class="chip-icon">📅</span>${uMeta.time[lang]||uMeta.time.en}</div>` +
      `<div class="summary-chip"><span class="chip-icon">📋</span>${numSteps2} ${summaryLabels.steps[lang]||'steps'}</div>`;
  }

  // Income ladder for relevant upgrade paths
  const ladderMap = { cna:'nursing_cna_lpn_rn', hha:'hha_cna_lpn_rn', uber:'rideshare_cdl', cook:'cook_chef' };
  const ladderKey = currentState === 'MA' ? ladderMap[job2] : null;
  if (ladderKey) {
    renderLadder('upgradeLadderWrap', ladderKey);
  } else {
    const lw = document.getElementById('upgradeLadderWrap');
    if (lw) lw.innerHTML = '';
  }

  document.getElementById('upgradeFirstAction').innerHTML = data.firstAction[currentLang];
  document.getElementById('upgradeActionBox').style.display = 'block';
  renderReportLink('upgradeReportLink', data.title.en);
  renderFAQ('upgradeFAQ', 'upgrade');
  showScreen('screen-upgrade-results');
}

function shareUpgradeWhatsApp() {
  const title = document.getElementById('upgradeTitleEl').textContent;
  trackEvent('share', { method: 'whatsapp', content: title });
  const text = encodeURIComponent(getShareMsg() + '\n\n' + title + '\n' + SITE_URL);
  window.open('https://wa.me/?text=' + text, '_blank');
}

function getActivePathways() {
  return loadProgress('activePathways') || [];
}

function touchActivePathway(type, field, goal) {
  // type: 'plan' | 'upgrade'. For upgrades, field is the job key, goal is null.
  const list = getActivePathways();
  const id = type + ':' + field + (goal ? ':' + goal : '');
  const existing = list.find(p => p.id === id);
  if (existing) {
    existing.ts = Date.now();
  } else {
    list.push({ id: id, type: type, field: field, goal: goal || null, ts: Date.now() });
  }
  // Most recent first, cap at 6 to keep the tile scannable
  list.sort((a, b) => b.ts - a.ts);
  saveProgress('activePathways', list.slice(0, 6));
}

const roadmapUi = {
  title: { en: "Pick up where you left off", ht: "Kontinye kote ou te rete a", fr: "Reprenez où vous en étiez", es: "Continúa donde lo dejaste", pt: "Continue de onde parou", zh: "从您上次停下的地方继续", ar: "استكمل من حيث توقفت" },
  upgradeTag: { en: "Upgrade path", ht: "Chemen monte", fr: "Parcours de progression", es: "Camino de avance", pt: "Caminho de avanço", zh: "晋升路径", ar: "مسار الترقية" }
};

// NOTE: the homepage "pick up where you left off" roadmap tile was
// removed from index.html (Aug 2026) — this function is currently
// unused (no #roadmapTile exists to render into, so it silently no-ops
// if called). The underlying tracking (touchActivePathway/
// getActivePathways) is still active and still needed by
// resumePlan()/resumeUpgrade() inside the pathway screens themselves.
// Left in place rather than deleted in case the tile comes back in a
// different location later.
function renderRoadmap() {
  const tile = document.getElementById('roadmapTile');
  if (!tile) return;
  const list = getActivePathways();
  if (!list.length) { tile.classList.remove('show'); return; }

  const lang = currentLang;
  const statePlans = getStatePlans();
  const stateUpgrades = getStateUpgrades();
  let html = '';

  list.forEach(p => {
    if (p.type === 'plan') {
      const plan = statePlans[p.field] && statePlans[p.field][p.goal];
      if (!plan) return; // pathway from a state not currently selected — skip silently
      const total = plan.steps[lang] ? plan.steps[lang].length : 0;
      const saved = loadProgress('progress:' + p.field + ':' + p.goal) || {};
      const done = Object.values(saved).filter(Boolean).length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      html += `<button class="roadmap-item" onclick="resumePlan('${p.field}','${p.goal}')">
        <div class="roadmap-item-body">
          <div class="roadmap-item-name">${plan.title[lang] || plan.title.en}</div>
          <div class="roadmap-item-track"><div class="roadmap-item-fill" style="width:${pct}%"></div></div>
        </div>
        <span class="roadmap-item-pct">${pct}%</span>
        <span class="roadmap-arrow">›</span>
      </button>`;
    } else {
      const up = stateUpgrades[p.field];
      if (!up) return;
      html += `<button class="roadmap-item" onclick="resumeUpgrade('${p.field}')">
        <div class="roadmap-item-body">
          <div class="roadmap-item-name">${up.title[lang] || up.title.en}</div>
          <div class="roadmap-item-track"><div class="roadmap-item-fill" style="width:100%;background:var(--gold);"></div></div>
        </div>
        <span class="roadmap-item-pct" style="color:var(--gold);">${roadmapUi.upgradeTag[lang] || roadmapUi.upgradeTag.en}</span>
        <span class="roadmap-arrow">›</span>
      </button>`;
    }
  });

  if (!html) { tile.classList.remove('show'); return; }
  document.getElementById('roadmapTitle').textContent = roadmapUi.title[lang] || roadmapUi.title.en;
  document.getElementById('roadmapItems').innerHTML = html;
  tile.classList.add('show');
}

function resumePlan(field, goal) {
  // Set the goal selector so generatePlan picks up the right goal, then render
  const selectorMap = { nursing: 'n-goal', teaching: 't-goal', cdl: 'c-goal', accounting: 'ac-goal', cosmetology: 'co-goal' };
  const sel = document.getElementById(selectorMap[field]);
  if (sel) sel.value = goal;
  generatePlan(field);
}

function resumeUpgrade(job) {
  const sel = document.getElementById('u-job');
  if (sel) sel.value = job;
  generateUpgrade();
}

const REPORT_EMAIL = '';

const reportUi = {
  label: { en: "Something outdated or wrong? Tell us", ht: "Yon bagay demode oswa pa kòrèk? Di nou", fr: "Quelque chose de périmé ou d'inexact ? Dites-le-nous", es: "¿Algo desactualizado o incorrecto? Dinos", pt: "Algo desatualizado ou errado? Conte para nós", zh: "有过时或错误的信息？请告诉我们", ar: "هل هناك معلومة قديمة أو خاطئة؟ أخبرنا" }
};

function renderReportLink(containerId, contextTitle) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!REPORT_EMAIL) { el.innerHTML = ''; return; }
  const subj = encodeURIComponent('Data report: ' + contextTitle);
  el.innerHTML = '<a class="report-link" href="mailto:' + REPORT_EMAIL + '?subject=' + subj + '">' + (reportUi.label[currentLang] || reportUi.label.en) + '</a>';
}

function generatePlan(field) {
  currentField = field;

  // Nursing fork: if the person is already a US-trained CNA/nurse,
  // the foreign-credential LPN plan is wrong for them — redirect to the
  // upgrade path which has the Career Ladder Program, TEAS prep, and school list.
  if (field === 'nursing') {
    const nStart = document.getElementById('n-start');
    const nGoal = document.getElementById('n-goal');
    if (nStart && nStart.value === 'us_trained' && nGoal && (nGoal.value === 'lpn' || nGoal.value === 'rn') && getStateUpgrades()['cna']) {
      document.getElementById('u-job').value = 'cna';
      generateUpgrade();
      return;
    }
  }

  if (!getStatePlans()[field]) return;

  let goal;
  if (field === 'nursing') goal = document.getElementById('n-goal').value;
  else if (field === 'teaching') goal = document.getElementById('t-goal').value;
  else if (field === 'cdl') goal = document.getElementById('c-goal').value;
  else if (field === 'accounting') goal = document.getElementById('ac-goal').value;
  else goal = document.getElementById('co-goal').value;

  const plan = getStatePlans()[field][goal];
  trackEvent('generate_plan', { field: field, goal: goal, state: currentState, plan_title: plan.title.en });

  document.getElementById('pathTitle').textContent = plan.title[currentLang];
  document.getElementById('pathMeta').textContent = plan.meta[currentLang];
  document.getElementById('statusBadge').textContent = plan.badge[currentLang];
  document.getElementById('disclaimerText').textContent = getStateDisclaimers()[field][currentLang];

  const stepsList = document.getElementById('stepsList');
  stepsList.innerHTML = '';

  currentGoalKey = field + ':' + goal;
  touchActivePathway('plan', field, goal);
  const saved = loadProgress('progress:' + currentGoalKey) || {};
  const totalSteps = plan.steps[currentLang].length;

  // Summary strip
  renderSummaryStrip('pathSummaryStrip', field, goal, totalSteps);

  // Progress bar
  let completedCount = Object.values(saved).filter(Boolean).length;
  updateProgressBar(completedCount, totalSteps);

  plan.steps[currentLang].forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'step';
    const num = document.createElement('div');
    num.className = 'step-num';
    num.textContent = i + 1;
    const body = document.createElement('div');
    body.className = 'step-body';
    const t = document.createElement('strong');
    t.textContent = step.title;
    const d = document.createElement('p');
    d.textContent = step.desc;
    const det = document.createElement('span');
    det.className = 'detail';
    det.textContent = step.detail;

    const checkWrap = document.createElement('label');
    checkWrap.style.cssText = 'display:flex;align-items:center;gap:8px;margin-top:10px;font-size:13px;font-weight:600;color:var(--green);cursor:pointer;';
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = !!saved[i];
    check.style.cssText = 'width:18px;height:18px;accent-color:var(--green);cursor:pointer;';
    check.onchange = () => {
      saved[i] = check.checked;
      saveProgress('progress:' + currentGoalKey, saved);
      div.style.opacity = check.checked ? '0.55' : '1';
      const doneCount = Object.values(saved).filter(Boolean).length;
      updateProgressBar(doneCount, totalSteps);
    };
    const checkLabel = document.createElement('span');
    checkLabel.textContent = ui.completedStep[currentLang];
    checkWrap.appendChild(check);
    checkWrap.appendChild(checkLabel);
    if (saved[i]) div.style.opacity = '0.55';

    body.appendChild(t); body.appendChild(d); body.appendChild(det);

    if (/transcript|transkripsyon|relevés|affidavit|afidavi/i.test(step.title)) {
      const genLink = document.createElement('button');
      genLink.className = 'back-link';
      genLink.style.cssText = 'display:block;margin-top:8px;font-size:13px;';
      genLink.textContent = ui.writeLetter[currentLang];
      genLink.onclick = (e) => { e.stopPropagation(); showScreen('screen-lettergen'); };
      body.appendChild(genLink);
    }

    body.appendChild(checkWrap);
    div.appendChild(num); div.appendChild(body);
    stepsList.appendChild(div);
  });

  document.getElementById('firstAction').innerHTML = plan.firstAction[currentLang];
  renderReportLink('planReportLink', plan.title.en);
  renderFAQ('planFAQ', 'plan');

  showScreen('screen-results');
}

const planSummary = {
  nursing: {
    cna: { cost: { en:'~$200–$450', ht:'~$200–$450', fr:'~$200–$450', es:'~$200–$450', pt:'~$200–$450' }, time: { en:'3–7 weeks', ht:'3–7 semèn', fr:'3–7 semaines', es:'3–7 semanas', pt:'3–7 semanas' }, steps: 5 },
    lpn: { cost: { en:'~$1,500–$6,000', ht:'~$1,500–$6,000', fr:'~$1 500–$6 000', es:'~$1,500–$6,000', pt:'~$1.500–$6.000' }, time: { en:'12–18 months', ht:'12–18 mwa', fr:'12–18 mois', es:'12–18 meses', pt:'12–18 meses' }, steps: 6 },
    rn: { cost: { en:'~$3,000–$12,000', ht:'~$3,000–$12,000', fr:'~$3 000–$12 000', es:'~$3,000–$12,000', pt:'~$3.000–$12.000' }, time: { en:'2–4 years', ht:'2–4 ane', fr:'2–4 ans', es:'2–4 años', pt:'2–4 anos' }, steps: 7 }
  },
  teaching: {
    para: { cost: { en:'~$0–$50', ht:'~$0–$50', fr:'~$0–$50', es:'~$0–$50', pt:'~$0–$50' }, time: { en:'2–6 weeks', ht:'2–6 semèn', fr:'2–6 semaines', es:'2–6 semanas', pt:'2–6 semanas' }, steps: 4 },
    teacher: { cost: { en:'~$2,000–$8,000', ht:'~$2,000–$8,000', fr:'~$2 000–$8 000', es:'~$2,000–$8,000', pt:'~$2.000–$8.000' }, time: { en:'1–3 years', ht:'1–3 ane', fr:'1–3 ans', es:'1–3 años', pt:'1–3 anos' }, steps: 6 }
  },
  cdl: {
    classA: { cost: { en:'~$3,000–$8,000', ht:'~$3,000–$8,000', fr:'~$3 000–$8 000', es:'~$3,000–$8,000', pt:'~$3.000–$8.000' }, time: { en:'2–4 months', ht:'2–4 mwa', fr:'2–4 mois', es:'2–4 meses', pt:'2–4 meses' }, steps: 5 },
    classB: { cost: { en:'~$1,500–$5,000', ht:'~$1,500–$5,000', fr:'~$1 500–$5 000', es:'~$1,500–$5,000', pt:'~$1.500–$5.000' }, time: { en:'6–10 weeks', ht:'6–10 semèn', fr:'6–10 semaines', es:'6–10 semanas', pt:'6–10 semanas' }, steps: 5 }
  },
  cosmetology: {
    foreign: { cost: { en:'~$200–$500', ht:'~$200–$500', fr:'~$200–$500', es:'~$200–$500', pt:'~$200–$500' }, time: { en:'2–4 months', ht:'2–4 mwa', fr:'2–4 mois', es:'2–4 meses', pt:'2–4 meses' }, steps: 6 },
    fresh: { cost: { en:'~$6,000–$16,000', ht:'~$6,000–$16,000', fr:'~$6 000–$16 000', es:'~$6,000–$16,000', pt:'~$6.000–$16.000' }, time: { en:'9–18 months', ht:'9–18 mwa', fr:'9–18 mois', es:'9–18 meses', pt:'9–18 meses' }, steps: 6 }
  },
  accounting: {
    bookkeeper: { cost: { en:'~$100–$600', ht:'~$100–$600', fr:'~$100–$600', es:'~$100–$600', pt:'~$100–$600' }, time: { en:'4–10 weeks', ht:'4–10 semèn', fr:'4–10 semaines', es:'4–10 semanas', pt:'4–10 semanas' }, steps: 4 },
    cpa: { cost: { en:'~$2,300–$4,000', ht:'~$2,300–$4,000', fr:'~$2 300–$4 000', es:'~$2,300–$4,000', pt:'~$2.300–$4.000' }, time: { en:'2–5 years', ht:'2–5 ane', fr:'2–5 ans', es:'2–5 años', pt:'2–5 anos' }, steps: 6 }
  }
};

const summaryLabels = {
  cost: { en:'Total cost', ht:'Kout total', fr:'Coût total', es:'Costo total', pt:'Custo total', zh:'总费用', ar:'التكلفة الإجمالية' },
  time: { en:'Timeline', ht:'Delè', fr:'Durée', es:'Duración', pt:'Prazo', zh:'时间表', ar:'الجدول الزمني' },
  steps: { en:'steps', ht:'etap', fr:'étapes', es:'pasos', pt:'etapas', zh:'步骤', ar:'خطوات' },
  stepsCompleted: { en:'of', ht:'nan', fr:'sur', es:'de', pt:'de', zh:'/', ar:'من' }
};

const planSummaryFL = {
  nursing: {
    cna: { cost: { en:'~$220–$1,700', ht:'~$220–$1,700', fr:'~$220–$1 700', es:'~$220–$1,700', pt:'~US$220–1.700', zh:'约$220–$1,700', ar:'~$220–$1,700' }, time: { en:'3–8 weeks', ht:'3–8 semèn', fr:'3–8 semaines', es:'3–8 semanas', pt:'3–8 semanas', zh:'3–8周', ar:'3–8 أسابيع' } },
    lpn: { cost: { en:'eval + $200 NCLEX + fees', ht:'evalyasyon + $200 NCLEX + frè', fr:'évaluation + 200 $ NCLEX + frais', es:'evaluación + $200 NCLEX + tarifas', pt:'avaliação + US$200 NCLEX + taxas', zh:'评估 + $200 NCLEX + 费用', ar:'التقييم + 200$ NCLEX + رسوم' }, time: { en:'6–12 months', ht:'6–12 mwa', fr:'6–12 mois', es:'6–12 meses', pt:'6–12 meses', zh:'6–12个月', ar:'6–12 شهراً' } },
    rn: { cost: { en:'eval + $200 NCLEX + fees', ht:'evalyasyon + $200 NCLEX + frè', fr:'évaluation + 200 $ NCLEX + frais', es:'evaluación + $200 NCLEX + tarifas', pt:'avaliação + US$200 NCLEX + taxas', zh:'评估 + $200 NCLEX + 费用', ar:'التقييم + 200$ NCLEX + رسوم' }, time: { en:'6–12 months', ht:'6–12 mwa', fr:'6–12 mois', es:'6–12 meses', pt:'6–12 meses', zh:'6–12个月', ar:'6–12 شهراً' } }
  }
};

function renderSummaryStrip(containerId, field, goal, numSteps) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const summarySource = currentState === 'FL' ? planSummaryFL : planSummary;
  const meta = summarySource[field] && summarySource[field][goal];
  const lang = currentLang;
  if (!meta) { container.innerHTML = ''; return; }
  container.innerHTML =
    `<div class="summary-chip"><span class="chip-icon">💰</span>${meta.cost[lang] || meta.cost.en}</div>` +
    `<div class="summary-chip"><span class="chip-icon">📅</span>${meta.time[lang] || meta.time.en}</div>` +
    `<div class="summary-chip"><span class="chip-icon">📋</span>${numSteps} ${summaryLabels.steps[lang] || summaryLabels.steps.en}</div>`;
}

function updateProgressBar(completed, total) {
  const wrap = document.getElementById('pathProgressWrap');
  const fill = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');
  const pct = document.getElementById('progressPct');
  if (!wrap) return;
  wrap.style.display = total > 0 ? 'block' : 'none';
  const pctVal = total > 0 ? Math.round((completed / total) * 100) : 0;
  fill.style.width = pctVal + '%';
  const lang = currentLang;
  label.textContent = completed + ' ' + (summaryLabels.stepsCompleted[lang] || 'of') + ' ' + total + ' ' + (summaryLabels.steps[lang] || 'steps');
  pct.textContent = pctVal + '%';
}

const ladderData = {
  // key: array of { label, income (annual MA), color }
  nursing_cna_lpn_rn: [
    { label: 'CNA', income: 39530, color: '#3E6B4F' },
    { label: 'LPN', income: 79590, color: '#2C6E9B' },
    { label: 'RN',  income: 106050, color: '#E8B84B' }
  ],
  hha_cna_lpn_rn: [
    { label: 'HHA', income: 37180, color: '#3E6B4F' },
    { label: 'CNA', income: 39530, color: '#5A8A70' },
    { label: 'LPN', income: 79590, color: '#2C6E9B' },
    { label: 'RN',  income: 106050, color: '#E8B84B' }
  ],
  rideshare_cdl: [
    { label: { en:'Rideshare',ht:'Lokatè',fr:'VTC',es:'Transporte',pt:'Transporte' }, income: 38500, color: '#8A7A55' },
    { label: { en:'CDL-B',ht:'CDL-B',fr:'CDL-B',es:'CDL-B',pt:'CDL-B' },             income: 57440, color: '#E8B84B' }
  ],
  cook_chef: [
    { label: { en:'Cook',ht:'Kizinyè',fr:'Cuisinier',es:'Cocinero',pt:'Cozinheiro' }, income: 35760, color: '#8A7A55' },
    { label: { en:'Supervisor',ht:'Sipèvizè',fr:'Superviseur',es:'Supervisor',pt:'Supervisor' }, income: 46180, color: '#C08A2E' },
    { label: { en:'Chef',ht:'Chèf',fr:'Chef',es:'Chef',pt:'Chef' },                   income: 66700, color: '#E8B84B' }
  ]
};

const ladderTitles = {
  nursing_cna_lpn_rn: { en:'Income ladder: CNA → LPN → RN (MA, BLS 2024/2025)', ht:'Echèl revni: CNA → LPN → RN', fr:'Échelle de revenus: CNA → LPN → RN', es:'Escala de ingresos: CNA → LPN → RN', pt:'Escala de renda: CNA → LPN → RN' },
  hha_cna_lpn_rn: { en:'Income ladder: HHA → CNA → LPN → RN (MA, BLS 2024/2025)', ht:'Echèl revni: HHA → CNA → LPN → RN', fr:'Échelle de revenus: HHA → CNA → LPN → RN', es:'Escala de ingresos: HHA → CNA → LPN → RN', pt:'Escala de renda: HHA → CNA → LPN → RN' },
  rideshare_cdl: { en:'Income comparison: Rideshare vs CDL-B (BLS 2024)', ht:'Konparezon revni: Lokatè vs CDL-B', fr:'Comparaison: VTC vs CDL-B', es:'Comparación: Transporte vs CDL-B', pt:'Comparação: Transporte vs CDL-B' },
  cook_chef: { en:'Income ladder: Cook → Supervisor → Chef (BLS 2024/2025)', ht:'Echèl revni: Kizinyè → Sipèvizè → Chèf', fr:'Échelle: Cuisinier → Superviseur → Chef', es:'Escala: Cocinero → Supervisor → Chef', pt:'Escala: Cozinheiro → Supervisor → Chef' }
};

function buildLadderSVG(dataKey) {
  const data = ladderData[dataKey];
  if (!data) return '';
  const lang = currentLang;
  const maxIncome = Math.max(...data.map(d => d.income));
  const svgW = 320;
  const barH = 36;
  const gap = 14;
  const leftPad = 60;
  const rightPad = 90;
  const svgH = data.length * (barH + gap) - gap + 4;

  let bars = '';
  data.forEach((d, i) => {
    const barW = Math.round(((svgW - leftPad - rightPad) * d.income) / maxIncome);
    const y = i * (barH + gap);
    const labelText = typeof d.label === 'string' ? d.label : (d.label[lang] || d.label.en);
    const incomeStr = '$' + Math.round(d.income / 1000) + 'K';
    bars += `
      <text x="${leftPad - 8}" y="${y + barH/2 + 5}" text-anchor="end" font-family="JetBrains Mono,monospace" font-size="12" font-weight="600" fill="#F6F2EA">${labelText}</text>
      <rect x="${leftPad}" y="${y}" width="${barW}" height="${barH}" rx="4" fill="${d.color}" opacity="0.9"/>
      <text x="${leftPad + barW + 8}" y="${y + barH/2 + 5}" font-family="DM Sans,sans-serif" font-size="12.5" font-weight="700" fill="${d.color}">${incomeStr}</text>`;
  });

  return `<svg viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg">${bars}</svg>`;
}

function renderLadder(containerId, dataKey) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const title = ladderTitles[dataKey];
  if (!title) { el.innerHTML = ''; return; }
  el.innerHTML = `<div class="income-ladder">
    <div class="income-ladder-title">${title[currentLang] || title.en}</div>
    ${buildLadderSVG(dataKey)}
  </div>`;
}
