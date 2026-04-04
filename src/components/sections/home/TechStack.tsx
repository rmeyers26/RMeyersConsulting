'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { techStack } from '@/data/techStack'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function TechStack() {
  const { ref, variants, animate } = useScrollAnimation()
  const categoryOrder = ['Frontend', 'Backend', 'Database', 'Automation', 'Integration', 'Cloud', 'Language', 'Data']
  const groupedTech = techStack.reduce<Record<string, string[]>>((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = []
    acc[tech.category].push(tech.name)
    return acc
  }, {})
  const sortedCategories = Object.keys(groupedTech).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a)
    const bIndex = categoryOrder.indexOf(b)
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b)
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  })

  return (
    <section id="built-with" className="section-padding bg-void relative overflow-hidden scroll-mt-28 md:scroll-mt-24">
      <div className="section-container">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-10 text-center">
          <SectionLabel className="text-center block">Built With</SectionLabel>
          <h2 className="text-xl font-bold text-slate-light font-sans mb-3">
            Modern Stack, Proven Tools
          </h2>
          <p className="text-ghost max-w-lg mx-auto text-sm">
            Flexible stack chosen for speed, scalability, and long-term maintainability.
          </p>
        </motion.div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {sortedCategories.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-border bg-surface/60 p-4 md:p-5"
            >
              <h3 className="font-sans font-semibold text-base sm:text-lg text-slate-light mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {groupedTech[category].map((techName) => (
                  <span
                    key={`${category}-${techName}`}
                    className="inline-flex max-w-full items-center gap-1 px-3 py-1.5 rounded-md border border-border/80 bg-void/40 font-mono text-2xs leading-tight sm:text-sm text-ghost break-words"
                  >
                    <span className="text-cyan-dim/60 text-2xs sm:text-xs">//</span>
                    {techName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-container mt-8">
        <p className="text-center font-mono text-xs text-ghost/40">
          // We pick the right tools — so you&apos;re not locked into the wrong ones.
        </p>
      </div>
    </section>
  )
}
