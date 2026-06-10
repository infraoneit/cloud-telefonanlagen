"use client";

import { useMemo, useState, useEffect } from "react";

/* -------------------------------------------------------------------------- */
/*                               Typdefinitionen                               */
/* -------------------------------------------------------------------------- */

type TariffType = "minute" | "flat_ch" | "flat_cheu";
type ModelType = "basic" | "plus";
type TermType = "24" | "12";

/* -------------------------------------------------------------------------- */
/*                  vPBX Lizenzpreise (peoplefone, offiziell)                 */
/*  Pauschalpreis pro Benutzerstufe / Monat, inkl. MwSt.                      */
/*  Quelle: peoplefone.com – vPBX BASIC & vPBX PLUS                            */
/* -------------------------------------------------------------------------- */

type Tier = { max: number; price: number; label: string };

const LICENSE_TIERS: Record<ModelType, Record<TermType, Tier[]>> = {
  basic: {
    "24": [
      { max: 5, price: 15, label: "1–5 Benutzer" },
      { max: 10, price: 25, label: "6–10 Benutzer" },
    ],
    "12": [
      { max: 5, price: 20, label: "1–5 Benutzer" },
      { max: 10, price: 30, label: "6–10 Benutzer" },
    ],
  },
  plus: {
    "24": [
      { max: 5, price: 25, label: "1–5 Benutzer" },
      { max: 10, price: 35, label: "6–10 Benutzer" },
      { max: 20, price: 55, label: "11–20 Benutzer" },
      { max: 30, price: 75, label: "21–30 Benutzer" },
    ],
    "12": [
      { max: 5, price: 30, label: "1–5 Benutzer" },
      { max: 10, price: 40, label: "6–10 Benutzer" },
      { max: 20, price: 60, label: "11–20 Benutzer" },
      { max: 30, price: 80, label: "21–30 Benutzer" },
    ],
  },
};

// Maximale Benutzerzahl je Modell
const MODEL_MAX_USERS: Record<ModelType, number> = {
  basic: 10,
  plus: 150,
};

// Bis zu dieser Benutzerzahl gibt es einen Fixpreis; darüber „auf Anfrage".
const QUOTE_THRESHOLD: Record<ModelType, number> = {
  basic: 10,
  plus: 30,
};

/* -------------------------------------------------------------------------- */
/*                    Helper: Lizenzpaket inkl. Quote-Flag                    */
/* -------------------------------------------------------------------------- */

function getLicensePackage(model: ModelType, term: TermType, count: number) {
  if (count <= 0) {
    return { label: "0 Benutzer", price: 0, isQuote: false };
  }

  // Über der Fixpreis-Grenze (nur vPBX PLUS > 30) → individuelle Offerte
  if (count > QUOTE_THRESHOLD[model]) {
    return {
      label: `${count} Benutzer (über ${QUOTE_THRESHOLD[model]})`,
      price: 0,
      isQuote: true,
    };
  }

  const tiers = LICENSE_TIERS[model][term];
  const tier = tiers.find((t) => count <= t.max) ?? tiers[tiers.length - 1];

  return { label: tier.label, price: tier.price, isQuote: false };
}

/* -------------------------------------------------------------------------- */
/*                         Helper: Rufnummern-Staffelung                       */
/* -------------------------------------------------------------------------- */

function getNumberPrice(count: number): number {
  if (count <= 0) return 0;
  if (count === 1) return 5;
  if (count <= 5) return 10;
  if (count <= 10) return 15;
  if (count <= 20) return 30;
  if (count <= 30) return 45;
  if (count <= 100) return 50;
  if (count <= 200) return 100;
  if (count <= 300) return 150;
  return 150;
}

/* -------------------------------------------------------------------------- */
/*                       Helper: sicheres Integer-Parsen                       */
/* -------------------------------------------------------------------------- */

function toInt(value: string, fallback = 0) {
  const n = parseInt(value, 10);
  return Number.isNaN(n) ? fallback : n;
}

/* -------------------------------------------------------------------------- */
/*                              Komponenten-Props                              */
/* -------------------------------------------------------------------------- */

type Props = {
  isDark: boolean;
};

/* -------------------------------------------------------------------------- */
/*                      PeoplefoneCalculatorSection (Main)                    */
/* -------------------------------------------------------------------------- */

export default function PeoplefoneCalculatorSection({ isDark }: Props) {
  /* --------------------------------- State --------------------------------- */

  // Produktwahl
  const [model, setModel] = useState<ModelType>("plus");
  const [term, setTerm] = useState<TermType>("24");

  // Eingaben
  const [userInput, setUserInput] = useState("10");
  const [numbersInput, setNumbersInput] = useState("5");
  const [softphoneInput, setSoftphoneInput] = useState("10");

  // Tarifwahl
  const [tariff, setTariff] = useState<TariffType>("minute");

  // Mengen für Flatrates (werden je nach Tarif verwendet)
  const [flatCHCount, setFlatCHCount] = useState("0");
  const [flatCHEUCount, setFlatCHEUCount] = useState("0");

  // Zusatz-Optionen
  const [internet, setInternet] = useState(false);
  const [fixedIp, setFixedIp] = useState(false);

  /* ------------------------------------------------------------------------ */
  /*                               Berechnungen                               */
  /* ------------------------------------------------------------------------ */

  const {
    users,
    numbers,
    softphones,
    softphonesIncluded,
    pkgLabel,
    pkgPrice,
    isQuote,
    tariffLabel,
    tariffPrice,
    softphonePrice,
    numberPrice,
    internetPrice,
    ipPrice,
    total,
  } = useMemo(() => {
    /* ------------------------------ Roh-Eingaben ------------------------------ */

    const uRaw = toInt(userInput, 0);
    const nRaw = toInt(numbersInput, 0);
    const sRaw = toInt(softphoneInput, 0);

    /* ----------------------- Begrenzung + Grundlogik ----------------------- */

    const modelMax = MODEL_MAX_USERS[model];
    const users = Math.min(Math.max(uRaw, 0), modelMax);
    const numbers = Math.min(Math.max(nRaw, 0), 300);

    const pkg = getLicensePackage(model, term, users);

    /* ---------------------------- Softphone-Preis --------------------------- */
    /* PLUS: Softphones inklusive. BASIC: optional CHF 2.– pro Benutzer.       */

    const softphonesIncluded = model === "plus";
    const softphones = softphonesIncluded
      ? users
      : Math.min(Math.max(sRaw, 0), users);
    const softphonePrice = softphonesIncluded ? 0 : softphones * 2;

    /* -------------------------- Tarif / Flatrates --------------------------- */

    let tariffPrice = 0;
    let tariffLabel =
      "Minutentarif – Abrechnung pro Minute gemäss Tarifliste";

    if (users > 0) {
      if (tariff === "flat_ch") {
        const flatCH = Math.min(
          Math.max(toInt(flatCHCount, 0), 1),
          users
        );

        tariffPrice = flatCH * 19;
        tariffLabel =
          `FLAT CH – ${flatCH} × CHF 19.– ` +
          `(1000 Min Festnetz / 200 Min Mobil CH)`;
      } else if (tariff === "flat_cheu") {
        const flatCHEU = Math.min(
          Math.max(toInt(flatCHEUCount, 0), 1),
          users
        );

        tariffPrice = flatCHEU * 22;
        tariffLabel =
          `FLAT CH & EU – ${flatCHEU} × CHF 22.– ` +
          `(1000 Min Festnetz / 300 Min Mobil CH & EU)`;
      }
    } else {
      // keine Benutzer → Flats sind faktisch inaktiv
      tariffPrice = 0;
      tariffLabel =
        "Minutentarif – Abrechnung pro Minute gemäss Tarifliste (keine Benutzer ausgewählt)";
    }

    /* --------------------------- Rufnummern-Preis --------------------------- */

    const numberPrice = getNumberPrice(numbers);

    /* ---------------------------- Zusatzoptionen ---------------------------- */

    const internetPrice = internet ? 49 : 0;
    const ipPrice = fixedIp ? 10 : 0;

    /* ----------------------------- Gesamt-Preis ----------------------------- */
    /* Bei „auf Anfrage" (PLUS > 30) ist kein Fixpreis berechenbar → null.     */

    const isQuote = pkg.isQuote;

    const total = isQuote
      ? null
      : users > 0 || numbers > 0
        ? pkg.price +
        tariffPrice +
        softphonePrice +
        numberPrice +
        internetPrice +
        ipPrice
        : 0;

    /* ------------------------------ Rückgabe-Werte ------------------------------ */

    return {
      users,
      numbers,
      softphones,
      softphonesIncluded,
      pkgLabel: pkg.label,
      pkgPrice: pkg.price,
      isQuote,
      tariffLabel,
      tariffPrice,
      softphonePrice,
      numberPrice,
      internetPrice,
      ipPrice,
      total,
    };
  }, [
    userInput,
    numbersInput,
    softphoneInput,
    model,
    term,
    tariff,
    flatCHCount,
    flatCHEUCount,
    internet,
    fixedIp,
  ]);

  /* ------------------------------------------------------------------------ */
  /*                    Ableitungen (z.B. hat es Benutzer?)                   */
  /* ------------------------------------------------------------------------ */

  const hasUsers = toInt(userInput, 0) > 0;
  const overBasicLimit =
    model === "basic" && toInt(userInput, 0) > MODEL_MAX_USERS.basic;

  // Einstiegspreis je Modell für die Modell-Karten
  const basicFrom = LICENSE_TIERS.basic[term][0].price;
  const plusFrom = LICENSE_TIERS.plus[term][0].price;

  /* ------------------------------------------------------------------------ */
  /*                           Effekte / Korrekturen                          */
  /* ------------------------------------------------------------------------ */

  // Wenn keine Benutzer → Softphones auf 0 zurück
  useEffect(() => {
    if (!hasUsers && softphoneInput !== "0") {
      setSoftphoneInput("0");
    }
  }, [hasUsers, softphoneInput]);

  // Wenn keine Benutzer → Flatrates auf 0, ansonsten min. 1 wenn Tarif aktiv
  useEffect(() => {
    if (!hasUsers) {
      if (flatCHCount !== "0") {
        setFlatCHCount("0");
      }
      if (flatCHEUCount !== "0") {
        setFlatCHEUCount("0");
      }
      return;
    }

    // Benutzer vorhanden: aktive Flatrate muss mind. 1 haben
    if (tariff === "flat_ch" && toInt(flatCHCount, 0) < 1) {
      setFlatCHCount("1");
    }

    if (tariff === "flat_cheu" && toInt(flatCHEUCount, 0) < 1) {
      setFlatCHEUCount("1");
    }
  }, [hasUsers, tariff, flatCHCount, flatCHEUCount]);

  /* ------------------------------------------------------------------------ */
  /*                              Handler / Wechsel                           */
  /* ------------------------------------------------------------------------ */

  // Modellwechsel: Benutzer auf Modell-Maximum begrenzen (BASIC max. 10)
  function handleModelChange(next: ModelType) {
    setModel(next);

    const max = MODEL_MAX_USERS[next];
    if (toInt(userInput, 0) > max) {
      setUserInput(String(max));
    }
  }

  // Tarifwechsel: nicht gewählte Flat-Mengen zurücksetzen
  function handleTariffChange(next: TariffType) {
    setTariff(next);

    if (next !== "flat_ch" && flatCHCount !== "0") {
      setFlatCHCount("0");
    }

    if (next !== "flat_cheu" && flatCHEUCount !== "0") {
      setFlatCHEUCount("0");
    }
  }

  /* ------------------------------------------------------------------------ */
  /*                         Mail-Body für Offertlink                         */
  /* ------------------------------------------------------------------------ */

  const modelLabel = model === "plus" ? "vPBX PLUS" : "vPBX BASIC";
  const termLabel = term === "24" ? "24 Monate" : "12 Monate";

  const mailBody = encodeURIComponent(
    [
      `Anfrage Cloud-Telefonanlage – peoplefone ${modelLabel}`,
      `Vertragslaufzeit: ${termLabel}`,
      "",
      isQuote
        ? `Benutzer: ${users} – über 30 Benutzer, bitte individuelle Offerte`
        : `Lizenzpaket ${modelLabel}: ${pkgLabel} (${users}) – CHF ${pkgPrice}.–/Monat`,
      `Tarifmodell: ${tariffLabel} – CHF ${tariffPrice}.–/Monat`,
      `Rufnummern (DIDs): ${numbers} – CHF ${numberPrice}.–/Monat`,
      softphonesIncluded
        ? `Softphone-Lizenzen: inklusive (vPBX PLUS)`
        : `Softphone-Lizenzen: ${softphones} – CHF ${softphonePrice}.–/Monat`,
      `Internet 1 Gbit/s: ${internet ? "Ja (+49.–/Monat)" : "Nein"}`,
      `Fixe IP-Adresse: ${fixedIp ? "Ja (+10.–/Monat)" : "Nein"}`,
      "",
      "-----------------------------------------",
      isQuote
        ? `Monatlicher Fixpreis: auf Anfrage (über 30 Benutzer)`
        : `Monatlicher Fixpreis: CHF ${total}.–`,
      "-----------------------------------------",
      "",
      "Preise inkl. MwSt. Einmalige Installation / Aufschaltung / Portierung wird separat offeriert.",
    ].join("\n")
  );

  /* ------------------------------------------------------------------------ */
  /*                           Style-Hilfsvariablen                           */
  /* ------------------------------------------------------------------------ */

  const panelOuter =
    "rounded-2xl p-6 sm:p-8 text-[15px] leading-relaxed border";

  const panelTheme = isDark
    ? "bg-white/5 border-white/10"
    : "bg-white border-black/10";

  const inputTheme = isDark
    ? "bg-black/40 border-white/20 text-white"
    : "bg-[#F8F8F8] border-black/20 text-black";

  const labelMuted = isDark ? "text-white/80" : "text-black/80";

  const smallMuted = isDark ? "text-white/60" : "text-black/60";

  const hrClass = isDark ? "border-white/20" : "border-black/10";

  // Segmentierte Schalter (Laufzeit)
  const segInactive = isDark
    ? "bg-black/30 text-white/80 border-white/15 hover:bg-white/10"
    : "bg-[#F8F8F8] text-black/70 border-black/15 hover:bg-black/5";
  const segActive = "bg-[#3C9646] text-black border-[#3C9646]";

  // Modell-Karten
  const modelCardBase =
    "flex-1 rounded-xl border p-4 text-left transition-colors cursor-pointer";
  const modelCardInactive = isDark
    ? "bg-black/30 border-white/15 hover:bg-white/5"
    : "bg-[#F8F8F8] border-black/15 hover:bg-black/5";
  const modelCardActive = isDark
    ? "bg-[#3C9646]/15 border-[#3C9646]"
    : "bg-[#3C9646]/10 border-[#3C9646]";

  /* ------------------------------------------------------------------------ */
  /*                                   JSX                                    */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      id="rechner"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10"
      aria-labelledby="peoplefone-rechner"
    >
      {/* ------------------------------------------------------------------ */}
      {/*                            Überschrift                            */}
      {/* ------------------------------------------------------------------ */}

      <h2
        id="peoplefone-rechner"
        className="text-3xl font-bold md:text-4xl text-left"
      >
        Berechnen Sie jetzt Ihre Cloud-Telefonanlage
      </h2>

      <p className={`mt-3 max-w-3xl text-sm md:text-base ${smallMuted}`}>
        Wählen Sie Modell (vPBX BASIC oder PLUS) und Laufzeit – der monatliche
        Fixpreis aktualisiert sich automatisch. Alle Preise inkl. MwSt.
      </p>

      {/* ------------------------------------------------------------------ */}
      {/*                             Eingabepanel                           */}
      {/* ------------------------------------------------------------------ */}

      <div
        className={`${panelOuter} ${panelTheme} mt-10 space-y-8`}
      >
        {/* --------------------------- Modellwahl --------------------------- */}

        <div>
          <p className={`mb-2 font-medium ${labelMuted}`}>Modell</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* vPBX BASIC */}
            <button
              type="button"
              onClick={() => handleModelChange("basic")}
              aria-pressed={model === "basic"}
              className={`${modelCardBase} ${model === "basic" ? modelCardActive : modelCardInactive
                }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold">vPBX BASIC</span>
                <span className="text-sm font-semibold text-[#3C9646]">
                  ab CHF {basicFrom}.–
                </span>
              </div>
              <p className={`mt-1 text-xs ${smallMuted}`}>
                Bis 10 Benutzer · Grundfunktionen (1× IVR, 1× Warteschleife).
                Softphone optional.
              </p>
            </button>

            {/* vPBX PLUS */}
            <button
              type="button"
              onClick={() => handleModelChange("plus")}
              aria-pressed={model === "plus"}
              className={`${modelCardBase} ${model === "plus" ? modelCardActive : modelCardInactive
                }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold">vPBX PLUS</span>
                <span className="text-sm font-semibold text-[#3C9646]">
                  ab CHF {plusFrom}.–
                </span>
              </div>
              <p className={`mt-1 text-xs ${smallMuted}`}>
                Bis 150 Benutzer · Voller Funktionsumfang inkl. Softphone,
                Analytics, 5× IVR/Warteschleife, Visual Callflow.
              </p>
            </button>
          </div>
        </div>

        {/* --------------------------- Laufzeit ----------------------------- */}

        <div>
          <p className={`mb-2 font-medium ${labelMuted}`}>Vertragslaufzeit</p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTerm("24")}
              aria-pressed={term === "24"}
              className={`flex-1 rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${term === "24" ? segActive : segInactive
                }`}
            >
              24 Monate
            </button>

            <button
              type="button"
              onClick={() => setTerm("12")}
              aria-pressed={term === "12"}
              className={`flex-1 rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${term === "12" ? segActive : segInactive
                }`}
            >
              12 Monate
            </button>
          </div>
        </div>

        {/* ------------------------- Benutzeranzahl ------------------------- */}

        <div>
          <label
            className={`mb-1 block font-medium ${labelMuted}`}
          >
            Anzahl Benutzer (mit eigener Durchwahl) –{" "}
            {model === "basic" ? "max. 10 (vPBX BASIC)" : "bis 150 (vPBX PLUS)"}
          </label>

          <input
            type="number"
            min={0}
            max={MODEL_MAX_USERS[model]}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className={
              "w-full rounded px-3 py-3 text-[15px] outline-none " +
              inputTheme
            }
          />

          {isQuote ? (
            <p className="mt-1 text-xs font-medium text-[#3C9646]">
              Über 30 Benutzer: individuelle Offerte – siehe Preisübersicht.
            </p>
          ) : (
            <p className={`mt-1 text-xs ${smallMuted}`}>
              Paket: {pkgLabel} – pauschal CHF {pkgPrice}.– pro Monat ({termLabel})
            </p>
          )}

          {overBasicLimit && (
            <p className="mt-1 text-xs font-medium text-[#3C9646]">
              vPBX BASIC unterstützt max. 10 Benutzer – für mehr bitte vPBX PLUS
              wählen.
            </p>
          )}
        </div>

        {/* --------------------------- Rufnummern --------------------------- */}

        <div>
          <label
            className={`mb-1 block font-medium ${labelMuted}`}
          >
            Anzahl Rufnummern (DIDs / Hauptnummern, min. 1)
          </label>

          <input
            type="number"
            min={0}
            max={300}
            value={numbersInput}
            onChange={(e) => setNumbersInput(e.target.value)}
            className={
              "w-full rounded px-3 py-3 text-[15px] outline-none " +
              inputTheme
            }
          />
        </div>

        {/* ------------------------- Softphone-Lizenzen ------------------------ */}

        {model === "plus" ? (
          <div
            className={`rounded-lg border p-4 text-sm ${isDark
              ? "border-[#3C9646]/40 bg-[#3C9646]/10"
              : "border-[#3C9646]/40 bg-[#3C9646]/5"
              }`}
          >
            <p className="font-medium text-[#3C9646]">
              Softphones inklusive
            </p>
            <p className={`mt-1 text-xs ${smallMuted}`}>
              Bei vPBX PLUS sind Softphone-Lizenzen (PC- &amp; Mac-App) sowie
              Analytics Basic bereits im Paket enthalten – keine Zusatzkosten.
            </p>
          </div>
        ) : (
          <div>
            <label
              className={`mb-1 block font-medium ${labelMuted}`}
            >
              Softphone-Lizenzen (PC-App)
            </label>

            <input
              type="number"
              min={0}
              max={users || 0}
              value={softphoneInput}
              onChange={(e) => setSoftphoneInput(e.target.value)}
              disabled={!hasUsers}
              className={
                "w-full rounded px-3 py-3 text-[15px] outline-none " +
                inputTheme +
                (!hasUsers ? " opacity-50 cursor-not-allowed" : "")
              }
            />

            <p className={`mt-1 text-xs ${smallMuted}`}>
              CHF 2.– pro Benutzer mit Softphone. Bei vPBX PLUS bereits
              inklusive. Ideal für Home-Office und Laptop-Arbeitsplätze.
            </p>
          </div>
        )}

        {/* ---------------------------- Tarifmodell ---------------------------- */}

        <div>
          <p
            className={`mb-2 font-medium ${labelMuted}`}
          >
            Tarifmodell
          </p>

          {/* Minutentarif ---------------------------------------------------- */}

          <label
            className={`flex items-start gap-2 py-[2px] ${labelMuted}`}
          >
            <input
              type="radio"
              checked={tariff === "minute"}
              onChange={() => handleTariffChange("minute")}
              className="mt-1"
            />

            <span>
              Minutentarif ohne Flat (Abrechnung gemäss offizieller
              Tarifliste)
            </span>
          </label>

          {/* Flatrate CH ----------------------------------------------------- */}

          <label
            className={
              "flex flex-wrap items-start gap-2 py-[4px] " +
              labelMuted
            }
          >
            <div className="flex items-start gap-2 w-full sm:w-auto">
              <input
                type="radio"
                checked={tariff === "flat_ch"}
                onChange={() => handleTariffChange("flat_ch")}
                className="mt-1"
              />

              <span className="flex-1 sm:flex-none">
                FLAT CH – 1000 Min Festnetz / 200 Min Mobil Schweiz
                – CHF 19.– / Paket
              </span>
            </div>

            {tariff === "flat_ch" && (
              <div className="flex items-center gap-2 pl-6 sm:pl-0">
                <span className="text-xs uppercase tracking-wide opacity-70">
                  Anzahl Flatrates
                </span>

                <input
                  type="number"
                  min={1}
                  max={users || 0}
                  value={flatCHCount}
                  onChange={(e) => setFlatCHCount(e.target.value)}
                  className={
                    "w-20 rounded px-2 py-1 text-[14px] outline-none " +
                    inputTheme
                  }
                  placeholder="Menge"
                />
              </div>
            )}
          </label>

          {/* Flatrate CH & EU ------------------------------------------------ */}

          <label
            className={
              "flex flex-wrap items-start gap-2 py-[4px] " +
              labelMuted
            }
          >
            <div className="flex items-start gap-2 w-full sm:w-auto">
              <input
                type="radio"
                checked={tariff === "flat_cheu"}
                onChange={() => handleTariffChange("flat_cheu")}
                className="mt-1"
              />

              <span className="flex-1 sm:flex-none">
                FLAT CH &amp; EU – 1000 Min Festnetz / 300 Min Mobil CH &amp; EU
                – CHF 22.– / Paket
              </span>
            </div>

            {tariff === "flat_cheu" && (
              <div className="flex items-center gap-2 pl-6 sm:pl-0">
                <span className="text-xs uppercase tracking-wide opacity-70">
                  Anzahl Flatrates
                </span>

                <input
                  type="number"
                  min={1}
                  max={users || 0}
                  value={flatCHEUCount}
                  onChange={(e) => setFlatCHEUCount(e.target.value)}
                  className={
                    "w-20 rounded px-2 py-1 text-[14px] outline-none " +
                    inputTheme
                  }
                  placeholder="Menge"
                />
              </div>
            )}
          </label>
        </div>

        {/* ------------------------- Internet & Netzwerk ------------------------ */}

        <div>
          <p
            className={`mb-2 font-medium ${labelMuted}`}
          >
            Internet &amp; Netzwerk
          </p>

          <label
            className={`flex items-start gap-2 py-[2px] ${labelMuted}`}
          >
            <input
              type="checkbox"
              checked={internet}
              onChange={() => setInternet(!internet)}
              className="mt-1"
            />

            <span>
              Internet 1 Gbit/s von InfraOne – CHF 49.– / Monat
            </span>
          </label>

          <label
            className={`flex items-start gap-2 py-[2px] ${labelMuted}`}
          >
            <input
              type="checkbox"
              checked={fixedIp}
              onChange={() => setFixedIp(!fixedIp)}
              className="mt-1"
            />

            <span>
              Fixe IP-Adresse – CHF 10.– / Monat
            </span>
          </label>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                         Preisübersicht-Panel                       */}
      {/* ------------------------------------------------------------------ */}

      <div className={`${panelOuter} ${panelTheme} mt-10`}>
        <h3 className="mb-1 text-center text-xl font-semibold">
          Monatlicher Fixpreis für Ihre Telefonie
        </h3>

        <p className={`mb-6 text-center text-sm font-medium ${smallMuted}`}>
          peoplefone {modelLabel} · {termLabel}
        </p>

        <div className="space-y-3 text-sm md:text-[15px]">
          {/* Lizenzpaket ---------------------------------------------------- */}

          <div className="flex justify-between items-start gap-4">
            <span className="flex-1">
              Lizenzpaket ({pkgLabel})
            </span>

            <span className="font-medium whitespace-nowrap text-right">
              {isQuote ? "auf Anfrage" : `CHF ${pkgPrice}.–`}
            </span>
          </div>

          {/* Tarifmodell ---------------------------------------------------- */}

          <div className="flex justify-between items-start gap-4">
            <span className="flex-1">
              Tarifmodell
            </span>

            <span className="font-medium text-right">
              {tariff === "minute"
                ? "gemäss Minutentarif"
                : `CHF ${tariffPrice}.–`}
            </span>
          </div>

          {/* Rufnummern ----------------------------------------------------- */}

          <div className="flex justify-between items-start gap-4">
            <span className="flex-1">
              Rufnummern-Paket ({numbers} Nummern)
            </span>

            <span className="font-medium whitespace-nowrap">
              CHF {numberPrice}.–
            </span>
          </div>

          {/* Softphone-Lizenzen -------------------------------------------- */}

          <div className="flex justify-between items-start gap-4">
            <span className="flex-1">
              Softphone-Lizenzen{" "}
              {softphonesIncluded ? "" : `(${softphones} × CHF 2.–)`}
            </span>

            <span className="font-medium whitespace-nowrap text-right">
              {softphonesIncluded ? "inklusive" : `CHF ${softphonePrice}.–`}
            </span>
          </div>

          {/* Internet ------------------------------------------------------- */}

          <div className="flex justify-between items-start gap-4">
            <span className="flex-1">
              Internet 1 Gbit/s
            </span>

            <span className="font-medium whitespace-nowrap">
              {internetPrice ? `CHF ${internetPrice}.–` : "–"}
            </span>
          </div>

          {/* Fixe IP -------------------------------------------------------- */}

          <div className="flex justify-between items-start gap-4">
            <span className="flex-1">
              Fixe IP-Adresse
            </span>

            <span className="font-medium whitespace-nowrap">
              {ipPrice ? `CHF ${ipPrice}.–` : "–"}
            </span>
          </div>
        </div>

        <hr className={`my-4 ${hrClass}`} />

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <span className="text-sm font-medium">
            Monatlicher Fixpreis
          </span>

          {isQuote ? (
            <span className="text-2xl font-bold md:text-3xl text-right text-[#3C9646]">
              Auf Anfrage
            </span>
          ) : (
            <span className="text-3xl font-bold md:text-4xl text-right">
              CHF {total}.–
            </span>
          )}
        </div>

        {isQuote && (
          <p className={`mt-3 text-xs ${smallMuted}`}>
            Für vPBX PLUS mit über 30 Benutzern erstellt peoplefone /
            InfraOne ein individuelles Angebot. Fordern Sie unten Ihre
            persönliche Offerte an.
          </p>
        )}

        <p className={`mt-4 text-[11px] ${smallMuted}`}>
          Alle Preise inkl. MwSt., Lizenzpreis als Pauschale pro Benutzerstufe
          (nicht pro Benutzer) bei {termLabel} Laufzeit. Zzgl. einmaliger
          Installation, Aufschaltung und allfälliger Portierungskosten.
          Spezialnummern (z.B. 0800, 058) werden separat offeriert.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                           Call-To-Action                           */}
      {/* ------------------------------------------------------------------ */}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:info@infraone.ch?subject=Cloud-Telefonanlage%20Offerte%20(${modelLabel})&body=${mailBody}`}
          className="flex-1 rounded-md bg-[#3C9646] py-3 text-center text-sm font-semibold text-black hover:bg-[#2d7e36]"
        >
          {isQuote
            ? "Individuelle Offerte anfordern"
            : "Offerte mit diesen Angaben erhalten"}
        </a>

        <a
          href="https://infraone.ch/kontakt"
          target="_blank"
          className="flex-1 rounded-md border border-[#3C9646] py-3 text-center text-sm font-semibold hover:bg-[#3C9646]/10"
        >
          Persönliche Beratung anfordern
        </a>
      </div>
    </section >
  );
}
