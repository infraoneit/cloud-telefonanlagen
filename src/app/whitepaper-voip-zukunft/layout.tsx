import type { Metadata } from "next";

const SITE_URL = "https://www.cloud-telefonanlagen.ch";
const PAGE_URL = `${SITE_URL}/whitepaper-voip-zukunft`;
const DESCRIPTION =
    "Erfahren Sie im Experten-Whitepaper alles über peoplefone vPBX (BASIC & PLUS): Kosten, Funktionen, Flat-Tarife und Vorteile von Cloud-Telefonanlagen für Schweizer KMU.";

export const metadata: Metadata = {
    title: "VoIP Zukunft: Whitepaper zu Cloud-Telefonanlagen | InfraOne",
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
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
        title: "VoIP Zukunft: Whitepaper zu Cloud-Telefonanlagen | InfraOne",
        description: DESCRIPTION,
        url: PAGE_URL,
        type: "article",
        locale: "de_CH",
        images: [
            {
                url: "/heroimage.png",
                width: 1200,
                height: 630,
                alt: "Cloud Telefonanlagen Whitepaper",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "VoIP Zukunft: Whitepaper zu Cloud-Telefonanlagen | InfraOne",
        description: DESCRIPTION,
        images: ["/heroimage.png"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "@id": `${PAGE_URL}/#article`,
            headline:
                "Whitepaper: peoplefone vPBX – Die flexible Cloud-Telefonanlage für KMU",
            description:
                "Detailliertes Whitepaper über Funktionen, Kosten und Vorteile der Cloud-Telefonanlage peoplefone vPBX (BASIC & PLUS) für Schweizer Unternehmen.",
            image: `${SITE_URL}/heroimage.png`,
            inLanguage: "de-CH",
            mainEntityOfPage: PAGE_URL,
            keywords: [
                "peoplefone vPBX",
                "vPBX BASIC",
                "vPBX PLUS",
                "Cloud-Telefonanlage",
                "VoIP Schweiz",
                "Hosted PBX",
            ],
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            datePublished: "2025-01-01",
            dateModified: new Date().toISOString().split("T")[0],
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${PAGE_URL}/#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Startseite",
                    item: SITE_URL,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Whitepaper peoplefone vPBX",
                    item: PAGE_URL,
                },
            ],
        },
        {
            "@type": "Product",
            name: "peoplefone vPBX BASIC",
            description:
                "Cloud-Telefonanlage (Hosted PBX) für bis zu 10 Benutzer mit allen Grundfunktionen. Preise als Pauschale pro Benutzerstufe, inkl. MwSt.",
            image: `${SITE_URL}/heroimage.png`,
            category: "Cloud-Telefonanlage / Hosted PBX",
            brand: { "@type": "Brand", name: "peoplefone" },
            offers: {
                "@type": "AggregateOffer",
                priceCurrency: "CHF",
                lowPrice: "15",
                highPrice: "30",
                offerCount: 2,
                availability: "https://schema.org/InStock",
                seller: { "@id": `${SITE_URL}/#organization` },
            },
        },
        {
            "@type": "Product",
            name: "peoplefone vPBX PLUS",
            description:
                "Cloud-Telefonanlage (Hosted PBX) für bis zu 150 Benutzer, voller Funktionsumfang inkl. Softphone, Analytics, 5× IVR und Warteschleifen. Preise als Pauschale pro Benutzerstufe, inkl. MwSt.",
            image: `${SITE_URL}/heroimage.png`,
            category: "Cloud-Telefonanlage / Hosted PBX",
            brand: { "@type": "Brand", name: "peoplefone" },
            offers: {
                "@type": "AggregateOffer",
                priceCurrency: "CHF",
                lowPrice: "25",
                highPrice: "80",
                offerCount: 4,
                availability: "https://schema.org/InStock",
                seller: { "@id": `${SITE_URL}/#organization` },
            },
        },
    ],
};

export default function WhitepaperLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
