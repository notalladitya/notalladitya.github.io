'use client'

import { useEffect, useState, useRef, RefObject } from 'react'
import { useInView } from 'framer-motion'

/**
 * Hook for scroll-triggered animations using Intersection Observer
 */
export function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, // Trigger when 20% visible
    margin: "0px 0px -100px 0px"
  })

  return { ref, isInView }
}

/**
 * Hook to track active section for navigation highlighting
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  return activeSection
}

/**
 * Hook to track scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

/**
 * Hook for mouse position (used for cursor effects)
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}
