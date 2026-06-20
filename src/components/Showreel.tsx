import { useRef } from 'react'
import { Play } from 'lucide-react'

export default function Showreel() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <span className="section-label block mb-6 md:mb-8">Showreel</span>

        <div className="relative aspect-video w-full bg-dark-2 rounded-xl overflow-hidden group cursor-pointer border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-3 to-dark flex items-center justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <svg viewBox="0 0 156 156" className="w-full h-full animate-spin-slow">
                <defs>
                  <path id="circlePath" d="M77.5 153.686C119.577 153.686 153.686 119.577 153.686 77.5C153.686 35.4234 119.577 1.31356 77.5 1.31356C35.4234 1.31356 1.31356 35.4234 1.31356 77.5C1.31356 119.577 35.4234 153.686 77.5 153.686Z" />
                </defs>
                <circle cx="78" cy="78" r="76" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <text fontSize="11" fill="rgba(255,255,255,0.35)" letterSpacing="3" className="uppercase tracking-widest">
                  <textPath href="#circlePath" startOffset="0%">Play video • Play video •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold-light/20 flex items-center justify-center group-hover:bg-gold-light/30 transition-all duration-500 backdrop-blur-sm">
                  <Play size={24} className="text-gold-light ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-dark-2 border border-white/10 flex items-center justify-center text-[9px] font-medium text-white/40">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-white/30 uppercase tracking-wider">EPIC Showreel 2026</span>
          </div>
        </div>

        <hr className="border-white/5 mt-16 md:mt-24" />
      </div>
    </section>
  )
}
