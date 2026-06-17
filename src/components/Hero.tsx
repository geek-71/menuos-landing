import { PhoneMockup } from './PhoneMockup'
import { LiveQRCode }  from './LiveQRCode'

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient texture */}
      <div className="absolute inset-0 paper-grain opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-8 items-center">
          {/* ── Left: copy ── */}
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 text-xs font-medium text-tandoor bg-tandoor/5 px-3 py-1.5 rounded-full mb-6  border-1 ">
              For restaurants &amp; cafés in India
            </p>
            <h1
            className="mb-5 text-[2.75rem] sm:text-6xl md:text-[3.6rem] leading-[1.05] font-medium text-balance "
          >
            Digital Menu,
            <br />
            <em className="text-tandoor not-italic">
              for Restaurants.
            </em>
          </h1>
            {/* <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-[3.6rem] leading-[1.05] font-medium text-balance">
              Your menu,
              <br />
              <span className="not italic ">minus the laminate.</span>
            </h1> */}

            <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-md">
              Scan a QR, see the menu, order with confidence. No app to download,
              no PDF to zoom into, no faded ink under dim lighting. Just your
              menu — fast, beautiful, always up to date.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="bg-ink text-paper font-medium px-6 py-3.5 rounded-full hover:bg-tandoor transition-colors text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                Get your menu online
              </a>
              <a
                href="#how-it-works"
                className="text-ink/70 hover:text-ink font-medium text-[15px] underline decoration-line decoration-2 underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tandoor focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                See how it works
              </a>
            </div>

            <p className="mt-5 text-sm text-muted">
             Digital Menu. Better Experience. Live in under 10 minutes.
            </p>
          </div>

          {/* ── Right: phone + QR (the signature element) ── */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -top-6 -right-2 md:right-6 z-20 animate-float">
              <div className="bg-white rounded-2xl shadow-xl shadow-ink/10 p-3.5 border border-line">
                <LiveQRCode value="https://menumine.app/menu/spice-garden" size={92} />
                <p className="text-[10px] text-center text-muted mt-1.5 font-medium">
                  Scan me — really
                </p>
              </div>
            </div>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
