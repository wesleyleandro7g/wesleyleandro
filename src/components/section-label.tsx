interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className='mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground'>
      {children}
    </p>
  )
}
