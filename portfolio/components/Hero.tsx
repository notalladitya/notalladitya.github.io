'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--color-neon-cyan) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--color-neon-magenta) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] font-mono text-sm uppercase tracking-wider">
                {'<Developer />'}
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-[var(--color-ghost)] leading-tight"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                Aditya
              </motion.h1>
              <motion.h1
                className="neon-text-magenta leading-tight"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                Sharma
              </motion.h1>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="terminal max-w-xl">
                <div className="terminal-header">
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                  <div className="terminal-dot" />
                </div>
                <div className="terminal-body">
                  <p className="text-[var(--color-silver)]">
                    <span className="text-[var(--color-neon-cyan)]">$</span> whoami
                  </p>
                  <p className="text-[var(--color-fog)] mt-2">
                    Senior Software Engineer specializing in .NET, Angular, Spring Boot.
                    Building scalable, production-grade systems with clean architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <a
                href="https://github.com/dtr-beast"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-5harma"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ borderColor: 'var(--color-neon-magenta)', color: 'var(--color-neon-magenta)' }}
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="mailto:aditya.sharma.11072001@gmail.com"
                className="btn"
                style={{ borderColor: 'var(--color-neon-yellow)', color: 'var(--color-neon-yellow)' }}
              >
                <Mail size={18} />
                Email
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative"
              animate={floatingAnimation}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-neon-cyan)] via-[var(--color-neon-magenta)] to-[var(--color-neon-yellow)] opacity-75 blur-2xl" />

                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-primary)] shadow-[var(--shadow-glow-cyan)]">
                  <Image
                    src="/profile.jpg"
                    alt="Aditya Sharma"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-neon-magenta)]"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-[var(--color-primary)]" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
