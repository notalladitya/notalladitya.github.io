"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,212,255,0.05)_0%,transparent_40%)]" />

      {/* Floating geometric shapes */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 left-10 w-24 h-24 border border-[var(--accent-primary)]/20 rotate-45 hidden lg:block"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{ y }}
        className="absolute top-1/3 right-20 w-16 h-16 border-2 border-[var(--accent-secondary)]/20 rounded-full hidden lg:block"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[var(--accent-primary)] rounded-full hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-0"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 rounded-full text-[var(--accent-primary)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
              </span>
              Open to Opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-clash)] leading-[1.1] mb-6"
            >
              Hi, I&apos;m{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">Aditya Sharma</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 max-w-lg leading-relaxed"
            >
              <span className="text-[var(--text-primary)] font-medium">Senior Software Engineer</span>{" "}
              crafting scalable enterprise solutions with{" "}
              <span className="text-[var(--accent-secondary)]">.NET</span>,{" "}
              <span className="text-[var(--accent-secondary)]">Angular</span>, and{" "}
              <span className="text-[var(--accent-secondary)]">Spring Boot</span>.
            </motion.p>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Briefcase className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Mindfire Solutions</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-[var(--accent-primary)] text-[var(--bg-primary)] font-medium rounded-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[var(--accent-primary-light)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-[var(--accent-primary)]/20 rounded-full animate-pulse-glow" />
              <div className="absolute -inset-8 border border-[var(--accent-secondary)]/10 rounded-full" />

              {/* Profile image container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border */}
                <div className="absolute inset-0 p-1 bg-gradient-to-br from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)] rounded-full">
                  <div className="w-full h-full bg-[var(--bg-primary)] rounded-full overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Aditya Sharma"
                      fill
                      priority
                      className="object-cover object-center scale-105"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1.5 bg-[var(--bg-card)] backdrop-blur-lg border border-[var(--border-subtle)] rounded-lg text-xs font-medium text-[var(--accent-primary)]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{
                  opacity: { delay: 1 },
                  x: { delay: 1 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                .NET
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-8 px-3 py-1.5 bg-[var(--bg-card)] backdrop-blur-lg border border-[var(--border-subtle)] rounded-lg text-xs font-medium text-[var(--accent-secondary)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
                transition={{
                  opacity: { delay: 1.2 },
                  x: { delay: 1.2 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Angular
              </motion.div>
              <motion.div
                className="absolute -bottom-2 right-8 px-3 py-1.5 bg-[var(--bg-card)] backdrop-blur-lg border border-[var(--border-subtle)] rounded-lg text-xs font-medium text-[var(--accent-tertiary)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{
                  opacity: { delay: 1.4 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Spring Boot
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--text-muted)] font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-[var(--text-muted)] rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-[var(--accent-primary)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
