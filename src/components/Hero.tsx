"use client";

import { useContent } from "@/context/LanguageContext";

export default function Hero() {
  const t = useContent();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[115px] right-[-12%] h-[504px] w-[504px] opacity-100"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g stroke="var(--foreground)" strokeWidth="1.5" strokeLinejoin="round" fill="none">
            <polygon points="100,10 180,60 160,150 40,150 20,60" />
            <polygon points="100,10 180,60 130,90 100,60" fill="var(--color-accent-secondary)" fillOpacity="0.85" />
            <polygon points="180,60 160,150 130,90" fill="var(--color-accent-primary)" fillOpacity="0.78" />
            <polygon points="160,150 40,150 100,60 130,90" fill="var(--color-accent-highlight)" fillOpacity="0.78" />
            <polygon points="40,150 20,60 100,60" fill="var(--color-accent-alert)" fillOpacity="0.7" />
            <polygon points="100,10 20,60 100,60" fill="var(--color-accent-secondary)" fillOpacity="0.55" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p
          className="font-mono text-sm uppercase tracking-[0.2em] text-accent-secondary-text dark:text-accent-highlight"
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
        >
          {t.hero.title}
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
        >
          {t.hero.bio1Pre}
        </p>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
        >
          {t.hero.bio1Post}
        </p>
        <div
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent-secondary-text px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-primary dark:hover:text-accent-secondary-text"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground px-6 py-3 text-sm font-medium transition-colors dark:border-border hover:border-accent-highlight hover:text-accent-highlight-text"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
