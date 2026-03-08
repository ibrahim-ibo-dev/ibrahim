"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurvedText from "@/components/CurvedText";
import ScrollTypography from "@/components/ScrollTypography";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CurvedText />
      <ScrollTypography
        lines={[
          "PYTHON · C++ · AI · ROBOTICS · HARDWARE · PYTHON · C++ · AI ·",
          "BUILD · INNOVATE · DEVELOP · AUTOMATE · BUILD · INNOVATE ·",
        ]}
      />
      <About />
      <ScrollTypography
        lines={[
          "ARDUINO · AI · MACHINE LEARNING · DRONES · ARDUINO · AI ·",
          "PYTHON · C++ · HTML · CSS · MATLAB · PYTHON · C++ · HTML ·",
        ]}
      />
      <Skills />
      <Projects />
      <ScrollTypography
        lines={[
          "INNOVATE · SHIP · GROW · REPEAT · INNOVATE · SHIP · GROW ·",
          "AI · ROBOTICS · HARDWARE · SOFTWARE · AI · ROBOTICS ·",
        ]}
      />
      <Experience />
      <Credentials />
      <Contact />
    </main>
  );
}
