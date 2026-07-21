import type { SiteContent } from "./en";

// PLACEHOLDER — not translated yet. Every string below is prefixed "[ES]"
// so it's obvious in the UI which spots still need real Spanish text.
// Replace each value with its Spanish translation; keep the object shape
// identical to en.ts (same keys, same nesting) or TypeScript will flag it.
export const es: SiteContent = {
  nav: {
    links: {
      about: "[ES] About",
      projects: "[ES] Projects",
      skills: "[ES] Skills",
      contact: "[ES] Contact",
      resume: "[ES] Resume",
      puzzle: "[ES] Puzzle",
    },
  },
  hero: {
    eyebrow: "[ES] Elsje Slothower",
    title: "[ES] Developer, designer, artisan.",
    bio1Pre:
      "[ES] I ship small, working pieces of software to solve personal problems. With a background in backend work, I start every project with an emphasis on database functionality and scalability. Like with life, build it nice or build it twice, so I try to whiteboard ",
    bio1Emphasis: "[ES] exactly",
    bio1Post:
      " [ES] where I want my solutions to go before writing my first line of code. Even though all my professional experience is in backend development, I'm always inclined to make everything on the frontend as pretty as can be.",
    bio2Pre:
      "[ES] I also run a small stained glass business on the side and try to document the process of making and selling my work online, mistakes included. Feel free to check out my ",
    bio2LinkText: "[ES] stained glass work",
    bio2Post: " [ES] if you're curious.",
    ctaProjects: "[ES] See my work",
    ctaContact: "[ES] Get in touch",
  },
  about: {
    heading: "[ES] About",
    paragraph1:
      "[ES] I'm a developer working through a series of portfolio projects, each one shipped in short, resumable sessions and documented as I build — the wins, the roadmap, and the parts still marked “not yet verified.”",
    paragraph2Pre: "[ES] Currently deep in ",
    paragraph2LinkText: "[ES] a stained-glass quoting tool",
    paragraph2Post:
      ": [ES] a FastAPI backend that turns a photo and description into a structured, human-reviewed price estimate using Claude's vision API.",
  },
  projects: {
    heading: "[ES] Now building",
    eyebrow: "[ES] Portfolio project 2 of 4 — backend/API focus",
    title: "[ES] Stained Glass Quote Tool",
    descriptionPre:
      "[ES] Backend that turns a customer's photo and project description into a structured, editable price quote. An LLM vision call produces the first-pass estimate — ",
    descriptionEmphasis: "[ES] a human always reviews before it's sent",
    descriptionPost: ". [ES] Built for a real small stained-glass business.",
    timeline: [
      {
        week: "[ES] Week 1",
        title: "[ES] CRUD skeleton",
        detail: "[ES] Schema and endpoints for customers, quotes, and line items.",
      },
      {
        week: "[ES] Week 2",
        title: "[ES] AI estimate",
        detail:
          "[ES] A vision call turns a photo + description into structured, defensively-parsed JSON — verbatim raw response stored alongside for auditability.",
      },
      {
        week: "[ES] Week 3",
        title: "[ES] Frontend scaffolding",
        detail:
          "[ES] Static HTML/Tailwind UI for quotes, customers, and estimate review — no build step.",
      },
    ],
    cta: "[ES] View on GitHub",
  },
  skills: {
    heading: "[ES] Skills",
    groupLabels: [
      "[ES] Languages",
      "[ES] Backend",
      "[ES] Frontend",
      "[ES] Tools & practices",
    ],
  },
  contact: {
    heading: "[ES] Contact",
    tagline: "[ES] Building something interesting? I'd like to hear about it.",
    emailLabel: "[ES] Email",
    githubLabel: "[ES] GitHub",
  },
  footer: {
    builtWith: "[ES] Built with Next.js & Tailwind.",
  },
  resume: {
    heading: "[ES] Resume",
    placeholder:
      "[ES] Resume content coming soon — a downloadable PDF and/or an on-page summary will go here.",
  },
  puzzle: {
    heading: "[ES] Puzzle",
    placeholder:
      "[ES] An interactive puzzle will live here eventually. Check back soon.",
  },
  steppingStones: {
    heading: "[ES] Stepping Stones",
    placeholder: "[ES] This page is intentionally unlisted. Content coming soon.",
  },
};
