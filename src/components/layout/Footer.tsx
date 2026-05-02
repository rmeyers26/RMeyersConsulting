import Link from 'next/link'

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/process',  label: 'Process' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-6 sm:space-y-0">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-1 group">
              <span className="text-ink font-sans font-semibold tracking-tight">
                RMeyers
              </span>
              <span className="font-sans text-ink-2 text-sm ml-1">
                Consulting
              </span>
            </Link>
            <p className="mt-1.5 text-xs text-ink-3">
              Custom software &amp; automation for growing teams.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mr-6 mb-2 last:mr-0 text-sm text-ink-3 hover:text-ink-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <p className="text-xs text-ink-3">
            © {new Date().getFullYear()} RMeyers Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
