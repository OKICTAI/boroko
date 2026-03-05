import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ClipboardList, Video, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Free Discovery Call',
    subtitle: '30 minutes',
    desc: 'We start with a relaxed, no-pressure conversation about your role, your goals, and where AI could make the biggest difference. No commitment required.',
    details: [
      'Understand your current workflow',
      'Identify your biggest time-wasters',
      'Explore which AI tools fit your needs',
      'Answer all your questions about AI',
    ],
    bg: 'bg-sage-50',
    iconBg: 'bg-sage-500',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Custom Learning Plan',
    subtitle: '1 week',
    desc: 'Based on our conversation, we design a personalised training plan built specifically around your work. No generic modules — every lesson is relevant to you.',
    details: [
      'Tailored curriculum for your role',
      'Prioritised by impact on your work',
      'Clear milestones and goals',
      'Flexible scheduling around your calendar',
    ],
    bg: 'bg-clay-50',
    iconBg: 'bg-clay-400',
  },
  {
    number: '03',
    icon: Video,
    title: 'Weekly 1-on-1 Sessions',
    subtitle: 'Ongoing',
    desc: 'Each week, we meet for a focused 1-on-1 coaching session where you learn new AI skills and apply them to your actual work tasks in real time.',
    details: [
      'Live practice with real AI tools',
      'Hands-on exercises using your data',
      'Prompt engineering for your context',
      'Support and Q&A between sessions',
    ],
    bg: 'bg-sage-50',
    iconBg: 'bg-sage-600',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Confidence & Independence',
    subtitle: 'The goal',
    desc: 'Our aim is to make you self-sufficient. Within weeks, you\'ll be confidently using AI to save hours every week — and teaching your colleagues how to do the same.',
    details: [
      'Ongoing support for new challenges',
      'Advanced techniques as you grow',
      'Certification of completion',
      'Access to PNG AI community',
    ],
    bg: 'bg-warm-50',
    iconBg: 'bg-warm-600',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
      className={`card p-7 lg:p-8 card-hover relative overflow-hidden`}
    >
      {/* Background accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${step.bg} -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

      <div className="relative z-10">
        {/* Number + Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-5xl font-serif text-warm-200">{step.number}</span>
          <div className={`w-12 h-12 rounded-full ${step.iconBg} flex items-center justify-center`}>
            <step.icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="text-xs font-medium text-warm-400 uppercase tracking-widest mb-1">{step.subtitle}</div>
        <h3 className="text-xl font-serif text-warm-900 mb-3">{step.title}</h3>
        <p className="text-warm-500 text-sm leading-relaxed mb-5">{step.desc}</p>

        {/* Details */}
        <ul className="space-y-2">
          {step.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2.5 text-sm text-warm-600">
              <CheckCircle2 className="w-4 h-4 text-sage-400 flex-shrink-0 mt-0.5" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-cream-100" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-200/50 to-transparent" />

      {/* Blobs */}
      <div className="absolute top-32 right-0 w-[300px] h-[300px] rounded-full bg-clay-50/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-0 w-[350px] h-[350px] rounded-full bg-sage-50/60 blur-3xl pointer-events-none" />

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
              <ClipboardList className="w-4 h-4" />
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] text-warm-900 mb-5 leading-tight"
          >
            Your journey from{' '}
            <span className="text-sage-500 italic">curious</span>{' '}
            to <span className="text-sage-500 italic">confident</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            A gentle, structured process designed to fit around your busy schedule. No pressure, no overwhelm — just steady, supported progress.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <p className="text-warm-500 mb-5">Ready to take the first step?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-flex"
          >
            Start with a Free Discovery Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
