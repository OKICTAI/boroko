import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Users, FileText, ShieldCheck, Globe, BarChart2, Briefcase, ArrowRight
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const services = [
  {
    icon: Users,
    title: 'AI Training for Teams',
    desc: 'Structured workshops and coaching programmes that build genuine AI capability across your organisation — from frontline staff to management.',
    color: 'bg-sage-100 text-sage-600',
  },
  {
    icon: FileText,
    title: 'Document & Reporting Productivity',
    desc: 'We set up AI-assisted workflows for drafting reports, summarising documents, managing correspondence, and improving document output across departments.',
    color: 'bg-clay-100 text-clay-500',
  },
  {
    icon: ShieldCheck,
    title: 'AI Policy & Safe Use Guidance',
    desc: 'We help organisations develop internal AI use policies, safe use guidelines, data handling protocols, and governance frameworks aligned with PNG law.',
    color: 'bg-sage-100 text-sage-600',
  },
  {
    icon: Globe,
    title: 'Website & Digital Systems',
    desc: 'Professional website development, digital infrastructure setup, and systems integration for organisations building a stronger digital presence.',
    color: 'bg-warm-100 text-warm-600',
  },
  {
    icon: BarChart2,
    title: 'AI Workflow Setup',
    desc: 'We identify, design, and implement practical AI-powered workflows for your specific operational context — saving time and reducing errors.',
    color: 'bg-sage-100 text-sage-600',
  },
  {
    icon: Briefcase,
    title: 'Executive AI Briefings',
    desc: 'Board-level and leadership briefings on AI strategy, opportunities, risks, and how PNG organisations can adopt AI responsibly and effectively.',
    color: 'bg-clay-100 text-clay-500',
  },
]

function ServiceCard({ icon: Icon, title, desc, color, index }) {
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
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-display font-bold text-warm-900 mb-2">{title}</h3>
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
      <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-sage-50/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-[350px] h-[350px] rounded-full bg-clay-50/40 blur-3xl pointer-events-none" />

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
              <Briefcase className="w-3.5 h-3.5" />
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-bold text-warm-900 mb-5 leading-tight"
          >
            What we deliver for{' '}
            <span className="text-sage-500">your organisation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            From staff training and workflow automation to AI governance and digital systems — we provide practical, end-to-end support for AI adoption in your organisation.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
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
          <div className="flex-1">
            <h3 className="text-2xl font-display font-bold text-warm-900 mb-3">
              Every engagement is tailored to your organisation.
            </h3>
            <p className="text-warm-500 leading-relaxed">
              We don't offer off-the-shelf packages. We start by understanding your workflows, your team, and your context — then design and deliver a programme that creates measurable impact for your organisation.
            </p>
          </div>
          <div className="flex gap-8">
            {[
              { value: '3×', label: 'Faster report drafting', sublabel: 'avg. after implementation' },
              { value: '90%', label: 'Staff feel confident', sublabel: 'after training programme' },
            ].map(({ value, label, sublabel }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text-sage mb-1">{value}</div>
                <div className="text-sm font-semibold text-warm-800">{label}</div>
                <div className="text-xs text-warm-400">{sublabel}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
