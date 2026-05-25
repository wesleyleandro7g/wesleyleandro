'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { Card } from '@/components/card'
import { data as getData } from '@/utils/data'

export function ImpactSection() {
  const t = useTranslations('home.impact')
  const tRoot = useTranslations()
  const { impact } = getData(tRoot)

  return (
    <section id='impact' className='py-24'>
      <FadeIn>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='mb-10 text-xl font-medium tracking-tight text-foreground'>
          {t('title')}
        </h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {impact.map((item, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.05}>
              <Card className='flex flex-col gap-1'>
                <span className='font-mono text-4xl font-medium text-foreground'>
                  {item.value}
                </span>
                <span className='text-sm font-medium text-foreground'>
                  {item.label}
                </span>
                <span className='text-xs text-muted-foreground'>
                  {item.context}
                </span>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
