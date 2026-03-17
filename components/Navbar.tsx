"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(NAV_LINKS[i].id);
          return;
        }
      }
      setActive("about");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.15)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          padding: "0 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: "-1px",
            color: "#fff",
            fontFamily: "inherit",
          }}
        >
          M<span style={{ color: "#a855f7" }}>P</span>
          <span style={{ color: "#ec4899" }}>.</span>
        </button>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: active === id ? 700 : 400,
                  color: active === id ? "#fff" : "#6b7280",
                  fontFamily: "inherit",
                  padding: "4px 0",
                  position: "relative",
                  transition: "color 0.2s",
                }}
              >
                {label}
                {active === id && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#a855f7",
                      display: "block",
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <a
          href="mailto:mimansapatle@gmail.com"
          className="nav-desktop"
          style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            color: "#fff",
            padding: "9px 22px",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            display: "none",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: "#0d0d18",
            borderTop: "1px solid rgba(168,85,247,0.2)",
            padding: "16px 6%",
          }}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => {
                setOpen(false);
                scrollTo(id);
              }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                color: active === id ? "#a855f7" : "#9ca3af",
                fontWeight: active === id ? 700 : 400,
                cursor: "pointer",
                fontSize: 16,
                padding: "12px 0",
                fontFamily: "inherit",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
