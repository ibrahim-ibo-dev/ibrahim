"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#credentials", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 1.2 }
    );
  }, []);

  return (
    <header
      ref={navRef}
      style={{ opacity: 0 }}
      className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 justify-center"
    >
      <div
        style={{
          minWidth: "min(350px, 88vw)",
          maxWidth: "min(360px, 88vw)",
          WebkitTapHighlightColor: "transparent",
        }}
        className="flex w-[88vw] items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2.5 select-none"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm font-medium"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 border border-accent/40 text-[12px] font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 48 48"
              aria-hidden="true"
              focusable="false"
              className="text-accent"
            >
              <g
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path d="m24 27l-10-6l-10 6v12l10 6l10-6zm20 0l-10-6l-10 6v12l10 6l10-6z" />
                <path d="M34 9L24 3L14 9v12l10 6l10-6z" />
              </g>
            </svg>
          </span>
          <span className="text-[13px] text-white">Ibrahim</span>
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className="rounded-full px-3 py-1.5 hover:bg-accent/10 hover:text-white hover:border-accent/30 border border-transparent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            style={{ WebkitTapHighlightColor: "transparent" }}
            className="rounded-full px-3 py-1.5 bg-accent/20 hover:bg-accent/30 text-accent hover:text-white border border-accent/30 transition-colors"
          >
            View CV
          </a>
        </nav>
      </div>
    </header>
  );
}
