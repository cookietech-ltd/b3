/**
 * Canonical site URL for metadata (og:image, etc.).
 *
 * On Vercel: set NEXT_PUBLIC_SITE_URL to your public domain (e.g. https://b-3solutions.com)
 * so Open Graph URLs match the link people share. Preview deployments may use VERCEL_URL
 * unless NEXT_PUBLIC_SITE_URL is set.
 */
export function getSiteUrl(): string {
  const trim = (u: string) => u.replace(/\/$/, '')

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return trim(process.env.NEXT_PUBLIC_SITE_URL)
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (process.env.VERCEL && production) {
    return production.startsWith('http')
      ? trim(production)
      : `https://${trim(production)}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${trim(process.env.VERCEL_URL)}`
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
