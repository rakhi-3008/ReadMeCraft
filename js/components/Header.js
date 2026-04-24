export class Header {
  constructor(container) {
    this.container = container;
    this.generatedEl = null;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="hdr-left" >
        <div class="logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="logo-name">ReadMe<span class="ft-accent">Craft</span></span>
          <span class="logo-sub">GitHub Profile README Generator</span>
        </div>
      </div>
      <div class="hdr-right">
        <div class="gen-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span id="hdr-gen-count">0</span> GENERATED
        </div>
      </div>
    `;
    this.generatedEl = this.container.querySelector("#hdr-gen-count");
  }

  setGenerated(n) {
    if (this.generatedEl) this.generatedEl.textContent = n;
  }
}