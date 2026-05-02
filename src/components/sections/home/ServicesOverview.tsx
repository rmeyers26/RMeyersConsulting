'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceCard from '@/components/cards/ServiceCard'
import { services } from '@/data/services'
import { useScrollAnimation, staggerContainer } from '@/hooks/useScrollAnimation'

export default function ServicesOverview() {
  const { ref, variants, animate } = useScrollAnimation()

  const featured = services.slice(0, 6)

  return (
    <section id="what-we-build" className="section-padding bg-canvas relative overflow-hidden scroll-mt-28 md:scroll-mt-24">
      <div className="section-container">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-12">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-xl font-bold text-ink font-sans mb-0">
            We build what you actually need.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="font-sans text-sm text-amber hover:text-amber-dim transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
