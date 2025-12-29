import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-zinc-800 text-center">
      <p className="text-sm font-mono text-gray-500">
        © {new Date().getFullYear()} Aditya Sharma. Built with Next.js, Tailwind & Framer Motion.
      </p>
    </footer>
  );
};
