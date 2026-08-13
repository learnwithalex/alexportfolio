import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import { GITHUB_USERNAME, projects } from "@/constants/data";
import { ShinyText } from "@/components/react-bits";

export default function Projects() {
  return (
    <section className="layout pb-24">
      <h2 className="font-brico mb-4 text-2xl sm:text-3xl">
        <ShinyText
          text="Projects"
          color="var(--accent-gold)"
          shineColor="#ffffff"
          speed={2.5}
          delay={0.4}
          spread={120}
        />
      </h2>

      <ul>
        {projects.map((project, i) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="border-t border-line first:border-t-0"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block py-8 md:pl-6 sm:py-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 hidden h-full w-1 origin-top scale-y-0 bg-accent-gold transition-transform duration-300 ease-in md:block md:group-hover:scale-y-100"
              />

              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 gap-3 sm:gap-6">
                  <span className="pt-1 font-mono text-xs text-muted tabular-nums">
                    {project.index}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-xl font-semibold tracking-tight text-main sm:text-2xl">
                        {project.title}
                      </h3>
                      <span className="hidden font-mono text-[10px] tracking-wider text-muted uppercase sm:inline sm:text-xs">
                        {project.categories.join(" · ")}
                      </span>
                    </div>

                    <p className="mt-1 font-mono text-[10px] tracking-wider text-muted uppercase sm:hidden">
                      {project.categories.join(" · ")}
                    </p>

                    <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted sm:text-[15px]">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <li
                          key={tag}
                          className="border border-line px-2 py-1 font-mono text-[10px] tracking-wider text-main uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3 pt-0.5 sm:gap-4 sm:pt-1">
                  <span className="text-sm text-muted tabular-nums">
                    {project.year}
                  </span>
                  <span className="flex size-9 items-center justify-center border border-line text-main transition-colors duration-300 ease-in md:group-hover:border-accent-gold md:group-hover:bg-accent-gold md:group-hover:text-background">
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={16}
                      color="currentColor"
                      strokeWidth={1.75}
                      className="transition-transform duration-300 ease-in md:group-hover:translate-x-px md:group-hover:-translate-y-px"
                    />
                  </span>
                </div>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>

      <a
        href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex items-start gap-3 border border-line bg-secondary/40 p-4 transition-colors hover:border-accent-gold/50 sm:p-5"
      >
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-line text-main transition-colors duration-300 ease-in md:group-hover:border-accent-gold md:group-hover:bg-accent-gold md:group-hover:text-background">
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5 text-sm font-medium text-main">
            See more projects on GitHub
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={14}
              color="currentColor"
              strokeWidth={1.75}
              className="shrink-0 transition-transform duration-300 ease-in group-hover:translate-x-px group-hover:-translate-y-px"
            />
          </span>
          <span className="mt-1.5 block text-[13px] leading-relaxed text-muted">
            The public repos are just the opening act. The really advanced work
            lives in private; some things are too interesting for a public
            profile.
          </span>
        </span>
      </a>
    </section>
  );
}
