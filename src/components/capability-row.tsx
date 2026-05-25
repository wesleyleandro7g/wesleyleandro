interface CapabilityRowProps {
  title: string
  description: string
  skills: string[]
}

export function CapabilityRow({
  title,
  description,
  skills,
}: CapabilityRowProps) {
  return (
    <div className='flex flex-col gap-3 border-b border-border/60 py-5 last:border-0 sm:flex-row sm:items-center sm:justify-between'>
      <div className='sm:max-w-xs'>
        <h3 className='text-sm font-medium text-foreground'>{title}</h3>
        <p className='mt-1 text-xs text-muted-foreground'>{description}</p>
      </div>
      <div className='flex flex-wrap gap-1.5 sm:justify-end'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='rounded-md border border-border bg-surface/50 px-2 py-0.5 font-mono text-xs text-muted-foreground'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
