import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Globe, BookOpen, Building2, Users } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const credentials = [
  { icon: Award, label: 'Certified AI Practitioner', desc: 'Internationally accredited' },
  { icon: Globe, label: 'International Experience', desc: 'Australia, Singapore & PNG' },
  { icon: BookOpen, label: '15+ Years in ICT', desc: 'Deep industry knowledge' },
  { icon: Users, label: '300+ Staff Trained', desc: 'Across organisations in PNG' },
]

const values = [
  {
    emoji: '🎯',
    title: 'Practical Over Theoretical',
    desc: 'We focus on what works in real organisational environments. If an approach doesn\'t improve how your team works, we don\'t recommend it.',
  },
  {
    emoji: '🇵🇬',
    title: 'Built for the PNG Context',
    desc: 'We understand bandwidth constraints, public sector workflows, and the professional culture of Papua New Guinea. Our work is designed for your reality.',
  },
  {
    emoji: '🛡️',
    title: 'Responsible and Sovereign',
    desc: 'We advise on AI adoption that keeps your organisation in control of its data and decisions — aligned with PNG\'s evolving data governance and AI policy frameworks.',
  },
]

export default function About() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  const contentRef = useRef(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cream-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-200/50 to-transparent" />
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-sage-50/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[350px] h-[350px] rounded-full bg-clay-50/30 blur-3xl pointer-events-none" />

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
              <Building2 className="w-3.5 h-3.5" />
              About O&K
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-bold text-warm-900 mb-5 leading-tight"
          >
            Your AI and ICT partner{' '}
            <span className="text-sage-500">in Papua New Guinea</span>
          </motion.h2>
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            {/* Firm card */}
            <div className="card p-7 mb-8">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src={`${import.meta.env.BASE_URL}logo.svg`}
                  alt="O&K ICT and AI Consultants"
                  className="h-14 w-auto flex-shrink-0"
                />
                <div>
                  <div className="text-lg font-display font-bold text-warm-900">O&amp;K ICT and AI Consultants</div>
                  <div className="text-sm text-warm-500">Olewale &amp; Kilaviri Ltd · Port Moresby, PNG</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
                    <span className="text-xs text-sage-600 font-semibold">Accepting new client engagements</span>
                  </div>
                </div>
              </div>
              <p className="text-warm-500 leading-relaxed text-sm">
                A Papua New Guinean AI and ICT consultancy providing practical AI training, workflow improvement, digital systems development, and AI governance support for organisations across PNG.
              </p>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}cta-photo.jpg`}
                  alt="O&K consultant at work"
                  className="w-full h-48 object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}bri-olewale.jpg`}
                  alt="PNG government professionals with AI systems"
                  className="w-full h-48 object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4 text-warm-600 leading-relaxed">
              <p>
                O&amp;K ICT and AI Consultants was established to help Papua New Guinean organisations adopt AI practically, safely, and effectively. We recognised that most AI products and training programmes were designed for high-bandwidth, well-resourced environments — not for the realities of PNG's public sector, business community, and educational institutions.
              </p>
              <p>
                We bring together ICT expertise, AI implementation experience, and a deep understanding of the PNG context to deliver consultancy services that create genuine, measurable impact. Our work spans government departments, SMEs, schools, and NGOs — and we bring the same standard of professionalism and practical focus to every engagement.
              </p>
              <p>
                With over 15 years of ICT experience and a strong track record across the Pacific, we are equipped to advise on AI strategy, deliver staff training programmes, set up AI-assisted workflows, and support organisations through every stage of their AI adoption journey.
              </p>
              <p className="text-warm-800 font-semibold">
                If your organisation is ready to explore what AI can do — we are ready to help you get there.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="space-y-6"
          >
            {/* Credentials */}
            <div className="card p-7">
              <h4 className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-6">
                Credentials &amp; Experience
              </h4>
              <div className="space-y-5">
                {credentials.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-sage-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-warm-800">{label}</div>
                      <div className="text-xs text-warm-400">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-warm-400 uppercase tracking-widest px-1">
                Our Approach
              </h4>
              {values.map(({ emoji, title, desc }) => (
                <div key={title} className="card p-5 card-hover flex gap-4">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{emoji}</div>
                  <div>
                    <div className="font-display font-bold text-warm-800 mb-1">{title}</div>
                    <div className="text-sm text-warm-500 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
          className="card-soft bg-gradient-to-br from-sage-50/80 to-cream-100/80 p-10 lg:p-14 text-center rounded-2xl border border-sage-100/50"
        >
          <div className="text-4xl mb-5">🇵🇬</div>
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-warm-900 mb-4 max-w-2xl mx-auto">
            Our mission
          </h3>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto leading-relaxed">
            To help organisations across Papua New Guinea use AI to work more effectively, serve their communities better, and build genuine long-term digital capability — on their own terms.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
