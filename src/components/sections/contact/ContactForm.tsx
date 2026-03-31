"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import GlowButton from '@/components/ui/GlowButton'
import GlassCard from '@/components/ui/GlassCard'
import GlowOrb from '@/components/effects/GlowOrb'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, variants, animate } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const params = new URLSearchParams()
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') params.append(key, value)
    }
    const body = params.toString()

    // #region agent log
    fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'post-fix',hypothesisId:'H15',location:'ContactForm.tsx:24',message:'Submitting contact form to Netlify forms endpoint',data:{endpoint:'/',fields:Array.from(formData.keys())},timestamp:Date.now()})}).catch(()=>{});
    // #endregion

    try {
      const response = await fetch('/', {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })

      // #region agent log
      fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'post-fix',hypothesisId:'H16',location:'ContactForm.tsx:39',message:'Netlify forms POST response',data:{ok:response.ok,status:response.status,redirected:response.redirected,url:response.url},timestamp:Date.now()})}).catch(()=>{});
      // #endregion

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch (error) {
      // #region agent log
      fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'post-fix',hypothesisId:'H14',location:'ContactForm.tsx:49',message:'Route handler form POST failed',data:{error:error instanceof Error ? error.message : 'unknown'},timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    } finally {
      setLoading(false)
    }
  }

  const inputClass = cn(
    'w-full bg-abyss border border-border rounded-lg px-4 py-3',
    'font-mono text-sm text-slate-light placeholder:text-ghost/40',
    'focus:outline-none focus:border-cyan/60 focus:ring-1 focus:ring-cyan/30',
    'transition-all duration-200'
  )

  return (
    <section className="section-padding bg-abyss relative overflow-hidden">
      <GlowOrb color="cyan" size="lg" className="top-0 right-0 translate-x-1/3 -translate-y-1/3" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Form */}
          <motion.div ref={ref} variants={variants} initial="hidden" animate={animate}>
            {!submitted ? (
              <form 
                name="contact"
                method="POST"
                action="/"
                className="space-y-5"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block font-mono text-xs text-cyan-dim mb-2">// your_name *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-cyan-dim mb-2">// email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-cyan-dim mb-2">// company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Corp (optional)"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-cyan-dim mb-2">// tell_us_about_your_project *</label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    placeholder="What problem are you trying to solve? What tools are you using today? What does success look like?"
                    className={cn(inputClass, 'resize-none')}
                  />
                </div>
                <GlowButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </GlowButton>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-slate-light font-semibold text-xl mb-2 font-sans">Message sent!</h3>
                <p className="text-ghost text-sm">
                  We&apos;ll be in touch within 24 hours.
                </p>
                <p className="font-mono text-xs text-ghost/50 mt-4">
                  // No spam, no sales calls — just a real conversation.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <GlassCard className="p-7 space-y-6">
              <div>
                <span className="font-mono text-xs text-cyan-dim block mb-2">// response_time</span>
                <p className="text-slate-light font-semibold">Within 24 hours</p>
                <p className="text-ghost text-sm mt-1">We respond to every inquiry personally — no auto-responders.</p>
              </div>

              <div className="border-t border-border pt-5">
                <span className="font-mono text-xs text-cyan-dim block mb-2">// what_to_expect</span>
                <ul className="space-y-2 text-sm text-ghost">
                  {[
                    'A real reply from a real person',
                    'Questions about your current process',
                    'An honest assessment of fit',
                    'A working plan — not a proposal',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-5">
                <span className="font-mono text-xs text-cyan-dim block mb-3">// office_hours</span>
                <div className="font-mono text-sm space-y-1 text-ghost">
                  <div>Mon–Fri: 9am – 6pm EST</div>
                  <div className="text-ghost/50">Weekends: async responses</div>
                </div>
              </div>

              {/* Idle terminal */}
              <div className="border-t border-border pt-5">
                <div className="rounded-lg bg-void border border-border p-3 font-mono text-xs">
                  <div className="text-green-dim">$ awaiting message...</div>
                  <div className="flex items-center gap-1 mt-1 text-ghost/50">
                    <span>&gt;</span>
                    <span className="inline-block w-1.5 h-3.5 bg-green animate-blink align-middle" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
