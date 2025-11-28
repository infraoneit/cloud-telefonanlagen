"use client";

export default function FooterSection() {
  return (
    <footer className="mt-0 bg-black px-6 py-12 text-sm text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        
        {/* Standorte & Leistungen */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">InfraOne IT Solutions GmbH</h3>
          <p className="opacity-80 leading-relaxed">
            Cloud-Telefonanlagen, IT-Netzwerke & Betrieb für KMU in der Schweiz.
            Aktiv in Winterthur, Schaffhausen, Thurgau & gesamter Deutschschweiz.
          </p>

          <ul className="mt-4 space-y-1 opacity-90">
            <li>
              <a className="text-[#3C9646] underline" target="_blank" rel="noreferrer"
                 href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Winterthur">
                Winterthur (Hauptstandort)
              </a>
            </li>
            <li>
              <a className="text-[#3C9646] underline" target="_blank" rel="noreferrer"
                 href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Schaffhausen">
                Schaffhausen
              </a>
            </li>
            <li>
              <a className="text-[#3C9646] underline" target="_blank" rel="noreferrer"
                 href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Taegerwilen">
                Tägerwilen
              </a>
            </li>
            <li>
              <a className="text-[#3C9646] underline" target="_blank" rel="noreferrer"
                 href="https://www.google.com/maps/search/?api=1&query=InfraOne+IT+Solutions+Kleinandelfingen">
                Kleinandelfingen
              </a>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">Kontakt</h3>
          <p className="opacity-90 leading-relaxed">
            Tel. 052 222 18 18<br />
            <a href="mailto:info@infraone.ch" className="text-[#3C9646] underline">
              info@infraone.ch
            </a>
          </p>

          <a
            href="https://infraone.ch/kontakt"
            className="mt-4 inline-block rounded-md bg-[#3C9646] px-4 py-2 font-medium text-black hover:bg-[#2d7e36]"
          >
            Kontaktformular öffnen
          </a>
        </div>

        {/* Weitere Websites */}
        <div>
          <h3 className="mb-3 font-semibold text-lg">Websites & Projekte</h3>
          <ul className="space-y-1">
            <li><a href="https://www.infraone.ch" className="text-[#3C9646] underline" target="_blank">infraone.ch</a></li>
            <li><a href="https://cloud-telefonanlagen.ch" className="text-[#3C9646] underline" target="_blank">cloud-telefonanlagen.ch</a></li>
            <li><a href="https://informatik-schweiz.ch" className="text-[#3C9646] underline" target="_blank">informatik-schweiz.ch</a></li>  {/* <<< neu */}
            <li><a href="https://www.informatik-support.ch" className="text-[#3C9646] underline" target="_blank">informatik-support.ch</a></li>
            <li><a href="https://www.werbebildschirme.ch" className="text-[#3C9646] underline" target="_blank">werbebildschirme.ch</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-4 text-xs opacity-70 flex flex-col md:flex-row justify-between">
        <span>© 2025 – InfraOne IT Solutions GmbH</span>
        <span>Webdesign & Realisation: InfraOne IT Solutions</span>
      </div>
    </footer>
  );
}
