"use client";
import { X, ArrowUpRight, Github, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  points: string[];
  category: string;
  color: string;
  github?: string;
  inProgress?: boolean;
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (project) {
      setTimeout(() => setMounted(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setMounted(false);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md transition-opacity duration-300"
        style={{ opacity: mounted ? 1 : 0 }}
      />
      <div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-5">
        <div
          className="pointer-events-auto max-h-[85vh] w-[min(680px,92vw)] overflow-y-auto rounded-2xl border border-white/10 bg-alt transition-all duration-300"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
          }}
        >
          <div className="h-1 rounded-t-2xl" style={{ background: project.color }} />
          <div className="p-9 pt-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2.5 flex flex-wrap items-center gap-2">
                  <span
                    className="inline-block rounded-full px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: project.color, background: `${project.color}18` }}
                  >
                    {project.category}
                  </span>
                  {project.inProgress && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      <Clock size={10} /> In Progress
                    </span>
                  )}
                </div>
                <h2 className="font-display mb-1 text-[26px] leading-none text-ink">{project.title}</h2>
                <p className="text-sm font-semibold" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-ink"
              >
                <X size={16} />
              </button>
            </div>

            <p className="mb-6 text-sm leading-[1.8] text-muted">{project.description}</p>

            {project.points.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3.5 text-[11px] font-bold uppercase tracking-[2px] text-faint">Key Features</h3>
                <ul className="flex flex-col gap-2.5">
                  {project.points.map((pt, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] leading-[1.7] text-muted">
                      <span
                        className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border"
                        style={{ background: `${project.color}18`, borderColor: `${project.color}40` }}
                      >
                        <span className="block h-1.5 w-1.5 rounded-full" style={{ background: project.color }} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-7">
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[2px] text-faint">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full px-6 py-2.5 text-[13px] font-bold text-ink transition-opacity hover:opacity-85"
                  style={{ background: project.color }}
                >
                  <Github size={14} /> View Code
                </a>
              ) : (
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-6 py-2.5 text-[13px] font-semibold text-dim">
                  <Clock size={14} /> Demo coming soon
                </span>
              )}
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 rounded-full border border-white/10 px-6 py-2.5 text-[13px] font-semibold text-muted transition-colors hover:border-white/30 hover:text-ink"
              >
                Close <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
