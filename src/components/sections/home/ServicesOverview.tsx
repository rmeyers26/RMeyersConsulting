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
    <section id="what-we-build" className="section-padding bg-abyss relative overflow-hidden scroll-mt-28 md:scroll-mt-24">
      <div className="section-container">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-12">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light font-sans mb-4">
            Tools That Actually Fit{' '}
            <span className="text-gradient-cyan">Your Workflow</span>
          </h2>
          <p className="text-ghost max-w-xl">
            Tap any card to see a code example of how we approach that problem.
          </p>
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
            className="font-mono text-sm text-cyan-dim hover:text-cyan transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
