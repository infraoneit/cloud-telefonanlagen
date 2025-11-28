"use client";

type Props = { isDark: boolean };

export default function CloudTelefonieSection({ isDark }: Props) {
  const textMuted = isDark ? "text-white/70" : "text-black/70";
  const border = isDark ? "border-white/10" : "border-black/10";
  const headBg = isDark ? "bg-white/5" : "bg-black/5";

  return (
    <section
      id="ueber-uns"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10"
      aria-labelledby="was-ist-cloud-telefonie"
    >
      <h2
        id="was-ist-cloud-telefonie"
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        Was ist Cloud-Telefonie?
      </h2>

      <p className={`mt-6 max-w-3xl ${textMuted}`}>
        Bei Cloud-Telefonie steht die Telefonanlage nicht mehr im eigenen
        Serverraum, sondern sicher im Rechenzentrum. Telefone, Softphones und
        Mobile-Apps verbinden sich verschlüsselt über das Internet mit der
        Plattform.
      </p>

      <p className={`mt-3 max-w-3xl ${textMuted}`}>
        Das eignet sich besonders für KMU, Vereine, Verwaltungen, Arztpraxen
        und Teams mit Home-Office oder mehreren Standorten.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table
          className={`w-full border-collapse text-sm md:text-base ${border}`}
        >
          <thead className={headBg}>
            <tr>
              <th className={`p-3 text-left ${border}`}>Vorteil</th>
              <th className={`p-3 text-left ${border}`}>Cloud-Telefonie</th>
              <th className={`p-3 text-left ${border}`}>Klassische Anlage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`p-3 ${border}`}>Hardware vor Ort notwendig</td>
              <td className={`p-3 ${border}`}>❌ keine</td>
              <td className={`p-3 ${border}`}>✔ ja</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Skalierbar pro Benutzer</td>
              <td className={`p-3 ${border}`}>✔ flexibel</td>
              <td className={`p-3 ${border}`}>❌ limitiert</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Home-Office &amp; Mobile Nutzung</td>
              <td className={`p-3 ${border}`}>
                ✔ sofort möglich (App &amp; Softphone)
              </td>
              <td className={`p-3 ${border}`}>⚠ meist nur über VPN möglich</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Wartung &amp; Updates</td>
              <td className={`p-3 ${border}`}>
                ✔ automatisch im Rechenzentrum
              </td>
              <td className={`p-3 ${border}`}>❌ manuell &amp; kostenpflichtig</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Investitionskosten zu Beginn</td>
              <td className={`p-3 ${border}`}>✔ tief</td>
              <td className={`p-3 ${border}`}>❌ hoch</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Standortvernetzung</td>
              <td className={`p-3 ${border}`}>
                ✔ mehrere Standorte einfach anbinden
              </td>
              <td className={`p-3 ${border}`}>
                ⚠ technisch aufwendiger, teure Verbindungen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
