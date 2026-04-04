
'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

function encodeNetlifyForm(data: Record<string, string>) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(data)) params.append(key, value)
  return params.toString()
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const router = useRouter()

  useEffect(() => {
    if (status === 'success') {
      const id = setTimeout(() => {
        // Send user back to home after brief thank-you state
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
        style={{ maxWidth: 480, margin: '0 auto', background: '#101828', padding: '24px 16px', borderRadius: 12 }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        {status === 'success' ? (
          <div
            role="status"
            aria-live="polite"
            style={{
              marginBottom: 16,
              border: '1px solid #14532d',
              background: '#052e16',
              color: '#bbf7d0',
              padding: 12,
              borderRadius: 8,
              fontSize: 14,
            }}
          >
            Thanks — your message was sent. We’ll get back to you soon.
          </div>
        ) : null}
        {status === 'error' ? (
          <div
            role="alert"
            style={{
              marginBottom: 16,
              border: '1px solid #7f1d1d',
              background: '#450a0a',
              color: '#fecaca',
              padding: 12,
              borderRadius: 8,
              fontSize: 14,
            }}
          >
            Something went wrong sending your message. Please try again, or email us directly.
          </div>
        ) : null}
        <h2 style={{ color: '#fff', fontSize: 24, marginBottom: 24 }}>Contact Us</h2>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="name" style={{ color: '#7dd3fc', fontSize: 14, display: 'block', marginBottom: 4 }}>Your Name *</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            disabled={isDisabled}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email" style={{ color: '#7dd3fc', fontSize: 14, display: 'block', marginBottom: 4 }}>Email *</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="jane@company.com"
            disabled={isDisabled}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="company" style={{ color: '#7dd3fc', fontSize: 14, display: 'block', marginBottom: 4 }}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Acme Corp (optional)"
            disabled={isDisabled}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="message" style={{ color: '#7dd3fc', fontSize: 14, display: 'block', marginBottom: 4 }}>Tell us about your project *</label>
          <textarea
            required
            id="message"
            name="message"
            rows={5}
            placeholder="What problem are you trying to solve? What tools are you using today? What does success look like?"
            disabled={isDisabled}
            style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff', resize: 'vertical', boxSizing: 'border-box' }}
          />
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          style={{ width: '100%', padding: 12, borderRadius: 6, background: '#06b6d4', color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer' }}
        >
          {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent' : 'Send Message'}
        </button>
      </form>
    </>
  )
}
