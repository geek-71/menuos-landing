const INCLUDED = [
  'Unlimited menu items & categories',
  'Unlimited edits, anytime',
  'Your own QR code, ready to print',
  'Mutliple themes to match your space',
  'Customer ratings & feedback',
  'AI menu photo extraction',
]

const PLANS = [
  {
    name: "Starter",
    price: "₹99",
    duration: "3 months",
    description: "Perfect for trying out your digital menu.",
    cta: "Get started",
    href: "https://menu-os-six.vercel.app/",
    features: [
      "Digital QR menu",
      "Unlimited menu updates",
      "Multiple Themes",
      "Custom branding",
      "Basic analytics",
    ],
  },
  {
    name: "Growth",
    price: "₹249",
    duration: "6month + 1 months(free)",
    description: "Best value for growing restaurants.",
    featured: true,
    cta: "Choose Growth",
    href: "https://menu-os-six.vercel.app/",
    features: [
      "Everything in Starter",
      "Feature your bestseller",
      "Priority support",
      "Customer Review insights",
      "Menu scheduling",
    ],
  },
  {
    name: "Custom",
    price: "Let's talk",
    duration: "Enterprise",
    description:
      "Built for restaurants with multiple outlets and advanced requirements.",
    cta: "Contact sales",
    href: "/contact",
    features: [
      "Multi-outlet management",
      "On-desk ordering",
      "Payment integration",
      "Dedicated onboarding",
      "Advanced analytics",
      "Custom workflows",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white/40 border-y border-line">
      {/* <div className="max-w-lg mx-auto px-5 md:px-8 text-center">
        <p className="text-sm font-medium text-tandoor uppercase tracking-wide mb-3">
          Pricing
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
          One price. Pay once.
        </h2>
        <p className="text-ink/65 mb-10">
          Not a subscription. Not a &ldquo;starting from.&rdquo; You pay ₹99 when
          you publish, and your menu stays live.
        </p>

        <div className="bg-paper border-2 border-ink rounded-3xl p-8 md:p-10 text-left">
          <div className="flex items-end gap-2 justify-center mb-1">
            <span className="font-display text-6xl font-medium">₹99</span>
          </div>
          <p className="text-center text-muted text-sm mb-8">one-time onboarding fee</p>

          <ul className="space-y-3 mb-8">
            {INCLUDED.map(item => (
              <li key={item} className="flex items-center gap-3 text-[15px]">
                <span className="w-5 h-5 rounded-full bg-curry/10 text-curry flex items-center justify-center text-xs shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="/register"
            className="block w-full text-center bg-ink text-paper font-medium py-3.5 rounded-full hover:bg-tandoor transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2"
          >
            Get started
          </a>
          <p className="text-center text-xs text-muted mt-3">
            UPI, cards, net banking — secured by Razorpay
          </p>
        </div>
      </div> */}
      <div className="max-w-6xl mx-auto px-5 md:px-8">
    <div className="max-w-lg mx-auto text-center mb-14">
      <p className="text-sm font-medium text-tandoor uppercase tracking-wide mb-3">
        Pricing
      </p>

      <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
        Simple plans for every stage
      </h2>

      <p className="text-ink/65">
        Start small, grow confidently, or build a custom setup tailored to
        your restaurant operations.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {PLANS.map((plan) => (
        <div
          key={plan.name}
          className={`
            relative bg-paper border-2 rounded-3xl p-8 text-left transition-all
            ${
              plan.featured
                ? "border-tandoor shadow-xl md:-translate-y-3 bg-tandoor/5"
                : "border-ink hover:-translate-y-1"
            }
          `}
        >
          {plan.featured && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-tandoor px-4 py-1 text-xs font-medium text-paper">
              Most Popular
            </span>
          )}

          <p className="text-sm font-medium uppercase tracking-wide text-tandoor mb-2">
            {plan.name}
          </p>

          <div className="mb-2">
            <span className="font-display text-5xl font-medium">
              {plan.price}
            </span>
          </div>

          <p className="text-muted text-sm mb-2">
            {plan.duration}
          </p>

          <p className="text-ink/65 mb-8">
            {plan.description}
          </p>

          <ul className="space-y-3 mb-8">
            {plan.features.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[15px]"
              >
                <span className="w-5 h-5 rounded-full bg-curry/10 text-curry flex items-center justify-center text-xs shrink-0">
                  ✓
                </span>

                {item}
              </li>
            ))}
          </ul>

          <a
            href={plan.href}
            className={`
              block w-full text-center font-medium py-3.5 rounded-full transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              ${
                plan.featured
                  ? "bg-tandoor text-paper hover:bg-tandoor/90 focus-visible:ring-tandoor"
                  : "bg-ink text-paper hover:bg-tandoor focus-visible:ring-tandoor"
              }
            `}
          >
            {plan.cta}
          </a>

          {plan.name === "Custom" && <p className="text-center text-xs text-muted mt-3">
            Dedicated implementation support"
          </p>}
        </div>
      ))}
    </div>
  </div>
    </section>
  )
}
