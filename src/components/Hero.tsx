"use client";

import { useContent } from "@/context/LanguageContext";

export default function Hero() {
  const t = useContent();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="animate-glass-in pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] opacity-20 sm:opacity-30"
        style={{ animationDelay: "150ms" }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <g stroke="var(--color-lead)" strokeWidth="1.5" fill="none">
            <polygon points="100,10 180,60 160,150 40,150 20,60" />
            <polygon points="100,10 180,60 130,90 100,60" fill="var(--color-glass-blue)" fillOpacity="0.55" />
            <polygon points="180,60 160,150 130,90" fill="var(--color-glass-violet)" fillOpacity="0.5" />
            <polygon points="160,150 40,150 100,60 130,90" fill="var(--color-glass-amber)" fillOpacity="0.5" />
            <polygon points="40,150 20,60 100,60" fill="var(--color-glass-ruby)" fillOpacity="0.45" />
            <polygon points="100,10 20,60 100,60" fill="var(--color-glass-blue)" fillOpacity="0.35" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p
          className="animate-fade-in-up font-mono text-sm uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber"
        >
          {t.hero.eyebrow}
        </p>
        <h1
          className="animate-fade-in-up mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {t.hero.title}
        </h1>
        <p
          className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
          style={{ animationDelay: "160ms" }}
        >
          {t.hero.bio1Pre}
          <em>{t.hero.bio1Emphasis}</em>
          {t.hero.bio1Post}
        </p>
        <p
          className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
          style={{ animationDelay: "160ms" }}
        >
          {t.hero.bio2Pre}
          <a href="https://elsje.studio" className="text-glass-blue hover:text-glass-violet">
            {t.hero.bio2LinkText}
          </a>
          {t.hero.bio2Post}
        </p>
        <div
          className="animate-fade-in-up mt-9 flex flex-wrap gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#projects"
            className="rounded-full bg-glass-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-glass-violet"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-glass-amber hover:text-glass-amber"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
