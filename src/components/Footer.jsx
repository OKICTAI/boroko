import { Mail, Phone, MapPin, ArrowRight, ChevronUp } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'AI Team Training', href: '#solution' },
    { label: 'AI Workflow Setup', href: '#solution' },
    { label: 'AI Policy Guidance', href: '#solution' },
    { label: 'Website Development', href: '#solution' },
  ],
  Company: [
    { label: 'About O&K', href: '#about' },
    { label: 'Our Process', href: '#how-it-works' },
    { label: 'Client Outcomes', href: '#testimonials' },
    { label: 'Blog & Insights', href: '#blog' },
  ],
}

const contactItems = [
  { icon: Mail, value: 'bri@olewalekilaviri.com', href: 'mailto:bri@olewalekilaviri.com' },
  { icon: Phone, value: '+675 7065 2953', href: 'tel:+67570652953' },
  { icon: MapPin, value: 'Port Moresby, PNG', href: null },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNavClick = (e, href) => {
    if (href === '#') return
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative bg-warm-900 text-warm-300 overflow-hidden">
      {/* Top CTA */}
      <div className="bg-sage-500">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-1">
                Ready to bring AI to your organisation?
              </h3>
              <p className="text-sage-100/80 text-sm">
                Book a free discovery session — no obligation.
              </p>
            </div>
            <a
              href="https://calendar.app.google/ww9fxbTy2CsCMwT6A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-sage-700 font-semibold hover:bg-cream-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <button onClick={scrollToTop} className="mb-5 group">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="O&K ICT and AI Consultants"
                className="h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>

            <p className="text-sm text-warm-400 leading-relaxed mb-6 max-w-xs">
              AI and ICT consulting for organisations in Papua New Guinea. Practical training, workflow improvement, and digital solutions that create lasting capability.
            </p>

            <div className="space-y-2.5">
              {contactItems.map(({ icon: Icon, value, href }) => (
                <div key={value} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-warm-500 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="text-sm text-warm-400 hover:text-white transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-warm-400">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-warm-500 uppercase tracking-widest mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="text-sm text-warm-400 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-warm-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-warm-500">
            © {new Date().getFullYear()} O&amp;K ICT and AI Consultants (Olewale &amp; Kilaviri Ltd). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-warm-500 hover:text-warm-300 transition-colors">Privacy</a>
            <span className="text-warm-700">·</span>
            <a href="#" className="text-xs text-warm-500 hover:text-warm-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-white/90 border border-warm-200 flex items-center justify-center text-warm-600 hover:text-sage-600 shadow-lg hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
