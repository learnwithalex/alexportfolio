import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Image01Icon } from "@hugeicons/core-free-icons";
import orizonImg from "@/assets/projects/orizon.png";
import pxxlImg from "@/assets/projects/pxxl.png";
import settlrImg from "@/assets/projects/settlr.png";
import blincsImg from "@/assets/projects/blincs.jpg";

type GalleryItem = {
  src?: string;
  alt: string;
};

// Captured from the live sites by scripts/shoot-projects.mjs — re-run it to
// refresh. ScarletDB is absent on purpose: it returns 402, and the script skips
// error pages because a screenshot of an error is worse than a missing frame.
const FRAMES: GalleryItem[] = [
  { src: orizonImg, alt: "Orizon landing page" },
  { src: settlrImg, alt: "Settlr landing page" },
  { src: pxxlImg, alt: "pxxl.app landing page" },
  { src: blincsImg, alt: "Blincs streaming platform" },
];

function Peg({ className }: { className: string }) {
  return (
    <span
      className={`absolute z-10 size-2 rounded-full bg-line shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--muted)_45%,transparent)] ${className}`}
      aria-hidden
    />
  );
}

function GalleryCard({ src, alt }: GalleryItem) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className="relative w-[min(85vw,320px)] shrink-0 rounded-[1.5rem] border border-line bg-secondary p-7 sm:w-[420px] sm:p-8">
      <Peg className="top-4 left-4" />
      <Peg className="top-4 right-4" />
      <Peg className="bottom-4 left-4" />
      <Peg className="right-4 bottom-4" />

      <div className="relative aspect-[16/10] overflow-hidden rounded-[0.85rem] border-4 border-line/70 bg-background shadow-xl">
        {showImage ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            draggable={false}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top select-none"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-muted"
            role="img"
            aria-label={alt}
          >
            <HugeiconsIcon
              icon={Image01Icon}
              size={40}
              color="currentColor"
              strokeWidth={1.5}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function FeaturedGallery() {
  const loop = [...FRAMES, ...FRAMES];

  return (
    <section className="featured-gallery w-full overflow-hidden pb-16">
      <div className="featured-marquee flex w-max gap-4 py-1 sm:gap-5">
        {loop.map((frame, i) => (
          <GalleryCard
            key={`${frame.alt}-${i}`}
            src={frame.src}
            alt={frame.alt}
          />
        ))}
      </div>
    </section>
  );
}
