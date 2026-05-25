'use client'

import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('home.footer')

  return (
    <footer className='border-t border-border/60 py-10 text-center'>
      <p className='text-sm text-muted-foreground'>
        &copy; {new Date().getFullYear()} Wesley Leandro. {t('rights')}
      </p>
    </footer>
  )
}
