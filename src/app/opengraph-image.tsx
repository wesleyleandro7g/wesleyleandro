import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Wesley Leandro — Senior Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0a0a0a',
          color: '#f5f5f5',
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: '#737373',
            marginBottom: 24,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Senior Software Engineer
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Wesley Leandro
        </div>
        <div style={{ fontSize: 28, color: '#a3a3a3', maxWidth: 800 }}>
          Scalable systems, modern SaaS products, and AI-powered platforms.
        </div>
      </div>
    ),
    { ...size }
  )
}
