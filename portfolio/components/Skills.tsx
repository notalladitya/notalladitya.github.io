"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Backend Engineering",
    items: [".NET Core", "C#", "Spring Boot", "Java", "Kotlin", "Python", "Node.js", "Microservices", "REST APIs"]
  },
  {
    category: "Frontend Development",
    items: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Material UI", "HTML5", "CSS3"]
  },
  {
    category: "Data & Storage",
    items: ["MySQL", "PostgreSQL", "Elasticsearch", "SQL Server", "Redis", "Entity Framework"]
  },
  {
    category: "DevOps & Architecture",
    items: ["Docker", "Kubernetes", "Git", "CI/CD Pipelines", "System Design", "SOLID Principles", "Agile/Scrum"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-background">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 text-right text-white">
        Technical <span className="text-primary">Arsenal</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="neo-brutal-box p-8 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_var(--primary)] transition-all duration-300 bg-zinc-900 border-zinc-800"
          >
            <h3 className="text-2xl font-bold font-mono mb-6 text-white border-b-2 border-primary pb-2 inline-block">
              {`/ ${skill.category}`}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-zinc-800 text-gray-300 font-mono text-sm border border-zinc-700 rounded-sm hover:text-white hover:border-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
