"use client";

import { useContent } from "@/context/LanguageContext";

export default function SteppingStones(){
    
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
    </section>
  );
}
