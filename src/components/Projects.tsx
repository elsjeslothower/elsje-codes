"use client";

import { useContent } from "@/context/LanguageContext";
import ProjectImageCarousel from "./ProjectImageCarousel";

const stacks = [
  ["Next.js", "TypeScript", "Tailwind CSS", "Web3Forms", "GitHub Pages"],
  ["FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "Railway", "Supabase", "Anthropic Claude API", "HTML / Tailwind"],
  ["React", "TypeScript", "Vite", "Vitest", "Leaflet", "react-leaflet", "Node script (tsx)", "Overpass API"],
  ["TypeScript", "WebGL2", "Vite", "Vitest", "Vanilla DOM API"],
  ["React", "React Router", "Axios", "Clerk (OAuth)", "Heroku", "Flask", "SQLAlchemy 2.0", "PostgreSQL"],
];

// Add as many paths as you like per project (e.g. "/projects/image.jpg")
// more than one shows the left/right slideshow arrows. Leave an array empty to keep
// showing the placeholder for that project.
const images: string[][] = [
  ["/projects/purls_of_love/purls-of-love-homepage.webp"],
  ["/projects/quote_tool/stained-glass-quoter-1.webp", "/projects/quote_tool/stained-glass-quoter-2.webp", "/projects/quote_tool/stained-glass-quoter-3.webp"],
  ["/projects/boat_router/boat-router-homepage.webp"],
  ["/projects/aura_scope/aura-scope-1.webp"],
  ["/projects/pantry_pickings.webp"],
];

const hrefs = [
  "https://github.com/elsjeslothower/purls-of-love",
  "https://github.com/elsjeslothower/stained-glass-api",
  "https://github.com/elsjeslothower/pier-to-pier",
  "https://github.com/elsjeslothower/aura-scope",
  "https://github.com/elsjeslothower/front-end-pantry-pickings",
];

const demoHrefs: (string | null)[] = [
  "https://elsjeslothower.github.io/purls-of-love/",
  "https://elsje.codes/quote-tool/",
  "https://elsje.codes/pier-to-pier/",
  "https://elsje.codes/auraScope/",
  "https://front-end-pantry-pickings-snowy.vercel.app/",
];

const projectIds = ["purls-of-love", "stained-glass-quote-tool", "pier-to-pier", "aurascope", "pantry-pickings"];

const accents = [
  "var(--color-accent-primary)",
  "var(--color-accent-secondary)",
  "var(--color-accent-highlight)",
];

const statusStyles = [
  { bg: "var(--color-accent-highlight)", color: "var(--color-lead)" },
  { bg: "var(--color-accent-secondary-text)", color: "#ffffff" },
];

export default function Projects() {
  const t = useContent();

  return (
    <section id="projects" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#f5ede0] dark:text-accent-highlight">
          {t.projects.heading}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f5ede0] dark:text-foreground-muted">
          {t.projects.paragraph1}
        </p>

        <div className="mt-8 space-y-8">
          {t.projects.items.map((project, i) => (
            <div
              key={project.title}
              id={projectIds[i]}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-background dark:bg-[#b08d5c] dark:[--foreground:var(--color-ink)] dark:[--foreground-muted:#2b2822]"
            >
              <ProjectImageCarousel
                images={images[i]}
                alt={project.title}
                href={demoHrefs[i] ?? hrefs[i]}
              />

              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span
                      className="inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide"
                      style={{ background: statusStyles[project.statusStyle].bg, color: statusStyles[project.statusStyle].color }}
                    >
                      {project.status}
                    </span>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-foreground">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl leading-relaxed text-foreground-muted dark:text-[#15181c]">
                  {project.descriptionPre}
                  <span className="font-medium text-foreground dark:text-[#15181c]">
                    {project.descriptionEmphasis}
                  </span>
                  {project.descriptionPost}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {stacks[i].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
                  <a
                    href={hrefs[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent-secondary-text px-6 py-3 text-white transition-colors hover:bg-accent-primary dark:hover:text-accent-secondary-text"
                  >
                    {project.cta}
                  </a>
                  {demoHrefs[i] && (
                    <a
                      href={demoHrefs[i]!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-colors dark:border-border hover:border-accent-secondary-text hover:text-accent-secondary-text"
                    >
                      {t.projects.demoCta}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
