import { store }            from "./data/store.js";
import { generateMarkdown } from "./utils/markdown.js";
import { saveToLocal, loadFromLocal, clearLocal } from "./utils/storage.js";
import { initAnalytics, trackGenerated, pad }    from "./utils/analytics.js";
import { showToast }        from "./utils/toast.js";

import { Header }           from "./components/Header.js";
import { Footer }           from "./components/Footer.js";
import { AboutSection }     from "./components/AboutSection.js";
import { TemplateBar }      from "./components/TemplateBar.js";
import { Accordion }        from "./components/Accordion.js";
import { BasicInfoSection } from "./components/BasicInfoSection.js";
import { PromptsSection }   from "./components/PromptsSection.js";
import { SkillsSection }    from "./components/SkillsSection.js";
import { SocialSection }    from "./components/SocialSection.js";
import { StatsSection }     from "./components/StatsSection.js";
import { PreviewPanel }     from "./components/PreviewPanel.js";
import { StatusBar }        from "./components/StatusBar.js";

let header, tplBar, preview, statusBar, footer, about;
let basicSection, promptsSection, skillsSection, socialSection, statsSection;

let analyticsData = { visitors: 0, generated: 0 };

function onAnalyticsUpdate(data) {
  analyticsData = data;
  statusBar?.update(data);
  footer?.update(data);
  header?.setGenerated(data.generated);
}

function buildAccordions(scrollEl) {
  const sections = [
    { id: "basic",  title: "Basic Info",    sub: "Who You Are",            open: true  },
    { id: "intro",  title: "Profile Intro", sub: "Common GitHub Prompts",  open: false },
    { id: "tech",   title: "Tech Stack",    sub: "Searchable Multi-Select",open: false },
    { id: "social", title: "Social Links",  sub: "9 Platforms",            open: false },
    { id: "stats",  title: "GitHub Stats",  sub: "Cards, Streak, Languages",open: false},
  ];

  sections.forEach(cfg => {
    const wrap = document.createElement("div");
    wrap.className = "acc-wrap" + (cfg.open ? " open" : "");
    scrollEl.appendChild(wrap);

    const acc  = new Accordion(wrap, cfg);
    const body = acc.getBody();

    switch (cfg.id) {
      case "basic":
        basicSection   = new BasicInfoSection(body, store); break;
      case "intro":
        promptsSection = new PromptsSection(body, store);   break;
      case "tech":
        skillsSection  = new SkillsSection(body, store);    break;
      case "social":
        socialSection  = new SocialSection(body, store);    break;
      case "stats":
        statsSection   = new StatsSection(body, store);     break;
    }
  });
}

function bindToolbar() {
  document.getElementById("btn-copy")?.addEventListener("click", async () => {
    const md = generateMarkdown(store.get());
    try {
      await navigator.clipboard.writeText(md);
    } catch {
      const t = document.createElement("textarea");
      t.value = md; document.body.appendChild(t); t.select();
      document.execCommand("copy"); document.body.removeChild(t);
    }
    showToast("✓ Copied to clipboard!");
    const data = await trackGenerated(onAnalyticsUpdate);
  });

  document.getElementById("btn-download")?.addEventListener("click", async () => {
    const md   = generateMarkdown(store.get());
    const blob = new Blob([md], { type: "text/markdown" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "README.md"; a.click();
    URL.revokeObjectURL(url);
    showToast("📥 Downloaded README.md");
    await trackGenerated(onAnalyticsUpdate);
  });

  document.getElementById("btn-reset")?.addEventListener("click", () => {
    store.reset();
    clearLocal();

    document.querySelectorAll(".field-inp").forEach(el => el.value = "");
    document.querySelectorAll(".prompt-row").forEach(r => r.classList.remove("active"));
    document.querySelectorAll(".prompt-dot").forEach(d => d.classList.remove("on"));
    document.querySelectorAll(".prompt-inp").forEach(i => { i.value = ""; i.disabled = true; });
    document.querySelectorAll(".skill-chip").forEach(c => c.classList.remove("on"));
    document.querySelectorAll(".stat-card").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".toggle-inp").forEach(c => c.checked = false);
    skillsSection?._renderChips();

    showToast("🔄 Form has been reset");
  });
}

function onStoreChange(state) {
  const md = generateMarkdown(state);
  preview?.update(state, md);
  saveToLocal(state);
}

function restoreFromLocal() {
  const saved = loadFromLocal();
  if (!saved) return;

  const s = store.get();
  ["name","role","bio","github","location","website","email","template","statsTheme"].forEach(k => {
    if (saved[k] != null) s[k] = saved[k];
  });
  if (saved.skills instanceof Set) s.skills = saved.skills;
  if (saved.prompts) Object.assign(s.prompts, saved.prompts);
  if (saved.socials) Object.assign(s.socials, saved.socials);
  if (saved.stats)   Object.assign(s.stats, saved.stats);

  basicSection?.populate(saved);
  promptsSection?.populate(saved.prompts);
  skillsSection?.populate(saved.skills);
  socialSection?.populate(saved.socials);
  statsSection?.populate(saved.stats, saved.statsTheme);
  tplBar?.setActive(saved.template || "modern");
}

function boot() {
  
  header = new Header(document.getElementById("app-header"));

  tplBar = new TemplateBar(document.getElementById("tpl-bar"), (tpl) => {
    store.set({ template: tpl });
  });

  buildAccordions(document.getElementById("sections-scroll"));

  statusBar = new StatusBar(document.getElementById("status-bar"));

  preview = new PreviewPanel(document.getElementById("right-panel"));

  footer = new Footer(document.getElementById("app-footer"));

  about = new AboutSection(document.getElementById("app-about"));

  bindToolbar();

  store.subscribe(onStoreChange);

  restoreFromLocal();

  onStoreChange(store.get());

  initAnalytics(onAnalyticsUpdate).catch(() => {});
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}