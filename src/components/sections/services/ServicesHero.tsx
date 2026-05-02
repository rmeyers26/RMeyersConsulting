'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-16 bg-canvas overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Services</SectionLabel>
          <h1 className="text-xl md:text-2xl font-bold text-ink font-sans mb-5">
            What We Build
          </h1>
          <p className="text-ink-2 text-lg max-w-2xl">
            Every service starts with understanding your actual workflow — not a generic template.
            We design and build solutions that match how your team already operates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
