// ─── PromptsSection.js ─ GitHub intro prompts ────────────────────────────────
import { PROMPTS } from "../data/data.js";

export class PromptsSection {
  constructor(container, store) {
    this.container = container;
    this.store     = store;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="prompts-hint">Toggle a prompt then type your answer</div>
      <div class="prompts-list">
        ${PROMPTS.map(p => `
          <div class="prompt-row" id="pr-${p.id}">
            <span class="prompt-emoji">${p.icon}</span>
            <span class="prompt-label">${p.label}:</span>
            <input class="prompt-inp" id="pi-${p.id}" type="text" placeholder="${p.ph}" disabled/>
            <div class="prompt-dot" id="pd-${p.id}" data-id="${p.id}" role="button" tabindex="0" aria-label="Toggle ${p.label}"></div>
          </div>
        `).join("")}
      </div>
    `;

    // Bind dot toggles
    this.container.querySelectorAll(".prompt-dot").forEach(dot => {
      const activate = () => this._toggle(dot.dataset.id);
      dot.addEventListener("click", activate);
      dot.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") activate(); });
    });

    // Bind text inputs
    PROMPTS.forEach(p => {
      const inp = this.container.querySelector(`#pi-${p.id}`);
      if (!inp) return;
      inp.addEventListener("input", () => {
        this.store.setNested("prompts", p.id, {
          on: this.store.get().prompts[p.id]?.on ?? false,
          val: inp.value,
        });
      });
    });
  }

  _toggle(id) {
    const state  = this.store.get();
    const current = state.prompts[id] ?? { on: false, val: "" };
    const nextOn  = !current.on;

    this.store.setNested("prompts", id, { on: nextOn, val: current.val });

    const row = this.container.querySelector(`#pr-${id}`);
    const dot = this.container.querySelector(`#pd-${id}`);
    const inp = this.container.querySelector(`#pi-${id}`);

    row.classList.toggle("active", nextOn);
    dot.classList.toggle("on", nextOn);
    inp.disabled = !nextOn;
    if (nextOn) inp.focus();
  }

  populate(promptsData) {
    PROMPTS.forEach(p => {
      const d = promptsData?.[p.id];
      if (!d) return;
      const inp = this.container.querySelector(`#pi-${p.id}`);
      if (inp) inp.value = d.val || "";
      if (d.on) this._toggle(p.id); // activates row + updates store
    });
  }
}