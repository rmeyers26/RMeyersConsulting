import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/AboutHero'
import ValuesSection from '@/components/sections/about/ValuesSection'
import HomeCTA from '@/components/sections/home/HomeCTA'

export const metadata: Metadata = {
  title: 'About | RMeyers Consulting',
  description: 'We\'re builders who happen to consult. We build the exact tool you need, on the timeline that matters.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <HomeCTA />
    </>
  )
}
