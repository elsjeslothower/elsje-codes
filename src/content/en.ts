export const en = {
  nav: {
    links: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
      puzzle: "Puzzle",
    },
  },
  hero: {
    eyebrow: "Elsje Slothower",
    title: "Developer, designer, artisan.",
    bio1Pre:
      "I ship small, working pieces of software to solve personal problems. With a background in backend work, I start every project with an emphasis on database functionality and scalability. Like with life, build it nice or build it twice, so I try to whiteboard ",
    bio1Emphasis: "exactly",
    bio1Post:
      " where I want my solutions to go before writing my first line of code. Even though all my professional experience is in backend development, I'm always inclined to make everything on the frontend as pretty as can be.",
    bio2Pre:
      "I also run a small stained glass business on the side and try to document the process of making and selling my work online, mistakes included. Feel free to check out my ",
    bio2LinkText: "stained glass work",
    bio2Post: " if you're curious.",
    ctaProjects: "See my work",
    ctaContact: "Get in touch",
  },
  about: {
    heading: "About",
    paragraph1:
      "I'm a developer working through a series of portfolio projects, each one shipped in short, resumable sessions and documented as I build — the wins, the roadmap, and the parts still marked “not yet verified.”",
    paragraph2Pre: "Currently deep in ",
    paragraph2LinkText: "a stained-glass quoting tool",
    paragraph2Post:
      ": a FastAPI backend that turns a photo and description into a structured, human-reviewed price estimate using Claude's vision API.",
  },
  projects: {
    heading: "Now building",
    eyebrow: "Portfolio project 2 of 4 — backend/API focus",
    title: "Stained Glass Quote Tool",
    descriptionPre:
      "Backend that turns a customer's photo and project description into a structured, editable price quote. An LLM vision call produces the first-pass estimate — ",
    descriptionEmphasis: "a human always reviews before it's sent",
    descriptionPost: ". Built for a real small stained-glass business.",
    timeline: [
      {
        week: "Week 1",
        title: "CRUD skeleton",
        detail: "Schema and endpoints for customers, quotes, and line items.",
      },
      {
        week: "Week 2",
        title: "AI estimate",
        detail:
          "A vision call turns a photo + description into structured, defensively-parsed JSON — verbatim raw response stored alongside for auditability.",
      },
      {
        week: "Week 3",
        title: "Frontend scaffolding",
        detail:
          "Static HTML/Tailwind UI for quotes, customers, and estimate review — no build step.",
      },
    ],
    cta: "View on GitHub",
  },
  skills: {
    heading: "Skills",
    groupLabels: ["Languages", "Backend", "Frontend", "Tools & practices"],
  },
  contact: {
    heading: "Contact",
    tagline: "Building something interesting? I'd like to hear about it.",
    emailLabel: "Email",
    githubLabel: "GitHub",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind.",
  },
  resume: {
    heading: "Resume",
    placeholder:
      "Resume content coming soon — a downloadable PDF and/or an on-page summary will go here.",
  },
  puzzle: {
    heading: "Puzzle",
    placeholder:
      "An interactive puzzle will live here eventually. Check back soon.",
  },
  steppingStones: {
    heading: "Stepping Stones",
    placeholder: "This page is intentionally unlisted. Content coming soon.",
  },
};

export type SiteContent = typeof en;
