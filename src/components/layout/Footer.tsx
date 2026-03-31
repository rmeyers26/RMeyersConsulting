import Link from 'next/link'

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/process',  label: 'Process' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-abyss">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-slate-light font-sans font-semibold tracking-tight group-hover:text-white transition-colors">
                RMeyers
              </span>
              <span className="font-mono text-cyan-dim text-sm ml-1">
                // Consulting
              </span>
            </Link>
            <p className="mt-1.5 text-xs text-ghost font-mono">
              Custom software &amp; automation for growing teams.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ghost hover:text-cyan-dim font-mono transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-ghost/60">
            © {new Date().getFullYear()} RMeyers Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
