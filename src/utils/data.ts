import { projectFacts, verifiedMetrics, employmentFacts } from './portfolio'
export const CASE_STUDY_SLUGS = ['penzack', 'facil-crm', 'james-moto-shop', 'tactia-build', 'tactia-ai', 'elint', 'desencoder'] as const

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number]

export const siteConfig = {
  name: 'Wesley Leandro',
  role: 'Senior Software Engineer',
  url: 'https://wesleyleandro.com',
  contact: 'hi@wesleyleandro.com',
  legacyResume: '/resume.pdf',
  resumeSource: 'https://docs.google.com/document/d/1zdt6jtrkUrjs5vh_o8vRK1d1URrBanTuaQYUp6oFEWo/edit',
  links: {
    github: 'https://github.com/wesleyleandro7g',
    linkedin: 'https://linkedin.com/in/wesleyleandro',
    discord: 'discord://discord.com/channels/@me',
    telegram: 'https://t.me/owesleyleandro',
    whatsapp: 'https://wa.me/5538999932655',
  },
  contactChannels: {
    discord: { handle: 'wesleyleandro' },
    telegram: { handle: 'owesleyleandro' },
    whatsapp: { handle: '+5538999932655' },
  },
}

export const COPYABLE_CONTACTS = [
  { id: 'email', value: siteConfig.contact },
  { id: 'discord', value: siteConfig.contactChannels.discord.handle },
  { id: 'telegram', value: siteConfig.contactChannels.telegram.handle },
  { id: 'whatsapp', value: siteConfig.contactChannels.whatsapp.handle },
] as const

export type CopyableContactId = (typeof COPYABLE_CONTACTS)[number]['id']

export const CONTACT_LINKS = [
  {
    id: 'email',
    href: `mailto:${siteConfig.contact}`,
    value: siteConfig.contact,
  },
  {
    id: 'discord',
    href: siteConfig.links.discord,
    value: siteConfig.contactChannels.discord.handle,
  },
  {
    id: 'telegram',
    href: siteConfig.links.telegram,
    value: siteConfig.contactChannels.telegram.handle,
  },
  {
    id: 'whatsapp',
    href: siteConfig.links.whatsapp,
    value: siteConfig.contactChannels.whatsapp.handle,
  },
] as const

export const caseStudyStacks = Object.fromEntries(Object.entries(projectFacts).map(([slug, fact]) => [slug, [...fact.stack]])) as Record<CaseStudySlug, string[]>

// Add only published articles with their direct URLs and matching translations.
export const articleLinks: { id: string; href: string }[] = []

type Translator = {
  (key: string): string
  raw: (key: string) => unknown
}

export const data = (t: Translator) => ({
  profile: siteConfig,
  impact: ['item-01', 'item-02', 'item-03', 'item-04'].map((id, index) => ({
    value: Object.values(verifiedMetrics)[index],
    label: t(`home.impact.items.${id}.label`),
    context: t(`home.impact.items.${id}.context`),
  })),
  caseStudies: CASE_STUDY_SLUGS.map((slug) => {
    const base = `workPage.studies.${slug}`
    const employment = employmentFacts.find(job => job.project === slug)
    return {
      slug,
      ...projectFacts[slug],
      statusLabel: t(`workPage.status.${projectFacts[slug].status}`),
      company: t(`${base}.company`),
      role: employment?.role ?? t(`${base}.role`),
      period: employment ? `${employment.start} — ${employment.end}` : t(`${base}.period`),
      domain: t(`${base}.domain`),
      thesis: t(`${base}.thesis`),
      context: t(`${base}.context`),
      challenge: t(`${base}.challenge`),
      responsibility: t(`${base}.responsibility`),
      solution: t(`${base}.solution`),
      impact: t(`${base}.impact`),
      decisions: t(`${base}.decisions`),
      lesson: t(`${base}.lesson`),
      bullets: {
        b1: t(`${base}.bullets.b1`),
        b2: t(`${base}.bullets.b2`),
      },
      stack: caseStudyStacks[slug],
    }
  }),
  focusAreas: ['item-05', 'item-01', 'item-06'].map(
    (id) => ({
      projects: ({ 'item-05': ['james-moto-shop', 'desencoder', 'tactia-build'], 'item-01': ['facil-crm', 'tactia-ai'], 'item-06': ['penzack', 'elint'] } as Record<string, CaseStudySlug[]>)[id],
      title: t(`home.focus.items.${id}.title`),
      description: t(`home.focus.items.${id}.description`),
    })
  ),
  capabilities: [
    {
      key: 'frontend',
      title: t('home.capabilities.groups.frontend.title'),
      description: t('home.capabilities.groups.frontend.description'),
      skills: ['React', 'Next.js', 'TypeScript', 'Core Web Vitals', 'Accessibility'],
    },
    {
      key: 'backend',
      title: t('home.capabilities.groups.backend.title'),
      description: t('home.capabilities.groups.backend.description'),
      skills: ['Node.js', 'REST', 'GraphQL', 'Go', 'PostgreSQL', 'Prisma'],
    },
    {
      key: 'cloud',
      title: t('home.capabilities.groups.cloud.title'),
      description: t('home.capabilities.groups.cloud.description'),
      skills: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Monitoring'],
    },
    {
      key: 'ai',
      title: t('home.capabilities.groups.ai.title'),
      description: t('home.capabilities.groups.ai.description'),
      skills: ['AI API integration', 'Multi-agent workflows', 'Python', 'Hatchet (POC)'],
    },
    {
      key: 'tooling',
      title: t('home.capabilities.groups.tooling.title'),
      description: t('home.capabilities.groups.tooling.description'),
      skills: ['Jest', 'React Testing Library', 'Vitest', 'Cypress', 'Sentry', 'Git'],
    },
  ],
  articles: articleLinks.map((article) => ({
    ...article,
    title: t(`writingPage.articles.${article.id}.title`),
    platform: t(`writingPage.articles.${article.id}.platform`),
    excerpt: t(`writingPage.articles.${article.id}.excerpt`),
  })),
  writingTopics: [
    'item-01',
    'item-02',
    'item-03',
    'item-04',
    'item-05',
    'item-06',
  ].map((id) => t(`writingPage.topics.items.${id}`)),
  experience: employmentFacts.map((fact, index) => ({
    ...fact,
    company: fact.company,
    role: fact.role,
    period: `${fact.start} — ${fact.end}`,
    description: t(`home.experience.items.item-0${index + 1}.description`),
  })),
})
