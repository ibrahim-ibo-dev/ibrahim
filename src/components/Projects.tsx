"use client";

import {
  motion,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingObject from "./FloatingObject";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Home System",
    description:
      "A hardware project built with Arduino and various sensors. By combining five small projects, it creates a smart home system providing several smart home functionalities to simplify everyday life.",
    tags: ["Arduino", "Hardware", "DIY", "Sensors"],
    image: "/images/project-home.jpg",
    github: "#",
    live: "#",
    gradient: "from-accent/30 to-accent/15",
    status: "Completed",
  },
  {
    title: "Water Level Monitoring System",
    description:
      "Monitors water tank levels in real time. Sounds an alarm when the level drops below 15% or rises above 80%. Displays the current level with a progress bar for at-a-glance monitoring.",
    tags: ["Arduino", "Hardware", "DIY", "Sensors"],
    image: "/images/project-water.jpg",
    github: "#",
    live: "#",
    gradient: "from-accent/30 to-accent-light/20",
    status: "Completed",
  },
  {
    title: "School System",
    description:
      "An integrated system for managing school operations. Developed the front-end login and registration pages and integrated the database with the website logic. Graduation project in the third year of studies.",
    tags: ["Web", "Database Integration", "HTML", "CSS"],
    image: "/images/project-school.jpg",
    github: "#",
    live: "#",
    gradient: "from-accent-light/30 to-accent/20",
    status: "Completed",
  },
  {
    title: "Hand Drones",
    description:
      "A drone with a range of over 1.2 km, controlled manually using gyroscopic technology instead of a traditional joystick. Frame is built and code is ready; awaiting specific components from suppliers.",
    tags: ["Drone", "Hardware", "Gyroscope", "ESP"],
    image: "/images/project-drone.jpg",
    github: "#",
    live: "#",
    gradient: "from-accent/30 to-accent-light/20",
    status: "Ongoing",
  },
  {
    title: "Face Track Pro",
    description:
      "An automated attendance system using AI to record student and teacher presence via a classroom-installed camera. Redesigning with a custom-trained AI model for improved accuracy.",
    tags: ["AI", "Automation", "Python", "OpenCV"],
    image: "/images/project-face.jpg",
    github: "#",
    live: "#",
    gradient: "from-accent-light/30 to-accent/20",
    status: "Ongoing",
  },
  {
    title: "Glove Talk",
    description:
      "A speech-enabled glove designed to convert sign language into speech and text, enabling direct communication for the hearing impaired. Addressing the needs of ~250,000 people in Kurdistan and Iraq.",
    tags: ["Robotics", "AI", "Programming", "Hardware"],
    image: "/images/project-glove.jpg",
    github: "#",
    live: "#",
    gradient: "from-accent/30 to-accent/15",
    status: "Conceptualized",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative rounded-2xl glass-card overflow-hidden group cursor-default"
      >
        {/* Dynamic shadow */}
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
          style={{
            background: `linear-gradient(135deg, var(--accent), var(--accent-light))`,
            opacity: hovered ? 0.15 : 0,
          }}
        />

        {/* Card top */}
        <div className="relative h-52 overflow-hidden">
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10`} />
          {/* Dark base */}
          <div className="absolute inset-0 bg-[#12121A] z-0" />
          {/* Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50 group-hover:opacity-65 transition-opacity duration-500 z-5"
          />

          <div className="absolute inset-0 bg-[#0A0A0F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

          {/* Overlay buttons */}
          <motion.div
            initial={false}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-4 z-20"
          >
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full glass-card backdrop-blur-xl hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </motion.a>
            <motion.a
              href={project.live}
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full glass-card backdrop-blur-xl hover:bg-white/20 transition-colors"
              aria-label="Live Demo"
            >
              <FiExternalLink className="text-xl" />
            </motion.a>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute top-2 left-2 w-5 h-5 border-l border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-2 right-2 w-5 h-5 border-r border-b border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>
            <span className={`shrink-0 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-full border ${
              project.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" :
              project.status === "Ongoing" ? "bg-accent/10 text-accent/80 border-accent/20" :
              "bg-gray-500/10 text-gray-400 border-gray-500/20"
            }`}>
              {project.status}
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-accent/10 text-accent/80 border border-accent/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!headerRef.current) return;

    const anim = gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => { anim.scrollTrigger?.kill(); };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Diagonal sweep gradient */}
      <div className="absolute inset-0 projects-sweep" />
      {/* Accent glows at corners */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent-light/[0.03] rounded-full blur-[140px]" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          <div ref={headerRef} className="lg:col-span-3">
            <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase">
              // My Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl text-sm leading-relaxed">
              A collection of completed, ongoing, and conceptualized projects spanning
              hardware, AI, robotics, and web development.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-6" />
          </div>


        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
