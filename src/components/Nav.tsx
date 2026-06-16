'use client'

import { useState, useEffect } from 'react'

const LINKS = [
   { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/contact-us', label: 'Contact Us' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="/#top" className="flex items-center gap-2 group">
          <span className="text-xl">🍽️</span>
          <span className="font-display font-semibold text-lg tracking-tight">Menumine</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/70 hover:text-ink transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="bg-ink text-paper text-sm font-medium px-4 py-2 rounded-full hover:bg-tandoor transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          Get started
        </a>
      </div>
    </nav>
  )
}
