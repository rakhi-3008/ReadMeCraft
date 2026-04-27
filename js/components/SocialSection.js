import { SOCIALS } from "../data/data.js";

export class SocialSection {
  constructor(container, store) {
    this.container = container;
    this.store     = store;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="social-list">
        ${SOCIALS.map(s => `
          <div class="social-row">
            <div class="soc-icon" style="background:#${s.color}18;border:1px solid #${s.color}35;">
              <span>${s.icon}</span>
            </div>
            <div class="social-field-body">
              <label class="social-label">${s.label}</label>
              <input class="field-inp" id="si-${s.id}" type="text" placeholder="${s.ph}" autocomplete="off"/>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    SOCIALS.forEach(s => {
      const el = this.container.querySelector(`#si-${s.id}`);
      if (!el) return;
      el.addEventListener("input", () => {
        this.store.setNested("socials", s.id, el.value);
      });
    });
  }

  populate(socialsData) {
    SOCIALS.forEach(s => {
      const el = this.container.querySelector(`#si-${s.id}`);
      if (el && socialsData?.[s.id]) el.value = socialsData[s.id];
    });
  }
}