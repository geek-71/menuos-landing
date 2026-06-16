"use client";

// This is the ONLY client component in the whole site.
// Keep it isolated so the rest of the contact page stays a server component.

import { useState } from "react";
import { contactSchema,ContactFormData } from '../lib/validations/contact'

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<
  Partial<Record<keyof ContactFormData, string>>
>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.preventDefault();

  setErrors({});
  setErrorMessage("");

  const form = e.currentTarget;

  const data = {
    name: (
      form.elements.namedItem("name") as HTMLInputElement
    ).value,

    email: (
      form.elements.namedItem("email") as HTMLInputElement
    ).value,

    phone: (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value,

    message: (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value,
  };

  const result = contactSchema.safeParse(data);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};

    result.error.issues.forEach((issue:any) => {
      const field = issue.path[0] as string;

      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    });

    setErrors(fieldErrors);
    return;
  }

  setState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }
      // ============================================================
      // TODO: Choose and implement a form submission method:
      //
      // OPTION A — Formspree (easiest, free tier available):
      //   1. Create account at formspree.io
      //   2. Replace YOUR_FORMSPREE_ID below
      //   const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(data),
      //   });
      //
      // OPTION B — Resend (recommended for full control):
      //   1. npm install resend
      //   2. Create /app/api/contact/route.ts
      //   3. POST to your own /api/contact endpoint
      //   const res = await fetch("/api/contact", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(data),
      //   });
      //
      // OPTION C — Simple mailto (no backend, no deliverability):
      //   window.location.href = `mailto:hello@menumine.in?subject=...`;
      //
      // For now, simulating success after 1.5s:
      // ============================================================
      // await new Promise((r) => setTimeout(r, 1500)); // TODO: Remove this mock
      // console.log("Form data:", data); // TODO: Remove this and implement real submission

      setState("success");
      form.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      setState("error");
      setErrorMessage(
        "Something went wrong. Please try again or email us directly."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {/* TODO: Customize success message */}
        <h3 className="font-semibold text-green-800 text-lg mb-1">Message sent!</h3>
        <p className="text-green-700 text-sm">
          We&apos;ll get back to you within 24 hours.
          {/* TODO: Update response time to match your actual SLA */}
        </p>
      </div>
    );
  }

  return (<form onSubmit={handleSubmit} className="space-y-5" noValidate > {/* Name */} <div> <label htmlFor="name" className="block text-sm font-medium text-brand-primary mb-1.5" > Your Name <span className="text-brand-accent">*</span> </label> <input type="text" id="name" name="name" autoComplete="name" placeholder="Ramesh Kumar" className={`w-full px-4 py-3 rounded-lg border bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 transition-colors ${ errors.name ? "border-red-500 focus:ring-red-200" : "border-brand-primary/20 focus:ring-brand-accent/40 focus:border-brand-accent" }`} /> {errors.name && ( <p className="mt-1 text-sm text-red-600"> {errors.name} </p> )} </div> {/* Email */} <div> <label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-1.5" > Email Address <span className="text-brand-accent">*</span> </label> <input type="email" id="email" name="email" autoComplete="email" placeholder="ramesh@yourrestaurant.com" className={`w-full px-4 py-3 rounded-lg border bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 transition-colors ${ errors.email ? "border-red-500 focus:ring-red-200" : "border-brand-primary/20 focus:ring-brand-accent/40 focus:border-brand-accent" }`} /> {errors.email && ( <p className="mt-1 text-sm text-red-600"> {errors.email} </p> )} </div> {/* Phone */} <div> <label htmlFor="phone" className="block text-sm font-medium text-brand-primary mb-1.5" > WhatsApp / Phone{" "} <span className="text-brand-muted font-normal"> (optional) </span> </label> <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="+91 98765 43210" className={`w-full px-4 py-3 rounded-lg border bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 transition-colors ${ errors.phone ? "border-red-500 focus:ring-red-200" : "border-brand-primary/20 focus:ring-brand-accent/40 focus:border-brand-accent" }`} /> {errors.phone && ( <p className="mt-1 text-sm text-red-600"> {errors.phone} </p> )} </div> {/* Message */} <div> <label htmlFor="message" className="block text-sm font-medium text-brand-primary mb-1.5" > Message <span className="text-brand-accent">*</span> </label> <textarea id="message" name="message" rows={5} placeholder="Tell us about your restaurant and what you need..." className={`w-full px-4 py-3 rounded-lg border bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 transition-colors resize-none ${ errors.message ? "border-red-500 focus:ring-red-200" : "border-brand-primary/20 focus:ring-brand-accent/40 focus:border-brand-accent" }`} /> {errors.message && ( <p className="mt-1 text-sm text-red-600"> {errors.message} </p> )} </div> {/* API Error */} {state === "error" && ( <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3"> {errorMessage} </p> )} <button type="submit" disabled={state === "submitting"} className="bg-tandoor w-full py-3.5 text-white disabled:opacity-60 disabled:cursor-not-allowed rounded-lg" > {state === "submitting" ? "Sending..." : "Send Message"} </button> </form>
    // <form onSubmit={handleSubmit} className="space-y-5" noValidate>

    //   {/* Name */}
    //   <div>
    //     <label htmlFor="name" className="block text-sm font-medium text-brand-primary mb-1.5">
    //       Your Name <span className="text-brand-accent">*</span>
    //     </label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       required
    //       autoComplete="name"
    //       placeholder="Ramesh Kumar"
    //       className="w-full px-4 py-3 rounded-lg border border-brand-primary/20 bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:border-brand-accent transition-colors"
    //     />
    //   </div>

    //   {/* Email */}
    //   <div>
    //     <label htmlFor="email" className="block text-sm font-medium text-brand-primary mb-1.5">
    //       Email Address <span className="text-brand-accent">*</span>
    //     </label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       required
    //       autoComplete="email"
    //       placeholder="ramesh@yourrestaurant.com"
    //       className="w-full px-4 py-3 rounded-lg border border-brand-primary/20 bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:border-brand-accent transition-colors"
    //     />
    //   </div>

    //   {/* Phone — optional but useful for Indian market */}
    //   <div>
    //     <label htmlFor="phone" className="block text-sm font-medium text-brand-primary mb-1.5">
    //       WhatsApp / Phone{" "}
    //       <span className="text-brand-muted font-normal">(optional)</span>
    //     </label>
    //     <input
    //       type="tel"
    //       id="phone"
    //       name="phone"
    //       autoComplete="tel"
    //       placeholder="+91 98765 43210"
    //       className="w-full px-4 py-3 rounded-lg border border-brand-primary/20 bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:border-brand-accent transition-colors"
    //     />
    //   </div>

    //   {/* Message */}
    //   <div>
    //     <label htmlFor="message" className="block text-sm font-medium text-brand-primary mb-1.5">
    //       Message <span className="text-brand-accent">*</span>
    //     </label>
    //     <textarea
    //       id="message"
    //       name="message"
    //       required
    //       rows={5}
    //       placeholder="Tell us about your restaurant and what you need..."
    //       className="w-full px-4 py-3 rounded-lg border border-brand-primary/20 bg-white text-brand-primary placeholder-brand-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:border-brand-accent transition-colors resize-none"
    //     />
    //   </div>

    //   {/* Error state */}
    //   {state === "error" && (
    //     <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
    //       {errorMessage}
    //     </p>
    //   )}

    //   {/* Submit */}
    //   <button
    //     type="submit"
    //     disabled={state === "submitting"}
    //     className="bg-tandoor w-full py-3.5 text-white disabled:opacity-60 disabled:cursor-not-allowed rounded-lg"
    //   >
    //     {state === "submitting" ? (
    //       <span className="flex items-center justify-center gap-2">
    //         <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
    //           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    //           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    //         </svg>
    //         Sending...
    //       </span>
    //     ) : (
    //       "Send Message"
    //     )}
    //   </button>

    //   {/* <p className="text-xs text-brand-muted text-center"> */}
    //   {/* TODO: Add link to your actual privacy policy */}
    //   {/* By submitting, you agree to our{" "} */}
    //   {/* <a href="/privacy" className="underline hover:text-brand-primary">
    //       Privacy Policy
    //     </a> */}
    //   .{/* TODO: Create /app/privacy/page.tsx */}
    //   {/* </p> */}
    // </form>
  );
}
