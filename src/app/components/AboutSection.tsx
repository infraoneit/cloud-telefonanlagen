"use client";

type Props = { isDark: boolean };

export default function AboutSection({ isDark }: Props) {
  const text = isDark ? "text-white/70" : "text-black/70";
  const bg = isDark ? "bg-[#0A0A0A]" : "bg-[#FFFFFF]";   // <<< FIXED

  return (
    <section
      id="ueber-uns"
      className={`${bg} w-full mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10`}
      aria-labelledby="ueber-uns-heading"
    >
      <h2
        id="ueber-uns-heading"
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        Über InfraOne – Ihr Partner für Cloud-Telefonanlagen
      </h2>

      <p className={`mt-6 max-w-3xl ${text}`}>
        InfraOne IT Solutions GmbH ist ein Schweizer IT-Dienstleister mit
        Fokus auf moderne Cloud-Telefonanlagen für KMU, Verwaltungen und
        Organisationen. Unser Hauptsitz befindet sich in <strong>Winterthur</strong>,
        unsere Kunden betreuen wir aber ebenso häufig in <strong>Schaffhausen,
          Thurgau</strong> und in der gesamten Deutschschweiz.
      </p>

      <p className={`mt-4 max-w-3xl ${text}`}>
        Wir arbeiten mit führenden Systemen wie <strong>Peoplefone Hosted</strong>
        und <strong>3CX</strong>. Von der Planung über Portierung und Aufschaltung
        bis zum Betrieb erhalten Sie alles aus einer Hand – ohne Callcenter,
        sondern direkt von Technikern mit Erfahrung.
      </p>

      <ul className={`mt-6 space-y-2 ${text}`}>
        <li>✔ Cloud-Telefonanlagen für KMU & Mehrstandort-Unternehmen</li>
        <li>✔ Peoplefone Hosted & 3CX – flexibel, skalierbar, zuverlässig</li>
        <li>✔ Persönliche Betreuung statt Hotline-Warteschleifen</li>
        <li>✔ Infrastruktur & Datenhaltung ausschliesslich in der Schweiz</li>
      </ul>

      <a
        href="https://infraone.ch/unternehmen"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-8 rounded-md bg-[#3C9646] px-6 py-3 text-sm font-semibold text-black hover:bg-[#2d7e36]"
      >
        Mehr über InfraOne erfahren
      </a>

    </section>
  );
}
