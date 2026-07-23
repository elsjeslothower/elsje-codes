import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SteppingStones from "@/components/SteppingStones";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stepping Stones — elsje.codes",
  robots: { index: false, follow: false },
};

export default function SteppingStonesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <SteppingStones />
      </main>
      <Footer />
    </>
  );
}
