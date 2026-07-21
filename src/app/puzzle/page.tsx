import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PlaceholderSection from "@/components/PlaceholderSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Puzzle — elsje.codes",
};

export default function PuzzlePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PlaceholderSection contentKey="puzzle" />
      </main>
      <Footer />
    </>
  );
}
