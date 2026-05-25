import { ArrowRight, ExternalLink } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionLabel } from '@/components/section-label'
import { FadeIn } from '@/components/fade-in'
import { Card } from '@/components/card'
import { data as getData } from '@/utils/data'
import { generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return generatePageMetadata(locale, 'writing')
}

export default async function WritingPage() {
  const t = await getTranslations('writingPage')
  const tRoot = await getTranslations()
  const { articles, writingTopics } = getData(tRoot)

  return (
    <>
      <Header />
      <main className='grid-bg min-h-screen bg-background text-foreground'>
        <div className='mx-auto max-w-6xl px-6 pt-24 pb-12'>
          <FadeIn>
            <SectionLabel>{t('label')}</SectionLabel>
            <h1 className='mb-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl'>
              {t('title')}
            </h1>
            <p className='mb-16 max-w-2xl text-base leading-relaxed text-muted-foreground'>
              {t('description')}
            </p>
          </FadeIn>

          <section className='mb-20'>
            <FadeIn>
              <SectionLabel>{t('published.label')}</SectionLabel>
              <h2 className='mb-8 text-xl font-medium tracking-tight text-foreground'>
                {t('published.title')}
              </h2>
            </FadeIn>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {articles.map((article, i) => (
                <FadeIn key={article.id} delay={0.05 + i * 0.05}>
                  <a
                    href={article.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group block h-full'
                  >
                    <Card className='flex h-full flex-col'>
                      <div className='mb-3 flex items-center justify-between'>
                        <span className='rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground'>
                          {article.platform}
                        </span>
                        <ExternalLink
                          size={14}
                          className='text-muted-foreground transition-colors group-hover:text-foreground'
                        />
                      </div>
                      <h3 className='mb-2 text-sm font-medium leading-snug text-foreground'>
                        {article.title}
                      </h3>
                      <p className='flex-1 text-xs leading-relaxed text-muted-foreground'>
                        {article.excerpt}
                      </p>
                      <span className='mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground'>
                        Read on {article.platform}
                        <ArrowRight
                          size={12}
                          className='transition-transform group-hover:translate-x-0.5'
                        />
                      </span>
                    </Card>
                  </a>
                </FadeIn>
              ))}
            </div>

            <p className='mt-6 text-sm text-muted-foreground'>
              {t('published.empty')}
            </p>
          </section>

          <section>
            <FadeIn>
              <SectionLabel>{t('topics.label')}</SectionLabel>
              <h2 className='mb-8 text-xl font-medium tracking-tight text-foreground'>
                {t('topics.title')}
              </h2>
            </FadeIn>

            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {writingTopics.map((topic, i) => (
                <FadeIn key={i} delay={0.03 + i * 0.02}>
                  <Card hover={false} className='py-4'>
                    <div className='flex items-start gap-2'>
                      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
                      <p className='text-sm text-muted-foreground'>{topic}</p>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
