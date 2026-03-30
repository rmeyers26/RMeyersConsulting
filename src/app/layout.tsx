import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'RMeyers Consulting | Custom Software & Automation',
  description:
    'We build custom software, automation, and technical solutions that help organizations simplify processes, organize data, and solve operational problems.',
  keywords: ['custom software', 'automation', 'web apps', 'system integration', 'consulting', 'workflow automation'],
  openGraph: {
    title: 'RMeyers Consulting | Custom Software & Automation',
    description:
      'From 12 hours/week to under 1 — custom software built around how you actually work.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-void text-ghost antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
