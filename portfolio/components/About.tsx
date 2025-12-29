'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Server, Layers } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[var(--color-ghost)] mb-4">
            <span className="neon-text">{'// '}</span>About
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-magenta)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="code-block">
              <pre className="text-[var(--color-fog)]">
                <code>
                  {`const developer = {
  name: "Aditya Sharma",
  role: "Senior Software Engineer",
  location: "Mathura, India",
  company: "MindFire Solutions",
  
  experience: {
    years: 2.5,
    focus: [
      "Full-Stack Development",
      "System Architecture",
      "DevOps & Security"
    ]
  },
  
  passion: [
    "Clean Code",
    "SOLID Principles",
    "Performance Optimization",
    "User Experience"
  ]
};`}
                </code>
              </pre>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-[var(--color-silver)] text-lg leading-relaxed">
                Versatile engineer with a proven track record of building{' '}
                <span className="text-[var(--color-neon-cyan)] font-semibold">
                  scalable, production-grade systems
                </span>{' '}
                for enterprise clients. Specialized in creating metadata-driven architectures
                that reduce development time and improve maintainability.
              </p>

              <p className="text-[var(--color-silver)] text-lg leading-relaxed">
                From orchestrating{' '}
                <span className="text-[var(--color-neon-magenta)] font-semibold">
                  Kubernetes deployments
                </span>{' '}
                to designing{' '}
                <span className="text-[var(--color-neon-yellow)] font-semibold">
                  high-throughput ETL pipelines
                </span>, I thrive on solving complex technical challenges
                with elegant, efficient solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Code2 size={32} />,
                label: 'Frontend',
                tech: ['Angular', 'React', 'TypeScript', 'Material UI'],
                color: 'var(--color-neon-cyan)',
              },
              {
                icon: <Server size={32} />,
                label: 'Backend',
                tech: ['.NET Core', 'Spring Boot', 'C#', 'Java/Kotlin'],
                color: 'var(--color-neon-magenta)',
              },
              {
                icon: <Database size={32} />,
                label: 'Database',
                tech: ['MySQL', 'PostgreSQL', 'Elasticsearch', 'JPA/EF'],
                color: 'var(--color-neon-yellow)',
              },
              {
                icon: <Layers size={32} />,
                label: 'DevOps',
                tech: ['Docker', 'Kubernetes', 'Git', 'CI/CD'],
                color: 'var(--color-neon-lime)',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div
                  className="h-full border-2 hover:border-opacity-100 transition-all duration-300 p-6 rounded-lg bg-[var(--color-charcoal)]"
                  style={{
                    borderColor: item.color,
                  }}
                >
                  <motion.div
                    className="text-[var(--color-primary)] mb-4"
                    style={{ color: item.color }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-[var(--color-ghost)] mb-3 font-mono">
                    {item.label}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2 py-1 rounded bg-[var(--color-carbon)] text-[var(--color-silver)] border border-[var(--color-slate)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${item.color}, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
