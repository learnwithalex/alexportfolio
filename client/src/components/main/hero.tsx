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

// X and LinkedIn are drawn inline rather than pulled from the icon set: the
// free Hugeicons package has no brand marks for either, and a wrong-looking
// social icon is more noticeable than a missing one.
function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

const BRAND_MARKS = {
  github: GithubMark,
  x: XMark,
  linkedin: LinkedInMark,
} as const;

const iconMap = {
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
          text="Alexander."
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
          Infrastructure &amp; Platform Engineer &bull; Lagos, Nigeria
        </p>
        <p className="mt-4 max-w-md text-sm text-muted sm:text-base">
          Self-taught. I build the layer other people deploy onto — control
          planes, node agents, and the edge in front of them. Co-founder of{" "}
          <a
            href="https://orzn.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-main underline decoration-muted/40 underline-offset-4 transition-colors hover:decoration-main"
          >
            Orizon
          </a>
          , a cloud platform built in Nigeria, for Africa.
        </p>

        <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-main">
          {socials.map((social, i) => {
            const BrandMark =
              social.icon in BRAND_MARKS
                ? BRAND_MARKS[social.icon as keyof typeof BRAND_MARKS]
                : null;
            const icon = iconMap[social.icon as keyof typeof iconMap];
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
                  {BrandMark ? (
                    <BrandMark className="size-4" />
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
