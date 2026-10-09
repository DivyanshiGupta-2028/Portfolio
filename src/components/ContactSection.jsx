import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

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
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

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

    // Trigger user mail client with pre-filled message
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

  return (
    <section id="contact" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            COMMUNICATIONS ARRAY // CONTACT
          </div>
          <h2 className="section-title">
            LET'S BUILD <span className="gradient-cyan-purple">SOMETHING THAT MATTERS.</span>
          </h2>
          <p className="section-subtitle">
            Open to opportunities where backend engineering, full-stack development, and thoughtful product execution come together.
          </p>
        </div>

        {/* 2-Column: Direct Channels + Interactive Contact Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "2.5rem",
          }}
          className="contact-grid"
        >
          {/* Left: Contact Channels & Resume Download */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Direct Channel Cards */}
            <div className="cyber-panel clipped-corner" style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "1.4rem",
                }}
              >
                DIRECT FREQUENCIES
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {/* Email */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.8rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(7, 10, 18, 0.7)",
                    border: "1px solid rgba(72, 229, 255, 0.15)",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                      EMAIL TRANSMISSION
                    </div>
                    <a
                      href="mailto:divyanshi2028@gmail.com"
                      style={{ color: "var(--cyan)", textDecoration: "none", fontSize: "0.92rem", fontWeight: 600 }}
                    >
                      divyanshi2028@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    style={{
                      background: "rgba(72, 229, 255, 0.1)",
                      border: "1px solid rgba(72, 229, 255, 0.3)",
                      color: "var(--cyan)",
                      borderRadius: "6px",
                      padding: "0.35rem 0.7rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      cursor: "pointer",
                    }}
                  >
                    {copiedEmail ? "COPIED ✔" : "COPY"}
                  </button>
                </div>

                {/* LinkedIn */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.8rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(7, 10, 18, 0.7)",
                    border: "1px solid rgba(72, 229, 255, 0.15)",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                      PROFESSIONAL NETWORK
                    </div>
                    <a
                      href="https://www.linkedin.com/in/divyanshi-gupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.92rem", fontWeight: 600 }}
                    >
                      linkedin.com/in/divyanshi-gupta ↗
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.8rem 1rem",
                    borderRadius: "8px",
                    background: "rgba(7, 10, 18, 0.7)",
                    border: "1px solid rgba(72, 229, 255, 0.15)",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                      TELEPHONE LINE
                    </div>
                    <a
                      href="tel:+917017796542"
                      style={{ color: "#ffffff", textDecoration: "none", fontSize: "0.92rem", fontWeight: 600 }}
                    >
                      +91-7017796542
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Callout Card */}
            <div
              className="cyber-panel clipped-corner"
              style={{
                padding: "1.8rem 2rem",
                background: "linear-gradient(135deg, rgba(72, 229, 255, 0.08) 0%, rgba(139, 92, 255, 0.08) 100%)",
                border: "1px solid var(--cyan)",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", marginBottom: "0.4rem" }}>
                // VERIFIED RESUME ASSET
              </div>
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.6rem" }}>
                Divyanshi Gupta — Full Resume
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.2rem" }}>
                PDF document detailing engineering background, verified achievements, .NET backend services, and cloud certs.
              </p>

              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                <a
                  href="/divyanshi-gupta-resume.pdf"
                  download="divyanshi-gupta-resume.pdf"
                  className="btn-cyber-primary"
                  style={{ padding: "0.65rem 1.4rem", fontSize: "0.85rem" }}
                  onClick={() => cyberAudio.playSuccess()}
                >
                  DOWNLOAD PDF ↓
                </a>
                <button
                  onClick={() => {
                    cyberAudio.playClick();
                    setResumeModalOpen(true);
                  }}
                  className="btn-cyber-secondary"
                  style={{ padding: "0.65rem 1.4rem", fontSize: "0.85rem" }}
                >
                  VIEW RESUME 👁
                </button>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="cyber-panel clipped-corner" style={{ padding: "2.2rem" }}>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "0.4rem",
              }}
            >
              INITIATE TRANSMISSION
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                marginBottom: "1.8rem",
              }}
            >
              Send an inquiry regarding full-time roles, engineering consultations, or technical collaborations.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "2rem",
                  borderRadius: "10px",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>✔</div>
                <h4 style={{ color: "#34d399", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  TRANSMISSION DISPATCHED
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.2rem" }}>
                  Your email client has been prepared with your inquiry. I will review and reply promptly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "none",
                    border: "1px solid rgba(72, 229, 255, 0.3)",
                    color: "var(--cyan)",
                    borderRadius: "6px",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                  }}
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}
                  >
                    IDENTIFIER / NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "6px",
                      background: "rgba(7, 10, 18, 0.8)",
                      border: `1px solid ${errors.name ? "#ef4444" : "rgba(72, 229, 255, 0.2)"}`,
                      color: "#ffffff",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />
                  {errors.name && <span style={{ color: "#ef4444", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}
                  >
                    RETURN ADDRESS / EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@enterprise.com"
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "6px",
                      background: "rgba(7, 10, 18, 0.8)",
                      border: `1px solid ${errors.email ? "#ef4444" : "rgba(72, 229, 255, 0.2)"}`,
                      color: "#ffffff",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />
                  {errors.email && <span style={{ color: "#ef4444", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>{errors.email}</span>}
                </div>

                {/* Opportunity Type */}
                <div>
                  <label
                    htmlFor="contact-opportunity"
                    style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}
                  >
                    OPPORTUNITY TYPE
                  </label>
                  <select
                    id="contact-opportunity"
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "6px",
                      background: "rgba(7, 10, 18, 0.8)",
                      border: "1px solid rgba(72, 229, 255, 0.2)",
                      color: "#ffffff",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  >
                    <option value="Full-Time Role">Full-Time Software Engineer Role</option>
                    <option value="Contract / Consulting">Contract / Backend Consulting</option>
                    <option value="Architecture Review">Architecture / System Design Review</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}
                  >
                    TRANSMISSION MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the role, project requirements, or opportunity..."
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "6px",
                      background: "rgba(7, 10, 18, 0.8)",
                      border: `1px solid ${errors.message ? "#ef4444" : "rgba(72, 229, 255, 0.2)"}`,
                      color: "#ffffff",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.92rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                  {errors.message && <span style={{ color: "#ef4444", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>{errors.message}</span>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-cyber-primary clipped-corner"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  DISPATCH TRANSMISSION ✉
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {resumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              background: "rgba(4, 6, 12, 0.88)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
            onClick={() => setResumeModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{
                width: "100%",
                maxWidth: "780px",
                maxHeight: "85vh",
                overflowY: "auto",
                background: "rgba(9, 14, 28, 0.98)",
                border: "1px solid var(--cyan)",
                borderRadius: "16px",
                padding: "2.5rem",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setResumeModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(72, 229, 255, 0.1)",
                  border: "1px solid rgba(72, 229, 255, 0.3)",
                  color: "var(--cyan)",
                  borderRadius: "8px",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--cyan)", marginBottom: "0.5rem" }}>
                // EXECUTIVE DOSSIER VIEW
              </div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.2rem" }}>
                DIVYANSHI GUPTA
              </h2>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                Full-Stack Software Engineer · Noida, India · divyanshi2028@gmail.com · +91-7017796542
              </div>

              {/* Summary */}
              <div style={{ marginBottom: "1.5rem", paddingBottom: "1.2rem", borderBottom: "1px solid rgba(72, 229, 255, 0.15)" }}>
                <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--cyan)", marginBottom: "0.4rem" }}>
                  SUMMARY
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Full-Stack Software Engineer with nearly 3 years of combined experience specializing in ASP.NET Core, .NET 7+, C#, React, Angular, SQL Server, and AI-integrated backend systems. Proven record reducing manual operational effort by 40% and optimizing CMS load times by 35%.
                </p>
              </div>

              {/* Work History */}
              <div style={{ marginBottom: "1.5rem", paddingBottom: "1.2rem", borderBottom: "1px solid rgba(72, 229, 255, 0.15)" }}>
                <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--cyan)", marginBottom: "0.8rem" }}>
                  WORK EXPERIENCE
                </h4>
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }}>
                    <span>Software Engineer – Full Stack</span>
                    <span style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>June 2024 – Present</span>
                  </div>
                  <div style={{ color: "var(--purple)", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    Sanskriti IT Solutions Pvt. Ltd., Noida
                  </div>
                  <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", color: "var(--text-secondary)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <li>Architected REST APIs and backend services using C# and ASP.NET Core with SQL Server.</li>
                    <li>Verified Gain: 40% reduction in manual license assignment effort on multi-tenant SaaS.</li>
                    <li>Verified Gain: 35% improvement in Angular CMS load time using lazy loading & caching.</li>
                    <li>Configured JWT authentication, Google OAuth2, audit logging, and Azure DevOps CI/CD.</li>
                  </ul>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }}>
                    <span>Android Developer Intern</span>
                    <span style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Feb 2024 – June 2024</span>
                  </div>
                  <div style={{ color: "var(--purple)", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                    Sanskriti IT Solutions Pvt. Ltd., Noida
                  </div>
                  <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", color: "var(--text-secondary)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    <li>Integrated REST APIs for login, registration, and OTP verification workflows.</li>
                    <li>Participated in regression testing, bug fixing, and agile sprints.</li>
                  </ul>
                </div>
              </div>

              {/* Certs & Education */}
              <div>
                <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--cyan)", marginBottom: "0.4rem" }}>
                  CREDENTIALS & EDUCATION
                </h4>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  <div>• B.Tech in Computer Science & Engineering — Meerut Institute of Eng. & Tech. (2020 – 2024)</div>
                  <div>• Microsoft Certified: Azure Fundamentals (AZ-900)</div>
                  <div>• Microsoft Certified: Azure AI Fundamentals (AI-900)</div>
                </div>
              </div>

              {/* Action in Modal */}
              <div style={{ marginTop: "1.8rem", display: "flex", gap: "1rem" }}>
                <a
                  href="/divyanshi-gupta-resume.pdf"
                  download="divyanshi-gupta-resume.pdf"
                  className="btn-cyber-primary"
                  style={{ padding: "0.7rem 1.6rem" }}
                  onClick={() => cyberAudio.playSuccess()}
                >
                  DOWNLOAD AS PDF ↓
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
