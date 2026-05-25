'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import {
  DiscordIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/icons/brand-icons'
import { cn } from '@/lib/utils'
import { CONTACT_LINKS, type CopyableContactId } from '@/utils/data'

const CONTACT_ICONS: Record<
  CopyableContactId,
  React.ComponentType<{ className?: string }>
> = {
  email: Mail,
  discord: DiscordIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsAppIcon,
}

function isWebLink(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function ContactMenu() {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const longPressTriggered = useRef(false)

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  function clearLongPressTimer() {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
  }

  function handlePointerDown() {
    longPressTriggered.current = false
    clearLongPressTimer()
    longPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true
      setOpen(true)
    }, 400)
  }

  function handleClick() {
    if (longPressTriggered.current) {
      longPressTriggered.current = false
      return
    }
    setOpen((current) => !current)
  }

  function handlePointerUp() {
    clearLongPressTimer()
  }

  return (
    <div ref={menuRef} className='relative'>
      <button
        type='button'
        aria-haspopup='menu'
        aria-expanded={open}
        onClick={handleClick}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={clearLongPressTimer}
        onPointerCancel={clearLongPressTimer}
        className='inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90'
      >
        {t('contact')}
        <ChevronDown
          size={14}
          className={cn('transition-transform', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          role='menu'
          className='absolute right-0 z-50 mt-2 min-w-[240px] overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-lg'
        >
          {CONTACT_LINKS.map((contact) => {
            const Icon = CONTACT_ICONS[contact.id]
            const external = isWebLink(contact.href)

            return (
              <a
                key={contact.id}
                role='menuitem'
                href={contact.href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-surface'
              >
                <Icon className='h-4 w-4 shrink-0 text-muted-foreground' />
                <div className='min-w-0 text-left'>
                  <p className='font-medium text-foreground'>
                    {t(`contactOptions.${contact.id}`)}
                  </p>
                  <p className='truncate font-mono text-xs text-muted-foreground'>
                    {contact.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
