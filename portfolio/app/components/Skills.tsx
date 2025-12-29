"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

interface SkillCategory {
  name: string;
  color: string;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    color: "var(--accent-primary)",
    skills: [
      { name: ".NET / C#", level: 5 },
      { name: "Entity Framework", level: 5 },
      { name: "Spring Boot", level: 4 },
      { name: "Java / Kotlin", level: 4 },
      { name: "Python", level: 3 },
      { name: "RESTful APIs", level: 5 },
    ],
  },
  {
    name: "Frontend",
    color: "var(--accent-secondary)",
    skills: [
      { name: "Angular", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "React / Next.js", level: 3 },
      { name: "Material UI", level: 4 },
      { name: "HTML / CSS", level: 4 },
    ],
  },
  {
    name: "Database",
    color: "var(--accent-tertiary)",
    skills: [
      { name: "MySQL", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "Elasticsearch", level: 4 },
      { name: "SQL (CTEs, Window Fn)", level: 5 },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "#a78bfa",
    skills: [
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 4 },
      { name: "Git", level: 5 },
      { name: "CI/CD Pipelines", level: 4 },
      { name: "Jira", level: 4 },
    ],
  },
];

function SkillBar({ skill, color, delay }: { skill: { name: string; level: number }; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-[var(--text-muted)]">
          {skill.level === 5 ? "Expert" : skill.level === 4 ? "Advanced" : skill.level === 3 ? "Intermediate" : "Learning"}
        </span>
      </div>
      <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,166,35,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[var(--accent-primary)] font-mono text-sm mb-2 block">
            03. Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-clash)]">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl">
            Technologies I&apos;ve worked with extensively across full-stack development,
            database optimization, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`card-glass p-6 transition-all duration-300 ${activeCategory === category.name ? "border-[var(--border-accent)] shadow-[0_0_30px_rgba(245,166,35,0.1)]" : ""
                }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-lg font-bold font-[family-name:var(--font-clash)] text-[var(--text-primary)]">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={0.05 * skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "LINQ",
              "Reflections",
              "Attributes",
              "JPA",
              "Streams",
              "ETL",
              "SAST",
              "VAPT",
              "Clean Architecture",
              "SOLID Principles",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-3 py-1.5 text-xs font-medium bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] rounded-full hover:border-[var(--accent-primary)]/30 hover:text-[var(--text-primary)] transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
