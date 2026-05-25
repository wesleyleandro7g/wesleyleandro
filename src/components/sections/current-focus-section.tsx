'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { Card } from '@/components/card'
import { data as getData } from '@/utils/data'

export function CurrentFocusSection() {
  const t = useTranslations('home.focus')
  const tRoot = useTranslations()
  const { focusAreas } = getData(tRoot)

  return (
    <section id='focus' className='py-24'>
      <FadeIn>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='mb-2 text-xl font-medium tracking-tight text-foreground'>
          {t('title')}
        </h2>
        <p className='mb-10 max-w-xl text-sm text-muted-foreground'>
          {t('intro')}
        </p>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {focusAreas.map((area, i) => (
            <FadeIn key={i} delay={0.05 + i * 0.03}>
              <Card className='h-full'>
                <div className='mb-3 flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-accent' />
                  <h3 className='text-sm font-medium text-foreground'>
                    {area.title}
                  </h3>
                </div>
                <p className='text-xs leading-relaxed text-muted-foreground'>
                  {area.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
