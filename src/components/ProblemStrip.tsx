'use client'

import { useEffect, useRef, useState } from 'react'

const OLD_WAYS = [
  'Reprinting the whole menu because one price changed',
  'Customers squinting at a laminated card in dim lighting',
  '"Sorry, that\'s not available anymore" — said out loud, every day',
]

export function ProblemStrip() {
  const [struck, setStruck] = useState<boolean[]>(OLD_WAYS.map(() => false))
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'))
            setTimeout(() => {
              setStruck(prev => {
                const next = [...prev]
                next[idx] = true
                return next
              })
            }, idx * 200)
          }
        })
      },
      { threshold: 0.6 },
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-y border-line bg-white/40">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <p className="text-sm font-medium text-muted uppercase tracking-wide mb-6">
          The old way
        </p>
        <ul className="space-y-5">
          {OLD_WAYS.map((text, i) => (
            <li
              key={text}
              ref={el => { refs.current[i] = el }}
              data-idx={i}
              className={`strike-on-scroll inline-block font-display text-xl md:text-2xl text-ink/80 ${
                struck[i] ? 'is-struck text-ink/40' : ''
              }`}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
