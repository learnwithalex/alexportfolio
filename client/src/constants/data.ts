export const libraries = [
  "React Router",
  "Tailwind CSS",
  "Lucide React",
  "React Hook Form",
  "React Query",
  "Zustand",
  "Axios",
  "Zod",
  "Sonner",
  "Framer Motion",
];

export const GITHUB_USERNAME = "learnwithalex";

export const socials = [
  {
    label: "Github",
    href: `https://github.com/${GITHUB_USERNAME}`,
    icon: "github" as const,
  },
  {
    label: "X",
    href: "https://x.com/heisalexie",
    icon: "x" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/heisalexies",
    icon: "linkedin" as const,
  },
  {
    label: "Email",
    href: "mailto:alex@orzn.io",
    icon: "mail" as const,
  },
  // TODO(alex): drop a resume.pdf into client/public/ — this 404s until you do.
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: "resume" as const,
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  categories: string[];
  description: string;
  tech: string[];
  year: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "orizon",
    index: "01",
    title: "Orizon",
    categories: ["CLOUD", "INFRASTRUCTURE"],
    description:
      "Agent-based cloud hosting platform for the African market. Go control plane and node agents, git deploys, managed databases, dedicated servers, and a Cloudflare edge — with a data-residency tier built for Nigeria's compliance rules.",
    tech: ["GO", "TYPESCRIPT", "DOCKER", "POSTGRES", "NATS"],
    year: "2026",
    href: "https://orzn.io",
    image: "orizon",
  },
  {
    id: "pxxl",
    index: "02",
    title: "pxxl.app",
    categories: ["CLOUD", "DEPLOYMENT"],
    description:
      "Nigerian deployment platform in the Vercel/Railway mould, designed and shipped solo. The proving ground for everything that became Orizon.",
    tech: ["GO", "TYPESCRIPT", "DOCKER", "APIS"],
    year: "2025",
    href: "https://pxxl.app",
    image: "pxxl",
  },
  {
    id: "settlr",
    index: "03",
    title: "Settlr",
    categories: ["FINTECH", "PAYMENTS"],
    description:
      "Payment processing built on licensed banking rails — collections, settlement and payouts for Nigerian businesses, with a merchant dashboard and developer API.",
    tech: ["TYPESCRIPT", "POSTGRES", "APIS", "WEBHOOKS"],
    year: "2026",
    href: "https://payments.afriversedao.org",
    image: "settlr",
  },
  {
    id: "blincs",
    index: "04",
    title: "Blincs",
    categories: ["STREAMING", "MEDIA"],
    description:
      "Streaming platform with a custom player, built for the African creator economy and distributed across web, mobile and Android TV.",
    tech: ["NEXT.JS", "REACT NATIVE", "TYPESCRIPT", "TAURI"],
    year: "2025",
    href: "https://blincs.orzn.app",
    image: "blincs",
  },
  {
    id: "scarletdb",
    index: "05",
    title: "ScarletDB",
    categories: ["DEVELOPER TOOLS", "BAAS"],
    description:
      "Backend-as-a-service that provisioned managed Postgres behind a branded proxy layer. Now folded into Orizon's managed database product.",
    tech: ["TYPESCRIPT", "POSTGRES", "APIS"],
    year: "2025",
    href: "https://scarletdb.space",
    image: "scarletdb",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Stack", to: "/stack" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];
