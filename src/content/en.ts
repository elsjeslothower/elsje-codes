export const en = {
  banner: "Still under construction",
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
    heading: "Projects",
    items: [
      {
        status: "Now building",
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
      {
        status: "Completed",
        eyebrow: "Ada Developers Academy — Capstone project",
        title: "Pantry Pickings",
        descriptionPre:
          "A dinner-party web app that helps hosts pick a recipe using ingredients they already have on hand — ",
        descriptionEmphasis:
          "cost-effective, and mindful of guests' dietary preferences and intolerances",
        descriptionPost: ".",
        timeline: [],
        cta: "View on GitHub",
      },
    ],
  },
  skills: {
    heading: "Skills",
    groupLabels: ["Languages", "Backend", "Frontend", "Tools & practices"],
  },
  contact: {
    heading: "Contact",
    tagline: "You're the solder to my copper foil. Let's connect.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    calendlyLabel: "Book a chat",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind.",
  },
  resume: {
    heading: "Resume",
    name: "Elsje Slothower",
    title: "Software Developer",
    location: "Seattle, WA (US)",
    email: "slothowerelsje@gmail.com",
    linkedinLabel: "linkedin.com/in/elsje-slothower",
    githubLabel: "github.com/elsjeslothower",
    phone: "(253) 509-8262",
    summary:
      "Software Developer focused on delivering production-ready web and enterprise solutions through hands-on deployment and front-end engineering. Seeks to apply strong debugging, UI design, and collaborative deployment skills to build resilient systems.",
    downloadPdfLabel: "Download PDF",
    sectionLabels: {
      employment: "Employment history",
      skills: "Skills",
      education: "Education",
      extracurriculars: "Extracurriculars",
    },
    jobs: [
      {
        title: "Software Implementation Consultant",
        org: "Fast Enterprises, Salem, OR (US)",
        dates: "Apr 2024 – Present",
        bullets: [
          "Developed two onsite software deployments for municipal governments in Unemployment Insurance and Driver & Vehicle Services respectively, completing installs and configuration within agreed timelines.",
          "Trained client users on configuration and reporting features through hands-on workshops and step-by-step guides.",
          "Reduced known issues in the production environment from over 2,000 errors to under 100.",
          "Created post-implementation support help topics and triage procedures that shortened incident resolution handoffs to support teams.",
        ],
      },
      {
        title: "Front End Web Developer Intern",
        org: "Kyndryl (formerly Skytap), Remote (US)",
        dates: "Mar 2023 – Aug 2023",
        bullets: [
          "Wrote Jest unit tests for core modules, catching regressions before QA and improving code reliability.",
          "Refactored legacy Backbone MVC scripts into modular React functions, reducing runtime and easing maintenance.",
          "Adopted Agile/Scrum practices, cutting task rollover to under 10% between sprints.",
          "Implemented front end UI features for the company's online application for customers and businesses.",
        ],
      },
    ],
    skillsList: [
      "UI/UX Design",
      "Problem Solving",
      "Team Collaboration",
      "C#",
      "FinTech",
      "React",
      "JavaScript",
      "Web Development",
      "Meticulous",
      "Critical Thinking",
      "Creativity",
      "Time Management",
      "Python",
      "SQL",
      "API Development",
      "AI",
      "HTML",
      "CSS",
      "REST",
      "CI/CD",
      "Jira",
    ],
    education: [
      {
        degree: "Bachelor's in Journalism and Public Interest",
        org: "University of Washington-Seattle Campus, Seattle, WA (US)",
        dates: "Sep 2018 – Dec 2021",
        description:
          "Undergraduate degree with a minor in music. Published in multiple Seattle magazines. Qualified Dean's List recipient for majority of quarters attended.",
      },
      {
        degree: "Software Engineering Certificate",
        org: "Ada Developers Academy, Seattle, WA (US)",
        dates: "Sep 2022 – Jul 2023",
        description:
          'Selective software development program with a less than 8% acceptance rate specializing in full stack web development and computer science fundamentals. Capstone project "Pantry Pickings" featured a virtual pantry that takes existing ingredients and suggests meals to reduce food waste.',
      },
    ],
    extracurriculars: [
      {
        role: "Committee Member",
        org: "Fast for All at Fast Enterprises",
        description:
          "Member of committee whose mission is to enhance employee experiences through implementing more equitable benefits, creating and managing employee resource groups (ERGs), and administrating biannual company-wide volunteer opportunities.",
      },
    ],
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
