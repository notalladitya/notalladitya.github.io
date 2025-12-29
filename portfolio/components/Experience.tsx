"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Mindfire Solutions",
    role: "Senior Software Engineer",
    period: "July 2025 - Present",
    location: "Noida, India",
    description: "Working on internal employee training tracker and sales contract management system. Wrote clean code adhering to SOLID principles and implemented Backend-For-Frontend architecture.",
    tech: [".NET", "SOLID", "Architecture", "Microservices"]
  },
  {
    company: "IntelleWings",
    role: "SDE 1",
    period: "June 2023 - June 2025",
    location: "Chandigarh, India",
    description: "Developed FINNET2 (Fraud Reporting Format) used by major enterprise clients. Architected metadata-driven UI systems reducing dev cycles by 35%. Served as Security & DevOps Anchor handling VAPT and Kubernetes deployments.",
    tech: [".NET", "Angular", "MySQL", "Docker", "K8s", "Elasticsearch"]
  },
  {
    company: "IntelleWings",
    role: "Fullstack Engineer Intern",
    period: "Sept 2022 - June 2023",
    location: "Chandigarh, India",
    description: "Migrated Angular frontend from v7 to v15, refactored core components boosting Core Web Vitals by 25%, and integrated Sanction Screening features.",
    tech: ["Angular", "Material UI", ".NET", "TypeScript"]
  },
  {
    company: "Huminos",
    role: "Software Engineer Intern",
    period: "April 2022 - Aug 2022",
    location: "Noida, India",
    description: "Gained foundational experience in backend software engineering.",
    tech: ["Backend", "Software Engineering"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-zinc-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center text-white relative inline-block left-1/2 -translate-x-1/2">
        <span className="relative z-10">Experience</span>
        <div className="absolute -bottom-2 w-full h-4 bg-primary/50 -skew-x-12 z-0"></div>
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative border-l-2 border-zinc-800 pl-8 md:pl-12 py-2"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-6 w-4 h-4 bg-black border-2 border-zinc-600 rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-[0_0_10px_0_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_0_var(--primary)]"></div>

            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-zinc-800 hover:border-primary transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black text-white">{index + 1}</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between md:items-start mb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <a href="#" className="text-lg font-mono text-gray-400 border-b border-transparent hover:border-primary transition-all">{exp.company}</a>
                </div>
                <div className="text-sm text-gray-500 font-mono mt-2 md:mt-0 md:text-right">
                  <p className="font-bold text-gray-300">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{exp.description}</p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {exp.tech.map(t => (
                  <span key={t} className="text-xs font-bold px-3 py-1 bg-black text-white border border-zinc-700 uppercase tracking-wider hover:bg-primary hover:text-black hover:border-primary transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
