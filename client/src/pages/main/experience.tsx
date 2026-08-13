import { motion } from "framer-motion";
import { ExperienceTimeline } from "@/components/main";
import { SplitText } from "@/components/react-bits";

export default function ExperiencePage() {
  return (
    <main className="pb-16">
      <section className="layout pb-12 pt-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SplitText
            text="Experience."
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
            Roles · Products · Impact
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            A timeline of the teams, products, and platforms I have helped
            design, build, and ship — from client engagements to founder-led
            ventures.
          </p>
        </motion.div>
      </section>

      <ExperienceTimeline />
    </main>
  );
}
