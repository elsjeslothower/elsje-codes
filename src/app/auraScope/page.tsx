import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ConstructionBanner from "@/components/ConstructionBanner";
import AuraScope from "@/components/AuraScope";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Elsje Slothower's AuraScope",
  robots: { index: false, follow: false },
};

export default function AuraScopePage() {
  return (
    <>
      <ConstructionBanner />
      <Nav />
      <main className="flex-1">
        <AuraScope />
      </main>
      <Footer />
    </>
  );
}
