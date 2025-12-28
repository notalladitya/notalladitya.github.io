"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
  id?: string;
  delay?: number;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, delay = 0, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
        className={cn("py-20 md:py-32", className)}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);
Section.displayName = "Section";

export { Section };
