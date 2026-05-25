import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ImpactSection } from '@/components/sections/impact-section'
import { SelectedWorkSection } from '@/components/sections/selected-work-section'
import { CurrentFocusSection } from '@/components/sections/current-focus-section'
import { AboutSection } from '@/components/sections/about-section'
import { CapabilitiesSection } from '@/components/sections/capabilities-section'
import { InsightsSection } from '@/components/sections/insights-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { CtaSection } from '@/components/sections/cta-section'
import { generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return generatePageMetadata(locale, 'home')
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='grid-bg min-h-screen bg-background text-foreground selection:bg-muted selection:text-foreground'>
        <div className='mx-auto max-w-6xl px-6 pt-24 pb-12'>
          <HeroSection />
          <ImpactSection />
          <SelectedWorkSection />
          <CurrentFocusSection />
          <AboutSection />
          <CapabilitiesSection />
          <InsightsSection />
          <ExperienceSection />
          <CtaSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
