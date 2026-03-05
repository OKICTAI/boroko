import { Mail, Phone, MapPin, ArrowRight, ChevronUp } from 'lucide-react'

const footerLinks = {
  Navigation: [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Results', href: '#testimonials' },
    { label: 'Book a Call', href: '#contact' },
  ],
  Resources: [
    { label: 'AI Starter Guide', href: '#' },
    { label: 'Blog & Tips', href: '#' },
    { label: 'FAQ', href: '#' },
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
              <h3 className="text-xl font-serif text-white mb-1">
                Ready to start learning AI?
              </h3>
              <p className="text-sage-100/80 text-sm">
                Book a free, no-obligation discovery call today.
              </p>
            </div>
            <a
              href="https://calendar.app.google/ww9fxbTy2CsCMwT6A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-sage-700 font-medium hover:bg-cream-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Book Free Consultation
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
                src="/logo.svg"
                alt="O&K ICT and AI Consultants"
                className="h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </button>

            <p className="text-sm text-warm-400 leading-relaxed mb-6 max-w-xs">
              Personal 1-on-1 AI coaching for professionals in Papua New Guinea. Learn practical AI skills that transform how you work.
            </p>

            {/* Contact */}
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
              <h4 className="text-xs font-medium text-warm-500 uppercase tracking-widest mb-5">
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
            © {new Date().getFullYear()} O&amp;K ICT Consulting. All rights reserved. Port Moresby, PNG.
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
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/90 border border-warm-200 flex items-center justify-center text-warm-600 hover:text-sage-600 shadow-lg hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
