
'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

function encodeNetlifyForm(data: Record<string, string>) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(data)) params.append(key, value)
  return params.toString()
}

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber/60 transition-colors disabled:opacity-50'

const labelClass = 'block text-sm text-ink-2 mb-2'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const router = useRouter()

  useEffect(() => {
    if (status === 'success') {
      const id = setTimeout(() => {
        router.push('/')
      }, 3500)
      return () => clearTimeout(id)
    }
  }, [status, router])

  const isDisabled = useMemo(() => status === 'submitting' || status === 'success', [status])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    const form = e.currentTarget
    const formData = new FormData(form)

    const payload: Record<string, string> = {}
    for (const [k, v] of formData.entries()) payload[k] = String(v)

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeNetlifyForm(payload),
      })

      if (!res.ok) throw new Error(`Netlify form submit failed: ${res.status}`)

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hidden static form for Netlify build-time detection */}
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
        action="/__forms.html"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <textarea name="message" />
        <input name="bot-field" />
      </form>

      {/* Visible form for users */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/__forms.html"
        onSubmit={onSubmit}
        className="max-w-lg mx-auto bg-surface border border-border rounded-xl p-6 sm:p-8"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        {status === 'success' && (
          <div
            role="status"
            aria-live="polite"
            className="mb-6 px-4 py-3 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm"
          >
            Thanks — your message was sent. We&apos;ll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div
            role="alert"
            className="mb-6 px-4 py-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm"
          >
            Something went wrong sending your message. Please try again, or email us directly.
          </div>
        )}

        <h2 className="text-xl font-bold text-ink font-sans mb-8">Contact Us</h2>

        <div className="mb-6">
          <label htmlFor="name" className={labelClass}>Your Name *</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            disabled={isDisabled}
            className={inputClass}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="jane@company.com"
            disabled={isDisabled}
            className={inputClass}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="company" className={labelClass}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Acme Corp (optional)"
            disabled={isDisabled}
            className={inputClass}
          />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className={labelClass}>Tell us about your project *</label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder="What problem are you trying to solve? What tools are you using today? What does success look like?"
            disabled={isDisabled}
            className={`${inputClass} resize-vertical`}
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full py-4 rounded-lg bg-amber text-white font-sans font-semibold text-base hover:bg-amber-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent' : 'Send Message'}
        </button>
      </form>
    </>
  )
}
