import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site-config'

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 72,
          background: 'linear-gradient(145deg, #f8fafc 0%, #ffffff 45%, #ecfdf5 100%)',
        }}
      >
        <div
          style={{
            width: 120,
            height: 6,
            background: '#0d9488',
            marginBottom: 36,
          }}
        />
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            color: '#334155',
            marginTop: 16,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#64748b',
            marginTop: 28,
            maxWidth: 920,
            lineHeight: 1.45,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  )
}
