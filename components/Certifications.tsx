"use client";
import { certifications } from "@/app/data";
import { Trophy, FileCheck, Award, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";

const iconTypes = ["trophy", "filecheck", "award", "book"] as const;
type IconType = typeof iconTypes[number];

function CertIcon({ type }: { type: IconType }) {
  if (type === "trophy") return <Trophy size={28} />;
  if (type === "filecheck") return <FileCheck size={28} />;
  if (type === "book") return <BookOpen size={28} />;
  return <Award size={28} />;
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "#0d0d18", padding: "100px 6%", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, #a855f7, #ec4899)" }} />
            <span style={{ fontSize: 12, color: "#a855f7", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Achievements</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-2px", color: "#fff", marginBottom: 60 }}>
            Certifications &amp; <span style={{ WebkitTextStroke: "2px rgba(168,85,247,0.7)", color: "transparent" }}>Training</span>
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {certifications.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.12)", borderRadius: 14, padding: "24px 20px", transition: "all 0.3s", height: "100%" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#a855f7"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(168,85,247,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ color: "#a855f7", marginBottom: 16 }}><CertIcon type={iconTypes[i] ?? "award"} /></div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e8e0f0", marginBottom: 8, lineHeight: 1.4 }}>{cert.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 12 }}>{cert.issuer}</p>
                <span style={{
                  display: "inline-block", fontSize: 12, fontWeight: 600,
                  color: cert.score.includes("Progress") ? "#f59e0b" : "#a855f7",
                  background: cert.score.includes("Progress") ? "rgba(245,158,11,0.1)" : "rgba(168,85,247,0.1)",
                  padding: "4px 12px", borderRadius: 50,
                  border: `1px solid ${cert.score.includes("Progress") ? "rgba(245,158,11,0.3)" : "rgba(168,85,247,0.3)"}`,
                }}>
                  {cert.score}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
