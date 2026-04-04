'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import GlowButton from '@/components/ui/GlowButton'
import GlowOrb from '@/components/effects/GlowOrb'
import { terminalScenarios } from '@/data/terminalLines'
import { cn } from '@/lib/utils'

type Phase = 'typing-problem' | 'pause-1' | 'typing-cmd' | 'typing-steps' | 'done' | 'pause-2'

export default function HeroSection() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing-problem')
  const [problemText, setProblemText] = useState('')
  const [stepsDone, setStepsDone] = useState(0)
  const [cmdDone, setCmdDone] = useState(false)
  const [resultDone, setResultDone] = useState(false)
  // Start as false (matches SSR output). After mount, read the actual screen size.
  // This avoids a hydration mismatch while still enabling 3D on large screens.
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const scenario = terminalScenarios[scenarioIdx]

  // Detect large screen to conditionally enable 3D transform
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setIsLargeScreen(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Disable 3D tilt on mobile/tablet or when reduced motion is preferred
  const enable3D = isLargeScreen && !prefersReducedMotion

  // Reset when scenario changes
  useEffect(() => {
    setProblemText('')
    setPhase('typing-problem')
    setCmdDone(false)
    setStepsDone(0)
    setResultDone(false)
  }, [scenarioIdx])

  // Type problem line
  useEffect(() => {
    if (phase !== 'typing-problem') return
    const target = scenario.problem
    if (problemText.length < target.length) {
      const t = setTimeout(() => setProblemText(target.slice(0, problemText.length + 1)), 35)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setPhase('pause-1'), 600)
    return () => clearTimeout(t)
  }, [phase, problemText, scenario.problem])

  // After pause-1 → show cmd
  useEffect(() => {
    if (phase !== 'pause-1') return
    const t = setTimeout(() => { setCmdDone(true); setPhase('typing-steps') }, 400)
    return () => clearTimeout(t)
  }, [phase])

  // Show steps one by one
  useEffect(() => {
    if (phase !== 'typing-steps') return
    if (stepsDone < scenario.steps.length) {
      const t = setTimeout(() => setStepsDone(s => s + 1), 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => { setResultDone(true); setPhase('done') }, 300)
    return () => clearTimeout(t)
  }, [phase, stepsDone, scenario.steps.length])

  // Loop to next scenario
  useEffect(() => {
    if (phase !== 'done') return
    const t = setTimeout(() => {
      setPhase('pause-2')
    }, 2500)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    if (phase !== 'pause-2') return
    const t = setTimeout(() => {
      setScenarioIdx(i => (i + 1) % terminalScenarios.length)
    }, 400)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-void">
      {/* Background effects */}
      <GlowOrb color="cyan" size="xl" className="-top-32 -left-32 opacity-40" />
      <GlowOrb color="green" size="lg" className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url(/images/circuit-bg.svg)',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs text-cyan-dim tracking-[0.2em] uppercase mb-4 block">
              // Software That Fits
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-slate-light leading-[1.1] mb-6">
              We Build Software{' '}
              <span className="text-gradient-cyan">That Works</span>{' '}
              Like You Think.
            </h1>
            <p className="text-ghost text-lg leading-relaxed mb-8 max-w-lg">
              From 12 hours/week to under 1 — custom software built around how you actually work.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              <GlowButton href="/contact" variant="primary" size="lg">
                Start a Project
              </GlowButton>
              <GlowButton href="/process" variant="ghost" size="lg">
                See How We Work
              </GlowButton>
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:block"
            style={enable3D ? { perspective: '1200px' } : undefined}
          >
            <motion.div
              whileHover={enable3D ? { rotateY: 0, rotateX: 0 } : undefined}
              initial={{ rotateY: 0, rotateX: 0 }}
              animate={enable3D ? { rotateY: -3, rotateX: 2 } : { rotateY: 0, rotateX: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              style={enable3D ? { transformStyle: 'preserve-3d' } : undefined}
              className="rounded-xl"
            >
              {/* Terminal window */}
              <div className="rounded-xl overflow-hidden border border-border bg-surface shadow-card">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-mono text-xs text-ghost">
                    ~/rmeyers-consulting
                  </span>
                </div>

                {/* Terminal body */}
                <div className="p-5 font-mono text-sm leading-relaxed space-y-1.5 min-h-[240px]">
                  {/* Problem prompt */}
                  <div className="flex gap-2">
                    <span className="text-green-dim shrink-0">$</span>
                    <span className="text-slate-light">describe problem</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-ghost">
                      {problemText}
                      {phase === 'typing-problem' && (
                        <span className="inline-block w-1.5 h-4 bg-green ml-0.5 animate-blink align-middle" />
                      )}
                    </span>
                  </div>

                  {/* Build command */}
                  {cmdDone && (
                    <>
                      <div className="flex gap-2 mt-2">
                        <span className="text-green-dim shrink-0">$</span>
                        <span className="text-slate-light">rmeyers build --solution</span>
                      </div>

                      {/* Steps */}
                      {scenario.steps.slice(0, stepsDone).map((step, i) => (
                        <div key={i} className="pl-4 text-cyan">
                          {step}
                        </div>
                      ))}

                      {/* Result */}
                      {resultDone && (
                        <div className="pl-4 text-green font-medium mt-1">
                          &gt; {scenario.result}
                        </div>
                      )}

                      {/* Blinking cursor while steps still typing */}
                      {(phase === 'typing-steps' || phase === 'typing-cmd') && (
                        <div className="pl-4">
                          <span className="inline-block w-1.5 h-4 bg-green ml-0.5 animate-blink align-middle" />
                        </div>
                      )}
                    </>
                  )}

                  {/* Idle cursor before problem starts */}
                  {phase === 'pause-2' && (
                    <div className="flex gap-2 mt-2">
                      <span className="text-green-dim shrink-0">$</span>
                      <span className="inline-block w-1.5 h-4 bg-green animate-blink align-middle" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
        >
          <span className="font-mono text-xs text-ghost/50">scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-6 bg-gradient-to-b from-cyan/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
