"use client";

import { useContent } from "@/context/LanguageContext";

export default function ConstructionBanner() {
  const t = useContent();

  return (
    <div className="bg-glass-amber px-6 py-2 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-lead)]">
        {t.banner}
      </p>
    </div>
  );
}
