import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  // 'optional' eliminates font-swap CLS: the browser blocks for ~100ms waiting for
  // the preloaded font, then commits to either the custom font or the fallback
  // permanently — no mid-render swap. next/font preloads the font automatically,
  // so most users on reasonable connections still see Instrument Serif.
  display: 'optional',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FAFAF8',
}

export const metadata: Metadata = {
  title: 'RMeyers Consulting | Custom Software & Automation',
  description:
    'We build custom software, automation, and technical solutions that help organizations simplify processes, organize data, and solve operational problems.',
  keywords: ['custom software', 'automation', 'web apps', 'system integration', 'consulting', 'workflow automation'],
  openGraph: {
    title: 'RMeyers Consulting | Custom Software & Automation',
    description:
      'Built for your team. Not for the general case.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body className="font-sans bg-canvas text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
