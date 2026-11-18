import { siteConfig, CASE_STUDY_SLUGS } from '@/utils/data'
import { locales, localePath } from '@/i18n'
export function GET() {
  const paths = ['', '/work', '/writing', '/resume', ...CASE_STUDY_SLUGS.map(slug => `/work/${slug}`)]
  const urls = locales.flatMap(locale => paths.map(path => `<url><loc>${siteConfig.url}${localePath(locale, path)}</loc><changefreq>monthly</changefreq><priority>${path === '' ? 1 : path.startsWith('/work/') ? 0.8 : 0.7}</priority></url>`))
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
