export const CASE_STUDY_SLUGS = ['penzack', 'elint', 'desencoder'] as const

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number]

export const siteConfig = {
  name: 'Wesley Leandro',
  role: 'Senior Software Engineer',
  url: 'https://wesleyleandro.com',
  contact: 'support@wesleyleandro.com',
  links: {
    github: 'https://github.com/wesleyleandro7g',
    linkedin: 'https://linkedin.com/in/wesleyleandro',
  },
}

export const caseStudyStacks: Record<CaseStudySlug, string[]> = {
  penzack: [
    'TypeScript',
    'React',
    'Next.js',
    'GraphQL',
    'PostgreSQL',
    'AWS',
    'Docker',
    'CI/CD',
  ],
  elint: [
    'Next.js',
    'TypeScript',
    'React',
    'Node.js',
    'GraphQL',
    'PostgreSQL',
  ],
  desencoder: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'AWS'],
}

export const articleLinks = [
  { id: 'item-01', href: 'https://linkedin.com/in/wesleyleandro' },
  { id: 'item-02', href: 'https://linkedin.com/in/wesleyleandro' },
  { id: 'item-03', href: 'https://linkedin.com/in/wesleyleandro' },
] as const

type Translator = {
  (key: string): string
  raw: (key: string) => unknown
}

export const data = (t: Translator) => ({
  profile: siteConfig,
  impact: ['item-01', 'item-02', 'item-03', 'item-04'].map((id) => ({
    value: t(`home.impact.items.${id}.value`),
    label: t(`home.impact.items.${id}.label`),
    context: t(`home.impact.items.${id}.context`),
  })),
  caseStudies: CASE_STUDY_SLUGS.map((slug) => {
    const base = `workPage.studies.${slug}`
    return {
      slug,
      company: t(`${base}.company`),
      role: t(`${base}.role`),
      period: t(`${base}.period`),
      domain: t(`${base}.domain`),
      thesis: t(`${base}.thesis`),
      context: t(`${base}.context`),
      challenge: t(`${base}.challenge`),
      approach: t(`${base}.approach`),
      architecture: t(`${base}.architecture`),
      scalability: t(`${base}.scalability`),
      impact: t(`${base}.impact`),
      lesson: t(`${base}.lesson`),
      bullets: {
        b1: t(`${base}.bullets.b1`),
        b2: t(`${base}.bullets.b2`),
      },
      stack: caseStudyStacks[slug],
    }
  }),
  focusAreas: ['item-01', 'item-02', 'item-03', 'item-04', 'item-05', 'item-06'].map(
    (id) => ({
      title: t(`home.focus.items.${id}.title`),
      description: t(`home.focus.items.${id}.description`),
    })
  ),
  capabilities: [
    {
      key: 'frontend',
      title: t('home.capabilities.groups.frontend.title'),
      description: t('home.capabilities.groups.frontend.description'),
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      key: 'backend',
      title: t('home.capabilities.groups.backend.title'),
      description: t('home.capabilities.groups.backend.description'),
      skills: ['Node.js', 'GraphQL', 'PostgreSQL', 'Prisma'],
    },
    {
      key: 'cloud',
      title: t('home.capabilities.groups.cloud.title'),
      description: t('home.capabilities.groups.cloud.description'),
      skills: ['AWS', 'Docker', 'CI/CD'],
    },
    {
      key: 'ai',
      title: t('home.capabilities.groups.ai.title'),
      description: t('home.capabilities.groups.ai.description'),
      skills: ['LLM Integrations', 'AI Workflows'],
    },
    {
      key: 'tooling',
      title: t('home.capabilities.groups.tooling.title'),
      description: t('home.capabilities.groups.tooling.description'),
      skills: ['Git', 'Jest', 'Figma'],
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
  experience: ['item-01', 'item-02', 'item-03'].map((id) => ({
    company: t(`home.experience.items.${id}.company`),
    role: t(`home.experience.items.${id}.role`),
    period: t(`home.experience.items.${id}.period`),
    description: t(`home.experience.items.${id}.description`),
  })),
})
