import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionLabel } from '@/components/section-label'
import { FadeIn } from '@/components/fade-in'
import {
  CASE_STUDY_SLUGS,
  type CaseStudySlug,
  data as getData,
} from '@/utils/data'
import { generatePageMetadata } from '@/lib/metadata'

interface CaseStudyPageProps {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return CASE_STUDY_SLUGS.flatMap((slug) =>
    ['en', 'pt', 'es'].map((locale) => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'workPage' })
  const study = t.raw(`studies.${slug}`) as { company: string; thesis: string }

  return {
    ...(await generatePageMetadata(locale, 'work')),
    title: `${study.company} — Wesley Leandro`,
    description: study.thesis,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params

  if (!CASE_STUDY_SLUGS.includes(slug as CaseStudySlug)) {
    notFound()
  }

  const t = await getTranslations('workPage')
  const tRoot = await getTranslations()
  const { caseStudies } = getData(tRoot)
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) notFound()

  const currentIndex = CASE_STUDY_SLUGS.indexOf(slug as CaseStudySlug)
  const prevSlug =
    currentIndex > 0 ? CASE_STUDY_SLUGS[currentIndex - 1] : null
  const nextSlug =
    currentIndex < CASE_STUDY_SLUGS.length - 1
      ? CASE_STUDY_SLUGS[currentIndex + 1]
      : null

  const sections = [
    { key: 'context', content: study.context },
    { key: 'challenge', content: study.challenge },
    { key: 'approach', content: study.approach },
    { key: 'architecture', content: study.architecture },
    { key: 'scalability', content: study.scalability },
    { key: 'impact', content: study.impact },
    { key: 'lesson', content: study.lesson },
  ] as const

  return (
    <>
      <Header />
      <main className='grid-bg min-h-screen bg-background text-foreground'>
        <div className='mx-auto max-w-6xl px-6 pt-24 pb-12'>
          <FadeIn>
            <Link
              href='/work'
              className='link-underline mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              <ArrowLeft size={14} />
              {t('backToWork')}
            </Link>

            <div className='mb-4 flex flex-wrap items-center gap-3'>
              <span className='rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground'>
                {study.domain}
              </span>
              <span className='font-mono text-xs text-muted-foreground'>
                {study.period}
              </span>
            </div>

            <h1 className='mb-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl'>
              {study.company}
            </h1>
            <p className='mb-2 text-sm text-muted-foreground'>{study.role}</p>
            <p className='mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground'>
              {study.thesis}
            </p>
          </FadeIn>

          <div className='max-w-3xl space-y-10'>
            {sections.map((section, i) => (
              <FadeIn key={section.key} delay={0.05 + i * 0.03}>
                <section>
                  <SectionLabel>
                    {t(`sections.${section.key}`)}
                  </SectionLabel>
                  <p className='text-sm leading-relaxed text-muted-foreground'>
                    {section.content}
                  </p>
                </section>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <section>
                <SectionLabel>{t('sections.stack')}</SectionLabel>
                <div className='flex flex-wrap gap-2'>
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-md border border-border bg-surface/50 px-2.5 py-1 font-mono text-xs text-muted-foreground'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </FadeIn>
          </div>

          <div className='mt-16 flex items-center justify-between border-t border-border pt-8'>
            {prevSlug ? (
              <Link
                href={`/work/${prevSlug}`}
                className='link-underline inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                <ArrowLeft size={14} />
                {t('prev')}
              </Link>
            ) : (
              <span />
            )}
            {nextSlug ? (
              <Link
                href={`/work/${nextSlug}`}
                className='link-underline inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground'
              >
                {t('next')}
                <ArrowRight size={14} />
              </Link>
            ) : (
              <span />
            )}
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
