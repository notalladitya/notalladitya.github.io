'use client'

import { useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useMousePosition } from '@/lib/hooks'

interface Particle {
  id: number
  x: number
  y: number
}

export function CursorFollower() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const mousePosition = useMousePosition()

  // Spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mousePosition.x, springConfig)
  const cursorY = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticle = {
          id: Date.now(),
          x: mousePosition.x,
          y: mousePosition.y,
        }

        // Keep only last 5 particles
        const updated = [...prev, newParticle].slice(-5)
        return updated
      })
    }, 100)

    return () => clearInterval(interval)
  }, [mousePosition, isMobile])

  // Remove old particles
  useEffect(() => {
    if (particles.length === 0) return

    const timeout = setTimeout(() => {
      setParticles((prev) => prev.slice(1))
    }, 500)

    return () => clearTimeout(timeout)
  }, [particles])

  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor follower */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-[var(--color-brand-cyan)] opacity-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Particle trail */}
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-[var(--color-brand-cyan)]"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.6,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          style={{
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      ))}
    </div>
  )
}
