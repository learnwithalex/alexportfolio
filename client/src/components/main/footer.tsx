import { currentYearRoman } from "@/helpers/toRoman";

export default function Footer() {
  const year = currentYearRoman();

  return (
    <footer className="layout pb-10 pt-6">
      <p className="text-left text-xs tracking-[0.18em] text-muted">
        <span
          className="uppercase"
          aria-label={`Year ${new Date().getFullYear()}`}
        >
          &copy;{year}
        </span>{" "}
        &bull; <span>Alexander</span>
      </p>
    </footer>
  );
}
