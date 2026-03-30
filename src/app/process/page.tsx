import type { Metadata } from 'next'
import ProcessHero from '@/components/sections/process/ProcessHero'
import ProcessPipeline from '@/components/sections/process/ProcessPipeline'
import HomeCTA from '@/components/sections/home/HomeCTA'

export const metadata: Metadata = {
  title: 'Our Process | RMeyers Consulting',
  description: 'A clear 5-step process from discovery to ongoing support. No surprises, no scope creep — just working software.',
}

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessPipeline />
      <HomeCTA />
    </>
  )
}
