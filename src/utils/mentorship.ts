import { siteConfig } from './data'

export const mentorshipOffer = {
  price: 697,
  currency: 'BRL',
  days: 30,
  sessions: 4,
  liveHours: 4,
} as const

export function mentorshipContact(message: string) {
  const url = new URL(siteConfig.links.whatsapp)
  url.searchParams.set('text', message)
  return url.href
}
