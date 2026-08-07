import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ConstructionBanner from "@/components/ConstructionBanner";
import SteppingStones from "@/components/SteppingStones";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Elsje Slothower's Stepping Stones",
  robots: { index: false, follow: false },
};

export default function SteppingStonesPage() {
  return (
    <>
      <ConstructionBanner />
      <Nav />
      <main className="flex-1">
        <SteppingStones />
      </main>
      <Footer />
    </>
  );
}
