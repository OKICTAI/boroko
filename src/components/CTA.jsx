import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Mail, Phone, MapPin, CheckCircle2, ArrowRight, Clock, ExternalLink } from 'lucide-react'

const CALENDAR_LINK = 'https://calendar.app.google/ww9fxbTy2CsCMwT6A'

const ease = [0.22, 1, 0.36, 1]

const perks = [
  'Free 30-minute discovery session',
  'No obligation — just an honest conversation',
  'Tailored recommendations for your organisation',
  'Clear advice on where AI can make the most impact',
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'bri@olewalekilaviri.com', href: 'mailto:bri@olewalekilaviri.com' },
  { icon: Phone, label: 'Phone', value: '+675 7065 2953', href: 'tel:+67570652953' },
  { icon: MapPin, label: 'Location', value: 'Port Moresby, NCD, PNG', href: null },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: null },
]

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-cream-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-200/50 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full bg-sage-50/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-clay-50/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={ref} className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">
              <Calendar className="w-3.5 h-3.5" />
              Work With Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-bold text-warm-900 mb-5 leading-tight"
          >
            Ready to bring AI into{' '}
            <span className="text-sage-500">your organisation?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-warm-500 leading-relaxed"
          >
            Book a free discovery session. We'll discuss your organisation's needs, current context, and where AI can create the most practical value — no obligation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-2 space-y-6"
          >
            {/* What's included */}
            <div className="card p-7">
              <h3 className="font-display font-bold text-lg text-warm-900 mb-5">What to expect:</h3>
              <ul className="space-y-3.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-warm-600">
                    <div className="w-5 h-5 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-sage-500" />
                    </div>
                    <span className="text-sm">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="card p-7">
              <h3 className="font-display font-bold text-lg text-warm-900 mb-5">Contact us directly</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-sage-500" />
                    </div>
                    <div>
                      <div className="text-xs text-warm-400 font-medium">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-warm-700 hover:text-sage-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-warm-700">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}cta-new.jpg`}
                alt="O&K consultancy engagement"
                className="w-full h-48 object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Booking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="lg:col-span-3"
          >
            <div className="card p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-sage-100 border border-sage-200 flex items-center justify-center mx-auto mb-5">
                  <Calendar className="w-7 h-7 text-sage-500" />
                </div>
                <h3 className="text-2xl font-display font-bold text-warm-900 mb-2">
                  Book a discovery session
                </h3>
                <p className="text-warm-500 max-w-md mx-auto">
                  Select a 30-minute slot and we'll discuss your organisation's AI readiness and how O&K can help.
                </p>
              </div>

              {/* Calendar embed preview */}
              <div className="bg-sage-50/50 border border-sage-100 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-warm-800">O&amp;K ICT and AI Consultants</div>
                    <div className="text-sm text-warm-500">30-minute Discovery Session</div>
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {[
                    { icon: Clock, text: '30 minutes' },
                    { icon: MapPin, text: 'Google Meet (link provided on booking)' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-warm-600">
                      <Icon className="w-4 h-4 text-sage-400 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>

                <a
                  href={CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-base"
                >
                  Choose a Time Slot
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* What happens next */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest">After you book:</p>
                {[
                  'You\'ll receive a calendar invite with a Google Meet link',
                  'We\'ll send a brief agenda before the session',
                  'We\'ll discuss your organisation\'s context and AI goals',
                  'You\'ll receive tailored recommendations — no obligation to proceed',
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-sage-600">
                      {i + 1}
                    </span>
                    <span className="text-sm text-warm-600">{step}</span>
                  </div>
                ))}
              </div>

              {/* Nudge */}
              <div className="mt-6 flex items-start gap-3 px-5 py-4 rounded-xl bg-sage-50/70 border border-sage-100">
                <div className="text-lg flex-shrink-0">💬</div>
                <p className="text-sm text-warm-600 leading-relaxed">
                  <span className="font-semibold text-warm-800">Prefer to send a proposal request?</span> Email us directly at <a href="mailto:bri@olewalekilaviri.com" className="text-sage-600 hover:underline font-medium">bri@olewalekilaviri.com</a> and we'll respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
