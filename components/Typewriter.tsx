"use client";
import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Full-Stack Developer",
  "React Developer",
  "Web Developer",
  "Software Developer",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];

    if (!deleting && text.length < current.length) {
      timer.current = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 80);
    } else if (!deleting && text.length === current.length) {
      timer.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timer.current = setTimeout(() => {
        setText(text.slice(0, -1));
      }, 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [text, deleting, roleIdx]);

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
      <span style={{ color: "#c084fc" }}>{text}</span>
      <span
        style={{
          color: "#a855f7",
          fontWeight: 300,
          animation: "tw-blink 1s step-end infinite",
          display: "inline-block",
        }}
      >
        |
      </span>
      <style>{`@keyframes tw-blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}
