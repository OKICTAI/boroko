import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, BarChart2, Quote } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const testimonials = [
  {
    name: 'Tim Kirio',
    role: 'Senior Officer',
    org: 'Department of Implementation and Rural Development',
    initials: 'TK',
    bg: 'bg-sage-500',
    stars: 5,
    quote: 'O&K transformed how our team handles reports and documentation. After their training programme, our officers are drafting and summarising documents in half the time. The practical, hands-on approach meant staff were confident from day one.',
    highlight: 'Report drafting time cut in half',
  },
  {
    name: 'Miria John',
    role: 'Operations Manager',
    org: 'Allied Plumbers',
    initials: 'MJ',
    bg: 'bg-clay-400',
    stars: 5,
    quote: 'What set O&K apart was how well they understood our actual operations. They didn\'t offer a generic AI course — they designed a programme around our specific workflows and challenges. Our team now uses AI tools daily as a standard part of how we work.',
    highlight: 'AI fully integrated into daily operations',
  },
  {
    name: 'Kora Ranu',
    role: 'Digital Services Lead',
    org: 'Digital Service POM',
    initials: 'KR',
    bg: 'bg-sage-700',
    stars: 5,
    quote: 'The O&K team brought genuine expertise and a clear understanding of the PNG government context. Their approach was structured, credible, and delivered real results. Our team now leads AI adoption internally and advises other units across the organisation.',
    highlight: 'Now leading AI adoption across the organisation',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease }}
      className="card p-7 card-hover flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-5">
        <StarRating count={testimonial.stars} />
        <Quote className="w-6 h-6 text-sage-200" />
      </div>

      <div className="mb-4 px-4 py-2.5 rounded-xl bg-sage-50 border border-sage-100 inline-block self-start">
        <p className="text-xs font-semibold text-sage-600">"{testimonial.highlight}"</p>
      </div>

      <blockquote className="text-warm-600 leading-relaxed flex-1 mb-6 text-[15px]">
        {testimonial.quote}
      </blockquote>

      <div className="flex items-center gap-4 pt-5 border-t border-warm-100">
        <div className={`w-12 h-12 rounded-full ${testimonial.bg} flex items-center justify-center font-bold text-white text-sm flex-shrink-0`}>
          {testimonial.initials}
        </div>
        <div>
          <div className="font-semibold text-warm-900">{testimonial.name}</div>
          <div className="text-sm text-warm-500">{testimonial.role}</div>
          <div className="text-xs text-warm-400">{testimonial.org}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cream-100" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-200/50 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-sage-50/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-clay-50/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">
              <BarChart2 className="w-3.5 h-3.5" />
              Client Outcomes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-bold text-warm-900 mb-5 leading-tight"
          >
            Organisations achieving{' '}
            <span className="text-sage-500">measurable results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            Here's what government agencies, businesses, and organisations across Papua New Guinea have achieved through our AI consultancy work.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="card p-8 flex flex-col sm:flex-row items-center justify-center gap-10 text-center"
        >
          {[
            { value: '300+', label: 'Staff trained across PNG' },
            { value: '4.9/5', label: 'Client satisfaction rating' },
            { value: '50+', label: 'Organisations served' },
            { value: '100%', label: 'Would recommend O&K' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-display font-bold gradient-text-sage">{value}</div>
              <div className="text-sm text-warm-400 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
