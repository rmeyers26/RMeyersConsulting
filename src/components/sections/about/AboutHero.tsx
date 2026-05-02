'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 bg-canvas overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <SectionLabel>About</SectionLabel>
          <h1 className="text-xl md:text-2xl font-bold text-ink font-sans mb-6">
            Builders who happen to consult.
          </h1>
          <p className="text-ink-2 text-lg leading-relaxed mb-4">
            RMeyers Consulting exists because too many small teams are held back by tools that don&apos;t quite fit — generic software that almost solves the problem, spreadsheets held together with copy-paste, and manual processes that eat hours nobody has.
          </p>
          <p className="text-ink-2 text-lg leading-relaxed">
            We build the exact tool you need, on the timeline that matters, in a way your team can actually use. Not a 6-month enterprise engagement — a working system in weeks.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
