import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkTouch = () => {
      return window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
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
    let rx = ring.x,
      ry = ring.y;
    const lerp = () => {
      rx += (pos.x - rx) * 0.15;
      ry += (pos.y - ry) * 0.15;
      setRing({ x: rx, y: ry });
      raf = requestAnimationFrame(lerp);
    };
    raf = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (isMobile) return null;

  return (
    <>
      {/* Reticle Dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? "14px" : "6px",
          height: hovering ? "14px" : "6px",
          borderRadius: "50%",
          background: hovering ? "var(--cyan)" : "#ffffff",
          boxShadow: hovering ? "0 0 15px var(--cyan)" : "none",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "screen",
          transition: "width 0.15s, height 0.15s, background 0.15s",
          transform: `translate(${pos.x - (hovering ? 7 : 3)}px, ${pos.y - (hovering ? 7 : 3)}px) scale(${clicking ? 0.7 : 1})`,
        }}
      />
      {/* Targeting Ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? "48px" : "32px",
          height: hovering ? "48px" : "32px",
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "var(--cyan)" : "rgba(72, 229, 255, 0.4)"}`,
          boxShadow: hovering ? "0 0 20px rgba(72, 229, 255, 0.35)" : "none",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
          transform: `translate(${ring.x - (hovering ? 24 : 16)}px, ${ring.y - (hovering ? 24 : 16)}px)`,
        }}
      />
    </>
  );
}
