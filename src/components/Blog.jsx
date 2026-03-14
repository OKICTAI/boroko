import { useState, useRef } from 'react'
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
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Blog() {
  const [selected, setSelected] = useState(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

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
                onClick={() => setSelected(post)}
                className="card card-hover text-left p-6 flex flex-col gap-4 w-full group"
              >
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
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      <AnimatePresence>
        {selected && (
          <ArticleModal post={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
