"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#060609", borderTop: "1px solid rgba(168,85,247,0.15)", padding: "48px 6%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-1px", marginBottom: 4, color: "#fff" }}>
            M<span style={{ color: "#a855f7" }}>P</span><span style={{ color: "#ec4899" }}>.</span>
          </div>
          <p style={{ fontSize: 13, color: "#4b5563" }}>Full-Stack Developer · Nagpur, India</p>
        </div>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {["About", "Skills", "Projects", "Experience", "Contact"].map((l) => (
            <button key={l}
              onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              style={{ background: "none", border: "none", color: "#4b5563", cursor: "pointer", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a855f7")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              {l}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#374151" }}>
          © {new Date().getFullYear()} Mimansa Patle. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
