// Server Component — zero JS

// TODO: Replace ALL placeholder testimonials with real quotes from real customers
// Important for SEO + conversion: use real names, real locations, real businesses
const TESTIMONIALS = [
  {
    quote:
      "Pehle menu print krana padta tha baar baar. Ab ek hi QR se kaam chal jaata hai. Bahut aasan hai.",
    // TODO: Replace with real customer name
    name: "Rajesh Sharma",
    // TODO: Replace with real business name
    business: "Sharma Dhaba",
    location: "Karol Bagh, Delhi",
    // TODO: Replace with real avatar image path under /public/avatars/
    // avatar: "/avatars/rajesh.jpg",
  },
  {
    quote:
      "My customers love scanning the QR code. They can see photos of every dish. Our orders went up noticeably.",
    // TODO: Replace with real customer name
    name: "Priya Nair",
    business: "Café Spice Garden",
    location: "Kochi, Kerala",
    // avatar: "/avatars/priya.jpg",
  },
  {
    quote:
      "Setup was surprisingly fast. I added all my menu items in one evening and printed the QR the next morning.",
    // TODO: Replace with real customer name
    name: "Mohammed Arif",
    business: "Biryani Corner",
    location: "Hyderabad, Telangana",
    // avatar: "/avatars/arif.jpg",
  },
];

export function Testimonials() {
  return (
    <section
      className="py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* TODO: Update heading */}
           <p className="text-sm font-medium text-tandoor uppercase tracking-wide mb-3">
            Experience Matter
          </p>
          <h2 id="testimonials-heading" className="font-display text-3xl sm:text-4xl  text-ink leading-tight">
            What Restaurant owners{" "}
            <span className="text-ink">says</span>
          </h2>
          {/* TODO: Update subheading */}
          <p className="mt-4  text-lg text-ink/65 leading-relaxed">
            From small dhabas to multi-outlet chains
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-tandoor/5 border border-tandoor/20 rounded-2xl p-6 flex flex-col gap-4 text-ink"
            >
              {/* Star rating — TODO: Only show if customer actually gave 5 stars */}
              <div aria-label="5 out of 5 stars" role="img">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow text-sm">{star}</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <figcaption className="flex items-center gap-3">
                {/* Avatar placeholder — TODO: replace with real <Image /> */}
                <div className="w-10 h-10 rounded-full bg-ink/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-accent font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-ink text-sm font-semibold">{t.name}</p>
                  <p className="text-ink/65 text-xs">
                    {t.business} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
