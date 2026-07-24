import type { SiteContent } from "./en";

// PLACEHOLDER — not translated yet. Every string below is prefixed "[ES]"
// so it's obvious in the UI which spots still need real Spanish text.
// Replace each value with its Spanish translation; keep the object shape
// identical to en.ts (same keys, same nesting) or TypeScript will flag it.
export const es: SiteContent = {
  banner: "[ES] Still under construction",
  nav: {
    links: {
      about: "Despues de Mi",
      projects: "Proyectos",
      skills: "[ES] Skills",
      contact: "Contacto",
      resume: "Resume",
      puzzle: "Diversión",
    },
  },
  hero: {
    eyebrow: "Elsje Slothower",
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
    heading: "[ES] Projects",
    items: [
      {
        status: "[ES] Now building",
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
      {
        status: "[ES] Completed",
        eyebrow: "[ES] Ada Developers Academy — Capstone project",
        title: "[ES] Pantry Pickings",
        descriptionPre:
          "[ES] A dinner-party web app that helps hosts pick a recipe using ingredients they already have on hand — ",
        descriptionEmphasis:
          "[ES] cost-effective, and mindful of guests' dietary preferences and intolerances",
        descriptionPost: ".",
        timeline: [],
        cta: "[ES] View on GitHub",
      },
    ],
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
    linkedinLabel: "[ES] LinkedIn",
    calendlyLabel: "[ES] Book a chat",
  },
  footer: {
    builtWith: "[ES] Built with Next.js & Tailwind.",
  },
  resume: {
    heading: "[ES] Resume",
    name: "Elsje Slothower",
    title: "[ES] Software Developer",
    location: "[ES] Seattle, WA (US)",
    email: "slothowerelsje@gmail.com",
    linkedinLabel: "linkedin.com/in/elsje-slothower",
    githubLabel: "github.com/elsjeslothower",
    phone: "(253) 509-8262",
    summary:
      "[ES] Software Developer focused on delivering production-ready web and enterprise solutions through hands-on deployment and front-end engineering. Seeks to apply strong debugging, UI design, and collaborative deployment skills to build resilient systems.",
    downloadPdfLabel: "[ES] Download PDF",
    sectionLabels: {
      employment: "[ES] Employment history",
      skills: "[ES] Skills",
      education: "[ES] Education",
      extracurriculars: "[ES] Extracurriculars",
    },
    jobs: [
      {
        title: "[ES] Software Implementation Consultant",
        org: "Fast Enterprises, Salem, OR (US)",
        dates: "[ES] Apr 2024 – Present",
        bullets: [
          "[ES] Developed two onsite software deployments for municipal governments in Unemployment Insurance and Driver & Vehicle Services respectively, completing installs and configuration within agreed timelines.",
          "[ES] Trained client users on configuration and reporting features through hands-on workshops and step-by-step guides.",
          "[ES] Reduced known issues in the production environment from over 2,000 errors to under 100.",
          "[ES] Created post-implementation support help topics and triage procedures that shortened incident resolution handoffs to support teams.",
        ],
      },
      {
        title: "[ES] Front End Web Developer Intern",
        org: "Kyndryl (formerly Skytap), Remote (US)",
        dates: "[ES] Mar 2023 – Aug 2023",
        bullets: [
          "[ES] Wrote Jest unit tests for core modules, catching regressions before QA and improving code reliability.",
          "[ES] Refactored legacy Backbone MVC scripts into modular React functions, reducing runtime and easing maintenance.",
          "[ES] Adopted Agile/Scrum practices, cutting task rollover to under 10% between sprints.",
          "[ES] Implemented front end UI features for the company's online application for customers and businesses.",
        ],
      },
    ],
    skillsList: [
      "[ES] UI/UX Design",
      "[ES] Problem Solving",
      "[ES] Team Collaboration",
      "C#",
      "FinTech",
      "React",
      "JavaScript",
      "[ES] Web Development",
      "[ES] Meticulous",
      "[ES] Critical Thinking",
      "[ES] Creativity",
      "[ES] Time Management",
      "Python",
      "SQL",
      "[ES] API Development",
      "AI",
      "HTML",
      "CSS",
      "REST",
      "CI/CD",
      "Jira",
    ],
    education: [
      {
        degree: "[ES] Bachelor's in Journalism and Public Interest",
        org: "University of Washington-Seattle Campus, Seattle, WA (US)",
        dates: "[ES] Sep 2018 – Dec 2021",
        description:
          "[ES] Undergraduate degree with a minor in music. Published in multiple Seattle magazines. Qualified Dean's List recipient for majority of quarters attended.",
      },
      {
        degree: "[ES] Software Engineering Certificate",
        org: "Ada Developers Academy, Seattle, WA (US)",
        dates: "[ES] Sep 2022 – Jul 2023",
        description:
          '[ES] Selective software development program with a less than 8% acceptance rate specializing in full stack web development and computer science fundamentals. Capstone project "Pantry Pickings" featured a virtual pantry that takes existing ingredients and suggests meals to reduce food waste.',
      },
    ],
    extracurriculars: [
      {
        role: "[ES] Committee Member",
        org: "Fast for All at Fast Enterprises",
        description:
          "[ES] Member of committee whose mission is to enhance employee experiences through implementing more equitable benefits, creating and managing employee resource groups (ERGs), and administrating biannual company-wide volunteer opportunities.",
      },
    ],
  },
  puzzle: {
    heading: "[ES] Puzzle",
    paragraph1: "[ES] Guess the 5-letter word in 6 tries. If the letters turn green, they're in the right spot. If they turn amber, they're in the word but in the wrong spot. If they are gray, they're not in the word at all.",
    paragraph2: "[ES] Once you have guessed the word, type the answer into the URL following elsje.codes/_____ for a secret section."
  },
  steppingStones: {
    heading: "[ES] Stepping Stones",
    paragraph1:
      "[ES] You made it, you smart cookie! This is the 'mistakes' corner - displaying lessons learned along the way, stumbling to mastery.",
  },
};
