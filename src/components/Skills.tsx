"use client";

import { useContent } from "@/context/LanguageContext";

const groupItems = [
  ["Python", "TypeScript", "JavaScript", "SQL"],
  ["FastAPI", "SQLAlchemy", "PostgreSQL", "REST APIs", "Pydantic"],
  ["React", "Next.js", "Tailwind CSS"],
  ["Git / GitHub", "pytest", "LLM API integration"],
];

export default function Skills() {
  const t = useContent();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
        {t.skills.heading}
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.groupLabels.map((label, i) => (
          <div key={label}>
            <p className="font-medium">{label}</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              {groupItems[i].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
