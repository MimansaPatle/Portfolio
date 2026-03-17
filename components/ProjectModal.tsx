"use client";
import { X, ArrowUpRight, Github } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  points: string[];
  category: string;
  color: string;
  github?: string;
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (project) {
      setTimeout(() => setMounted(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setMounted(false);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", opacity: mounted ? 1 : 0, transition: "opacity 0.25s ease" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 101, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, pointerEvents: "none" }}>
        <div style={{
          background: "#0d0d18", borderRadius: 16,
          border: `1px solid ${project.color}30`,
          width: "min(680px, 92vw)", maxHeight: "85vh", overflowY: "auto",
          boxShadow: `0 32px 80px ${project.color}20`,
          pointerEvents: "all",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}>
          <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, ${project.color}60)`, borderRadius: "16px 16px 0 0" }} />
          <div style={{ padding: "32px 36px 36px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: project.color, background: `${project.color}15`, padding: "3px 10px", borderRadius: 4, display: "inline-block", marginBottom: 10 }}>
                  {project.category}
                </span>
                <h2 style={{ fontSize: 26, fontWeight: 900, color: "#fff", letterSpacing: "-1px", lineHeight: 1, marginBottom: 4 }}>{project.title}</h2>
                <p style={{ fontSize: 14, color: project.color, fontWeight: 600 }}>{project.subtitle}</p>
              </div>
              <button onClick={onClose}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, color: "#9ca3af", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#9ca3af"; }}
              >
                <X size={16} />
              </button>
            </div>

            <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.8, marginBottom: 24 }}>{project.description}</p>

            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#4b5563", marginBottom: 14 }}>Key Features</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {project.points.map((pt, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "#9ca3af", lineHeight: 1.7 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: `${project.color}15`, border: `1px solid ${project.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: project.color, display: "block" }} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#4b5563", marginBottom: 12 }}>Tech Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: 12, color: "#c4b5d4", background: "rgba(168,85,247,0.1)", padding: "5px 12px", borderRadius: 6, border: "1px solid rgba(168,85,247,0.2)", fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`, color: "#fff", padding: "11px 24px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Github size={14} /> View Code
                </a>
              )}
              <button onClick={onClose}
                style={{ background: "transparent", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.1)", padding: "11px 24px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; }}
              >
                Close <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
