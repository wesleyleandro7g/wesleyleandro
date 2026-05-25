'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/fade-in'
import { SectionLabel } from '@/components/section-label'
import { data as getData } from '@/utils/data'

export function ExperienceSection() {
  const t = useTranslations('home.experience')
  const tRoot = useTranslations()
  const { experience } = getData(tRoot)

  return (
    <section id='experience' className='py-24'>
      <FadeIn>
        <SectionLabel>{t('label')}</SectionLabel>
        <h2 className='mb-10 text-xl font-medium tracking-tight text-foreground'>
          {t('title')}
        </h2>
        <div className='relative ml-3 space-y-12 border-l border-border'>
          {experience.map((job, i) => (
            <FadeIn key={i} delay={0.05 + i * 0.05}>
              <div className='relative pl-8'>
                <span className='absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-full bg-muted-foreground ring-4 ring-background' />
                <div className='mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                  <h3 className='text-base font-medium text-foreground'>
                    {job.company}
                  </h3>
                  <span className='font-mono text-xs text-muted-foreground'>
                    {job.period}
                  </span>
                </div>
                <p className='mb-2 text-sm text-muted-foreground'>{job.role}</p>
                <p className='max-w-2xl text-sm leading-relaxed text-muted-foreground'>
                  {job.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
