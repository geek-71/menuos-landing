export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-tandoor text-paper relative overflow-hidden">
      <div className="absolute inset-0 paper-grain opacity-10 pointer-events-none" />
      <div className="relative max-w-2xl mx-auto px-5 md:px-8 text-center">
        <h2 className="font-display text-3xl md:text-[2.6rem] font-medium leading-tight text-balance">
          Your customers already have
          <br />
          a phone in their hand.
        </h2>
        <p className="mt-5 text-paper/60 text-lg max-w-md mx-auto">
          Give it something better to look at than a sticky laminated card.
        </p>
        <a
          href="#pricing"
          className="inline-block mt-9 bg-paper text-tandoor font-medium px-7 py-3.5 rounded-full hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Get your menu online at ₹99
        </a>
      </div>
    </section>
  )
}
