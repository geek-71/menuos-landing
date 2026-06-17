const STEPS = [
  {
    n: '01',
    title: 'Upload your menu',
    body: 'Snap a photo or upload a PDF — even a multi-page one. Gemini reads the layout and pulls out every category, item, and price in seconds.',
  },
  {
    n: '02',
    title: 'Check and publish',
    body: 'Review what was extracted, fix anything that needs it, add photos. Pick a theme that matches your dining room. Go live for a one-time ₹99.',
  },
  {
    n: '03',
    title: 'Print one QR, done',
    body: 'Stick it on the table. Customers scan, see your real menu, order what\'s actually available today — not what was true when you last went to the printer.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-medium text-tandoor uppercase tracking-wide mb-3">
            How it works
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-balance">
            Three steps. No technical setup.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              {/* Connector line on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(100%-1rem)] w-8 h-px bg-line" />
              )}
              <span className="font-display text-5xl text-tandoor font-medium">
                {step.n}
              </span>
              <h3 className="font-display text-xl font-semibold mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-ink/65 leading-relaxed text-[15px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
