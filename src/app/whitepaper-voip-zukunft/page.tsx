"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Phone, Server, Smartphone, Globe, Mail } from "lucide-react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

export default function WhitepaperPage() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const stored = window.localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
            setTheme(stored);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const isDark = theme === "dark";

    return (
        <main
            className={
                "min-h-screen transition-colors duration-300 " +
                (isDark ? "bg-[#0A0A0A] text-white" : "bg-white text-black")
            }
        >
            <HeaderSection
                theme={theme}
                onToggleTheme={() =>
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
            />

            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Header Section */}
                    <div className="text-left space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#3C9646]">
                            Whitepaper: peoplefone HOSTED
                        </h1>
                        <p className={`text-xl font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Die flexible Cloud-Telefonanlage für KMU
                        </p>
                    </div>

                    {/* Intro */}
                    <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
                        <p className="lead text-lg">
                            peoplefone HOSTED ist die leistungsfähige, cloud-basierte VoIP-Telefonanlage, die speziell auf die Bedürfnisse kleiner und mittlerer Unternehmen (KMU) zugeschnitten ist. Die Lösung ersetzt herkömmliche Telefonanlagen, erfordert keine eigene Hardware oder Software und bietet höchste Flexibilität sowie volle Kostenkontrolle.
                        </p>

                        <div className={`border-l-4 border-[#3C9646] p-4 my-6 rounded-r-lg ${isDark ? "bg-[#3C9646]/10" : "bg-[#3C9646]/5"}`}>
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-[#3C9646] m-0">
                                <Check className="h-5 w-5" /> Wichtiger Hinweis: Kostenlose Testphase
                            </h3>
                            <p className="mt-2 mb-0">
                                Sie können die gesamte peoplefone HOSTED Anlage einen Monat lang kostenlos und unverbindlich testen. Dies beinhaltet die kostenlose Bereitstellung von Rufnummern und ein Testguthaben für Gespräche.
                            </p>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className={`border rounded-lg p-6 shadow-sm ${isDark ? "bg-[#0F0F0F] border-white/10" : "bg-gray-50 border-gray-200"}`}>
                        <h2 className="text-xl font-semibold mb-4">Inhaltsverzeichnis</h2>
                        <nav className="grid gap-2 md:grid-cols-2">
                            <Link href="#funktionsumfang" className={`transition-colors flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-[#3C9646]" : "text-gray-600 hover:text-[#3C9646]"}`}>
                                <span className="font-mono text-sm">I.</span> Funktionsumfang
                            </Link>
                            <Link href="#kostenuebersicht" className={`transition-colors flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-[#3C9646]" : "text-gray-600 hover:text-[#3C9646]"}`}>
                                <span className="font-mono text-sm">II.</span> Kostenübersicht
                            </Link>
                            <Link href="#gespraechstarife" className={`transition-colors flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-[#3C9646]" : "text-gray-600 hover:text-[#3C9646]"}`}>
                                <span className="font-mono text-sm">III.</span> Gesprächstarife und Flat-Pakete
                            </Link>
                            <Link href="#rufnummern" className={`transition-colors flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-[#3C9646]" : "text-gray-600 hover:text-[#3C9646]"}`}>
                                <span className="font-mono text-sm">IV.</span> Kosten der Rufnummern
                            </Link>
                        </nav>
                    </div>

                    {/* Section I */}
                    <section id="funktionsumfang" className="scroll-mt-24 space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-2 border-gray-700">I. Funktionsumfang (Inklusive und Erweiterungen)</h2>
                        <p>peoplefone HOSTED ist modular aufgebaut. Die Basis-Lizenz beinhaltet bereits alle wichtigen Funktionen für den professionellen Geschäftsbetrieb.</p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">1. Standardfunktionen (Im Basispreis pro Benutzerlizenz enthalten)</h3>
                            <p>Die peoplefone HOSTED Basis-Lizenz ist eine vollumfängliche PBX-Lösung, die pro Lizenz bis zu fünf Endgeräte (IP-Telefone, Softphones, Apps) unterstützt.</p>

                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Kategorie</th>
                                            <th className="px-6 py-3 font-medium">Funktion (Auszug)</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Phone className="h-4 w-4" /> Erreichbarkeit</td>
                                            <td className="px-6 py-4">Ringrufgruppen, Anrufweiterleitung (intern/extern), Besetztanzeige (BLF), Tag-/Nachtschaltung</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Smartphone className="h-4 w-4" /> Mobilität</td>
                                            <td className="px-6 py-4">peoplefone APP (für iOS/Android) zur Integration mobiler Arbeitsplätze.</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Mail className="h-4 w-4" /> Kommunikation</td>
                                            <td className="px-6 py-4">Firmeninternes Telefonbuch (LDAP-Abfrage), Anrufbeantworter (Voice-to-E-Mail), Fax-to-E-Mail / E-Mail-to-Fax, Offene API-Schnittstelle zur Integration in bestehende CRM- und ERP-Systeme.</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Server className="h-4 w-4" /> System & Hosting</td>
                                            <td className="px-6 py-4">Online-Verwaltung (Web-Portal), keine Hardware- oder Software-Updates nötig, Hosting in Schweizer Rechenzentren, Backup für Leitungsausfall.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-semibold">2. Erweiterungen (Optionale Module und Kosten)</h3>
                            <p>Zusätzliche professionelle Funktionen können monatlich pro Modul dazugebucht werden. Die Kosten verstehen sich in CHF inkl. MwSt.</p>

                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Erweiterung</th>
                                            <th className="px-6 py-3 font-medium">Funktion</th>
                                            <th className="px-6 py-3 font-medium text-right">Kosten pro Monat</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">peoplefone SOFTPHONE</td>
                                            <td className="px-6 py-4">PC- und Mac-App zur Nutzung des Computers als vollwertiges Softphone (zusätzlich zur Lizenzgebühr).</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">CHF 2.– pro Benutzer</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">peoplefone HOSTED QUEUES</td>
                                            <td className="px-6 py-4">Professionelles Warteschlangen-Modul mit intelligenten Routing-Logiken und individuellen Ansagen.</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Ab CHF 5.– pro Warteschlange</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">peoplefone HOSTED IVR</td>
                                            <td className="px-6 py-4">Interaktive Sprachsteuerung (z. B. "Drücken Sie 1 für Verkauf") zur effizienten Anrufverteilung.</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Ab CHF 5.– pro Ebene</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">peoplefone Text To Speech</td>
                                            <td className="px-6 py-4">Automatisierte Erstellung von professionellen Ansagetexten direkt im Web-Portal.</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Ab CHF 5.–</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">peoplefone ANALYTICS</td>
                                            <td className="px-6 py-4">Detaillierte Analyse und Reporting der Telefoniedaten.</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Kosten auf Anfrage</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section II */}
                    <section id="kostenuebersicht" className="scroll-mt-24 space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-2 border-gray-700">II. Kostenübersicht – peoplefone HOSTED Basis-Lizenzen</h2>
                        <p>Die Kosten für die Telefonanlage variieren je nach Anzahl der benötigten Benutzerlizenzen. Es fallen keine einmaligen Aufschaltkosten an. Alle Preise in CHF inkl. MwSt. pro Monat.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { users: "1 – 5 Benutzer", price: "CHF 15.–" },
                                { users: "6 – 10 Benutzer", price: "CHF 25.–" },
                                { users: "11 – 20 Benutzer", price: "CHF 35.–" },
                                { users: "21 – 30 Benutzer", price: "CHF 45.–" },
                                { users: "31 – 40 Benutzer", price: "CHF 55.–" },
                                { users: "41 – 50 Benutzer", price: "CHF 65.–" },
                            ].map((item, index) => (
                                <div key={index} className={`flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow ${isDark ? "bg-[#0F0F0F] border-white/10" : "bg-white border-gray-200"}`}>
                                    <span className={`font-medium mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{item.users}</span>
                                    <span className="text-2xl font-bold text-[#3C9646]">{item.price}</span>
                                    <span className={`text-xs mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Monatskosten (Total)</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section III */}
                    <section id="gespraechstarife" className="scroll-mt-24 space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-2 border-gray-700">III. Gesprächstarife und Flat-Pakete</h2>
                        <p>Sie haben die Wahl zwischen flexibler Minutentarif-Abrechnung oder attraktiven Flat-Paketen.</p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">1. Vorteile der Minutentarife (Schweiz & Deutschland)</h3>
                            <p>Das peoplefone-Modell zeichnet sich durch seine Kostenstruktur aus, bei der die Gesprächskosten pro Minute abgerechnet werden, jedoch keine Verbindungsaufbaugebühren (Connection Fees) anfallen.</p>

                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Land</th>
                                            <th className="px-6 py-3 font-medium">Netz</th>
                                            <th className="px-6 py-3 font-medium text-right">Tarifbeispiel (pro Minute)</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">Schweiz (CH)</td>
                                            <td className="px-6 py-4">Festnetz</td>
                                            <td className="px-6 py-4 text-right">ab CHF 0.03</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">Schweiz (CH)</td>
                                            <td className="px-6 py-4">Mobilnetz</td>
                                            <td className="px-6 py-4 text-right">ab CHF 0.25</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">Deutschland (DE)</td>
                                            <td className="px-6 py-4">Festnetz</td>
                                            <td className="px-6 py-4 text-right">ab 0,01 € (exkl. MwSt.)</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">Deutschland (DE)</td>
                                            <td className="px-6 py-4">Mobilnetz</td>
                                            <td className="px-6 py-4 text-right">ab 0,18 € (exkl. MwSt.)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-semibold">2. Flat-Pakete</h3>
                            <p>Für Vieltelefonierer sind Flat-Pakete buchbar. Die Preise pro Flatpaket gelten monatlich (CHF inkl. MwSt.). Die Pakete beziehen sich auf die gesamte Anlage – nicht auf einzelne Benutzer – und können monatlich flexibel erweitert oder reduziert werden.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className={`border rounded-lg p-6 flex flex-col ${isDark ? "bg-[#0F0F0F] border-white/10" : "bg-white border-gray-200"}`}>
                                    <h4 className="text-lg font-bold text-[#3C9646] mb-2">FLAT CH</h4>
                                    <div className="text-3xl font-bold mb-4">CHF 19.– <span className={`text-sm font-normal ${isDark ? "text-gray-500" : "text-gray-400"}`}>/ Monat</span></div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                                            <span>1000 Min. CH Festnetz</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                                            <span>200 Min. CH Mobilnetz</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className={`border rounded-lg p-6 flex flex-col ${isDark ? "bg-[#0F0F0F] border-white/10" : "bg-white border-gray-200"}`}>
                                    <h4 className="text-lg font-bold text-[#3C9646] mb-2">FLAT CH & EU</h4>
                                    <div className="text-3xl font-bold mb-4">CHF 22.– <span className={`text-sm font-normal ${isDark ? "text-gray-500" : "text-gray-400"}`}>/ Monat</span></div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                                            <span>1000 Min. CH & EU Festnetz</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                                            <span>300 Min. CH & EU Mobilnetz</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="https://www.peoplefone.com/de-ch/kunden/preise-nummern/telefontarife/tarife-voip" target="_blank" className="text-[#3C9646] hover:underline inline-flex items-center gap-1">
                                <Globe className="h-4 w-4" /> Vollständige Minutentarif-Tabelle ansehen
                            </Link>
                        </div>
                    </section>

                    {/* Section IV */}
                    <section id="rufnummern" className="scroll-mt-24 space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-2 border-gray-700">IV. Kosten der Rufnummern (Schweiz)</h2>
                        <p>Die Kosten für Rufnummern (neue Nummern oder Portierung bestehender Nummern) fallen zusätzlich zur Monatsgebühr der Telefonanlage an.</p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">1. Neue Rufnummern (Monatliche Kosten)</h3>
                            <p>Die Preise gelten pro Nummernblock (nacheinander folgende Nummern) und sind in CHF inkl. MwSt. pro Monat.</p>

                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Anzahl Nummern (Block)</th>
                                            <th className="px-6 py-3 font-medium text-right">Kosten pro Monat</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">1 Nummer</td>
                                            <td className="px-6 py-4 text-right">CHF 5.–</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">2 – 5 Nummern</td>
                                            <td className="px-6 py-4 text-right">CHF 10.–</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">6 – 10 Nummern</td>
                                            <td className="px-6 py-4 text-right">CHF 15.–</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">11 – 20 Nummern</td>
                                            <td className="px-6 py-4 text-right">CHF 30.–</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-semibold">2. Portierungskosten (Einmalige Kosten)</h3>
                            <p>Wenn Sie bestehende Rufnummern zu peoplefone mitnehmen möchten (portieren), fallen folgende einmalige Gebühren an (CHF inkl. MwSt.):</p>

                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Nummerntyp</th>
                                            <th className="px-6 py-3 font-medium text-right">Einmalige Kosten pro Auftrag</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">Einzelne analoge Nummer</td>
                                            <td className="px-6 py-4 text-right">CHF 39.–</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">ISDN/Multiline Block (2-10 Nummern)</td>
                                            <td className="px-6 py-4 text-right">CHF 69.–</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">DDI/BusinessLine Block (10-100 Nummern)</td>
                                            <td className="px-6 py-4 text-right">CHF 380.–</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <FooterSection />
        </main>
    );
}
