'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { CapabilityRow } from '@/components/capability-row'
import { data as getData } from '@/utils/data'

export function CapabilitiesSection() {
  const t = useTranslations('home.capabilities')
  const tRoot = useTranslations()
  const { capabilities } = getData(tRoot)

  return (
    <section className='py-24'>
      <FadeIn>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='mb-8 text-xl font-medium tracking-tight text-foreground'>
          {t('title')}
        </h2>
        <div>
          {capabilities.map((group) => (
            <CapabilityRow
              key={group.key}
              title={group.title}
              description={group.description}
              skills={group.skills}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
