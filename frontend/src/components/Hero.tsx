"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Loader } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { downloadCV, downloadResume, getDownloadFilename } from "@/lib/pdf-utils";
import { cvData } from "@/data/cv-data";



const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const;

export default function Hero() {
  const [loadingCV, setLoadingCV] = useState(false);

  const handleDownloadCV = async () => {
    try {
      setLoadingCV(true);
      await downloadCV(cvData, getDownloadFilename("cv"));
    } catch (err) {
      console.error("Failed to download CV:", err);
    } finally {
      setLoadingCV(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "72px" }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[var(--blue-50)]/40 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[var(--blue-400)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[var(--sky-400)]/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--navy-700)] bg-white border border-[var(--border)] rounded-full shadow-sm">
                <span className="relative w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-[var(--green-500)] pulse-dot" />
                  <span className="relative block w-2 h-2 rounded-full bg-[var(--green-500)]" />
                </span>
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {SITE.heroHeadline}{" "}
              <em className="not-italic text-blue-500">{SITE.heroHighlight}</em>{" "}
              {SITE.heroHeadlineEnd}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
            >
              {SITE.heroSubtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                id="hero-explore"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[var(--navy-900)] rounded-full hover:bg-[var(--navy-800)] transition-all duration-200 hover:shadow-xl hover:shadow-navy-900/20 active:scale-[0.97]"
              >
                Explore Projects
                <ArrowRight size={16} />
              </a>

              <button
                onClick={handleDownloadCV}
                disabled={loadingCV}
                id="hero-download-cv"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[var(--navy-900)] bg-white border-2 border-[var(--navy-200)] rounded-full hover:border-[var(--navy-900)] hover:bg-[var(--navy-50)] transition-all duration-200 hover:shadow-lg active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingCV ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Download CV
                    <Download size={16} />
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex gap-4 items-center"
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--navy-400)] hover:text-[var(--blue-600)] transition-colors duration-200 flex items-center gap-1.5"
                >
                  {social.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative animate-float">
              {/* Main hero visual — abstract neural network card */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[var(--navy-900)] dark:border-[#222]">
                <img 
                  src="/images/new-hero.png" 
                  alt="Distributed ML Framework" 
                  className="w-full h-full object-cover shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" 
                />
              </div>

              {/* Floating card overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 left-6 right-6 sm:left-8 sm:right-auto sm:w-72 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-[var(--border-light)] p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--blue-600)] flex items-center justify-center text-white flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--navy-400)]">
                    Currently Building
                  </p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">
                    {SITE.currentlyBuilding}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
