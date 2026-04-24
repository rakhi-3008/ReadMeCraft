// ─── StatsSection.js ─ GitHub stats toggles ──────────────────────────────────
import { STATS, STATS_THEMES } from "../data/data.js";

export class StatsSection {
  constructor(container, store) {
    this.container = container;
    this.store     = store;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="stats-hint">Uses your GitHub username from Basic Info</div>
      <div class="stats-list">
        ${STATS.map(s => `
          <div class="stat-card" id="stc-${s.id}">
            <div class="stat-card-left">
              <span class="stat-icon">${s.icon}</span>
              <div class="stat-text">
                <div class="stat-title">${s.title}</div>
                <div class="stat-sub">${s.sub}</div>
              </div>
            </div>
            <label class="toggle-wrap" aria-label="Toggle ${s.title}">
              <input type="checkbox" class="toggle-inp" id="st-${s.id}"/>
              <span class="toggle-track"><span class="toggle-thumb"></span></span>
            </label>
          </div>
        `).join("")}
      </div>
      <div class="field-group" style="margin-top:16px">
        <label class="field-label">Stats Card Theme</label>
        <select class="field-inp field-select" id="stats-theme">
          ${STATS_THEMES.map(t => `<option value="${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</option>`).join("")}
        </select>
      </div>
    `;

    // Bind checkboxes
    STATS.forEach(s => {
      const cb = this.container.querySelector(`#st-${s.id}`);
      if (!cb) return;
      cb.addEventListener("change", () => {
        this.store.setNested("stats", s.id, cb.checked);
        this.container.querySelector(`#stc-${s.id}`)?.classList.toggle("active", cb.checked);
      });
    });

    // Bind theme select
    const themeEl = this.container.querySelector("#stats-theme");
    if (themeEl) {
      themeEl.addEventListener("change", () => {
        this.store.set({ statsTheme: themeEl.value });
      });
    }
  }

  populate(statsData, statsTheme) {
    STATS.forEach(s => {
      const cb  = this.container.querySelector(`#st-${s.id}`);
      const card = this.container.querySelector(`#stc-${s.id}`);
      if (cb && statsData?.[s.id]) {
        cb.checked = true;
        card?.classList.add("active");
        this.store.setNested("stats", s.id, true);
      }
    });
    const themeEl = this.container.querySelector("#stats-theme");
    if (themeEl && statsTheme) {
      themeEl.value = statsTheme;
      this.store.set({ statsTheme });
    }
  }
}