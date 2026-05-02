import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
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
      <section className="relative pt-32 pb-16 bg-canvas overflow-hidden">
        <div className="section-container">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="text-xl md:text-2xl font-bold text-ink font-sans mb-5">
              Start a Conversation
            </h1>
            <p className="text-ink-2 text-lg max-w-xl">
              Tell us what you&apos;re building, what&apos;s broken, or what you wish existed. We&apos;ll respond with honest thoughts — no pitch, no pressure.
            </p>
            {showSuccess ? (
              <p className="mt-6 text-sm text-amber">
                Message sent — we&apos;ll be in touch soon.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <ContactForm />
      </section>
    </>
  )
}
