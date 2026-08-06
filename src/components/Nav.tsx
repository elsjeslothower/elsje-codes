"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useContent } from "@/context/LanguageContext";
import { MenuIcon, CloseIcon } from "./icons";

export default function Nav() {
  const t = useContent();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/#about", label: t.nav.links.about },
    { href: "/#projects", label: t.nav.links.projects },
    { href: "/resume/", label: t.nav.links.resume },
    { href: "/#puzzle", label: t.nav.links.puzzle },
  ];

  return (
    <header className="animate-fade-in-down sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-lg font-semibold tracking-tight">
          {'<'} elsje.codes{'/>'}
        </a>
        <div className="flex items-center gap-2 sm:gap-6">
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
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-glass-amber hover:text-glass-amber sm:hidden"
            >
              {menuOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <ul className="animate-fade-in-down flex flex-col gap-1 border-t border-border/80 px-6 py-4 text-sm text-foreground-muted sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-2 py-2 transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
