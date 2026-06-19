import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Building Scalable AI & .NET Systems";
  const typingSpeed = 100;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "5rem 3rem 0",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1rem",
              color: "var(--teal)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              marginBottom: "1.5rem",
            }}
          >
            <div className="avail-dot" />
            Open to Freelance &amp; Remote Opportunities
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "1rem",
            }}
          >
            <span style={{ display: "block" }}>Hello, I'm</span>
            <span
              style={{
                background: "linear-gradient(135deg, var(--blue) 0%, var(--teal) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Divyanshi Gupta
            </span>
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1rem",
              color: "var(--orange)",
              marginBottom: "1.8rem",
              minHeight: "1.8rem",
            }}
          >
            <span>{text}</span>
            <span
              style={{
                animation: "blink 0.8s infinite",
              }}
            >
              |
            </span>
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.82rem",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            Full-Stack Engineer with 2+ years shipping production systems — SaaS
            platforms, dating apps, e-commerce, and AI-powered backends.{" "}
            <strong style={{ color: "var(--cream)" }}>
              Microsoft Certified (AZ-900 · AI-900).
            </strong>{" "}
            I don't just write code — I architect systems that scale.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="hero-orbits"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <div
              className="orbit"
              style={{
                position: "absolute",
                borderRadius: "50%",
                border: "1px dashed var(--border)",
                top: "50%",
                left: "50%",
                width: "420px",
                height: "420px",
                margin: "-210px 0 0 -210px",
                animation: "spin 20s linear infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  top: "-4px",
                  left: "50%",
                  marginLeft: "-4px",
                  background: "var(--blue)",
                  boxShadow: "0 0 10px var(--blue)",
                }}
              />
            </div>
            <div
              className="orbit"
              style={{
                position: "absolute",
                borderRadius: "50%",
                border: "1px dashed var(--border)",
                top: "50%",
                left: "50%",
                width: "320px",
                height: "320px",
                margin: "-160px 0 0 -160px",
                animation: "spin 15s linear infinite reverse",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  top: "-4px",
                  left: "50%",
                  marginLeft: "-4px",
                  background: "var(--orange)",
                  boxShadow: "0 0 10px var(--orange)",
                }}
              />
            </div>
          </div>

          <div
            style={{
              width: "320px",
              height: "380px",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(38,139,210,0.12)",
              animation: "float 6s ease-in-out infinite",
              borderRadius: "16px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                padding: "2rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--blue), var(--teal))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "var(--bg)",
                    boxShadow: "var(--glow-blue)",
                  }}
                >
                  D
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                    }}
                  >
                    Divyanshi
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      color: "var(--teal)",
                      marginTop: "0.3rem",
                    }}
                  >
                    // Full Stack Developer
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  {[".NET 7+", "Angular 19", "FastAPI", "React", "Azure ☁️"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.82rem",
                        padding: "0.3rem 0.7rem",
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                        letterSpacing: "0.08em",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1.2rem",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        color: "var(--blue)",
                      }}
                    >
                      5+
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.82rem",
                        color: "var(--dim)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Projects
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        color: "var(--blue)",
                      }}
                    >
                      2+
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.82rem",
                        color: "var(--dim)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Yrs Exp
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                        color: "var(--blue)",
                      }}
                    >
                      2×
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.82rem",
                        color: "var(--dim)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      MS Cert
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
