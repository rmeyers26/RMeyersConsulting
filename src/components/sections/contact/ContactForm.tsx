
export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      style={{ maxWidth: 480, margin: '0 auto', background: '#101828', padding: 32, borderRadius: 12 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ display: 'none' }}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <h2 style={{ color: '#fff', fontSize: 24, marginBottom: 24 }}>Contact Us</h2>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="name" style={{ color: '#7dd3fc', fontSize: 14, display: 'block', marginBottom: 4 }}>Your Name *</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          placeholder="Jane Smith"
          style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
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
          style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="company" style={{ color: '#7dd3fc', fontSize: 14, display: 'block', marginBottom: 4 }}>Company</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Acme Corp (optional)"
          style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
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
          style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #334155', background: '#0f172a', color: '#fff', resize: 'vertical' }}
        />
      </div>
      <button
        type="submit"
        style={{ width: '100%', padding: 12, borderRadius: 6, background: '#06b6d4', color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer' }}
      >
        Send Message
      </button>
    </form>
  )
}
