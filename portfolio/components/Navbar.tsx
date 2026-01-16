"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const links = ["About", "Experience", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="text-2xl font-bold font-mono text-primary tracking-tighter">
        ADITYA SHARMA
      </div>
      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="text-sm font-mono font-bold uppercase tracking-widest hover:text-primary transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
