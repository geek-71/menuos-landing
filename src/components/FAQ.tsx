'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'Do I need to redo this every time my menu changes?',
    a: 'No. Edits are unlimited and instant — toggle an item off, change a price, or add a new dish, and it updates on every customer\'s screen immediately. No reprinting, no re-uploading.',
  },
  { q: "Do my guests need to download an app?", 
    a: "No. Guests simply scan your QR code with their phone camera and the menu opens instantly in their browser. No app, no login, no friction whatsoever." 
  },
  {
    q: "What if I don't have a computer, just a phone?",
    a: 'Everything — uploading your menu, editing items, checking ratings — works on a phone browser. No app to install for you or your customers.',
  },
  {
    q: 'Can I have different prices for half/full portions?',
    a: 'Yes. Add variants like Full/Half/Quarter or Plain/Butter/Garlic with their own prices, set once per dish. Customers pick the one they want right on the menu.',
  },
  {
    q: 'What happens after I pay the ₹199?',
    a: 'Your menu goes live immediately at your own link, and your QR code is ready to download and print. There\'s nothing else to set up.',
  },
  { q: "Is payment integration available?", a: "Payment gateway integration is available on the Enterprise plan. Contact us to discuss your setup and get a custom quote." },
  // {
  //   q: 'Is there a monthly fee?',
  //   a: 'No. ₹199 is the only charge, ever, for your menu to stay live. We don\'t do subscriptions.',
  // },
  {
    q: 'What if my menu is handwritten or in a different language?',
    a: 'Upload a clear photo — our extraction handles most handwriting and regional scripts. You can always review and edit anything before publishing.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <p className="text-sm font-medium text-tandoor uppercase tracking-wide mb-3 text-center">
          Questions
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-12 text-center">
          Before you ask
        </h2>

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor"
                >
                  <span className="font-display font-medium text-[16px] md:text-[17px]">
                    {faq.q}
                  </span>
                  <span
                    className={`text-xl text-tandoor shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-ink/65 leading-relaxed text-[15px] pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
