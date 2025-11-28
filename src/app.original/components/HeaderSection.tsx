"use client";

import Image from "next/image";
import Link from "next/link";
import { SunMedium, MoonStar } from "lucide-react";

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function HeaderSection({ theme, onToggleTheme }: HeaderProps) {
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-40 bg-black/95 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo + Domain */}
        <Link href="#start" className="flex items-center gap-3">
          <Image
            src="/infraone-logo-weiss.svg"
            alt="InfraOne IT Solutions"
            width={130}
            height={32}
            priority
          />
          <span className="hidden text-sm font-semibold tracking-wide text-white/80 sm:inline">
            cloud-telefonanlagen.ch
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#leistungen" className="hidden text-white/80 hover:text-white sm:inline">
            Leistungen
          </a>
          <a href="#ueber-uns" className="hidden text-white/80 hover:text-white sm:inline">
            Über uns
          </a>
          <a href="#faq" className="hidden text-white/80 hover:text-white sm:inline">
            FAQ
          </a>

          <a
            href="https://infraone.ch/kontakt"
            className="inline-flex items-center rounded-md bg-[#3C9646] px-4 py-2 text-sm font-semibold text-black hover:bg-[#2d7e36]"
          >
            Kontakt
          </a>

          {/* Dark / Light Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Darstellung umschalten"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#3C9646] transition hover:border-[#5ad35f] hover:bg-[#3C9646]/10"
          >
            {isDark ? (
              <SunMedium className="h-4 w-4 text-white" />
            ) : (
              <MoonStar className="h-4 w-4 text-white" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
