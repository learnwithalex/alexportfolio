import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, FileViewIcon } from "@hugeicons/core-free-icons";
import { socials } from "@/constants/data";
import { SplitText } from "@/components/react-bits";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const iconMap = {
  github: null,
  mail: Mail01Icon,
  resume: FileViewIcon,
} as const;

export default function Hero() {
  return (
    <section className="layout pb-10 pt-2">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <SplitText
          text="Gift Jacksun."
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
          Software Developer &bull; 5 years
        </p>
        <p className="mt-4 flex max-w-md flex-wrap items-center gap-2 text-sm text-muted sm:text-base">
          Creator of
          <span className="flex items-center gap-1">
            <img
              src="https://payments.questlabs.cc/logo.svg"
              alt="Questpay Logo"
              className="brand-logo h-3.5 w-auto"
            />
            <span className="text-main underline decoration-muted/40 underline-offset-4">
              Questpay
            </span>
          </span>{" "}
          and{" "}
          <span className="flex items-center gap-1">
            <img
              src="https://questbase.vercel.app/logo.svg"
              alt="Questbase Logo"
              className="brand-logo h-3.5 w-auto"
            />
            <span className="text-main underline decoration-muted/40 underline-offset-4">
              Quest Base.
            </span>
          </span>
          
        </p>

        <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-main">
          {socials.map((social, i) => {
            const icon = iconMap[social.icon];
            const isExternal = social.href.startsWith("http");
            return (
              <li key={social.label} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-muted/50" aria-hidden>
                    ·
                  </span>
                )}
                <a
                  href={social.href}
                  target={isExternal || social.icon === "resume" ? "_blank" : undefined}
                  rel={
                    isExternal || social.icon === "resume"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-2"
                >
                  {social.icon === "github" ? (
                    <GithubMark className="size-4" />
                  ) : (
                    <HugeiconsIcon
                      icon={icon!}
                      size={16}
                      color="currentColor"
                      strokeWidth={1.75}
                    />
                  )}
                  <span className="underline decoration-main/70 underline-offset-4 transition-colors group-hover:decoration-main">
                    {social.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
