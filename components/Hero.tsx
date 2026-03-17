"use client";
import { Github, Linkedin, Mail, Briefcase, GraduationCap } from "lucide-react";
import Typewriter from "./Typewriter";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
}

const CODE_LINES: [string, string][] = [
  ["#a855f7", "const developer = {"],
  ["#ec4899", '  name: "Mimansa Patle",'],
  ["#34d399", '  role: "Full-Stack Dev",'],
  ["#60a5fa", '  skills: ["React", "Next.js",'],
  ["#60a5fa", '    "Node.js", "MongoDB"],'],
  ["#fbbf24", '  passion: "Building things",'],
  ["#a855f7", "};"],
];

const STATS = [
  { num: "3+", label: "Projects" },
  { num: "5+", label: "Tech Stacks" },
  { num: "2+", label: "Internships" },
  { num: "4+", label: "Certifications" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingTop: 70,
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          padding: "60px 6% 120px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
          maxWidth: 1400,
          margin: "0 auto",
        }}
        className="hero-grid"
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.3)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#a855f7",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "#a855f7",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              Available for work
            </span>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div
              style={{
                fontSize: "clamp(13px, 1.4vw, 17px)",
                color: "#6b7280",
                fontWeight: 400,
                marginBottom: 8,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Hi, I&apos;m
            </div>
            <div
              style={{
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 900,
                letterSpacing: "-3px",
                color: "#ffffff",
                lineHeight: 0.95,
              }}
            >
              Mimansa
            </div>
            <div
              style={{
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 900,
                letterSpacing: "-3px",
                color: "transparent",
                WebkitTextStroke: "2px rgba(168,85,247,0.7)",
                lineHeight: 0.95,
                marginBottom: 20,
              }}
            >
              Patle
            </div>
          </div>

          <div
            style={{
              fontSize: "clamp(18px, 2.2vw, 26px)",
              fontWeight: 600,
              marginBottom: 24,
              minHeight: "1.5em",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ color: "#6b7280" }}>I build</span>
            <Typewriter />
          </div>

          <p
            style={{
              fontSize: 15,
              color: "#9ca3af",
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: 36,
            }}
          >
            B.Tech CSE student at Raipur Institute of Technology. Passionate about
            building modern, scalable web applications with clean code and great UX.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 36,
            }}
          >
            <button
              onClick={() => scrollTo("projects")}
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
              }}
            >
              View Projects
            </button>

          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <a
              href="https://github.com/MimansaPatle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                border: "1px solid rgba(168,85,247,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                textDecoration: "none",
                background: "rgba(168,85,247,0.05)",
              }}
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mimansa-patle-b489a6309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                border: "1px solid rgba(168,85,247,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                textDecoration: "none",
                background: "rgba(168,85,247,0.05)",
              }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mimansapatle@gmail.com"
              aria-label="Email"
              style={{
                width: 42,
                height: 42,
                borderRadius: 8,
                border: "1px solid rgba(168,85,247,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                textDecoration: "none",
                background: "rgba(168,85,247,0.05)",
              }}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT - Code card */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hero-right"
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 380 }}>
            <div
              style={{
                background: "linear-gradient(135deg, #13131f 0%, #1a0a2e 100%)",
                border: "1px solid rgba(168,85,247,0.2)",
                borderRadius: 20,
                padding: 32,
                boxShadow: "0 0 60px rgba(168,85,247,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  marginBottom: 20,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#ff5f57",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#febc2e",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#28c840",
                  }}
                />
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: 11,
                    color: "#4b5563",
                    fontFamily: "monospace",
                  }}
                >
                  portfolio.tsx
                </span>
              </div>
              {CODE_LINES.map(([color, text], i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "monospace",
                    fontSize: 13,
                    color,
                    lineHeight: 1.8,
                  }}
                >
                  {text}
                </div>
              ))}
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 13,
                  color: "#a855f7",
                  lineHeight: 1.8,
                  animation: "blink 1s step-end infinite",
                }}
              >
                █
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: -16,
                right: -16,
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                borderRadius: 10,
                padding: "10px 16px",
                fontSize: 12,
                fontWeight: 700,
                color: "#fff",
                boxShadow: "0 8px 24px rgba(168,85,247,0.4)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <GraduationCap size={14} /> B.Tech CSE
            </div>

            <div
              style={{
                position: "absolute",
                bottom: -16,
                left: -16,
                background: "#13131f",
                border: "1px solid rgba(168,85,247,0.3)",
                borderRadius: 10,
                padding: "10px 16px",
                fontSize: 12,
                fontWeight: 600,
                color: "#e8e0f0",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Briefcase size={14} color="#a855f7" /> 2+ Internships
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid rgba(168,85,247,0.1)",
          background: "rgba(10,10,15,0.8)",
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "18px 40px",
              textAlign: "center",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(168,85,247,0.1)" : "none",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 900, color: "#a855f7" }}>{s.num}</div>
            <div
              style={{
                fontSize: 11,
                color: "#6b7280",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 40px 5% 100px !important; }
          .hero-right { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-grid { padding: 32px 4% 90px !important; }
        }
      `}</style>
    </section>
  );
}
