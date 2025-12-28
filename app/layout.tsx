import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Sharma | Software Engineer",
  description: "Portfolio of Aditya Sharma, a Senior Software Engineer specializing in Next.js, .NET, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased text-foreground background selection:bg-accent selection:text-accent-foreground overflow-x-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
