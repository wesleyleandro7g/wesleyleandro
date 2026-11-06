import { siteConfig } from '@/utils/data'
import { translate, type Locale } from '@/i18n'

export function personJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: translate(locale, 'metadata')('home.description'),
    url: siteConfig.url,
    email: siteConfig.contact,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    worksFor: { '@type': 'Organization', name: 'AZX' },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Instituto Federal do Norte de Minas Gerais',
      alternateName: 'IFNMG',
    },
    knowsLanguage: ['pt-BR', 'en'],
    knowsAbout: [
      'Frontend Engineering', 'Frontend Architecture', 'React', 'Next.js',
      'TypeScript', 'Software Engineering', 'Web Performance',
      'Full Stack Development', 'Node.js', 'Automated Testing',
    ],
  }
}
