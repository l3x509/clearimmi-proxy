// The two AI-dependent features: the Letter Explainer and Form Filing
// Help. Both are dormant until their endpoint in js/config.js is filled
// in — see js/config.js for what deploying each one requires.
// These are DELIBERATELY separate pipelines (different prompts, different
// output shapes, different failure modes) — never merge them.

function handlePhoto(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  photoMediaType = file.type || 'image/jpeg';
  const reader = new FileReader();
  reader.onload = () => {
    photoBase64 = reader.result.split(',')[1];
    const prev = document.getElementById('photoPreview');
    prev.src = reader.result;
    prev.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

let filingFormPhotoBase64 = null;

let filingFormPhotoMediaType = null;

let currentFilingFormId = null;

const filingHelpUi = {
  ctaTitle: { en: "Get help filing this form", ht: "Jwenn èd pou ranpli fòm sa a", fr: "Obtenir de l'aide pour remplir ce formulaire" },
  ctaSub: { en: "Upload or paste your form section — AI explains every field, in your language", ht: "Telechaje oswa kole seksyon fòm ou a — AI eksplike chak chan, nan lang ou", fr: "Téléchargez ou collez votre section de formulaire — l'IA explique chaque champ, dans votre langue" },
  analyzing: { en: "Reading your form…", ht: "Ap li fòm ou a…", fr: "Lecture de votre formulaire…" },
  pasteFirst: { en: "Paste the text or take a photo first.", ht: "Kole tèks la oswa pran yon foto anvan.", fr: "Collez le texte ou prenez une photo d'abord." },
  notConnected: { en: "Filing help isn't connected yet — check back soon.", ht: "Èd ranpli poko konekte — tcheke ankò byento.", fr: "L'aide au dépôt n'est pas encore connectée — revenez bientôt." },
  errorTry: { en: "Something went wrong. Please try again.", ht: "Yon bagay mal pase. Tanpri eseye ankò.", fr: "Une erreur s'est produite. Veuillez réessayer." },
  legalJudgment: { en: "⚠ This needs a real person, not a guess", ht: "⚠ Sa bezwen yon vrè moun, pa yon devinèt", fr: "⚠ Ceci nécessite une vraie personne, pas une supposition" }
};

function openFilingHelp(formId) {
  currentFilingFormId = formId;
  const entry = glossaryData.forms.find(e => e.id === formId);
  const lang = currentLang;
  document.getElementById('filingHelpTitle').textContent = entry ? (entry.title[lang] || entry.title.en) : '';
  document.getElementById('filingHelpResult').style.display = 'none';
  document.getElementById('filingHelpResult').innerHTML = '';
  document.getElementById('formText').value = '';
  document.getElementById('formPhotoPreview').style.display = 'none';
  filingFormPhotoBase64 = null;
  showScreen('screen-filing-help');
}

function handleFormPhoto(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  filingFormPhotoMediaType = file.type || 'image/jpeg';
  const reader = new FileReader();
  reader.onload = () => {
    filingFormPhotoBase64 = reader.result.split(',')[1];
    const prev = document.getElementById('formPhotoPreview');
    prev.src = reader.result;
    prev.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

async function explainFormFields() {
  const text = document.getElementById('formText').value.trim();
  const out = document.getElementById('filingHelpResult');
  const lang = currentLang;

  if (!text && !filingFormPhotoBase64) {
    out.style.display = 'block';
    out.innerHTML = `<p class="full-text-body">${filingHelpUi.pasteFirst[lang] || filingHelpUi.pasteFirst.en}</p>`;
    return;
  }
  if (!FILING_HELP_ENDPOINT) {
    out.style.display = 'block';
    out.innerHTML = `<p class="full-text-body">${filingHelpUi.notConnected[lang] || filingHelpUi.notConnected.en}</p>`;
    return;
  }

  out.style.display = 'block';
  out.innerHTML = `<p class="full-text-body">${filingHelpUi.analyzing[lang] || filingHelpUi.analyzing.en}</p>`;

  try {
    const payload = { lang: lang, formId: currentFilingFormId };
    if (text) payload.formText = text;
    if (filingFormPhotoBase64) { payload.image = filingFormPhotoBase64; payload.imageType = filingFormPhotoMediaType; }

    const res = await fetch(FILING_HELP_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    // Expected response shape: { fields: [ { name, howTo, legalJudgment: bool } ] }
    if (data.fields && Array.isArray(data.fields) && data.fields.length) {
      out.innerHTML = data.fields.map(f => `
        <div class="filing-field-result">
          <div class="field-name">${f.name || ''}</div>
          <div class="field-howto">${f.howTo || ''}</div>
          ${f.legalJudgment ? `<div class="legal-judgment-flag">${filingHelpUi.legalJudgment[lang] || filingHelpUi.legalJudgment.en}</div>` : ''}
        </div>`).join('');
    } else {
      out.innerHTML = `<p class="full-text-body">${filingHelpUi.errorTry[lang] || filingHelpUi.errorTry.en}</p>`;
    }
  } catch (e) {
    out.innerHTML = `<p class="full-text-body">${filingHelpUi.errorTry[lang] || filingHelpUi.errorTry.en}</p>`;
  }
}

function generateLetter() {
  const name = document.getElementById('lg-name').value.trim() || '____________';
  const school = document.getElementById('lg-school').value.trim() || '____________';
  const years = document.getElementById('lg-years').value.trim() || '____________';
  const lang = document.getElementById('lg-lang').value;
  const today = new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'pt' ? 'pt-BR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  let letter;
  if (lang === 'es') {
    letter = `${today}

Asunto: Solicitud de envío de certificados de estudios oficiales

Estimados señores:

Yo, ${name}, exalumno/a de su institución (${school}) durante el período ${years}, solicito por la presente el envío de mis certificados de estudios oficiales.

Estos documentos son requeridos para una evaluación de mis credenciales en los Estados Unidos. IMPORTANTE: la agencia de evaluación exige que los certificados sean enviados DIRECTAMENTE por su institución, no por mí. La dirección de envío es:

[DIRECCIÓN DE LA AGENCIA DE EVALUACIÓN — ver su plan]

Si este servicio tiene algún costo, por favor infórmenme y procederé al pago.

Agradezco de antemano su ayuda.

Atentamente,
${name}
[Su teléfono / WhatsApp]
[Su correo electrónico]`;
  } else if (lang === 'pt') {
    letter = `${today}

Assunto: Solicitação de envio de histórico escolar oficial

Prezados senhores,

Eu, ${name}, ex-aluno(a) da sua instituição (${school}) durante o período ${years}, venho por meio desta solicitar o envio do meu histórico escolar oficial.

Estes documentos são necessários para uma avaliação das minhas credenciais nos Estados Unidos. IMPORTANTE: a agência de avaliação exige que os documentos sejam enviados DIRETAMENTE pela sua instituição, e não por mim. O endereço de envio é:

[ENDEREÇO DA AGÊNCIA DE AVALIAÇÃO — veja seu plano]

Se houver alguma taxa para este serviço, por favor me informem e providenciarei o pagamento.

Agradeço desde já pela ajuda.

Atenciosamente,
${name}
[Seu telefone / WhatsApp]
[Seu e-mail]`;
  } else if (lang === 'fr') {
    letter = `${today}

Objet : Demande d'envoi de relevés de notes officiels

Madame, Monsieur,

Je soussigné(e), ${name}, ancien(ne) élève de votre établissement (${school}) durant la période ${years}, sollicite par la présente l'envoi de mes relevés de notes officiels.

Ces documents sont requis dans le cadre d'une évaluation de mes diplômes aux États-Unis. IMPORTANT : l'organisme d'évaluation exige que les relevés soient envoyés DIRECTEMENT par votre établissement, et non par moi-même. L'adresse d'envoi est la suivante :

[ADRESSE DE L'ORGANISME D'ÉVALUATION — voir votre plan]

Si des frais s'appliquent pour ce service, veuillez m'en informer et je procéderai au règlement.

Je vous remercie par avance de votre aide et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

${name}
[Votre téléphone / WhatsApp]
[Votre e-mail]`;
  } else {
    letter = `${today}

Subject: Request for Official Transcripts

Dear Registrar,

My name is ${name}, and I was a student at ${school} from ${years}. I am writing to request that my official transcripts be sent for a credential evaluation in the United States.

IMPORTANT: The evaluation agency requires that transcripts be sent DIRECTLY from your institution — they cannot accept documents sent by me personally. Please send them to:

[EVALUATION AGENCY ADDRESS — see your pathway plan]

If there is a fee for this service, please let me know and I will arrange payment.

Thank you very much for your assistance.

Sincerely,
${name}
[Your phone / WhatsApp]
[Your email]`;
  }

  const out = document.getElementById('letterOutput');
  out.textContent = letter;
  out.style.display = 'block';
  document.getElementById('copyLetterBtn').style.display = 'block';
}

function copyLetter() {
  const text = document.getElementById('letterOutput').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyLetterBtn');
    btn.textContent = ui.copied[currentLang];
    setTimeout(() => { btn.textContent = ui.copyLetter[currentLang]; }, 2000);
  });
}

async function explainLetter() {
  const text = document.getElementById('letterText').value.trim();
  const out = document.getElementById('explainResult');
  if (!text && !photoBase64) {
    out.style.display = 'block';
    out.textContent = ui.pasteFirst[currentLang];
    return;
  }
  if (!EXPLAIN_ENDPOINT) {
    out.style.display = 'block';
    out.textContent = ui.notConnected[currentLang];
    return;
  }
  out.style.display = 'block';
  out.textContent = ui.analyzing[currentLang];
  try {
    const payload = { lang: currentLang };
    if (text) payload.letter = text;
    if (photoBase64) { payload.image = photoBase64; payload.imageType = photoMediaType; }
    const res = await fetch(EXPLAIN_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    out.textContent = data.explanation || ui.errorTry[currentLang];
  } catch (e) {
    out.textContent = ui.errorTry[currentLang];
  }
}
