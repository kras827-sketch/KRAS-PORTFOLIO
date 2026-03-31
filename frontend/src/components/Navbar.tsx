"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, Sun, Moon, Loader } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useTheme } from "next-themes";
import { downloadResume, getDownloadFilename } from "@/lib/pdf-utils";
import { cvData } from "@/data/cv-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loadingResume, setLoadingResume] = useState(false);

  const handleDownloadResume = async () => {
    try {
      setLoadingResume(true);
      await downloadResume(cvData, getDownloadFilename("resume"));
    } catch (err) {
      console.error("Failed to download resume:", err);
    } finally {
      setLoadingResume(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // A bit more lenient margin for high res monitors
            return rect.top <= 200 && rect.bottom >= 200;
          }
          return false;
        });

        // Check if we hit the very bottom of the page for contact section
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
          setActiveSection("#contact");
        } else if (current) {
          setActiveSection(`#${current}`);
        }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[var(--border-light)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-[var(--navy-900)] flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">
            O
          </div>
          <span
            className="text-xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SITE.shortName}
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              onClick={() => setActiveSection(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activeSection === link.href
                  ? "text-[var(--blue-600)]"
                  : "text-[var(--navy-600)] hover:text-[var(--text-primary)] hover:bg-[var(--navy-50)] dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--blue-600)] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Resume & Theme toggle */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-[var(--navy-50)] text-[var(--navy-600)] hover:bg-[var(--blue-50)] hover:text-[var(--blue-600)] transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button
            onClick={handleDownloadResume}
            disabled={loadingResume}
            id="nav-resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--navy-900)] rounded-full hover:bg-[var(--navy-800)] transition-all duration-200 hover:shadow-lg hover:shadow-navy-900/20 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingResume ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Resume
                <FileDown size={15} />
              </>
            )}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 mr-1 rounded-full bg-[var(--navy-50)] text-[var(--navy-600)] hover:bg-[var(--blue-50)] hover:text-[var(--blue-600)] transition-colors dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-[var(--navy-600)] hover:bg-[var(--navy-50)] dark:text-zinc-400 dark:hover:bg-zinc-800"
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-[var(--border-light)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href
                      ? "text-[var(--blue-600)] bg-[var(--blue-50)]"
                      : "text-[var(--navy-600)] hover:bg-[var(--navy-50)]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleDownloadResume();
                }}
                disabled={loadingResume}
                className="block w-full mt-2 px-4 py-3 text-sm font-semibold text-center text-white bg-[var(--navy-900)] rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingResume ? "Generating..." : "Download Resume"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
