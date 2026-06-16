// lib/validations/contact.ts

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) =>
        !value ||
        /^(\+91)?[6-9]\d{9}$/.test(
          value.replace(/\s+/g, "")
        ),
      {
        message: "Please enter a valid phone number",
      }
    ),

  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;