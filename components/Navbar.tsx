"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "@/app/data";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    function onScroll() {
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(NAV_LINKS[i].id);
          return;
        }
      }
      setActive("about");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed inset-x-0 top-0 z-[9000] flex justify-center px-4 pt-4 sm:px-6">
      <div className="w-full max-w-4xl">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-deep/90 py-2 pl-2 pr-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:pl-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-display text-lg tracking-tight text-ink"
            >
              M<span className="text-brand">P</span>
              <span className="text-gold">.</span>
            </button>
            <span className="hidden items-center gap-1.5 border-l border-white/10 pl-3 text-xs font-medium text-muted sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for work
            </span>
          </div>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`relative py-1 text-sm transition-colors duration-200 ${
                    active === id ? "font-semibold text-ink" : "font-normal text-dim hover:text-muted"
                  }`}
                >
                  {label}
                  {active === id && (
                    <motion.span
                      layoutId="nav-active-dot"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-cream px-5 py-2 text-[13px] font-bold text-[#1a1512] transition-colors hover:bg-[#e8dac0] lg:flex"
            >
              Resume <Download size={13} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-white/10 bg-deep/95 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => {
                  setOpen(false);
                  scrollTo(id);
                }}
                className={`block w-full border-b border-white/5 py-3 text-left text-base last:border-b-0 ${
                  active === id ? "font-semibold text-brand" : "font-normal text-muted"
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-bold text-[#1a1512]"
            >
              Download Resume <Download size={14} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
