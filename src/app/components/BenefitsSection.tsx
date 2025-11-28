"use client";

import { MapPin, BadgeSwissFranc, Zap, Layers3 } from "lucide-react";

type Props = { isDark: boolean };

export default function BenefitsSection({ isDark }: Props) {
  const cardBase =
    "rounded-2xl border shadow-sm p-6 md:p-8 flex flex-col gap-2";
  const cardTheme = isDark
    ? "bg-[#111111] border-white/10"
    : "bg-white border-black/10";
  const textMuted = isDark ? "text-white/70" : "text-black/70";

  return (
    <section
      id="leistungen"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10"
      aria-labelledby="vorteile"
    >
      {/* H2 – jetzt Keyword-relevant */}
      <h2
        id="vorteile"
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        Vorteile einer Cloud-Telefonanlage für Schweizer KMU
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        
        {/* Karte 1 – regionale Stärke */}
        <div className={`${cardBase} ${cardTheme}`}>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-[#3C9646]" />
            <h3 className="text-lg font-semibold">Regionale Nähe</h3>
          </div>
          <p className={textMuted}>
            Wir betreiben Cloud-Telefonanlagen für Unternehmen in 
            <strong> Winterthur, Schaffhausen, Thurgau </strong> und der gesamten Schweiz.
            Direkter Technik-Kontakt statt Hotline-Warteschleifen.
          </p>
        </div>

        {/* Karte 2 – Kostenklarheit */}
        <div className={`${cardBase} ${cardTheme}`}>
          <div className="flex items-center gap-3">
            <BadgeSwissFranc className="h-6 w-6 text-[#3C9646]" />
            <h3 className="text-lg font-semibold">Planbare Kosten</h3>
          </div>
          <p className={textMuted}>
            Keine teure Hardware-Anlage mehr. Monatlich kalkulierbare Cloud-Telefonie 
            mit klaren Preisen – ideal für KMU.
          </p>
        </div>

        {/* Karte 3 – Geschwindigkeit */}
        <div className={`${cardBase} ${cardTheme}`}>
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-[#3C9646]" />
            <h3 className="text-lg font-semibold">Schnelle Umsetzung</h3>
          </div>
          <p className={textMuted}>
            Einrichtung und Portierung in wenigen Tagen. 
            Cloud-Telefonanlagen starten ohne Vor-Ort-Hardware.
          </p>
        </div>

        {/* Karte 4 – Komplettlösung */}
        <div className={`${cardBase} ${cardTheme}`}>
          <div className="flex items-center gap-3">
            <Layers3 className="h-6 w-6 text-[#3C9646]" />
            <h3 className="text-lg font-semibold">Alles aus einer Hand</h3>
          </div>
          <p className={textMuted}>
            Telefonie, Internet, Netzwerk & Security – 
            eine Lösung, ein Ansprechpartner, kein Schnittstellen-Chaos.
          </p>
        </div>
      </div>
    </section>
  );
}
