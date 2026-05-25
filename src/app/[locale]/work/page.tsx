import { ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionLabel } from '@/components/section-label'
import { FadeIn } from '@/components/fade-in'
import { Card } from '@/components/card'
import { Link } from '@/i18n/navigation'
import { data as getData } from '@/utils/data'
import { generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return generatePageMetadata(locale, 'work')
}

export default async function WorkPage() {
  const t = await getTranslations('workPage')
  const tRoot = await getTranslations()
  const { caseStudies } = getData(tRoot)

  return (
    <>
      <Header />
      <main className='grid-bg min-h-screen bg-background text-foreground'>
        <div className='mx-auto max-w-6xl px-6 pt-24 pb-12'>
          <FadeIn>
            <SectionLabel>{t('label')}</SectionLabel>
            <h1 className='mb-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl'>
              {t('title')}
            </h1>
            <p className='mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground'>
              {t('description')}
            </p>
          </FadeIn>

          <div className='space-y-4'>
            {caseStudies.map((study, i) => (
              <FadeIn key={study.slug} delay={0.05 + i * 0.05}>
                <Link href={`/work/${study.slug}`} className='group block'>
                  <Card className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex-1'>
                      <div className='mb-2 flex flex-wrap items-center gap-3'>
                        <h2 className='text-lg font-medium text-foreground'>
                          {study.company}
                        </h2>
                        <span className='rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground'>
                          {study.domain}
                        </span>
                        <span className='font-mono text-xs text-muted-foreground'>
                          {study.period}
                        </span>
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        {study.role}
                      </p>
                      <p className='mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground'>
                        {study.thesis}
                      </p>
                    </div>
                    <span className='inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground'>
                      <ArrowRight
                        size={16}
                        className='transition-transform group-hover:translate-x-0.5'
                      />
                    </span>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>

          <Footer />
        </div>
      </main>
    </>
  )
}
