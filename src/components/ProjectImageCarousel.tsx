"use client";

import { useState, type ElementType } from "react";
import Image from "next/image";
import { ImageIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { useContent } from "@/context/LanguageContext";

export default function ProjectImageCarousel({
  images,
  alt,
  href,
}: {
  images: string[];
  alt: string;
  href?: string;
}) {
  const t = useContent();
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center border-b border-border bg-surface">
        <div className="flex flex-col items-center gap-2 text-foreground-muted">
          <ImageIcon className="h-6 w-6" />
          <span className="font-mono text-xs uppercase tracking-widest">
            {t.projects.photoComingSoon}
          </span>
        </div>
      </div>
    );
  }

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  const Track: ElementType = href ? "a" : "div";
  const trackProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface">
      <Track
        {...trackProps}
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full w-full flex-shrink-0">
            <Image
              src={src}
              alt={images.length > 1 ? `${alt} — ${t.projects.photoLabel} ${i + 1}/${images.length}` : alt}
              fill
              sizes="(min-width: 1024px) 976px, 100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </Track>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label={t.projects.previousPhoto}
            className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm transition-colors hover:bg-background"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t.projects.nextPhoto}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm transition-colors hover:bg-background"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${t.projects.goToPhoto} ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full shadow-sm transition-colors ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
