import type { MetadataRoute } from 'next'
import { siteConfig, CASE_STUDY_SLUGS } from '@/utils/data'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const pages = ['', '/work', '/writing']
  const caseStudies = CASE_STUDY_SLUGS.map((slug) => `/work/${slug}`)

  const routes = [...pages, ...caseStudies]

  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : route.includes('/work/') ? 0.8 : 0.7,
    }))
  )
}
