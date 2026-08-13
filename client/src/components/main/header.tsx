import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "@/constants/data";
import ThemeSwitcher from "./theme-switcher";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-line/60 bg-background/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`layout flex items-center justify-between gap-4 text-[10px] tracking-[0.15em] text-muted uppercase transition-[height] duration-300 ease-out sm:text-xs ${
          scrolled ? "h-14" : "h-24 sm:h-32"
        }`}
      >
        <ThemeSwitcher />

        <div className="flex items-center gap-2">
          {navLinks.map((link, i) => (
            <span key={link.to} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-muted/60" aria-hidden>
                  /
                </span>
              )}
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-main ${isActive ? "text-main" : "text-muted"}`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}
