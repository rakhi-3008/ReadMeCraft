const FEATURES = [
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
       </svg>`,
    title: "No Markdown, No Problem",
    desc: "Just fill in simple fields — we handle all the markdown syntax, formatting, and badge generation automatically.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>`,
    title: "Live Preview as You Type",
    desc: "See exactly how your README looks on GitHub in real time. Switch between 5 templates — Minimal, Modern, Developer, Hacker, Elegant — instantly.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">       <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
     </svg>`,
    title: "80+ Skills & GitHub Stats",
    desc: "Pick tech badges from 9 categories — Languages, Frontend, Backend, DevOps, AI/ML and more. Add stats cards, streaks, trophies and activity graphs.",
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
       <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v14a2 2 0 0 1-2 2z"/>
       <polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
     </svg>`,
    title: "Auto-Save & One-Click Export",
    desc: "Your progress saves automatically to your browser. When ready, copy the markdown or download README.md and paste it on GitHub.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Fill Your Details",
    desc: "Add your basic info, profile intro, tech stack, social links, and GitHub stats preferences."
  },
  {
    n: "02",
    title: "Choose a Template",
    desc: "Pick from 5 stunning styles — Minimal, Modern, Developer, Hacker, or Elegant — and watch the preview update instantly."
  },
  {
    n: "03",
    title: "Export & Publish",
    desc: "Copy the markdown or download README.md, then paste it into your GitHub profile repository."
  },
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
          ReadMeCraft is a free tool that helps developers create professional GitHub profile READMEs without writing a single line of Markdown manually.
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