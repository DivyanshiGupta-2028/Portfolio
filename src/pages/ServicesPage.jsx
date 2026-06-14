import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const services = [
  {
    icon: "🔷",
    name: ".NET Backend Development",
    desc: "Enterprise-grade RESTful APIs and secure backends architected with ASP.NET Core and C#. I specialize in clean architecture, repository patterns, Entity Framework Core relational modeling, and SQL Server tuning. Built with multi-tenancy support, custom middleware, security headers, and high-performance throughput designed to scale seamlessly under load.",
    price: "Starting $800 / project",
    accentColor: "var(--purple-light)",
  },
  {
    icon: "🅰️",
    name: "Angular & React Frontends",
    desc: "Pixel-perfect, high-performance web frontends developed in Angular 19 or React. Focused on excellent UX and speed, utilizing lazy loading, tree-shaking, RxJS state management, and reusable modular components. Integrated with strict TypeScript guidelines to ensure a robust, maintainable codebase that scores 95+ on Lighthouse audits.",
    price: "Starting $600 / project",
    accentColor: "var(--gold)",
  },
  {
    icon: "🤖",
    name: "AI/ML Backend Integration",
    desc: "FastAPI-powered intelligent endpoints hosting custom machine learning inference pipelines and predictive analytics. I build personalized recommendation systems, trend analysis models, sentiment classifiers, and connect with cognitive APIs including Azure OpenAI and cognitive search to infuse platforms with modern artificial intelligence.",
    price: "Starting $1,000 / project",
    accentColor: "var(--purple-light)",
  },
  {
    icon: "☁️",
    name: "Cloud Architecture & DevOps",
    desc: "Scalable cloud design and deployment strategies targeting Microsoft Azure. Designing secure virtual networks, Application Gateways, containerized deployments with Docker, serverless Azure Functions, and vault secrets storage. Standardizing release cycles with fully automated Azure DevOps CI/CD pipelines for zero-downtime shipping.",
    price: "Starting $750 / architecture",
    accentColor: "var(--gold)",
  },
  {
    icon: "🗄️",
    name: "Database Architecture & Optimization",
    desc: "Designing and normalizing highly transactional relational schemas (SQL Server, PostgreSQL) and high-speed NoSQL stores (MongoDB, Redis). I specialize in profiling query execution plans, constructing optimized indexes, tuning Entity Framework Core LINQ statements, and designing database migration paths without data loss.",
    price: "Starting $500 / project",
    accentColor: "var(--purple-light)",
  },
  {
    icon: "🔐",
    name: "API Security & Microservices",
    desc: "Securing distributed architectures with robust authentication and authorization schemes including OAuth2, OpenID Connect, and JWT tokens. Implementing microservice gateways, rate limiting, distributed caching (Redis), custom Role-Based Access Control (RBAC), and logging mechanisms to protect against OWASP Top 10 vulnerabilities.",
    price: "Starting $700 / integration",
    accentColor: "var(--gold)",
  },
  {
    icon: "🚀",
    name: "Full-Stack SaaS MVP Engineering",
    desc: "End-to-end development of Minimum Viable Products (MVPs) designed for startups. Architecting scalable multi-tenant databases, multi-provider OAuth, payment processor integrations (Stripe, Razorpay), custom notifications, transactional emails, and an interactive frontend ready to demonstrate value to stakeholders and investors.",
    price: "Starting $1,500 / MVP",
    accentColor: "var(--purple-light)",
  },
];

const testimonials = [
  {
    quote: "Divyanshi delivered our e-commerce platform 3 days ahead of schedule. The code quality was outstanding — our tech lead was genuinely impressed.",
    avatar: "JM",
    name: "James Mitchell",
    role: "CEO, ShopFlow Inc. — USA",
  },
  {
    quote: "Our SaaS dashboard went from wireframes to live product in under a month. Divyanshi communicated clearly throughout and handled feedback professionally.",
    avatar: "SL",
    name: "Sophie Laurent",
    role: "Product Manager — France",
  },
  {
    quote: "Best freelancer I've hired on Upwork. Divyanshi understood our complex .NET requirements immediately and delivered clean, well-documented code.",
    avatar: "AK",
    name: "Arjun Kapoor",
    role: "CTO, TechVenture — India",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="page-wrapper">
        {/* Header */}
        <section>
          <div className="section-inner">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <div className="section-label">What I Offer</div>
              <h1 className="section-title">My <em>Services</em></h1>
              <p style={{ color: "var(--muted)", maxWidth: "600px", lineHeight: 1.85, marginBottom: "3.5rem" }}>
                I build end-to-end production systems with solid architectures, optimized performance, and premium styling. Explore my core capabilities.
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="services-grid">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    padding: "2.5rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                  }}
                  onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "rgba(155,93,229,0.4)";
                    e.currentTarget.style.boxShadow = "var(--glow-purple)";
                    e.currentTarget.querySelector(".svc-line").style.transform = "scaleX(1)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.querySelector(".svc-line").style.transform = "scaleX(0)";
                  }}
                >
                  <div className="svc-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, var(--purple), var(--gold))`, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />

                  {/* Number */}
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "4.5rem", color: "rgba(155,93,229,0.06)", position: "absolute", top: "0.5rem", right: "1.5rem", lineHeight: 1 }}>
                    0{i + 1}
                  </div>

                  <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1rem", marginBottom: "0.8rem" }}>{s.name}</div>
                  <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.85, marginBottom: "1.8rem" }}>{s.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: s.accentColor, border: `1px solid ${s.accentColor}44`, padding: "0.35rem 0.9rem" }}>
                      {s.price}
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>Enquire →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ background: "rgba(155,93,229,0.03)", borderTop: "1px solid var(--border)" }}>
          <div className="section-inner">
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="section-label">Social Proof</div>
              <h2 className="section-title">Client <em>Reviews</em></h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "3rem" }} className="testi-grid">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ padding: "2rem", background: "var(--surface2)", border: "1px solid var(--border)", transition: "all 0.35s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(244,185,66,0.35)"; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "var(--glow-gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ fontSize: "3rem", lineHeight: 1, color: "var(--purple-light)", opacity: 0.25, fontFamily: "Georgia, serif", marginBottom: "-0.5rem" }}>"</div>
                  <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.855, marginBottom: "1.5rem", fontStyle: "italic" }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, var(--purple), var(--gold))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.08rem", color: "white", flexShrink: 0 }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem" }}>{t.name}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--dim)" }}>{t.role}</div>
                      <div style={{ color: "#f4b942", fontSize: "1rem", marginTop: "0.2rem" }}>★★★★★</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section id="contact-section">
          <div className="section-inner">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              style={{ textAlign: "center", padding: "4rem 3rem", background: "linear-gradient(135deg, rgba(155,93,229,0.1), rgba(244,185,66,0.08))", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(155,93,229,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "1rem", position: "relative" }}>
                Ready to build something <span style={{ background: "linear-gradient(135deg, var(--purple-light), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>extraordinary?</span>
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "2.5rem", lineHeight: 1.8, position: "relative" }}>Let's turn your idea into a production-ready system.</p>
              <Link to="/contact" className="btn-primary" style={{ position: "relative" }}><span>Start a Project</span></Link>
            </motion.div>
          </div>
        </section>

        <style>{`
          .services-grid { grid-template-columns: 1fr 1fr; }
          .testi-grid { grid-template-columns: repeat(3, 1fr); }
          @media (max-width: 900px) {
            .services-grid { grid-template-columns: 1fr !important; }
            .testi-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
