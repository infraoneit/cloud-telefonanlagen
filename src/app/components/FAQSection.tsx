"use client";

const faqs = [
  {
    q: "Funktioniert das ohne lokale Telefonanlage?",
    a: "Ja. Die Cloud-Telefonanlage läuft komplett im Schweizer Rechenzentrum. Vor Ort benötigen Sie nur Internet, Telefone oder Softphones.",
  },
  {
    q: "Können wir Home-Office-Benutzer einbinden?",
    a: "Ja. Mitarbeitende telefonieren per Softphone oder Mobile-App von überall – Büro, Home-Office, unterwegs.",
  },
  {
    q: "Was passiert bei Internetausfall?",
    a: "Rufnummern können automatisch oder manuell auf Mobilnummern oder andere Standorte umgeleitet werden. Die Telefonie bleibt über Mobilfunk-Internet weiterhin erreichbar.",
  },
  {
    q: "Können analoge Telefone weiter genutzt werden?",
    a: "Ja. Mit einem ATA-Adapter lassen sich analoge Geräte weiterhin betreiben, wenn nötig.",
  },
  {
    q: "Betreibt ihr auch Internet und Firewall?",
    a: "Ja. Auf Wunsch liefern wir Internetanschluss, Firewall und Netzwerk als Full-Managed-Service – inklusive Security-Konzept & Monitoring.",
  },
  {
    q: "Wie schnell ist die Anlage einsatzbereit?",
    a: "Kleine Anlagen (bis ~10 Nutzer) sind oft innerhalb weniger Tage produktiv. Größere Umgebungen hängen von Portierung & Planung ab.",
  },

  /* ------------------------- Neue SEO-relevante Fragen ------------------------- */

  {
    q: "Für wen eignet sich eine Cloud-Telefonanlage in der Schweiz?",
    a: "Ideal für KMU, Verwaltungen und Unternehmen mit Home-Office oder mehreren Standorten. Besonders häufig betreuen wir Kunden in Winterthur, Schaffhausen, Thurgau und Ostschweiz.",
  },
  {
    q: "Peoplefone Hosted oder 3CX – was ist besser?",
    a: "Peoplefone Hosted ist ideal für einfache, skalierbare Telefonie mit klaren Preisen. 3CX bietet mehr Flexibilität, Callcenter-Funktionen und Integrationen. Wir empfehlen je nach Anforderungen das passende System.",
  },
  {
    q: "Können bestehende Rufnummern übernommen werden?",
    a: "Ja. Schweizer Rufnummern (Swisscom, Sunrise, Quickline, etc.) können problemlos portiert werden. Die Umstellung planen wir so, dass keine Erreichbarkeitslücke entsteht.",
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
