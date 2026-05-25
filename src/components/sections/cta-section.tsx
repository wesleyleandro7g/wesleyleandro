'use client'

import { useState } from 'react'
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/fade-in'
import { ContactLink } from '@/components/contact-link'
import {
  DiscordIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/icons/brand-icons'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  COPYABLE_CONTACTS,
  type CopyableContactId,
  siteConfig,
} from '@/utils/data'

export function CtaSection() {
  const t = useTranslations('home.cta')
  const [selectedContact, setSelectedContact] =
    useState<CopyableContactId>('email')
  const [copied, setCopied] = useState(false)

  const selectedValue =
    COPYABLE_CONTACTS.find((contact) => contact.id === selectedContact)?.value ??
    siteConfig.contact

  async function copyContact() {
    await navigator.clipboard.writeText(selectedValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <a
              href={`mailto:${siteConfig.contact}`}
              className='group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90'
            >
              <Mail size={16} />
              {t('emailBtn')}
            </a>
            <ContactLink
              href={siteConfig.links.linkedin}
              icon={<Linkedin size={16} />}
              label='LinkedIn'
            />
            <ContactLink
              href={siteConfig.links.github}
              icon={<Github size={16} />}
              label='GitHub'
            />
            <ContactLink
              href={siteConfig.links.discord}
              icon={<DiscordIcon className='h-4 w-4' />}
              label='Discord'
            />
            <ContactLink
              href={siteConfig.links.telegram}
              icon={<TelegramIcon className='h-4 w-4' />}
              label='Telegram'
            />
            <ContactLink
              href={siteConfig.links.whatsapp}
              icon={<WhatsAppIcon className='h-4 w-4' />}
              label='WhatsApp'
            />
          </div>
          <div className='mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground'>
            <span>{t('copyText')}</span>
            <Select
              value={selectedContact}
              onValueChange={(value) =>
                setSelectedContact(value as CopyableContactId)
              }
            >
              <SelectTrigger
                size='sm'
                className='h-7 min-w-[220px] rounded-md border-border bg-surface/50 text-xs'
              >
                <SelectValue>
                  <span className='font-mono text-foreground'>
                    {selectedValue}
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {COPYABLE_CONTACTS.map((contact) => (
                  <SelectItem key={contact.id} value={contact.id}>
                    {t(`contactOptions.${contact.id}`)} — {contact.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              type='button'
              onClick={copyContact}
              aria-label={t('copyContact')}
              className='inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-surface hover:text-foreground'
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
