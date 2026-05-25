'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'

export function AboutSection() {
  const t = useTranslations('home.about')

  return (
    <section id='about' className='py-24'>
      <FadeIn>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='mb-8 text-xl font-medium tracking-tight text-foreground'>
          {t('title')}
        </h2>
        <div className='max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground'>
          <p>{t('paragraphs.p1')}</p>
          <p>{t('paragraphs.p2')}</p>
          <p>{t('paragraphs.p3')}</p>
          <p>{t('paragraphs.p4')}</p>
          <p className='border-l-2 border-accent/40 pl-4 text-sm text-foreground'>
            {t('closing')}
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
