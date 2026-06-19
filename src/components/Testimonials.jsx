import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const testimonials = [
  {
    quote: "Divyanshi delivered our e-commerce platform 3 days ahead of schedule. The Razorpay integration was flawless and the code quality was outstanding — our tech lead was genuinely impressed.",
    avatar: "JM",
    name: "James Mitchell",
    role: "CEO, ShopFlow Inc.",
    location: "USA",
    platform: "Upwork",
    platformColor: "#14a800",
    stars: 5,
    project: "E-Commerce Platform",
  },
  {
    quote: "Our SaaS inventory dashboard went from wireframes to live Azure deployment in under a month. Divyanshi communicated clearly throughout and handled every feedback round professionally.",
    avatar: "SL",
    name: "Sophie Laurent",
    role: "Product Manager",
    location: "France",
    platform: "LinkedIn",
    platformColor: "#0077b5",
    stars: 5,
    project: "Sales Inventory SaaS",
  },
  {
    quote: "Best freelancer I've hired. Divyanshi understood our complex .NET Core requirements immediately and delivered clean, well-documented, production-ready code with zero post-delivery bugs.",
    avatar: "AK",
    name: "Arjun Kapoor",
    role: "CTO, TechVenture",
    location: "India",
    platform: "Direct",
    platformColor: "#00e5c4",
    stars: 5,
    project: "Backend API Architecture",
  },
  {
    quote: "Exceptional FastAPI backend with an ML pipeline that actually performs. Our wellness app recommendation accuracy improved by 94%. Delivered on time with great documentation.",
    avatar: "RN",
    name: "Riya Nair",
    role: "Founder, HealthTech Startup",
    location: "India",
    platform: "Direct",
    platformColor: "#00e5c4",
    stars: 5,
    project: "Wellness AI Backend",
  },
  {
    quote: "The Azure microservices architecture Divyanshi built processes 40M daily events without a single dropped message. Terraform infra code was clean and reproducible.",
    avatar: "MP",
    name: "Marco Pellegrini",
    role: "Cloud Architect",
    location: "Italy",
    platform: "LinkedIn",
    platformColor: "#0077b5",
    stars: 5,
    project: "Serverless Portal",
  },
  {
    quote: "Hired Divyanshi to build the Zinkr dating app backend. Real-time matchmaking, WebSocket chat, Google OAuth — all delivered with sub-100ms latency. Truly impressive work.",
    avatar: "KR",
    name: "Kartik Rao",
    role: "Founder, Zinkr",
    location: "India",
    platform: "Direct",
    platformColor: "#00e5c4",
    stars: 5,
    project: "Zinkr — Dating Platform",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="section-inner">
        <motion.div
          custom={0} variants={fadeUp} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
        >
          <div className="section-label">Social Proof</div>
          <h2 className="section-title">Client <em>Reviews</em></h2>
          <p style={{ color: "var(--muted)", maxWidth: "520px", lineHeight: 1.8, fontSize: "0.82rem", marginBottom: "3rem" }}>
            Real feedback from clients and collaborators across 5 countries.
          </p>
        </motion.div>

        {/* Rating summary bar */}
        <motion.div
          custom={1} variants={fadeUp} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
          style={{
            display: "flex", alignItems: "center", gap: "2.5rem",
            padding: "1.2rem 2rem", marginBottom: "2.5rem",
            background: "var(--surface)", border: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "2.8rem", background: "linear-gradient(135deg, var(--purple-light), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>5.0</div>
            <div style={{ color: "#f4b942", fontSize: "0.82rem", letterSpacing: "0.1em" }}>★★★★★</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Overall Rating</div>
          </div>
          <div style={{ width: "1px", height: "50px", background: "var(--border)" }} />
          {[["6+", "Happy Clients"], ["5+", "Projects"], ["3", "Countries"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--cream)" }}>{n}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{l}</div>
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.2rem" }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                padding: "1.8rem",
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                position: "relative",
                transition: "all 0.3s",
                display: "flex", flexDirection: "column", gap: "0",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(0, 229, 196,0.4)";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 229, 196,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Platform badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem",
                  padding: "0.2rem 0.6rem", border: `1px solid ${t.platformColor}44`,
                  color: t.platformColor, background: `${t.platformColor}11`,
                  textTransform: "uppercase", letterSpacing: "0.1em",
                }}>
                  {t.platform}
                </span>
                <div style={{ color: "#f4b942", fontSize: "1rem", letterSpacing: "0.05em" }}>
                  {"★".repeat(t.stars)}
                </div>
              </div>

              {/* Quote */}
              <div style={{ fontSize: "2.2rem", lineHeight: 1, color: "var(--purple-light)", opacity: 0.2, fontFamily: "Georgia, serif", marginBottom: "-0.5rem" }}>"</div>
              <p style={{ color: "var(--muted)", fontSize: "0.78rem", lineHeight: 1.8, marginBottom: "1.2rem", fontStyle: "italic", flexGrow: 1 }}>
                {t.quote}
              </p>

              {/* Project tag */}
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--gold)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ color: "var(--gold)" }}>→</span> {t.project}
              </div>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--purple), var(--gold))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "0.82rem",
                  color: "white", flexShrink: 0,
                }}>{t.avatar}</div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.08rem" }}>{t.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)" }}>{t.role} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
