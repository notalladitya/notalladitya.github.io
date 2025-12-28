"use client";

import { Section } from "@/components/ui/Section";
import { experience } from "@/lib/data";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section id="experience" className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-0 w-8 h-8 bg-white border-4 border-primary rounded-full transform -translate-x-1/2 z-10 items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className={`bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}>
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                      <h4 className="text-lg font-medium text-primary">{job.company}</h4>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
