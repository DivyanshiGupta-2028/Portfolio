import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import PageTransition from "../components/PageTransition";

const roles = [
  "Full-Stack Engineer",
  ".NET & Azure Architect",
  "AI/ML Backend Builder",
  "React & Angular Dev",
];

/* ── Neural-grid canvas background ── */
function NeuralCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H, nodes = [];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      nodes = Array.from({ length: 90 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2.5 + 1,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.025;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.5;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(0, 229, 196,${alpha})`);
            grad.addColorStop(1, `rgba(0, 212, 232,${alpha * 0.5})`);
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.9;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach(n => {
        const glow = Math.sin(n.pulse) * 0.5 + 0.5;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
        g.addColorStop(0, `rgba(0, 229, 196,${glow})`);
        g.addColorStop(1, "rgba(0, 229, 196,0)");
        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(77, 255, 217,${0.85 + 0.15 * glow})`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        opacity: 0.65, pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}

/* ── Matrix rain effect ── */
function MatrixRain() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const chars = "01アイウエオカキクケコサシスセソ{}[]()<>/\\|=+-*&%$#@!?";
    const fontSize = 13;
    let cols, drops;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(1).map(() => Math.random() * -100);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(10,15,15,0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = `rgba(180, 255, 245, 0.9)`;
        } else {
          ctx.fillStyle = `rgba(0, 229, 196, ${0.12 + brightness * 0.2})`;
        }
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        opacity: 0.18, pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}

/* ── Tech grid lines background ── */
function TechGrid() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {/* Horizontal lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={`h${i}`} style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          top: `${(i + 1) * 12.5}%`,
          background: "linear-gradient(90deg, transparent 0%, rgba(0,229,196,0.06) 30%, rgba(0,229,196,0.06) 70%, transparent 100%)",
        }} />
      ))}
      {/* Vertical lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={`v${i}`} style={{
          position: "absolute", top: 0, bottom: 0, width: "1px",
          left: `${(i + 1) * 14.28}%`,
          background: "linear-gradient(180deg, transparent 0%, rgba(0,229,196,0.05) 30%, rgba(0,229,196,0.05) 70%, transparent 100%)",
        }} />
      ))}
      {/* Corner crosshairs */}
      {[
        { top: "8%", left: "8%" }, { top: "8%", right: "8%" },
        { bottom: "8%", left: "8%" }, { bottom: "8%", right: "8%" },
      ].map((pos, i) => (
        <div key={`c${i}`} style={{
          position: "absolute", ...pos,
          width: 24, height: 24,
          opacity: 0.25,
          backgroundImage: `
            linear-gradient(rgba(0,229,196,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,196,1) 1px, transparent 1px)
          `,
          backgroundSize: "100% 50%, 50% 100%",
        }} />
      ))}
    </div>
  );
}

/* ── Mouse cursor glow ── */
function CursorGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div ref={glowRef} style={{
      position: "fixed", pointerEvents: "none", zIndex: 1,
      width: 400, height: 400,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,229,196,0.06) 0%, transparent 65%)",
      transform: "translate(-50%, -50%)",
      transition: "left 0.15s ease, top 0.15s ease",
    }} />
  );
}

/* ── Radar ping rings ── */
function RadarPing() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {[
        { cx: "15%", cy: "70%", delay: "0s",   dur: "4s"  },
        { cx: "80%", cy: "20%", delay: "1.5s", dur: "5s"  },
        { cx: "50%", cy: "85%", delay: "3s",   dur: "4.5s"},
      ].map((p, i) => (
        <div key={i} style={{ position: "absolute", left: p.cx, top: p.cy, transform: "translate(-50%,-50%)" }}>
          {[0, 1, 2].map(j => (
            <div key={j} style={{
              position: "absolute",
              width: 8, height: 8,
              borderRadius: "50%",
              border: "1px solid rgba(0,229,196,0.6)",
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              animation: `radarRing ${p.dur} ease-out infinite`,
              animationDelay: `calc(${p.delay} + ${j * 1.2}s)`,
            }} />
          ))}
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#00e5c4", boxShadow: "0 0 8px #00e5c4", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        </div>
      ))}
    </div>
  );
}

/* ── Floating particles ── */
function FloatingParticles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    dur: `${6 + Math.random() * 8}s`,
    delay: `${Math.random() * 8}s`,
    opacity: Math.random() * 0.4 + 0.15,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: "absolute",
          bottom: "-10px",
          left: p.left,
          width: p.size,
          height: p.size,
          borderRadius: "50%",
          background: "#00e5c4",
          boxShadow: `0 0 ${p.size * 3}px rgba(0,229,196,0.8)`,
          opacity: p.opacity,
          animation: `particleFloat ${p.dur} ease-in infinite`,
          animationDelay: p.delay,
        }} />
      ))}
    </div>
  );
}

/* ── Screen corner HUD overlays ── */
function CornerHUD() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
      {/* Top-left */}
      <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", display: "flex", flexDirection: "column", gap: "4px" }}>
        <div style={{ width: 40, height: 2, background: "rgba(0,229,196,0.5)" }} />
        <div style={{ width: 24, height: 1, background: "rgba(0,229,196,0.3)" }} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(0,229,196,0.5)", letterSpacing: "0.15em", marginTop: "4px" }}>SYS::ONLINE</div>
      </div>
      {/* Top-right */}
      <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
        <div style={{ width: 40, height: 2, background: "rgba(0,229,196,0.5)" }} />
        <div style={{ width: 24, height: 1, background: "rgba(0,229,196,0.3)" }} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(0,229,196,0.5)", letterSpacing: "0.15em", marginTop: "4px" }}>v2.0.26</div>
      </div>
      {/* Bottom-left */}
      <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(0,229,196,0.35)", letterSpacing: "0.1em", marginBottom: "4px" }}>PORTFOLIO.EXE</div>
        <div style={{ width: 40, height: 1, background: "rgba(0,229,196,0.3)" }} />
        <div style={{ width: 24, height: 2, background: "rgba(0,229,196,0.5)", marginTop: "4px" }} />
      </div>
      {/* Bottom-right */}
      <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", textAlign: "right" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: "rgba(0,229,196,0.35)", letterSpacing: "0.1em", marginBottom: "4px" }}>INDIA · UTC+5:30</div>
        <div style={{ width: 40, height: 1, background: "rgba(0,229,196,0.3)", marginLeft: "auto" }} />
        <div style={{ width: 24, height: 2, background: "rgba(0,229,196,0.5)", marginLeft: "auto", marginTop: "4px" }} />
      </div>
    </div>
  );
}

/* ── Floating glowing orbs ── */
function GlowOrbs() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {[
        { size: 650, top: "0%",  left: "-10%", color: "rgba(0,229,196,0.09)",  dur: "18s" },
        { size: 450, top: "50%", right: "-8%", color: "rgba(0,212,232,0.07)",  dur: "24s", delay: "-8s" },
        { size: 350, top: "25%", left: "55%",  color: "rgba(77,255,217,0.06)", dur: "14s", delay: "-4s" },
        { size: 280, top: "70%", left: "20%",  color: "rgba(0,229,196,0.05)",  dur: "20s", delay: "-12s" },
      ].map((o, i) => (
        <div key={i} style={{
          position: "absolute",
          width: o.size, height: o.size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
          top: o.top, left: o.left, right: o.right,
          animation: `orbFloat ${o.dur} ease-in-out infinite alternate`,
          animationDelay: o.delay || "0s",
        }} />
      ))}
    </div>
  );
}

/* ── Scanning line effect ── */
function ScanLine() {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, transparent 0%, rgba(0, 229, 196,0.6) 50%, transparent 100%)",
        animation: "scanLine 6s linear infinite",
        boxShadow: "0 0 20px rgba(0, 229, 196,0.4)",
      }} />
    </div>
  );
}

/* ── AI status bar chip ── */
function StatusBadge() {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const t = setInterval(() => setDots(d => d.length >= 3 ? "." : d + "."), 500);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.6rem",
        padding: "0.45rem 1rem", borderRadius: "100px",
        border: "1px solid rgba(0, 229, 196,0.3)",
        background: "rgba(0, 229, 196,0.06)",
        backdropFilter: "blur(12px)",
        marginBottom: "2rem",
      }}
    >
      <span style={{
        width: 7, height: 7, borderRadius: "50%",
        background: "#74d457",
        boxShadow: "0 0 0 0 rgba(116,212,87,0.5)",
        animation: "pulse-dot 2s infinite",
        display: "inline-block",
      }} />
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem",
        color: "var(--gold)", letterSpacing: "0.2em", textTransform: "uppercase",
      }}>
        System Online{dots}
      </span>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
        color: "var(--muted)", marginLeft: "0.3rem",
      }}>
        Open to Freelance & Remote
      </span>
    </motion.div>
  );
}

/* ── Typewriter ── */
function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let t;
    const cur = roles[roleIdx];
    if (typing) {
      if (displayed.length < cur.length)
        t = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 65);
      else t = setTimeout(() => setTyping(false), 1800);
    } else {
      if (displayed.length > 0)
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      else { setRoleIdx(p => (p + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', monospace", fontSize: "1.08rem",
      color: "var(--purple-light)", marginBottom: "1.8rem",
      minHeight: "1.7rem", display: "flex", alignItems: "center", gap: "2px",
    }}>
      <span style={{ color: "var(--gold)", marginRight: "0.5rem", opacity: 0.7 }}>▶</span>
      <span>{displayed}</span>
      <span style={{ animation: "blink 0.8s infinite", color: "var(--gold)" }}>▌</span>
    </div>
  );
}

/* ── AI card on the right ── */
function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: "1000px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
      className="hero-right"
    >
      <div style={{
        width: "100%", maxWidth: "420px", position: "relative", zIndex: 2,
        background: "rgba(10,20,18,0.85)",
        border: "1px solid rgba(0, 229, 196,0.25)",
        borderRadius: "20px",
        backdropFilter: "blur(40px)",
        padding: "2rem",
        boxShadow: "0 0 80px rgba(0,229,196,0.14), 0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "1.08rem",
        overflow: "hidden",
        animation: "cardGlow 3s ease-in-out infinite",
      }}>
        {/* HUD corner accents */}
        <div style={{ position: "absolute", top: 12, left: 12, width: 16, height: 16, borderTop: "2px solid #00e5c4", borderLeft: "2px solid #00e5c4", opacity: 0.7 }} />
        <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderTop: "2px solid #00e5c4", borderRight: "2px solid #00e5c4", opacity: 0.7 }} />
        <div style={{ position: "absolute", bottom: 12, left: 12, width: 16, height: 16, borderBottom: "2px solid #00e5c4", borderLeft: "2px solid #00e5c4", opacity: 0.7 }} />
        <div style={{ position: "absolute", bottom: 12, right: 12, width: 16, height: 16, borderBottom: "2px solid #00e5c4", borderRight: "2px solid #00e5c4", opacity: 0.7 }} />
        <div style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,229,196,0.5), transparent)", animation: "demoScanMove 4s linear infinite", pointerEvents: "none" }} />
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.2rem" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ color: "var(--muted)", lineHeight: "2" }}>
          <p><span style={{ color: "var(--pink)" }}>const</span> <span style={{ color: "var(--gold-light)" }}>developer</span> = {"{"}</p>
          <p style={{ paddingLeft: "1.5rem" }}><span style={{ color: "var(--gold)" }}>name</span>: <span style={{ color: "var(--purple-light)" }}>"Divyanshi Gupta"</span>,</p>
          <p style={{ paddingLeft: "1.5rem" }}><span style={{ color: "var(--gold)" }}>role</span>: <span style={{ color: "var(--purple-light)" }}>"Full Stack Engineer"</span>,</p>
          <p style={{ paddingLeft: "1.5rem" }}><span style={{ color: "var(--gold)" }}>skills</span>: [</p>
          <p style={{ paddingLeft: "3rem" }}><span style={{ color: "var(--purple-light)" }}>".NET Core"</span>, <span style={{ color: "var(--purple-light)" }}>"React"</span>,</p>
          <p style={{ paddingLeft: "3rem" }}><span style={{ color: "var(--purple-light)" }}>"Azure"</span>, <span style={{ color: "var(--purple-light)" }}>"AI Backends"</span></p>
          <p style={{ paddingLeft: "1.5rem" }}>],</p>
          <p style={{ paddingLeft: "1.5rem" }}><span style={{ color: "var(--gold)" }}>available</span>: <span style={{ color: "var(--pink)" }}>true</span>,</p>
          <p style={{ paddingLeft: "1.5rem" }}><span style={{ color: "var(--gold)" }}>location</span>: <span style={{ color: "var(--purple-light)" }}>"Remote 🌍"</span></p>
          <p>{"}"}</p>
          <br/>
          <p><span style={{ color: "var(--dim)" }}>// Ready to build your next big thing!</span></p>
          <p style={{ color: "var(--cream)" }}>
            <span style={{ color: "var(--gold-light)" }}>developer</span>.contact();
          </p>
          <motion.div 
            animate={{ opacity: [1, 0, 1] }} 
            transition={{ duration: 1, repeat: Infinity }} 
            style={{ display: "inline-block", width: "8px", height: "16px", background: "var(--gold)", verticalAlign: "middle", marginLeft: "4px" }} 
          />
        </div>
      </div>
      
      {/* Floating badges */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "-1.5rem", left: "-2rem", background: "rgba(20,16,14,0.9)", padding: "0.6rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(0, 229, 196,0.2)", display: "flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", zIndex: 3 }}
      >
        <span style={{ color: "#febc2e", fontSize: "1.08rem" }}>★</span>
        <span style={{ color: "white", fontSize: "1.08rem", fontWeight: "bold" }}>Microsoft Certified</span>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: "-1.5rem", right: "-2rem", background: "rgba(20,16,14,0.9)", padding: "0.6rem 1.2rem", borderRadius: "12px", border: "1px solid rgba(0, 229, 196,0.2)", display: "flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", zIndex: 3 }}
      >
        <span style={{ color: "var(--purple-light)", fontSize: "1.08rem", fontFamily: "'JetBrains Mono', monospace" }}>{`{}`}</span>
        <span style={{ color: "white", fontSize: "1.08rem", fontWeight: "bold" }}>Production Ready</span>
      </motion.div>
    </motion.div>
  );
}

/* ── Main component ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Home() {
  return (
    <PageTransition>
      <div className="page-wrapper" style={{ overflow: "hidden" }}>

        {/* ── Hero ── */}
        <section
          id="hero"
          style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 3rem", position: "relative" }}
        >
          <NeuralCanvas />
          <GlowOrbs />
          <MatrixRain />
          <TechGrid />
          <CursorGlow />
          <RadarPing />
          <FloatingParticles />
          <CornerHUD />
          <ScanLine />

          <div style={{
            maxWidth: "1200px", margin: "0 auto", width: "100%",
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "4rem", alignItems: "center", position: "relative", zIndex: 2,
          }} className="hero-grid">

            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp}>
                <StatusBadge />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  marginBottom: "1.2rem",
                }}
              >
                Hi, I'm<br/>
                <span style={{ display: "block", marginTop: "0.5rem" }}>Divyanshi</span>
                <span style={{
                  display: "block",
                  background: "linear-gradient(135deg, var(--purple-light) 0%, var(--gold) 60%, var(--pink) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(0, 229, 196,0.35))",
                  animation: "nameGlitch 8s infinite",
                  position: "relative",
                }}>
                  Gupta
                </span>
              </motion.h1>

              <motion.div variants={fadeUp}>
                <Typewriter />
              </motion.div>

              <motion.p
                variants={fadeUp}
                style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.85, maxWidth: "500px", marginBottom: "2.8rem" }}
              >
                Full-Stack Engineer with{" "}
                <strong style={{ color: "var(--cream)" }}>2+ years</strong> shipping production systems — SaaS, dating apps, e-commerce, and AI-powered backends.{" "}
                <strong style={{ color: "var(--gold)" }}>Microsoft Certified (AZ-900 · AI-900).</strong>
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/work" className="btn-primary"><span>View My Work</span></Link>
                <Link to="/contact" className="btn-secondary">Let's Talk</Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex", gap: "3rem", marginTop: "3.5rem",
                  paddingTop: "2rem", borderTop: "1px solid var(--border)",
                }}
              >
                {[
                  { num: "5+", label: "Projects Done" },
                  { num: "2+", label: "Years Exp" },
                  { num: "2×", label: "MS Certs" }
                ].map((stat, i) => (
                  <div key={stat.label} style={{ display: "flex", gap: "3rem" }}>
                    <div>
                      <div style={{
                        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem",
                        background: "linear-gradient(135deg, var(--purple-light), var(--gold))",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      }}>
                        {stat.num}
                      </div>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem",
                        color: "var(--dim)", letterSpacing: "0.15em",
                        textTransform: "uppercase", marginTop: "0.2rem",
                      }}>
                        {stat.label}
                      </div>
                    </div>
                    {i < 2 && <div style={{ width: "1px", background: "var(--border)", height: "100%", opacity: 0.5 }} />}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right */}
            <HeroCard />
          </div>
        </section>

        {/* ── Marquee ── */}
        <div style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden", padding: "1rem 0",
          background: "rgba(0, 229, 196,0.03)",
          position: "relative", zIndex: 2,
        }}>
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: "3rem", width: "max-content" }}
          >
            {[...Array(4)].flatMap(() =>
              ["ASP.NET Core", "Angular 19", "FastAPI · Python", "React.js", "Node.js · Express",
                "C# · TypeScript", "SQL Server", "Azure DevOps", "Docker · CI/CD", "JWT · OAuth2",
                "AI / ML Pipelines", "Microservices"]
                .map((item) => (
                  <span key={Math.random()} style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
                    color: "var(--muted)", letterSpacing: "0.15em",
                    textTransform: "uppercase", whiteSpace: "nowrap",
                    display: "flex", alignItems: "center", gap: "1rem",
                  }}>
                    <span style={{ color: "var(--gold)" }}>◆</span>{item}
                  </span>
                ))
            )}
          </motion.div>
        </div>

        {/* ── EXPERTISE ── */}
        <section style={{ padding: "6rem 3rem", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                // Expertise
              </span>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: "0.5rem" }}>
                What I Build
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {[
                { icon: "🌐", title: "Web Applications", count: "3 projects", color: "rgba(0, 229, 196,0.12)" },
                { icon: "☁️", title: "Cloud & APIs", count: "4 projects", color: "rgba(255,120,90,0.12)" },
                { icon: "🤖", title: "AI/ML Backends", count: "2 projects", color: "rgba(255,200,160,0.12)" },
                { icon: "📱", title: "Mobile & SaaS", count: "1 project", color: "rgba(200,150,255,0.12)" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card"
                  style={{
                    padding: "2rem 1.5rem", borderRadius: "16px", textAlign: "center",
                    cursor: "pointer", display: "block", textDecoration: "none"
                  }}
                >
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "12px",
                    background: item.color, margin: "0 auto 1.5rem",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem",
                    border: "1px solid rgba(255,255,255,0.05)"
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>
                    {item.count}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Demo Reel ── */}
        <DemoReel />

        <style>{`
          @keyframes orbFloat {
            0%   { transform: translate(0,    0)   scale(1);    }
            50%  { transform: translate(30px, 40px) scale(1.08); }
            100% { transform: translate(-20px, 20px) scale(0.96); }
          }
          @keyframes scanLine {
            0%   { top: -2px; opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          @keyframes demoGlitch {
            0%,95%,100% { clip-path: inset(0 0 0 0); transform: translate(0); }
            96% { clip-path: inset(20% 0 30% 0); transform: translate(-4px, 2px); }
            97% { clip-path: inset(60% 0 5% 0);  transform: translate(4px, -2px); }
            98% { clip-path: inset(40% 0 40% 0); transform: translate(0, 3px); }
          }
          @keyframes demoScanMove {
            0%   { transform: translateY(-100%); opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 0.6; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          @keyframes filmGrain {
            0%,100% { background-position: 0% 0%; }
            25%  { background-position: 100% 0%; }
            50%  { background-position: 100% 100%; }
            75%  { background-position: 0% 100%; }
          }
          @keyframes badgePop {
            0%   { transform: scale(0.6) translateY(10px); opacity: 0; }
            70%  { transform: scale(1.05) translateY(-2px); }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          @keyframes screenGlow {
            0%,100% { box-shadow: 0 0 60px rgba(0, 229, 196,0.18), 0 40px 100px rgba(0,0,0,0.7); }
            50%      { box-shadow: 0 0 100px rgba(0, 229, 196,0.28), 0 40px 120px rgba(0,0,0,0.8); }
          }
          @keyframes cardGlow {
            0%,100% { box-shadow: 0 0 80px rgba(0,229,196,0.1), 0 40px 80px rgba(0,0,0,0.4); border-color: rgba(0,229,196,0.2); }
            50%      { box-shadow: 0 0 120px rgba(0,229,196,0.22), 0 40px 80px rgba(0,0,0,0.4); border-color: rgba(0,229,196,0.45); }
          }
          @keyframes nameGlitch {
            0%,88%,100% { transform: translate(0); filter: drop-shadow(0 0 30px rgba(0,229,196,0.35)); }
            90% { transform: translate(-3px, 1px); filter: drop-shadow(0 0 40px rgba(0,229,196,0.8)) hue-rotate(30deg); }
            91% { transform: translate(3px, -1px); filter: drop-shadow(0 0 20px rgba(0,229,196,0.5)); }
            92% { transform: translate(0); filter: drop-shadow(0 0 30px rgba(0,229,196,0.35)); }
          }
          @keyframes terminalBlink {
            0%,49% { opacity: 1; }
            50%,100% { opacity: 0; }
          }
          @keyframes radarRing {
            0%   { transform: translate(-50%,-50%) scale(1); opacity: 0.7; }
            100% { transform: translate(-50%,-50%) scale(18); opacity: 0; }
          }
          @keyframes particleFloat {
            0%   { transform: translateY(0) scale(1); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 0.6; }
            100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
          }
          @keyframes counterUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-dot {
            0%, 100% { opacity: 0.35; transform: scale(0.9); }
            50%      { opacity: 1; transform: scale(1.2); }
          }
          @keyframes hudBar {
            0%   { height: 3px; }
            100% { height: 15px; }
          }
          @media (max-width: 900px) {
            .hero-grid  { grid-template-columns: 1fr !important; }
            .hero-right { display: none !important; }
            #hero       { padding: 0 1.5rem !important; }
            .demo-reel-grid { grid-template-columns: 1fr !important; }
            .demo-badges    { display: none !important; }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}

/* ─────────── DEMO REEL SECTION ─────────── */
function DemoReel() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef(null);

  const demos = [
    {
      src: "/Record_2026-05-28-14-45-33.mp4",
      label: "Zinkr — Dating Platform",
      sub: "Backend Architect · Real-Time Matchmaking",
      badge: "LIVE BUILD",
      color: "#00e5c4",
      metrics: ["Real-time WebSocket chat", "Google OAuth2 + JWT", "ASP.NET Core 7 backend"],
      zoom: "scale(1)",
    },
    {
      src: "/Record_2026-05-28-14-40-29.mp4",
      label: "BellezBuy — E-Commerce",
      sub: "Full-Stack · Razorpay Payments",
      badge: "SHIPPED",
      color: "#4dffd9",
      metrics: ["0% dropped payments", "< 3s invoice delivery", "React + Node.js + SQL Server"],
      zoom: "scale(1)",
    },
    {
      src: "/VID20260529105202.mp4",
      label: "BellezBuy — Admin Panel",
      sub: "Full-Stack · Store & Inventory Control",
      badge: "MANAGEMENT",
      color: "#00d4e8",
      metrics: ["Real-time stock dashboard", "Order fulfillment tracking", "Role-based authentication"],
      zoom: "scale(1.1)",
    },
  ];

  const current = demos[activeVideo];

  useEffect(() => {
    const playVideo = async () => {
      const vid = videoRef.current;
      if (!vid) return;
      try {
        vid.muted = true;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (err) {
        console.warn("Autoplay dynamic play bypass:", err);
      }
    };
    const timer = setTimeout(playVideo, 50);
    return () => clearTimeout(timer);
  }, [activeVideo]);

  return (
    <section
      ref={sectionRef}
      id="demo-reel"
      style={{
        padding: "8rem 3rem",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 229, 196,0.04) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.7rem",
            padding: "0.4rem 1.2rem", borderRadius: "100px",
            border: "1px solid rgba(0, 229, 196,0.25)",
            background: "rgba(0, 229, 196,0.06)",
            backdropFilter: "blur(12px)",
            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem",
            color: "var(--gold)", letterSpacing: "0.22em",
            textTransform: "uppercase", marginBottom: "1.5rem",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            &nbsp; Live Recordings
          </div>

          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1rem",
          }}>
            Real apps.{" "}
            <span style={{
              background: "linear-gradient(135deg, var(--purple-light) 0%, var(--gold) 60%, var(--pink) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(0, 229, 196,0.3))",
            }}>Real footage.</span>
          </h2>
          <p style={{
            color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.8,
            maxWidth: "480px", margin: "0 auto",
          }}>
            Unedited screen recordings of production systems — what you see is what gets shipped.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex", justifyContent: "center", gap: "0.6rem",
            marginBottom: "3rem", flexWrap: "wrap",
          }}
        >
          {demos.map((d, i) => (
            <button
              key={i}
              id={`demo-tab-${i}`}
              onClick={() => setActiveVideo(i)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "1.08rem", letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.55rem 1.4rem",
                border: `1px solid ${activeVideo === i ? d.color : "var(--border)"}`,
                background: activeVideo === i ? `${d.color}14` : "transparent",
                color: activeVideo === i ? d.color : "var(--dim)",
                cursor: "pointer", transition: "all 0.25s",
                borderRadius: "2px",
              }}
            >
              {activeVideo === i && <span style={{ marginRight: "0.5rem" }}>▶</span>}
              {d.label}
            </button>
          ))}
        </motion.div>

        {/* Main demo grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="demo-reel-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "3.5rem", alignItems: "center" }}
        >
          {/* Video mockup */}
          <div style={{ position: "relative" }}>

            {/* Screen outer frame */}
            <div style={{
              position: "relative",
              borderRadius: "16px",
              padding: "12px",
              background: "linear-gradient(135deg, #1c1c1c 0%, #111 60%, #1a1a1a 100%)",
              boxShadow: `0 0 0 1px ${current.color}33, 0 0 60px ${current.color}18, 0 40px 100px rgba(0,0,0,0.7)`,
              animation: "screenGlow 4s ease-in-out infinite",
              transition: "box-shadow 0.6s ease"
            }}>
              {/* Dynamic Ambient Ambilight Glow */}
              <div style={{
                position: "absolute",
                inset: "-20px",
                background: `radial-gradient(circle, ${current.color}25 0%, transparent 70%)`,
                filter: "blur(40px)",
                opacity: 0.85,
                zIndex: -1,
                transition: "background 0.6s ease",
                pointerEvents: "none"
              }} />
              {/* Browser chrome bar */}
              <div style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.6rem 1rem", marginBottom: "8px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "8px 8px 0 0",
                borderBottom: "1px solid rgba(0, 229, 196,0.1)",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <div style={{
                  flex: 1, marginLeft: "0.8rem",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "4px", padding: "0.25rem 0.7rem",
                  display: "flex", alignItems: "center", gap: "0.4rem",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>
                    portfolio.divyanshi.dev — Live Preview
                  </span>
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
                  color: current.color, letterSpacing: "0.15em",
                  padding: "0.15rem 0.5rem",
                  border: `1px solid ${current.color}55`,
                  background: `${current.color}10`,
                }}
                >{current.badge}</span>
              </div>

              {/* Video area */}
              <div style={{
                position: "relative", overflow: "hidden",
                borderRadius: "4px", aspectRatio: "16/9",
                background: "#000",
              }}>
                {/* Zoom wrapper — separate from glitch animation to prevent conflict */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden",
                }}>
                  <video
                    key={activeVideo}
                    ref={videoRef}
                    src={current.src}
                    autoPlay loop muted playsInline
                    preload="auto"
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      display: "block",
                      transform: current.zoom || "scale(1)",
                      transformOrigin: "center center",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>

                {/* CRT Scanlines overlay */}
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
                }} />

                {/* Vignette */}
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3,
                  background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
                }} />

                {/* Moving scan beam */}
                <div style={{
                  position: "absolute", left: 0, right: 0, height: "3px",
                  background: `linear-gradient(90deg, transparent 0%, ${current.color}88 50%, transparent 100%)`,
                  boxShadow: `0 0 16px ${current.color}66`,
                  animation: "demoScanMove 5s linear infinite",
                  zIndex: 4, pointerEvents: "none",
                }} />

                {/* Color grade tint */}
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
                  background: `linear-gradient(135deg, ${current.color}08 0%, transparent 60%)`,
                  mixBlendMode: "screen",
                }} />

                {/* Cyberpunk HUD center crosshair */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "45px", height: "45px",
                  border: `1px dashed ${current.color}25`,
                  borderRadius: "50%",
                  pointerEvents: "none", zIndex: 5,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <div style={{ width: "4px", height: "4px", background: current.color, borderRadius: "50%", opacity: 0.5 }} />
                </div>

                {/* Cyberpunk HUD corners */}
                <div style={{ position: "absolute", top: "10px", left: "10px", width: "15px", height: "15px", borderTop: `2px solid ${current.color}`, borderLeft: `2px solid ${current.color}`, pointerEvents: "none", zIndex: 5, opacity: 0.8 }} />
                <div style={{ position: "absolute", top: "10px", right: "10px", width: "15px", height: "15px", borderTop: `2px solid ${current.color}`, borderRight: `2px solid ${current.color}`, pointerEvents: "none", zIndex: 5, opacity: 0.8 }} />
                <div style={{ position: "absolute", bottom: "10px", left: "10px", width: "15px", height: "15px", borderBottom: `2px solid ${current.color}`, borderLeft: `2px solid ${current.color}`, pointerEvents: "none", zIndex: 5, opacity: 0.8 }} />
                <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "15px", height: "15px", borderBottom: `2px solid ${current.color}`, borderRight: `2px solid ${current.color}`, pointerEvents: "none", zIndex: 5, opacity: 0.8 }} />

                {/* AI HUD Telemetry Info */}
                <div style={{
                  position: "absolute", top: "0.8rem", right: "0.8rem",
                  zIndex: 5, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "0.48rem",
                  color: current.color, textShadow: `0 0 4px ${current.color}88`,
                  background: "rgba(0,0,0,0.65)", padding: "0.22rem 0.5rem", borderRadius: "2px",
                  border: `1px solid ${current.color}33`, backdropFilter: "blur(4px)"
                }}>
                  <div>AI_ANALYSIS: ONLINE</div>
                  <div>SYS_INTEGRITY: 100%</div>
                  <div>FPS_RAW: 60 // CACHE: OK</div>
                </div>

                {/* Bouncing Spectrometer Graph overlay */}
                <div style={{
                  position: "absolute", bottom: "0.8rem", right: "0.8rem",
                  zIndex: 5, display: "flex", gap: "3px", alignItems: "flex-end", height: "15px",
                  opacity: 0.85, pointerEvents: "none"
                }}>
                  {[12, 6, 14, 8, 10, 5, 11].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: "2.5px",
                        background: current.color,
                        boxShadow: `0 0 6px ${current.color}aa`,
                        animation: `hudBar ${0.55 + i * 0.12}s ease-in-out infinite alternate`,
                        borderRadius: "1px",
                      }}
                    />
                  ))}
                </div>

                {/* Corner UI details */}
                <div style={{
                  position: "absolute", top: "0.8rem", left: "0.8rem",
                  zIndex: 5, display: "flex", alignItems: "center", gap: "0.4rem",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%", background: "#ff4444",
                    boxShadow: "0 0 6px #ff4444", display: "inline-block",
                    animation: "pulse-dot 1.2s infinite",
                  }} />
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
                    color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em",
                    background: "rgba(0,0,0,0.5)", padding: "0.15rem 0.4rem",
                    backdropFilter: "blur(4px)",
                  }}>● REC</span>
                </div>

                {/* Bottom info bar */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5,
                  padding: "1.5rem 1rem 0.8rem",
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 800,
                      fontSize: "1.08rem", color: "#fff", letterSpacing: "-0.01em",
                    }}>{current.label}</div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
                      color: current.color, letterSpacing: "0.1em", marginTop: "0.15rem",
                    }}>{current.sub}</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.3rem" }}>
                    {["🎬", "💻", "🚀"].map((e, i) => (
                      <span key={i} style={{
                        fontSize: "0.82rem",
                        background: "rgba(255,255,255,0.08)",
                        padding: "0.2rem 0.35rem",
                        backdropFilter: "blur(4px)",
                        borderRadius: "4px",
                      }}>{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge: bottom-left */}
            <motion.div
              key={activeVideo}
              initial={{ opacity: 0, scale: 0.7, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
              style={{
                position: "absolute", bottom: "-3.5rem", left: "1.5rem",
                background: "rgba(18,18,18,0.92)",
                border: `1px solid ${current.color}44`,
                backdropFilter: "blur(20px)",
                borderRadius: "12px", padding: "0.8rem 1.2rem",
                display: "flex", alignItems: "center", gap: "0.7rem",
                boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${current.color}22`,
              }}
            >
              <span style={{ fontSize: "1.4rem" }}>⚡</span>
              <div>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: "1.08rem", color: "var(--cream)",
                }}>Production Ready</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
                  color: current.color, marginTop: "0.1rem",
                }}>Zero placeholder code</div>
              </div>
            </motion.div>

            {/* Floating badge: top-right */}
            <motion.div
              key={`b2-${activeVideo}`}
              initial={{ opacity: 0, scale: 0.7, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: "backOut" }}
              style={{
                position: "absolute", top: "-1.2rem", right: "1.5rem",
                background: "rgba(18,18,18,0.92)",
                border: `1px solid ${current.color}44`,
                backdropFilter: "blur(20px)",
                borderRadius: "10px", padding: "0.55rem 1rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
                boxShadow: `0 8px 32px rgba(0,0,0,0.5)`,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", boxShadow: "0 0 8px #28c840", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem",
                color: "var(--muted)", letterSpacing: "0.1em",
              }}>LIVE DEMO</span>
            </motion.div>
          </div>

          {/* Right info panel */}
          <motion.div
            key={`info-${activeVideo}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="demo-badges"
          >
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
              letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "0.3rem 0.9rem",
              background: `linear-gradient(135deg, ${current.color}, ${current.color}aa)`,
              color: "#1a1a1a", fontWeight: 700,
              marginBottom: "1.2rem",
            }}>
              {current.badge}
            </div>

            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "1.6rem", lineHeight: 1.1,
              letterSpacing: "-0.02em", marginBottom: "0.5rem",
              color: "var(--cream)",
            }}>{current.label}</h3>

            <p style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "1.08rem",
              color: current.color, marginBottom: "1.6rem", letterSpacing: "0.08em",
            }}>// {current.sub}</p>

            {/* Metric pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
              {current.metrics.map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.8rem",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${current.color}22`,
                    borderLeft: `3px solid ${current.color}`,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: current.color, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--muted)" }}>{m}</span>
                </motion.div>
              ))}
            </div>

            {/* Video counter */}
            <div style={{
              display: "flex", gap: "0.6rem", alignItems: "center",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border)",
            }}>
              {demos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  id={`demo-dot-${i}`}
                  style={{
                    width: activeVideo === i ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: activeVideo === i ? current.color : "var(--border)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
                color: "var(--dim)", marginLeft: "0.5rem",
              }}>
                {activeVideo + 1} / {demos.length} recordings
              </span>
            </div>

            <Link
              to="/work"
              className="btn-primary"
              style={{ display: "inline-block", marginTop: "1.8rem" }}
            >
              <span>See All Projects →</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
