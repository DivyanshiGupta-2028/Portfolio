import { useState } from "react";
import { motion } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const CHANNELS = [
  {
    label: "EMAIL",
    value: "divyanshi2028@gmail.com",
    href: "mailto:divyanshi2028@gmail.com",
    icon: "✉",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/divyanshi-gupta",
    href: "https://www.linkedin.com/in/divyanshi-gupta",
    icon: "↗",
  },
  {
    label: "GITHUB",
    value: "github.com/divyanshi-gupta",
    href: "https://github.com/divyanshi-gupta",
    icon: "↗",
  },
  {
    label: "PHONE",
    value: "+91-7017796542",
    href: "tel:+917017796542",
    icon: "↗",
  },
];

const OPPORTUNITY_TYPES = [
  "Full-Time Role",
  "Internship",
  "Freelance / Contract",
  "Open Source Collaboration",
  "Technical Mentorship",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    opportunityType: "Full-Time Role",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cyberAudio.playClick();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    cyberAudio.playSuccess();

    const subject = encodeURIComponent(`[${formData.opportunityType}] Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Divyanshi,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOpportunity Type: ${formData.opportunityType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:divyanshi2028@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyEmail = () => {
    cyberAudio.playClick();
    navigator.clipboard.writeText("divyanshi2028@gmail.com");
    setCopiedEmail(true);
    cyberAudio.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  if (submitted) {
    return (
      <section style={{ position: "relative" }}>
        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "6rem 1.75rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>✓</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
              Message sent.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
              Your mail client should open now. I'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ position: "relative" }}>
      <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "5rem 1.75rem 0" }}>

        {/* Section header */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", marginBottom: "1rem" }}>
            // CONTACT
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: "800px", marginBottom: "1.25rem" }}>
            Let's build{" "}
            <span style={{ background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              something that matters.
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px" }}>
            Open to full-time backend / full-stack roles, freelance projects, and technical collaborations. Based in Noida — available immediately.
          </p>
        </div>

        {/* product.inc two-column grid */}
        <div className="pi-contact-grid">
          {/* Left: Direct channels */}
          <div className="pi-contact-left">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem" }}>
              DIRECT CHANNELS
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}>
              {CHANNELS.map((ch) => (
                <div key={ch.label}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginBottom: "0.35rem" }}>
                    {ch.label}
                  </div>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="dashed-link"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                  >
                    {ch.value} <span style={{ opacity: 0.5, fontSize: "0.8rem" }}>{ch.icon}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#34d399" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} className="cyber-pulse" />
                OPEN TO OPPORTUNITIES · IMMEDIATE JOIN
              </div>

              {/* Copy email */}
              <div style={{ marginTop: "1.5rem" }}>
                <button
                  onClick={copyEmail}
                  className="btn-flat-secondary"
                  style={{ fontSize: "0.8rem", height: "38px", padding: "0 1.1rem" }}
                >
                  {copiedEmail ? "✓ COPIED!" : "COPY EMAIL"}
                </button>
              </div>

              {/* Resume download */}
              <div style={{ marginTop: "0.75rem" }}>
                <a
                  href="/DivyanshiGupta (1).pdf"
                  download
                  className="btn-flat-primary"
                  style={{ textDecoration: "none", fontSize: "0.8rem", height: "38px", padding: "0 1.1rem" }}
                >
                  ↓ DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </div>

          {/* Right: Minimal form */}
          <div className="pi-contact-right">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem" }}>
              SEND A MESSAGE
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Name */}
              <div>
                <label className="pi-input-label" htmlFor="pi-name">YOUR NAME</label>
                <input
                  id="pi-name"
                  className="pi-input"
                  type="text"
                  placeholder="Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                />
                {errors.name && <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#f87171", marginTop: "0.4rem" }}>{errors.name}</div>}
              </div>

              {/* Email */}
              <div>
                <label className="pi-input-label" htmlFor="pi-email">YOUR EMAIL</label>
                <input
                  id="pi-email"
                  className="pi-input"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                />
                {errors.email && <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#f87171", marginTop: "0.4rem" }}>{errors.email}</div>}
              </div>

              {/* Opportunity Type */}
              <div>
                <label className="pi-input-label" htmlFor="pi-type">OPPORTUNITY TYPE</label>
                <select
                  id="pi-type"
                  value={formData.opportunityType}
                  onChange={(e) => setFormData(p => ({ ...p, opportunityType: e.target.value }))}
                  style={{
                    width: "100%", background: "transparent", border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#ffffff",
                    fontFamily: "var(--font-body)", fontSize: "1rem",
                    padding: "0.85rem 0", outline: "none", cursor: "pointer",
                    appearance: "none", WebkitAppearance: "none",
                  }}
                >
                  {OPPORTUNITY_TYPES.map(t => <option key={t} value={t} style={{ background: "#06080F" }}>{t}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="pi-input-label" htmlFor="pi-message">MESSAGE</label>
                <textarea
                  id="pi-message"
                  className="pi-input"
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  style={{ resize: "vertical" }}
                />
                {errors.message && <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "#f87171", marginTop: "0.4rem" }}>{errors.message}</div>}
              </div>

              {/* Submit */}
              <button type="submit" className="btn-flat-primary" style={{ alignSelf: "flex-start", fontSize: "0.9rem" }}>
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
