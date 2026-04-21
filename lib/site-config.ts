/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.yourdomain.com).
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  }
  return 'http://localhost:3000'
}

export const siteConfig = {
  name: 'B³ Solutions',
  tagline: 'Operational Clarity',
  description:
    'Turning operational pressure into clarity and momentum for service businesses.',
  keywords: [
    'operations consulting',
    'service business',
    'operational clarity',
    'process improvement',
    'B³ Solutions',
  ],
} as const
