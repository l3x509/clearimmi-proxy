// The 4-question Career Finder quiz: scoring, rendering matches, and
// the 'no pathway module yet' fallback with general next-step guidance.

const fallbackUi = {
  seeBelow: { en: "No step-by-step module yet — see how to start below ↓", ht: "Poko gen modil etap pa etap — gade kijan pou kòmanse anba a ↓", fr: "Pas encore de module étape par étape — voyez comment commencer ci-dessous ↓", es: "Aún no hay módulo paso a paso — mira cómo empezar abajo ↓", pt: "Ainda não há módulo passo a passo — veja como começar abaixo ↓", zh: "暂无分步模块——请参阅下方如何开始 ↓", ar: "لا يوجد وحدة خطوة بخطوة بعد — انظر كيف تبدأ أدناه ↓" },
  title: { en: "How to start in any of these fields today", ht: "Kijan pou kòmanse nan nenpòt nan domèn sa yo jodi a", fr: "Comment commencer dans n'importe lequel de ces domaines aujourd'hui", es: "Cómo empezar en cualquiera de estos campos hoy", pt: "Como começar em qualquer uma dessas áreas hoje", zh: "今天如何在这些领域开始", ar: "كيف تبدأ في أي من هذه المجالات اليوم" },
  s1: { en: "Visit a MassHire Career Center — free career coaching, help in many languages, and ask about WIOA training funds that can pay for your training. Find your center at mass.gov/masshire.", ht: "Ale nan yon MassHire Career Center — akonpayman karyè gratis, èd nan plizyè lang, epi mande pou fon fòmasyon WIOA ki ka peye fòmasyon ou. Jwenn sant ou nan mass.gov/masshire.", fr: "Visitez un MassHire Career Center — accompagnement gratuit, aide en plusieurs langues, et demandez les fonds de formation WIOA qui peuvent payer votre formation. Trouvez votre centre sur mass.gov/masshire.", es: "Visita un MassHire Career Center — orientación gratuita, ayuda en varios idiomas, y pregunta por los fondos de capacitación WIOA que pueden pagar tu formación. Encuentra tu centro en mass.gov/masshire.", pt: "Visite um MassHire Career Center — orientação gratuita, ajuda em vários idiomas, e pergunte sobre os fundos de treinamento WIOA que podem pagar sua formação. Encontre seu centro em mass.gov/masshire.", zh: "访问MassHire职业中心——免费职业辅导，多语言帮助，并询问可以支付培训费用的WIOA培训基金。在mass.gov/masshire查找您的中心。", ar: "زر مركز MassHire للوظائف — إرشاد مهني مجاني، مساعدة بلغات عديدة، واسأل عن صناديق تدريب WIOA التي يمكنها تغطية تكاليف تدريبك. ابحث عن مركزك على mass.gov/masshire." },
  s2: { en: "Ask your local community college about workforce training programs — many are short, evening-friendly, and may qualify for free tuition or funding.", ht: "Mande kolèj kominotè lokal ou sou pwogram fòmasyon travay — anpil kout, bon pou aswè, epi ka kalifye pou ekolaj gratis oswa finansman.", fr: "Renseignez-vous auprès de votre collège communautaire sur les programmes de formation professionnelle — beaucoup sont courts, en soirée, et peuvent être gratuits ou financés.", es: "Pregunta en tu colegio comunitario local por programas de capacitación laboral — muchos son cortos, en horario nocturno, y pueden calificar para matrícula gratuita o financiamiento.", pt: "Pergunte na sua faculdade comunitária local sobre programas de treinamento profissional — muitos são curtos, noturnos, e podem se qualificar para mensalidade gratuita ou financiamento.", zh: "向当地社区学院询问劳动力培训项目——许多项目时间短、适合晚间学习，并可能获得免费学费或资助。", ar: "اسأل كليتك المجتمعية المحلية عن برامج التدريب المهني — كثير منها قصير ومناسب للمساء وقد يحق له الحصول على رسوم دراسية مجانية أو تمويل." },
  s3: { en: "Many employers train on the job — search the career name plus \"no experience\" or \"will train\" on job sites, and ask directly if training is provided.", ht: "Anpil anplwayè fòme sou travay la — chèche non karyè a plis \"no experience\" oswa \"will train\" sou sit travay, epi mande dirèkteman si yo bay fòmasyon.", fr: "Beaucoup d'employeurs forment sur le tas — cherchez le nom du métier plus \"no experience\" ou \"will train\" sur les sites d'emploi, et demandez directement si une formation est offerte.", es: "Muchos empleadores capacitan en el trabajo — busca el nombre de la carrera más \"no experience\" o \"will train\" en sitios de empleo, y pregunta directamente si ofrecen capacitación.", pt: "Muitos empregadores treinam no trabalho — pesquise o nome da carreira mais \"no experience\" ou \"will train\" em sites de emprego, e pergunte diretamente se oferecem treinamento.", zh: "许多雇主提供在职培训——在招聘网站搜索职业名称加'no experience'或'will train'，并直接询问是否提供培训。", ar: "كثير من أصحاب العمل يوفرون التدريب أثناء العمل — ابحث عن اسم المهنة مع 'no experience' أو 'will train' في مواقع التوظيف، واسأل مباشرة إذا كان التدريب متاحاً." }
};

function runQuiz() {
  saveQuizAnswers();
  let anyWithoutModule = false;
  const answers = [
    document.getElementById('q1').value,
    document.getElementById('q2').value,
    document.getElementById('q3').value,
    document.getElementById('q4').value
  ];

  const scored = careers.map(c => {
    let score = 0;
    answers.forEach(a => { if (c.weights[a]) score += c.weights[a]; });
    return { career: c, score };
  }).sort((a, b) => b.score - a.score).slice(0, 3);

  trackEvent('complete_quiz', { top_matches: scored.map(s => s.career.id).join(',') });

  const container = document.getElementById('quizMatches');
  container.innerHTML = '';

  scored.forEach((item, i) => {
    const c = item.career;
    const div = document.createElement('div');
    div.className = 'step';

    const num = document.createElement('div');
    num.className = 'step-num';
    num.textContent = i + 1;

    const body = document.createElement('div');
    body.className = 'step-body';

    const t = document.createElement('strong');
    t.textContent = c.name[currentLang];

    const d = document.createElement('p');
    d.textContent = c.why[currentLang];

    const inc = document.createElement('span');
    inc.className = 'detail';
    inc.textContent = c.income[currentLang];

    const st = document.createElement('span');
    st.className = 'detail';
    st.style.marginLeft = '6px';
    st.textContent = c.start[currentLang];

    body.appendChild(t);
    body.appendChild(d);
    body.appendChild(inc);
    body.appendChild(st);

    if (c.pathway) {
      const btn = document.createElement('button');
      btn.className = 'primary';
      btn.style.marginTop = '12px';
      btn.style.padding = '10px';
      btn.style.fontSize = '14px';
      btn.textContent = ui.seePathway[currentLang];
      btn.onclick = () => openField(c.pathway);
      body.appendChild(btn);
    } else {
      const soon = document.createElement('p');
      soon.style.marginTop = '10px';
      soon.style.fontSize = '12.5px';
      soon.style.color = 'var(--gold-pale)';
      soon.textContent = fallbackUi.seeBelow[currentLang] || fallbackUi.seeBelow.en;
      body.appendChild(soon);
      anyWithoutModule = true;
    }

    div.appendChild(num);
    div.appendChild(body);
    container.appendChild(div);
  });

  if (anyWithoutModule) {
    const fb = document.createElement('div');
    fb.className = 'fallback-block';
    const langF = currentLang;
    fb.innerHTML = '<div class="fallback-title">' + (fallbackUi.title[langF] || fallbackUi.title.en) + '</div>' +
      '<ol class="fallback-list">' +
      '<li>' + (fallbackUi.s1[langF] || fallbackUi.s1.en) + '</li>' +
      '<li>' + (fallbackUi.s2[langF] || fallbackUi.s2.en) + '</li>' +
      '<li>' + (fallbackUi.s3[langF] || fallbackUi.s3.en) + '</li>' +
      '</ol>';
    container.appendChild(fb);
  }

  showScreen('screen-quiz-results');
}

const quizUi = {
  prefilled: { en: "Good news — your previous answers are filled in. Review and update them if anything changed.", ht: "Bon nouvèl — ansyen repons ou yo ranpli deja. Tcheke yo epi chanje si yon bagay chanje.", fr: "Bonne nouvelle — vos réponses précédentes sont préremplies. Vérifiez-les et modifiez-les si besoin.", es: "Buenas noticias — tus respuestas anteriores están precargadas. Revísalas y actualízalas si algo cambió.", pt: "Boas notícias — suas respostas anteriores já estão preenchidas. Revise e atualize se algo mudou.", zh: "好消息——您之前的答案已预填。如有变化请检查并更新。", ar: "خبر سار — تم تعبئة إجاباتك السابقة. راجعها وحدّثها إذا تغير أي شيء." }
};

function saveQuizAnswers() {
  saveProgress('quizAnswers', {
    q1: document.getElementById('q1').value,
    q2: document.getElementById('q2').value,
    q3: document.getElementById('q3').value,
    q4: document.getElementById('q4').value
  });
}

function restoreQuizAnswers() {
  const saved = loadProgress('quizAnswers');
  const note = document.getElementById('quizPrefillNote');
  if (!saved) { if (note) note.classList.remove('show'); return; }
  ['q1','q2','q3','q4'].forEach(id => {
    const el = document.getElementById(id);
    if (el && saved[id]) el.value = saved[id];
  });
  if (note) {
    note.textContent = quizUi.prefilled[currentLang] || quizUi.prefilled.en;
    note.classList.add('show');
  }
}
