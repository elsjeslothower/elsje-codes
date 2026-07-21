"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { en } from "@/content/en";
import { es } from "@/content/es";

type Language = "en" | "es";

const dictionaries = { en, es };

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
}>({
  language: "en",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored === "es" || stored === "en") setLanguage(stored);
  }, []);

  function toggleLanguage() {
    const next: Language = language === "en" ? "es" : "en";
    setLanguage(next);
    localStorage.setItem("language", next);
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useContent() {
  const { language } = useLanguage();
  return dictionaries[language];
}
