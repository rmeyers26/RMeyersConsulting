'use client'

import { motion } from 'framer-motion'
import GlowButton from '@/components/ui/GlowButton'
import SectionLabel from '@/components/ui/SectionLabel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function HomeCTA() {
  const { ref, variants, animate } = useScrollAnimation()

  return (
    <section className="section-padding relative overflow-hidden bg-surface">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animate}
          className="text-center max-w-2xl mx-auto"
        >
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-xl md:text-2xl font-bold text-ink font-sans mb-6 leading-tight">
            Ready to start?
          </h2>
          <p className="text-ink-2 text-lg mb-10">
            Tell us what you&apos;re building. We&apos;ll take it from there.
          </p>

          <GlowButton href="/contact" variant="primary" size="lg">
            Get a Working Plan in 30 Min
          </GlowButton>

          <p className="mt-8 text-xs text-ink-3">
            We respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
