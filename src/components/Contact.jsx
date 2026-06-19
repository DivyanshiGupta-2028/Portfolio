import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="section-inner">
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: "5rem",
              alignItems: "start",
              marginTop: "3rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="contact-info"
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  marginBottom: "1rem",
                }}
              >
                Let's build something extraordinary
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  fontSize: "0.82rem",
                }}
              >
                Whether you need a scalable .NET backend, a responsive React UI, or
                an AI-powered SaaS platform — I'm ready to bring your vision to
                life.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <a
                  href="mailto:contact@example.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.2rem",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.82rem",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue)";
                    e.currentTarget.style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  <span style={{ fontSize: "1.08rem" }}>✉️</span>{" "}
                  hello@divyanshig.dev
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.2rem",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.82rem",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue)";
                    e.currentTarget.style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--muted)";
                  }}
                >
                  <span style={{ fontSize: "1.08rem" }}>🔗</span> LinkedIn
                  Profile
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <div
                  className="form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <label
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "1rem",
                        color: "var(--teal)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      style={{
                        background: "var(--bg2)",
                        border: "1px solid var(--border)",
                        color: "var(--cream)",
                        padding: "0.9rem 1rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <label
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "1rem",
                        color: "var(--teal)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      style={{
                        background: "var(--bg2)",
                        border: "1px solid var(--border)",
                        color: "var(--cream)",
                        padding: "0.9rem 1rem",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      color: "var(--teal)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Service Needed
                  </label>
                  <select
                    style={{
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      color: "var(--cream)",
                      padding: "0.9rem 1rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  >
                    <option style={{ background: "var(--bg2)" }}>
                      .NET Backend Development
                    </option>
                    <option style={{ background: "var(--bg2)" }}>
                      Angular / React Frontend
                    </option>
                    <option style={{ background: "var(--bg2)" }}>
                      Full-Stack MVP
                    </option>
                    <option style={{ background: "var(--bg2)" }}>
                      Consulting / Other
                    </option>
                  </select>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      color: "var(--teal)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    style={{
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      color: "var(--cream)",
                      padding: "0.9rem 1rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                      resize: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <button
                  className="btn-submit clickable"
                  style={{
                    padding: "1rem 2.5rem",
                    background: "var(--orange)",
                    color: "var(--cream)",
                    border: "none",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.05em",
                    cursor: "none",
                    transition: "all 0.3s",
                    alignSelf: "flex-start",
                    clipPath:
                      "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--cream)";
                    e.currentTarget.style.color = "var(--bg)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(203,75,22,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--orange)";
                    e.currentTarget.style.color = "var(--cream)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer
        style={{
          position: "relative",
          zIndex: 2,
          padding: "2rem 3rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--bg2)",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "1rem",
            color: "var(--dim)",
          }}
        >
          © {new Date().getFullYear()} Divyanshi Gupta. All rights reserved.
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "1rem",
            color: "var(--muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          Back to top ↑
        </a>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
