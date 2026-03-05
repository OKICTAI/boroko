import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  UserCheck, Target, Lightbulb, MessageCircle, Gauge, Heart, ArrowRight
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const benefits = [
  {
    icon: UserCheck,
    title: 'Completely Personalised',
    desc: 'Every session is designed around your role, your industry, and the tasks you actually do. This isn\'t one-size-fits-all — it\'s built for you.',
    color: 'bg-sage-100 text-sage-600',
  },
  {
    icon: Target,
    title: 'Practical From Day One',
    desc: 'You\'ll walk away from every session with AI skills you can use immediately. We focus on real tools for real tasks — not abstract theory.',
    color: 'bg-clay-100 text-clay-500',
  },
  {
    icon: MessageCircle,
    title: 'Patient, Jargon-Free Guidance',
    desc: 'No matter your starting point, we meet you where you are. Questions are always welcome. There\'s no such thing as a silly question here.',
    color: 'bg-sage-100 text-sage-600',
  },
  {
    icon: Gauge,
    title: 'Learn at Your Own Pace',
    desc: 'Unlike group workshops or online courses, our 1-on-1 sessions move at the speed that\'s right for you. No rushing, no falling behind.',
    color: 'bg-warm-100 text-warm-700',
  },
  {
    icon: Lightbulb,
    title: 'Built for PNG Professionals',
    desc: 'We understand the tools, connectivity, and workplace dynamics of Papua New Guinea. Our recommendations work in your real-world context.',
    color: 'bg-sage-100 text-sage-600',
  },
  {
    icon: Heart,
    title: 'Ongoing Support Between Sessions',
    desc: 'Stuck on something between sessions? You\'re not alone. Reach out anytime for quick guidance or to share a win.',
    color: 'bg-clay-100 text-clay-500',
  },
]

function BenefitCard({ icon: Icon, title, desc, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className="card p-7 card-hover group"
    >
      <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-serif text-warm-900 mb-2">{title}</h3>
      <p className="text-warm-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Solution() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="solution" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cream-50" />

      {/* Organic blobs */}
      <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-sage-50/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-[350px] h-[350px] rounded-full bg-clay-50/50 blur-3xl pointer-events-none" />

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
              <Lightbulb className="w-4 h-4" />
              The Solution
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] text-warm-900 mb-5 leading-tight"
          >
            Personal AI coaching{' '}
            <span className="text-sage-500 italic">designed around your actual work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            Imagine having a patient, knowledgeable AI expert in your corner — someone who understands your goals and teaches you exactly what you need, when you need it.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} index={i} />
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="card p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          {/* Left */}
          <div className="flex-1">
            <h3 className="text-2xl font-serif text-warm-900 mb-3">
              This isn't about becoming a tech expert.
            </h3>
            <p className="text-warm-500 leading-relaxed">
              It's about becoming more productive, more confident, and more capable in your role — using AI as your personal assistant. You'll be surprised how quickly you pick it up with the right guidance.
            </p>
          </div>

          {/* Right — stat highlights */}
          <div className="flex gap-6">
            {[
              { value: '3×', label: 'Faster at routine tasks', sublabel: 'avg. after 4 sessions' },
              { value: '90%', label: 'Feel confident with AI', sublabel: 'after 6 sessions' },
            ].map(({ value, label, sublabel }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-serif gradient-text-sage mb-1">{value}</div>
                <div className="text-sm font-medium text-warm-800">{label}</div>
                <div className="text-xs text-warm-400">{sublabel}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
