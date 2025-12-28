'use client'

import { motion } from 'framer-motion'
import { FileDown, Mail } from 'lucide-react'
import Image from 'next/image'
import { personalInfo } from '@/data/content'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { Badge } from '@/components/ui/Badge'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'

const techStack = ['.NET', 'Angular', 'Spring Boot', 'React', 'TypeScript', 'Docker', 'K8s']

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-5xl w-full text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image with Animated Rings */}
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
          variants={scaleIn}
        >
          {/* Animated Rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 rounded-full border-2 border-[var(--color-brand-cyan)] opacity-20"
              animate={{
                scale: [1, 1.1 + ring * 0.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + ring * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                width: `${100 + ring * 15}%`,
                height: `${100 + ring * 15}%`,
                left: `-${ring * 7.5}%`,
                top: `-${ring * 7.5}%`,
              }}
            />
          ))}

          {/* Profile Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-brand-cyan)] shadow-glow-lg">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          variants={fadeInUp}
        >
          <span className="text-xl md:text-2xl text-[var(--color-brand-ghost)]">
            {personalInfo.greeting}
          </span>
          <motion.span
            className="text-2xl md:text-3xl inline-block origin-bottom-right"
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
          >
            👋
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          variants={fadeInUp}
        >
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl text-[var(--color-brand-fog)] mb-6"
          variants={fadeInUp}
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-[var(--color-brand-ghost)] max-w-2xl mx-auto mb-8"
          variants={fadeInUp}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Tech Stack Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={fadeInUp}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1 + index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 10,
              }}
            >
              <Badge variant="cyan">{tech}</Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeInUp}
        >
          <AnimatedButton
            href={personalInfo.resume}
            variant="primary"
            icon={FileDown}
          >
            View Resume
          </AnimatedButton>
          <AnimatedButton
            href="#contact"
            variant="secondary"
            icon={Mail}
          >
            Get in Touch
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
