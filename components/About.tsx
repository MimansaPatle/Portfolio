"use client";
import { MapPin, Mail, GraduationCap, Code2, Briefcase, FolderOpen, Cpu, Award } from "lucide-react";

const INFO_ITEMS = [
  { label: "Location", value: "Nagpur, Maharashtra, India", icon: "map" },
  { label: "Email", value: "mimansapatle@gmail.com", icon: "mail" },
  { label: "College", value: "Raipur Institute of Technology, 2023–2027", icon: "grad" },
  { label: "Focus", value: "Full-Stack Web Development", icon: "code" },
];

const STATS = [
  { num: "2+", label: "Internships", icon: "briefcase", color: "#a855f7" },
  { num: "5+", label: "Projects Built", icon: "folder", color: "#ec4899" },
  { num: "10+", label: "Technologies", icon: "cpu", color: "#a855f7" },
  { num: "4+", label: "Certifications", icon: "award", color: "#ec4899" },
];

function InfoIcon({ type }: { type: string }) {
  if (type === "map") return <MapPin size={15} />;
  if (type === "mail") return <Mail size={15} />;
  if (type === "grad") return <GraduationCap size={15} />;
  return <Code2 size={15} />;
}

function StatIcon({ type }: { type: string }) {
  if (type === "briefcase") return <Briefcase size={24} />;
  if (type === "folder") return <FolderOpen size={24} />;
  if (type === "cpu") return <Cpu size={24} />;
  return <Award size={24} />;
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#0d0d18",
        padding: "100px 6%",
        borderTop: "1px solid rgba(168,85,247,0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 32,
              height: 2,
              background: "linear-gradient(90deg, #a855f7, #ec4899)",
            }}
          />
          <span
            style={{
              fontSize: 12,
              color: "#a855f7",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            About Me
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            letterSpacing: "-2px",
            color: "#fff",
            marginBottom: 60,
          }}
        >
          Who I{" "}
          <span
            style={{
              WebkitTextStroke: "2px rgba(168,85,247,0.7)",
              color: "transparent",
            }}
          >
            Am
          </span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: 16,
                color: "#9ca3af",
                lineHeight: 1.9,
                marginBottom: 24,
              }}
            >
              I&apos;m a Computer Science Engineering undergraduate with a strong passion
              for Full Stack Web Development. I enjoy building modern, responsive and
              scalable web applications using React, Next.js, Node.js and MongoDB.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#9ca3af",
                lineHeight: 1.9,
                marginBottom: 36,
              }}
            >
              I&apos;ve completed professional internships where I gained hands-on
              experience building real-world projects. My goal is to continuously grow
              my skills and contribute to impactful software products.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {INFO_ITEMS.map(({ label, value, icon }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 16px",
                    background: "rgba(168,85,247,0.05)",
                    border: "1px solid rgba(168,85,247,0.1)",
                    borderRadius: 8,
                  }}
                >
                  <div style={{ color: "#a855f7", flexShrink: 0 }}>
                    <InfoIcon type={icon} />
                  </div>
                  <span
                    style={{ fontSize: 12, color: "#6b7280", minWidth: 70 }}
                  >
                    {label}
                  </span>
                  <span
                    style={{ fontSize: 14, color: "#e8e0f0", fontWeight: 500 }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {STATS.map(({ num, label, icon, color }) => (
              <div
                key={label}
                style={{
                  background: "rgba(168,85,247,0.05)",
                  border: "1px solid rgba(168,85,247,0.12)",
                  borderRadius: 12,
                  padding: "28px 20px",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    color,
                    marginBottom: 8,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <StatIcon type={icon} />
                </div>
                <div
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    color,
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    marginTop: 6,
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
