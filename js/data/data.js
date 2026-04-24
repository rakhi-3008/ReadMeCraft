// ─── data.js ─ All static app data ───────────────────────────────────────────

export const PROMPTS = [
  { id: "working",  icon: "🔭", label: "Working on",          ph: "my awesome project..."         },
  { id: "learning", icon: "🌱", label: "Learning",            ph: "TypeScript, Rust, Web3..."     },
  { id: "collab",   icon: "👯", label: "Collaborate on",      ph: "open source projects..."       },
  { id: "help",     icon: "🤔", label: "Help with",           ph: "machine learning..."           },
  { id: "askme",    icon: "💬", label: "Ask me about",        ph: "React, Node.js, APIs..."       },
  { id: "reach",    icon: "📫", label: "Reach me",            ph: "email@example.com"             },
  { id: "pronouns", icon: "😄", label: "Pronouns",            ph: "He/Him · She/Her · They/Them" },
  { id: "funfact",  icon: "⚡", label: "Fun fact",            ph: "I debug with console.log!"    },
];

export const SKILLS = {
  "Languages": [
    { n: "Python",      e: "🐍", c: "3776AB", logo: "python"       },
    { n: "JavaScript",  e: "🟨", c: "F7DF1E", logo: "javascript"   },
    { n: "TypeScript",  e: "🔷", c: "3178C6", logo: "typescript"   },
    { n: "Java",        e: "☕", c: "ED8B00", logo: "openjdk"      },
    { n: "C++",         e: "⚙️", c: "00599C", logo: "cplusplus"    },
    { n: "Rust",        e: "🦀", c: "CE422B", logo: "rust"         },
    { n: "Go",          e: "🐹", c: "00ADD8", logo: "go"           },
    { n: "PHP",         e: "🐘", c: "777BB4", logo: "php"          },
    { n: "Ruby",        e: "💎", c: "CC342D", logo: "ruby"         },
    { n: "Swift",       e: "🍎", c: "FA7343", logo: "swift"        },
    { n: "Kotlin",      e: "🎯", c: "7F52FF", logo: "kotlin"       },
    { n: "Dart",        e: "🎯", c: "0175C2", logo: "dart"         },
    { n: "Scala",       e: "⚡", c: "DC322F", logo: "scala"        },
    { n: "R",           e: "📊", c: "276DC3", logo: "r"            },
  ],
  "Frontend": [
    { n: "React",       e: "⚛️", c: "61DAFB", logo: "react"        },
    { n: "Vue.js",      e: "💚", c: "4FC08D", logo: "vuedotjs"     },
    { n: "Angular",     e: "🔴", c: "DD0031", logo: "angular"      },
    { n: "Next.js",     e: "▲",  c: "000000", logo: "nextdotjs"    },
    { n: "Nuxt.js",     e: "💚", c: "00DC82", logo: "nuxtdotjs"    },
    { n: "Svelte",      e: "🔥", c: "FF3E00", logo: "svelte"       },
    { n: "Tailwind",    e: "🎨", c: "06B6D4", logo: "tailwindcss"  },
    { n: "HTML5",       e: "🌐", c: "E34F26", logo: "html5"        },
    { n: "CSS3",        e: "🎨", c: "1572B6", logo: "css3"         },
    { n: "Bootstrap",   e: "🅱️", c: "7952B3", logo: "bootstrap"   },
    { n: "SASS",        e: "💄", c: "CC6699", logo: "sass"         },
    { n: "Three.js",    e: "🌐", c: "000000", logo: "threedotjs"   },
  ],
  "Backend": [
    { n: "Node.js",     e: "🟢", c: "339933", logo: "nodedotjs"    },
    { n: "Express",     e: "🚀", c: "404040", logo: "express"      },
    { n: "Django",      e: "🎸", c: "092E20", logo: "django"       },
    { n: "FastAPI",     e: "⚡", c: "009688", logo: "fastapi"      },
    { n: "Spring",      e: "🌿", c: "6DB33F", logo: "springboot"   },
    { n: "Laravel",     e: "🔴", c: "FF2D20", logo: "laravel"      },
    { n: "Flask",       e: "🧪", c: "000000", logo: "flask"        },
    { n: "GraphQL",     e: "🔗", c: "E10098", logo: "graphql"      },
    { n: "NestJS",      e: "🐈", c: "E0234E", logo: "nestjs"       },
  ],
  "Databases": [
    { n: "MongoDB",     e: "🍃", c: "47A248", logo: "mongodb"      },
    { n: "PostgreSQL",  e: "🐘", c: "316192", logo: "postgresql"   },
    { n: "MySQL",       e: "🐬", c: "4479A1", logo: "mysql"        },
    { n: "Redis",       e: "🔴", c: "DC382D", logo: "redis"        },
    { n: "Firebase",    e: "🔥", c: "FFCA28", logo: "firebase"     },
    { n: "Supabase",    e: "⚡", c: "3ECF8E", logo: "supabase"     },
    { n: "SQLite",      e: "💾", c: "003B57", logo: "sqlite"       },
    { n: "PlanetScale", e: "🪐", c: "000000", logo: "planetscale"  },
  ],
  "DevOps / Cloud": [
    { n: "Docker",      e: "🐳", c: "2CA5E0", logo: "docker"       },
    { n: "Kubernetes",  e: "⚓", c: "326CE5", logo: "kubernetes"   },
    { n: "AWS",         e: "☁️", c: "232F3E", logo: "amazonaws"    },
    { n: "Azure",       e: "🔵", c: "0078D4", logo: "microsoftazure"},
    { n: "GCP",         e: "🌈", c: "4285F4", logo: "googlecloud"  },
    { n: "Linux",       e: "🐧", c: "FCC624", logo: "linux"        },
    { n: "Nginx",       e: "🌿", c: "009639", logo: "nginx"        },
    { n: "Terraform",   e: "🏗️", c: "7B42BC", logo: "terraform"   },
    { n: "GitHub Actions",e:"⚙️",c: "2088FF", logo: "githubactions"},
  ],
  "Tools": [
    { n: "Git",         e: "📦", c: "F05032", logo: "git"          },
    { n: "VS Code",     e: "💻", c: "007ACC", logo: "visualstudiocode"},
    { n: "Postman",     e: "📮", c: "FF6C37", logo: "postman"      },
    { n: "Figma",       e: "🎨", c: "F24E1E", logo: "figma"        },
    { n: "Vite",        e: "⚡", c: "646CFF", logo: "vite"         },
    { n: "Jest",        e: "🃏", c: "C21325", logo: "jest"         },
    { n: "Webpack",     e: "📦", c: "8DD6F9", logo: "webpack"      },
    { n: "Storybook",   e: "📖", c: "FF4785", logo: "storybook"    },
  ],
  "AI / ML": [
    { n: "TensorFlow",  e: "🧠", c: "FF6F00", logo: "tensorflow"   },
    { n: "PyTorch",     e: "🔥", c: "EE4C2C", logo: "pytorch"      },
    { n: "scikit-learn",e: "🤖", c: "F7931E", logo: "scikitlearn"  },
    { n: "Pandas",      e: "🐼", c: "150458", logo: "pandas"       },
    { n: "NumPy",       e: "🔢", c: "013243", logo: "numpy"        },
    { n: "OpenCV",      e: "👁️", c: "5C3EE8", logo: "opencv"      },
    { n: "Hugging Face",e: "🤗", c: "FFD21E", logo: "huggingface"  },
  ],
  "Mobile": [
    { n: "React Native",e: "📱", c: "61DAFB", logo: "react"        },
    { n: "Flutter",     e: "🦋", c: "02569B", logo: "flutter"      },
    { n: "Android",     e: "🤖", c: "3DDC84", logo: "android"      },
    { n: "Expo",        e: "📱", c: "000020", logo: "expo"         },
  ],
  "Design": [
    { n: "Figma",       e: "🎨", c: "F24E1E", logo: "figma"        },
    { n: "Adobe XD",    e: "✏️", c: "FF61F6", logo: "adobexd"     },
    { n: "Canva",       e: "🖌️", c: "00C4CC", logo: "canva"       },
    { n: "Photoshop",   e: "🖼️", c: "31A8FF", logo: "adobephotoshop"},
    { n: "Illustrator", e: "🖋️", c: "FF9A00", logo: "adobeillustrator"},
  ],
};

export const SOCIALS = [
  { id: "linkedin",   icon: "💼", label: "LinkedIn",   color: "0A66C2", logo: "linkedin",   ph: "https://linkedin.com/in/username" },
  { id: "twitter",    icon: "𝕏",  label: "Twitter / X",color: "000000", logo: "x",          ph: "https://twitter.com/username"    },
  { id: "instagram",  icon: "📸", label: "Instagram",  color: "E4405F", logo: "instagram",  ph: "https://instagram.com/username"  },
  { id: "gmail",      icon: "📧", label: "Gmail",      color: "D14836", logo: "gmail",      ph: "yourmail@gmail.com"              },
  { id: "discord",    icon: "🎮", label: "Discord",    color: "5865F2", logo: "discord",    ph: "username#1234"                   },
  { id: "portfolio",  icon: "🌐", label: "Portfolio",  color: "4A90D9", logo: "safari",     ph: "https://yoursite.dev"            },
  { id: "leetcode",   icon: "⚔️", label: "LeetCode",  color: "FFA116", logo: "leetcode",   ph: "https://leetcode.com/username"   },
  { id: "hackerrank", icon: "🏆", label: "HackerRank", color: "2EC866", logo: "hackerrank", ph: "https://hackerrank.com/username" },
  { id: "codeforces", icon: "💻", label: "Codeforces", color: "1F8ACB", logo: "codeforces", ph: "https://codeforces.com/profile/u"},
];

export const STATS = [
  { id: "statcard",  icon: "📊", title: "GitHub Stats Card",  sub: "Commits, PRs, stars & issues" },
  { id: "streak",    icon: "🔥", title: "Streak Stats",       sub: "Current & longest streak"     },
  { id: "langs",     icon: "📈", title: "Top Languages",      sub: "Most used languages chart"    },
  { id: "trophies",  icon: "🏆", title: "Trophy Showcase",    sub: "GitHub achievement trophies"  },
  { id: "activity",  icon: "📉", title: "Activity Graph",     sub: "Contribution activity graph"  },
];

export const STATS_THEMES = [
  "radical", "dark", "tokyonight", "dracula",
  "merko", "gruvbox", "cobalt", "synthwave", "nord",
];

export const TEMPLATES = ["minimal", "modern", "developer", "hacker", "elegant"];