import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-surface/50 p-6',
        hover && 'transition-colors hover:border-border/80 hover:bg-surface',
        className
      )}
    >
      {children}
    </div>
  )
}
