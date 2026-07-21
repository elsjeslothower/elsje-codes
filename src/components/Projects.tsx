"use client";

import { useContent } from "@/context/LanguageContext";

const stack = [
  "FastAPI",
  "SQLAlchemy 2.0",
  "PostgreSQL",
  "Anthropic Claude API",
  "HTML / Tailwind",
];

const accents = [
  "var(--color-glass-blue)",
  "var(--color-glass-violet)",
  "var(--color-glass-amber)",
];

export default function Projects() {
  const t = useContent();

  return (
    <section id="projects" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {t.projects.heading}
        </h2>

        <div className="mt-8 rounded-2xl border border-border p-8 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                {t.projects.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                {t.projects.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 max-w-2xl leading-relaxed text-foreground-muted">
            {t.projects.descriptionPre}
            <span className="font-medium text-foreground">
              {t.projects.descriptionEmphasis}
            </span>
            {t.projects.descriptionPost}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {t.projects.timeline.map((entry, i) => (
              <li key={entry.week} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full"
                  style={{ background: accents[i] }}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                  {entry.week}
                </p>
                <p className="mt-1 font-medium">{entry.title}</p>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground-muted">
                  {entry.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="https://github.com/elsjeslothower/stained-glass-api"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-glass-blue px-5 py-2.5 text-white transition-colors hover:bg-glass-violet"
            >
              {t.projects.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
