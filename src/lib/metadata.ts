// ============================================================
// SEO METADATA - Single source of truth
// TODO: Update ALL values below before going live
// ============================================================

export const siteConfig = {
  // TODO: Replace with your actual brand name
  name: "Menumine",

  // TODO: Replace with your production domain (no trailing slash)
  url: "https://menumine.in",

  // TODO: Write your actual tagline (keep under 60 chars for title tags)
  tagline: "Digital QR Menus for Indian Restaurants",

  // TODO: Write a compelling meta description (120–158 chars ideal)
  description:
    "Menumine helps restaurants and dhabas go digital with instant QR menus. No app needed. Update your menu anytime. Get started free.",

  // TODO: Replace with your actual OG image path (1200x630px recommended)
  // Place the image at /public/og-image.png
  ogImage: "/og-image.png",

  // TODO: Replace with your Twitter/X handle if you have one
  twitterHandle: "@menumine_in",

  // TODO: Your business contact email (shown on contact page)
  contactEmail: "hello@menumine.in",

  // TODO: Your WhatsApp number for quick contact (optional — delete if unused)
  whatsappNumber: "+919942671046",

  // TODO: Replace with your actual signup URL (the external link)
  signupUrl: "https://app.menumine.in/signup",

  // Keywords targeting Indian restaurant owners searching for QR menu solutions
  // TODO: Refine these based on your keyword research
  keywords: [
    "QR menu for restaurants",
    "digital menu India",
    "restaurant QR code menu",
    "dhaba digital menu",
    "contactless menu India",
    "online menu maker India",
    "QR menu SaaS India",
  ],
};

// Page-level metadata — extend siteConfig per page
export const pageMetadata = {
  home: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  contact: {
    // TODO: Customize contact page title/description
    title: `Contact Us — ${siteConfig.name}`,
    description: `Have questions about ${siteConfig.name}? We'd love to help. Reach out and we'll get back to you within 24 hours.`,
  },
};
