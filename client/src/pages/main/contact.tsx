import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  WhatsappIcon,
  ArrowUpRight01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import { CountrySelect, ContactSuccessModal } from "@/components/main";
import { SplitText } from "@/components/react-bits";
import {
  contactSchema,
  inquiryTypes,
  CONTACT_EMAIL,
  WHATSAPP_LINK,
  QUESTBASE_FORM_URL,
  type ContactFormValues,
} from "@/schemas/contact";
import { countries } from "@/constants/countries";

const fieldClass =
  "h-11 w-full rounded-lg border border-line bg-secondary px-4 text-sm text-main placeholder:text-muted transition-colors focus:border-main";

const labelClass = "mb-2 block text-sm font-medium text-muted";

export default function Contact() {
  const [successOpen, setSuccessOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      type: undefined,
      message: "",
      _gotcha: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const country = countries.find((c) => c.code === values.country);
    const inquiry = inquiryTypes.find((t) => t.value === values.type);

    try {
      await axios.post(
        QUESTBASE_FORM_URL,
        {
          name: values.name,
          email: values.email,
          country: country?.name ?? values.country,
          country_code: values.country,
          type: inquiry?.label ?? values.type,
          message: values.message,
          _gotcha: values._gotcha ?? "",
        },
        {
          headers: { Accept: "application/json" },
        }
      );

      reset();
      setSuccessOpen(true);
    } catch {
      toast.error("Something went wrong. Please try again or use WhatsApp.");
    }
  };

  return (
    <main className="pb-16">
      <section className="layout pb-10 pt-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SplitText
            text="Contact."
            tag="h1"
            className="font-brico text-[clamp(1.8rem,8vw,2.5rem)] leading-none font-medium tracking-tight text-main"
            textAlign="left"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
          />
          <p className="mt-3 text-[10px] font-medium tracking-[0.22em] text-muted uppercase sm:text-sm">
            Let&apos;s build something
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Tell me about your project, request an estimate, or book a short
            technical consultation. I usually reply within 10 mins.
          </p>
        </motion.div>
      </section>

      <section className="layout grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.85fr)] lg:gap-12">
        <div>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="relative space-y-5 overflow-hidden rounded-xl border border-line bg-secondary/30 p-5 sm:p-6"
            noValidate
          >
          <div>
            <label htmlFor="name" className={labelClass}>
              Name / Business name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe or Acme Ltd"
              className={fieldClass}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email / Business email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <CountrySelect
                value={field.value}
                onChange={field.onChange}
                error={errors.country?.message}
              />
            )}
          />

          <div>
            <label htmlFor="type" className={labelClass}>
              Inquiry type
            </label>
            <div className="relative">
              <select
                id="type"
                className={`${fieldClass} appearance-none pr-10`}
                defaultValue=""
                {...register("type")}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                size={18}
                color="currentColor"
                strokeWidth={1.75}
                className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted"
              />
            </div>
            {errors.type && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.type.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Share goals, timeline, or any useful context…"
              className="w-full resize-y rounded-lg border border-line bg-secondary px-4 py-3 text-sm text-main placeholder:text-muted transition-colors focus:border-main"
              {...register("message")}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            {...register("_gotcha")}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary h-11 w-full text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
          </motion.form>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted sm:justify-start">
            <span>Powered by</span>
            <a
              href="https://questbase.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-main transition-opacity hover:opacity-80"
            >
              <img
                src="https://questbase.vercel.app/logo.svg"
                alt=""
                className=" h-3.5 w-auto"
              />
              <span className="font-medium underline decoration-muted/40 underline-offset-2">
                Quest Base
              </span>
            </a>
          </p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-4 lg:pt-1"
        >
          <div>
            <h2 className="font-brico text-xl text-accent-gold">
              Quick contact
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Prefer a direct line? Reach me by email or WhatsApp.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-start gap-3 border border-line bg-secondary/40 p-4 transition-colors hover:border-accent-gold/50"
          >
            <span className="mt-0.5 text-main">
              <HugeiconsIcon
                icon={Mail01Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.75}
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs tracking-[0.16em] text-muted uppercase">
                Email
              </span>
              <span className="mt-1 block truncate text-sm text-main underline decoration-muted/40 underline-offset-4 group-hover:decoration-main">
                {CONTACT_EMAIL}
              </span>
            </span>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={16}
              color="currentColor"
              className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-px group-hover:-translate-y-px"
            />
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 border border-line bg-secondary/40 p-4 transition-colors hover:border-accent-gold/50"
          >
            <span className="mt-0.5 text-main">
              <HugeiconsIcon
                icon={WhatsappIcon}
                size={20}
                color="currentColor"
                strokeWidth={1.75}
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs tracking-[0.16em] text-muted uppercase">
                WhatsApp
              </span>
              <span className="mt-1 block text-sm text-main underline decoration-muted/40 underline-offset-4 group-hover:decoration-main">
                +234 813 741 1338
              </span>
            </span>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={16}
              color="currentColor"
              className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-px group-hover:-translate-y-px"
            />
          </a>
        </motion.aside>
      </section>

      <ContactSuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </main>
  );
}
