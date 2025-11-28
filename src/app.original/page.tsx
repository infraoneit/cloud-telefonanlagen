"use client";

import { useEffect, useState } from "react";

import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import CloudTelefonieSection from "./components/CloudTelefonieSection";
import PeoplefoneCalculatorSection from "./components/PeoplefoneCalculatorSection";
import PricesSection from "./components/PricesSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
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

      {/* Hero mit Bild + Text */}
      <HeroSection isDark={isDark} />

      {/* Sektion 1 – Vorteile */}
      <section className={isDark ? "bg-[#0F0F0F]" : "bg-[#F8F8F8]"}>
        <BenefitsSection isDark={isDark} />
      </section>

      {/* Sektion 2 – Was ist Cloud-Telefonie */}
      <section className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
        <CloudTelefonieSection isDark={isDark} />
      </section>

      {/* Sektion 3 – Rechner */}
      <section className={isDark ? "bg-[#0F0F0F]" : "bg-[#F8F8F8]"}>
        <PeoplefoneCalculatorSection isDark={isDark} />
      </section>

      {/* Sektion 4 – Preise & Möglichkeiten */}
      <section className={isDark ? "bg-[#0A0A0A]" : "bg-white"}>
        <PricesSection isDark={isDark} />
      </section>

      {/* Sektion 5 – FAQ */}
      <section className={isDark ? "bg-[#0F0F0F]" : "bg-[#F8F8F8]"}>
        <FAQSection isDark={isDark} />
      </section>

      {/* Footer bleibt immer schwarz */}
      <FooterSection />
    </main>
  );
}
