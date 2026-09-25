"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import { ImageIcon, CloseIcon } from "./icons";

// Same palette as the hero's polygon graphic on the homepage.
// Flat/theme-invariant values here where the shared tokens are tuned for a
// different job (decorative accent or hover-text) and don't stay dark enough
// for white badge text in both themes.
const badgeColors = [
  "var(--color-lead)",
  "var(--color-accent-secondary-text)",
  "#8f3323",
  "#8f5f1f",
];

const stoneImages: (string | null)[] = [
  "/stepping-stones/AI-security.webp",
  "/stepping-stones/jobs4TN.webp",
  "/stepping-stones/pantry-pickings-backend-whiteboard.webp",
  "/stepping-stones/fluent-forever.webp",
  "/stepping-stones/ODOT-plates.webp",
];

export default function SteppingStones() {
  const t = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openIndex]);

  const openStone = openIndex !== null ? t.steppingStones.stones[openIndex] : null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {t.steppingStones.heading}
      </h1>
      <p
        className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
      >
        {t.steppingStones.paragraph1}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.steppingStones.stones.map((stone, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => setOpenIndex(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpenIndex(i);
              }
            }}
            className="cursor-pointer overflow-hidden rounded-2xl border border-border transition-colors hover:border-accent-primary dark:hover:border-accent-highlight"
          >
            {stoneImages[i] ? (
              <div className="relative aspect-[16/9] w-full border-b border-border bg-surface">
                <Image
                  src={stoneImages[i]!}
                  alt={stone.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[16/9] w-full items-center justify-center border-b border-border bg-surface">
                <div className="flex flex-col items-center gap-2 text-foreground-muted">
                  <ImageIcon className="h-5 w-5" />
                  <span className="font-mono text-xs uppercase tracking-widest">
                    {t.steppingStones.photoComingSoon}
                  </span>
                </div>
              </div>
            )}

            <div className="p-5 sm:p-6">
              <a
                href={stone.link}
                onClick={(e) => e.stopPropagation()}
                className="inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-90"
                style={{ background: badgeColors[i % badgeColors.length], color: "#ffffff" }}
              >
                {stone.status}
              </a>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                {stone.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-lg font-semibold sm:text-xl">
                {stone.title}
              </h2>

              <p className="mt-3 leading-relaxed text-foreground-muted">
                {stone.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {stone.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <span className="mt-4 inline-block text-sm font-medium text-accent-primary dark:text-accent-highlight">
                {t.steppingStones.readMore}
              </span>
            </div>
          </div>
        ))}
      </div>

      {openStone && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="stone-modal-title"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-surface p-8 shadow-2xl sm:p-12"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label={t.steppingStones.closeModal}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#a9b7bd] transition-colors hover:bg-background hover:text-foreground dark:text-foreground-muted"
            >
              <CloseIcon className="h-4 w-4" />
            </button>

            <a
              href={openStone.link}
              className="inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-90"
              style={{ background: badgeColors[(openIndex ?? 0) % badgeColors.length], color: "#ffffff" }}
            >
              {openStone.status}
            </a>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[#f5ede0] dark:text-foreground-muted">
              {openStone.eyebrow}
            </p>
            <h2 id="stone-modal-title" className="mt-2 font-display text-3xl font-semibold text-[#f5ede0] dark:text-foreground sm:text-4xl">
              {openStone.title}
            </h2>

            <hr className="my-6 border-border" />

            <p className="max-w-prose text-base leading-relaxed text-[#f5ede0] dark:text-foreground-muted sm:text-lg">
              {openStone.articleBody}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {openStone.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-[#f5ede0] dark:text-foreground-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
