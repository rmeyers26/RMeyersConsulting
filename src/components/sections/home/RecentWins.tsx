'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { recentWins } from '@/data/wins'
import { useScrollAnimation, staggerContainer, fadeUpItem } from '@/hooks/useScrollAnimation'

export default function RecentWins() {
  const { ref, variants, animate } = useScrollAnimation()

  return (
    <section id="results" className="section-padding bg-surface relative overflow-hidden scroll-mt-28 md:scroll-mt-24">
      <div className="section-container relative z-10">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-12">
          <SectionLabel>Results</SectionLabel>
          <h2 className="text-xl font-bold text-ink font-sans mb-0">
            The work, measured.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {recentWins.map((win, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              className="rounded-xl border bg-canvas p-6 relative overflow-hidden border-border hover:border-amber/30 transition-all duration-300 hover:shadow-card-hover group"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber/30" />

              <div className="flex items-start gap-4">
                <span className="text-xl">{win.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-xs text-ink-3 block mb-1">
                    {win.category}
                  </span>
                  <h3 className="text-ink font-semibold mb-3 font-sans">
                    {win.headline}
                  </h3>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-sans font-bold text-xl text-amber">
                      {win.stat}
                    </span>
                    <span className="font-sans text-sm text-ink-3">
                      {win.statLabel}
                    </span>
                  </div>

                  <p className="text-ink-2 text-sm leading-relaxed">
                    {win.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
