import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const skills = [
  { name: "ASP.NET Core / C#", pct: 93, color: "var(--purple)", tags: [".NET 7+", "Web API", "EF Core", "Multi-Tenancy", "RBAC"] },
  { name: "Angular 19", pct: 88, color: "var(--gold)", tags: ["TypeScript", "RxJS", "Lazy Loading", "CMS", "NgRx"] },
  { name: "React / Node.js", pct: 82, color: "var(--purple-light)", tags: ["React", "Node.js", "Express", "REST", "Hooks"] },
  { name: "FastAPI / Python", pct: 80, color: "var(--pink)", tags: ["FastAPI", "Scikit-Learn", "Celery", "ML Pipelines"] },
  { name: "Auth & Security", pct: 90, color: "var(--pink)", tags: ["JWT", "OAuth2", "Google Auth", "RBAC", "Audit Logs"] },
  { name: "Azure & DevOps", pct: 78, color: "var(--gold)", tags: ["Azure DevOps", "CI/CD", "Docker", "AZ-900", "AI-900"] },
  { name: "SQL Server / DB", pct: 85, color: "var(--purple)", tags: ["SQL Server", "EF Core", "Indexes", "Stored Procs"] },
];

const experience = [
  {
    date: "Jul 2024 – Present",
    location: "Noida, India",
    role: "Software Engineer — .NET",
    company: "Sanskriti IT Solutions",
    current: true,
    color: "var(--purple)",
    achievements: [
      { metric: "40%", desc: "reduction in manual licensing effort via multi-tenant SaaS system" },
      { metric: "35%", desc: "faster UI load time with Angular 19 lazy loading + API caching" },
      { metric: "Built", desc: "Zinkr backend — Google OAuth2, JWT, real-time matching API" },
      { metric: "Shipped", desc: "Azure DevOps CI/CD pipelines cutting release cycle time significantly" },
    ],
  },
  {
    date: "Feb 2024 – Jun 2024",
    location: "Noida, India",
    role: "Android Developer Intern",
    company: "Sanskriti IT Solutions",
    current: false,
    color: "var(--gold)",
    achievements: [
      { metric: "Built", desc: "secure login/signup/OTP auth flows with REST API integration" },
      { metric: "Improved", desc: "onboarding UX with modern Material Design patterns" },
    ],
  },
];

const certs = [
  { code: "AZ-900", name: "Azure Fundamentals", org: "Microsoft", color: "var(--pink)", icon: "☁️" },
  { code: "AI-900", name: "Azure AI Fundamentals", org: "Microsoft", color: "var(--purple)", icon: "🤖" },
];

const TABS = ["Skills", "Experience", "Education"];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Skills");

  return (
    <PageTransition>
      <div className="page-wrapper">
        <div style={{ padding: "0 5vw" }} className="about-wrapper">
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "5rem", alignItems: "start", paddingTop: "2rem" }} className="about-layout">

            {/* ── LEFT STICKY SIDEBAR ── */}
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" animate="visible"
              style={{ position: "sticky", top: "100px" }}
              className="about-sidebar"
            >
              {/* Avatar Card */}
              <div style={{ position: "relative", marginBottom: "2rem" }}>
                <div style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  background: "linear-gradient(135deg, #00e5c4 0%, #00b89e 50%, #c45b30 100%)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 20px 50px rgba(0, 229, 196, 0.25), inset 0 1px 0 rgba(255,255,255,0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {/* Portrait Image */}
                  <img 
                    src="/avatar.jpg" 
                    alt="Divyanshi Gupta" 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      objectPosition: "center 15%", 
                      position: "absolute", 
                      inset: 0, 
                      zIndex: 1 
                    }} 
                  />

                  {/* Decorative premium accents overlay */}
                  <div style={{ position: "absolute", width: "160%", height: "160%", borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.2)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 2 }} />
                  <div style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(circle at top left, rgba(255,255,255,0.2) 0%, transparent 60%)", pointerEvents: "none", zIndex: 2 }} />
                </div>
                {/* Available badge */}
                <div style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)", background: "rgba(116,212,87,0.12)", border: "1px solid rgba(116,212,87,0.4)", borderRadius: "20px", backdropFilter: "blur(8px)", padding: "0.35rem 1.1rem", display: "flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap", zIndex: 3 }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#74d457", animation: "pulse-dot 2s infinite", display: "inline-block" }} />
                  <span style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace", fontSize: "1rem", color: "#74d457", letterSpacing: "0.15em", textTransform: "uppercase" }}>Open to Work</span>
                </div>
              </div>

              {/* Name & title */}
              <div style={{ marginTop: "1.5rem", marginBottom: "1.8rem" }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.6rem", lineHeight: 1.1 }}>Divyanshi Gupta</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--purple-light)", marginTop: "0.3rem" }}>// Full Stack Engineer</div>
              </div>

              {/* Quick info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                {[
                  ["📍", "Noida, India"],
                  ["🎓", "B.Tech CSE — MIET Meerut"],
                  ["💼", "2+ Years Experience"],
                  ["✉️", "hello@divyanshig.dev"],
                ].map(([icon, text]) => (
                  <div key={text} style={{ display: "flex", gap: "0.8rem", alignItems: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Certs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                {certs.map(c => (
                  <div key={c.code} style={{ display: "flex", gap: "0.8rem", alignItems: "center", padding: "0.75rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "0.82rem" }}>{c.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: c.color }}>{c.code}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)" }}>{c.name}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to="/contact" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
                <span>Hire Me →</span>
              </Link>
            </motion.div>

            {/* ── RIGHT MAIN CONTENT ── */}
            <div>
              {/* Header */}
              <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: "3rem" }}>
                <div className="section-label">About</div>
                <h1 className="section-title">
                  Shipping systems that <em>scale</em>
                </h1>
                <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.82rem", maxWidth: "560px" }}>
                  I'm a Full-Stack Engineer specializing in .NET backends, Angular frontends, and AI-powered APIs — building systems that go beyond CRUD and into production at scale. Microsoft Certified in Azure (AZ-900) and Azure AI (AI-900).
                </p>
              </motion.div>

              {/* Tab switcher */}
              <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
                <div style={{ display: "flex", borderBottom: "1px solid var(--border)", marginBottom: "2.5rem", gap: "2rem" }}>
                  {TABS.map(t => (
                    <button
                      key={t}
                      onClick={() => setActiveTab(t)}
                      style={{ padding: "0.8rem 0", background: "none", border: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: activeTab === t ? "var(--purple-light)" : "var(--dim)", cursor: "pointer", position: "relative", transition: "color 0.2s" }}
                    >
                      {t}
                      {activeTab === t && <motion.div layoutId="about-tab" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--purple-light), var(--gold))" }} />}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">

                  {/* ── SKILLS TAB ── */}
                  {activeTab === "Skills" && (
                    <motion.div key="skills" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
                        {skills.map((s, i) => (
                          <motion.div
                            key={s.name}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.82rem" }}>{s.name}</span>
                              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: s.color }}>{s.pct}%</span>
                            </div>
                            {/* Bar */}
                            <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", marginBottom: "0.7rem", overflow: "hidden" }}>
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${s.pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                                style={{ height: "100%", background: `linear-gradient(90deg, ${s.color}, ${s.color}99)`, borderRadius: "2px" }}
                              />
                            </div>
                            {/* Tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                              {s.tags.map(t => (
                                <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.18rem 0.55rem", border: `1px solid ${s.color}44`, color: s.color, background: `${s.color}0d` }}>{t}</span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* ── EXPERIENCE TAB ── */}
                  {activeTab === "Experience" && (
                    <motion.div key="exp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                      <div style={{ position: "relative", paddingLeft: "2rem" }}>
                        {/* Timeline line */}
                        <div style={{ position: "absolute", left: "7px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, var(--purple-light), transparent)" }} />

                        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                          {experience.map((exp, i) => (
                            <motion.div
                              key={i}
                              custom={i}
                              variants={fadeUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              style={{ position: "relative" }}
                            >
                              {/* Dot */}
                              <div style={{ position: "absolute", left: "-2rem", top: "0.35rem", width: "14px", height: "14px", borderRadius: "50%", background: exp.current ? `linear-gradient(135deg, ${exp.color}, var(--gold))` : "var(--bg3)", border: exp.current ? "none" : `2px solid ${exp.color}`, boxShadow: exp.current ? `0 0 12px ${exp.color}` : "none" }} />

                              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: exp.current ? exp.color : "var(--dim)", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>
                                {exp.date} · {exp.location}
                              </div>
                              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.08rem", marginBottom: "0.15rem" }}>{exp.role}</div>
                              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--muted)", marginBottom: "1.2rem" }}>@ {exp.company}</div>

                              {/* Achievements as metric cards */}
                              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem" }}>
                                {exp.achievements.map((a, j) => (
                                  <div key={j} style={{ padding: "0.9rem 1rem", background: "var(--surface)", border: `1px solid ${exp.color}33`, display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", color: exp.color, flexShrink: 0, lineHeight: 1 }}>{a.metric}</span>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "var(--dim)", lineHeight: 1.5 }}>{a.desc}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ── EDUCATION TAB ── */}
                  {activeTab === "Education" && (
                    <motion.div key="edu" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {/* Degree */}
                        <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                          style={{ padding: "2rem", background: "var(--surface)", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
                        >
                          <div style={{ position: "absolute", top: "1rem", right: "1.5rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "4rem", color: "var(--border)", opacity: 0.3, lineHeight: 1 }}>B.Tech</div>
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--gold)", letterSpacing: "0.15em", marginBottom: "0.4rem" }}>2020 – 2024</div>
                          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.82rem", marginBottom: "0.3rem" }}>B.Tech Computer Science & Engineering</div>
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--purple-light)", marginBottom: "1rem" }}>MIET — Modern Institute of Engineering & Technology, Meerut</div>
                          <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.855 }}>
                            Graduated with a strong foundation in data structures, algorithms, operating systems, and database management systems. Completed internships in parallel to degree, shipping real production code.
                          </p>
                        </motion.div>

                        {/* Certifications */}
                        <div>
                          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Microsoft Certifications</div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            {[
                              { code: "AZ-900", name: "Azure Fundamentals", desc: "Core cloud and Azure service concepts", color: "var(--pink)", icon: "☁️" },
                              { code: "AI-900", name: "Azure AI Fundamentals", desc: "Machine learning and AI services on Azure", color: "var(--purple)", icon: "🤖" },
                            ].map(c => (
                              <motion.div key={c.code} custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                style={{ padding: "1.5rem", background: "var(--surface)", border: `1px solid ${c.color}44`, position: "relative", overflow: "hidden" }}
                              >
                                <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>{c.icon}</div>
                                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.08rem", color: c.color }}>{c.code}</div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.08rem", color: "var(--cream)", marginBottom: "0.4rem" }}>{c.name}</div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "var(--dim)", lineHeight: 1.6 }}>{c.desc}</div>
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: c.color, marginTop: "0.8rem", letterSpacing: "0.1em" }}>✓ VERIFIED · MICROSOFT</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>

        <style>{`
          .about-layout { grid-template-columns: 300px 1fr; }
          .about-wrapper { padding: 0 5vw; }
          @media (max-width: 900px) {
            .about-layout { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .about-sidebar { position: static !important; }
            .about-wrapper { padding: 0 1.5rem; }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
