export function Footer() {
  return (
    <footer className="py-12 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-paper/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🍽️</span>
              <span className="font-display font-semibold text-paper">menumine</span>
            </div>
            <p className="text-sm max-w-xs">
              Digital menus for restaurants &amp; cafés in India. One QR, always up to date.
            </p>
          </div>

          <div className="flex gap-10 text-sm">
            <div className="space-y-2.5">
              <p className="text-paper/40 uppercase text-xs tracking-wide mb-1">Product</p>
              <a href="#features" className="block hover:text-paper transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40">Features</a>
              <a href="#pricing" className="block hover:text-paper transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40">Pricing</a>
              <a href="#how-it-works" className="block hover:text-paper transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40">How it works</a>
            </div>
            <div className="space-y-2.5">
              <p className="text-paper/40 uppercase text-xs tracking-wide mb-1">Account</p>
              <a href="https://menu-os-six.vercel.app" className="block hover:text-paper transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40">Sign in</a>
              <a href="https://menu-os-six.vercel.app" className="block hover:text-paper transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/40">Get started</a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} menumine. All rights reserved.</p>
          <p>Made for restaurant owners, not developers.</p>
        </div>
      </div>
    </footer>
  )
}
