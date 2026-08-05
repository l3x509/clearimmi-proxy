// Local-storage helpers used across the app. Falls back to an in-memory
// object if localStorage is unavailable (e.g. private browsing edge cases).

const memStore = {};

function saveProgress(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { memStore[key] = val; }
}

function loadProgress(key) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch (e) { return memStore[key] || null; }
}
