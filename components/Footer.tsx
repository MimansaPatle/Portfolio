"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/app/data";

const LINKS = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-deep px-[6%] py-12">
      <div className="container-xl flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="font-display mb-1 text-2xl tracking-tight text-ink">
            M<span className="text-brand">P</span>
            <span className="text-gold">.</span>
          </div>
          <p className="mb-3 text-[13px] text-faint">Full-Stack Developer · Nagpur, India</p>
          <div className="flex gap-2">
            {[
              { href: personalInfo.github, icon: Github, label: "GitHub" },
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-brand transition-colors hover:bg-brand hover:text-ink"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-7">
          {LINKS.map((l) => (
            <button
              key={l}
              onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="text-[13px] text-faint transition-colors hover:text-brand"
            >
              {l}
            </button>
          ))}
        </div>
        <p className="text-xs text-faint/80">© {new Date().getFullYear()} Mimansa Patle. Built with Next.js.</p>
      </div>
    </footer>
  );
}
