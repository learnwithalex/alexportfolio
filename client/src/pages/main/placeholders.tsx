import { SplitText } from "@/components/react-bits";

type PlaceholderProps = {
  title: string;
};

function PlaceholderPage({ title }: PlaceholderProps) {
  return (
    <main className="layout pb-24">
      <SplitText
        text={title}
        tag="h1"
        className="font-brico text-3xl text-main sm:text-4xl"
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
      <p className="mt-3 text-muted">Coming soon.</p>
    </main>
  );
}

export function Experience() {
  return <PlaceholderPage title="Experience" />;
}
