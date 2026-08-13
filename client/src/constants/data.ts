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

export const GITHUB_USERNAME = "learnwithjacksun";

export const socials = [
  {
    label: "Github",
    href: `https://github.com/${GITHUB_USERNAME}`,
    icon: "github" as const,
  },
  {
    label: "Email",
    href: "mailto:codewithjacksun@gmail.com",
    icon: "mail" as const,
  },
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
    id: "questpay",
    index: "01",
    title: "Questpay",
    categories: ["FINTECH", "PAYMENTS"],
    description:
      "A financial technology company, not a bank. Payment checkout for businesses to collect payments, built for SMBs in Nigeria with instant settlements.",
    tech: ["REACT", "NODE.JS", "TYPESCRIPT", "APIS"],
    year: "2026",
    href: "https://payments.questlabs.cc/",
    image: "questpay",
  },
  {
    id: "orizon",
    index: "02",
    title: "Orizon",
    categories: ["HOSTING", "DEPLOYMENT"],
    description:
      "Modern deployment and hosting platform, move your whole site from cPanel in one click, with git deploys, dedicated servers, and global edge delivery.",
    tech: ["NEXT.JS", "NODE.JS", "DOCKER", "APIS"],
    year: "2026",
    href: "https://orzn.io",
    image: "orizon",
  },
  {
    id: "questbase",
    index: "03",
    title: "Quest Base",
    categories: ["SAAS", "DEVELOPER TOOLS"],
    description:
      "Backend primitives SaaS so you can build less backend: form2mail, OTP verification, waitlists, spam/bot protection, webhooks, and a unified API with a developer dashboard.",
    tech: ["TYPESCRIPT", "APIS", "WEBHOOKS", "NODE.JS"],
    year: "2026",
    href: "https://questbase.vercel.app/",
    image: "questbase",
  },
  {
    id: "boxstreamz",
    index: "04",
    title: "BoxStreamz",
    categories: ["STREAMING", "ENTERTAINMENT"],
    description:
      "Streaming platform for movies, TV series, anime, and live sports; browse, watch, bookmark, and download in a fast, cached Next.js experience.",
    tech: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "APIS"],
    year: "2026",
    href: "https://boxstreamz.com/",
    image: "boxstreamz",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Stack", to: "/stack" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];
