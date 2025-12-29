'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'MindFire Solutions',
    role: 'Senior Software Engineer',
    location: 'Noida, UP, India',
    period: 'Jul 2025 – Present',
    duration: '6 months',
    achievements: [
      'Developed internal employee training tracker with clean architecture',
      'Implemented sales contract management system using SOLID principles',
      'Architected loosely coupled monolith with Backend-For-Frontend pattern',
    ],
    tech: ['.NET', 'Angular', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'IntelleWings',
    role: 'SDE 1',
    location: 'Chandigarh, India',
    period: 'Jun 2023 – Jun 2025',
    duration: '2 years 1 month',
    achievements: [
      'Built metadata-driven multi-tenant config system, reducing dev time by 45%',
      'Engineered ETL pipelines with 20x throughput boost using cursor-based streaming',
      'Designed custom Rule Engine reducing analysis time by 55%',
      'Orchestrated K8s deployments improving deployment time by 40%',
      'Security Anchor: Resolved 25+ VAPT issues, implemented payload encryption',
      'DevOps Anchor: Created Docker/K8s pipelines for 5+ environments',
    ],
    tech: ['.NET', 'C#', 'Angular', 'Spring Boot', 'MySQL', 'Docker', 'K8s', 'Elasticsearch'],
  },
  {
    company: 'IntelleWings',
    role: 'Fullstack Engineer Intern',
    location: 'Chandigarh, India',
    period: 'Sep 2022 – Jun 2023',
    duration: '10 months',
    achievements: [
      'Migrated UI from Nebular to Material UI, boosting Core Web Vitals by 25%',
      'Upgraded Angular from v7 to v15',
      'Developed Sanction Screening module with API integration',
    ],
    tech: ['.NET', 'Angular', 'MySQL', 'Material UI', 'TypeScript'],
  },
  {
    company: 'Huminos',
    role: 'Software Engineer Intern',
    location: 'Noida, UP, India',
    period: 'Apr 2022 – Aug 2022',
    duration: '5 months',
    achievements: [
      'Contributed to early-stage product development',
      'Gained hands-on experience with modern web technologies',
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="experience" className="section relative overflow-hidden bg-[var(--color-charcoal)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[var(--color-ghost)] mb-4">
            <span className="neon-text">{'// '}</span>Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-neon-magenta)] to-[var(--color-neon-yellow)]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-neon-cyan)] via-[var(--color-neon-magenta)] to-[var(--color-neon-yellow)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 transform -translate-x-1.5 md:-translate-x-2 ${index === 0
                    ? 'bg-[var(--color-neon-cyan)] border-[var(--color-neon-cyan)]'
                    : index === 1
                      ? 'bg-[var(--color-neon-magenta)] border-[var(--color-neon-magenta)]'
                      : 'bg-[var(--color-neon-yellow)] border-[var(--color-neon-yellow)]'
                    }`}
                  style={{
                    boxShadow:
                      index === 0
                        ? 'var(--shadow-glow-cyan)'
                        : index === 1
                          ? 'var(--shadow-glow-magenta)'
                          : 'var(--shadow-glow-yellow)',
                  }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                  <motion.div
                    className="terminal"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="terminal-header">
                      <div className="terminal-dot" />
                      <div className="terminal-dot" />
                      <div className="terminal-dot" />
                    </div>
                    <div className="terminal-body space-y-4">
                      {/* Header */}
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--color-ghost)] mb-2">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-2 text-[var(--color-primary)] font-mono text-sm mb-1">
                          <Briefcase size={16} />
                          <span>{exp.role}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-[var(--color-silver)] text-sm font-mono">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                            <span className="text-[var(--color-zinc)]">({exp.duration})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-2 text-[var(--color-fog)] text-sm"
                          >
                            <span className="text-[var(--color-neon-cyan)] font-bold">▹</span>
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-slate)]">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-2 py-1 rounded bg-[var(--color-carbon)] text-[var(--color-primary)] border border-[var(--color-slate)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
