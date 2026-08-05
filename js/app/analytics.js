// Google Analytics 4 custom event helper.
// Wraps gtag() so a missing/blocked GA script (ad blockers, offline, GA not
// loaded yet) never breaks the app — it just silently no-ops.
//
// Events fired here are the ones that actually matter for understanding
// usage beyond pageviews: which pathways people complete, which state
// they're in, whether they share, whether the quiz gets used. This is the
// data that turns into the B2B usage-numbers pitch later — see README.

function trackEvent(name, params) {
  try {
    if (typeof gtag === 'function') {
      gtag('event', name, params || {});
    }
  } catch (e) {
    // Never let analytics break the app.
  }
}
