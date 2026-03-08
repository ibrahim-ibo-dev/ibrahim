import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Portfolio | Creative Developer",
  description:
    "A premium futuristic developer portfolio showcasing projects, skills, and experience with immersive 3D elements and smooth animations.",
  keywords: ["developer", "portfolio", "web developer", "full-stack", "react", "next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
