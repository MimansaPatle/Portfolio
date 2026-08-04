"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { projects } from "@/app/data";
import { ArrowUpRight, Github, Clock } from "lucide-react";
import ProjectModal from "./ProjectModal";
import FadeIn from "./FadeIn";

type Project = (typeof projects)[0];

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 300, damping: 25 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    px.set(0.5);
    py.set(0.5);
    (e.currentTarget as HTMLDivElement).style.borderColor = "";
  }

  return (
    <motion.div
      onClick={() => onSelect(project)}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = project.color;
      }}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-[border-color,transform] duration-300"
    >
      <div className="h-1" style={{ background: project.color }} />

      <div className="flex flex-1 flex-col p-6 pb-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span
                className="inline-block rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wider"
                style={{ color: project.color, background: `${project.color}18` }}
              >
                {project.category}
              </span>
            
            </div>
            <h3 className="font-display text-xl leading-tight text-ink">{project.title}</h3>
            <p className="mt-0.5 text-[13px] font-medium" style={{ color: project.color }}>
              {project.subtitle}
            </p>
          </div>
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ background: project.color, color: "#f5f0e6" }}
          >
            <ArrowUpRight size={16} />
          </div>
        </div>

        <p className="mb-4 flex-1 text-[13px] leading-[1.7] text-muted">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
          >
            <Github size={14} /> View on GitHub
          </a>
        ) : (
          <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-faint">
            <Clock size={14} /> Demo coming soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section bg-alt">
      <span
        className="watermark right-[4%] top-[6%] text-[clamp(60px,12vw,160px)]"
        style={{ color: "#c1615a", opacity: 0.06 }}
      >
        Work
      </span>
      <div className="container-xl">
        <FadeIn>
          <div className="eyebrow">
            <div className="eyebrow-dash" />
            <span className="eyebrow-text">My Work</span>
          </div>
          <h2 className="heading-xl mb-14">
            Featured <span className="outline-text">Projects</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} onSelect={setSelected} />
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
