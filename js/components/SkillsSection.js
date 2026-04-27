import { SKILLS } from "../data/data.js";

export class SkillsSection {
  constructor(container, store) {
    this.container = container;
    this.store     = store;
    this._filter   = "";
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="skill-search-wrap">
        <svg class="search-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input class="field-inp skill-search-inp" id="skill-search" type="text" placeholder="Search skills..."/>
      </div>
      <div class="skill-count-bar">
        <span id="skill-selected-count">0 selected</span>
        <button class="clear-skills-btn" id="clear-skills">Clear all</button>
      </div>
      <div class="skill-cats" id="skill-cats"></div>
    `;

    this.catsEl = this.container.querySelector("#skill-cats");

    this.container.querySelector("#skill-search").addEventListener("input", e => {
      this._filter = e.target.value;
      this._renderChips();
    });

    this.container.querySelector("#clear-skills").addEventListener("click", () => {
      this.store.get().skills.forEach(name => this.store.toggleSkill(name));
      this._renderChips();
    });

    this._renderChips();
  }

  _renderChips() {
    const f        = this._filter.toLowerCase().trim();
    const selected = this.store.get().skills;

    this.catsEl.innerHTML = Object.entries(SKILLS).map(([cat, items]) => {
      const visible = f ? items.filter(s => s.n.toLowerCase().includes(f)) : items;
      if (!visible.length) return "";

      const chips = visible.map(s => `
        <div class="skill-chip ${selected.has(s.n) ? "on" : ""}"
             data-skill="${s.n}" role="checkbox" tabindex="0"
             aria-checked="${selected.has(s.n)}" title="${s.n}">
          <span class="chip-emoji">${s.e}</span>
          <span class="chip-name">${s.n}</span>
          ${selected.has(s.n) ? `<svg class="chip-check" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>` : ""}
        </div>
      `).join("");

      return `
        <div class="skill-cat">
          <div class="skill-cat-label">${cat}</div>
          <div class="skill-chips">${chips}</div>
        </div>
      `;
    }).join("");

    this.catsEl.querySelectorAll(".skill-chip").forEach(chip => {
      const toggle = () => {
        this.store.toggleSkill(chip.dataset.skill);
        this._renderChips();
        this._updateCount();
      };
      chip.addEventListener("click", toggle);
      chip.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") toggle(); });
    });

    this._updateCount();
  }

  _updateCount() {
    const n = this.store.get().skills.size;
    const el = this.container.querySelector("#skill-selected-count");
    if (el) el.textContent = n ? `${n} selected` : "0 selected";
  }

  populate(skillsSet) {
    if (!skillsSet) return;
    skillsSet.forEach(name => this.store.get().skills.add(name));
    this._renderChips();
  }
}