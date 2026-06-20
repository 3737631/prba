import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    title: 'Strategy',
    items: ['Brand Strategy', 'Positioning', 'Digital Strategy', 'Content Strategy'],
  },
  {
    title: 'Branding',
    items: ['Visual Identity', 'Brand Guidelines', 'Naming', 'Art Direction'],
  },
  {
    title: 'Websites',
    items: ['Web Design', 'Development', 'E-commerce', 'Web Apps'],
  },
  {
    title: 'Creative',
    items: ['Photography', 'Video Production', 'Motion Design', 'Illustration'],
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          <div className="lg:col-span-5">
            <span className="section-label block mb-3">Services</span>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              What we do
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-white/60 leading-relaxed max-w-lg">
              We help brands generate maximum impact through a unique blend of
              technical, strategic and creative skills.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
          {services.map((group) => (
            <div key={group.title} className="bg-dark-2 p-6 md:p-8 space-y-4">
              <h3 className="font-display text-xl text-gold-light">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-white/50 hover:text-white/80 transition-colors cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full
              hover:border-gold-light/30 hover:bg-gold-light/5 transition-all duration-500"
          >
            <span className="text-sm font-medium text-white/80">Learn more about our services</span>
            <ArrowUpRight size={16} className="text-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <hr className="border-white/5 mt-16 md:mt-24" />
      </div>
    </section>
  )
}
