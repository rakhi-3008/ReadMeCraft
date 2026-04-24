import { PROMPTS, SOCIALS, SKILLS } from "../data/data.js";

const ALL_SKILLS = Object.values(SKILLS).flat();

export class PreviewPanel {
  constructor(container) {
    this.container = container;
    this._view     = "preview"; // "preview" | "markdown"
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="preview-toolbar">
        <div class="view-tabs">
          <button class="vtab active" data-view="preview">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            Preview
          </button>
          <button class="vtab" data-view="markdown">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Markdown
          </button>
        </div>
        <div class="toolbar-actions">
          <button class="tbtn tbtn-primary" id="btn-copy">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copy Markdown
          </button>
          <button class="tbtn" id="btn-download">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </button>
          <button class="tbtn" id="btn-reset">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>
            </svg>
            Reset
          </button>
        </div>
      </div>

      <div class="preview-window-wrap">
        <div class="preview-window">
          <div class="win-chrome">
            <div class="win-dots">
              <div class="win-dot red"></div>
              <div class="win-dot yellow"></div>
              <div class="win-dot green"></div>
            </div>
            <div class="win-path">
              <span id="win-user">you</span>/<span id="win-user2">you</span>
              <span class="win-sep">·</span>
              <span>README.md</span>
            </div>
            <div class="win-tpl-badge" id="win-tpl">MODERN</div>
          </div>
          <div class="win-body">
            <div class="gh-render" id="gh-render"></div>
            <pre class="raw-view" id="raw-view" style="display:none"></pre>
          </div>
        </div>
      </div>
    `;

    // View tabs
    this.container.querySelectorAll(".vtab").forEach(btn => {
      btn.addEventListener("click", () => {
        this._view = btn.dataset.view;
        this.container.querySelectorAll(".vtab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.container.querySelector("#gh-render").style.display = this._view === "preview" ? "block" : "none";
        this.container.querySelector("#raw-view").style.display  = this._view === "markdown" ? "block" : "none";
      });
    });
  }

  // Called by app.js on every state change
  update(state, markdown) {
    const { github, template } = state;
    const g = github || "you";

    // Update chrome labels
    this.container.querySelector("#win-user").textContent  = g;
    this.container.querySelector("#win-user2").textContent = g;
    this.container.querySelector("#win-tpl").textContent   = template.toUpperCase();

    // Raw markdown
    this.container.querySelector("#raw-view").textContent = markdown;

    // Rendered preview
    this.container.querySelector("#gh-render").innerHTML = this._buildHTML(state);
  }

  _buildHTML(state) {
    const { name, role, bio, github, location, website, email,
            template, prompts, skills, socials, stats, statsTheme } = state;

    const n = name || "Your Name";
    const r = role || "";
    const g = github || "yourusername";
    let html = "";

    // ── Header ──────────────────────────────────────────────────────────────
    if (template === "hacker") {
      html += `
        <div class="gh-hacker-head">
          <div class="gh-hacker-name">&gt; ${n};<span class="cursor">_</span></div>
          <div class="gh-hacker-role">${r}</div>
        </div>`;
    } else if (template === "modern") {
      html += `
        <div class="gh-wave-header">
          <div class="gh-wave-line"></div>
          <h1>${n}</h1>
          <p class="gh-tagline">${r}</p>
        </div>`;
    } else if (template === "elegant") {
      html += `
        <div class="gh-elegant-head">
          <h1>✨ ${n} ✨</h1>
          <p class="gh-elegant-role"><em>${r}</em></p>
          <hr class="gh-hr"/>
        </div>`;
    } else if (template === "developer") {
      html += `<h1 class="gh-h1">Hi 👋, I'm ${n}</h1><p class="gh-tagline">${r}</p>`;
    } else {
      html += `<h1 class="gh-h1">Hi there 👋 I'm <strong>${n}</strong></h1><p class="gh-tagline">${r}</p>`;
    }

    // ── Bio & Meta ──────────────────────────────────────────────────────────
    if (bio) html += `<p class="gh-bio">${bio}</p>`;

    const metaItems = [
      location && `<span>📍 ${location}</span>`,
      website  && `<a href="${website}" class="gh-link">🌐 ${website}</a>`,
      email    && `<span>📧 ${email}</span>`,
    ].filter(Boolean);
    if (metaItems.length) html += `<div class="gh-meta">${metaItems.join("")}</div>`;

    // ── Prompts ─────────────────────────────────────────────────────────────
    const activePrompts = PROMPTS.filter(p => prompts[p.id]?.on && prompts[p.id]?.val);
    if (activePrompts.length) {
      html += `<h2 class="gh-h2">🙋 About Me</h2><ul class="gh-list">`;
      activePrompts.forEach(p => {
        html += `<li>${p.icon} <strong>${p.label}:</strong> ${prompts[p.id].val}</li>`;
      });
      html += `</ul>`;
    }

    // ── Socials ─────────────────────────────────────────────────────────────
    const activeSocials = SOCIALS.filter(s => socials[s.id]);
    if (activeSocials.length) {
      html += `<h2 class="gh-h2">🤝 Connect with Me</h2><div class="gh-badges">`;
      activeSocials.forEach(s => {
        html += `<span class="gh-social-badge" style="background:#${s.color};box-shadow:0 2px 10px #${s.color}55">${s.icon} ${s.label}</span>`;
      });
      html += `</div>`;
    }

    // ── Skills ──────────────────────────────────────────────────────────────
    if (skills.size > 0) {
      html += `<h2 class="gh-h2">🛠️ Tech Stack</h2><div class="gh-badges">`;
      skills.forEach(name => {
        const s = ALL_SKILLS.find(x => x.n === name);
        if (s) html += `<span class="gh-skill-badge" style="border-color:#${s.c}44;background:#${s.c}18">${s.e} ${s.n}</span>`;
      });
      html += `</div>`;
    }

    // ── Stats ────────────────────────────────────────────────────────────────
    const hasStats = Object.values(stats).some(Boolean);
    if (hasStats) html += `<h2 class="gh-h2">📊 GitHub Analytics</h2>`;

    if (stats.statcard) html += `<img class="gh-stat-img" src="https://github-readme-stats.vercel.app/api?username=${g}&show_icons=true&theme=${statsTheme}&hide_border=true&count_private=true" alt="GitHub Stats"/>`;
    if (stats.streak)   html += `<img class="gh-stat-img" src="https://github-readme-streak-stats.herokuapp.com/?user=${g}&theme=${statsTheme}&hide_border=true" alt="Streak"/>`;
    if (stats.langs)    html += `<img class="gh-stat-img" style="max-width:48%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${g}&layout=compact&theme=${statsTheme}&hide_border=true" alt="Top Languages"/>`;
    if (stats.trophies) html += `<img class="gh-stat-img" src="https://github-profile-trophy.vercel.app/?username=${g}&theme=darkhub&no-frame=true&no-bg=true&margin-w=4&row=1" alt="Trophies"/>`;
    if (stats.activity) html += `<img class="gh-stat-img" src="https://github-readme-activity-graph.vercel.app/graph?username=${g}&theme=react-dark&hide_border=true" alt="Activity"/>`;

    return html;
  }
}