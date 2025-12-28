"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
          Have an idea? <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            Let's bring it to life.
          </span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          I am currently available for freelance work or full-time opportunities.
          If you are looking for a developer who cares about design and performance, say hi!
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href={`mailto:${personalInfo.email}`}>
            <Button size="lg" className="px-8 py-6 text-lg rounded-full">
              <Mail className="mr-2 w-5 h-5" /> Say Hello
            </Button>
          </a>
          <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg rounded-full">
              <MessageSquare className="mr-2 w-5 h-5" /> Connect on LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}
