import type { Metadata } from 'next'
import ContactForm from '@/components/sections/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | RMeyers Consulting',
  description: 'Start a conversation about your project. We respond within 24 hours.',
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { success?: string }
}) {
  const showSuccess = searchParams?.success === '1'

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-void overflow-hidden">
        <div className="section-container">
          <div>
            <span className="font-mono text-xs text-cyan-dim mb-3 block">
              ~/rmeyers &gt; initiate_contact --type=project
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-light font-sans mb-5">
              Start a Conversation
            </h1>
            <p className="text-ghost text-lg max-w-xl">
              Tell us what you&apos;re building, what&apos;s broken, or what you wish existed. We&apos;ll respond with honest thoughts — no pitch, no pressure.
            </p>
            {showSuccess ? (
              <p className="mt-6 text-sm text-green font-mono">
                ✓ message_sent: true
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
