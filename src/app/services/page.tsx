import type { Metadata } from 'next'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServiceGrid from '@/components/sections/services/ServiceGrid'
import HomeCTA from '@/components/sections/home/HomeCTA'

export const metadata: Metadata = {
  title: 'Services | RMeyers Consulting',
  description: 'Custom web apps, internal tools, databases, workflow automation, system integrations, and technical consulting.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceGrid />
      <HomeCTA />
    </>
  )
}
