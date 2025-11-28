"use client";

type Props = { isDark: boolean };

export default function PricesSection({ isDark }: Props) {
  const cardBase =
    "rounded-2xl border shadow-sm p-5 text-sm md:text-[15px]";
  const cardTheme = isDark
    ? "bg-[#111111] border-white/10"
    : "bg-white border-black/10";
  const textMuted = isDark ? "text-white/70" : "text-black/70";

  return (
    <section
      id="preise"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10"
      aria-labelledby="preise-möglichkeiten"
    >
      {/* Überschrift linksbündig */}
      <h2
        id="preise-möglichkeiten"
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        Preise &amp; Möglichkeiten für Cloud-Telefonanlagen in der Schweiz
      </h2>

      {/* Einleitung linksbündig */}
      <p
        className={`mt-4 max-w-3xl text-sm md:text-base ${textMuted}`}
      >
        Unsere Lösungen sind skalierbar von kleinen Teams bis grösseren
        Standorten. Ideal für Kunden in Winterthur, Schaffhausen, Thurgau und
        der gesamten Deutschschweiz. Cloud-Telefonanlagen lassen sich flexibel
        an Wachstum und Teamgrössen anpassen – ohne lokale Telefonanlage,
        ohne Wartungsaufwand.
      </p>

      {/* Karten unverändert */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className={`${cardBase} ${cardTheme}`}>
          <h3 className="mb-2 text-base font-semibold">
            Kostenrechner Cloud-Telefonanlage (Peoplefone Hosted)
          </h3>
          <p className={`mb-3 ${textMuted}`}>
            In 30 Sekunden eine realistische monatliche Preisindikation
            erstellen. Ideal für Budgetplanung &amp; Entscheidungsfindung.
          </p>
          <a href="#rechner" className="font-medium text-[#3C9646] underline">
            Direkt zum Kostenrechner
          </a>
        </div>

        <div className={`${cardBase} ${cardTheme}`}>
          <h3 className="mb-2 text-base font-semibold">Individuelle Offerte</h3>
          <p className={`mb-3 ${textMuted}`}>
            Für Cloud-Telefonanlagen mit 5–100 Benutzer:innen erstellen wir
            individuelle Angebote mit Peoplefone Hosted oder 3CX – passgenau,
            skalierbar und DSG-konform in Schweizer Rechenzentren.
          </p>
          <a
            href="https://infraone.ch/kontakt"
            className="font-medium text-[#3C9646] underline"
          >
            Offerte anfordern
          </a>
        </div>

        <div className={`${cardBase} ${cardTheme}`}>
          <h3 className="mb-2 text-base font-semibold">
            Technische Architektur &amp; Beratung
          </h3>
          <p className={`mb-3 ${textMuted}`}>
            Für Multi-Site-Umgebungen, 3CX-Integration, Cloud-PBX-Migrationen
            oder hybride Szenarien stehen wir beratend zur Seite – inkl.
            Netzwerk, Firewall &amp; Internet.
          </p>
          <a
            href="https://infraone.ch/kontakt"
            className="font-medium text-[#3C9646] underline"
          >
            Beratungstermin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}
