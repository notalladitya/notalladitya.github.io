"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Section id="skills" className="bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <Card key={category} className="h-full border-t-4 border-t-primary/20">
              <h3 className="text-xl font-bold mb-6 capitalize text-primary">{category}</h3>
              <div className="space-y-4">
                {items.map((skill: { name: string, level: number }) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-linear-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
