import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/sonner";
export const metadata: Metadata = {
  title: "Umair Ghaffar - Software Engineer | AI & Full-Stack Developer",
  description:
    "Software Engineer with 2+ years of experience delivering high-quality AI-powered solutions and enterprise applications. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords:
    "Software Engineer, Full Stack Developer, React, Next.js, Node.js, AI, Machine Learning, Web Development, Lahore, Pakistan",
  authors: [{ name: "Umair Ghaffar" }],
  openGraph: {
    title: "Umair Ghaffar - Software Engineer",
    description:
      "Software Engineer specializing in AI-powered solutions and full-stack development with 2+ years of experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umair Ghaffar - Software Engineer",
    description:
      "Software Engineer specializing in AI-powered solutions and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <main>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
