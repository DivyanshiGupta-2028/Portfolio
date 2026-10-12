import { useEffect, useRef } from "react";

/**
 * ParticleField — full-viewport animated canvas background
 * Inspired by sanskriti-tech.com and product.inc floating particle effects.
 */
export default function ParticleField({ color1 = "#48E5FF", color2 = "#8B5CFF", density = 80, speed = 0.25, opacity = 0.55 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const isMobile = window.innerWidth < 768;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Sane particle caps: 18 on mobile, 42 on desktop
      const isMob = canvas.width < 768;
      const count = isMob ? 18 : 42;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (speed * 0.8),
          vy: (Math.random() - 0.5) * (speed * 0.8),
          r: Math.random() * 1.6 + 0.5,
          opacity: Math.random() * 0.5 + 0.25,
          pulse: Math.random() * Math.PI * 2,
          colorIdx: Math.random() > 0.5 ? 1 : 0,
        });
      }
    };

    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    };

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    const maxDist = 110;
    const maxDistSq = maxDist * maxDist;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isMob = canvas.width < 768;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += 0.012;
        const alpha = p.opacity * (0.65 + 0.35 * Math.sin(p.pulse));
        const rgb = p.colorIdx === 0 ? rgb1 : rgb2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.fill();

        // On mobile, skip the line connections to guarantee 120fps refresh rate
        if (!isMob) {
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dx = p.x - q.x;
            if (dx > maxDist || dx < -maxDist) continue;
            const dy = p.y - q.y;
            if (dy > maxDist || dy < -maxDist) continue;

            const distSq = dx * dx + dy * dy;
            if (distSq < maxDistSq) {
              const dist = Math.sqrt(distSq);
              const lineAlpha = ((maxDist - dist) / maxDist) * 0.12;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(${rgb1},${lineAlpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
    };

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const loop = () => {
      if (isVisible) {
        draw();
      }
      animId = requestAnimationFrame(loop);
    };

    resize();
    loop();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [color1, color2, density, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: opacity,
      }}
    />
  );
}
