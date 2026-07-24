import Nav from "@/components/Nav";
import SignatureIntro from "@/components/SignatureIntro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Puzzle from "@/components/Puzzle";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SignatureIntro />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Puzzle />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
