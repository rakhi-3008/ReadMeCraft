// ─── markdown.js ─ Pure markdown generation ───────────────────────────────────
import { PROMPTS, SOCIALS, SKILLS } from "../data/data.js";

const ALL_SKILLS = Object.values(SKILLS).flat();

function findSkill(name) {
  return ALL_SKILLS.find(s => s.n === name);
}

function encodeLabel(str) {
  return encodeURIComponent(str.replace(/\s+/g, "_"));
}

// ── Header by template ─────────────────────────────────────────────────────────
function buildHeader(state) {
  const { name, role, github, template } = state;
  const n = name || "Your Name";
  const r = role || "Developer";
  const g = github || "yourusername";

  switch (template) {
    case "hacker":
      return (
        `<div align="center">\n\n` +
        `# \`> ${n};\`\n\n` +
        `![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=20&pause=1000&color=00FF41&background=00000000&center=true&vCenter=true&width=600&lines=${encodeURIComponent(r)})\n\n` +
        `</div>\n\n---\n\n`
      );
    case "modern":
      return (
        `<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header` +
        `&text=${encodeURIComponent(n)}&fontSize=56&fontColor=ffffff&animation=fadeIn&fontAlignY=38` +
        `&desc=${encodeURIComponent(r)}&descAlignY=55&descAlign=50" width="100%"/>\n\n`
      );
    case "elegant":
      return `<div align="center">\n\n# ✨ ${n} ✨\n\n*${r}*\n\n---\n\n</div>\n\n`;
    case "developer":
      return (
        `# Hi 👋, I'm ${n}\n\n### ${r}\n\n` +
        `![Profile Views](https://komarev.com/ghpvc/?username=${g}&color=00e5ff&style=flat-square)\n\n`
      );
    default: // minimal
      return `# Hi there 👋 I'm **${n}**\n\n> ${r}\n\n`;
  }
}

// ── Footer by template ─────────────────────────────────────────────────────────
function buildFooter(template) {
  if (template === "modern") {
    return `\n<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer" width="100%"/>\n`;
  }
  if (template === "elegant") {
    return `\n---\n\n<div align="center"><i>Thanks for visiting! ⭐ Star repos if you find them helpful!</i></div>\n`;
  }
  return "";
}

// ── Active prompts ──────────────────────────────────────────────────────────────
function buildPrompts(promptsState) {
  const active = PROMPTS.filter(p => promptsState[p.id]?.on && promptsState[p.id]?.val);
  if (!active.length) return "";

  let md = `## 🙋 About Me\n\n`;
  active.forEach(p => {
    md += `- ${p.icon} **${p.label}:** ${promptsState[p.id].val}\n`;
  });
  return md + "\n";
}

// ── Social links ────────────────────────────────────────────────────────────────
function buildSocials(socialsState) {
  const active = SOCIALS.filter(s => socialsState[s.id]);
  if (!active.length) return "";

  let md = `## 🤝 Connect with Me\n\n<p align="left">\n`;
  active.forEach(s => {
    const url = socialsState[s.id].startsWith("http") ? socialsState[s.id] : "#";
    md += `  <a href="${url}" target="_blank">\n`;
    md += `    <img src="https://img.shields.io/badge/${encodeLabel(s.label)}-${s.color}?style=for-the-badge&logo=${s.logo}&logoColor=white" alt="${s.label}" />\n`;
    md += `  </a>\n`;
  });
  return md + `</p>\n\n`;
}

// ── Skills ──────────────────────────────────────────────────────────────────────
function buildSkills(selectedSkills) {
  if (!selectedSkills.size) return "";

  // Group by category
  const grouped = {};
  selectedSkills.forEach(name => {
    const skill = findSkill(name);
    if (!skill) return;
    const cat = Object.entries(SKILLS).find(([, items]) => items.some(i => i.n === name))?.[0];
    if (cat) {
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(skill);
    }
  });

  let md = `## 🛠️ Tech Stack & Tools\n\n`;
  Object.entries(grouped).forEach(([cat, items]) => {
    md += `**${cat}**\n\n<p>\n`;
    items.forEach(s => {
      md += `  <img src="https://img.shields.io/badge/${encodeLabel(s.n)}-${s.c}?style=for-the-badge&logo=${s.logo}&logoColor=white" alt="${s.n}" />\n`;
    });
    md += `</p>\n\n`;
  });
  return md;
}

// ── GitHub Stats ────────────────────────────────────────────────────────────────
function buildStats(statsState, github, theme) {
  const g = github || "yourusername";
  const hasAny = Object.values(statsState).some(Boolean);
  if (!hasAny) return "";

  let md = `## 📊 GitHub Analytics\n\n`;

  if (statsState.statcard) {
    md += `<p align="center">\n`;
    md += `  <img src="https://github-readme-stats.vercel.app/api?username=${g}&show_icons=true&theme=${theme}&hide_border=true&count_private=true&rank_icon=github" alt="GitHub Stats" />\n`;
    md += `</p>\n\n`;
  }
  if (statsState.streak) {
    md += `<p align="center">\n`;
    md += `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${g}&theme=${theme}&hide_border=true" alt="Streak" />\n`;
    md += `</p>\n\n`;
  }
  if (statsState.langs) {
    md += `<p align="center">\n`;
    md += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${g}&layout=compact&theme=${theme}&hide_border=true&langs_count=8" alt="Top Languages" />\n`;
    md += `</p>\n\n`;
  }
  if (statsState.trophies) {
    md += `<p align="center">\n`;
    md += `  <img src="https://github-profile-trophy.vercel.app/?username=${g}&theme=darkhub&no-frame=true&no-bg=true&margin-w=4&row=1" alt="Trophies" />\n`;
    md += `</p>\n\n`;
  }
  if (statsState.activity) {
    md += `<p align="center">\n`;
    md += `  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${g}&theme=react-dark&hide_border=true" alt="Activity Graph" />\n`;
    md += `</p>\n\n`;
  }
  return md;
}

// ── Main export ─────────────────────────────────────────────────────────────────
export function generateMarkdown(state) {
  const { name, role, bio, github, location, website, email,
          template, prompts, skills, socials, stats, statsTheme } = state;

  let md = buildHeader(state);

  if (bio) md += `${bio}\n\n`;

  const meta = [
    location && `📍 **${location}**`,
    website  && `🌐 [Website](${website})`,
    email    && `📧 ${email}`,
  ].filter(Boolean);
  if (meta.length) md += meta.join("   ·   ") + "\n\n";

  md += buildPrompts(prompts);
  md += buildSocials(socials);
  md += buildSkills(skills);
  md += buildStats(stats, github, statsTheme);
  md += buildFooter(template);

  return md.trim();
}