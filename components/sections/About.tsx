"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { personalInfo } from "@/lib/data";
import { Code, Coffee, Zap, Globe, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Coffee,
  Zap,
  Globe,
};

export function About() {
  return (
    <Section id="about" className="bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hey there! I'm <span className="text-foreground font-semibold">{personalInfo.name}</span> from {personalInfo.location}.
            </p>
            <p>
              {personalInfo.bio}
            </p>
            <p>
              My journey involves a mix of deep backend architecture in .NET and creating delightful frontend experiences with Next.js and Angular. I believe in code that is not just functional but also beautiful and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {personalInfo.funFacts.map((fact, index) => {
              const Icon = iconMap[fact.icon] || Zap;
              return (
                <Card key={index} className="flex flex-col items-center justify-center text-center p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-gray-800">{fact.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
