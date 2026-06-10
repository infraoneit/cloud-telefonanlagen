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

const SITE_URL = "https://www.cloud-telefonanlagen.ch";
const OG_IMAGE = "/heroimage.png";
const DESCRIPTION =
  "Cloud-Telefonanlagen für Schweizer KMU: VoIP mit peoplefone vPBX (BASIC & PLUS) & 3CX. Flexible Tarife, sichere Anbindung und persönlicher Support aus Winterthur. Ab CHF 15/Monat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cloud-Telefonanlagen Schweiz | InfraOne IT Solutions",
  description: DESCRIPTION,
  applicationName: "Cloud-Telefonanlagen Schweiz",
  authors: [{ name: "InfraOne IT Solutions GmbH", url: "https://www.infraone.ch" }],
  creator: "InfraOne IT Solutions GmbH",
  publisher: "InfraOne IT Solutions GmbH",
  category: "technology",
  keywords: [
    "Cloud Telefonanlage Schweiz",
    "Cloud PBX",
    "peoplefone vPBX",
    "vPBX BASIC",
    "vPBX PLUS",
    "3CX",
    "Teams Telefonie",
    "Wildix",
    "Yeastar",
    "VoIP Winterthur",
    "Telefonanlage Schaffhausen",
    "Cloud Telefonanlage Thurgau",
    "KMU Telefonie Schweiz",
  ],
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      {
        url: "/cloud-telefonanlagen-schweiz-infraone-it-solutions-gmbh-favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "/cloud-telefonanlagen-schweiz-infraone-it-solutions-gmbh-favicon.svg",
    apple:
      "/cloud-telefonanlagen-schweiz-infraone-it-solutions-gmbh-favicon.svg",
  },
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: SITE_URL,
    siteName: "InfraOne Cloud Telefonie",
    title: "Cloud-Telefonanlagen Schweiz – InfraOne",
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cloud-Telefonanlagen für KMU in der Schweiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud-Telefonanlagen Schweiz – InfraOne",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* --------------------------------
   Layout mit JSON-LD Schema (@graph)
---------------------------------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "TelecommunicationsService"],
      "@id": `${SITE_URL}/#organization`,
      name: "InfraOne IT Solutions GmbH",
      alternateName: "InfraOne Cloud Telefonie",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/infraone-logo-schwarz.svg`,
      },
      image: `${SITE_URL}/heroimage.png`,
      description: DESCRIPTION,
      telephone: "+41522221818",
      email: "info@infraone.ch",
      vatID: "CHE-288.114.187",
      priceRange: "ab CHF 15/Monat",
      currenciesAccepted: "CHF",
      serviceType: "Cloud-Telefonanlagen",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rudolf-Diesel-Strasse 25",
        postalCode: "8404",
        addressLocality: "Winterthur",
        addressRegion: "ZH",
        addressCountry: "CH",
      },
      areaServed: [
        "Winterthur",
        "Schaffhausen",
        "Thurgau",
        "Zürich",
        "Ostschweiz",
        "Schweiz",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "17:00",
        },
      ],
      sameAs: [
        "https://www.infraone.ch",
        "https://www.facebook.com/profile.php?id=61587228175938",
        "https://www.instagram.com/infraoneit/",
        "https://www.linkedin.com/in/infraone-it-solutions",
      ],
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
          contactType: "sales",
          url: "https://wa.me/41765875055",
          availableLanguage: ["de"],
        },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "peoplefone vPBX BASIC",
          description:
            "Cloud-Telefonanlage für bis zu 10 Benutzer mit allen Grundfunktionen.",
          price: "15",
          priceCurrency: "CHF",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "15",
            priceCurrency: "CHF",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "MON",
            },
          },
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#rechner`,
          areaServed: "CH",
        },
        {
          "@type": "Offer",
          name: "peoplefone vPBX PLUS",
          description:
            "Cloud-Telefonanlage für bis zu 150 Benutzer, voller Funktionsumfang inkl. Softphone, Analytics und IVR.",
          price: "25",
          priceCurrency: "CHF",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "25",
            priceCurrency: "CHF",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "MON",
            },
          },
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#rechner`,
          areaServed: "CH",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Telefonie-Services Schweiz",
        itemListElement: [
          {
            "@type": "Service",
            name: "peoplefone vPBX BASIC",
            areaServed: "CH",
          },
          {
            "@type": "Service",
            name: "peoplefone vPBX PLUS",
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
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Cloud-Telefonanlagen Schweiz – InfraOne",
      description: DESCRIPTION,
      inLanguage: "de-CH",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH">
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

        {/* STRUCTURED DATA – Organization (LocalBusiness) + WebSite */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
