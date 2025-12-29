"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, MapPin, ChevronRight, ExternalLink } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  projects: {
    name: string;
    tech: string[];
    achievements: string[];
  }[];
}

const experiences: Experience[] = [
  {
    id: "mindfire",
    company: "Mindfire Solutions",
    role: "Senior Software Engineer",
    location: "Noida, India",
    period: "July 2025 – Present",
    projects: [
      {
        name: "Internal Systems Development",
        tech: [".NET", "C#", "Clean Architecture", "SOLID"],
        achievements: [
          "Built employee training tracker and sales contract management system",
          "Implemented clean code incorporating SOLID principles throughout",
          "Designed loosely coupled monolith with Backend-For-Frontend architecture",
        ],
      },
    ],
  },
  {
    id: "intellewings",
    company: "IntelleWings",
    role: "SDE 1",
    location: "Chandigarh, India",
    period: "June 2023 – June 2025",
    projects: [
      {
        name: "AzamPay - Tanzanian Wallet AML",
        tech: [".NET", "Angular", "Spring Boot", "MySQL", "Python"],
        achievements: [
          "Built metadata-driven multi-tenant config system reducing code duplication by 45%",
          "Implemented dynamic UI rendering enabling reusable components without code changes",
          "Designed high-throughput ETL pipelines achieving 20x boost in processing",
          "Engineered custom Rule Engine using CTEs and Window Functions, reducing analysis time by 55%",
        ],
      },
      {
        name: "Star Health - Insurance AML",
        tech: [".NET", "Angular", "Docker", "K8s", "Elasticsearch"],
        achievements: [
          "Orchestrated Docker/K8s deployment improving deployment time by 40%",
          "Resolved 25+ VAPT-reported security issues for compliance",
          "Replaced legacy MySQL with Elasticsearch for sub-second querying",
          "Built .NET middleware for POST payload encryption",
        ],
      },
      {
        name: "FINNET2 - AML Reporting Format",
        tech: [".NET", "Angular", "MySQL"],
        achievements: [
          "Architected metadata-driven modular UI reducing dev cycles by ~35%",
          "Developed by 80% of enterprise clients",
          "Enabled generation of high-volume CTR and NTR reports",
        ],
      },
    ],
  },
  {
    id: "intellewings-intern",
    company: "IntelleWings",
    role: "Fullstack Engineer Intern",
    location: "Chandigarh, India",
    period: "Sept 2022 – June 2023",
    projects: [
      {
        name: "Application Modernization",
        tech: [".NET", "Angular", "Material UI", "TypeScript"],
        achievements: [
          "Migrated UI from Nebular to Material UI boosting Core Web Vitals by 25%",
          "Upgraded Angular frontend from v7 to v15",
          "Created Screening page with third-party API integration",
        ],
      },
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExperience = experiences.find((e) => e.id === activeId)!;

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.05)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[var(--accent-primary)] font-mono text-sm mb-2 block">
            02. Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-clash)]">
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Company Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 pb-4 lg:pb-0"
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`relative flex items-center gap-3 px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-all rounded-lg group ${activeId === exp.id
                    ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)]"
                  }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${activeId === exp.id
                      ? "bg-[var(--accent-primary)]"
                      : "bg-[var(--text-muted)] group-hover:bg-[var(--text-secondary)]"
                    }`}
                />
                {exp.company}
                {exp.role.includes("Intern") && (
                  <span className="text-xs text-[var(--text-muted)]">(Intern)</span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-glass p-6 md:p-8"
          >
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-clash)] text-[var(--text-primary)] mb-2">
                {activeExperience.role}{" "}
                <span className="gradient-text">@ {activeExperience.company}</span>
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {activeExperience.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {activeExperience.location}
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-8">
              {activeExperience.projects.map((project, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-[var(--border-subtle)]">
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-[var(--accent-primary)]" />
                    {project.name}
                  </h4>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <ChevronRight className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
