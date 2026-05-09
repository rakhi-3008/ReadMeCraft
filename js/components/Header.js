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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
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