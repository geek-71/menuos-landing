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
      { threshold: 0.3 }
    )

    refs.current.forEach(el => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-y border-line bg-white/40">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted sm:text-sm">
          The old way
        </p>

        <ul className="space-y-4 sm:space-y-5">
          {OLD_WAYS.map((text, i) => (
            <li
              key={text}
              ref={el => {
                refs.current[i] = el
              }}
              data-idx={i}
              className={`
                strike-on-scroll
                block
                break-words
                leading-relaxed
                font-display
                text-base
                text-ink/80
                sm:text-lg
                md:text-xl
                lg:text-2xl
                ${struck[i] ? 'is-struck text-ink/40' : ''}
              `}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// export function ProblemStrip() {
//   const [struck, setStruck] = useState<boolean[]>(OLD_WAYS.map(() => false))
//   const refs = useRef<(HTMLLIElement | null)[]>([])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const idx = Number(entry.target.getAttribute('data-idx'))
//             setTimeout(() => {
//               setStruck(prev => {
//                 const next = [...prev]
//                 next[idx] = true
//                 return next
//               })
//             }, idx * 200)
//           }
//         })
//       },
//       { threshold: 0.6 },
//     )
//     refs.current.forEach(el => el && observer.observe(el))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section className="border-y border-line bg-white/40">
//       <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
//         <p className="text-sm font-medium text-muted uppercase tracking-wide mb-6">
//           The old way
//         </p>
//         <ul className="space-y-5">
//           {OLD_WAYS.map((text, i) => (
//             <li
//               key={text}
//               ref={el => { refs.current[i] = el }}
//               data-idx={i}
//               className={`strike-on-scroll inline-block font-display text-xl md:text-2xl text-ink/80 ${
//                 struck[i] ? 'is-struck text-ink/40' : ''
//               }`}
//             >
//               {text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   )
// }
