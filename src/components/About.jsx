import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Globe, BookOpen, Heart, Users } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const credentials = [
  { icon: Award, label: 'Certified AI Practitioner', desc: 'Internationally accredited' },
  { icon: Globe, label: 'International Experience', desc: 'Australia, Singapore & PNG' },
  { icon: BookOpen, label: '15+ Years in ICT', desc: 'Deep industry knowledge' },
  { icon: Users, label: '300+ Trained', desc: 'Professionals across PNG' },
]

const values = [
  {
    emoji: '🌿',
    title: 'Meet You Where You Are',
    desc: 'Whether you\'ve never used AI or you\'re looking to level up, we adapt to your starting point. No assumptions, no judgement — just patient, supportive coaching.',
  },
  {
    emoji: '🎯',
    title: 'Practical Over Perfect',
    desc: 'We focus on what works in the real world. If an AI technique doesn\'t make your work easier or faster, we skip it and move to what does.',
  },
  {
    emoji: '🇵🇬',
    title: 'Built for PNG',
    desc: 'We know the bandwidth challenges, the workplace dynamics, and the professional culture of Papua New Guinea. Our coaching is designed with your reality in mind.',
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

      {/* Blobs */}
      <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-sage-50/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[350px] h-[350px] rounded-full bg-clay-50/40 blur-3xl pointer-events-none" />

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
              <Heart className="w-4 h-4" />
              About Your Coach
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] text-warm-900 mb-5 leading-tight"
          >
            Someone who{' '}
            <span className="text-sage-500 italic">genuinely cares</span>{' '}
            about your success
          </motion.h2>
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            {/* Coach card */}
            <div className="card p-7 mb-8">
              <div className="flex items-center gap-5 mb-5">
                <img
                  src="/logo.svg"
                  alt="O&K ICT and AI Consultants"
                  className="h-14 w-auto flex-shrink-0"
                />
                <div>
                  <div className="text-lg font-serif text-warm-900">O&amp;K ICT Consulting</div>
                  <div className="text-sm text-warm-500">Port Moresby, Papua New Guinea</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
                    <span className="text-xs text-sage-500 font-medium">Accepting new clients</span>
                  </div>
                </div>
              </div>

              <p className="text-warm-500 leading-relaxed text-sm">
                Personal AI coaching and ICT consulting for professionals who want to stay relevant, work smarter, and lead with confidence in the age of AI.
              </p>
            </div>

            {/* Warm photo */}
            <div className="rounded-3xl overflow-hidden mb-8 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80&fit=crop"
                alt="Diverse team working together"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 text-warm-600 leading-relaxed">
              <p>
                I started O&amp;K ICT Consulting because I saw too many talented professionals in Papua New Guinea being left behind by the AI wave — not because they weren't smart enough, but because nobody was teaching them in a way that actually made sense.
              </p>
              <p>
                International courses assume fast internet, unlimited budgets, and tech-savvy teams. That's not the reality for most of us in PNG. So I built something different: personal, patient, 1-on-1 AI coaching designed for real professionals doing real work in our local context.
              </p>
              <p>
                With over 15 years of experience in ICT and a deep passion for making technology accessible, I've helped hundreds of professionals — from government directors to bank managers — discover that AI isn't scary. It's empowering.
              </p>
              <p className="text-warm-800 font-medium">
                If you're ready to learn, I'm ready to teach. Let's do this together.
              </p>
            </div>
          </motion.div>

          {/* Right: Credentials + Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="space-y-6"
          >
            {/* Credentials */}
            <div className="card p-7">
              <h4 className="text-xs font-medium text-warm-400 uppercase tracking-widest mb-6">
                Credentials &amp; Experience
              </h4>
              <div className="space-y-5">
                {credentials.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-sage-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-warm-800">{label}</div>
                      <div className="text-xs text-warm-400">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-xs font-medium text-warm-400 uppercase tracking-widest px-1">
                My Coaching Philosophy
              </h4>
              {values.map(({ emoji, title, desc }) => (
                <div key={title} className="card p-5 card-hover flex gap-4">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{emoji}</div>
                  <div>
                    <div className="font-medium text-warm-800 mb-1 font-serif">{title}</div>
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
          className="card-soft bg-gradient-to-br from-sage-50/80 to-cream-100/80 p-10 lg:p-14 text-center rounded-4xl border border-sage-100/50"
        >
          <div className="text-4xl mb-5">🌱</div>
          <h3 className="text-2xl lg:text-3xl font-serif text-warm-900 mb-4 max-w-2xl mx-auto">
            My mission is simple
          </h3>
          <p className="text-lg text-warm-600 max-w-2xl mx-auto leading-relaxed">
            To help every professional in Papua New Guinea feel confident, capable, and excited about using AI in their work — one person at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
