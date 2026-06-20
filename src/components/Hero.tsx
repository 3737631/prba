import { useEffect, useRef } from 'react'
import { ArrowUpRight, Shuffle } from 'lucide-react'

const services = ['Branding', 'Websites', 'Photography']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-wide w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-start gap-4">
              <button
                className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/15 flex items-center justify-center
                  hover:border-gold-light/40 transition-all duration-500 group mt-1"
                aria-label="View random project"
              >
                <Shuffle size={20} className="text-white/40 group-hover:text-gold-light transition-colors duration-500" />
              </button>

              <div className="space-y-4">
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight text-white">
                  AVD<br />
                  <span className="text-gold-light">revival</span>
                </h1>

                <div className="flex flex-wrap gap-3">
                  {services.map(s => (
                    <span
                      key={s}
                      className="text-xs font-medium tracking-wider uppercase text-white/40 border border-white/10 rounded-full px-4 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="/work/avd-revival"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold-light transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-light/20 transition-all">
                      <ArrowUpRight size={14} className="text-gold-light" />
                    </span>
                    Visit project
                  </a>
                  <a
                    href="/work"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-gold-light transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-light/20 transition-all">
                      <ArrowUpRight size={14} className="text-gold-light" />
                    </span>
                    See all projects
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8 lg:pt-4">
            <div className="space-y-4">
              <span className="section-label block">Journal</span>
              <a href="/journal" className="group inline-flex items-center gap-2 text-xs text-white/50 hover:text-gold-light transition-colors">
                See all
                <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="space-y-6">
              {[
                { date: '16 June 2026', title: 'Is your e-shop aligned with your culture?' },
                { date: '15 June 2026', title: 'Brand Archetypes: the How-to guide' },
                { date: '15 June 2026', title: 'When brands get their faces back' },
                { date: '15 June 2026', title: 'Just one bar.' },
              ].map((post, i) => (
                <a
                  key={i}
                  href="/journal"
                  className="group block border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-[10px] font-medium tracking-wider uppercase text-white/30">{post.date}</span>
                  <p className="text-sm text-white/70 group-hover:text-gold-light transition-colors mt-1">
                    {post.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/5 mt-16 md:mt-24" />
      </div>
    </section>
  )
}
