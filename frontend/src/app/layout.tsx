import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oyedeji Olawale — Backend & Machine Learning Developer",
  description:
    "Building intelligent systems at the intersection of robust backend architecture and scalable machine learning models. Specializing in distributed systems, high-performance data pipelines, and scalable AI infrastructure.",
  keywords: [
    "Backend Developer",
    "Machine Learning",
    "Python",
    "FastAPI",
    "AI Infrastructure",
    "MLOps",
    "Full Stack",
  ],
  authors: [{ name: "Oyedeji Olawale" }],
  openGraph: {
    title: "Oyedeji Olawale — Backend & Machine Learning Developer",
    description:
      "Building intelligent systems at the intersection of robust backend architecture and scalable machine learning models.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oyedeji Olawale — Backend & ML Developer",
    description:
      "Building the next generation of intelligent backends.",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import MotionBackground from "@/components/MotionBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
