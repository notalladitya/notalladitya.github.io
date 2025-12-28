'use client'

import { motion } from 'framer-motion'

export function GradientMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-full h-full opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(6, 214, 160, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(255, 183, 3, 0.12) 0px, transparent 50%),
            radial-gradient(at 40% 70%, rgba(239, 71, 111, 0.1) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(6, 78, 59, 0.15) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Additional animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: 'var(--color-brand-cyan)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: 'var(--color-brand-amber)' }}
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
