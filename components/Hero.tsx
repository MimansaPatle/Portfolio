"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download, Briefcase, GraduationCap } from "lucide-react";
import Typewriter from "./Typewriter";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";
import { personalInfo } from "@/app/data";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
}

const STATS = [
  { num: "4+", label: "Projects" },
  { num: "4", label: "Internships" },
  { num: "4+", label: "Certifications" },
  { num: "8.34", label: "CGPA" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-base pt-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 z-0" />
      <motion.span
        className="watermark text-[clamp(80px,18vw,240px)]"
        style={{ color: "#c1615a", opacity: 0.06, position: "absolute", left: "50%", top: "8%", x: "-50%", y: watermarkY }}
      >
        Developer
      </motion.span>

      <div className="container-xl grid w-full gap-10 px-[6%] py-10 pb-28 lg:grid-cols-2 lg:items-center xl:px-16">
        {/* LEFT */}
        <div>
          <div className="mb-5 text-[clamp(13px,1.4vw,17px)] uppercase tracking-[2px] text-dim">Hi, I&apos;m</div>
          <div className="font-display text-[clamp(52px,8vw,96px)] leading-[0.95] tracking-tight text-ink">
            Mimansa
          </div>
          <div className="outline-text font-display mb-5 text-[clamp(52px,8vw,96px)] leading-[0.95] tracking-tight">
            Patle
          </div>

          <div className="mb-6 flex min-h-[1.5em] items-center gap-2 text-[clamp(18px,2.2vw,26px)] font-semibold">
            <span className="text-dim">I build</span>
            <Typewriter />
          </div>

          <p className="mb-9 max-w-[480px] text-[15px] leading-[1.8] text-muted">{personalInfo.summary}</p>

          <div className="mb-9 flex flex-wrap gap-3.5">
            <Magnetic>
              <button onClick={() => scrollTo("projects")} className="btn-primary">
                View Projects
              </button>
            </Magnetic>
            <Magnetic>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Download size={15} /> Resume
              </a>
            </Magnetic>
          </div>

          <div className="flex gap-3">
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
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-brand/50 hover:text-ink"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — illustrated portrait */}
        <div className="hidden items-center justify-center lg:flex">
          <motion.div
            className="relative w-full max-w-[380px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-deep" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mimansa-avatar.svg"
              alt="Illustrated portrait of Mimansa Patle"
              className="relative z-10 w-full max-w-[340px]"
            />

            <div className="absolute -right-2 top-6 flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-xs font-bold text-ink">
              <GraduationCap size={14} /> B.Tech CSE
            </div>
            <div className="absolute -bottom-2 -left-4 flex items-center gap-1.5 rounded-full bg-cream px-4 py-2.5 text-xs font-bold text-[#1a1512]">
              <Briefcase size={14} /> 4 Internships
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats band */}
      <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 divide-x divide-y divide-black/10 bg-cream sm:grid-cols-4 sm:divide-y-0">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-4 text-center sm:px-10">
            <div className="font-display text-2xl text-[#1a1512]">
              <CountUp value={s.num} />
            </div>
            <div className="mt-0.5 text-[11px] uppercase tracking-wider text-[#6b5f52]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
