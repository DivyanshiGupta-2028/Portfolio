import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const categories = [
  { emoji: "🔷", label: "SaaS / Web App", count: "3 projects" },
  { emoji: "🛒", label: "E-Commerce", count: "1 project" },
  { emoji: "🤖", label: "AI / ML Backend", count: "2 projects" },
  { emoji: "☁️", label: "Cloud Architecture", count: "1 project" },
];

export default function Services() {
  const services = [
    {
      icon: "🔷",
      name: ".NET Backend Development",
      desc: "Production-grade ASP.NET Core APIs with multi-tenancy, RBAC, JWT auth, EF Core, and SQL Server. Enterprise SaaS systems built for real scale.",
      price: "Starting $800 / project",
      accentColor: "var(--purple-light)",
    },
    {
      icon: "🅰️",
      name: "Angular / React Frontend",
      desc: "Pixel-perfect frontends in Angular 19 or React. Lazy loading, RxJS state management, API integration — 95+ Lighthouse scores.",
      price: "Starting $600 / project",
      accentColor: "var(--gold)",
    },
    {
      icon: "🤖",
      name: "AI / ML Backend Integration",
      desc: "FastAPI-powered backends with ML pipeline architecture — personalization engines, trend analysis, adaptive recommendations, and Azure AI Services.",
      price: "Starting $1,000 / project",
      accentColor: "var(--purple-light)",
    },
    {
      icon: "🚀",
      name: "Full-Stack SaaS MVP",
      desc: "Idea to deployed product — auth, database, APIs, and frontend. CI/CD on Azure included. Built to demo to investors from day one.",
      price: "Starting $1,500 / MVP",
      accentColor: "var(--gold)",
    },
  ];

  return (
    <section id="services">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <div className="section-label">What I Offer</div>
          <h2 className="section-title">My <em>Services</em></h2>
          <p style={{ color: "var(--muted)", maxWidth: "520px", lineHeight: 1.8, fontSize: "0.82rem", marginBottom: "2rem" }}>
            End-to-end systems with solid architecture and premium execution.
          </p>
        </motion.div>

        {/* What I Build — category chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
        >
          {categories.map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.6rem 1.2rem", border: "1px solid var(--border)", background: "var(--surface)", transition: "all 0.25s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0, 229, 196,0.4)"; e.currentTarget.style.background = "rgba(0, 229, 196,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface)"; }}
            >
              <span style={{ fontSize: "1rem" }}>{c.emoji}</span>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "var(--cream)" }}>{c.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)" }}>{c.count}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ padding: "2.5rem", background: "var(--bg2)", border: "1px solid var(--border)", transition: "all 0.3s", position: "relative", overflow: "hidden", cursor: "pointer" }}
              onClick={() => { const contact = document.getElementById("contact"); if (contact) contact.scrollIntoView({ behavior: "smooth" }); }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 229, 196,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 229, 196,0.08)";
                e.currentTarget.querySelector(".service-hover-line").style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector(".service-hover-line").style.transform = "scaleX(0)";
              }}
            >
              <div className="service-hover-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--purple-light), var(--gold))", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "4rem", color: "rgba(0, 229, 196,0.05)", position: "absolute", top: "0.5rem", right: "1.2rem", lineHeight: 1 }}>0{idx + 1}</div>
              <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{service.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.08rem", marginBottom: "0.7rem" }}>{service.name}</div>
              <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.85, marginBottom: "1.8rem" }}>{service.desc}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: service.accentColor, border: `1px solid ${service.accentColor}44`, padding: "0.3rem 0.8rem" }}>{service.price}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--dim)" }}>Enquire →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
