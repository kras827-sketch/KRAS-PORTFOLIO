"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, ExternalLink, Monitor } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeader from "./ui/SectionHeader";
import type { Project } from "@/lib/api";

/* ── Hardcoded fallback data so the site works without the backend ── */
const FALLBACK_PROJECTS: Project[] = [
  {
    id: "invoice-pro",
    title: "Invoice Pro",
    subtitle: null,
    category: "BACKEND INFRASTRUCTURE",
    category_color: "blue",
    description:
      "Architected a scalable microservice architecture to handle automated PDF generation and distribution. Designed high-concurrency background processing to handle 5,000+ simultaneous requests during peak billing cycles using asynchronous task queues.",
    tech_stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    image_url: "/images/invoice-pro-ui.png",
    links: [
      { type: "github", url: "#", label: "Code" },
      { type: "live", url: "#", label: "Live" },
    ],
    cta_label: "Detailed Case Study",
    cta_style: "dark",
    featured: true,
  },
  {
    id: "kras-pay",
    title: "Kras Pay",
    subtitle: "DIGITAL FINANCE ECOSYSTEM",
    category: "FINTECH & ML",
    category_color: "sky",
    description:
      "Engineered a robust financial gateway for cross-border transactions. Integrated a real-time fraud detection engine using ML classifiers to assess risk scores for every payment. Implemented secure ledger reconciliation systems and multi-currency settlement pipelines.",
    tech_stack: ["Node.js", "Scikit-learn", "AWS Lambda", "GraphQL", "PyTorch"],
    image_url: "/images/kras-pay-ui.png",
    links: [
      { type: "github", url: "#", label: "Code" },
      { type: "live", url: "#", label: "Live" },
    ],
    cta_label: "View Finance Implementation",
    cta_style: "gradient",
    featured: true,
  },
];

/* ── Placeholder image gradients ── */
const placeholderGradients = [
  "from-[var(--navy-800)] via-[var(--blue-600)]/60 to-[var(--navy-700)]",
  "from-[var(--sky-500)]/70 via-[var(--blue-600)]/50 to-[var(--navy-800)]",
];

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/projects/`
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setProjects(data))
      .catch(() => {
        /* keep fallback */
      });
  }, []);

  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          subtitle="Specialized implementations in high-performance backend systems and machine learning models for financial automation and secure transaction processing."
          centered
          accent
        />

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.15}>
              <div className="card overflow-hidden group h-full flex flex-col">
                {/* Standard Image Render */}
                <div className="relative h-[250px] overflow-hidden bg-[var(--surface-muted)]">
                  {project.image_url ? (
                    <img 
                      src={project.image_url} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]" 
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${placeholderGradients[i % 2]}`}
                    >
                      {/* Decorative mock UI elements */}
                      <div className="absolute inset-4 flex flex-col items-center justify-center">
                        <div className="w-48 h-28 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex flex-col p-3 gap-2">
                          <div className="h-2 w-20 bg-white/30 rounded" />
                          <div className="h-2 w-full bg-white/20 rounded" />
                          <div className="h-2 w-16 bg-white/20 rounded" />
                          <div className="mt-auto flex justify-between">
                            <div className="h-2 w-12 bg-white/25 rounded" />
                            <div className="h-5 w-16 bg-white/30 rounded text-[8px] text-white/80 flex items-center justify-center font-mono">
                              $0,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-md ${
                        project.category_color === "sky"
                          ? "bg-[var(--sky-500)]"
                          : "bg-[var(--blue-600)]"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--navy-900)]/0 group-hover:bg-[var(--navy-900)]/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title row */}
                  <div className="flex items-start justify-between mb-1">
                    <h3
                      className="text-xl font-bold text-[var(--text-primary)]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-2 ml-3">
                      {project.links.map((link) => (
                        <a
                          key={link.type}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-[var(--navy-50)] text-[var(--navy-400)] flex items-center justify-center hover:bg-[var(--blue-50)] hover:text-[var(--blue-600)] transition-colors"
                          aria-label={link.label}
                        >
                          {link.type === "github" ? (
                            <Code size={14} />
                          ) : (
                            <ExternalLink size={14} />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Subtitle */}
                  {project.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--blue-600)] mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mt-2">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className={`tech-pill ${
                          project.category_color === "sky"
                            ? "text-[var(--sky-500)] bg-sky-50 border-sky-200 hover:bg-sky-100"
                            : ""
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA button */}
                  <div className="mt-6">
                    <Link
                      href={`/projects/${project.id}`}
                      className={`inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] ${
                        project.cta_style === "gradient"
                          ? "text-white bg-gradient-to-r from-[var(--sky-500)] to-[var(--blue-600)] hover:shadow-lg hover:shadow-sky-500/25"
                          : "text-white bg-[var(--navy-900)] hover:bg-[var(--navy-800)] hover:shadow-lg hover:shadow-navy-900/20"
                      }`}
                    >
                      {project.cta_label}
                      {project.cta_style === "gradient" ? (
                        <Monitor size={15} />
                      ) : (
                        <ArrowRight size={15} />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
