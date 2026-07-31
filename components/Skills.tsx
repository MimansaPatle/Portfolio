"use client";
import { skills } from "@/app/data";
import FadeIn from "./FadeIn";

const ICONS: Record<string, string> = {
  "Core CS Fundamentals": "Σ",
  Databases: "◉",
  "Programming Languages": "{ }",
  Frontend: "◈",
  Backend: "⚙",
  "Software & Tools": "⚒",
};

const COLORS = ["#c1615a", "#d9a35c"];
const TEXT_ON = ["#f5f0e6", "#1a1512"];

export default function Skills() {
  return (
    <section id="skills" className="section bg-base">
      <span
        className="watermark left-[4%] top-[6%] text-[clamp(60px,12vw,160px)]"
        style={{ color: "#c1615a", opacity: 0.06 }}
      >
        Tech
      </span>
      <div className="container-xl">
        <FadeIn>
          <div className="eyebrow">
            <div className="eyebrow-dash" />
            <span className="eyebrow-text">What I Know</span>
          </div>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <h2 className="heading-xl">
              Skills &amp; <span className="outline-text">Tech</span>
            </h2>
            <p className="max-w-[280px] text-sm leading-[1.7] text-dim">
              Tools and technologies I use to build modern web applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => {
            const color = COLORS[i % COLORS.length];
            const onColor = TEXT_ON[i % TEXT_ON.length];
            return (
              <FadeIn key={category} delay={i * 0.08}>
                <div
                  className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "";
                  }}
                >
                  <div className="mb-5 flex items-center gap-2.5">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-base font-bold"
                      style={{ background: color, color: onColor }}
                    >
                      {ICONS[category] || "◆"}
                    </div>
                    <h3 className="text-[15px] font-bold text-ink">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border px-3 py-1.5 text-xs font-medium text-muted"
                        style={{ background: `${color}12`, borderColor: `${color}30` }}
                      >
                        {skill}
                      </span>
                    ))}
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
