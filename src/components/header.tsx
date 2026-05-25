'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { LanguageSelector } from '@/components/language-selector'
import { siteConfig } from '@/utils/data'
import { cn } from '@/lib/utils'

export function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()

  const links = [
    { href: '/work' as const, label: t('work') },
    { href: '/writing' as const, label: t('writing') },
    { href: '/#about' as const, label: t('about') },
  ]

  return (
    <header className='fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
        <Link
          href='/'
          className='text-lg font-semibold tracking-tight text-foreground'
        >
          WL.
        </Link>

        <nav className='hidden items-center gap-6 sm:flex'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm text-muted-foreground transition-colors hover:text-foreground link-underline',
                pathname === link.href && 'text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <LanguageSelector />
          <a
            href={`mailto:${siteConfig.contact}`}
            className='rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90'
          >
            {t('contact')}
          </a>
        </div>
      </div>
    </header>
  )
}
