const FEATURES = [
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>`,
    title: "Zero Markdown Knowledge Needed",
    desc: "Fill in simple form fields — we write all the markdown syntax for you automatically.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>`,
    title: "Live Preview as You Type",
    desc: "See exactly how your README will look on GitHub in real time — no guessing, no reloading.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>`,
    title: "80+ Skills & Tech Badges",
    desc: "Pick from 9 categories — Languages, Frontend, Backend, DevOps, AI/ML, and more. Badges auto-generate.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>`,
    title: "5 Ready-Made Templates",
    desc: "Switch between Minimal, Modern, Developer, Hacker, and Elegant styles with a single click.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>`,
    title: "GitHub Stats & Widgets",
    desc: "Add GitHub stats cards, streak stats, top languages, trophy showcases, and activity graphs.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v14a2 2 0 0 1-2 2z"/>
      <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
    </svg>`,
    title: "Auto-Save & One-Click Export",
    desc: "Your progress is saved automatically. Copy markdown or download README.md in one click.",
  },
];

const STEPS = [
  { n: "01", title: "Fill Your Info",    desc: "Enter your name, role, bio, GitHub username and location." },
  { n: "02", title: "Pick Your Skills",  desc: "Search and select tech skills from 9 categories." },
  { n: "03", title: "Choose a Template", desc: "Switch templates and see the preview update instantly." },
  { n: "04", title: "Add Social Links",  desc: "Connect LinkedIn, Twitter, LeetCode and more." },
  { n: "05", title: "Export & Paste",    desc: "Copy markdown or download README.md and paste on GitHub." },
];

export class AboutSection {
  constructor(container) {
    this.container = container;
    this._render();
  }

  _render() {
    this.container.innerHTML = `
      <div class="about-inner">

        <!-- Heading -->
        <h2 class="about-heading">
          Everything you need to build a<br/>
          <span>standout GitHub profile</span>
        </h2>
        <p class="about-sub">
          ReadMeCraft is a free and open-source tool that helps developers create professional GitHub profile READMEs without writing a single line of Markdown manually.
        </p>

        <!-- Feature cards -->
        <div class="about-grid">
          ${FEATURES.map(f => `
            <div class="about-card">
              <div class="about-card-icon">${f.icon}</div>
              <div class="about-card-title">${f.title}</div>
              <div class="about-card-desc">${f.desc}</div>
            </div>
          `).join("")}
        </div>

        <!-- How it works -->
        <div class="about-eyebrow" style="margin-top:8px">
          <span class="about-eyebrow-line"></span>
          How It Works
          <span class="about-eyebrow-line r"></span>
        </div>

        <div class="about-steps">
          ${STEPS.map((s, i) => `
            <div class="about-step">
              <div class="about-step-num">${s.n}</div>
              <div class="about-step-title">${s.title}</div>
              <div class="about-step-desc">${s.desc}</div>
            </div>
            ${i < STEPS.length - 1 ? `<div class="about-step-connector"></div>` : ""}
          `).join("")}
        </div>

        <!-- CTA -->
        <div class="about-cta">
          <span class="about-cta-text">Ready to build your profile?</span>
          <button class="about-cta-btn" onclick="document.getElementById('app-tool').scrollIntoView({behavior:'smooth'})"> 
            ↓ Start Building — It's Free
          </button>
        </div>

      </div>
    `;
  }
}