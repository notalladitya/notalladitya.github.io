'use client'

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { FloatingShapes } from '@/components/decorations/FloatingShapes'
import { GradientMesh } from '@/components/decorations/GradientMesh'
import { CursorFollower } from '@/components/decorations/CursorFollower'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Decorations */}
      <GradientMesh />
      <FloatingShapes />
      <CursorFollower />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
