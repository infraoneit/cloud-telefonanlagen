import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* --------------------------------
   SEO Meta – live & korrekt
---------------------------------- */

export const metadata: Metadata = {
  title: "Cloud-Telefonanlagen Schweiz | InfraOne IT Solutions",
  description:
    "Cloud-Telefonanlagen für Schweizer KMU: Moderne VoIP-Lösungen mit Peoplefone, 3CX & Wildix. Flexible Tarife, sichere Anbindung, einfache Verwaltung und persönlicher IT-Support aus Winterthur.",
  keywords: [
    "Cloud Telefonanlage Schweiz",
    "Cloud PBX",
    "Peoplefone Hosted",
    "3CX",
    "Teams Telefonie",
    "Wildix",
    "Yeastar",
    "VoIP Winterthur",
    "Telefonanlage Schaffhausen",
    "Cloud Telefonanlage Thurgau",
    "KMU Telefonie Schweiz",
  ],
  alternates: { canonical: "https://www.cloud-telefonanlagen.ch" },
  icons: {
    icon: "/cloud-telefonanlagen-schweiz-infraone-it-solutions-gmbh-favicon.svg",
  },
  openGraph: {
    title: "Cloud-Telefonanlagen Schweiz – InfraOne",
    description:
      "Cloud-Telefonanlagen für Schweizer KMU: Moderne VoIP-Lösungen mit Peoplefone, 3CX & Wildix. Flexible Tarife, sichere Anbindung, einfache Verwaltung und persönlicher IT-Support aus Winterthur.",

    url: "https://www.cloud-telefonanlagen.ch",
    siteName: "InfraOne Cloud Telefonie",
  },
};

/* --------------------------------
   Layout mit JSON-LD Schema
---------------------------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GJR6Z88Y3E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GJR6Z88Y3E');
          `}
        </Script>

        {/* STRUCTURED DATA – POWER BOOST */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TelecommunicationsService",
              name: "InfraOne IT Solutions GmbH",
              image: "https://www.cloud-telefonanlagen.ch/heroimage.png",
              url: "https://www.cloud-telefonanlagen.ch",
              telephone: "+41522221818",
              priceRange: "ab CHF 20/Monat",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Winterthur",
                addressCountry: "CH",
              },
              areaServed: "CH",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+41522221818",
                  contactType: "customer service",
                  areaServed: "CH",
                  availableLanguage: ["de", "en"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+41765875055",
                  contactType: "customer service",
                  url: "https://wa.me/41765875055",
                  availableLanguage: ["de"],
                },
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "Cloud Telefonanlage Schweiz",
                  price: "20",
                  priceCurrency: "CHF",
                  url: "https://www.cloud-telefonanlagen.ch",
                  description:
                    "Cloud-Telefonanlagen ab CHF 20/Monat für KMU in der Schweiz.",
                },
              ],
              serviceType: "Cloud-Telefonanlagen",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Telefonie-Services Schweiz",
                itemListElement: [
                  {
                    "@type": "Service",
                    name: "Peoplefone Hosted",
                    areaServed: "CH",
                  },
                  {
                    "@type": "Service",
                    name: "3CX PBX",
                    areaServed: "CH",
                  },
                  {
                    "@type": "Service",
                    name: "Microsoft Teams Telefonie",
                    areaServed: "CH",
                  },
                  {
                    "@type": "Service",
                    name: "Wildix Cloud PBX",
                    areaServed: "CH",
                  },
                  {
                    "@type": "Service",
                    name: "Yeastar VoIP",
                    areaServed: "CH",
                  },
                  {
                    "@type": "Service",
                    name: "Migration von Mitel",
                    areaServed: "CH",
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
