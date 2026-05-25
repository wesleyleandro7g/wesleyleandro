import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { siteConfig } from '@/utils/data'

type PageKey = 'home' | 'work' | 'writing'

export async function generatePageMetadata(
  locale: string,
  page: PageKey
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' })

  const title = t(`${page}.title`)
  const description = t(`${page}.description`)
  const baseUrl = siteConfig.url

  const pathMap: Record<PageKey, string> = {
    home: '',
    work: '/work',
    writing: '/writing',
  }

  const pagePath = pathMap[page]
  const canonical = `${baseUrl}/${locale}${pagePath}`

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        routing.locales.map((loc) => [
          loc,
          `${baseUrl}/${loc}${pagePath}`,
        ])
      ),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale,
      type: 'website',
      images: [{ url: `${baseUrl}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/opengraph-image`],
    },
    other: {
      'hreflang-x-default': `${baseUrl}/en${pagePath}`,
      ...Object.fromEntries(
        routing.locales.map((loc) => [
          `hreflang-${loc}`,
          `${baseUrl}/${loc}${pagePath}`,
        ])
      ),
    },
  }
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.contact,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  }
}
