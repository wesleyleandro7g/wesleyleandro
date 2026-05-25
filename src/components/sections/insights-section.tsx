'use client'

import { ArrowRight, ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { Card } from '@/components/card'
import { data as getData } from '@/utils/data'

export function InsightsSection() {
  const t = useTranslations('home.insights')
  const tRoot = useTranslations()
  const { articles } = getData(tRoot)

  return (
    <section className='py-24'>
      <FadeIn>
        <div className='mb-10 flex items-end justify-between'>
          <div>
            <SectionLabel>{t('label')}</SectionLabel>
            <h2 className='mb-2 text-xl font-medium tracking-tight text-foreground'>
              {t('title')}
            </h2>
            <p className='max-w-xl text-sm text-muted-foreground'>
              {t('intro')}
            </p>
          </div>
          <Link
            href='/writing'
            className='hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex link-underline'
          >
            {t('viewAll')}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={0.05 + i * 0.05}>
              <a
                href={article.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group block h-full'
              >
                <Card className='flex h-full flex-col'>
                  <div className='mb-3 flex items-center justify-between'>
                    <span className='rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground'>
                      {article.platform}
                    </span>
                    <ExternalLink
                      size={14}
                      className='text-muted-foreground transition-colors group-hover:text-foreground'
                    />
                  </div>
                  <h3 className='mb-2 text-sm font-medium leading-snug text-foreground'>
                    {article.title}
                  </h3>
                  <p className='flex-1 text-xs leading-relaxed text-muted-foreground'>
                    {article.excerpt}
                  </p>
                </Card>
              </a>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
