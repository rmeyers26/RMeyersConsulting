'use client'

import { motion } from 'framer-motion'
import GlowOrb from '@/components/effects/GlowOrb'

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-16 bg-void overflow-hidden">
      <GlowOrb color="cyan" size="lg" className="-top-20 -right-20" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url(/images/circuit-bg.svg)',
          backgroundSize: '200px 200px',
        }}
      />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-green-dim mb-3 block">
            ~/rmeyers &gt; services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-light font-sans mb-5">
            What We Build
          </h1>
          <p className="text-ghost text-lg max-w-2xl">
            Every service starts with understanding your actual workflow — not a generic template.
            Tap any card to see a real code example of how we solve that type of problem.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
