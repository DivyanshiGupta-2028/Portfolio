import { useEffect, useState, useRef } from "react";

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    setIsMobile(isTouch);
    if (isTouch) return;

    let rafId;

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - (hovering ? 7 : 3)}px, ${e.clientY - (hovering ? 7 : 3)}px) scale(${clicking ? 0.7 : 1})`;
      }
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

    const lerp = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - (hovering ? 24 : 16)}px, ${ringPos.current.y - (hovering ? 24 : 16)}px)`;
      }
      rafId = requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    rafId = requestAnimationFrame(lerp);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [hovering, clicking]);

  if (isMobile) return null;

  return (
    <>
      {/* Reticle Dot */}
      <div
        ref={dotRef}
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
          willChange: "transform",
        }}
      />
      {/* Targeting Ring */}
      <div
        ref={ringRef}
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
          willChange: "transform",
        }}
      />
    </>
  );
}
