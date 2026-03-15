import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowRight, X, ChevronLeft } from 'lucide-react'
import { posts } from '../data/posts'

const ease = [0.22, 1, 0.36, 1]

const categoryColors = {
  Productivity: 'bg-sage-50 text-sage-600 border-sage-100',
  Careers: 'bg-clay-50 text-clay-600 border-clay-100',
  'Tips & Tricks': 'bg-amber-50 text-amber-700 border-amber-100',
  'Policy & Research': 'bg-blue-50 text-blue-700 border-blue-100',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-PG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, j) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={j} className="font-semibold text-warm-800">
        {part.replace(/\*\*/g, '')}
      </strong>
    ) : (
      part
    )
  )
}

function renderContent(content) {
  return content.split('\n\n').map((block, i) => {
    // ## Section heading
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-xl font-serif text-warm-900 mt-10 mb-3 pb-2 border-b border-warm-100">
          {block.slice(3)}
        </h2>
      )
    }
    // ### Sub-heading
    if (block.startsWith('### ')) {
      return (
        <h3 key={i} className="text-lg font-serif text-warm-900 mt-7 mb-2">
          {block.slice(4)}
        </h3>
      )
    }
    // Standalone **bold** line used as heading
    if (block.startsWith('**') && block.endsWith('**') && !block.slice(2, -2).includes('**')) {
      return (
        <h3 key={i} className="text-base font-semibold text-warm-900 mt-7 mb-2">
          {block.slice(2, -2)}
        </h3>
      )
    }
    // Bullet list block (lines starting with • or -)
    const lines = block.split('\n')
    if (lines.every(l => l.startsWith('• ') || l.startsWith('- '))) {
      return (
        <ul key={i} className="space-y-1.5 my-2 pl-1">
          {lines.map((l, j) => (
            <li key={j} className="flex gap-2 text-warm-600 leading-relaxed">
              <span className="text-sage-400 flex-shrink-0 mt-0.5">•</span>
              <span>{renderInline(l.replace(/^[•\-] /, ''))}</span>
            </li>
          ))}
        </ul>
      )
    }
    // Regular paragraph
    return (
      <p key={i} className="text-warm-600 leading-relaxed">
        {renderInline(block)}
      </p>
    )
  })
}

function ArticleModal({ post, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 bg-warm-900/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.4, ease }}
        className="relative w-full max-w-2xl my-8 bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        {post.image && (
          <div className="w-full h-56 sm:h-72 overflow-hidden">
            <img src={`${import.meta.env.BASE_URL}${post.image}`} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-warm-100 px-7 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm text-warm-500 hover:text-warm-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-warm-400 hover:text-warm-700 hover:bg-warm-100 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-7 sm:px-10 py-8">
          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full border ${
                categoryColors[post.category] ?? 'bg-warm-50 text-warm-600 border-warm-100'
              }`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-warm-400">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1 text-xs text-warm-400">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-warm-900 leading-tight mb-4">
            {post.title}
          </h2>

          {(post.author || post.documentType) && (
            <div className="flex flex-wrap gap-x-5 gap-y-1 mb-8 text-xs text-warm-400 border-b border-warm-100 pb-5">
              {post.author && <span><span className="text-warm-500 font-medium">Author:</span> {post.author}</span>}
              {post.documentType && <span><span className="text-warm-500 font-medium">Type:</span> {post.documentType}</span>}
            </div>
          )}

          <div className="space-y-4">{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-sage-50 border border-sage-100">
            <p className="text-sm text-warm-700 mb-4 font-medium">
              Want to put this into practice? Book a free 1-on-1 coaching call.
            </p>
            <a
              href="https://calendar.app.google/ww9fxbTy2CsCMwT6A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-2.5"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Share */}
          <div className="mt-8 pt-6 border-t border-warm-100">
            <p className="text-xs font-medium text-warm-400 uppercase tracking-widest mb-4">Share this article</p>
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + window.location.pathname + '#' + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: '#1877F2' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.024 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.928-1.956 1.88v2.257h3.328l-.532 3.49h-2.796v8.437C19.612 23.097 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
              {/* X / Twitter */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.origin + window.location.pathname + '#' + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: '#000000' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' — ' + window.location.origin + window.location.pathname + '#' + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: '#25D366' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Blog() {
  const [selected, setSelected] = useState(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  // Open article from URL hash on load
  useEffect(() => {
    const slug = window.location.hash.replace('#', '')
    if (slug) {
      const match = posts.find(p => p.slug === slug)
      if (match) setSelected(match)
    }
  }, [])

  function openPost(post) {
    window.location.hash = post.slug
    setSelected(post)
  }

  function closePost() {
    history.pushState('', document.title, window.location.pathname + window.location.search)
    setSelected(null)
  }

  return (
    <>
      <section id="blog" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cream-100/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-200/50 to-transparent" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sage-50/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-14 lg:mb-18 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="flex justify-center mb-5"
            >
              <span className="section-label">
                <BookOpen className="w-4 h-4" />
                Blog
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-3xl lg:text-4xl xl:text-[2.75rem] text-warm-900 mb-4 leading-tight"
            >
              Articles &amp;{' '}
              <span className="text-sage-500 italic">insights</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease }}
              className="text-warm-500 leading-relaxed"
            >
              Practical AI tips, career advice, and guides written for professionals in Papua New Guinea.
            </motion.p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.button
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                onClick={() => openPost(post)}
                className="card card-hover text-left flex flex-col gap-0 w-full group overflow-hidden"
              >
                {/* Thumbnail */}
                {post.image && (
                  <div className="w-full h-44 overflow-hidden rounded-t-2xl">
                    <img
                      src={`${import.meta.env.BASE_URL}${post.image}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Card body */}
                <div className="flex flex-col gap-4 p-6 flex-1">
                {/* Category badge */}
                <span
                  className={`self-start text-xs font-medium px-3 py-1 rounded-full border ${
                    categoryColors[post.category] ?? 'bg-warm-50 text-warm-600 border-warm-100'
                  }`}
                >
                  {post.category}
                </span>

                <h3 className="text-lg font-serif text-warm-900 leading-snug group-hover:text-sage-600 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-sm text-warm-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-warm-100">
                  <div className="flex items-center gap-3 text-xs text-warm-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-medium text-sage-500 group-hover:text-sage-600 transition-colors">
                    Read
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
                </div>{/* end card body */}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      <AnimatePresence>
        {selected && (
          <ArticleModal post={selected} onClose={closePost} />
        )}
      </AnimatePresence>
    </>
  )
}
