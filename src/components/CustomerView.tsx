export function CustomerView() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-medium text-tandoor uppercase tracking-wide mb-3">
              What your customer sees
            </p>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-medium leading-tight mb-5 text-balance">
              They scan. They see everything they need. That&apos;s it.
            </h2>
            <ul className="space-y-4">
              {[
                'Categories and photos, not a wall of text',
                'Prices and prep time for every dish',
                'Half or full, plain or butter — their choice, clearly priced',
                'A rating to leave on the way out, if they want to',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-curry/10 text-curry flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-ink/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted text-sm">
              No app store, no account, no download. The menu opens like any web page.
            </p>
          </div>

          {/* Right: visual card mock (item card close-up) */}
          <div className="bg-white rounded-3xl border border-line p-6 md:p-8 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-muted mb-4">Mains</p>
            <div className="bg-paper rounded-2xl border border-line p-4 flex gap-4">
              <div className="flex-1">
                <span className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-tandoor/10 text-tandoor mb-2">
                  ⭐ Bestseller
                </span>
                <h4 className="font-display font-semibold text-lg">Butter Chicken</h4>
                <p className="text-sm text-ink/60 mt-1 leading-relaxed">
                  Slow-cooked chicken in a rich tomato-based butter sauce.
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-ink text-paper">
                    Full · ₹380
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-lg border border-line text-ink/60">
                    Half · ₹200
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-bold text-tandoor">₹380</span>
                  <span className="text-xs text-muted">⏱ 25 min</span>
                </div>
              </div>
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-amber-200 to-orange-300 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
