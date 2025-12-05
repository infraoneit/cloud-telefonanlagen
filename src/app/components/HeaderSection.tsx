"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SunMedium, MoonStar, Menu, X } from "lucide-react";

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function HeaderSection({ theme, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 bg-black/95 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo + Domain */}
        <Link href="/#start" className="flex items-center gap-3">
          <Image
            src="/infraone-logo-weiss.svg"
            alt="InfraOne IT Solutions"
            width={130}
            height={32}
            priority
          />
          <span className="hidden text-sm font-semibold tracking-wide text-white/80 sm:inline">

          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#rechner" className="text-white/80 hover:text-white">
            Preise
          </Link>
          <Link href="/#ueber-uns" className="text-white/80 hover:text-white">
            Über uns
          </Link>
          <Link href="/#faq" className="text-white/80 hover:text-white">
            FAQ
          </Link>
          <Link href="/whitepaper-voip-zukunft" className="text-white/80 hover:text-white">
            Whitepaper
          </Link>

          <a
            href="https://infraone.ch/kontakt"
            target="_blank"
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

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
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
          <button
            onClick={toggleMenu}
            className="text-white p-2"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
          <Link href="/#rechner" onClick={toggleMenu} className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/10">
            Preise
          </Link>
          <Link href="/#ueber-uns" onClick={toggleMenu} className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/10">
            Über uns
          </Link>
          <Link href="/#faq" onClick={toggleMenu} className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/10">
            FAQ
          </Link>
          <Link href="/whitepaper-voip-zukunft" onClick={toggleMenu} className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/10">
            Whitepaper
          </Link>
          <a
            href="https://infraone.ch/kontakt"
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-[#3C9646] px-4 py-3 text-base font-semibold text-black hover:bg-[#2d7e36] mt-2"
          >
            Kontakt
          </a>
        </div>
      )}
    </header>
  );
}
