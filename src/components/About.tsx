"use client";

import { useContent } from "@/context/LanguageContext";

export default function About() {
  const t = useContent();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
        {t.about.heading}
      </h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold">{t.about.developerHeading}</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            {t.about.developerPre}
            <a
              href="https://snap.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-glass-blue hover:text-glass-violet"
            >
              {t.about.developerLinkText}
            </a>
            {t.about.developerPost}
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">{t.about.creatorHeading}</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            {t.about.creatorText}
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">{t.about.artistHeading}</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            {t.about.artistText}
          </p>
        </div>
      </div>
    </section>
  );
}
