import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata, siteConfig } from "@/lib/metadata";

// ============================================================
// PAGE-LEVEL METADATA
// ============================================================
export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  alternates: {
    canonical: `${siteConfig.url}/contact-us`,
  },
  openGraph: {
    url: `${siteConfig.url}/contact-us`,
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
  },
};

// This page is a server component (SSG) except for the <ContactForm /> island
export default function ContactPage() {
  return (
    <div className="bg-brand-surface min-h-screen section-padding pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Page heading */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <h1 className="mb-5 text-[2.75rem] sm:text-6xl md:text-[3.6rem] leading-[1.05] font-medium text-balance ">
            {/* TODO: Update page heading */}
            Get in touch
          </h1>
          <p className="text-lg mx-auto">
            {/* TODO: Update contact page subheading */}
            Have questions about setting up your QR menu? We&apos;re here to help.
            We typically respond within 24 hours.
          </p>
        </div>

        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* ── Left: Contact Info (server component, zero JS) ── */}
          <div className="space-y-8">
            <div>
              <h2 className="font-semibold text-brand-primary text-lg mb-6">
                {/* TODO: Update subheading */}
                Contact details
              </h2>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-primary">Email</p>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                    >
                      {/* TODO: Update in lib/metadata.ts */}
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                {/* WhatsApp — important for Indian market */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-primary">WhatsApp</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-muted hover:text-brand-accent transition-colors"
                    >
                      {/* TODO: Update in lib/metadata.ts */}
                      {siteConfig.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-primary">Response Time</p>
                    {/* TODO: Update to match your actual response SLA */}
                    <p className="text-sm text-brand-muted">Within 24 hours on weekdays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ teaser — good for SEO long-tail keywords */}
            {/* TODO: Add a full FAQ page later at /faq */}
            <div className="bg-white rounded-2xl border border-brand-primary/8 p-6">
              <h3 className="font-semibold text-brand-primary text-sm mb-4">
                Common questions
              </h3>
              <ul className="space-y-3">
                {[
                  // TODO: Replace with your actual FAQs
                  "How much does menumine cost?",
                  "Do customers need to download an app?",
                  "Can I add photos to my menu?",
                  "How do I update my menu items?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <span className="text-brand-accent text-sm mt-0.5">→</span>
                    <span className="text-sm text-brand-muted">{q}</span>
                  </li>
                ))}
              </ul>
              {/* TODO: Link to /faq page when created */}
              {/* <a href="/faq" className="text-xs text-brand-accent hover:underline mt-4 inline-block">View all FAQs →</a> */}
            </div>
          </div>

          {/* ── Right: Contact Form (client island) ── */}
          <div className="bg-white rounded-2xl border border-brand-primary/8 p-8 shadow-sm">
            <h2 className="font-semibold text-brand-primary text-lg mb-6">
              Send us a message
            </h2>
            {/* Only this component ships JS to the browser */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
