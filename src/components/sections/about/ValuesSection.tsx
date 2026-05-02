'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const values = [
  {
    comment: "We build what you actually need, not what's trendy",
    detail:
      "Every recommendation starts with your specific constraints and goals — not the latest framework everyone's excited about. We're opinionated about quality, pragmatic about tools.",
  },
  {
    comment: "We explain the how, not just the what",
    detail:
      "We don't hand you a black box. You'll understand what we built, why we built it that way, and how to hand it off or extend it later. Documentation isn't an afterthought.",
  },
  {
    comment: "We write code we'd want to maintain",
    detail:
      "Short-term speed at the cost of future pain isn't a tradeoff we make. We write clear, tested, well-structured code — because someone (usually you, or future us) will need to touch it again.",
  },
  {
    comment: "We're done when you're successful, not when we're paid",
    detail:
      "Launch is the beginning, not the finish line. Every project includes training, documentation, and a support period. Your team needs to actually use this thing — that's the real measure of success.",
  },
]

export default function ValuesSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const { ref, variants, animate } = useScrollAnimation()

  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="section-container">
        <motion.div ref={ref} variants={variants} initial="hidden" animate={animate} className="mb-10">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="text-xl font-bold text-ink font-sans">
            How We Actually Operate
          </h2>
        </motion.div>

        <div className="space-y-3 max-w-2xl">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-canvas overflow-hidden cursor-pointer group hover:border-amber/30 transition-all duration-300"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <span className="font-sans text-sm text-ink font-medium">
                  {v.comment}
                </span>
                <motion.span
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  className="text-ink-3 text-sm shrink-0 ml-3"
                >
                  ▾
                </motion.span>
              </div>

              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-ink-2 text-sm leading-relaxed border-t border-border pt-4">
                      {v.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
