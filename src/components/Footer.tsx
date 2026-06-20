import { ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Dribbble', href: '#' },
]

const legals = [
  { label: 'General terms', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="inline-flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 35 35" fill="none" className="text-gold-light">
                <circle cx="17.5" cy="17.5" r="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M12 22V13L18 22V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-lg text-white">EPIC</span>
            </a>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              A digital agency helping brands imagine, build, and tell meaningful stories.
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-medium tracking-widest uppercase text-white/30 block mb-4">Menu</span>
            <nav className="flex flex-col gap-3">
              {['Home', 'Work', 'Services', 'Journal', 'Careers', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-white/50 hover:text-gold-light transition-colors w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <span className="text-[10px] font-medium tracking-widest uppercase text-white/30 block mb-4">Social</span>
            <nav className="flex flex-col gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm text-white/50 hover:text-gold-light transition-colors w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <span className="text-[10px] font-medium tracking-widest uppercase text-white/30 block mb-4">Newsletter</span>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold-light transition-colors border border-white/10 rounded-full px-5 py-2.5 hover:border-gold-light/30"
            >
              Subscribe to our newsletter
              <ArrowUpRight size={14} className="text-gold-light" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-6">
            {legals.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[10px] font-medium tracking-wider uppercase text-white/20 hover:text-white/50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <span className="text-[10px] text-white/15">
            &copy; {new Date().getFullYear()} EPIC Agency. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
