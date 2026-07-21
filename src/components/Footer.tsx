"use client";

import { useContent } from "@/context/LanguageContext";

export default function Footer() {
  const t = useContent();

  return (
    <footer className="mx-auto max-w-5xl px-6 py-8">
      <p className="font-mono text-xs text-foreground-muted">
        © {new Date().getFullYear()} Elsje Slothower. {t.footer.builtWith}
      </p>
    </footer>
  );
}
