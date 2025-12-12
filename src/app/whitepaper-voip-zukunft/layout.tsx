import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "VoIP Zukunft: Whitepaper zu Cloud-Telefonanlagen | InfraOne",
    description:
        "Erfahren Sie im Experten-Whitepaper alles über die Zukunft der VoIP-Telefonie. Kosten, Funktionen und Vorteile von Cloud-Telefonanlagen für Schweizer KMU.",
    alternates: { canonical: "https://www.cloud-telefonanlagen.ch/whitepaper-voip-zukunft" },
    openGraph: {
        title: "VoIP Zukunft: Whitepaper zu Cloud-Telefonanlagen | InfraOne",
        description:
            "Erfahren Sie im Experten-Whitepaper alles über die Zukunft der VoIP-Telefonie. Kosten, Funktionen und Vorteile von Cloud-Telefonanlagen für Schweizer KMU.",
        url: "https://www.cloud-telefonanlagen.ch/whitepaper-voip-zukunft",
        type: "article",
        images: [
            {
                url: "https://www.cloud-telefonanlagen.ch/heroimage.png",
                width: 1200,
                height: 630,
                alt: "Cloud Telefonanlagen Whitepaper",
            },
        ],
    },
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
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: "Whitepaper: Die Zukunft der Cloud-Telefonie für KMU",
                        image: "https://www.cloud-telefonanlagen.ch/heroimage.png",
                        author: {
                            "@type": "Organization",
                            name: "InfraOne IT Solutions GmbH",
                            url: "https://www.infraone.ch",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "InfraOne IT Solutions GmbH",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.cloud-telefonanlagen.ch/infraone-logo-schwarz.svg",
                            },
                        },
                        datePublished: "2025-01-01",
                        dateModified: new Date().toISOString().split("T")[0],
                        description:
                            "Detailliertes Whitepaper über Funktionen, Kosten und Vorteile von Cloud-Telefonanlagen (VoIP) für Schweizer Unternehmen.",
                    }),
                }}
            />
        </>
    );
}
