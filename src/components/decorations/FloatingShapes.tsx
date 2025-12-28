'use client'

import { motion } from 'framer-motion'

const shapes = [
  { type: 'circle', size: 80, top: '10%', left: '10%', delay: 0, duration: 8 },
  { type: 'square', size: 60, top: '20%', right: '15%', delay: 1, duration: 10 },
  { type: 'triangle', size: 70, top: '60%', left: '5%', delay: 2, duration: 9 },
  { type: 'circle', size: 50, top: '70%', right: '10%', delay: 0.5, duration: 11 },
  { type: 'square', size: 90, top: '40%', right: '5%', delay: 1.5, duration: 7 },
  { type: 'triangle', size: 55, top: '85%', left: '20%', delay: 2.5, duration: 12 },
]

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full bg-[var(--color-brand-cyan)]" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full rotate-45 bg-[var(--color-brand-amber)]" />
          )}
          {shape.type === 'triangle' && (
            <div
              className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86px] border-l-transparent border-r-transparent border-b-[var(--color-brand-coral)]"
              style={{
                borderLeftWidth: shape.size / 2,
                borderRightWidth: shape.size / 2,
                borderBottomWidth: shape.size * 0.86,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
