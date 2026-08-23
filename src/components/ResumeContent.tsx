"use client";

import Image from "next/image";
import { useContent } from "@/context/LanguageContext";
import { MailIcon, LinkedInIcon, GitHubIcon } from "./icons";

const jobLogos: (string | null)[] = [
  "/resume/logos/Fast-Enterprises.webp",
  "/resume/logos/Skytap.webp",
];

const jobLogoLinks: (string | undefined)[] = ["https://www.fastenterprises.com", "https://www.kyndryl.com/us/en/services/cloud-uplift"];

const educationLogos: (string | null)[] = [
  "/resume/logos/UW-Seattle.webp",
  "/resume/logos/Ada-Developers-Academy.webp",
];

const educationLogoLinks: (string | undefined)[] = ["https://www.washington.edu/about/seattle-campus/", "https://adadevelopersacademy.org/history"];

const extracurricularLogos: (string | null)[] = [
  "/resume/logos/Fast-for-All.webp",
  "/resume/logos/Purls-of-Love.svg",
  "/resume/logos/Common-People-Yoga.webp",
  "/resume/logos/Elsje-Codes-pfp.webp",
];

const extracurricularLogoLinks: (string | null)[] = [
  "https://www.fastenterprises.com/community/",
  "https://www.instagram.com/purlsoflove/",
  "https://www.commonpeopleyoga.com/",
  "https://www.youtube.com/@elsjesglass",
];

export default function ResumeContent() {
  const t = useContent();
  const r = t.resume;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-in-up">
        <div className="flex flex-wrap items-center gap-6">
          <a href="/#contact" className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/resume/headshot-june-2026.webp"
              alt={r.headshotAlt}
              width={112}
              height={112}
              className="h-full w-full scale-110 object-cover"
            />
          </a>
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {r.name}
            </h1>
            <p className="mt-2 text-lg text-foreground-muted">{r.title}</p>
          </div>
        </div>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-foreground-muted">
          <span>{r.location}</span>
          <span aria-hidden>•</span>
          <span className="flex items-center gap-3">
            <a
              href={`mailto:${r.email}`}
              aria-label={r.email}
              title={r.email}
              className="hover:text-glass-blue dark:hover:text-glass-amber"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              href={`https://${r.linkedinLabel}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.linkedinLabel}
              title={r.linkedinLabel}
              className="hover:text-glass-blue dark:hover:text-glass-amber"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`https://${r.githubLabel}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.githubLabel}
              title={r.githubLabel}
              className="hover:text-glass-blue dark:hover:text-glass-amber"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          </span>
          <span aria-hidden>•</span>
          <span>{r.phone}</span>
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-foreground-muted">{r.summary}</p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
          <a
            href="/resume/Elsje-Slothower-Resume.pdf"
            download
            className="rounded-full bg-glass-green-text px-5 py-2.5 text-white transition-colors hover:bg-glass-blue"
          >
            {r.downloadPdfLabel}
          </a>
          <a
            href={`https://${r.linkedinLabel}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-glass-amber hover:text-glass-amber-text"
          >
            {r.linkedinCta}
          </a>
        </div>
      </div>

      <div className="animate-fade-in-up mt-16" style={{ animationDelay: "80ms" }}>
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {r.sectionLabels.employment}
        </h2>
        <div className="mt-6 space-y-10">
          {r.jobs.map((job, i) => (
            <div key={job.title} className="flex items-start gap-4">
              {jobLogos[i] && (
                <a href={jobLogoLinks[i]} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <Image
                    src={jobLogos[i]!}
                    alt={`${job.org} ${r.logoAlt}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                </a>
              )}
              <div>
                <p className="font-medium">{job.title}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                  {job.org} — {job.dates}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-in-up mt-16" style={{ animationDelay: "100ms" }}>
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {r.sectionLabels.impact}
        </h2>
        <div className="mt-6 space-y-8">
          {r.impact.map((project) => (
            <div key={project.title}>
              <p className="font-medium">{project.title}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                {project.org}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                {project.summary}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-glass-blue hover:text-glass-violet dark:text-glass-amber"
                >
                  {r.impactLinkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-in-up mt-16" style={{ animationDelay: "120ms" }}>
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {r.sectionLabels.skills}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {r.skillsList.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="animate-fade-in-up mt-16" style={{ animationDelay: "160ms" }}>
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {r.sectionLabels.education}
        </h2>
        <div className="mt-6 space-y-8">
          {r.education.map((entry, i) => (
            <div key={entry.degree} className="flex items-start gap-4">
              {educationLogos[i] && (
                <a href={educationLogoLinks[i]} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <Image
                    src={educationLogos[i]!}
                    alt={`${entry.org} ${r.logoAlt}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                </a>
              )}
              <div>
                <p className="font-medium">{entry.degree}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                  {entry.org} — {entry.dates}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-in-up mt-16" style={{ animationDelay: "200ms" }}>
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
          {r.sectionLabels.extracurriculars}
        </h2>
        <div className="mt-6 space-y-8">
          {r.extracurriculars.map((entry, i) => (
            <div key={entry.role} className="flex items-start gap-4">
              {extracurricularLogos[i] &&
                (extracurricularLogoLinks[i] ? (
                  <a
                    href={extracurricularLogoLinks[i]!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <Image
                      src={extracurricularLogos[i]!}
                      alt={`${entry.org} ${r.logoAlt}`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </a>
                ) : (
                  <Image
                    src={extracurricularLogos[i]!}
                    alt={`${entry.org} ${r.logoAlt}`}
                    width={48}
                    height={48}
                    className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
                  />
                ))}
              <div>
                <p className="font-medium">{entry.role}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                  {entry.org}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
