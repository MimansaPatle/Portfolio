"use client";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#0a0a0f",
        padding: "100px 6%",
        borderTop: "1px solid rgba(168,85,247,0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, #a855f7, #ec4899)" }} />
          <span style={{ fontSize: 12, color: "#a855f7", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
            Get In Touch
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-2px", color: "#fff", marginBottom: 60 }}>
          Let&apos;s Work{" "}
          <span style={{ WebkitTextStroke: "2px rgba(168,85,247,0.7)", color: "transparent" }}>Together</span>
        </h2>

        <div style={{ maxWidth: 520 }}>
          <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.8, marginBottom: 36 }}>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s build something great together.
          </p>

          <div style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 16px", background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.12)", borderRadius: 10, marginBottom: 12 }}>
            <div style={{ color: "#a855f7" }}><Mail size={16} /></div>
            <div>
              <p style={{ fontSize: 11, color: "#6b7280", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>Email</p>
              <a href="mailto:mimansapatle@gmail.com" style={{ fontSize: 14, color: "#e8e0f0", fontWeight: 500, textDecoration: "none" }}>
                mimansapatle@gmail.com
              </a>
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 16px", background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.12)", borderRadius: 10, marginBottom: 36 }}>
            <div style={{ color: "#a855f7" }}><MapPin size={16} /></div>
            <div>
              <p style={{ fontSize: 11, color: "#6b7280", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>Location</p>
              <p style={{ fontSize: 14, color: "#e8e0f0", fontWeight: 500, margin: 0 }}>Nagpur, Maharashtra, India</p>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://github.com/MimansaPatle" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              style={{ width: 44, height: 44, border: "1px solid rgba(168,85,247,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", background: "rgba(168,85,247,0.05)" }}>
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mimansa-patle-b489a6309" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              style={{ width: 44, height: 44, border: "1px solid rgba(168,85,247,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", background: "rgba(168,85,247,0.05)" }}>
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
