// ─── store.js ─ Centralized state ────────────────────────────────────────────
import { PROMPTS, SOCIALS, STATS } from "../data/data.js";

function createDefaultState() {
  const prompts = {};
  PROMPTS.forEach(p => { prompts[p.id] = { on: false, val: "" }; });

  const socials = {};
  SOCIALS.forEach(s => { socials[s.id] = ""; });

  const stats = {};
  STATS.forEach(s => { stats[s.id] = false; });

  return {
    template: "modern",
    name: "", role: "", bio: "",
    github: "", location: "", website: "", email: "",
    prompts,
    skills: new Set(),
    socials,
    stats,
    statsTheme: "radical",
  };
}

// Reactive store with subscriber pattern
class Store {
  constructor() {
    this._state = createDefaultState();
    this._subscribers = [];
  }

  get() { return this._state; }

  set(partial) {
    Object.assign(this._state, partial);
    this._notify();
  }

  setNested(section, key, value) {
    this._state[section][key] = value;
    this._notify();
  }

  toggleSkill(name) {
    const s = this._state.skills;
    s.has(name) ? s.delete(name) : s.add(name);
    this._notify();
  }

  subscribe(fn) {
    this._subscribers.push(fn);
    return () => { this._subscribers = this._subscribers.filter(f => f !== fn); };
  }

  _notify() {
    this._subscribers.forEach(fn => fn(this._state));
  }

  reset() {
    this._state = createDefaultState();
    this._notify();
  }
}

export const store = new Store();