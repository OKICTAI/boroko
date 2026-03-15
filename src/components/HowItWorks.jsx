import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ClipboardList, Rocket, BarChart2, ArrowRight, CheckCircle2 } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Consultation',
    subtitle: 'Free · 30–60 minutes',
    desc: 'We start with a structured conversation about your organisation — your goals, current workflows, staff capability, and where AI could create the most value.',
    details: [
      'Understand your organisational context',
      'Identify priority workflows and pain points',
      'Assess current digital and AI readiness',
      'Answer all your questions about AI adoption',
    ],
    bg: 'bg-sage-50',
    iconBg: 'bg-sage-500',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Proposal & Engagement Plan',
    subtitle: '1–2 weeks',
    desc: 'We prepare a clear proposal outlining recommended services, a phased implementation plan, indicative costs, and expected outcomes specific to your organisation.',
    details: [
      'Tailored service recommendations',
      'Phased roadmap aligned to your priorities',
      'Clear deliverables and success measures',
      'Transparent pricing and engagement terms',
    ],
    bg: 'bg-clay-50',
    iconBg: 'bg-clay-400',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Delivery & Implementation',
    subtitle: 'Agreed timeline',
    desc: "We deliver the agreed programme — whether that's staff training workshops, AI workflow setup, policy development, or a combination — with hands-on support throughout.",
    details: [
      'Structured workshops and training sessions',
      'AI tool setup and workflow integration',
      'Staff onboarding and practical exercises',
      'Documentation and reference materials',
    ],
    bg: 'bg-sage-50',
    iconBg: 'bg-sage-600',
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Review & Ongoing Support',
    subtitle: 'Post-delivery',
    desc: 'After delivery, we measure outcomes against agreed KPIs and provide ongoing support to ensure your organisation continues to benefit from AI adoption.',
    details: [
      'Post-delivery review and evaluation',
      'KPI measurement and outcome reporting',
      'Ongoing advisory and refresher support',
      'Expansion planning for future phases',
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
      className="card p-7 lg:p-8 card-hover relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${step.bg} -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-5xl font-display font-bold text-warm-200">{step.number}</span>
          <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center`}>
            <step.icon className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">{step.subtitle}</div>
        <h3 className="text-xl font-display font-bold text-warm-900 mb-3">{step.title}</h3>
        <p className="text-warm-500 text-sm leading-relaxed mb-5">{step.desc}</p>

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
      <div className="absolute top-32 right-0 w-[300px] h-[300px] rounded-full bg-clay-50/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-0 w-[350px] h-[350px] rounded-full bg-sage-50/50 blur-3xl pointer-events-none" />

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
              <ClipboardList className="w-3.5 h-3.5" />
              Our Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-bold text-warm-900 mb-5 leading-tight"
          >
            How we engage with{' '}
            <span className="text-sage-500">your organisation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            A structured, transparent engagement process — from initial discovery through to delivery, evaluation, and ongoing support.
          </motion.p>
        </div>

        {/* Steps */}
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
          <p className="text-warm-500 mb-5 font-medium">Ready to discuss your organisation's AI needs?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-flex"
          >
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
