import { cn } from '@/lib/utils'

interface ContactLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
}

function isWebLink(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function ContactLink({ href, icon, label, className }: ContactLinkProps) {
  const external = isWebLink(href)

  return (
    <a
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface',
        className
      )}
    >
      {icon}
      {label}
    </a>
  )
}
