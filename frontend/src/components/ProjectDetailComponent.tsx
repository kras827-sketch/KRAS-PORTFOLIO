"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Code, Play, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ProjectDetail } from "@/data/projects-detail";

/**
 * Project Detail Page Component
 * Displays full project information with animations
 */
interface ProjectDetailComponentProps {
  project: ProjectDetail;
}

export function ProjectDetailComponent({ project }: ProjectDetailComponentProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-20"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="relative py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start pt-8">
            {/* Left Content */}
            <div>
              <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full mb-6">
                {project.category}
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">{project.tagline}</p>
              <p className="text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, idx) => {
                  const icons = {
                    live: <ExternalLink className="w-5 h-5" />,
                    github: <Code className="w-5 h-5" />,
                    demo: <Play className="w-5 h-5" />,
                  };

                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      {icons[link.type]}
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Key Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <p className="text-3xl font-bold text-blue-600 mb-2">
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section variants={itemVariants} className="section-container py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section variants={itemVariants} className="section-container py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {project.fullDescription}
        </p>

        {project.timeline && (
          <p className="text-gray-600">
            <span className="font-semibold">Timeline:</span> {project.timeline}
          </p>
        )}
        {project.team && (
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Team:</span> {project.team}
          </p>
        )}
      </motion.section>

      {/* Challenge & Solution */}
      <motion.section variants={itemVariants} className="section-container py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenge */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Challenge</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Solution</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      {project.features.length > 0 && (
        <motion.section variants={itemVariants} className="section-container py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  ✓
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Impact */}
      {project.impact.length > 0 && (
        <motion.section variants={itemVariants} className="section-container py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Impact</h2>
          <ul className="space-y-3">
            {project.impact.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 text-lg text-gray-700"
              >
                <span className="text-2xl text-blue-600 mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <motion.section variants={itemVariants} className="section-container py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Screenshots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-48 bg-gray-200">
                  <Image
                    src={screenshot.url}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <p className="p-4 text-sm text-gray-600">{screenshot.caption}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section variants={itemVariants} className="section-container py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Similar Projects?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how I can help with your next project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default ProjectDetailComponent;
