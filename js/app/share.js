// WhatsApp / native-share-sheet functions. Share text is state-aware
// (says 'Massachusetts' or 'Florida' depending on what's selected) —
// see getShareMsg().

const shareMsg = {
  en: "I found this free tool that shows immigrants exactly how to get licensed and start a career in {state}, step by step, in your language:",
  ht: "Mwen jwenn zouti gratis sa a ki montre imigran egzakteman kijan pou jwenn lisans ak kòmanse yon karyè nan {state}, etap pa etap, nan lang ou:",
  fr: "J'ai trouvé cet outil gratuit qui montre aux immigrants exactement comment obtenir une licence et démarrer une carrière en {state}, étape par étape, dans votre langue :",
  es: "Encontré esta herramienta gratuita que muestra a los inmigrantes exactamente cómo obtener una licencia y empezar una carrera en {state}, paso a paso, en tu idioma:",
  pt: "Encontrei esta ferramenta gratuita que mostra aos imigrantes exatamente como obter uma licença e começar uma carreira em {state}, passo a passo, no seu idioma:"
};

function getShareMsg() {
  const stateName = stateRegistry[currentState].name[currentLang] || stateRegistry[currentState].name.en;
  return (shareMsg[currentLang] || shareMsg.en).replace('{state}', stateName);
}

function shareWhatsApp() {
  const title = document.getElementById('pathTitle').textContent;
  trackEvent('share', { method: 'whatsapp', content: title });
  const text = encodeURIComponent(getShareMsg() + '\n\n' + title + '\n' + SITE_URL);
  window.open('https://wa.me/?text=' + text, '_blank');
}

function shareNative(context) {
  const isUpgrade = context === 'upgrade';
  const title = isUpgrade
    ? document.getElementById('upgradeTitleEl').textContent
    : document.getElementById('pathTitle').textContent;
  trackEvent('share', { method: 'native', content: title });
  const text = getShareMsg() + '\n\n' + title;
  if (navigator.share) {
    navigator.share({ title: 'ClearImmi Pathways', text: text, url: SITE_URL }).catch(() => {});
  } else {
    // Fallback: open WhatsApp
    const wa = encodeURIComponent(text + '\n' + SITE_URL);
    window.open('https://wa.me/?text=' + wa, '_blank');
  }
}
