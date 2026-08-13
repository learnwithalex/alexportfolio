import { z } from "zod";

export const inquiryTypes = [
  {
    value: "software-development",
    label: "Custom Software Development",
  },
  {
    value: "project-estimate",
    label: "Project Estimate & Quote",
  },
  {
    value: "consultation",
    label: "Technical Consultation",
  },
] as const;

export type InquiryType = (typeof inquiryTypes)[number]["value"];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name or business name"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  country: z.string().min(2, "Please select a country"),
  type: z.enum(
    ["software-development", "project-estimate", "consultation"],
    { message: "Please select an inquiry type" }
  ),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail (at least 10 characters)"),
  _gotcha: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

// TODO(alex): your real address — this is what the contact page shows and what
// the form falls back to while CONTACT_FORM_URL is empty.
export const CONTACT_EMAIL = "hello@example.com";
// TODO(alex): your WhatsApp number in international format, no + or spaces.
export const WHATSAPP_NUMBER = "2340000000000";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Where the contact form POSTs.
 *
 * DELIBERATELY EMPTY. The original pointed at a form endpoint belonging to the
 * developer this template came from, so every enquiry sent through this page
 * would have landed in HIS inbox — silently, and looking like success. Until
 * you put your own endpoint here (Formspree, Web3Forms, your own API, …) the
 * form refuses to submit and points people at email instead.
 */
export const CONTACT_FORM_URL = "";
