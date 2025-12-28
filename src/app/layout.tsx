import type { Metadata } from 'next'
import { Orbitron, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { personalInfo } from '@/data/content'

const displayFont = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-clash-display',
  display: 'swap',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-general-sans',
  display: 'swap',
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `${personalInfo.name} - ${personalInfo.title} specializing in .NET, Angular, Spring Boot. Building scalable enterprise software with 2+ years of experience.`,
  keywords: [
    'Aditya Sharma',
    'Software Engineer',
    'Full Stack Developer',
    '.NET Developer',
    'Angular Developer',
    'Spring Boot',
    'Portfolio',
    'Web Development',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dtr-beast.github.io',
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: `${personalInfo.title} specializing in .NET, Angular, and Spring Boot. Building scalable enterprise software.`,
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: `${personalInfo.title} specializing in .NET, Angular, and Spring Boot.`,
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
