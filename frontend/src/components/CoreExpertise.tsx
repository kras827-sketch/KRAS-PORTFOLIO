"use client";

import { Server, Brain, Cloud } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { EXPERTISE_AREAS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={24} />,
  brain: <Brain size={24} />,
  cloud: <Cloud size={24} />,
};

export default function CoreExpertise() {
  return (
    <section id="expertise" className="relative">
      <div className="section-container">
        {/* Section header - left aligned per reference */}
        <AnimatedSection className="mb-14">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Core Expertise
          </h2>
          <p className="mt-3 text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed">
            Specializing in the intersection of high-scale software engineering
            and deep learning implementation.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_AREAS.map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 0.1}>
              <div className="card p-7 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--blue-50)] text-[var(--blue-600)] flex items-center justify-center mb-5">
                  {iconMap[area.icon]}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-[var(--text-primary)] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                  {area.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
