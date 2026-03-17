"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0a0a0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 28,
        opacity: fading ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div
        style={{
          fontSize: "clamp(56px, 10vw, 100px)",
          fontWeight: 900,
          letterSpacing: "-3px",
          lineHeight: 1,
          color: "#fff",
          position: "relative",
          zIndex: 1,
        }}
      >
        M<span style={{ color: "#a855f7" }}>P</span>
        <span style={{ color: "#ec4899", fontSize: "0.6em" }}>.</span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 140,
          height: 2,
          background: "#1a1a2e",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #a855f7, #ec4899)",
            borderRadius: 2,
            animation: "loaderBar 1.6s ease forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes loaderBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
