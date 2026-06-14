import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { blogs } from "./blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

function CodeBlock({ lang, text }) {
  return (
    <div style={{ margin: "2rem 0", borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(0, 229, 196,0.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.55rem 1.2rem", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(0, 229, 196,0.1)" }}>
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", marginLeft: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em" }}>{lang}</span>
      </div>
      <pre style={{
        margin: 0, padding: "1.8rem 2.2rem",
        background: "#0a0a0a",
        overflowX: "auto",
        fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
        fontSize: "1.08rem",
        lineHeight: 1.85,
        color: "#e8d5c0",
        whiteSpace: "pre",
      }}>
        <code>{text.trim()}</code>
      </pre>
    </div>
  );
}

function MetricsGrid({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.2rem", margin: "2.5rem 0" }} className="metrics-grid">
      {items.map((m, i) => (
        <div key={i} style={{
          padding: "1.8rem 2rem",
          background: "rgba(0, 229, 196,0.04)",
          border: "1px solid rgba(0, 229, 196,0.2)",
          display: "flex", flexDirection: "column", gap: "0.5rem",
        }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{m.label}</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "2rem", background: "linear-gradient(135deg, var(--purple-light), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>{m.value}</div>
        </div>
      ))}
    </div>
  );
}

function Callout({ text }) {
  return (
    <div style={{ margin: "2rem 0", padding: "1.6rem 2rem", borderLeft: "3px solid var(--gold)", background: "rgba(0, 229, 196,0.06)" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--gold)", display: "block", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.14em" }}>// Note</span>
      <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.85, margin: 0 }}>{text}</p>
    </div>
  );
}

function renderBlock(block, i) {
  switch (block.type) {
    case "intro":
      return (
        <motion.p key={i} custom={i} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: "0.82rem", lineHeight: 2, color: "var(--cream)", marginBottom: "2.5rem", fontWeight: 400, borderLeft: "3px solid var(--gold)", paddingLeft: "1.8rem" }}>
          {block.text}
        </motion.p>
      );
    case "heading":
      return (
        <motion.h2 key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "var(--cream)", margin: "3.5rem 0 1.4rem", display: "flex", alignItems: "center", gap: "0.8rem", paddingBottom: "0.8rem", borderBottom: "1px solid var(--border)" }}>
          <span style={{ color: "var(--gold)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", flexShrink: 0 }}>//</span>
          {block.text}
        </motion.h2>
      );
    case "para":
      return (
        <motion.p key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ fontSize: "0.82rem", lineHeight: 2, color: "var(--muted)", marginBottom: "1.6rem" }}>
          {block.text}
        </motion.p>
      );
    case "code":
      return <CodeBlock key={i} lang={block.lang} text={block.text} />;
    case "callout":
      return <Callout key={i} text={block.text} />;
    case "metrics":
      return <MetricsGrid key={i} items={block.items} />;
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find(b => b.id === id);
  const otherPosts = blogs.filter(b => b.id !== id).slice(0, 3);

  if (!post) {
    return (
      <PageTransition>
        <div className="page-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.08rem", color: "var(--dim)", marginBottom: "1rem" }}>404 — Article not found</div>
            <Link to="/blog" className="btn-primary"><span>Back to Blog →</span></Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="page-wrapper">

        {/* ── Full-width hero ── */}
        <div style={{ padding: "4rem 5vw 3.5rem", borderBottom: "1px solid var(--border)", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
          {/* Ambient glow */}
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 60% 80% at 20% 50%, ${post.tagColor}09 0%, transparent 70%)`, pointerEvents: "none" }} />

          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: "1.8rem", position: "relative" }}>
            <button onClick={() => navigate("/blog")}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "none", border: "none", cursor: "pointer", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.08rem", color: "var(--dim)", padding: 0, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--dim)"}
            >← Back to Blog</button>
          </motion.div>

          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" style={{ position: "relative" }}>
            <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.64rem", padding: "0.28rem 0.9rem", background: `${post.tagColor}18`, border: `1px solid ${post.tagColor}44`, color: post.tagColor, textTransform: "uppercase", letterSpacing: "0.14em" }}>{post.tag}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.64rem", color: "var(--dim)" }}>{post.date} · {post.readTime}</span>
            </div>

            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 4.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--cream)", marginBottom: "1.8rem", maxWidth: "85vw" }}>
              {post.title}
            </h1>

            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "var(--muted)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: "70vw" }}>
              {post.excerpt}
            </p>

            {/* Author + topics row */}
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", flexWrap: "wrap", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg, var(--purple), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", color: "white", flexShrink: 0 }}>D</div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--cream)" }}>Divyanshi Gupta</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)" }}>Full-Stack Engineer · .NET · Azure · AI/ML</div>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {post.topics.map(t => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", padding: "0.24rem 0.65rem", border: `1px solid ${post.tagColor}33`, color: post.tagColor, background: `${post.tagColor}0d` }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Article content — full width ── */}
        <div style={{ padding: "4rem 5vw 5rem" }}>
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        {/* ── Hire CTA — full width ── */}
        <div style={{ padding: "0 5vw 5rem" }}>
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ padding: "4rem 5vw", background: "linear-gradient(135deg, rgba(0, 229, 196,0.07), rgba(0, 212, 232,0.04))", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}
          >
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", marginBottom: "0.7rem", color: "var(--cream)" }}>
                Want to build something like this?
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.8, margin: 0 }}>
                Available for freelance projects — .NET, React, Azure, AI backends.
              </p>
            </div>
            <Link to="/contact" className="btn-primary" style={{ flexShrink: 0 }}><span>Hire Me →</span></Link>
          </motion.div>
        </div>

        {/* ── More articles — full width ── */}
        {otherPosts.length > 0 && (
          <div style={{ borderTop: "1px solid var(--border)", padding: "4rem 5vw 5rem" }}>
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: "2.5rem" }}>
              <div className="section-label">Keep Reading</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>More <em>Articles</em></h2>
            </motion.div>
            <div className="more-posts-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
              {otherPosts.map((b, idx) => (
                <Link key={b.id} to={`/blog/${b.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <motion.div
                    custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    style={{ padding: "2rem", background: "var(--surface)", border: "1px solid var(--border)", transition: "all 0.3s", cursor: "pointer", height: "100%" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${b.tagColor}55`; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${b.tagColor}12`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.2rem 0.6rem", background: `${b.tagColor}14`, border: `1px solid ${b.tagColor}33`, color: b.tagColor, textTransform: "uppercase", letterSpacing: "0.1em", display: "inline-block", marginBottom: "1rem" }}>{b.tag}</span>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.08rem", lineHeight: 1.4, color: "var(--cream)", marginBottom: "0.6rem" }}>{b.title}</div>
                    <div style={{ color: "var(--muted)", fontSize: "0.78rem", lineHeight: 1.7, marginBottom: "1rem" }}>{b.excerpt}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", display: "flex", justifyContent: "space-between" }}>
                      <span>{b.date}</span>
                      <span style={{ color: b.tagColor }}>{b.readTime}</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <style>{`
          .metrics-grid { grid-template-columns: repeat(4, 1fr); }
          .more-posts-grid { grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 900px) {
            .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .more-posts-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            .metrics-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
