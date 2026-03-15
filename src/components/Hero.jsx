import { motion } from 'framer-motion'
import { ArrowRight, Building2, Star, ChevronRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease },
  }),
}

const trustAvatars = [
  { initials: 'GV', bg: 'bg-sage-500' },
  { initials: 'SP', bg: 'bg-clay-400' },
  { initials: 'TS', bg: 'bg-sage-700' },
  { initials: 'JN', bg: 'bg-warm-500' },
  { initials: 'ML', bg: 'bg-sage-400' },
]

export default function Hero() {
  const handleCTA = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cream-50" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sage-100/40 blur-3xl animate-breathe" />
        <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-clay-50/50 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-sage-50/60 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div className="space-y-8 max-w-xl">

            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="section-label">
                <Building2 className="w-3.5 h-3.5" />
                AI & ICT Consultancy · Papua New Guinea
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-bold leading-[1.1] tracking-tight text-warm-900 text-balance">
                Practical AI solutions for{' '}
                <span className="gradient-text-sage">organisations</span>{' '}
                in Papua New Guinea
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-warm-500 leading-relaxed"
            >
              We work with government teams, SMEs, schools, and NGOs to introduce practical AI tools, train staff, improve workflows, and support better digital delivery across PNG.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => handleCTA(e, '#contact')}
                className="btn-primary text-base"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#solution"
                onClick={(e) => handleCTA(e, '#solution')}
                className="btn-secondary text-base"
              >
                Explore Our Services
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2.5">
                {trustAvatars.map(({ initials, bg }, i) => (
                  <div
                    key={initials}
                    className={`w-9 h-9 rounded-full ${bg} border-2 border-cream-50 flex items-center justify-center text-[11px] font-bold text-white`}
                    style={{ zIndex: trustAvatars.length - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-warm-500">
                  Trusted by <span className="text-warm-800 font-semibold">50+ organisations</span> across PNG
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sage-200/40 animate-[spin_60s_linear_infinite]" />

              {/* Photo circle */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}hero-photo.jpg`}
                  alt="PNG professionals in a boardroom meeting"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 right-4 card px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center">
                  <span className="text-lg">🏛️</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-warm-800">Government Ready</div>
                  <div className="text-xs text-warm-400">Policy-aligned AI</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-4 -left-4 card px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-clay-100 flex items-center justify-center">
                  <span className="text-lg">👥</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-warm-800">Team Training</div>
                  <div className="text-xs text-warm-400">Staff capability uplift</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute top-1/2 -right-8 card px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-50 flex items-center justify-center">
                  <span className="text-lg">🇵🇬</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-warm-800">PNG-Based</div>
                  <div className="text-xs text-warm-400">Locally grounded</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
