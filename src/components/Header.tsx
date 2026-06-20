import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Journal', href: '/journal' },
]

const secondaryLinks = [
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20 md:h-24">
        <a href="/" className="flex items-center gap-3 group">
          <svg width="32" height="32" viewBox="0 0 35 35" fill="none" className="text-gold-light transition-transform duration-500 group-hover:scale-105">
            <circle cx="17.5" cy="17.5" r="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M12 22V13L18 22V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="section-label hidden md:block">Imagine, Build, Tell.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-gold-light transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 pl-8 border-l border-white/10">
            {secondaryLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-white/50 hover:text-gold-light transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <span className="text-xs font-medium uppercase tracking-widest text-gold-light ml-2">En</span>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 bg-dark/98 backdrop-blur-xl z-40 lg:hidden animate-fadeIn">
          <div className="container-wide pt-28 pb-12 h-full overflow-y-auto">
            <nav className="flex flex-col gap-6">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-3xl font-display text-white hover:text-gold-light transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4">
              {secondaryLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-gold-light transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
