"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiGit,
  SiArduino,
  SiTensorflow,
  SiMysql,
  SiLinux,
  SiGithub,
} from "react-icons/si";
import { FaRobot, FaBrain } from "react-icons/fa";
import FloatingObject from "./FloatingObject";
import HolographicMesh from "./HolographicMesh";

const skills = [
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <SiCss />, color: "#1572B6" },
  { name: "Arduino", icon: <SiArduino />, color: "#00979D" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "AI / ML", icon: <FaBrain />, color: "#D4A574" },
  { name: "Robotics", icon: <FaRobot />, color: "#E8C9A0" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={sectionRef} className="pt-12 pb-32 relative overflow-hidden">
      {/* Animated dot grid */}
      <div className="absolute inset-0 skills-dot-grid opacity-60" />
      {/* Radial glow accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[180px]" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-accent-light/[0.03] rounded-full blur-[120px]" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">
            // Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-gradient">
            Skills &amp; Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -4, scale: 1.04 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-6 backdrop-blur-sm hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
            >
              <div
                className="text-3xl transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color}55)` }}
              >
                {skill.icon}
              </div>
              <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
