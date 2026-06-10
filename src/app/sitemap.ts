import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.cloud-telefonanlagen.ch'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
            images: [`${SITE_URL}/heroimage.png`],
        },
        {
            url: `${SITE_URL}/whitepaper-voip-zukunft`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
            images: [`${SITE_URL}/heroimage.png`],
        },
    ]
}
