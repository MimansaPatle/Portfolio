"use client";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";
import { personalInfo } from "@/app/data";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] bg-brand-deep px-[6%] py-24 sm:py-28">
      <span
        className="watermark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(70px,16vw,220px)]"
        style={{ color: "#000000", opacity: 0.12 }}
      >
        Contact
      </span>
      <div className="container-xl">
        <FadeIn>
          <div className="eyebrow">
            <div className="h-0.5 w-8 bg-cream" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cream">Get In Touch</span>
          </div>
          <h2 className="font-display mb-14 text-[clamp(32px,5vw,56px)] leading-[0.95] text-ink">
            Let&apos;s Work <span className="text-cream">Together</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          <FadeIn delay={0.1}>
            <div className="max-w-[520px]">
              <p className="mb-9 text-[15px] leading-[1.8] text-ink/75">
                Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                Let&apos;s build something great together.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="mb-3 flex items-center gap-3.5 rounded-[10px] border border-black/15 bg-black/10 px-4 py-3.5 transition-colors hover:bg-black/15"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-[#1a1512]">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-ink/60">Email</p>
                  <span className="text-sm font-medium text-ink">{personalInfo.email}</span>
                </div>
              </a>

              <div className="mb-9 flex items-center gap-3.5 rounded-[10px] border border-black/15 bg-black/10 px-4 py-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-[#1a1512]">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-ink/60">Location</p>
                  <p className="text-sm font-medium text-ink">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-bold text-[#1a1512] transition-colors hover:bg-[#e8dac0]"
                >
                  <Mail size={15} /> Say Hello
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/50"
                >
                  <Download size={15} /> Resume
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Terminal-style contact card */}
          <FadeIn direction="right" delay={0.15}>
            <div className="mx-auto w-full max-w-[360px] rounded-[28px] border border-black/30 bg-[#0c0a09] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div className="mb-3 flex items-center gap-3 px-2 pt-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mimansa-avatar.svg"
                  alt="Illustrated portrait of Mimansa Patle"
                  className="h-11 w-11 shrink-0 rounded-full border border-white/10"
                />
                <div>
                  <p className="text-sm font-bold text-ink">Mimansa Patle</p>
                  <p className="text-[11px] text-ink/50">Full-Stack Developer</p>
                </div>
              </div>

              <div className="rounded-[20px] bg-[#8fd68f] px-5 py-6 font-mono">
                <div className="mb-5 flex items-center justify-between text-[11px] font-bold text-[#0c0a09]/70">
                  <span>5G</span>
                  <span>11:56 am</span>
                </div>
                <p className="mb-2 text-xs text-[#0c0a09]/70">Contact me via email</p>
                <p className="break-all text-base font-bold leading-snug text-[#0c0a09]">{personalInfo.email}</p>
              </div>

              <div className="mt-3 flex items-center gap-2 px-1 pb-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink/70 transition-colors hover:border-white/30 hover:text-ink"
                >
                  <Github size={17} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-center rounded-full border border-white/10 px-4 text-sm font-medium text-ink/70 transition-colors hover:border-white/30 hover:text-ink"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="ml-auto flex h-11 items-center justify-center rounded-full bg-cream px-5 text-sm font-bold text-[#1a1512] transition-colors hover:bg-[#e8dac0]"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
