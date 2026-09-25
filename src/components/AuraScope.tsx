"use client";

import { useContent } from "@/context/LanguageContext";

export default function AuraScope() {
    const t = useContent();

    return (
        <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
                <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-accent-primary dark:text-accent-highlight">
                    {t.auraScope.eyebrow}
                </p>
                <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {t.auraScope.heading}
                </h1>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground-muted">
                    {t.auraScope.body}
                </p>
            </div>
            <div className="flex flex-wrap gap-4">
                <a
                    href="/#projects"
                    className="mt-8 rounded-full bg-accent-secondary-text px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-primary"
                >
                    {t.auraScope.cta}
                </a>
            </div>

        </div>
    );
}
