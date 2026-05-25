'use client'

import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { Card } from '@/components/card'
import { data as getData } from '@/utils/data'

export function SelectedWorkSection() {
  const t = useTranslations('home.work')
  const tRoot = useTranslations()
  const { caseStudies } = getData(tRoot)

  return (
    <section id='work' className='py-24'>
      <FadeIn>
        <div className='mb-10 flex items-end justify-between'>
          <div>
            <SectionLabel>{t('label')}</SectionLabel>
            <h2 className='text-xl font-medium tracking-tight text-foreground'>
              {t('title')}
            </h2>
          </div>
          <Link
            href='/work'
            className='hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex link-underline'
          >
            {t('viewAll')}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {caseStudies.map((study, i) => (
            <FadeIn key={study.slug} delay={0.1 + i * 0.05}>
              <Link href={`/work/${study.slug}`} className='group block h-full'>
                <Card className='flex h-full flex-col'>
                  <div className='mb-4 flex items-center justify-between'>
                    <span className='text-sm font-medium text-foreground'>
                      {study.company}
                    </span>
                    <span className='rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground'>
                      {study.domain}
                    </span>
                  </div>
                  <p className='mb-4 flex-1 text-sm leading-relaxed text-muted-foreground'>
                    {study.thesis}
                  </p>
                  <ul className='mb-4 space-y-1'>
                    <li className='text-xs text-muted-foreground'>
                      · {study.bullets.b1}
                    </li>
                    <li className='text-xs text-muted-foreground'>
                      · {study.bullets.b2}
                    </li>
                  </ul>
                  <span className='inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors group-hover:text-accent'>
                    {t('readCaseStudy')}
                    <ArrowRight
                      size={12}
                      className='transition-transform group-hover:translate-x-0.5'
                    />
                  </span>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <Link
          href='/work'
          className='mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:hidden link-underline'
        >
          {t('viewAll')}
          <ArrowRight size={14} />
        </Link>
      </FadeIn>
    </section>
  )
}
