"use client";

import { Cpu, Cloud, Code, Database } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeader from "./ui/SectionHeader";
import { TECH_STACK } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu size={24} />,
  cloud: <Cloud size={24} />,
  code: <Code size={24} />,
  database: <Database size={24} />,
};

const iconColors = [
  "bg-[var(--blue-50)] text-[var(--blue-600)]",
  "bg-emerald-50 text-emerald-600",
  "bg-blue-50 text-blue-600",
  "bg-indigo-50 text-indigo-600",
];

export default function TechStack() {
  return (
    <section id="stack" className="relative bg-[var(--navy-50)]/50">
      <div className="section-container">
        <SectionHeader
          badge="Core Stack"
          title="Technical Expertise"
          subtitle="Building intelligent systems at the intersection of robust backend architecture and scalable machine learning models."
          centered
        />

        {/* 4-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="card p-6 h-full flex flex-col bg-white">
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconColors[i]}`}
                  >
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-xs font-bold text-[var(--navy-300)]">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-[var(--text-primary)] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
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
