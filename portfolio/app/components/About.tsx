"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Zap, Shield, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Mastery",
    description: "End-to-end development across .NET, Angular, and Spring Boot ecosystems.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Building high-throughput ETL pipelines and optimizing for sub-second queries.",
  },
  {
    icon: Shield,
    title: "Security Champion",
    description: "VAPT remediation, payload encryption, and compliance-first development.",
  },
  {
    icon: Layers,
    title: "Cloud Native",
    description: "Docker, Kubernetes, and modern deployment practices for scalable systems.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[var(--accent-primary)] font-mono text-sm mb-2 block">
            01. About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-clash)]">
            Turning Complex Problems into
            <br />
            <span className="gradient-text">Elegant Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I&apos;m a <span className="text-[var(--text-primary)] font-medium">Senior Software Engineer</span> passionate
              about building scalable, client-facing solutions that make a real impact. Currently at{" "}
              <span className="text-[var(--accent-primary)]">Mindfire Solutions</span>, I work on internal systems
              using clean architecture and SOLID principles.
            </p>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Previously at <span className="text-[var(--accent-primary)]">IntelleWings</span>, I developed
              Anti-Money Laundering software used by major enterprises across India and Tanzania. My work
              included building{" "}
              <span className="text-[var(--text-primary)] font-medium">metadata-driven systems</span> that
              reduced development time by 45%, and{" "}
              <span className="text-[var(--text-primary)] font-medium">high-throughput ETL pipelines</span> with
              20x performance improvements.
            </p>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I deliberately study UX to make processes <span className="text-[var(--accent-secondary)]">seamless</span> and
              constantly iterate based on client feedback. When I&apos;m not coding, I&apos;m exploring
              new technologies and contributing to developer communities.
            </p>

            {/* Quick Stats */}
            <div className="pt-6 grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-clash)] gradient-text">
                  3+
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-clash)] gradient-text-cyan">
                  80%
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">Client Adoption</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-clash)] gradient-text">
                  45%
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">Dev Time Saved</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4, borderColor: "var(--border-accent)" }}
                className="card-glass p-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-clash)] text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
