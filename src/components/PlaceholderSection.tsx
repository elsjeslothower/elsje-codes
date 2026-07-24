// Starter for a new page before its real content/copy exists.
// Pass a heading and a short placeholder line — no wiring into the
// bilingual content dict required until the page is actually built out.

export default function PlaceholderSection({
  heading,
  placeholder,
}: {
  heading: string;
  placeholder: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="animate-fade-in-up font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {heading}
      </h1>
      <p
        className="animate-fade-in-up mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
        style={{ animationDelay: "80ms" }}
      >
        {placeholder}
      </p>
    </section>
  );
}
