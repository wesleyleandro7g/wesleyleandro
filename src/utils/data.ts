/* eslint-disable @typescript-eslint/no-explicit-any */
export const data = (t: any) => ({
  profile: {
    name: 'Wesley Leandro',
    role: 'Senior Frontend Developer',
    tagline:
      'Specializing in React, Next.js, and High-Performance Web Applications.',
    location: 'Brazil (Remote)',
    contact: 'support@wesleyleandro.com',
    links: {
      github: 'https://github.com/wesleyleandro7g',
      linkedin: 'https://linkedin.com/in/wesleyleandro',
    },
  },
  stats: [
    { label: t('stats.item-01.label'), value: t('stats.item-01.value') },
    { label: t('stats.item-02.label'), value: t('stats.item-02.value') },
    { label: t('stats.item-03.label'), value: t('stats.item-03.value') },
  ],
  skills: {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Native',
      'Expo',
    ],
    backend: ['Node.js', 'GraphQL', 'Prisma ORM', 'PostgreSQL', 'AWS'],
    tools: ['Docker', 'Jest', 'CI/CD', 'Figma', 'Git'],
  },
  softSkills: [
    {
      title: t('philosophy.items.item-01.title'),
      description: t('philosophy.items.item-01.description'),
      icon: 'MessageSquare',
    },
    {
      title: t('philosophy.items.item-02.title'),
      description: t('philosophy.items.item-02.description'),
      icon: 'Users',
    },
    {
      title: t('philosophy.items.item-03.title'),
      description: t('philosophy.items.item-03.description'),
      icon: 'BrainCircuit',
    },
    {
      title: t('philosophy.items.item-04.title'),
      description: t('philosophy.items.item-04.description'),
      icon: 'Zap',
    },
  ],
  contributions: [
    {
      title: t('services.items.item-01.title'),
      description: t('services.items.item-01.description'),
      icon: 'Code2',
    },
    {
      title: t('services.items.item-02.title'),
      description: t('services.items.item-02.description'),
      icon: 'Puzzle',
    },
    {
      title: t('services.items.item-03.title'),
      description: t('services.items.item-03.description'),
      icon: 'Palette',
    },
    {
      title: t('services.items.item-04.title'),
      description: t('services.items.item-04.description'),
      icon: 'TrendingUp',
    },
  ],
  experience: [
    {
      company: t('experience.items.item-01.company'),
      role: t('experience.items.item-01.role'),
      period: t('experience.items.item-01.period'),
      description: t('experience.items.item-01.description'),
    },
    {
      company: t('experience.items.item-02.company'),
      role: t('experience.items.item-02.role'),
      period: t('experience.items.item-02.period'),
      description: t('experience.items.item-02.description'),
    },
    {
      company: t('experience.items.item-03.company'),
      role: t('experience.items.item-03.role'),
      period: t('experience.items.item-03.period'),
      description: t('experience.items.item-03.description'),
    },
  ],
})
