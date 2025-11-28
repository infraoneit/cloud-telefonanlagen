"use client";

const faqs = [
  {
    q: "Funktioniert das ohne lokale Telefonanlage?",
    a: "Ja. Die gesamte Rufsteuerung läuft im Rechenzentrum. Vor Ort benötigen Sie nur Internet, Telefone oder Softphones.",
  },
  {
    q: "Können wir Home-Office-Benutzer einbinden?",
    a: "Ja. Mitarbeitende können mit Softphone oder Mobile-App von überall her telefonieren.",
  },
  {
    q: "Was passiert bei Internetausfall?",
    a: "Rufnummern können einfach umgeleitet werden, z.B. auf Mobilnummern. Zudem funktioniert die Telefonie über die Peoplefone-App weiter, sobald wieder mobile Daten oder WLAN verfügbar sind.",
  },
  {
    q: "Können analoge Telefone weiter genutzt werden?",
    a: "Ja. Mit einem ATA-Adapter können bestehende analoge Geräte weiter betrieben werden.",
  },
  {
    q: "Betreibt ihr auch Internet und Firewall?",
    a: "Ja. Auf Wunsch liefern wir Internetanschluss, Firewall und Netzwerk als Full-Managed-Service – inklusive Security-Konzept.",
  },
  {
    q: "Wie schnell ist die Anlage einsatzbereit?",
    a: "Für Anlagen bis ca. 10 Benutzer ist ein typischer Go-Live in 1–3 Tagen möglich. Grössere Anlagen hängen vom Projektumfang und der Abstimmung ab.",
  },
];

type Props = { isDark: boolean };

export default function FAQSection({ isDark }: Props) {
  const cardBg = isDark
    ? "bg-[#111111] border-white/10 text-white"
    : "bg-white border-black/10 text-black";
  const answerText = isDark ? "text-white/70" : "text-black/70";

  return (
    <section
      id="faq"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        Häufige Fragen zur Cloud-Telefonie
      </h2>

      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className={`overflow-hidden rounded-xl border ${cardBg}`}
          >
            <summary className="cursor-pointer px-4 py-3 text-sm font-medium sm:text-base">
              {item.q}
            </summary>
            <div className={`px-4 pb-4 pt-2 text-sm sm:text-[15px] ${answerText}`}>
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
