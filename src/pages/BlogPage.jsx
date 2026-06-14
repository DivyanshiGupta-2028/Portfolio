import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { blogs } from "./blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

export default function BlogPage() {
  const featured = blogs.find(b => b.featured);
  const rest = blogs.filter(b => !b.featured);

  return (
    <PageTransition>
      <div className="page-wrapper">
        <section>
          <div className="section-inner">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: "3.5rem" }}>
              <div className="section-label">Technical Writing</div>
              <h1 className="section-title">Blog & <em>Insights</em></h1>
              <p style={{ color: "var(--muted)", maxWidth: "560px", lineHeight: 1.8, fontSize: "0.82rem" }}>
                Deep dives into backend architecture, cloud engineering, AI/ML pipelines, and the real decisions behind production systems.
              </p>
            </motion.div>

            {/* Featured */}
            {featured && (
              <Link to={`/blog/${featured.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <motion.div
                  custom={1} variants={fadeUp} initial="hidden" animate="visible"
                  className="blog-featured"
                  style={{
                    display: "grid", gridTemplateColumns: "1fr 1.4fr",
                    marginBottom: "2rem", border: "1px solid var(--border)",
                    background: "var(--surface)", overflow: "hidden", cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0, 229, 196,0.5)"; e.currentTarget.style.boxShadow = "0 16px 50px rgba(0, 229, 196,0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{
                    background: "linear-gradient(135deg, #1a1218, #1e1510)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    minHeight: "300px", position: "relative", overflow: "hidden",
                    borderRight: "1px solid var(--border)",
                  }}>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 40% 50%, rgba(0, 229, 196,0.14) 0%, transparent 65%)" }} />
                    <div style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "2rem" }}>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "6rem", background: "linear-gradient(135deg, var(--purple-light), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1, marginBottom: "1rem" }}>01</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--gold)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Featured Article</div>
                    </div>
                  </div>
                  <div style={{ padding: "2.8rem" }}>
                    <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1.2rem", flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.22rem 0.7rem", background: `${featured.tagColor}18`, border: `1px solid ${featured.tagColor}44`, color: featured.tagColor, textTransform: "uppercase", letterSpacing: "0.12em" }}>★ {featured.tag}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>{featured.date} · {featured.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.6rem", lineHeight: 1.25, marginBottom: "1rem", color: "var(--cream)" }}>{featured.title}</h2>
                    <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>{featured.excerpt}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.8rem" }}>
                      {featured.topics.map(t => (
                        <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.2rem 0.55rem", border: "1px solid var(--border)", color: "var(--dim)" }}>{t}</span>
                      ))}
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.74rem", color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(0, 229, 196,0.3)", paddingBottom: "2px" }}>
                      Read Full Article →
                    </span>
                  </div>
                </motion.div>
              </Link>
            )}

            {/* Grid */}
            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.2rem" }}>
              {rest.map((b, idx) => (
                <Link key={b.id} to={`/blog/${b.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <motion.div
                    custom={idx + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    style={{
                      padding: "1.8rem", background: "var(--surface)",
                      border: "1px solid var(--border)", cursor: "pointer",
                      transition: "all 0.3s", position: "relative", overflow: "hidden",
                      height: "100%", display: "flex", flexDirection: "column",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${b.tagColor}66`; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${b.tagColor}14`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ position: "absolute", top: "0.8rem", right: "1rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "3.5rem", color: "rgba(255,255,255,0.03)", lineHeight: 1, pointerEvents: "none" }}>0{idx + 2}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.2rem 0.6rem", background: `${b.tagColor}14`, border: `1px solid ${b.tagColor}33`, color: b.tagColor, textTransform: "uppercase", letterSpacing: "0.1em" }}>{b.tag}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>{b.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.82rem", lineHeight: 1.45, marginBottom: "0.8rem", color: "var(--cream)", flexGrow: 1 }}>{b.title}</h3>
                    <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.75, marginBottom: "1.2rem" }}>{b.excerpt}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
                      {b.topics.slice(0, 3).map(t => (
                        <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.18rem 0.5rem", border: "1px solid var(--border)", color: "var(--dim)" }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid var(--border)", marginTop: "auto" }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>{b.date}</span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: b.tagColor }}>Read Article →</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border)" }}>
          <div className="section-inner">
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ textAlign: "center", padding: "3rem 2rem", background: "linear-gradient(135deg, rgba(0, 229, 196,0.06), rgba(0, 212, 232,0.04))", border: "1px solid var(--border)" }}
            >
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "0.8rem" }}>
                Want to discuss a <span style={{ background: "linear-gradient(135deg, var(--purple-light), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>technical challenge?</span>
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.8 }}>Let's talk architecture, code, or your next big project.</p>
              <Link to="/contact" className="btn-primary"><span>Start a Conversation →</span></Link>
            </motion.div>
          </div>
        </section>

        <style>{`
          .blog-grid { grid-template-columns: repeat(3, 1fr); }
          .blog-featured { grid-template-columns: 1fr 1.4fr; }
          @media (max-width: 900px) {
            .blog-grid { grid-template-columns: 1fr !important; }
            .blog-featured { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 901px) and (max-width: 1100px) {
            .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
