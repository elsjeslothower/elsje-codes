"use client";

import { useContent, useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const t = useContent();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.nav.switchLanguage}
      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-border px-2 font-mono text-xs font-medium text-foreground-muted transition-colors hover:border-glass-amber hover:text-glass-amber"
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
