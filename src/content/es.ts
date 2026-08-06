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
    toggleDarkMode: "[ES] Toggle dark mode",
    switchLanguage: "[ES] Switch language",
    openMenu: "[ES] Open menu",
    closeMenu: "[ES] Close menu",
  },
  hero: {
    eyebrow: "Elsje Slothower",
    title: "[ES] Developer, designer, artisan.",
    bio1Pre:
      "[ES] I ship small, working pieces of software to solve personal problems. With a background in backend work, I start every project with an emphasis on database functionality and scalability. Like with life, build it nice or build it twice, so I try to whiteboard ",
    bio1Post: "[ES] With a background in front and backend work, my projects emphasize database functionality and user experience.",
    bio2Pre:
      "[ES] I also run a small stained glass business on the side and try to document the process of making and selling my work online, mistakes included. Feel free to check out my ",
    bio2LinkText: "[ES] stained glass work",
    bio2Post: " [ES] if you're curious.",
    ctaProjects: "[ES] See my work",
    ctaContact: "[ES] Get in touch",
  },
  about: {
    heading: "[ES] About",
    developerHeading: "[ES] Developer",
    developerPre:
      "[ES] Ada Developers Academy gave me my start in software development, but the spark started in high school when I took a coding extracurricular. The basic building blocks of programming began with ",
    developerLinkText: "[ES] Snap!",
    developerPost:
      " [ES] and I've been building on that foundation ever since. Critical thinking, problem solving, and creativity are the skills that I bring to every project I work on.",
    creatorHeading: "[ES] Creator",
    creatorText:
      "[ES] My bachelor's degree is in Journalism and Public Interest. I have a long history of creating, whether it's publishing articles, fostering community engagement, or posting on social media. In my current position, I create software while creating a relationship of trust with my clients. I enjoy the creative process of building software, and I enjoy the creative process of building relationships.",
    artistHeading: "[ES] Artist",
    artistText:
      "[ES] I like working my hands as well as my brain. Curiosity is the key, and I cultivate it anywhere and everywhere I can. Progressing through a project from start to finish is satisfying, and it's even better to share your creations with others. Stained glass is my outlet when I see something beautiful in the world and want others to see it too.",
  },
  projects: {
    heading: "[ES] Projects",
    paragraph1: "[ES] A running collection of what I've built and what I'm building — some finished, some still in progress.",
    photoComingSoon: "[ES] Photo coming soon",
    items: [
      {
        status: "[ES] Now building",
        eyebrow: "[ES] Portfolio project 2 of 4 — backend/API focus",
        title: "[ES] Stained Glass Quote Tool",
        descriptionPre:
          "[ES] Backend that turns a customer's photo and project description into a structured, editable price quote. An LLM vision call produces the first-pass estimate — ",
        descriptionEmphasis: "[ES] a human always reviews before it's sent",
        descriptionPost: ". [ES] Built for a real small stained-glass business.",
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
      {
        role: "[ES] Volunteer",
        org: "Salem Health Cancer Center",
        description:
          "[ES] Participant in volunteer effort to knit and crochet hats for cancer patients undergoing chemotherapy.",
      },
      {
        role: "[ES] Community Member",
        org: "Common People Yoga",
        description:
          "[ES] Member of a community yoga studio that emphasizes accessibility and inclusivity in yoga practice, including offering classes for people with disabilities and neurodivergent folks.",
      },
    ],
  },
  puzzle: {
    heading: "[ES] Puzzle",
    paragraph1: "[ES] Guess the 5-letter word in 6 tries. If the letters turn green, they're in the right spot. If they turn amber, they're in the word but in the wrong spot. If they are gray, they're not in the word at all.",
    paragraph2: "[ES] Once you have guessed the word, type the answer into the URL following elsje.codes/_____ for a secret section.",
    legendCorrect: "[ES] Right spot",
    legendPresent: "[ES] In the word, wrong spot",
    legendAbsent: "[ES] Not in the word",
    notEnoughLetters: "[ES] Not enough letters",
    wonMessage: "[ES] You got it!",
    lostMessagePrefix: "Eso si que es; la palabra es: ",
    playAgain: "[ES] Play again",
  },
  steppingStones: {
    heading: "[ES] Stepping Stones",
    paragraph1:
      "[ES] You made it, you smart cookie! This is the 'mistakes' corner - displaying lessons learned along the way, stumbling to mastery.",
    photoComingSoon: "[ES] Photo coming soon",
    stones: [
      {
        status: "[ES] Lesson",
        eyebrow: "[ES] Placeholder eyebrow",
        title: "[ES] Lesson title goes here",
        description:
          "[ES] Placeholder text — write about what went wrong and what you learned from it.",
        tags: ["[ES] Tag one", "[ES] Tag two"],
      },
      {
        status: "[ES] Lesson",
        eyebrow: "[ES] Placeholder eyebrow",
        title: "[ES] Lesson title goes here",
        description:
          "[ES] Placeholder text — write about what went wrong and what you learned from it.",
        tags: ["[ES] Tag one", "[ES] Tag two"],
      },
      {
        status: "[ES] Lesson",
        eyebrow: "[ES] Placeholder eyebrow",
        title: "[ES] Lesson title goes here",
        description:
          "[ES] Placeholder text — write about what went wrong and what you learned from it.",
        tags: ["[ES] Tag one", "[ES] Tag two"],
      },
    ],
  },
  signatureIntro: {
    skip: "[ES] Skip",
  },
};
