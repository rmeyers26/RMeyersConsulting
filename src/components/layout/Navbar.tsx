'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import GlowButton from '@/components/ui/GlowButton'

const navLinks = [
  { href: '/#what-we-build', label: 'What We Build' },
  { href: '/#results', label: 'Results' },
  { href: '/#how-we-work', label: 'How We Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash || '')
    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  const isNavLinkActive = (href: string) => {
    if (href === '/contact') return pathname === '/contact'
    const linkHash = href.startsWith('/#') ? href.slice(1) : ''
    return pathname === '/' && currentHash === linkHash
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-canvas/95 backdrop-blur-md border-b border-border py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-ink font-sans font-semibold text-lg tracking-tight group-hover:text-ink transition-colors">
              RMeyers
            </span>
            <span className="font-sans text-ink-2 text-sm ml-1">
              Consulting
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-sans transition-colors',
                  isNavLinkActive(link.href)
                    ? 'text-amber'
                    : 'text-ink-2 hover:text-ink'
                )}
              >
                {link.label}
                {isNavLinkActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-amber"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <GlowButton href="/contact" variant="outline" size="sm">
              Book a Call
            </GlowButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-ink-2 hover:text-ink p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-5 h-0.5 bg-current"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-5 h-0.5 bg-current"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-5 h-0.5 bg-current"
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-canvas/98 backdrop-blur-lg pt-20 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'px-4 py-3.5 font-sans text-base sm:text-lg border-b border-border',
                    isNavLinkActive(link.href)
                      ? 'text-amber'
                      : 'text-ink-2 hover:text-ink'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <GlowButton href="/contact" variant="primary" size="lg" className="w-full justify-center">
                Book a Call
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
