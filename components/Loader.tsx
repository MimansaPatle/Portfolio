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
        background: "#121212",
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
      {/* Logo */}
      <div
        className="font-display"
        style={{
          fontSize: "clamp(56px, 10vw, 100px)",
          letterSpacing: "-2px",
          lineHeight: 1,
          color: "#f5f0e6",
          position: "relative",
          zIndex: 1,
        }}
      >
        M<span style={{ color: "#c1615a" }}>P</span>
        <span style={{ color: "#d9a35c", fontSize: "0.6em" }}>.</span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 140,
          height: 2,
          background: "#2a241e",
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#c1615a",
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
