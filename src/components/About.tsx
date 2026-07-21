"use client";

import { useContent } from "@/context/LanguageContext";

export default function About() {
  const t = useContent();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {t.about.heading}
        </h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-foreground-muted">
          <p>{t.about.paragraph1}</p>
          <p>
            {t.about.paragraph2Pre}
            <a
              href="#projects"
              className="font-medium text-foreground underline decoration-glass-amber decoration-2 underline-offset-4"
            >
              {t.about.paragraph2LinkText}
            </a>
            {t.about.paragraph2Post}
          </p>
        </div>
      </div>
    </section>
  );
}
