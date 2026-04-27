// ─── storage.js ─ localStorage persistence ────────────────────────────────────
const KEY = "rmf_v1";

export function saveToLocal(state) {
  try {
    const payload = {
      template: state.template,
      name: state.name, role: state.role, bio: state.bio,
      github: state.github, location: state.location,
      website: state.website, email: state.email,
      prompts: state.prompts,
      skills: [...state.skills],
      socials: state.socials,
      stats: state.stats,
      statsTheme: state.statsTheme,
    };
    localStorage.setItem(KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("[storage] save failed:", e);
  }
}

export function loadFromLocal() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (d.skills && Array.isArray(d.skills)) {
      d.skills = new Set(d.skills);
    }
    return d;
  } catch (e) {
    console.warn("[storage] load failed:", e);
    return null;
  }
}

export function clearLocal() {
  try { localStorage.removeItem(KEY); } catch (e) {}
}