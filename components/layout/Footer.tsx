"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-gray-50 mt-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <h3 className="text-2xl font-bold text-primary">Let's Connect!</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Currently open for new opportunities. Feel free to reach out using the links below.
        </p>

        <div className="flex gap-6">
          <a href="https://linkedin.com/in/aditya-5harma" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:text-primary transition-all hover:-translate-y-1">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:aditya.sharma.11072001@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:text-primary transition-all hover:-translate-y-1">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:text-primary transition-all hover:-translate-y-1">
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} Aditya Sharma. Made with ❤️ and Next.js.
        </div>
      </div>
    </footer>
  );
}
