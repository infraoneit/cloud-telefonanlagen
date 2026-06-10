"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, X, Phone, Server, Smartphone, Globe, Mail } from "lucide-react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

/* -------------------------------------------------------------------------- */
/*                          Daten: Modellvergleich                            */
/* -------------------------------------------------------------------------- */

type CompareValue = string | boolean;

const compareRows: { feature: string; basic: CompareValue; plus: CompareValue }[] = [
    { feature: "Maximale Benutzer", basic: "bis 10", plus: "bis 150" },
    { feature: "Verteilgruppen", basic: "unbegrenzt", plus: "unbegrenzt" },
    { feature: "IVR (Sprachmenü) – Knoten", basic: "1×", plus: "5×" },
    { feature: "Warteschleife (Queue)", basic: "1×", plus: "5×" },
    { feature: "Zeitabhängige Weiterleitung", basic: "1×", plus: "5×" },
    { feature: "Manuelle Weiterleitung", basic: "1×", plus: "5×" },
    { feature: "Softphone (PC- & Mac-App)", basic: false, plus: "10× inkl." },
    { feature: "Analytics Basic", basic: false, plus: "10× inkl." },
    { feature: "Visual Callflow", basic: false, plus: true },
    { feature: "Multi-Provisioning", basic: false, plus: true },
];

const basicTiers = [
    { users: "1 – 5 Benutzer", p24: "CHF 15.–", p12: "CHF 20.–" },
    { users: "6 – 10 Benutzer", p24: "CHF 25.–", p12: "CHF 30.–" },
];

const plusTiers = [
    { users: "1 – 5 Benutzer", p24: "CHF 25.–", p12: "CHF 30.–" },
    { users: "6 – 10 Benutzer", p24: "CHF 35.–", p12: "CHF 40.–" },
    { users: "11 – 20 Benutzer", p24: "CHF 55.–", p12: "CHF 60.–" },
    { users: "21 – 30 Benutzer", p24: "CHF 75.–", p12: "CHF 80.–" },
    { users: "ab 31 Benutzer", p24: "auf Anfrage", p12: "auf Anfrage" },
];

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

    /* ----------------------- Helper: Vergleichswert ----------------------- */

    const renderCompare = (value: CompareValue) => {
        if (value === true) {
            return <Check className="h-4 w-4 text-green-500 mx-auto" />;
        }
        if (value === false) {
            return <X className={`h-4 w-4 mx-auto ${isDark ? "text-gray-600" : "text-gray-400"}`} />;
        }
        return <span>{value}</span>;
    };

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
                            Whitepaper: peoplefone vPBX
                        </h1>
                        <p className={`text-xl font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            Die flexible Cloud-Telefonanlage für KMU – in zwei Varianten: vPBX BASIC &amp; vPBX PLUS
                        </p>
                    </div>

                    {/* Intro */}
                    <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
                        <p className="lead text-lg">
                            peoplefone vPBX ist die leistungsfähige, cloud-basierte VoIP-Telefonanlage, die speziell auf die Bedürfnisse kleiner und mittlerer Unternehmen (KMU) zugeschnitten ist. Die Lösung ersetzt herkömmliche Telefonanlagen, erfordert keine eigene Hardware oder Software und bietet höchste Flexibilität sowie volle Kostenkontrolle. Sie ist neu in zwei Varianten erhältlich: <strong>vPBX BASIC</strong> für kleine Teams mit den wichtigsten Grundfunktionen und <strong>vPBX PLUS</strong> mit vollem Funktionsumfang für anspruchsvollere Anforderungen.
                        </p>

                        <div className={`border-l-4 border-[#3C9646] p-4 my-6 rounded-r-lg ${isDark ? "bg-[#3C9646]/10" : "bg-[#3C9646]/5"}`}>
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-[#3C9646] m-0">
                                <Check className="h-5 w-5" /> Wichtiger Hinweis: Kostenlose Testphase
                            </h3>
                            <p className="mt-2 mb-0">
                                Sie können die peoplefone vPBX Anlage einen Monat lang kostenlos und unverbindlich testen. Dies beinhaltet die kostenlose Bereitstellung von Rufnummern und ein Testguthaben für Gespräche.
                            </p>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className={`border rounded-lg p-6 shadow-sm ${isDark ? "bg-[#0F0F0F] border-white/10" : "bg-gray-50 border-gray-200"}`}>
                        <h2 className="text-xl font-semibold mb-4">Inhaltsverzeichnis</h2>
                        <nav className="grid gap-2 md:grid-cols-2">
                            <Link href="#funktionsumfang" className={`transition-colors flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-[#3C9646]" : "text-gray-600 hover:text-[#3C9646]"}`}>
                                <span className="font-mono text-sm">I.</span> Funktionsumfang &amp; Modellvergleich
                            </Link>
                            <Link href="#kostenuebersicht" className={`transition-colors flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-[#3C9646]" : "text-gray-600 hover:text-[#3C9646]"}`}>
                                <span className="font-mono text-sm">II.</span> Kostenübersicht (BASIC &amp; PLUS)
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
                        <h2 className="text-2xl font-bold border-b pb-2 border-gray-700">I. Funktionsumfang &amp; Modellvergleich</h2>
                        <p>peoplefone vPBX ist modular aufgebaut. Beide Varianten beinhalten bereits alle wichtigen Standardfunktionen für den professionellen Geschäftsbetrieb. vPBX PLUS erweitert diese um zusätzliche Kapazitäten und Profi-Funktionen, die bei BASIC nicht oder nur eingeschränkt verfügbar sind.</p>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">1. Standardfunktionen (in beiden Varianten enthalten)</h3>
                            <p>Die peoplefone vPBX Basis-Lizenz ist eine vollumfängliche PBX-Lösung, die pro Lizenz bis zu fünf Endgeräte (IP-Telefone, Softphones, Apps) unterstützt.</p>

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
                            <h3 className="text-xl font-semibold">2. Direktvergleich: vPBX BASIC vs. vPBX PLUS</h3>
                            <p>Die folgende Übersicht zeigt die wichtigsten Unterschiede. Funktionen, die man früher separat dazubuchen musste (z. B. Softphone, zusätzliche IVR-Ebenen, Analytics), sind bei vPBX PLUS bereits integriert.</p>

                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Funktion</th>
                                            <th className="px-6 py-3 font-medium text-center">vPBX BASIC</th>
                                            <th className="px-6 py-3 font-medium text-center">vPBX PLUS</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        {compareRows.map((row, index) => (
                                            <tr key={row.feature} className={index % 2 === 0 ? (isDark ? "bg-[#0A0A0A]" : "bg-white") : (isDark ? "bg-white/5" : "bg-gray-50")}>
                                                <td className="px-6 py-4 font-medium">{row.feature}</td>
                                                <td className="px-6 py-4 text-center">{renderCompare(row.basic)}</td>
                                                <td className="px-6 py-4 text-center text-[#3C9646] font-medium">{renderCompare(row.plus)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-semibold">3. Optionale Erweiterungen (Module)</h3>
                            <p>Zusätzliche Funktionen können monatlich pro Modul dazugebucht werden – besonders relevant für vPBX BASIC. Bei vPBX PLUS sind Softphone, Analytics Basic sowie zusätzliche IVR- und Warteschleifen-Ebenen bereits enthalten. Alle Kosten in CHF inkl. MwSt.</p>

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
                                            <td className="px-6 py-4">PC- und Mac-App zur Nutzung des Computers als vollwertiges Softphone (bei PLUS inklusive).</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">CHF 2.– pro Benutzer</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">vPBX QUEUE (Warteschlange)</td>
                                            <td className="px-6 py-4">Professionelles Warteschlangen-Modul mit intelligenten Routing-Logiken und individuellen Ansagen.</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Ab CHF 5.– pro Warteschlange</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">vPBX IVR</td>
                                            <td className="px-6 py-4">Interaktive Sprachsteuerung (z. B. "Drücken Sie 1 für Verkauf") zur effizienten Anrufverteilung.</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Ab CHF 5.– pro Ebene</td>
                                        </tr>
                                        <tr className={isDark ? "bg-white/5" : "bg-gray-50"}>
                                            <td className="px-6 py-4 font-medium">Text To Speech</td>
                                            <td className="px-6 py-4">Automatisierte Erstellung von professionellen Ansagetexten direkt im Web-Portal.</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Ab CHF 5.–</td>
                                        </tr>
                                        <tr className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
                                            <td className="px-6 py-4 font-medium">ANALYTICS</td>
                                            <td className="px-6 py-4">Detaillierte Analyse und Reporting der Telefoniedaten (Analytics Basic bei PLUS inklusive).</td>
                                            <td className="px-6 py-4 text-right whitespace-nowrap">Kosten auf Anfrage</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section II */}
                    <section id="kostenuebersicht" className="scroll-mt-24 space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-2 border-gray-700">II. Kostenübersicht – peoplefone vPBX Basis-Lizenzen</h2>
                        <p>Die Kosten für die Telefonanlage variieren je nach Modell und Anzahl der benötigten Benutzerlizenzen. Es fallen keine einmaligen Aufschaltkosten an. Der Preis ist eine Pauschale pro Benutzerstufe (nicht pro Benutzer). Alle Preise in CHF inkl. MwSt. pro Monat, je nach gewählter Vertragslaufzeit.</p>

                        {/* BASIC */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">vPBX BASIC <span className={`text-sm font-normal ${isDark ? "text-gray-400" : "text-gray-500"}`}>– bis 10 Benutzer</span></h3>
                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Benutzer</th>
                                            <th className="px-6 py-3 font-medium text-right">Preis (24 Monate)</th>
                                            <th className="px-6 py-3 font-medium text-right">Preis (12 Monate)</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        {basicTiers.map((t, i) => (
                                            <tr key={t.users} className={i % 2 === 0 ? (isDark ? "bg-[#0A0A0A]" : "bg-white") : (isDark ? "bg-white/5" : "bg-gray-50")}>
                                                <td className="px-6 py-4 font-medium">{t.users}</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[#3C9646]">{t.p24}</td>
                                                <td className="px-6 py-4 text-right">{t.p12}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* PLUS */}
                        <div className="space-y-4 mt-8">
                            <h3 className="text-xl font-semibold">vPBX PLUS <span className={`text-sm font-normal ${isDark ? "text-gray-400" : "text-gray-500"}`}>– bis 150 Benutzer</span></h3>
                            <div className={`overflow-x-auto rounded-lg border ${isDark ? "border-white/10" : "border-gray-200"}`}>
                                <table className="w-full text-sm text-left">
                                    <thead className={`${isDark ? "bg-white/5 text-gray-300" : "bg-gray-100 text-gray-600"} uppercase`}>
                                        <tr>
                                            <th className="px-6 py-3 font-medium">Benutzer</th>
                                            <th className="px-6 py-3 font-medium text-right">Preis (24 Monate)</th>
                                            <th className="px-6 py-3 font-medium text-right">Preis (12 Monate)</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
                                        {plusTiers.map((t, i) => (
                                            <tr key={t.users} className={i % 2 === 0 ? (isDark ? "bg-[#0A0A0A]" : "bg-white") : (isDark ? "bg-white/5" : "bg-gray-50")}>
                                                <td className="px-6 py-4 font-medium">{t.users}</td>
                                                <td className="px-6 py-4 text-right font-semibold text-[#3C9646]">{t.p24}</td>
                                                <td className="px-6 py-4 text-right">{t.p12}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Für mehr als 30 Benutzer erstellen wir Ihnen ein individuelles Angebot.</p>
                        </div>
                    </section>

                    {/* Section III */}
                    <section id="gespraechstarife" className="scroll-mt-24 space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-2 border-gray-700">III. Gesprächstarife und Flat-Pakete</h2>
                        <p>Unabhängig vom gewählten Modell haben Sie die Wahl zwischen flexibler Minutentarif-Abrechnung oder attraktiven Flat-Paketen.</p>

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
