'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'


const LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/contact-us', label: 'Contact Us' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="/#top" className="flex items-center gap-2 group">
          <span className="text-xl">🍽️</span>
          <span className="font-display font-semibold text-lg tracking-tight">Menumine</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
            <a
              href="/#features"
              className="text-sm text-ink/70 hover:text-ink transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-sm text-ink/70 hover:text-ink transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              How it works
            </a>
            <a
              href="/#pricing"
              className="text-sm text-ink/70 hover:text-ink transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Pricing
            </a>
            <Link
              href="/contact-us"
              className="text-sm text-ink/70 hover:text-ink transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              Contact Us
            </Link>

        </div>
        <div
          className={`md:hidden absolute top-16 inset-x-0 transition-all duration-300 ${mobileOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
        >
          <div className="mx-4 mt-2 rounded-2xl border border-line bg-paper shadow-xl overflow-hidden">
            <a
              href="/#top"
              className="block px-5 py-4 text-sm text-ink/80 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>
            <a
              href="/#features"
              className="block px-5 py-4 text-sm text-ink/80 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="block px-5 py-4 text-sm text-ink/80 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              How it works
            </a>
            <a
              href="/#pricing"
              className="block px-5 py-4 text-sm text-ink/80 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            <Link
              href="/contact-us"
              className="block px-5 py-4 text-sm text-ink/80 hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
            {/* {LINKS.map((l) => (
              <a
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-4 text-sm text-ink/80 hover:bg-black/[0.03] transition-colors"
              >
                {l.label}
              </a>
            ))} */}

            <div className="p-4 border-t border-line">
              <a
                href="https://menu-os-six.vercel.app"
                className="block text-center bg-ink text-paper py-3 rounded-xl font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden md:inline-flex bg-ink text-paper text-sm font-medium px-4 py-2 rounded-full hover:bg-tandoor transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Get started
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          >
            <span
              className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink my-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}
