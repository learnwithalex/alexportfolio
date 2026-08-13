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

export const CONTACT_EMAIL = "codewithjacksun@gmail.com";
export const WHATSAPP_NUMBER = "2348137411338";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const QUESTBASE_FORM_URL =
  "https://questbase.onrender.com/f/dfgagmbp";
