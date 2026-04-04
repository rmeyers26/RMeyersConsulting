'use client'

import { motion } from 'framer-motion'
import GlowOrb from '@/components/effects/GlowOrb'

export default function ProcessHero() {
  return (
    <section className="relative pt-32 pb-16 bg-void overflow-hidden">
      <GlowOrb color="green" size="lg" className="-top-20 -left-20" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-green-dim mb-3 block">
            ~/rmeyers &gt; process --verbose
          </span>
          <h1 className="text-xl md:text-2xl font-bold text-slate-light font-sans mb-5">
            How We Work
          </h1>
          <p className="text-ghost text-lg max-w-2xl">
            No guesswork, no surprises. Our process is designed to get you working software as fast as possible — without cutting corners you&apos;ll regret later.
          </p>
          <p className="font-mono text-xs text-ghost/50 mt-4">
            // Click any step to expand details, timeline, and deliverables
          </p>
        </motion.div>
      </div>
    </section>
  )
}
