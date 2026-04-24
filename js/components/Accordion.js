// ─── Accordion.js ─ Reusable collapsible section ─────────────────────────────

const ICONS = {
  basic: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  intro: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
  tech:  `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
  social:`<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,
  stats: `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`,
};

export class Accordion {
  constructor(container, { id, title, sub, open = false }) {
    this.container = container;
    this.id     = id;
    this.isOpen = open;
    this._render(title, sub);
  }

  _render(title, sub) {
    this.container.innerHTML = `
      <div class="acc-head" role="button" tabindex="0" aria-expanded="${this.isOpen}">
        <div class="acc-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            ${ICONS[this.id] || ""}
          </svg>
        </div>
        <div class="acc-info">
          <div class="acc-title">${title}</div>
          <div class="acc-sub">${sub}</div>
        </div>
        <svg class="acc-arrow ${this.isOpen ? "open" : ""}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="acc-body" style="${this.isOpen ? "" : "display:none"}"></div>
    `;

    this.headEl  = this.container.querySelector(".acc-head");
    this.bodyEl  = this.container.querySelector(".acc-body");
    this.arrowEl = this.container.querySelector(".acc-arrow");

    this.headEl.addEventListener("click", () => this.toggle());
    this.headEl.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") this.toggle(); });
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.bodyEl.style.display  = this.isOpen ? "block" : "none";
    this.arrowEl.classList.toggle("open", this.isOpen);
    this.headEl.setAttribute("aria-expanded", this.isOpen);
    this.container.classList.toggle("open", this.isOpen);
  }

  getBody() { return this.bodyEl; }
}