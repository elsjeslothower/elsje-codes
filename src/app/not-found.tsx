"use client";

import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useContent } from "@/context/LanguageContext";

export default function NotFound() {
  const t = useContent();
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <>
      <Nav />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="animate-glass-in relative h-56 w-56 sm:h-64 sm:w-64">
            <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible">
              <g stroke="var(--color-lead)" strokeWidth="1.5" fill="none">
                <polygon points="100,10 180,60 160,150 40,150 20,60" />
                <polygon points="100,10 180,60 130,90 100,60" fill="var(--color-glass-green)" fillOpacity="0.55" />
                <polygon points="180,60 160,150 130,90" fill="var(--color-glass-blue)" fillOpacity="0.5" />
                <polygon points="160,150 40,150 100,60 130,90" fill="var(--color-glass-amber)" fillOpacity="0.5" />
                {/* the missing piece — just an empty, dashed outline where it used to be */}
                <polygon
                  points="40,150 20,60 100,60"
                  fill="none"
                  stroke="var(--color-glass-ruby)"
                  strokeOpacity="0.5"
                  strokeDasharray="4 4"
                />
                <polygon points="100,10 20,60 100,60" fill="var(--color-glass-green)" fillOpacity="0.35" />
              </g>
              {/* the same piece, broken off and drifting away */}
              <g transform="translate(-28,74) rotate(-16 60 105) scale(0.5)" opacity="0.85">
                <polygon
                  points="40,150 20,60 100,60"
                  fill="var(--color-glass-ruby)"
                  fillOpacity="0.6"
                  stroke="var(--color-lead)"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </div>

          <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
            {t.notFound.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.notFound.heading}
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground-muted">
            {t.notFound.body}
          </p>
          <button
            type="button"
            onClick={goBack}
            className="mt-8 rounded-full bg-glass-green-text px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-glass-blue"
          >
            {t.notFound.cta}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
