import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.cloud-telefonanlagen.ch'

/**
 * Such- und KI-Crawler explizit erlauben (Answer Engine Optimization).
 * Enthält klassische Suchmaschinen, KI-Antwortmaschinen und KI-Trainings-Bots.
 */
const allowedBots = [
    // Klassische Suchmaschinen
    'Googlebot',
    'Googlebot-Image',
    'Bingbot',
    'Applebot',
    'DuckDuckBot',
    'YandexBot',
    'Baiduspider',
    // KI-Antwortmaschinen & KI-Crawler
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Amazonbot',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    'cohere-ai',
    'YouBot',
    'CCBot',
]

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            { userAgent: allowedBots, allow: '/' },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
