import { useState } from "react";
import type { StackItem } from "@/constants/stack";

type StackIconProps = {
  item: StackItem;
  size?: number;
};

function OrizonMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-main"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8.5 13.25L12 8.75L15.5 13.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StackIcon({ item, size = 28 }: StackIconProps) {
  const [failed, setFailed] = useState(false);

  if (item.slug === "orizon") {
    return <OrizonMark size={size} />;
  }

  const src = item.iconUrl ?? `https://cdn.simpleicons.org/${item.slug}`;

  if (failed) {
    return (
      <span
        className="flex items-center justify-center rounded-md border border-line bg-secondary font-mono text-[10px] font-semibold tracking-wide text-muted uppercase"
        style={{ width: size, height: size }}
        aria-hidden
      >
        {item.name.slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-contain ${item.mono ? "stack-icon-mono" : ""}`}
      style={{ width: size, height: size }}
    />
  );
}
