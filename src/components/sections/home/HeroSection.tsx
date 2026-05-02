'use client'

import { motion } from 'framer-motion'
import GlowButton from '@/components/ui/GlowButton'
import SectionLabel from '@/components/ui/SectionLabel'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas hero-gradient">
      <div className="section-container relative z-10 text-center max-w-4xl mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <SectionLabel>Engineering Consulting</SectionLabel>
          <h1 className="font-display font-normal text-ink text-2xl sm:text-3xl leading-[1.05] tracking-tight mb-8">
            Software that fits<br />
            how you work.
          </h1>
          <p className="text-ink-2 text-lg max-w-md mb-12">
            Built for your team. Not for the general case.
          </p>
          <GlowButton href="/contact" variant="primary" size="lg">
            Start a Project
          </GlowButton>
        </motion.div>
      </div>
    </section>
  )
}
