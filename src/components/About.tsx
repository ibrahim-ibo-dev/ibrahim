"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaMicrochip, FaRobot, FaBolt } from "react-icons/fa";
import FloatingObject from "./FloatingObject";
import AboutBackground from "./AboutBackground";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: <FaCode className="text-lg" />,
    title: "Software Development",
    desc: "Proficient in Python, C++, and MatLab with strong skills in HTML and CSS.",
    color: "from-accent/20 to-accent/10",
    textColor: "text-accent",
  },
  {
    icon: <FaMicrochip className="text-lg" />,
    title: "Hardware & Arduino",
    desc: "Building smart hardware systems with Arduino, sensors, and integrated circuits.",
    color: "from-accent/10 to-accent-light/20",
    textColor: "text-accent-light",
  },
  {
    icon: <FaRobot className="text-lg" />,
    title: "AI & Robotics",
    desc: "Developing AI-powered solutions and robotics systems with a passion for automation.",
    color: "from-accent-light/20 to-accent-light/10",
    textColor: "text-accent-light",
  },
  {
    icon: <FaBolt className="text-lg" />,
    title: "Innovation",
    desc: "Pushing boundaries with innovative projects like drone control and speech-enabled gloves.",
    color: "from-accent-light/10 to-accent/20",
    textColor: "text-accent",
  },
];

const stats = [
  { value: "5+", label: "Languages" },
  { value: "11+", label: "Projects" },
  { value: "5+", label: "Achievements" },
  { value: "2+", label: "Years Exp" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!sectionRef.current) return;

    const reveals = sectionRef.current.querySelectorAll(".about-reveal");
    const triggers: ScrollTrigger[] = [];

    reveals.forEach((el, i) => {
      const anim = gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
      if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);



  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      <AboutBackground />
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
            // About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-gradient">
            Ibrahim Hussein
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-6" />
        </motion.div>

        <div>
          {/* Content */}
          <div>
            <div className="about-reveal">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
                A passionate developer building{" "}
                <span className="text-gradient">the future with AI &amp; Robotics</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-[15px]">
                I&apos;m a Computer Engineering student at a French university. Though a student, I am very
                active both on campus and beyond. I also assist with projects in my college club&mdash;a space
                where students develop innovative technology projects.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                I am proficient in programming languages such as Python, C++, and MatLab, and have strong skills
                in HTML and CSS. Additionally, I have a great passion for developing AI and possess extensive
                knowledge in data integration.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-8 about-reveal">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl glass-card">
                  <div className="text-xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="about-reveal flex items-start gap-3 p-4 rounded-2xl glass-card group/card cursor-default"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} ${item.textColor} shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
