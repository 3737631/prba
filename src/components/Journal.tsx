import { ArrowUpRight, Eye } from 'lucide-react'

const posts = [
  {
    date: '16 June 2026',
    title: 'Is your e-shop aligned with your culture?',
    category: 'Strategy',
  },
  {
    date: '15 June 2026',
    title: 'Brand Archetypes: the How-to guide',
    category: 'Branding',
  },
  {
    date: '15 June 2026',
    title: 'When brands get their faces back',
    category: 'Creative',
  },
  {
    date: '15 June 2026',
    title: 'Just one bar.',
    category: 'Websites',
  },
  {
    date: '14 June 2026',
    title: 'The future of digital experiences',
    category: 'Strategy',
  },
  {
    date: '13 June 2026',
    title: 'Designing for emotional impact',
    category: 'Creative',
  },
]

export default function Journal() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12">
          <span className="section-label">Journal</span>
          <a
            href="/journal"
            className="group inline-flex items-center gap-2 text-xs text-white/50 hover:text-gold-light transition-colors"
          >
            See all
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {posts.map((post) => (
            <a
              key={post.title}
              href="/journal"
              className="group bg-dark-2 p-6 md:p-8 space-y-4 hover:bg-dark-3 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-wider uppercase text-white/30">{post.date}</span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-gold-light/60">{post.category}</span>
              </div>
              <h3 className="font-display text-lg text-white/80 group-hover:text-gold-light transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-wider pt-2">
                <Eye size={12} />
                <span>Read</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
