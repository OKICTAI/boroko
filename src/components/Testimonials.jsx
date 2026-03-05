import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, MessageCircle, Quote } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const testimonials = [
  {
    name: 'Tim Kirio',
    role: 'Senior Officer',
    org: 'Department of Implementation and Rural Development',
    initials: 'TK',
    bg: 'bg-sage-400',
    stars: 5,
    quote: 'I was terrified of AI. I thought it was something only tech people could use. After just four sessions with O&K, I\'m using AI to draft reports, summarise documents, and analyse data in half the time. My team thinks I\'ve hired a secret assistant.',
    highlight: 'Reports now take half the time',
  },
  {
    name: 'Miria John',
    role: 'Operations Manager',
    org: 'Allied Plumbers',
    initials: 'MJ',
    bg: 'bg-clay-400',
    stars: 5,
    quote: 'What I loved most was how personal it was. My coach didn\'t give me a generic AI course — they understood my actual job and showed me AI tools that solved my specific problems. I now use AI every single day, and it feels completely natural.',
    highlight: 'Uses AI daily after 6 sessions',
  },
  {
    name: 'Kora Ranu',
    role: 'Digital Services Lead',
    org: 'Digital Service POM',
    initials: 'KR',
    bg: 'bg-sage-600',
    stars: 5,
    quote: 'The patience and encouragement made all the difference. I asked a lot of "basic" questions, and never once felt judged. Now I\'m the person my colleagues come to when they need help with AI. That\'s a complete turnaround from where I started.',
    highlight: 'Now the AI go-to person in his team',
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
      {/* Stars */}
      <div className="flex items-center justify-between mb-5">
        <StarRating count={testimonial.stars} />
        <Quote className="w-6 h-6 text-sage-200" />
      </div>

      {/* Highlight */}
      <div className="mb-4 px-4 py-2.5 rounded-2xl bg-sage-50 border border-sage-100 inline-block self-start">
        <p className="text-xs font-medium text-sage-600">"{testimonial.highlight}"</p>
      </div>

      {/* Quote */}
      <blockquote className="text-warm-600 leading-relaxed flex-1 mb-6 text-[15px]">
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-5 border-t border-warm-100">
        <div
          className={`w-12 h-12 rounded-full ${testimonial.bg} flex items-center justify-center font-bold text-white text-sm flex-shrink-0`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="font-medium text-warm-900">{testimonial.name}</div>
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

      {/* Blobs */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-sage-50/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-clay-50/40 blur-3xl pointer-events-none" />

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
              <MessageCircle className="w-4 h-4" />
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] text-warm-900 mb-5 leading-tight"
          >
            Real professionals.{' '}
            <span className="text-sage-500 italic">Real results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            Here's what professionals across Papua New Guinea have experienced through our 1-on-1 AI coaching.
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
            { value: '300+', label: 'Professionals trained' },
            { value: '4.9/5', label: 'Average rating' },
            { value: '95%', label: 'Continue past first month' },
            { value: '100%', label: 'Would recommend to a colleague' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-serif gradient-text-sage">{value}</div>
              <div className="text-sm text-warm-400 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
