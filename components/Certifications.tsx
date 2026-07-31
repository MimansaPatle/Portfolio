"use client";
import { certifications } from "@/app/data";
import { Trophy, FileCheck, Award, BookOpen, BadgeCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const ICONS = [Trophy, FileCheck, Award, BookOpen];

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-alt">
      <span
        className="watermark right-[4%] top-[6%] text-[clamp(60px,12vw,160px)]"
        style={{ color: "#c1615a", opacity: 0.06 }}
      >
        Awards
      </span>
      <div className="container-xl">
        <FadeIn>
          <div className="eyebrow">
            <div className="eyebrow-dash" />
            <span className="eyebrow-text">Achievements</span>
          </div>
          <h2 className="heading-xl mb-14">
            Certifications &amp; <span className="outline-text">Training</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const Icon = ICONS[i] ?? Award;
            const inProgress = cert.score.includes("Progress");
            const isBrand = i % 2 === 0;
            const tile = isBrand ? "bg-brand text-ink" : "bg-gold text-[#1a1512]";
            const accentBorder = isBrand ? "border-brand/30" : "border-gold/30";
            const accentBg = isBrand ? "bg-brand/[0.08]" : "bg-gold/[0.08]";
            const accentText = isBrand ? "text-brand" : "text-gold";

            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group h-[230px] [perspective:1200px]">
                  <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 [backface-visibility:hidden]">
                      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${tile}`}>
                        <Icon size={20} />
                      </div>
                      <h3 className="mb-2 text-[15px] font-bold leading-[1.4] text-ink">{cert.title}</h3>
                      <p className="mb-3 text-[13px] text-dim">{cert.issuer}</p>
                      <span
                        className={`mt-auto inline-block w-fit rounded-full border px-3 py-1 text-xs font-semibold ${
                          inProgress
                            ? "border-amber-500/30 bg-amber-500/10 text-amber-500"
                            : "border-brand/30 bg-brand/10 text-brand"
                        }`}
                      >
                        {cert.score}
                      </span>
                    </div>

                    {/* Back */}
                    <div
                      className={`absolute inset-0 flex h-full flex-col items-center justify-center rounded-2xl border p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ${accentBorder} ${accentBg}`}
                    >
                      <div className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 ${accentBorder} ${accentText}`}>
                        <BadgeCheck size={26} />
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-[2px] text-dim">
                        {inProgress ? "In Progress" : "Verified"}
                      </p>
                      <p className="mt-2 text-sm font-bold text-ink">{cert.issuer}</p>
                      <p className={`mt-1 text-xs font-semibold ${accentText}`}>{cert.score}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
