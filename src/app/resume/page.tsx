import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PlaceholderSection from "@/components/PlaceholderSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resume — elsje.codes",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PlaceholderSection contentKey="resume" />
      </main>
      <Footer />
    </>
  );
}
