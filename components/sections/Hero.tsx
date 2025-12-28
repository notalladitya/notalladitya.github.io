"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-purple-50/50 to-background pt-20">

      {/* Background Decorative Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-70" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow opacity-70" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm"
          >
            <span className="animate-wave text-lg">👋</span> Hello, I'm
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            <span className="text-foreground">{personalInfo.name}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Software Engineer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            I build <span className="text-foreground font-semibold">pixel-perfect</span>, engaging, and accessible digital experiences. Focusing on the intersection of design and engineering.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="group">
              Let's Talk <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href={personalInfo.links.resume} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                Download CV <Download className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="pt-8 flex gap-4 text-sm font-medium text-muted-foreground">
            {["Next.js", ".NET Core", "Angular", "Kubernetes"].map((tech, i) => (
              <span key={tech} className="px-3 py-1 bg-gray-100 rounded-md border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual Content (Profile & Shapes) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-125 md:h-125">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border-2 border-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />

            {/* Main Image Container */}
            <div className="absolute inset-10 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white z-10">
              <Image
                src="/DP.jpg"
                alt="Aditya Sharma"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🚀</div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">Experience</p>
                <p className="font-bold text-gray-800">2+ Years</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 z-20 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">💻</div>
              <p className="font-bold text-sm">Fullstack</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
