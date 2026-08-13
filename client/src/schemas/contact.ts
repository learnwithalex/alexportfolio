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

export const CONTACT_EMAIL = "alex@orzn.io";
export const WHATSAPP_NUMBER = "2348102581339";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Where the contact form POSTs.
 *
 * Empty until the form API exists. It is NOT a leftover: the template shipped
 * pointing at a form endpoint belonging to its original author, so enquiries
 * would have landed in his inbox while the page showed a success modal. With
 * no endpoint set, the form composes a pre-filled email to CONTACT_EMAIL
 * instead — which works today, with no backend, and cannot silently deliver
 * someone's message to the wrong person.
 *
 * Set this to your own endpoint and the form POSTs to it instead; no other
 * change needed.
 */
export const CONTACT_FORM_URL = "";
