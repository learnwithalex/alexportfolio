import {
  Hero,
  GithubActivity,
  FeaturedGallery,
  Projects,
} from "@/components/main";

export default function Home() {
  return (
    <main>
      <Hero />
      <GithubActivity />
      <FeaturedGallery />
      <Projects />
    </main>
  );
}
