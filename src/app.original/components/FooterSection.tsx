"use client";

export default function FooterSection() {
  return (
    <footer className="mt-0 bg-black px-6 py-10 text-sm text-white">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold">
            InfraOne IT Solutions GmbH
          </h3>
          <p className="opacity-80">
            Cloud-Telefonanlagen | Netzwerk | IT-Betrieb Schweiz
          </p>
          <p className="mt-2 opacity-80">
            Winterthur (Hauptstandort) –{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Winterthur"
              className="text-[#3C9646] underline"
              target="_blank"
              rel="noreferrer"
            >
              Karte
            </a>
            <br />
            Schaffhausen –{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Schaffhausen"
              className="text-[#3C9646] underline"
              target="_blank"
              rel="noreferrer"
            >
              Karte
            </a>
            <br />
            Tägerwilen –{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Tägerwilen"
              className="text-[#3C9646] underline"
              target="_blank"
              rel="noreferrer"
            >
              Karte
            </a>
            <br />
            Kleinandelfingen –{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Kleinandelfingen"
              className="text-[#3C9646] underline"
              target="_blank"
              rel="noreferrer"
            >
              Karte
            </a>
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Kontakt</h3>
          <p className="opacity-80">
            📞 052 222 18 18
            <br />
            ✉{" "}
            <a
              href="mailto:info@infraone.ch"
              className="text-[#3C9646] underline"
            >
              info@infraone.ch
            </a>
          </p>
          <a
            href="https://infraone.ch/kontakt"
            className="mt-3 inline-block rounded-md bg-[#3C9646] px-4 py-2 font-medium text-black hover:bg-[#2d7e36]"
          >
            Kontaktformular öffnen
          </a>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Weitere Websites</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.infraone.ch"
                className="text-[#3C9646] underline"
                target="_blank"
                rel="noreferrer"
              >
                www.infraone.ch
              </a>
            </li>
            <li>
              <a
                href="https://www.informatik-support.ch"
                className="text-[#3C9646] underline"
                target="_blank"
                rel="noreferrer"
              >
                www.informatik-support.ch
              </a>
            </li>
            <li>
              <a
                href="https://www.werbebildschirme.ch"
                className="text-[#3C9646] underline"
                target="_blank"
                rel="noreferrer"
              >
                www.werbebildschirme.ch
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl flex-col justify-between gap-2 border-t border-white/20 pt-4 text-xs opacity-70 md:flex-row">
        <span>© 2025 – InfraOne IT Solutions GmbH</span>
        <span>Webdesign erstellt von InfraOne</span>
      </div>
    </footer>
  );
}
