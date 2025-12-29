import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-clash",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aditya Sharma | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in .NET, Angular, Spring Boot, and cloud-native solutions. Building scalable enterprise applications with modern practices.",
  keywords: [
    "Aditya Sharma",
    "Software Engineer",
    "Full Stack Developer",
    ".NET Developer",
    "Angular Developer",
    "Spring Boot",
    "Kubernetes",
    "Docker",
  ],
  authors: [{ name: "Aditya Sharma" }],
  creator: "Aditya Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dtr-beast.github.io",
    title: "Aditya Sharma | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in .NET, Angular, Spring Boot, and cloud-native solutions.",
    siteName: "Aditya Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Sharma | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in .NET, Angular, Spring Boot, and cloud-native solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
