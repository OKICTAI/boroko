import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, HelpCircle, TrendingDown, BookX, ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const painPoints = [
  {
    emoji: '😰',
    title: 'Everyone\'s talking about AI — and you\'re not sure where to start',
    desc: 'Your colleagues are using ChatGPT, your boss is asking about AI strategy, and you feel like you\'re already falling behind. The pressure is real.',
  },
  {
    emoji: '📚',
    title: 'Online courses feel generic and overwhelming',
    desc: 'You\'ve tried YouTube tutorials and online courses, but they\'re not designed for your role, your industry, or Papua New Guinea\'s unique context.',
  },
  {
    emoji: '⏳',
    title: 'You don\'t have time to figure it out alone',
    desc: 'Between meetings, deadlines, and responsibilities, who has hours to experiment with AI tools and hope something sticks?',
  },
  {
    emoji: '🤷',
    title: 'You\'re not sure which AI tools actually matter for your work',
    desc: 'There are hundreds of AI tools out there. Which ones are worth learning? Which ones will actually make a difference in your day-to-day?',
  },
]

function PainCard({ emoji, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
      className="card p-7 card-hover"
    >
      <div className="text-3xl mb-4">{emoji}</div>
      <h3 className="text-lg font-serif text-warm-900 mb-2 leading-snug">{title}</h3>
      <p className="text-warm-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Problem() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-cream-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-200/50 to-transparent" />

      {/* Organic blob */}
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-sage-50/50 blur-3xl pointer-events-none" />

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
              <HelpCircle className="w-4 h-4" />
              Sound Familiar?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] text-warm-900 mb-5 leading-tight"
          >
            AI is changing everything.{' '}
            <span className="text-sage-500 italic">But nobody's teaching you how to use it.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            You're a capable professional. You just need the right guide to help you unlock AI — in a way that fits your actual work life.
          </motion.p>
        </div>

        {/* Pain points */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {painPoints.map((point, i) => (
            <PainCard key={point.title} {...point} index={i} />
          ))}
        </div>

        {/* Transition callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="card-soft p-8 lg:p-10 text-center">
            <p className="text-xl font-serif text-warm-800 leading-relaxed mb-4">
              You don't need another online course.<br />
              You need <span className="text-sage-500 italic">someone in your corner</span>.
            </p>
            <button
              onClick={() => document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-sage-600 font-medium hover:text-sage-700 transition-colors"
            >
              Here's how we help
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
