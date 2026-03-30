'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { recentWins } from '@/data/wins'
import { useScrollAnimation, staggerContainer, fadeUpItem } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export default function RecentWins() {
  const { ref, variants, animate } = useScrollAnimation()

  return (
    <section className="section-padding bg-void relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,212,255,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-12">
          <SectionLabel color="green">Proof It Works</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light font-sans mb-4">
            Real Results for Real Teams
          </h2>
          <p className="text-ghost max-w-xl">
            No case study fluff — just measurable outcomes from recent projects.
          </p>
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
              className={cn(
                'rounded-xl border bg-surface/60 p-6 relative overflow-hidden',
                'border-border hover:border-green/30 transition-all duration-300 group'
              )}
            >
              {/* Top accent */}
              <div className={cn(
                'absolute top-0 left-0 right-0 h-[2px]',
                i % 2 === 0 ? 'bg-cyan/40' : 'bg-green/40'
              )} />

              <div className="flex items-start gap-4">
                <span className="text-3xl">{win.icon}</span>
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-xs text-ghost/60 block mb-1">
                    {win.category}
                  </span>
                  <h3 className="text-slate-light font-semibold mb-3 font-sans">
                    {win.headline}
                  </h3>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={cn(
                      'font-mono font-bold text-2xl',
                      i % 2 === 0 ? 'text-cyan' : 'text-green'
                    )}>
                      {win.stat}
                    </span>
                    <span className="font-mono text-sm text-ghost/70">
                      {win.statLabel}
                    </span>
                  </div>

                  <p className="text-ghost text-sm leading-relaxed">
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
