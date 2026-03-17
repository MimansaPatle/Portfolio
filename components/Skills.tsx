"use client";
import { skills } from "@/app/data";
import FadeIn from "./FadeIn";

const icons: Record<string, string> = {
  "Programming Languages": "{ }",
  "Frontend": "◈",
  "Backend": "⚙",
  "Databases": "◉",
  "Tools": "⚒",
};

const colors = ["#a855f7", "#ec4899", "#8b5cf6", "#f472b6", "#a855f7"];

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#0a0a0f", padding: "100px 6%", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, #a855f7, #ec4899)" }} />
            <span style={{ fontSize: 12, color: "#a855f7", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>What I Know</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-2px", color: "#fff" }}>
              Skills &amp; <span style={{ WebkitTextStroke: "2px rgba(168,85,247,0.7)", color: "transparent" }}>Tech</span>
            </h2>
            <p style={{ fontSize: 14, color: "#6b7280", maxWidth: 280, lineHeight: 1.7 }}>
              Tools and technologies I use to build modern web applications.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {Object.entries(skills).map(([category, items], i) => {
            const color = colors[i % colors.length];
            return (
              <FadeIn key={category} delay={i * 0.08}>
                <div style={{
                  background: "rgba(168,85,247,0.04)",
                  border: "1px solid rgba(168,85,247,0.12)",
                  borderRadius: 14, padding: "28px 24px",
                  transition: "all 0.3s", height: "100%",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = color; (e.currentTarget as HTMLDivElement).style.background = `${color}08`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.12)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(168,85,247,0.04)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color }}>
                      {icons[category] || "◆"}
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e8e0f0" }}>{category}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {items.map((skill) => (
                      <span key={skill} style={{
                        background: `${color}10`, color: "#c4b5d4",
                        padding: "5px 12px", borderRadius: 6, fontSize: 12, fontWeight: 500,
                        border: `1px solid ${color}20`,
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
