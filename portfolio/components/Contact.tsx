"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-zinc-950 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 text-white">
          Let's <span className="text-primary stroke-text">Collaborate</span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-mono">
          I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <a
          href="mailto:aditya.sharma.11072001@gmail.com"
          className="text-2xl md:text-4xl font-bold text-white hover:text-primary transition-colors border-b-4 border-primary pb-2 mb-12 inline-block"
        >
          aditya.sharma.11072001@gmail.com
        </a>

        <div className="flex gap-8 justify-center mt-8">
          <SocialLink href="https://www.linkedin.com/in/aditya-5harma" icon={<Linkedin size={32} />} label="LinkedIn" />
          <SocialLink href="https://github.com/dtr-beast" icon={<Github size={32} />} label="GitHub" />
          <SocialLink href="tel:9389263175" icon={<Phone size={32} />} label="Phone" />
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    className="p-4 bg-zinc-900 border-2 border-zinc-800 text-white hover:border-primary hover:text-primary hover:-translate-y-2 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);
