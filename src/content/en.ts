export const en = {
  banner: "Under construction",
  nav: {
    links: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      resume: "Resume",
      puzzle: "Wordle",
      contact: "Contact",
    },
    toggleDarkMode: "Toggle dark mode",
    switchLanguage: "Switch language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Elsje Slothower",
    title: "Artist, Creator, Developer.",
    bio1Pre: "I solve problems with software.",
    bio1Post: "With a background in front and backend work, my projects emphasize database functionality and user experience.",
    bio2Pre: "I also run a small stained glass business on the side to document the process of making and selling my work online, mistakes included. Feel free to check out my ",
    bio2LinkText: "stained glass",
    bio2Post: " if you're curious.",
    ctaProjects: "See my code",
    ctaContact: "Get in touch",
  },
  about: {
    heading: "About",
    developerHeading: "Developer",
    developerPre:
      "Ada Developers Academy gave me my start in software development, but the spark started in high school when I took a coding extracurricular. The basic building blocks of programming began with ",
    developerLinkText: "Snap!",
    developerPost:
      " and I've been building on that foundation ever since. Critical thinking, problem solving, and creativity are the skills that I bring to every project I work on.",
    creatorHeading: "Creator",
    creatorText:
      "My bachelor's degree is in Journalism and Public Interest. I have a long history of creating, whether it's publishing articles, fostering community engagement, or posting on social media. In my current position, I create software while creating a relationship of trust with my clients. I enjoy the creative process of building software, and I enjoy the creative process of building relationships.",
    artistHeading: "Artist",
    artistText:
      "I like working my hands as well as my brain. Curiosity is the key, and I cultivate it anywhere and everywhere I can. Progressing through a project from start to finish is satisfying, and it's even better to share your creations with others. Stained glass is my outlet when I see something beautiful in the world and want others to see it too.",
  },
  projects: {
    heading: "Projects",
    paragraph1: "What I've built and what I'm building.",
    photoComingSoon: "Photo coming soon",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    goToPhoto: "Go to photo",
    photoLabel: "Photo",
    demoCta: "Try it out",
    // statusStyle quick ref: 0 = "Now building" (amber), 1 = "Completed" (green)
    items: [
      {
        eyebrow: "Pro Bono Nonprofit Website",
        status: "Now building",
        statusStyle: 0,
        title: "Purls of Love",
        descriptionPre:
          "A full site built pro bono for a volunteer-run nonprofit that knits and crochets blankets and hats for people in hard seasons, from NICU babies to families in shelters. It has a gallery of finished work, a donation page, and free patterns for ",
        descriptionEmphasis: "anyone who wants to pick up a hook or needles and help",
        descriptionPost: ".",
        cta: "View on GitHub",
      },
      {
        eyebrow: "AI-Centric Personal Project",
        status: "Complete",
        statusStyle: 1,
        title: "Stained Glass Quote Tool",
        descriptionPre:
          "Backend that turns a customer's photo and project description into a structured, editable price quote. An LLM vision call produces the first-pass estimate. Notably, ",
        descriptionEmphasis: "a human always reviews the estimate before it's sent",
        descriptionPost: ". Built for a real stained glass small business.",
        cta: "View on GitHub",
      },
      {
        eyebrow: "Maps for Boats",
        status: "Complete",
        statusStyle: 1,
        title: "Pier to Pier",
        descriptionPre:
          "Your personal buoy buddy that helps you get from your dock to ",
        descriptionEmphasis: "wherever the water takes you",
        descriptionPost: ". A from-scratch A* pathfinder routes across real Puget Sound coastline data, avoiding land, with a toggle to compare a shortest route against a safer, deeper-water one.",
        cta: "View on GitHub",
      },
      {
        eyebrow: "Kaleidoscopic, Alphanumeric Visualizer",
        status: "Now building",
        statusStyle: 0,
        title: "AuraScope",
        descriptionPre:
          "A text-to-art algorithm that takes a string of letters and numbers to create a beautiful mosaic. Type in any ",
        descriptionEmphasis: "word, phrase, or lucky number",
        descriptionPost: " you may have gotten from a fortune cookie, and see what happens.",
        cta: "View on GitHub",
      },
      {
        eyebrow: "Ada Developers Academy Capstone project",
        status: "Complete",
        statusStyle: 1,
        title: "Pantry Pickings",
        descriptionPre:
          "A dinner-party web app that helps hosts pick a recipe using ingredients they already have on hand. The app is intentionally designed - quick, simple, budget-friendly, and ",
        descriptionEmphasis:
          "mindful of guests' dietary preferences and intolerances",
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
    headshotAlt: "Portrait of Elsje Slothower",
    logoAlt: "logo",
    name: "Elisabeth (Elsje) Slothower",
    title: "Software Engineer & Implementation Consultant",
    location: "Seattle, WA (Relocating)",
    email: "contact@elsje.codes",
    linkedinLabel: "linkedin.com/in/elsje-slothower",
    githubLabel: "github.com/elsjeslothower",
    phone: "(253) 509-8262",
    summary:
      "Software engineer and implementation consultant with experience spanning full-stack development (React, JavaScript, C#, Python, SQL) and client-facing solution delivery, including on-site enterprise deployments for municipal government agencies. Equally comfortable writing and testing code and training the end users who rely on it.",
    downloadPdfLabel: "Download PDF",
    linkedinCta: "View on LinkedIn",
    sectionLabels: {
      employment: "Employment history",
      impact: "Impact",
      skills: "Skills",
      education: "Education",
      leadership: "Leadership & Activities",
    },
    impactLinkLabel: "See more",
    impact: [
      {
        title: "Oregon DMV System Modernization",
        org: "Fast Enterprises",
        summary:
          "Supported an onsite deployment for Oregon's Driver and Vehicle Services, helping install and configure the new system within agreed timelines. Government press release link coming soon.",
        link: null,
      },
      {
        title: "Tennessee Unemployment Insurance Tax System Modernization",
        org: "Fast Enterprises",
        summary:
          "Supported Tennessee's rollout of a new Employer e-Services tax system that replaced a manual, paper based process with self service digital tools. Employers can now register instantly, file wage and premium reports online, and correct errors without waiting on state staff. The system went live in May 2025 with no unexpected issues.",
        link: "https://www.tn.gov/workforce/newsletter/2025/june-unemployment-insurance-tax-system.html",
      },
      {
        title: "Skytap Cloud Connectivity Page Modernization",
        org: "Kyndryl (formerly Skytap)",
        summary:
          "Migrated Skytap Cloud's connectivity page from a legacy Backbone.js implementation to React, improving maintainability and easing future updates.",
        link: "https://cloud.skytap.com/connectivity",
      },
      {
        title: "BuddyUp! Networking Initiative",
        org: "Fast for All",
        summary:
          "Spearheaded BuddyUp!, an initiative that paired participants with shared interests during company wide networking events, making socializing more approachable for those who might otherwise feel intimidated by it.",
        link: null,
      },
    ],
    jobs: [
      {
        title: "Software Engineer",
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
        title: "Software Engineer Intern",
        org: "Skytap, Remote, US",
        dates: "Mar 2023 – Aug 2023",
        bullets: [
          "Migrated the connectivity checker page from Backbone.js MVC to React client-side rendering.",
          "Conducted code reviews and created pull requests; spun up flex stacks using Docker, Jenkins, and the CLI.",
          "Active participant in daily standups and bi-weekly Agile/Scrum sprints, helping cut task rollover to under 10%.",
        ],
      },
      {
        title: "Software Engineering Apprentice",
        org: "Ada Developers Academy, Seattle, WA",
        dates: "Sep 2022 – Jul 2023",
        bullets: [
          "Completed a highly competitive (8% acceptance rate) software engineering apprenticeship covering Python, object-oriented programming, Big O notation, and relational databases, alongside team-based project delivery.",
          'Built capstone project "Pantry Pickings," a virtual pantry app that suggests meals from existing ingredients to reduce food waste; earned certification in web development.',
        ],
      },
    ],
    skillsList: [
      "JavaScript",
      "React",
      "C#",
      "SQL",
      "API Development",
      "Object-Oriented Programming (OOP)",
      "Client Implementation & Training",
      "Stakeholder Management",
      "Requirements Gathering",
      "Consulting",
      "Agile/Scrum",
      "Problem Solving",
      "Cross-Functional Collaboration",
      "Technical Documentation",
    ],
    education: [
      {
        degree: "Bachelor's of Arts in Communication",
        org: "University of Washington–Seattle, Seattle, WA",
        dates: "Sep 2018 – Dec 2021",
        description:
          "Concentration in Journalism. Minor in music. Published in multiple Seattle magazines. Dean's List, majority of quarters attended.",
      },
    ],
    leadership: [
      {
        role: "Committee Member",
        org: "Fast for All",
        description:
          "Employee resource group at Fast Enterprises focused on equitable benefits and biannual company-wide volunteer programs.",
      },
      {
        role: "Volunteer Web Developer",
        org: "Purls of Love",
        description:
          "Built a pro bono website (Next.js, TypeScript, Tailwind CSS) for a volunteer-run nonprofit providing knitted and crocheted items to NICU families and shelters, including a donation page and free pattern library.",
      },
    ],
  },
  puzzle: {
    heading: "Wordle Dupe",
    paragraph1: "Guess the 5-letter word in 6 tries.",
    paragraph2: "Once you have guessed the word, type the answer into the URL following elsje.codes/_____ for a secret.",
    legendCorrect: "Right spot",
    legendPresent: "In the word, wrong spot",
    legendAbsent: "Not in the word",
    notEnoughLetters: "Not enough letters",
    wonMessage: "You got it!",
    lostMessagePrefix: "Ah, nice try! You rock anyway. The word is: ",
    playAgain: "Play again",
  },
  steppingStones: {
    heading: "Stepping Stones",
    paragraph1: "You made it, you smart cookie! 🍪 Since we all stumble to mastery, it's important to reflect on lessons learned. Here are some of mine.",
    photoComingSoon: "Photo coming soon",
    readMore: "Read more",
    closeModal: "Close",
    stones: [
      {
        status: "AI Security",
        link: "/#stained-glass-quote-tool",
        eyebrow: "Stained Glass Quote Tool",
        title: "The Importance of Authentication",
        description: "A lesson in security: staying ahead of bad actors before an AI feature ever ships.",
        tags: ["Security", "AI"],
        articleBody:
          "Before deploying the quote tool's AI endpoint, I'd already heard how exposed LLM-powered features can become easy targets, from prompt injection to bots running up API costs. So I made sure real authentication was in place before the tool ever reached a client, not after something went wrong. It reinforced a habit I still carry: ask what a feature looks like to someone trying to break it, before it ships.",
      },
      {
        status: "Scalability",
        link: "/resume#impact",
        eyebrow: "Tennessee UI e-Services",
        title: "Thinking Ahead Is Key",
        description:
          "A lesson in scalability, learned the hard way while building for a government system.",
        tags: ["Scalability", "Government Systems"],
        articleBody:
          "While building the Reimbursable Charge summary page for Tennessee's new e-Services system, I learned a feature that works in a demo can buckle under real data. Some employers had years of historical records, and my first pass loaded it all at once. Now scale is a question I ask on day one, not after the first slow page load.",
      },
      {
        status: "Planning & Process",
        link: "/#pantry-pickings",
        eyebrow: "Pantry Pickings",
        title: "Whiteboards Are a Developer's Best Friend",
        description: "A lesson in planning your code before you write it.",
        tags: ["Planning", "Backend Design"],
        articleBody:
          "Before writing a single line of Pantry Pickings, a solo project, I spent hours at the whiteboard mapping out user flows, data models, and API endpoints on my own. It felt slow at the time, but sketching it out surfaced real errors in how I was designing the backend, ones I would have only caught much later if I'd started coding first. Planning isn't time taken from building, it's what makes the building hold up.",
      },
      {
        status: "Problem Solving",
        link: "/resume#skills",
        eyebrow: "Skills",
        title: "Recalling Is Better Than Memorizing",
        description: "A lesson in problem solving: why understanding beats memorizing.",
        tags: ["Problem Solving", "Spaced Repetition"],
        articleBody:
          "A book called ''Fluent Forever'' introduced me to spaced repetition systems, algorithms backed by research showing they're one of the most effective ways to wire information into long-term memory. I started using it to learn Spanish, then realized the same approach works for coding concepts too. Now when I hit a tricky logic problem at work, I'm recalling reasoning I've actually retained, not a memorized answer I crammed once and forgot.",
      },
      {
        status: "Client Work",
        link: "/resume#employment",
        eyebrow: "Fast Enterprises",
        title: "On Time and On Budget",
        description:
          "A lesson in the unique challenges of building software for municipal government.",
        tags: ["Government Contracts", "Project Management"],
        articleBody:
          "Working onsite with municipal governments taught me that deadlines aren't just internal goals, they're often set by law or budget cycles that don't move. Between legacy systems and a wide range of technical comfort among staff, delivering software here takes more patience and communication than a typical client project.",
      },
    ],
  },
  auraScope: {
    eyebrow: "Kaleidoscopic, Alphanumeric Visualizer",
    heading: "AuraScope",
    body: "Coming Soon: A text-to-art tool that takes a string of letters and numbers to create a beautiful mosaic. Write any word, phrase, or lucky number you want to see.",
    cta: "Back to Projects",
  },
  signatureIntro: {
    skip: "Skip",
  },
  notFound: {
    eyebrow: "404",
    heading: "This pane didn't make it.",
    body: "The page you're looking for isn't part of the pattern.",
    cta: "To the Drawing Board",
  },
};

export type SiteContent = typeof en;
