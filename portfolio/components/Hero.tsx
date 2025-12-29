"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-20 overflow-hidden">
      <div className="flex-1 space-y-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-mono text-lg tracking-wider">Hello, I am</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight tracking-tighter">
            Aditya<br />
            <span className="text-white">Sharma</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 font-mono max-w-lg"
        >
          Senior Software Engineer specializing in .NET, Angular, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="/Aditya-Sharma-Resume.pdf" download="Aditya-Sharma-Resume.pdf" className="neo-brutal-button flex items-center gap-2">
            <FileText size={20} /> Resume
          </a>
          <a href="#contact" className="px-6 py-2 border-2 border-white font-bold uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-[4px_4px_0px_0px_#27272a] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            Contact Me
          </a>
        </motion.div>

        <div className="flex gap-6 pt-4 text-gray-400">
          <a href="https://github.com/dtr-beast" target="_blank" className="hover:text-primary transition-colors"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/aditya-5harma" target="_blank" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
          <a href="mailto:aditya.sharma.11072001@gmail.com" className="hover:text-primary transition-colors"><Mail size={24} /></a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 flex justify-center mt-10 md:mt-0 relative"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 border-2 border-primary p-4 bg-black/50 backdrop-blur-sm z-0">
          <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 -z-10 border-2 border-primary/50"></div>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Aditya Sharma"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary"></div>
          <div className="absolute top-1/2 -right-6 text-primary font-mono text-xs rotate-90 tracking-widest">SCROLL_DOWN</div>
        </div>
      </motion.div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 pointer-events-none"></div>
    </section>
  );
};
