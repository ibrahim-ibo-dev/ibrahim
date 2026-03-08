"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const credentials = [
  {
    badge: "// Boxing",
    title: "1st Place — Iraq & Kurdistan Boxing Tournaments",
    subtitle: "Sports Achievement",
    text:
      "Earned 1st place in both the Iraq Boxing Tournament and the Kurdistan Boxing Tournament, demonstrating dedication, discipline, and competitive excellence.",
    accent: "from-accent-light/20 to-accent/10",
    dot: "bg-accent-light",
  },
  {
    badge: "// Cybersecurity",
    title: "Cyber CTF Challenge on HackTheBox",
    subtitle: "Technical Achievement",
    text:
      "Captured 31 flags in the Cyber CTF Challenge on HTB and led my university to be ranked as the top institution among all Iraqi universities participating in the competition.",
    accent: "from-accent/20 to-accent-light/10",
    dot: "bg-accent",
  },
  {
    badge: "// Programming",
    title: "Level 7 in CodeX Challenge",
    subtitle: "National Achievement · Iraq",
    text:
      "Reached Level 7 in the CodeX national programming challenge across Iraq. Also mastered Functions in C++ on Code Signal, demonstrating strong algorithmic and problem-solving skills.",
    accent: "from-accent/20 to-accent/10",
    dot: "bg-accent",
  },
];

export default function Credentials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="credentials"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Constellation starfield */}
      <div className="absolute inset-0 constellation-bg" />
      {/* Central nebula glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-light/[0.025] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">
            // Achievements
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-gradient">
            Honors &amp; Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {credentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative rounded-3xl border border-white/[0.07] bg-gradient-to-br ${item.accent} p-8 overflow-hidden group hover:border-white/15 transition-all duration-500`}
            >
              {/* Dot */}
              <div className={`w-2 h-2 rounded-full ${item.dot} mb-6 opacity-80`} />

              {/* Badge */}
              <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
                {item.badge}
              </span>

              {/* Content */}
              <p className="text-xs text-gray-500 font-mono mt-4 mb-2">{item.subtitle}</p>
              <h3 className="text-lg font-semibold text-white mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
