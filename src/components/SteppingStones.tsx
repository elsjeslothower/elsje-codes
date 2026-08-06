"use client";

import { useContent } from "@/context/LanguageContext";
import { ImageIcon } from "./icons";

export default function SteppingStones() {
  const t = useContent();

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="animate-fade-in-up font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {t.steppingStones.heading}
      </h1>
      <p
        className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
        style={{ animationDelay: "80ms" }}
      >
        {t.steppingStones.paragraph1}
      </p>

      <div className="mt-10 space-y-8">
        {t.steppingStones.stones.map((stone, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-border">
            <div className="flex aspect-[16/9] w-full items-center justify-center border-b border-border bg-surface">
              <div className="flex flex-col items-center gap-2 text-foreground-muted">
                <ImageIcon className="h-6 w-6" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {t.steppingStones.photoComingSoon}
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span
                    className="inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide"
                    style={{ background: "var(--color-glass-ruby)", color: "#ffffff" }}
                  >
                    {stone.status}
                  </span>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                    {stone.eyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                    {stone.title}
                  </h2>
                </div>
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-foreground-muted">
                {stone.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {stone.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
