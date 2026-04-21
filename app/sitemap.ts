import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const paths = [
    '',
    '/case-studies',
    '/case-studies/fitness-room-concierge',
    '/contact',
    '/focus',
    '/our-approach',
    '/privacy-policy',
    '/terms-of-use',
    '/value',
  ]
  const now = new Date()
  return paths.map((path) => ({
    url: `${base}${path}` || base,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/case-studies') ? 0.85 : 0.7,
  }))
}
