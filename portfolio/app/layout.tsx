import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Sharma | Software Engineer Portfolio",
  description: "Senior Software Engineer specializing in .NET, Angular, Spring Boot. Building scalable, production-grade systems with clean architecture.",
  keywords: ["Aditya Sharma", "Software Engineer", ".NET Developer", "Angular Developer", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Aditya Sharma" }],
  openGraph: {
    title: "Aditya Sharma | Software Engineer Portfolio",
    description: "Senior Software Engineer specializing in .NET, Angular, Spring Boot",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
