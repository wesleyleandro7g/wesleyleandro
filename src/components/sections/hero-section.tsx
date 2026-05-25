'use client'

import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { FadeIn } from '@/components/fade-in'
import { SocialLink } from '@/components/social-link'
import {
  DiscordIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/icons/brand-icons'
import { siteConfig } from '@/utils/data'

export function HeroSection() {
  const t = useTranslations('home.hero')

  return (
    <section className='py-24'>
      <FadeIn delay={0.1}>
        <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
          </span>
          {t('status')}
        </div>

        <h1 className='mb-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl'>
          {t('title')} <br />
          <span className='text-foreground'>{t('titleHighlight')}</span>
        </h1>

        <p className='mb-4 max-w-2xl text-base leading-relaxed text-muted-foreground'>
          {t.rich('intro', {
            important: (chunks) => (
              <strong className='text-foreground'>{chunks}</strong>
            ),
          })}
        </p>

        <p className='mb-8 font-mono text-xs text-muted-foreground'>
          {t('tags')}
        </p>

        <div className='mb-8 flex flex-wrap gap-3'>
          <Link
            href='/work'
            className='inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90'
          >
            {t('ctaWork')}
            <ArrowRight size={16} />
          </Link>
          <Link
            href='/writing'
            className='inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface'
          >
            {t('ctaWriting')}
          </Link>
          <a
            href={`mailto:${siteConfig.contact}`}
            className='inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
          >
            {t('ctaContact')}
          </a>
        </div>

        <div className='flex flex-wrap gap-3'>
          <SocialLink
            href={siteConfig.links.github}
            icon={<Github size={18} />}
            label={t('links.github')}
          />
          <SocialLink
            href={siteConfig.links.linkedin}
            icon={<Linkedin size={18} />}
            label={t('links.linkedin')}
          />
          <SocialLink
            href={siteConfig.links.discord}
            icon={<DiscordIcon className='h-[18px] w-[18px]' />}
            label={t('links.discord')}
          />
          <SocialLink
            href={siteConfig.links.telegram}
            icon={<TelegramIcon className='h-[18px] w-[18px]' />}
            label={t('links.telegram')}
          />
          <SocialLink
            href={siteConfig.links.whatsapp}
            icon={<WhatsAppIcon className='h-[18px] w-[18px]' />}
            label={t('links.whatsapp')}
          />
          <SocialLink
            href='/resume.pdf'
            icon={<FileText size={18} />}
            label={t('links.resume')}
          />
        </div>
      </FadeIn>
    </section>
  )
}
