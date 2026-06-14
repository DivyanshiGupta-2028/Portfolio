import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const contactLinks = [
  { icon: "✉️", label: "Email", value: "hello@divyanshig.dev", href: "mailto:hello@divyanshig.dev" },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/divyanshi-gupta", href: "https://www.linkedin.com/in/divyanshi-gupta-b0408720b/" },
  { icon: "☁️", label: "Azure Certified", value: "AZ-900 · AI-900", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: ".NET Backend Development", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="page-wrapper">
        <section>
          <div className="section-inner">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <div className="section-label">Get In Touch</div>
              <h1 className="section-title">Let's build something <em>extraordinary</em></h1>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", marginTop: "3.5rem", alignItems: "start" }} className="contact-grid">
              {/* Info */}
              <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
                <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "0.82rem", marginBottom: "2.5rem" }}>
                  Whether you need a scalable .NET backend, a React UI, or an AI-powered SaaS — I'm ready to architect your next system. Let's talk.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {contactLinks.map((cl, i) => (
                    <a
                      key={i}
                      href={cl.href}
                      target={cl.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.2rem", border: "1px solid var(--border)", color: "var(--muted)", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", transition: "all 0.3s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(244,185,66,0.5)"; e.currentTarget.style.color = "var(--cream)"; e.currentTarget.style.background = "rgba(244,185,66,0.04)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; }}
                    >
                      <span style={{ fontSize: "1.08rem" }}>{cl.icon}</span>
                      <div>
                        <div style={{ color: "var(--dim)", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.1rem" }}>{cl.label}</div>
                        <div>{cl.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Availability card */}
                <motion.div
                  custom={2}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  style={{ marginTop: "2rem", padding: "1.5rem", background: "linear-gradient(135deg, rgba(155,93,229,0.1), rgba(244,185,66,0.06))", border: "1px solid rgba(155,93,229,0.25)" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#74d457", animation: "pulse-dot 2s infinite", display: "inline-block" }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Currently Available</span>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.85 }}>Open to freelance projects, contract work, and full-time remote opportunities. Response time: within 24hrs.</p>
                </motion.div>
              </motion.div>

              {/* Form */}
              <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(116,212,87,0.3)", background: "rgba(116,212,87,0.05)" }}
                  >
                    <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.8rem" }}>Message Sent!</h3>
                    <p style={{ color: "var(--muted)", fontSize: "1rem" }}>I'll get back to you within 24 hours. Looking forward to working together!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      {[
                        { label: "Your Name", name: "name", type: "text", placeholder: "Jane Smith" },
                        { label: "Email Address", name: "email", type: "email", placeholder: "jane@company.com" },
                      ].map(({ label, name, type, placeholder }) => (
                        <div key={name} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--purple-light)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{label}</label>
                          <input
                            type={type}
                            name={name}
                            required
                            value={form[name]}
                            onChange={handleChange}
                            placeholder={placeholder}
                            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--cream)", padding: "0.9rem 1rem", fontFamily: "'Inter', sans-serif", fontSize: "1rem", outline: "none", transition: "border-color 0.2s", width: "100%" }}
                            onFocus={e => e.target.style.borderColor = "rgba(155,93,229,0.6)"}
                            onBlur={e => e.target.style.borderColor = "var(--border)"}
                          />
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--purple-light)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Service Needed</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--cream)", padding: "0.9rem 1rem", fontFamily: "'Inter', sans-serif", fontSize: "1rem", outline: "none", transition: "border-color 0.2s" }}
                        onFocus={e => e.target.style.borderColor = "rgba(155,93,229,0.6)"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                      >
                        {[".NET Backend Development", "Angular / React Frontend", "AI/ML Backend Integration", "Full-Stack MVP", "Consulting / Other"].map(opt => (
                          <option key={opt} value={opt} style={{ background: "var(--bg)", color: "var(--cream)" }}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "var(--purple-light)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Your Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, and budget..."
                        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--cream)", padding: "0.9rem 1rem", fontFamily: "'Inter', sans-serif", fontSize: "1rem", outline: "none", transition: "border-color 0.2s", resize: "none" }}
                        onFocus={e => e.target.style.borderColor = "rgba(155,93,229,0.6)"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ alignSelf: "flex-start", border: "none", fontSize: "0.82rem" }}
                    >
                      <span>Send Message ✉️</span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <style>{`
          .contact-grid { grid-template-columns: 1fr 1.4fr; }
          .form-row { grid-template-columns: 1fr 1fr; }
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
