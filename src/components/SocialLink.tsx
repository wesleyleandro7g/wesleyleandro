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
        'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
        primary
          ? 'bg-white text-black hover:bg-neutral-200'
          : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white'
      )}
    >
      {icon}
      {label}
    </a>
  )
}
