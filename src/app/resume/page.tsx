import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ResumeContent from "@/components/ResumeContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resume — elsje.codes",
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
