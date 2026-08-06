"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/context/LanguageContext";

const SESSION_KEY = "signatureIntroPlayed";

export default function SignatureIntro() {
  const t = useContent();
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") finish();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function finish() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setFadingOut(true);
    window.setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      onClick={finish}
      className={`fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background transition-opacity duration-300 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        src="/signature-intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={finish}
        className="max-h-[60vh] max-w-[80vw] bg-background object-contain"
      />
      <span className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-widest text-foreground-muted">
        {t.signatureIntro.skip}
      </span>
    </div>
  );
}
