// ─── TemplateBar.js ─ Template selector pills ────────────────────────────────
import { TEMPLATES } from "../data/data.js";

export class TemplateBar {
  constructor(container, onChange) {
    this.container = container;
    this.onChange   = onChange;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="tpl-label">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
        Template
      </div>
      <div class="tpl-pills">
        ${TEMPLATES.map(t => `
          <button class="tpl-pill ${t === "modern" ? "active" : ""}" data-tpl="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        `).join("")}
      </div>
    `;

    this.container.querySelectorAll(".tpl-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        this.container.querySelectorAll(".tpl-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.onChange(btn.dataset.tpl);
      });
    });
  }

  setActive(tpl) {
    this.container.querySelectorAll(".tpl-pill").forEach(b => {
      b.classList.toggle("active", b.dataset.tpl === tpl);
    });
  }
}