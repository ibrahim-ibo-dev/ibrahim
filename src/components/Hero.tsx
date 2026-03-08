"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Scene3D from "./Scene3D";

export default function Hero() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      labelRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }
    )
      .fromTo(
        headlineRef.current,
        { y: 50, opacity: 0, filter: "blur(12px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.1 },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/70 to-transparent z-10" />

      <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
        <p
          ref={labelRef}
          className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-6"
          style={{ opacity: 0 }}
        >
          Hello, Welcome to My Portfolio
        </p>

        <h1
          ref={headlineRef}
          className="text-xl sm:text-1xl md:text-2xl font-semibold text-white leading-tight mb-5"
          style={{ opacity: 0 }}
        >
          I&apos;m Ibrahim Hussein
        </h1>

        <p
          ref={subtitleRef}
          className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed"
          style={{ opacity: 0 }}
        >
          Software Developer &amp; AI/Robotics Expert &mdash; Computer Engineering student at a French university,
          constantly pushing the boundaries of science and technology.
        </p>
      </div>
    </section>
  );
}
