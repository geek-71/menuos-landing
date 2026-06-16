const FEATURES = [
  {
    icon: '⚡',
    title: 'Toggle items in real time',
    body: "Out of fish today? Flip a switch. It's off the menu instantly, on every table — no reprinting, no crossing it out by hand.",
  },
  {
    icon: '🍛',
    title: 'Variants without the spreadsheet',
    body: 'Full, half, quarter. Plain, butter, garlic. Set sizes and prices once per dish — customers pick what they want.',
  },
  {
    icon: '📣',
    title: 'A banner that sells for you',
    body: 'Feature your bestseller or run a weekend special right at the top of the menu, the first thing customers see.',
  },
  {
    icon: '🎨',
    title: 'Five themes, zero design skills',
    body: 'Classic, Modern, Bold, Earthy, Dark. Pick one that matches your dining room — applied instantly, no developer needed.',
  },
  {
    icon: '⭐',
    title: 'See what people actually think',
    body: 'Star ratings and feedback land in your dashboard after every visit, so you know what to fix before it becomes a pattern.',
  },
  {
    icon: '📱',
    title: 'Built for one phone, one hand',
    body: 'Every screen — yours and your customers\' — is designed mobile-first. No pinch-to-zoom, no sideways scrolling.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white/40 border-y border-line">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-medium text-tandoor uppercase tracking-wide mb-3">
            
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-balance">
            Everything you need to run the menu, nothing you have to learn.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(f => (
            <div
              key={f.title}
              className="bg-paper border border-line rounded-2xl p-6 hover:border-tandoor/30 transition-colors"
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="font-display text-lg font-semibold mt-4 mb-1.5">
                {f.title}
              </h3>
              <p className="text-ink/65 text-[14px] leading-relaxed">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
