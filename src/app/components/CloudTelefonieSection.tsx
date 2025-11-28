"use client";

type Props = { isDark: boolean };

export default function CloudTelefonieSection({ isDark }: Props) {
  const textMuted = isDark ? "text-white/70" : "text-black/70";
  const border = isDark ? "border-white/10" : "border-black/10";
  const headBg = isDark ? "bg-white/5" : "bg-black/5";

  return (
    <section
      id="cloud-telefonie"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 text-left" // <<< TITEL + TEXT LINKS
      aria-labelledby="was-ist-cloud-telefonie"
    >
      <h2
        id="was-ist-cloud-telefonie"
        className="text-3xl font-semibold tracking-tight md:text-4xl"
      >
        Was ist Cloud-Telefonie und wie funktioniert eine Cloud-Telefonanlage?
      </h2>

      <p className={`mt-6 max-w-3xl ${textMuted}`}>
        Bei einer <strong>Cloud-Telefonanlage</strong> (Cloud PBX) steht die
        Telefonzentrale nicht mehr im eigenen Büro, sondern sicher in einem
        Schweizer Rechenzentrum. Telefone, Softphones und Mobile-Apps verbinden
        sich verschlüsselt über das Internet.
      </p>

      <p className={`mt-3 max-w-3xl ${textMuted}`}>
        Das macht moderne Business-Telefonie flexibel, skalierbar und
        ortsunabhängig – ideal für <strong>KMU, Remote-Teams und
        Mehrstandort-Unternehmen</strong>.
      </p>

      <div className="mt-10 overflow-x-auto">
        <table
          className={`w-full border-collapse text-sm md:text-base rounded-md overflow-hidden ${border}`}
        >
          <thead className={headBg}>
            <tr>
              <th className={`p-3 text-left ${border}`}>Merkmal</th>
              <th className={`p-3 text-left ${border}`}>Cloud-Telefonie</th>
              <th className={`p-3 text-left ${border}`}>Klassische Anlage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`p-3 ${border}`}>Hardware im Büro notwendig</td>
              <td className={`p-3 ${border}`}>❌ nein</td>
              <td className={`p-3 ${border}`}>✔ ja</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Skalierbar nach Benutzer</td>
              <td className={`p-3 ${border}`}>✔ jederzeit erweiterbar</td>
              <td className={`p-3 ${border}`}>❌ limitiert &amp; aufwendig</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Home-Office &amp; mobil telefonieren</td>
              <td className={`p-3 ${border}`}>✔ direkt per App / Softphone</td>
              <td className={`p-3 ${border}`}>⚠ oft nur via VPN-Umwege</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Wartung &amp; Updates</td>
              <td className={`p-3 ${border}`}>✔ automatisch im Rechenzentrum</td>
              <td className={`p-3 ${border}`}>❌ intern betreuungsintensiv</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Investition zu Beginn</td>
              <td className={`p-3 ${border}`}>✔ tief</td>
              <td className={`p-3 ${border}`}>❌ hoch</td>
            </tr>
            <tr>
              <td className={`p-3 ${border}`}>Standorte verbinden</td>
              <td className={`p-3 ${border}`}>✔ sehr einfach</td>
              <td className={`p-3 ${border}`}>⚠ technisch komplex</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
