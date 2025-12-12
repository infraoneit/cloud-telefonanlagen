"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type HeroProps = {
  isDark: boolean;
};

export default function HeroSection({ isDark }: HeroProps) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Cloud-Telefonanlagen für Unternehmen in der Schweiz";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        setShowCursor(false);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingEffect);
  }, []);

  // Split text to style "Cloud-Telefonanlagen" green
  const greenPart = "Cloud-Telefonanlagen";
  const restPart = " für Unternehmen in der Schweiz";

  // Determine what to display based on typing progress
  const displayGreen = text.length >= greenPart.length ? greenPart : text;
  const displayRest = text.length > greenPart.length ? text.substring(greenPart.length) : "";

  return (
    <section id="start" className="relative w-full">
      {/* Hero-Bild Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[950px] overflow-hidden">
        <Image
          src="/heroimage.png"
          alt="Cloud-Telefonanlagen für KMU in der Schweiz"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay - Only on Desktop */}
        <div className="hidden lg:block absolute inset-0 bg-black/60"></div>

        {/* Desktop Overlay Content (H1 + Buttons) */}
        <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start text-left px-6 max-w-6xl mx-auto w-full">
          {/* SEO-Signalzeile */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3C9646] mb-6">
            Cloud-Telefonanlagen · Schweiz · Winterthur · Schaffhausen · Thurgau
          </p>

          {/* H1 mit Autotype */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white min-h-[1.5em] max-w-5xl">
            <span className="text-[#3C9646]">{displayGreen}</span>
            {displayRest}
            {showCursor && <span className="animate-pulse">|</span>}
          </h1>

          {/* CTAs */}
          <div className="mt-10 flex gap-4">
            <a
              href="https://infraone.ch/kontakt"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-[#3C9646] px-8 py-4 text-base font-bold text-black hover:bg-[#2d7e36] transition-colors"
            >
              Beratung anfragen
            </a>

            <a
              href="#rechner"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Kosten berechnen
            </a>
          </div>
        </div>
      </div>

      {/* Content Container (Below Image) */}
      <div className={`relative flex flex-col justify-center ${isDark ? "bg-[#0A0A0A] text-white" : "bg-white text-black"}`}>
        <div className="mx-auto max-w-6xl w-full px-6 py-12 sm:px-8 lg:px-10 lg:py-24">

          {/* Mobile Only Content (SEO, H1, Buttons) */}
          <div className="lg:hidden">
            {/* SEO-Signalzeile */}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3C9646] mb-4">
              Cloud-Telefonanlagen · Schweiz · Winterthur · Schaffhausen · Thurgau
            </p>

            {/* H1 mit Autotype (Mobile displayed as div to avoid duplicate H1 tag) */}
            <div className="text-3xl font-bold leading-tight sm:text-4xl min-h-[3em] sm:min-h-[2.5em]" role="heading" aria-level={1}>
              <span className="text-[#3C9646]">{displayGreen}</span>
              {displayRest}
              {showCursor && <span className="animate-pulse">|</span>}
            </div>

            {/* CTAs */}
            <div className="mt-8 mb-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <a
                href="https://infraone.ch/kontakt"
                className="inline-flex items-center justify-center rounded-md bg-[#3C9646] px-8 py-4 text-base font-bold text-black hover:bg-[#2d7e36] transition-colors"
              >
                Beratung anfragen
              </a>

              <a
                href="#rechner"
                className={`inline-flex items-center justify-center rounded-md border-2 px-8 py-4 text-base font-bold transition-colors backdrop-blur-sm ${isDark ? "border-white/20 bg-white/5 text-white hover:bg-white/10" : "border-black/20 bg-black/5 text-black hover:bg-black/10"}`}
              >
                Kosten berechnen
              </a>
            </div>
          </div>

          {/* Shared/Below Content (Paragraph, Bullets) - Left Aligned */}
          <div className="text-left w-full">
            <p className={`max-w-3xl text-base sm:text-lg leading-relaxed ${isDark ? "text-white/90" : "text-black/80"}`}>
              Moderne VoIP-Telefonie ohne lokale Hardware. Wir realisieren
              <strong> Cloud-Telefonanlagen für KMU und Verwaltungen </strong>
              in der ganzen Schweiz – mit Fokus auf <strong>Winterthur, Schaffhausen
                und Thurgau</strong>. Ideal für Home-Office, mehrere Standorte und Teams,
              die flexibel arbeiten möchten.
            </p>

            {/* Vorteils-Bullets */}
            <ul className={`mt-8 space-y-3 text-sm sm:text-base text-left inline-block ${isDark ? "text-white/80" : "text-black/70"}`}>
              <li className="flex items-center gap-2">
                <span className="text-[#3C9646]">✔</span> Standortunabhängig – Telefonieren im Büro, Home-Office & mobil
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3C9646]">✔</span> Keine physische Telefonanlage mehr notwendig
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3C9646]">✔</span> Skalierbar von 5–100 Benutzern
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3C9646]">✔</span> Besonders geeignet für KMU & Mehrstandort-Unternehmen
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3C9646]">✔</span> Persönliche Betreuung statt Callcenter – direkt von Technikern
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
