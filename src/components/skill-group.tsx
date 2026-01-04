interface SkillGroupProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

export function SkillGroup({ title, skills, icon }: SkillGroupProps) {
  return (
    <div>
      <h3 className='text-sm font-medium text-neutral-400 mb-3 flex items-center gap-2'>
        {icon} {title}
      </h3>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-1 text-sm text-neutral-300 hover:border-neutral-700 transition-colors cursor-default'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
