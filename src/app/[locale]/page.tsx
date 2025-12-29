'use client'

import {
  Github,
  Linkedin,
  FileText,
  Terminal,
  Server,
  Layout,
  Code2,
  Puzzle,
  Palette,
  TrendingUp,
  Lightbulb,
  Users,
  Zap,
  BrainCircuit,
  Clock,
  ShieldCheck,
  Mail,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { FadeIn } from '@/components/FadeIn'
import { SpotlightCard } from '@/components/SpotlightCard'
import { data as dataImport } from '@/utils/data'
import { SocialLink } from '@/components/SocialLink'
import { SkillGroup } from '@/components/SkillGroup'
import { LanguageSelector } from '@/components/language-selector'

export default function Portfolio() {
  const t = useTranslations('home')

  const data = dataImport(t)

  return (
    <main className='min-h-screen bg-neutral-950 text-neutral-200 selection:bg-neutral-700 selection:text-white font-sans'>
      <header className='fixed top-0 z-50 w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-md'>
        <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-6'>
          <span className='text-xl font-bold tracking-tight text-white'>
            WL.
          </span>

          <div className='flex items-center gap-4'>
            <LanguageSelector />
            <a
              href={`mailto:${data.profile.contact}`}
              className='rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition-colors'
            >
              {t('navbar.contact')}
            </a>
          </div>
        </div>
      </header>

      <div className='mx-auto max-w-5xl px-6 pt-32 pb-20'>
        <section className='mb-24'>
          <FadeIn delay={0.1}>
            <div className='inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-neutral-400 mb-6'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              {t('hero.status')}
            </div>
            <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6'>
              {t('hero.title')} <br />
              <span className='text-transparent bg-clip-text bg-linear-to-r from-neutral-200 to-neutral-600'>
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className='max-w-xl text-lg text-neutral-400 mb-8 leading-relaxed'>
              {t.rich('hero.intro', {
                name: data.profile.name,
                role: data.profile.role,
                important: (chunks) => (
                  <strong className='text-white'>{chunks}</strong>
                ),
                highlight: (chunks) => (
                  <span className='text-white'>{chunks}</span>
                ),
              })}
            </p>

            <div className='flex flex-wrap gap-4'>
              <SocialLink
                href={data.profile.links.github}
                icon={<Github size={20} />}
                label='GitHub'
              />
              <SocialLink
                href={data.profile.links.linkedin}
                icon={<Linkedin size={20} />}
                label='LinkedIn'
              />
              <SocialLink
                href='/resume.pdf'
                icon={<FileText size={20} />}
                label='Resume'
                primary
              />
            </div>
          </FadeIn>
        </section>

        <section className='mb-24 grid grid-cols-1 gap-4 sm:grid-cols-3'>
          {data.stats.map((stat, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <SpotlightCard className='flex flex-col items-center justify-center text-center h-32'>
                <span className='text-3xl font-bold text-white'>
                  {stat.value}
                </span>
                <p className='text-sm text-neutral-500'>{stat.label}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </section>

        <section className='mb-24'>
          <FadeIn>
            <h2 className='text-2xl font-semibold text-white mb-8 flex items-center gap-2'>
              <Terminal size={24} /> {t('tech.title')}
            </h2>
            <div className='space-y-8'>
              <SkillGroup
                title={t('tech.frontend')}
                skills={data.skills.frontend}
                icon={<Layout size={18} />}
              />
              <SkillGroup
                title={t('tech.backend')}
                skills={data.skills.backend}
                icon={<Server size={18} />}
              />
              <SkillGroup
                title={t('tech.tools')}
                skills={data.skills.tools}
                icon={<Terminal size={18} />}
              />
            </div>
          </FadeIn>
        </section>

        <section className='mb-24'>
          <FadeIn>
            <h2 className='text-2xl font-semibold text-white mb-8 flex items-center gap-2'>
              <Lightbulb size={24} className='text-yellow-400' />
              {t('services.title')}
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {data.contributions.map((item, i) => (
                <SpotlightCard
                  key={i}
                  className='p-6 h-full flex flex-col justify-start'
                >
                  <div className='mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-800 text-white'>
                    {i === 0 && <Code2 size={20} />}
                    {i === 1 && <Puzzle size={20} />}
                    {i === 2 && <Palette size={20} />}
                    {i === 3 && <TrendingUp size={20} />}
                  </div>
                  <h3 className='text-lg font-medium text-white mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-neutral-400 text-sm leading-relaxed'>
                    {item.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className='mb-24'>
          <FadeIn>
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-2xl font-semibold text-white flex items-center gap-2'>
                <ShieldCheck size={24} className='text-green-400' />
                {t('philosophy.title')}
              </h2>
              <span className='hidden sm:inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20'>
                {t('philosophy.availability')}
              </span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {data.softSkills.map((skill, i) => (
                <div
                  key={i}
                  className='group relative rounded-xl border border-neutral-800 bg-neutral-900/30 p-5 hover:bg-neutral-900/60 transition-colors'
                >
                  <div className='mb-3 inline-flex items-center justify-center rounded-lg bg-neutral-800 p-2 text-neutral-200 group-hover:text-white group-hover:bg-neutral-700 transition-colors'>
                    {i === 0 && <Clock size={18} />}
                    {i === 1 && <Users size={18} />}
                    {i === 2 && <BrainCircuit size={18} />}
                    {i === 3 && <Zap size={18} />}
                  </div>
                  <h3 className='text-base font-semibold text-white mb-2'>
                    {skill.title}
                  </h3>
                  <p className='text-xs text-neutral-400 leading-relaxed'>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className='mb-24'>
          <FadeIn>
            <h2 className='text-2xl font-semibold text-white mb-8'>
              {t('experience.title')}
            </h2>
            <div className='relative border-l border-neutral-800 ml-3 space-y-12'>
              {data.experience.map((job, i) => (
                <div key={i} className='relative pl-8'>
                  <span className='absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-full bg-neutral-600 ring-4 ring-neutral-950' />
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
                    <h3 className='text-lg font-medium text-white'>
                      {job.company}
                    </h3>
                    <span className='text-xs font-mono text-neutral-500'>
                      {job.period}
                    </span>
                  </div>
                  <p className='text-sm text-neutral-400 mb-2'>{job.role}</p>
                  <p className='text-neutral-500 leading-relaxed max-w-2xl'>
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className='mb-32 mt-16'>
          <FadeIn>
            <div className='relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/30 px-6 py-20 text-center sm:px-12 lg:px-16'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-white/5 blur-[100px] rounded-full pointer-events-none' />

              <h2 className='relative z-10 mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                {t('cta.title')}{' '}
                <span className='text-neutral-400'>
                  {t('cta.titleHighlight')}
                </span>
              </h2>

              <p className='relative z-10 mx-auto mt-6 max-w-xl text-lg text-neutral-400'>
                {t('cta.description')}
              </p>

              <div className='relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
                <a
                  href={`mailto:${data.profile.contact}`}
                  className='group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  <Mail
                    size={18}
                    className='transition-transform group-hover:-translate-y-0.5'
                  />
                  {t('cta.emailBtn')}
                </a>

                <div className='flex gap-4'>
                  <a
                    href={data.profile.links.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-700 hover:text-white'
                  >
                    <Linkedin
                      size={18}
                      className='text-blue-400 transition-transform group-hover:scale-110'
                    />
                    LinkedIn
                  </a>

                  <a
                    href={data.profile.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-700 hover:text-white'
                  >
                    <Github
                      size={18}
                      className='text-white transition-transform group-hover:scale-110'
                    />
                    GitHub
                  </a>
                </div>
              </div>

              <p className='relative z-10 mt-8 text-xs text-neutral-500'>
                {t('cta.copyText')}{' '}
                <span className='text-neutral-300 select-all font-mono'>
                  {data.profile.contact}
                </span>
              </p>
            </div>
          </FadeIn>
        </section>

        <footer className='border-t border-white/5 pt-10 pb-20 text-center'>
          <p className='text-neutral-600 text-sm'>
            &copy; {new Date().getFullYear()} Wesley Leandro.{' '}
            {t('footer.rights')}
          </p>
        </footer>
      </div>
    </main>
  )
}
