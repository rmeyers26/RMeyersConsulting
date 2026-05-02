'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ProcessHero() {
  return (
    <section className="relative pt-32 pb-16 bg-canvas overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Process</SectionLabel>
          <h1 className="text-xl md:text-2xl font-bold text-ink font-sans mb-5">
            How We Work
          </h1>
          <p className="text-ink-2 text-lg max-w-2xl">
            No guesswork, no surprises. Our process is designed to get you working software as fast as possible — without cutting corners you&apos;ll regret later.
          </p>
          <p className="text-xs text-ink-3 mt-4">
            Click any step to expand details, timeline, and deliverables.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
