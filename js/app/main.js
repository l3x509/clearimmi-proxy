// ClearImmi — entry point. Load this LAST, after every other script.
// Runs the two startup routines: restore saved language (or detect from
// the browser), then restore saved state (MA/FL/...). Order matters —
// language must be set before state-dependent UI first renders.

// ---- Init: restore saved language, or detect from browser on first visit ----
(function initLang() {
  const saved = loadProgress('lang');
  if (saved && saved !== 'en') { setLang(saved); return; }
  if (saved === 'en') return;
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('ht')) setLang('ht');
  else if (nav.startsWith('fr')) setLang('fr');
  else if (nav.startsWith('es')) setLang('es');
  else if (nav.startsWith('pt')) setLang('pt');
  else if (nav.startsWith('zh')) setLang('zh');
  else if (nav.startsWith('ar')) setLang('ar');
})();

// ---- Init: restore saved state (defaults to MA — the only live state) ----
(function initState() {
  const saved = loadProgress('state');
  if (saved && stateRegistry[saved] && stateRegistry[saved].status === 'live') {
    currentState = saved;
  }
  renderStateStrip();
  renderRoadmap();
  renderStatsBar();
  renderUpdatesStrip();
  renderFieldAvailability();
})();
