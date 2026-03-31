"use client";

import { GitFork, Code } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";

export default function GitHubCTA() {
  return (
    <section className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--navy-50)] via-[var(--blue-50)]/50 to-[var(--navy-50)] border border-[var(--border-light)] px-8 py-16 sm:py-20 text-center">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" viewBox="0 0 600 300">
                {Array.from({ length: 20 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={30 + (i % 10) * 60}
                    cy={30 + Math.floor(i / 10) * 60}
                    r="1.5"
                    fill="currentColor"
                  />
                ))}
              </svg>
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="mx-auto w-14 h-14 rounded-2xl bg-[var(--blue-50)] border border-[var(--blue-100)] text-[var(--blue-600)] flex items-center justify-center mb-6">
                <Code size={24} />
              </div>

              {/* Heading */}
              <h2
                className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Want to see more of my code?
              </h2>

              <p className="text-[var(--text-secondary)] text-base max-w-md mx-auto mb-8 leading-relaxed">
                I have over 10+ repositories ranging from high-performance
                automation scripts to production-ready APIs.
              </p>

              {/* Button */}
              <a
                href="https://github.com/kras827-sketch"
                target="_blank"
                rel="noopener noreferrer"
                id="github-cta"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[var(--blue-600)] bg-white border-2 border-[var(--blue-200)] rounded-full hover:bg-[var(--blue-50)] hover:border-[var(--blue-400)] transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.97]"
              >
                <GitFork size={17} />
                Explore GitHub Profile
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
