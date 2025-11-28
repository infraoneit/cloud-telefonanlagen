"use client";

import Image from "next/image";

type HeroProps = {
  isDark: boolean;
};

export default function HeroSection({ isDark }: HeroProps) {
  const muted = isDark ? "text-white/70" : "text-black/70";

  return (
    <section id="start">
      {/* Bild über volle Breite, ohne oben abgeschnitten */}
      <div className="w-full bg-black">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/heroimage.png"
            alt="Cloud-Telefonanlagen für Unternehmen"
            width={1920}
            height={672}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Text-Bereich */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3C9646]">
          Cloud-Telefonanlagen · Schweiz
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Moderne Business-Telefonie –
          <br />
          zuverlässig, flexibel, verständlich.
        </h1>

        <p className={`mt-5 max-w-3xl text-base sm:text-lg ${muted}`}>
          Statt teuren Hardware-Zentralen oder wartungsintensiven Telefonanlagen
          nutzen Unternehmen heute Cloud-Telefonie. Wir unterstützen Firmen in
          der Deutschschweiz bei der Einführung moderner VoIP-Lösungen –
          unkompliziert, sicher und massgeschneidert.
        </p>

        <ul className={`mt-6 space-y-2 text-sm sm:text-base ${muted}`}>
          <li>✔ 100 % Schweiz – Infrastruktur & Ansprechpartner</li>
          <li>✔ Keine lokale Telefonanlage mehr notwendig</li>
          <li>✔ Skalierbar für 5–100 Benutzer</li>
          <li>✔ Telefonieren von überall – Büro, Home-Office, unterwegs</li>
          <li>✔ Persönlicher Support statt Hotline-Warteschleife</li>
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://infraone.ch/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-[#3C9646] px-6 py-3 text-sm font-semibold text-black hover:bg-[#2d7e36]"
          >
            Kostenlose Erstberatung anfragen
          </a>
          <a
            href="#rechner"
            className="inline-flex items-center justify-center rounded-md border border-[#3C9646] px-6 py-3 text-sm font-semibold hover:bg-[#3C9646]/10"
          >
            Preise &amp; Angebot berechnen
          </a>
        </div>
      </div>
    </section>
  );
}
