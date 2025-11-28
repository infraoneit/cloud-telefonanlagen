"use client";

import Image from "next/image";

type HeroProps = {
  isDark: boolean;
};

export default function HeroSection({ isDark }: HeroProps) {
  const muted = isDark ? "text-white/70" : "text-black/70";

  return (
    <section id="start">
      {/* Hero-Bild → unverändert gelassen, Format bleibt 1:1 */}
      <div className="w-full bg-black">
        <div className="relative w-full overflow-hidden">
          <Image
            src="/heroimage.png"
            alt="Cloud-Telefonanlagen für KMU in der Schweiz"
            width={1920}
            height={672}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Text-Layer */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        
        {/* SEO-Signalzeile */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3C9646]">
          Cloud-Telefonanlagen · Schweiz · Winterthur · Schaffhausen · Thurgau
        </p>

        {/* >>> Hauptkeyword-H1 – wichtigste Änderung <<< */}
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Cloud-Telefonanlagen für Unternehmen in der Schweiz
        </h1>

        <p className={`mt-5 max-w-3xl text-base sm:text-lg ${muted}`}>
          Moderne VoIP-Telefonie ohne lokale Hardware. Wir realisieren 
          <strong> Cloud-Telefonanlagen für KMU und Verwaltungen </strong> 
          in der ganzen Schweiz – mit Fokus auf <strong>Winterthur, Schaffhausen 
          und Thurgau</strong>. Ideal für Home-Office, mehrere Standorte und Teams,
          die flexibel arbeiten möchten.
        </p>

        {/* Vorteils-Bullets SEO-optimiert – nicht überladen */}
        <ul className={`mt-6 space-y-2 text-sm sm:text-base ${muted}`}>
          <li>✔ Standortunabhängig – Telefonieren im Büro, Home-Office & mobil</li>
          <li>✔ Keine physische Telefonanlage mehr notwendig</li>
          <li>✔ Skalierbar von 5–100 Benutzern</li>
          <li>✔ Besonders geeignet für KMU & Mehrstandort-Unternehmen</li>
          <li>✔ Persönliche Betreuung statt Callcenter – direkt von Technikern</li>
        </ul>

        {/* CTAs – klarer Bezug zu Cloud-Telefonanlage */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://infraone.ch/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-[#3C9646] px-6 py-3 text-sm font-semibold text-black hover:bg-[#2d7e36]"
          >
            Beratung zur Cloud-Telefonanlage anfragen
          </a>

          <a
            href="#rechner"
            className="inline-flex items-center justify-center rounded-md border border-[#3C9646] px-6 py-3 text-sm font-semibold hover:bg-[#3C9646]/10"
          >
            Kosten für Cloud-Telefonanlage berechnen
          </a>
        </div>
      </div>
    </section>
  );
}
