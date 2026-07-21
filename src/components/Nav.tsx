"use client";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useContent } from "@/context/LanguageContext";

export default function Nav() {
  const t = useContent();

  const links = [
    { href: "/#about", label: t.nav.links.about },
    { href: "/#projects", label: t.nav.links.projects },
    { href: "/#skills", label: t.nav.links.skills },
    { href: "/#contact", label: t.nav.links.contact },
    { href: "/resume/", label: t.nav.links.resume },
    { href: "/puzzle/", label: t.nav.links.puzzle },
  ];

  return (
    <header className="animate-fade-in-down sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-lg font-semibold tracking-tight">
          Elsje Slothower
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-foreground-muted sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
