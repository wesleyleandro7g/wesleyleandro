// Factual source: docs/portfolio_wesley_plano_refatoracao_2026.md, §§2, 7, 15.
// These are supplied facts, not an independent audit of client systems.
export const verifiedMetrics = {
  experienceYears: '8+', platformUsers: '1M+', leadsPerMonth: '1,000+', teamMembersLed: '3',
} as const
export const projectFacts = {
  penzack: { status: 'production', featured: true, stack: ['React', 'Next.js', 'TypeScript', 'Core Web Vitals', 'Sentry'], diagram: ['web', 'api', 'finance'] },
  'facil-crm': { status: 'not-disclosed', featured: true, stack: ['Go', 'APIs', 'AI orchestration', 'Enterprise integrations'], diagram: ['crm', 'agents', 'go', 'legacy'] },
  'james-moto-shop': { status: 'production', featured: true, stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Prisma', 'AWS'], diagram: ['portal', 'api', 'erp'] },
  'tactia-build': { status: 'design', featured: false, stack: [], diagram: ['tools', 'integration', 'operations'] },
  'tactia-ai': { status: 'proof-of-concept', featured: false, stack: ['Python', 'Hatchet', 'PostgreSQL', 'Docker', 'Unit & integration tests'], diagram: ['tasks', 'hatchet', 'workers', 'postgres'] },
  elint: { status: 'production', featured: false, stack: ['React', 'Next.js', 'Recharts'], diagram: ['cra', 'next', 'dashboards'] },
  desencoder: { status: 'production', featured: false, stack: ['React', 'API integration'], diagram: ['web', 'api', 'business'] },
} as const
export const employmentFacts = [
  { company: 'AZX', role: 'Senior Frontend Developer', start: '2024-03', end: '2026-11', project: 'penzack' },
  { company: 'James Moto Shop', role: 'Tech Lead (Full Stack)', start: '2023-09', end: '2024-03', project: 'james-moto-shop' },
  { company: 'Elint Tech', role: 'Frontend Developer', start: '2022-08', end: '2023-09', project: 'elint' },
  { company: 'Desencoder', role: 'Full Stack Developer', start: '2019-03', end: '2022-08', project: 'desencoder' },
  { company: 'Independent', role: 'Full Stack Developer', start: '2017-05', end: '2020-04', project: null },
] as const
// No download is offered until an approved, current export exists at the given path.
export const resumes: { id: 'software' | 'frontend'; href: string | null }[] = [
  { id: 'software', href: null }, { id: 'frontend', href: null },
]
export const evidence = [
  { claim: 'experienceYears', value: verifiedMetrics.experienceYears, verified: true, source: 'refactor plan §2.1 / supplied career history' },
  { claim: 'platformUsers', value: verifiedMetrics.platformUsers, verified: true, source: 'refactor plan §2.1 / documented CV baseline; 2M+ unverified', attribution: 'Product scale, team contribution' },
  { claim: 'leadsPerMonth', value: verifiedMetrics.leadsPerMonth, verified: true, source: 'refactor plan §7.3 / supplied James Moto Shop history' },
  { claim: 'teamMembersLed', value: verifiedMetrics.teamMembersLed, verified: true, source: 'refactor plan §7.3 / two developers and one designer' },
  { claim: '60% performance gains / three migrations / 2M+ users', verified: false, source: 'refactor plan §2.1; excluded from public content' },
  { claim: 'Updated resume PDF exports', verified: false, source: 'refactor plan §8; existing PDF contains superseded roles/dates' },
]
