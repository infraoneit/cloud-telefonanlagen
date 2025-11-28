"use client";

import { useMemo, useState, useEffect } from "react";

/* -------------------------------------------------------------------------- */
/*                               Typdefinitionen                               */
/* -------------------------------------------------------------------------- */

type TariffType = "minute" | "flat_ch" | "flat_cheu";

/* -------------------------------------------------------------------------- */
/*                         Helper: Benutzerpaket-Preis                         */
/* -------------------------------------------------------------------------- */

function getUserPackage(count: number) {
  if (count <= 0) {
    return { label: "0 Benutzer", price: 0 };
  }

  if (count <= 5) {
    return { label: "1–5 Benutzer", price: 15 };
  }

  if (count <= 10) {
    return { label: "6–10 Benutzer", price: 25 };
  }

  if (count <= 20) {
    return { label: "11–20 Benutzer", price: 35 };
  }

  if (count <= 30) {
    return { label: "21–30 Benutzer", price: 45 };
  }

  if (count <= 40) {
    return { label: "31–40 Benutzer", price: 55 };
  }

  return { label: "41–50 Benutzer", price: 65 };
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
    pkgLabel,
    pkgPrice,
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

    const users = Math.min(Math.max(uRaw, 0), 50);
    const numbers = Math.min(Math.max(nRaw, 0), 300);
    const softphones = Math.min(Math.max(sRaw, 0), users);

    const pkg = getUserPackage(users);

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
          `Flatrate Schweiz – ${flatCH} × CHF 19.– ` +
          `(1000 Min Festnetz / 200 Min Mobil Schweiz)`;
      } else if (tariff === "flat_cheu") {
        const flatCHEU = Math.min(
          Math.max(toInt(flatCHEUCount, 0), 1),
          users
        );

        tariffPrice = flatCHEU * 22;
        tariffLabel =
          `Flatrate Schweiz+EU – ${flatCHEU} × CHF 22.– ` +
          `(1000 Min Festnetz CH+EU / 300 Min Mobil CH+EU)`;
      }
    } else {
      // keine Benutzer → Flats sind faktisch inaktiv
      tariffPrice = 0;
      tariffLabel =
        "Minutentarif – Abrechnung pro Minute gemäss Tarifliste (keine Benutzer ausgewählt)";
    }

    /* ---------------------------- Softphone-Preis --------------------------- */

    const softphonePrice = softphones * 2;

    /* --------------------------- Rufnummern-Preis --------------------------- */

    const numberPrice = getNumberPrice(numbers);

    /* ---------------------------- Zusatzoptionen ---------------------------- */

    const internetPrice = internet ? 49 : 0;
    const ipPrice = fixedIp ? 10 : 0;

    /* ----------------------------- Gesamt-Preis ----------------------------- */

    const total =
      users > 0 || numbers > 0
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
      pkgLabel: pkg.label,
      pkgPrice: pkg.price,
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

  const mailBody = encodeURIComponent(
    [
      "Anfrage Cloud-Telefonanlage – Peoplefone Hosted",
      "",
      `Benutzerpaket: ${pkgLabel} (${users}) – CHF ${pkgPrice}.–/Monat`,
      `Tarifmodell: ${tariffLabel} – CHF ${tariffPrice}.–/Monat`,
      `Rufnummern (DIDs): ${numbers} – CHF ${numberPrice}.–/Monat`,
      `Softphone-Lizenzen: ${softphones} – CHF ${softphonePrice}.–/Monat`,
      `Internet 1 Gbit/s: ${internet ? "Ja (+49.–/Monat)" : "Nein"}`,
      `Fixe IP-Adresse: ${fixedIp ? "Ja (+10.–/Monat)" : "Nein"}`,
      "",
      "-----------------------------------------",
      `Monatlicher Fixpreis: CHF ${total}.–`,
      "-----------------------------------------",
      "",
      "Einmalige Installation / Aufschaltung / Portierung wird separat offeriert.",
    ].join("\n")
  );

  /* ------------------------------------------------------------------------ */
  /*                           Style-Hilfsvariablen                           */
  /* ------------------------------------------------------------------------ */

  const panelOuter =
    "rounded-2xl p-8 text-[15px] leading-relaxed border";

  const panelTheme = isDark
    ? "bg-white/5 border-white/10"
    : "bg-white border-black/10";

  const inputTheme = isDark
    ? "bg-black/40 border-white/20 text-white"
    : "bg-[#F8F8F8] border-black/20 text-black";

  const labelMuted = isDark ? "text-white/80" : "text-black/80";

  const smallMuted = isDark ? "text-white/60" : "text-black/60";

  const hrClass = isDark ? "border-white/20" : "border-black/10";

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

      {/* ------------------------------------------------------------------ */}
      {/*                             Eingabepanel                           */}
      {/* ------------------------------------------------------------------ */}

      <div
        className={`${panelOuter} ${panelTheme} mt-10 space-y-8`}
      >
        {/* ------------------------- Benutzeranzahl ------------------------- */}

        <div>
          <label
            className={`mb-1 block font-medium ${labelMuted}`}
          >
            Anzahl Benutzer (mit eigener Durchwahl, min. 5)
          </label>

          <input
            type="number"
            min={0}
            max={50}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className={
              "w-full rounded px-3 py-3 text-[15px] outline-none " +
              inputTheme
            }
          />

          <p className={`mt-1 text-xs ${smallMuted}`}>
            Paket: {pkgLabel} – pauschal CHF {pkgPrice}.– pro Monat
          </p>
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
            CHF 2.– pro Benutzer mit Softphone. Ideal für Home-Office
            und Laptop-Arbeitsplätze.
          </p>
        </div>

        {/* ---------------------------- Tarifmodell ---------------------------- */}

        <div>
          <p
            className={`mb-2 font-medium ${labelMuted}`}
          >
            Tarifmodell
          </p>

          {/* Minutentarif ---------------------------------------------------- */}

          <label
            className={`flex items-center gap-2 py-[2px] ${labelMuted}`}
          >
            <input
              type="radio"
              checked={tariff === "minute"}
              onChange={() => handleTariffChange("minute")}
            />

            <span>
              Minutentarif ohne Flat (Abrechnung gemäss offizieller
              Tarifliste)
            </span>
          </label>

          {/* Flatrate CH ----------------------------------------------------- */}

          <label
            className={
              "flex flex-wrap items-center gap-2 py-[4px] " +
              labelMuted
            }
          >
            <input
              type="radio"
              checked={tariff === "flat_ch"}
              onChange={() => handleTariffChange("flat_ch")}
            />

            <span>
              Flatrate CH – 1000 Min Festnetz / 200 Min Mobil Schweiz
              – CHF 19.– / Benutzer
            </span>

            {tariff === "flat_ch" && (
              <div className="flex items-center gap-2">
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

          {/* Flatrate CH+EU -------------------------------------------------- */}

          <label
            className={
              "flex flex-wrap items-center gap-2 py-[4px] " +
              labelMuted
            }
          >
            <input
              type="radio"
              checked={tariff === "flat_cheu"}
              onChange={() => handleTariffChange("flat_cheu")}
            />

            <span>
              Flatrate CH+EU – 1000 Min Festnetz CH+EU / 300 Min Mobil
              CH+EU – CHF 22.– / Benutzer
            </span>

            {tariff === "flat_cheu" && (
              <div className="flex items-center gap-2">
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
            Internet & Netzwerk
          </p>

          <label
            className={`flex items-center gap-2 py-[2px] ${labelMuted}`}
          >
            <input
              type="checkbox"
              checked={internet}
              onChange={() => setInternet(!internet)}
            />

            <span>
              Internet 1 Gbit/s von InfraOne – CHF 49.– / Monat
            </span>
          </label>

          <label
            className={`flex items-center gap-2 py-[2px] ${labelMuted}`}
          >
            <input
              type="checkbox"
              checked={fixedIp}
              onChange={() => setFixedIp(!fixedIp)}
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
        <h3 className="mb-4 text-center text-xl font-semibold">
          Monatlicher Fixpreis für Ihre Telefonie
        </h3>

        <div className="space-y-2 text-sm md:text-[15px]">
          {/* Benutzerpaket -------------------------------------------------- */}

          <div className="flex justify-between gap-4">
            <span>
              Benutzerpaket ({pkgLabel})
            </span>

            <span>
              CHF {pkgPrice}.–
            </span>
          </div>

          {/* Tarifmodell ---------------------------------------------------- */}

          <div className="flex justify-between gap-4">
            <span>
              Tarifmodell
            </span>

            <span>
              {tariff === "minute"
                ? "gemäss Minutentarif"
                : `CHF ${tariffPrice}.–`}
            </span>
          </div>

          {/* Rufnummern ----------------------------------------------------- */}

          <div className="flex justify-between gap-4">
            <span>
              Rufnummern-Paket ({numbers} Nummern)
            </span>

            <span>
              CHF {numberPrice}.–
            </span>
          </div>

          {/* Softphone-Lizenzen -------------------------------------------- */}

          <div className="flex justify-between gap-4">
            <span>
              Softphone-Lizenzen ({softphones} × CHF 2.–)
            </span>

            <span>
              CHF {softphonePrice}.–
            </span>
          </div>

          {/* Internet ------------------------------------------------------- */}

          <div className="flex justify-between gap-4">
            <span>
              Internet 1 Gbit/s
            </span>

            <span>
              {internetPrice ? `CHF ${internetPrice}.–` : "–"}
            </span>
          </div>

          {/* Fixe IP -------------------------------------------------------- */}

          <div className="flex justify-between gap-4">
            <span>
              Fixe IP-Adresse
            </span>

            <span>
              {ipPrice ? `CHF ${ipPrice}.–` : "–"}
            </span>
          </div>
        </div>

        <hr className={`my-4 ${hrClass}`} />

        <div className="flex items-baseline justify-between">
          <span className="text-sm font-medium">
            Monatlicher Fixpreis (ohne Gesprächsgebühren)
          </span>

          <span className="text-3xl font-bold md:text-4xl">
            CHF {total}.–
          </span>
        </div>

        <p className={`mt-2 text-[11px] ${smallMuted}`}>
          Zzgl. einmaliger Installation, Aufschaltung und allfälliger
          Portierungskosten. Spezialnummern (z.B. 0800, 058) werden
          separat offeriert.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/*                           Call-To-Action                           */}
      {/* ------------------------------------------------------------------ */}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:info@infraone.ch?subject=Cloud-Telefonanlage%20Offerte&body=${mailBody}`}
          className="flex-1 rounded-md bg-[#3C9646] py-3 text-center text-sm font-semibold text-black hover:bg-[#2d7e36]"
        >
          Offerte mit diesen Angaben erhalten
        </a>

        <a
          href="https://infraone.ch/kontakt"
          className="flex-1 rounded-md border border-[#3C9646] py-3 text-center text-sm font-semibold hover:bg-[#3C9646]/10"
        >
          Persönliche Beratung anfordern
        </a>
      </div>
    </section>
  );
}
