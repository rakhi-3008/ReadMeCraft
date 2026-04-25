<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=ReadMeCraft&fontSize=56&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=GitHub%20Profile%20README%20Generator&descAlignY=55&descAlign=50" width="100%"/>

<br/>

[![Made with Vanilla JS](https://img.shields.io/badge/Made%20with-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/Styled%20with-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![ES Modules](https://img.shields.io/badge/ES-Modules-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[![License: MIT](https://img.shields.io/badge/License-MIT-00e5ff?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br/>

> **Generate stunning GitHub profile READMEs in seconds — no markdown knowledge needed.**

<br/>

[🚀 Live Demo](#) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/YOUR_USERNAME/readmecraft/issues/new?template=bug_report.md) &nbsp;·&nbsp; [✨ Request Feature](https://github.com/YOUR_USERNAME/readmecraft/issues/new?template=feature_request.md)

</div>

---

## 📸 Preview

<div align="center">
  <img src="https://via.placeholder.com/1200x650/0d1117/00e5ff?text=README.craft+Screenshot" alt="README.craft Preview" width="100%" style="border-radius:10px;border:1px solid #30363d"/>
</div>

---

## ✨ Features

- 🎨 **5 Ready-Made Templates** — Minimal, Modern, Developer, Hacker, Elegant
- ⚡ **Live Preview** — See your README update in real time as you type
- 🛠️ **80+ Skill Badges** — Pick from 9 categories with icons and shields.io badges
- 💬 **GitHub Intro Prompts** — Toggle the classic "currently working on", "learning", "fun fact" fields
- 🌐 **9 Social Platforms** — LinkedIn, Twitter/X, Instagram, Discord, LeetCode, HackerRank, Codeforces and more
- 📊 **GitHub Stats Widgets** — Stats card, streak stats, top languages, trophy showcase, activity graph
- 💾 **Auto-Save** — Progress saved to localStorage, never lose your work on refresh
- 📋 **One-Click Export** — Copy markdown or download `README.md` instantly
- 👥 **Live Analytics** — Shared visitor and generated README counters
- 📱 **Fully Responsive** — Works on desktop, tablet and mobile
- 🔒 **Zero Dependencies** — Pure Vanilla JS, no frameworks, no build step

---

## 🗂️ Project Structure

```
readmecraft/
├── index.html                      ← Entry point (clean HTML shell)
├── css/
│   └── app.css                     ← All styles, design tokens, layout
└── js/
    ├── app.js                      ← Main orchestrator, wires all modules
    ├── data/
    │   ├── data.js                 ← All static data (skills, socials, prompts, stats)
    │   └── store.js                ← Reactive state store with subscribe pattern
    ├── utils/
    │   ├── markdown.js             ← Pure README.md generator (no DOM)
    │   ├── storage.js              ← localStorage save / load / clear
    │   ├── analytics.js            ← Shared visitor & generated counters
    │   └── toast.js                ← Notification helper
    └── components/
        ├── Header.js               ← Top bar with logo and generated count
        ├── TemplateBar.js          ← Template pill selector (5 styles)
        ├── Accordion.js            ← Reusable collapsible section panel
        ├── BasicInfoSection.js     ← Name, role, bio, GitHub, location, site
        ├── PromptsSection.js       ← 8 toggleable GitHub intro prompts
        ├── SkillsSection.js        ← Searchable skill chips across 9 categories
        ├── SocialSection.js        ← 9 social platform link fields
        ├── StatsSection.js         ← GitHub stat card toggles + theme picker
        ├── PreviewPanel.js         ← Live GitHub-style render + raw markdown tab
        ├── AboutSection.js         ← Landing section with features + how-it-works
        ├── StatusBar.js            ← Live visitor / generated counter display
        └── Footer.js               ← Centered footer with links and credits
```

---

## 🚀 Getting Started

### Option 1 — Single File (Easiest)

Download `readmecraft.html` and open it directly in any browser. Everything is bundled — no setup needed.

### Option 2 — Run Locally with a Server

ES Modules require an HTTP server (not `file://`). Choose any option below:

**VS Code Live Server** *(recommended)*
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

**Node.js**
```bash
# Install serve (one-time)
npm install -g serve

# Run inside project folder
cd readmecraft
serve .
```

**Python**
```bash
cd readmecraft
python -m http.server 8080
# Open http://localhost:8080
```

---

## 🌐 Deploy Online

### Netlify Drop *(no account needed)*
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `readmecraft/` folder onto the page
3. Get a live URL instantly ✅

### GitHub Pages
```bash
git init
git add .
git commit -m "🚀 Initial commit — README.craft"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/readmecraft.git
git push -u origin main
```
Then: **Repo Settings → Pages → Source → main → Save**

Your site: `https://YOUR_USERNAME.github.io/readmecraft`

### Vercel
```bash
npm install -g vercel
cd readmecraft
vercel
```

---

## 🛠️ How It Works

```
User fills form → store.js (reactive state)
                        ↓
              markdown.js generates README string
                        ↓
         PreviewPanel renders GitHub-style HTML
                        ↓
          Copy / Download README.md
```

The app uses a **pub/sub reactive store** — any form change calls `store.set()` which notifies all subscribers. `app.js` subscribes and re-renders the preview + auto-saves to localStorage on every change.

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Language | Vanilla JavaScript (ES2022) |
| Modules | Native ES Modules (`import`/`export`) |
| Styling | Pure CSS3 with custom properties |
| State | Custom pub/sub reactive store |
| Persistence | Browser `localStorage` |
| Analytics | Shared persistent key-value storage |
| Fonts | Space Grotesk + JetBrains Mono (Google Fonts) |
| Badges | [shields.io](https://shields.io) |
| Stats | [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) |
| Streak | [github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats) |
| Trophies | [github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy) |
| Headers | [capsule-render](https://github.com/kyechan99/capsule-render) |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/readmecraft.git
cd readmecraft

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes, then commit
git add .
git commit -m "✨ Add: your feature description"

# 5. Push and open a Pull Request
git push origin feature/your-feature-name
```

### Ideas for contributions
- 🌍 Add more social platforms
- 🎨 Add new README templates
- ⚡ Add more skill badges / categories
- 🌐 Internationalization (i18n)
- 🧪 Add tests

---

## 📋 Roadmap

- [x] 5 README templates
- [x] 80+ skill badges across 9 categories
- [x] Live GitHub-style preview
- [x] localStorage auto-save
- [x] Shared analytics (visitor + generated counters)
- [x] About / landing section
- [x] Responsive design
- [ ] Dark / light theme toggle
- [ ] Custom color accent picker
- [ ] Import existing README to edit
- [ ] More templates (Minimalist Pro, Neon, Retro)
- [ ] PWA support (offline capable)
- [ ] More language translations

---
## 👤 Author

**Your Name**

[![GitHub](https://img.shields.io/badge/GitHub-@yourhandle-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR_USERNAME)
[![Twitter](https://img.shields.io/badge/Twitter-@yourhandle-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/YOUR_HANDLE)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yourname-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_PROFILE)

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer" width="100%"/>

**If this project helped you, please consider giving it a ⭐**

Made with ❤️ by [Rakhi](https://github.com/YOUR_USERNAME)

</div>
