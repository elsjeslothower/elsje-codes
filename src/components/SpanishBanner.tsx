"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function SpanishNotice() {
  const { language } = useLanguage();

  if (language !== "es") return null;

  return (
    <div className="bg-glass-violet px-6 py-2 text-center">
      <p className="text-xs text-white sm:text-sm">
        Estoy estudiando español y intentando traducir esto website por mi cuenta.
        ¡Gracias por visitando mi portafolio!
      </p>
    </div>
  );
}
