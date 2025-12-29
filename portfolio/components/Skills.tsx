'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['C#', 'Java', 'Kotlin', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { category: 'Frontend', items: ['Angular', 'React', 'Next.js', 'Material UI', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['.NET Core', 'Entity Framework', 'Spring Boot', 'JPA', 'RESTful APIs', 'LINQ'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'Elasticsearch', 'CTEs', 'Window Functions', 'Query Optimization'] },
  { category: 'DevOps & Tools', items: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Jira', 'SAST'] },
  { category: 'Architecture', items: ['SOLID Principles', 'Clean Code', 'Metadata-Driven', 'Microservices', 'BFF Pattern', 'ETL Pipelines'] },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number],
      },
    },
  };

  const getColor = (index: number) => {
    const colors = [
      'var(--color-neon-cyan)',
      'var(--color-neon-magenta)',
      'var(--color-neon-yellow)',
      'var(--color-neon-lime)',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="section relative overflow-hidden grid-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[var(--color-ghost)] mb-4">
            <span className="neon-text">{'// '}</span>Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-neon-yellow)] to-[var(--color-neon-lime)]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="group"
            >
              <div className="h-full border-2 border-[var(--color-carbon)] rounded-lg overflow-hidden bg-[var(--color-void)] hover:bg-[var(--color-charcoal)] transition-all duration-300">
                {/* Header */}
                <div
                  className="p-4 border-b-2 relative overflow-hidden"
                  style={{ borderColor: getColor(index) }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{ background: getColor(index) }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <h3
                    className="text-xl font-bold font-mono relative z-10"
                    style={{ color: getColor(index) }}
                  >
                    {skill.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <motion.span
                        key={i}
                        className="inline-block px-3 py-1.5 text-sm font-mono rounded border transition-all duration-300 cursor-default"
                        style={{
                          backgroundColor: 'var(--color-carbon)',
                          borderColor: 'var(--color-slate)',
                          color: 'var(--color-silver)',
                        }}
                        whileHover={{
                          scale: 1.05,
                          borderColor: getColor(index),
                          color: getColor(index),
                          boxShadow: `0 0 15px ${getColor(index)}40`,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Code snippet decoration */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="code-block">
            <pre className="text-[var(--color-fog)]">
              <code>
                {`// Continuous Learning Philosophy
const growth = {
  mindset: "Always be learning",
  approach: "Practice > Theory",
  focus: [
    "Stay updated with latest tech trends",
    "Experiment with new frameworks",
    "Contribute to open source",
    "Share knowledge with the community"
  ]
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
