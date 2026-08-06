export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-glass-blue dark:text-glass-amber">
        About
      </h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold">Developer</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            Ada Developers Academy gave me my start in software development, but the spark started in high school when I took a coding extracurricular. The basic building blocks of programming began with{" "}
            <a
              href="https://snap.berkeley.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-glass-blue hover:text-glass-violet"
            >
              Snap!
            </a>{" "}
            and I&apos;ve been building on that foundation ever since. Critical thinking, problem solving, and creativity are the skills that I bring to every project I work on.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">Creator</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            My bachelor's degree is in Journalism and Public Interest. I have a long history of creating, whether it's publishing articles, fostering community engagement, or posting on social media. In my current position, I create software while creating a relationship of trust with my clients. I enjoy the creative process of building software, and I enjoy the creative process of building relationships.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">Artist</h3>
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            I like working my hands as well as my brain. Curiosity is the key, and I cultivate it anywhere and everywhere I can. Progressing through a project from start to finish is satisfying, and it's even better to share your creations with others. Stained glass is my outlet when I see something beautiful in the world and want others to see it too.
          </p>
        </div>
      </div>
    </section>
  );
}
