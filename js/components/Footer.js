export class Footer {
  constructor(container) {
    this.container   = container;
    this.visitorsEl  = null;
    this.generatedEl = null;
    this._render();
  }

  _render() {
    this.container.innerHTML = `

      <div class="ft-top">

        <div class="ft-brand">
          <div class="ft-logo">
            <div class="ft-logo-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </div>
            <span class="ft-logo-name">ReadMe<span class="ft-accent">Craft</span></span>
            <span class="logo-sub">Generate stunning GitHub profile README's in seconds.</span>
          </div>
        </div>

        <nav class="ft-nav">
          <a href="https://github.com/rakhi-3008" target="_blank" rel="noopener">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
            Twitter
          </a>
          <a href="" target="_blank" rel="noopener">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
        </nav>

      </div>

      <!-- BOTTOM ROW: copyright · star -->
      <div class="ft-bottom">
        <div class="ft-bottom-left">
          <span>© 2026 ReadMeCraft</span>
          <span class="ft-sep">·</span>
          <span>Built with <span class="ft-heart">♥</span> by <a href="https://github.com/rakhi-3008" target="_blank" rel="noopener" class="ft-author">@Rakhi</a></span>
        
        </div>
        <div class="ft-bottom-right">
          <a class="ft-star" href="https://github.com/rakhi-3008/ReadMeCraft" target="_blank" rel="noopener">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Star on GitHub
          </a>
        </div>
      </div>
    `;

    this.visitorsEl  = this.container.querySelector("#footer-visitors");
    this.generatedEl = this.container.querySelector("#footer-generated");
  }

  update({ visitors, generated }) {
    const pad = (n, d = 5) => String(Math.max(0, parseInt(n) || 0)).padStart(d, "0");
    if (this.visitorsEl)  this.visitorsEl.textContent  = pad(visitors);
    if (this.generatedEl) this.generatedEl.textContent = pad(generated);
  }
}