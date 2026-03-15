import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const clientTypes = [
  {
    emoji: '🏛️',
    title: 'Government & Public Sector',
    desc: 'Provincial and district administrations, government departments, and public agencies looking to improve reporting, correspondence, records management, and service delivery through practical AI tools.',
  },
  {
    emoji: '🏫',
    title: 'Schools & Education Providers',
    desc: 'Primary schools, secondary schools, colleges, and universities seeking to build AI literacy among staff, improve administrative efficiency, and prepare students for an AI-enabled workforce.',
  },
  {
    emoji: '🏢',
    title: 'SMEs & Corporate Teams',
    desc: 'Small and medium enterprises, retail operations, construction firms, and corporate teams that want to reduce admin burden, improve document workflows, and equip staff with practical AI skills.',
  },
  {
    emoji: '🌍',
    title: 'NGOs & Development Programs',
    desc: 'Non-government organisations, donor-funded programs, and development partners that need AI training for field and office teams, AI-assisted reporting, and digital capability uplift.',
  },
]

function ClientCard({ emoji, title, desc, index }) {
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
      <h3 className="text-lg font-display font-bold text-warm-900 mb-2 leading-snug">{title}</h3>
      <p className="text-warm-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Problem() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="who-we-serve" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-cream-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-200/50 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-sage-50/40 blur-3xl pointer-events-none" />

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
              <Users className="w-3.5 h-3.5" />
              Who We Serve
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-bold text-warm-900 mb-5 leading-tight"
          >
            Practical AI support for every type of{' '}
            <span className="text-sage-500">organisation in PNG</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            We work with all types of organisations — from government offices and schools to businesses and NGOs — wherever there is a need to build AI capability and improve how work gets done.
          </motion.p>
        </div>

        {/* Client type cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {clientTypes.map((client, i) => (
            <ClientCard key={client.title} {...client} index={i} />
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="text-center max-w-xl mx-auto"
        >
          <div className="card-soft p-8 lg:p-10 text-center">
            <p className="text-xl font-display font-bold text-warm-800 leading-relaxed mb-4">
              Not sure if we're the right fit?
            </p>
            <p className="text-warm-500 mb-5 text-sm leading-relaxed">
              Book a free discovery call and we'll give you an honest assessment of how AI can help your organisation — no obligation.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-sage-600 font-semibold hover:text-sage-700 transition-colors text-sm"
            >
              Talk to us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
