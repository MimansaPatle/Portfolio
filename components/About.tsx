"use client";
import { MapPin, Mail, GraduationCap, Code2, Briefcase, FolderOpen, Cpu, Award } from "lucide-react";
import { personalInfo, additionalInfo } from "@/app/data";
import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const INFO_ITEMS = [
  { label: "Location", value: personalInfo.location, icon: MapPin },
  { label: "Email", value: personalInfo.email, icon: Mail },
  { label: "College", value: "Raipur Institute of Technology, 2023–2027", icon: GraduationCap },
  { label: "Focus", value: "Full-Stack Web Development", icon: Code2 },
];

const STATS = [
  { num: "4", label: "Internships & Trainings", icon: Briefcase, color: "brand" },
  { num: "4+", label: "Projects Built", icon: FolderOpen, color: "gold" },
  { num: "10+", label: "Technologies", icon: Cpu, color: "brand" },
  { num: "4+", label: "Certifications", icon: Award, color: "gold" },
];

export default function About() {
  return (
    <section id="about" className="section bg-alt">
      <span
        className="watermark right-[4%] top-[6%] text-[clamp(60px,12vw,160px)]"
        style={{ color: "#c1615a", opacity: 0.06 }}
      >
        Profile
      </span>
      <div className="container-xl">
        <FadeIn>
          <div className="eyebrow">
            <div className="eyebrow-dash" />
            <span className="eyebrow-text">About Me</span>
          </div>
          <h2 className="heading-xl mb-14">
            Who I <span className="outline-text">Am</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <FadeIn direction="left">
            <p className="mb-6 text-base leading-[1.9] text-muted">
              I&apos;m a Computer Science Engineering undergraduate with a strong passion for
              Full Stack Web Development. I enjoy building modern, responsive and scalable web
              applications using React, Next.js, Node.js and MongoDB.
            </p>
            <p className="mb-9 text-base leading-[1.9] text-muted">
              I&apos;ve completed multiple internships and vocational trainings where I gained
              hands-on experience building real-world projects — from database design to API
              development to UI. My goal is to continuously grow my skills and contribute to
              impactful software products.
            </p>

            <div className="flex flex-col gap-4">
              {INFO_ITEMS.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Icon size={14} />
                  </div>
                  <span className="min-w-[70px] text-xs text-dim">{label}</span>
                  <span className="text-sm font-medium text-ink">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ num, label, icon: Icon, color }) => (
                <div key={label} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-7 text-center">
                  <div
                    className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full ${
                      color === "brand" ? "bg-brand text-ink" : "bg-gold text-[#1a1512]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className={`font-display text-[40px] leading-none ${color === "brand" ? "text-brand" : "text-gold"}`}>
                    <CountUp value={num} />
                  </div>
                  <div className="mt-1.5 text-xs leading-[1.4] text-dim">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-dim">Soft Skills</p>
                <div className="flex flex-wrap gap-2">
                  {additionalInfo.softSkills.map((s) => (
                    <span key={s} className="badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-dim">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {additionalInfo.languages.map((l) => (
                    <span key={l} className="badge">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
