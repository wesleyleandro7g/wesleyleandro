import { cn } from '@/lib/utils'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  primary?: boolean
}

export function SocialLink(props: SocialLinkProps) {
  const { href, icon, label, primary = false } = props

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
        primary
          ? 'border-border bg-foreground text-background hover:bg-foreground/90'
          : 'border-border bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground'
      )}
    >
      {icon}
      {label}
    </a>
  )
}
