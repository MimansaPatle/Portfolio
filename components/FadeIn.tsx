"use client";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

// Simplified: just renders children — no animation that can break visibility
export default function FadeIn({ children }: FadeInProps) {
  return <>{children}</>;
}
