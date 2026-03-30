'use client'

import { motion } from 'framer-motion'
import GlowButton from '@/components/ui/GlowButton'
import GlowOrb from '@/components/effects/GlowOrb'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function HomeCTA() {
  const { ref, variants, animate } = useScrollAnimation()

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-abyss to-void">
      <GlowOrb color="cyan" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={animate}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="font-mono text-xs text-cyan-dim tracking-[0.2em] uppercase mb-4 block">
            // Ready when you are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-light font-sans mb-6 leading-tight">
            Let&apos;s Fix Your{' '}
            <span className="text-gradient-cyan">Workflow</span>
          </h2>
          <p className="text-ghost text-lg mb-10">
            No sales pitch — just a working session on your current process.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <GlowButton href="/contact" variant="primary" size="lg">
              Get a Working Plan in 30 Min
            </GlowButton>
            <GlowButton href="/services" variant="ghost" size="lg">
              See What We Build
            </GlowButton>
          </div>

          <p className="mt-8 font-mono text-xs text-ghost/50">
            // We respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
