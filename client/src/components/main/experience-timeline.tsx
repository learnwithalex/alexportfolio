import { motion } from "framer-motion";
import { experienceEntries } from "@/constants/experience";
import CountryFlag from "@/components/ui/country-flag";
import { ShinyText } from "@/components/react-bits";

function TimelineEntry({
  entry,
  index,
  isLast,
}: {
  entry: (typeof experienceEntries)[number];
  index: number;
  isLast: boolean;
}) {
  const content = (
    <div className=" relative min-w-0 flex-1 pb-10 sm:pb-12">

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <h3 className="text-lg font-semibold tracking-tight text-main sm:text-xl">
              {entry.company}
            </h3>
            {entry.countryCode && (
              <CountryFlag code={entry.countryCode} className="h-3.5 w-5" />
            )}
            {entry.tags?.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-wider text-muted uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-1 font-mono text-[10px] tracking-wider text-muted uppercase sm:text-xs">
            {entry.role} · {entry.period}
          </p>

          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted sm:text-[15px]">
            {entry.summary}
          </p>

          <ul className="mt-4 space-y-2">
            {entry.contributions.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[13px] leading-relaxed text-muted sm:text-[14px]"
              >
                <span
                  aria-hidden
                  className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-accent-gold/80"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2">
            {entry.tech.map((tag) => (
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
    </div>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative flex gap-5 sm:gap-8"
    >
      <div className="relative flex flex-col items-center">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.05 + 0.1 }}
          className="relative z-10 mt-1.5 size-3 shrink-0 rounded-full border-2 border-accent-gold bg-background"
          aria-hidden
        />
        {!isLast && (
          <span
            aria-hidden
            className="absolute top-4 bottom-0 w-px bg-line"
          />
        )}
      </div>

      {entry.href ? (
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block min-w-0 flex-1"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.li>
  );
}

export default function ExperienceTimeline() {
  return (
    <section className="layout pb-24">
      <h2 className="font-brico mb-8 text-2xl sm:text-3xl">
        <ShinyText
          text="Work History"
          color="var(--accent-gold)"
          shineColor="#ffffff"
          speed={2.5}
          delay={0.4}
          spread={120}
        />
      </h2>

      <ul>
        {experienceEntries.map((entry, i) => (
          <TimelineEntry
            key={entry.id}
            entry={entry}
            index={i}
            isLast={i === experienceEntries.length - 1}
          />
        ))}
      </ul>
    </section>
  );
}
