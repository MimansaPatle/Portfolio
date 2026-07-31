import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Anton } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });

export const metadata: Metadata = {
  title: "Mimansa Patle | Full-Stack Developer",
  description:
    "Portfolio of Mimansa Patle – Full-Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
  keywords: ["Mimansa Patle", "Full-Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Mimansa Patle" }],
  openGraph: {
    title: "Mimansa Patle | Full-Stack Developer",
    description: "Full-Stack Developer building modern, scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${anton.variable}`}
        style={{ fontFamily: "var(--font-space), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
