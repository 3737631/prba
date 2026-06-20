import { Castle } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="section-label block">About</span>
            <p className="text-lg md:text-xl leading-relaxed text-white/70 max-w-xl">
              EPIC is a digital agency with a unique blend of technical, strategic and creative skills.
              We help brands <strong className="text-white">imagine</strong> the most positive impact
              they can have and <strong className="text-white">build</strong> powerful experiences that
              <strong className="text-white"> tell</strong> a meaningful story to their audiences.
            </p>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative group cursor-pointer">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/5 flex items-center justify-center">
                <svg viewBox="0 0 156 156" className="w-full h-full animate-spin-slow">
                  <defs>
                    <path id="castlePath" d="M77.5 153.686C119.577 153.686 153.686 119.577 153.686 77.5C153.686 35.4234 119.577 1.31356 77.5 1.31356C35.4234 1.31356 1.31356 35.4234 1.31356 77.5C1.31356 119.577 35.4234 153.686 77.5 153.686Z" />
                  </defs>
                  <circle cx="78" cy="78" r="76" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <text fontSize="11" fill="rgba(255,255,255,0.35)" letterSpacing="3" className="uppercase tracking-widest">
                    <textPath href="#castlePath" startOffset="0%">Customize the castle • Customize the castle •</textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Castle size={36} className="text-gold-light/60 group-hover:text-gold-light transition-colors duration-500" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/5 mt-16 md:mt-24" />
      </div>
    </section>
  )
}
