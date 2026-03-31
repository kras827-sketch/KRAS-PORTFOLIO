"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function MotionBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax distances for the bubbles relative to document scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "-600px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0px", "400px"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0px", "-800px"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["0px", "-500px"]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-300 bg-[var(--background)]">
      {/* Top Left Blob */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 dark:bg-blue-900/20 blur-[100px] animate-blob"></div>
      
      {/* Bottom Right Blob */}
      <div className="absolute top-[50%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-sky-500/10 dark:bg-sky-900/20 blur-[100px] animate-blob animation-delay-2000"></div>
      
      {/* Center Blob */}
      <div className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-indigo-500/5 dark:bg-indigo-900/20 blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Floating Parallax Bubbles */}
      <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[15%] w-16 h-16 rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-400/10 to-transparent backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(59,130,246,0.15)]" />
      <motion.div style={{ y: y2 }} className="absolute top-[40%] right-[20%] w-32 h-32 rounded-full border border-sky-400/30 bg-gradient-to-br from-sky-400/10 to-transparent backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(14,165,233,0.15)]" />
      <motion.div style={{ y: y3 }} className="absolute top-[60%] left-[8%] w-24 h-24 rounded-full border border-indigo-400/30 bg-gradient-to-br from-indigo-400/10 to-transparent backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(99,102,241,0.15)]" />
      <motion.div style={{ y: y4 }} className="absolute top-[85%] right-[10%] w-12 h-12 rounded-full border border-blue-400/40 bg-gradient-to-br from-blue-400/20 to-transparent backdrop-blur-[2px] shadow-[inset_0_0_10px_rgba(59,130,246,0.25)]" />
      <motion.div style={{ y: y5 }} className="absolute top-[10%] right-[30%] w-20 h-20 rounded-full border border-sky-400/30 bg-gradient-to-br from-sky-400/10 to-transparent backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(14,165,233,0.15)]" />

      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
    </div>
  );
}
