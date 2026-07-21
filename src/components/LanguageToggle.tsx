"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Switch language"
      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-border px-2 font-mono text-xs font-medium text-foreground-muted transition-colors hover:border-glass-amber hover:text-glass-amber"
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
