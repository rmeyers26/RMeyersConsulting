'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { techStack } from '@/data/techStack'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function TechStack() {
  const { ref, variants, animate } = useScrollAnimation()
  const doubled = [...techStack, ...techStack] // infinite loop

  return (
    <section className="section-padding bg-void relative overflow-hidden">
      <div className="section-container">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-10 text-center">
          <SectionLabel className="text-center block">Built With</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light font-sans mb-3">
            Modern Stack, Proven Tools
          </h2>
          <p className="text-ghost max-w-lg mx-auto text-sm">
            Flexible stack chosen for speed, scalability, and long-term maintainability.
          </p>
        </motion.div>
      </div>

      {/* Marquee — full bleed */}
      <div className="relative overflow-hidden py-4">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-void to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-void to-transparent" />

        <div
          className="flex gap-3 w-max animate-marquee"
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface font-mono text-sm text-ghost whitespace-nowrap hover:border-cyan/40 hover:text-cyan-dim transition-all duration-200"
            >
              <span className="text-cyan-dim/60 text-xs">//</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      <div className="section-container mt-6">
        <p className="text-center font-mono text-xs text-ghost/40">
          // We pick the right tools — so you&apos;re not locked into the wrong ones.
        </p>
      </div>
    </section>
  )
}
