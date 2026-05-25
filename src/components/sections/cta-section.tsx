'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/fade-in'
import { siteConfig } from '@/utils/data'

export function CtaSection() {
  const t = useTranslations('home.cta')

  return (
    <section className='py-24'>
      <FadeIn>
        <div className='relative overflow-hidden rounded-2xl border border-border bg-surface/30 px-6 py-16 text-center sm:px-12'>
          <h2 className='mx-auto max-w-xl text-2xl font-medium tracking-tight text-foreground sm:text-3xl'>
            {t('title')}
          </h2>
          <p className='mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground'>
            {t('description')}
          </p>
          <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
            <a
              href={`mailto:${siteConfig.contact}`}
              className='group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90'
            >
              <Mail size={16} />
              {t('emailBtn')}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface'
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={siteConfig.links.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface'
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
          <p className='mt-6 text-xs text-muted-foreground'>
            {t('copyText')}{' '}
            <span className='select-all font-mono text-foreground'>
              {siteConfig.contact}
            </span>
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
