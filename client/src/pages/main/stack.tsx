import { motion } from "framer-motion";
import { stackCategories } from "@/constants/stack";
import { StackIcon } from "@/components/main";
import { ShinyText, SplitText } from "@/components/react-bits";

export default function StackPage() {
  return (
    <main className="pb-16">
      <section className="layout pb-12 pt-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SplitText
            text="Stack & Tools."
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
            Languages · Frameworks · Software
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            A curated map of the languages, frameworks, and everyday software I
            use to design, build, and ship products.
          </p>
        </motion.div>
      </section>

      <div className="layout space-y-14">
        {stackCategories.map((category, categoryIndex) => (
          <motion.section
            key={category.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: categoryIndex * 0.04 }}
          >
            <div className="mb-5 border-b border-line pb-4">
              <h2 className="font-brico text-xl sm:text-2xl">
                <ShinyText
                  text={category.title}
                  color="var(--accent-gold)"
                  shineColor="#ffffff"
                  speed={2.5}
                  delay={0.4}
                  spread={120}
                />
              </h2>
              <p className="mt-1.5 text-sm text-muted">{category.description}</p>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
              {category.items.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-center gap-3 border border-line bg-secondary/40 px-3 py-3 transition-colors hover:border-accent-gold/50 hover:bg-secondary"
                >
                  <StackIcon item={item} size={26} />
                  <span className="truncate text-sm font-medium text-main">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
