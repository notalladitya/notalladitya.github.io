import { Variants } from 'framer-motion'

// Stagger container for sequential animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    }
  }
}

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    }
  }
}

// Slide in from left (for timeline)
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    }
  }
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    }
  }
}

// Hover lift effect for cards
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    }
  }
}

// Progress bar fill animation
export const progressFill = {
  hidden: { width: 0 },
  show: (custom: number) => ({
    width: `${custom}%`,
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
      delay: 0.2,
    }
  })
}

// Floating animation for decorative shapes
export const float: Variants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    }
  }
}

// Wave emoji animation
export const wave = {
  animate: {
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatDelay: 1,
      ease: 'easeInOut',
    }
  }
}

// Pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    }
  }
}

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  }
}
