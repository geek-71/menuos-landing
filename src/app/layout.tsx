import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'menumine — Digital menus for restaurants & cafés',
  description:
    'Turn your physical menu into a QR-code menu in minutes. Upload a photo, we extract the items, you publish for ₹99 — once. No subscriptions, no apps to download.',
  openGraph: {
    title: 'menumine — Your menu, minus the laminate.',
    description: 'Scan a QR, see the menu, order with confidence. Built for Indian restaurants and cafés.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-paper text-ink antialiased">
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
