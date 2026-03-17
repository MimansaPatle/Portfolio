"use client";
import { experience, education } from "@/app/data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "#0a0a0f", padding: "100px 6%", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, #a855f7, #ec4899)" }} />
            <span style={{ fontSize: 12, color: "#a855f7", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>My Journey</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-2px", color: "#fff", marginBottom: 60 }}>
            Experience &amp; <span style={{ WebkitTextStroke: "2px rgba(168,85,247,0.7)", color: "transparent" }}>Education</span>
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          {/* Experience */}
          <FadeIn direction="left" delay={0.1}>
            <div>
              <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4b5563", marginBottom: 32 }}>Work Experience</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {experience.map((exp, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, paddingBottom: 36 }}>
                    {/* Timeline */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(135deg, #a855f7, #ec4899)", flexShrink: 0, marginTop: 4 }} />
                      {i < experience.length - 1 && <div style={{ width: 2, flex: 1, background: "linear-gradient(180deg, #a855f7, rgba(168,85,247,0.1))", marginTop: 6 }} />}
                    </div>
                    {/* Content */}
                    <div style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.1)", borderRadius: 12, padding: "20px 20px", flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                        <h4 style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{exp.company}</h4>
                        <span style={{ fontSize: 11, color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "3px 10px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.08)" }}>{exp.period}</span>
                      </div>
                      <p style={{ fontSize: 13, color: "#a855f7", fontWeight: 600, marginBottom: 4 }}>{exp.role}</p>
                      <p style={{ fontSize: 11, color: "#6b7280", marginBottom: 12 }}>{exp.type}</p>
                      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                        {exp.points.slice(0, 2).map((pt, j) => (
                          <li key={j} style={{ display: "flex", gap: 8, fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
                            <span style={{ color: "#a855f7", flexShrink: 0, fontSize: 8, marginTop: 5 }}>◆</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#4b5563", marginBottom: 32 }}>Education</h3>
              {education.map((edu, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ec4899", flexShrink: 0, marginTop: 4 }} />
                  </div>
                  <div style={{ background: "rgba(236,72,153,0.05)", border: "1px solid rgba(236,72,153,0.15)", borderRadius: 12, padding: "20px 20px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                      <h4 style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{edu.institution}</h4>
                      <span style={{ fontSize: 11, color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "3px 10px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.08)" }}>{edu.period}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#ec4899", fontWeight: 600, marginBottom: 4 }}>B.Tech CSE</p>
                    <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>{edu.degree}</p>
                  </div>
                </div>
              ))}


            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
