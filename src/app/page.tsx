import { Suspense } from 'react'
import HeroSection from '@/components/sections/home/HeroSection'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import RecentWins from '@/components/sections/home/RecentWins'
import ProcessPreview from '@/components/sections/home/ProcessPreview'
import HomeCTA from '@/components/sections/home/HomeCTA'

export default function Home() {
  return (
    <>
      <Suspense>
        <HeroSection />
      </Suspense>
      <ServicesOverview />
      <RecentWins />
      <ProcessPreview />
      <HomeCTA />
    </>
  )
}
