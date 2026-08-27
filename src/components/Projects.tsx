"use client";

import { useContent } from "@/context/LanguageContext";
import ProjectImageCarousel from "./ProjectImageCarousel";

const stacks = [
  ["FastAPI", "SQLAlchemy 2.0", "PostgreSQL", "Railway", "Supabase", "Anthropic Claude API", "HTML / Tailwind"],
  ["TypeScript", "WebGL2", "Vite", "Vitest", "Vanilla DOM API"],
  ["React", "TypeScript", "Vite", "Vitest", "Leaflet", "react-leaflet", "Node script (tsx)", "Overpass API"],
  ["React", "React Router", "Axios", "Clerk (OAuth)", "Heroku", "Flask", "SQLAlchemy 2.0", "PostgreSQL"],
];

// Add as many paths as you like per project (e.g. "/projects/image.jpg")
// more than one shows the left/right slideshow arrows. Leave an array empty to keep
// showing the placeholder for that project.
const images: string[][] = [
  ["/projects/quote_tool/stained-glass-quoter-1.webp", "/projects/quote_tool/stained-glass-quoter-2.webp", "/projects/quote_tool/stained-glass-quoter-3.webp"],
  ["/projects/aura_scope/aura-scope-1.webp"],
  ["/projects/boat_router/boat-router-homepage.webp"],
  ["/projects/pantry_pickings.webp"],
];

const hrefs = [
  "https://github.com/elsjeslothower/stained-glass-api",
  "https://github.com/elsjeslothower/aura-scope",
  "https://github.com/elsjeslothower/pier-to-pier",
  "https://github.com/elsjeslothower/front-end-pantry-pickings",
];

const demoHrefs: (string | null)[] = [
  "https://elsje.codes/quote-tool/",
  "https://elsje.codes/auraScope/",
  "https://elsje.codes/pier-to-pier/",
  "https://front-end-pantry-pickings-snowy.vercel.app/",
];

const projectIds = ["stained-glass-quote-tool", "aurascope", "pier-to-pier", "pantry-pickings"];

const accents = [
  "var(--color-glass-blue)",
  "var(--color-glass-violet)",
  "var(--color-glass-amber)",
];

const statusStyles = [
  { bg: "var(--color-glass-amber)", color: "var(--color-glass-amber-text)" },
  { bg: "var(--color-glass-green)", color: "#ffffff" },
];

export default function Projects() {
  const t = useContent();

  return (
    <section id="projects" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {t.projects.heading}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
          {t.projects.paragraph1}
        </p>

        <div className="mt-8 space-y-8">
          {t.projects.items.map((project, i) => (
            <div
              key={project.title}
              id={projectIds[i]}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-border"
            >
              <ProjectImageCarousel images={images[i]} alt={project.title} />

              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span
                      className="inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide"
                      style={{ background: statusStyles[project.statusStyle].bg, color: statusStyles[project.statusStyle].color }}
                    >
                      {project.status}
                    </span>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl leading-relaxed text-foreground-muted">
                  {project.descriptionPre}
                  <span className="font-medium text-foreground">
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
                    className="rounded-full bg-glass-green-text px-5 py-2.5 text-white transition-colors hover:bg-glass-blue"
                  >
                    {project.cta}
                  </a>
                  {demoHrefs[i] && (
                    <a
                      href={demoHrefs[i]!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-glass-amber hover:text-glass-amber-text"
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
