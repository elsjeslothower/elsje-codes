import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ResumeContent from "@/components/ResumeContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Elsje Slothower's Resume",
  description: "Elsje Slothower's experience, skills, and education.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ResumeContent />
      </main>
      <Footer />
    </>
  );
}
