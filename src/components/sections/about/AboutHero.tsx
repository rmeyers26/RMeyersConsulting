'use client'

import { motion } from 'framer-motion'
import GlowOrb from '@/components/effects/GlowOrb'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 bg-void overflow-hidden">
      <GlowOrb color="purple" size="lg" className="-top-20 -right-20" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs text-cyan-dim mb-3 block">
            ~/rmeyers &gt; about
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-light font-sans mb-6">
            We&apos;re Builders Who{' '}
            <span className="text-gradient-cyan">Happen to Consult</span>
          </h1>
          <p className="text-ghost text-lg leading-relaxed mb-4">
            RMeyers Consulting exists because too many small teams are held back by tools that don&apos;t quite fit — generic software that almost solves the problem, spreadsheets held together with copy-paste, and manual processes that eat hours nobody has.
          </p>
          <p className="text-ghost text-lg leading-relaxed">
            We build the exact tool you need, on the timeline that matters, in a way your team can actually use. Not a 6-month enterprise engagement — a working system in weeks.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
