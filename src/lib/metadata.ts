import { siteConfig } from '@/utils/data'
export function personJsonLd() {
  return { '@context': 'https://schema.org', '@type': 'Person', name: siteConfig.name, jobTitle: siteConfig.role, url: siteConfig.url, email: siteConfig.contact, sameAs: [siteConfig.links.github, siteConfig.links.linkedin] }
}
