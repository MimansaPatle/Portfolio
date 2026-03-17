"use client";
import { useState } from "react";
import { projects } from "@/app/data";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import FadeIn from "./FadeIn";

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" style={{ background: "#0d0d18", padding: "100px 6%", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, #a855f7, #ec4899)" }} />
            <span style={{ fontSize: 12, color: "#a855f7", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>My Work</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-2px", color: "#fff", marginBottom: 60 }}>
            Featured <span style={{ WebkitTextStroke: "2px rgba(168,85,247,0.7)", color: "transparent" }}>Projects</span>
          </h2>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div
                onClick={() => setSelected(project)}
                style={{
                  background: "rgba(168,85,247,0.04)",
                  border: "1px solid rgba(168,85,247,0.12)",
                  borderRadius: 16, overflow: "hidden",
                  cursor: "pointer", transition: "all 0.3s",
                  display: "flex", flexDirection: "column",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = project.color; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${project.color}20`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                {/* Color bar */}
                <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, ${project.color}80)` }} />

                <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: project.color, background: `${project.color}15`, padding: "3px 10px", borderRadius: 4, display: "inline-block", marginBottom: 8 }}>
                        {project.category}
                      </span>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
                        {project.title}
                      </h3>
                      <p style={{ fontSize: 13, color: project.color, fontWeight: 500, marginTop: 2 }}>{project.subtitle}</p>
                    </div>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${project.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <ArrowUpRight size={16} color={project.color} />
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ fontSize: 11, color: "#9ca3af", background: "rgba(255,255,255,0.05)", padding: "3px 10px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.08)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#9ca3af", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
                    >
                      <Github size={14} /> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
