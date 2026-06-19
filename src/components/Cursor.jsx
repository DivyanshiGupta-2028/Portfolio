import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // default to true, check in useEffect

  useEffect(() => {
    const checkTouch = () => {
      return window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window;
    };
    const touch = checkTouch();
    setIsMobile(touch);
    if (touch) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onOver = (e) => {
      const el = e.target;
      const isInteractive =
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.closest("a") ||
        el.closest("button") ||
        el.classList.contains("clickable");
      setHovering(!!isInteractive);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  // Lerp ring towards cursor
  useEffect(() => {
    let raf;
    let rx = ring.x, ry = ring.y;
    const lerp = () => {
      rx += (pos.x - rx) * 0.12;
      ry += (pos.y - ry) * 0.12;
      setRing({ x: rx, y: ry });
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: hovering ? "16px" : "8px",
          height: hovering ? "16px" : "8px",
          borderRadius: "50%",
          background: hovering ? "var(--gold)" : "var(--purple-light)",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "screen",
          transition: "width 0.2s, height 0.2s, background 0.2s",
          transform: `translate(${pos.x - (hovering ? 8 : 4)}px, ${pos.y - (hovering ? 8 : 4)}px) scale(${clicking ? 0.7 : 1})`,
        }}
      />
      {/* Ring */}
      <div
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: hovering ? "50px" : "36px",
          height: hovering ? "50px" : "36px",
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "rgba(244,185,66,0.7)" : "rgba(199,125,255,0.5)"}`,
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.25s, height 0.25s, border-color 0.25s",
          transform: `translate(${ring.x - (hovering ? 25 : 18)}px, ${ring.y - (hovering ? 25 : 18)}px)`,
        }}
      />
    </>
  );
}
