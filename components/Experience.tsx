"use client";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience, education } from "@/app/data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="section bg-base">
      <span
        className="watermark left-[4%] top-[6%] text-[clamp(60px,12vw,160px)]"
        style={{ color: "#c1615a", opacity: 0.06 }}
      >
        Journey
      </span>
      <div className="container-xl">
        <FadeIn>
          <div className="eyebrow">
            <div className="eyebrow-dash" />
            <span className="eyebrow-text">My Journey</span>
          </div>
          <h2 className="heading-xl mb-14">
            Experience &amp; <span className="outline-text">Education</span>
          </h2>
        </FadeIn>

        {/* Education — featured strip */}
        <FadeIn>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[3px] text-faint">Education</h3>
          {education.map((edu, i) => (
            <div
              key={i}
              className="mb-14 flex flex-col gap-5 rounded-2xl border border-gold/20 bg-gold/[0.06] p-7 sm:flex-row sm:items-center"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-[#1a1512]">
                <GraduationCap size={26} />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                  <h4 className="text-lg font-extrabold text-ink">{edu.institution}</h4>
                  <span className="badge shrink-0">{edu.period}</span>
                </div>
                <p className="mb-3 text-[13px] font-semibold text-gold">{edu.degree}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-gold/30 bg-gold/15 px-2.5 py-1 text-xs font-bold text-ink">
                    CGPA {edu.cgpa}
                  </span>
                  <span className="badge">{edu.note}</span>
                </div>
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Work Experience — grid */}
        <FadeIn delay={0.1}>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-[3px] text-faint">Work Experience</h3>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {experience.map((exp, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="h-full rounded-xl border border-white/[0.08] bg-white/[0.03] p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                        <Briefcase size={17} />
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold leading-tight text-ink">{exp.company}</h4>
                        <p className="text-[11px] text-dim">{exp.type}</p>
                      </div>
                    </div>
                    <span className="badge shrink-0">{exp.period}</span>
                  </div>
                  <p className="mb-3 text-[13px] font-semibold text-brand">{exp.role}</p>
                  <ul className="flex flex-col gap-1.5">
                    {exp.points.slice(0, 3).map((pt, j) => (
                      <li key={j} className="flex gap-2 text-[13px] leading-[1.6] text-muted">
                        <span className="mt-[5px] shrink-0 text-[8px] text-brand">◆</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
