import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useTheme } from "../context/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }
  }),
};

const FILTERS = ["All", "Backend", "Full-Stack", "AI/ML", "Android"];

const projects = [
  {
    id: "zinkr",
    num: "01",
    badge: "FLAGSHIP",
    badgeGradient: "linear-gradient(135deg, #00e5c4, #00b89e)",
    name: "Zinkr",
    subtitle: "Modern Dating Platform",
    category: "Backend",
    year: "2024",
    size: "large", // spans 2 cols
    accentColor: "#00e5c4",
    desc: "Architected the full backend of a next-gen dating app — real-time matchmaking, Google OAuth2 SSO, JWT sessions, and a swipe-to-match engine processing thousands of events per second.",
    longDesc: "Designed and engineered a high-concurrency matchmaking backend from scratch, utilizing ASP.NET Core 7 and Entity Framework Core with SQL Server. The architecture centers around a geo-aware discovery query pipeline that filters profiles based on distance, preferences, and recent activity. For matchmaking, implemented a low-latency redis-backed queue processing swipe events asynchronously. Managed bidirectionality by evaluating swipe reciprocity and instantly dispatching matchmaking events over WebSocket connections. Implemented robust security policies utilizing Google OAuth2 Single Sign-On (SSO) and JSON Web Tokens (JWT) for session management, alongside Redis cluster distribution to ensure 99.98% authorization uptime and secure REST API endpoints.",
    stack: ["ASP.NET Core 7", "C#", "Google OAuth2", "JWT", "Entity Framework Core", "SQL Server", "WebSockets"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    video: "/Record_2026-05-28-14-45-33.mp4",
    metrics: ["45ms avg API latency", "2,500+ concurrent WS sessions", "99.98% auth uptime"],
    role: "Backend Architect",
    features: [
      "Real-time swipe matchmaking engine with sub-100ms latency",
      "Robust WebSocket bidirectional communication framework for instant messaging",
      "Secure Google OAuth2 authentication & JSON Web Token (JWT) session lifecycle",
      "Redis caching layer for high-speed retrieval of active user profiles",
      "Highly optimized SQL Server schema with Entity Framework Core migrations"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
    ]
  },
  {
    id: "inventory",
    num: "02",
    badge: "LIVE ON AZURE",
    badgeGradient: "linear-gradient(135deg, #00d4e8, #00e5c4)",
    name: "Sales Inventory",
    subtitle: "Enterprise SaaS Platform",
    category: "Full-Stack",
    year: "2024",
    size: "medium",
    accentColor: "#00d4e8",
    desc: "Enterprise-grade inventory & invoicing SaaS with GST/non-GST billing, real-time stock telemetry, RBAC, and live on Azure.",
    longDesc: "An enterprise-ready SaaS suite built for inventory optimization and financial transaction processing. The system implements a complete GST/non-GST tax calculation engine with dynamic HTML-to-PDF invoice compilation, delivered to client devices in less than 3 seconds. The backend is designed with .NET 7 Web APIs incorporating customized Role-Based Access Control (RBAC) middleware for fine-grained staff permission levels. On the frontend, a modular Angular 18 single-page application is implemented with lazily-loaded routing structures and automated state tracking via RxJS observables. The application maintains absolute system status telemetry and features full integration with Azure Web Apps and continuous delivery pipelines via Azure DevOps.",
    stack: [".NET 7", "C#", "Angular 18", "TypeScript", "SQL Server", "Azure DevOps", "RxJS"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
    video: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/store-aisle-detection.mp4",
    metrics: ["65% faster report gen", "99.9% stock accuracy", "Zero-downtime CI/CD"],
    role: "Full-Stack Engineer",
    features: [
      "Compliance-ready GST & non-GST billing/invoice generator with automated PDF creation",
      "Real-time stock level telemetry and automatic low-inventory alert warnings",
      "Granular Role-Based Access Control (RBAC) separating administrative and sales operations",
      "Modern Angular 18 frontend with responsive RxJS state management and lazy-loaded modules",
      "Continuous Integration & Deployment (CI/CD) pipelines built via Azure DevOps"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
    ]
  },
  {
    id: "wellness",
    num: "03",
    badge: "AI POWERED",
    badgeGradient: "linear-gradient(135deg, #00e5c4, #00b89e)",
    name: "Wellness App",
    subtitle: "AI Health Intelligence Backend",
    category: "AI/ML",
    year: "2024",
    size: "medium",
    accentColor: "#00e5c4",
    desc: "FastAPI backend with ML pipelines for personalized wellness recommendations — trend analysis, user segmentation, and health telemetry APIs.",
    longDesc: "A high-throughput wellness analytics system built on FastAPI and Python 3.11, integrating wearable telemetry APIs with asynchronous ML classification engines. The application exposes optimized endpoints that ingest heart rate, step count, and sleep metrics from consumer wearables under 50ms average latency. The data is queued in Redis and analyzed by worker threads running Scikit-Learn K-Means algorithms, clustering users into distinct physiological segments for personalized routine suggestions. Background workloads are decoupled using Celery distributed tasks, ensuring API endpoints remain highly responsive during heavy machine learning model runs.",
    stack: ["FastAPI", "Python 3.11", "Scikit-Learn", "PostgreSQL", "Celery", "Redis", "Uvicorn"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
    video: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/face-demographics-walking.mp4",
    metrics: ["83% faster page load", "94% ML accuracy", "4K req/min throughput"],
    role: "AI Backend Engineer",
    features: [
      "High-performance FastAPI endpoints for sub-second ingestion of fitness band metrics",
      "Scikit-Learn powered K-Means algorithm for dynamic patient wellness categorization",
      "Celery task workers for asynchronous background execution of machine learning models",
      "Redis caching layer serving instant aggregated health metric reports to dashboards",
      "Fully documented REST API endpoints generated automatically via Swagger"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&q=80"
    ]
  },
  {
    id: "bellezbuy",
    num: "04",
    badge: "E-COMMERCE",
    badgeGradient: "linear-gradient(135deg, #4dffd9, #00d4e8)",
    name: "BellezBuy",
    subtitle: "Full-Stack Shopping Platform",
    category: "Full-Stack",
    year: "2024",
    size: "medium",
    accentColor: "#4dffd9",
    desc: "Full-stack e-commerce platform — product catalog, order management, Razorpay payments, and automated Brevo transactional emails.",
    longDesc: "A robust consumer-facing e-commerce application developed with React.js, Express, Node.js, and SQL Server. Implemented a reliable payment ingestion gateway with Razorpay API, deploying cryptographic signature checks and webhooks to prevent duplicate transaction logging. The inventory sub-system features real-time inventory count adjustments that coordinate with customer checkout flows to eliminate race conditions during sales. Integrated transactional email templates via Brevo Web APIs to automatically compile and email order confirmations and PDF invoices. The client application is styled using responsive vanilla CSS with custom micro-animations for high-fidelity interactive user flows.",
    stack: ["React.js", "Node.js", "Express", "SQL Server", "Razorpay API", "Brevo API"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80",
    video: "/Record_2026-05-28-14-40-29.mp4",
    videoAdmin: "/VID20260529105202.mp4",
    videoAdminZoom: "scale(3.2)",
    metrics: ["0% dropped payments", "<3s invoice delivery", "Mobile-first checkout"],
    role: "Full-Stack Developer",
    features: [
      "Razorpay API checkout integration supporting credit cards, debit cards, and UPI",
      "Admin inventory management panel controlling product visibility and prices",
      "Transactional automated email invoices sent dynamically using Brevo hooks",
      "State-managed shopping cart and checkout validation schemas",
      "Mobile-responsive modern CSS design featuring custom animations"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
    ]
  },
  {
    id: "azure-microservices",
    num: "05",
    badge: "CLOUD ARCHITECTURE",
    badgeGradient: "linear-gradient(135deg, #00e5c4, #00d4e8)",
    name: "Serverless Portal",
    subtitle: "High-Throughput Ingestion System",
    category: "Backend",
    year: "2024",
    size: "medium",
    accentColor: "#00e5c4",
    desc: "Cloud microservice processing 40M daily data points using Azure Functions, Service Bus pipelines, and Cosmos DB storage.",
    longDesc: "A cloud-native telemetry ingestion platform engineered with serverless microservices. Built with C# and Azure Functions, the system architecture processes upwards of 40 million event streams daily. Telemetry payloads are ingested via Azure Service Bus queues to decouple ingestion interfaces from processing logic, mitigating bottleneck issues during traffic spikes. The ingestion pipelines persist data to Azure Cosmos DB using multi-region replication keys to guarantee high availability and sub-10ms geographical reads. Deployment and infrastructure provisioning are fully automated using modular Terraform templates.",
    stack: ["Azure Functions", "Cosmos DB", "Service Bus", "C#", "Docker", "Terraform"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80",
    video: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/car-detection.mp4",
    metrics: ["45% server cost reduction", "0% message drop rate", "40M daily telemetry events"],
    role: "Cloud Backend Architect",
    features: [
      "Serverless Azure Functions architecture processing 40M daily events with auto-scaling",
      "Cosmos DB multi-region writes for active-active geographical database redundancy",
      "Azure Service Bus message queues decoupling system components for system resilience",
      "Infrastructure as Code automation using reproducible Terraform scripts",
      "Dockerized microservice wrappers enabling local emulator testing"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
    ]
  },
  {
    id: "iot-telemetry",
    num: "06",
    badge: "INTERNET OF THINGS",
    badgeGradient: "linear-gradient(135deg, #00d4e8, #00b89e)",
    name: "IoT Sensor Stream",
    subtitle: "Real-Time Data Pipeline",
    category: "AI/ML",
    year: "2024",
    size: "medium",
    accentColor: "#00d4e8",
    desc: "Distributed telemetry ingest pipeline reading temperature, pressure, and sensor telemetry from 500+ remote devices.",
    longDesc: "A real-time distributed data ingestion pipeline engineered for industrial IoT telemetry. Implemented an MQTT broker that listens to device status streams from over 500 remote IoT sensors, handling massive concurrent payloads. Buffered incoming signals inside Redis Streams to prevent database writes from bottlenecking during high-frequency ingestion events. The ingestion backend is built on FastAPI, utilizing asynchronous workers to persist telemetry points to InfluxDB, optimized specifically for time-series analytics. The entire stack runs inside docker containers orchestrated by custom docker-compose configurations.",
    stack: ["FastAPI", "Python", "MQTT", "Redis Streams", "InfluxDB", "Docker"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
    video: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/bolt-detection.mp4",
    metrics: ["8,000 signals/sec intake", "<12ms ingestion latency", "99.995% sensor uptime"],
    role: "IoT Dev Lead",
    features: [
      "High-throughput MQTT broker managing telemetry connections for 500+ active devices",
      "Redis Streams layer acting as a message buffer to prevent downstream database strain",
      "InfluxDB time-series storage optimization for fast queries of historical trends",
      "FastAPI backend handling sensor telemetry parsing and system health status checks",
      "Multi-container environment orchestrated via Docker-Compose for modularity"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80"
    ]
  }
];

// Tilt card hook
function useTilt() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(((e.clientX - cx) / rect.width) * 10);
    y.set(-((e.clientY - cy) / rect.height) * 10);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
}

function ProjectCard({ p, idx, isLight, onClick }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt();
  const videoRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const onEnter = (e) => {
    setHovering(true);
    handleMouseMove(e);
    if (videoRef.current) {
      videoRef.current.style.opacity = "1";
      videoRef.current.play().catch(() => {});
    }
  };
  const onLeave = () => {
    setHovering(false);
    handleMouseLeave();
    if (videoRef.current) {
      videoRef.current.style.opacity = "0";
      videoRef.current.pause();
    }
  };

  const isLarge = p.size === "large";

  return (
    <motion.div
      ref={ref}
      custom={idx}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onClick={onClick}
      onMouseMove={onEnter}
      onMouseLeave={onLeave}
      style={{
        gridColumn: isLarge ? "1 / -1" : "auto",
        position: "relative",
        overflow: "hidden",
        borderRadius: "2px",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        cursor: "pointer",
        display: isLarge ? "grid" : "flex",
        gridTemplateColumns: isLarge ? "1.2fr 1fr" : undefined,
        flexDirection: "column",
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      whileHover={{ 
        boxShadow: `0 0 45px ${p.accentColor}55, inset 0 0 20px ${p.accentColor}22`,
        borderColor: p.accentColor 
      }}
    >
      {/* Media */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: isLarge ? "360px" : "200px", height: isLarge ? "100%" : "200px" }}>
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65) saturate(1.05) contrast(1.05)", transition: "filter 0.5s" }}
        />
        <video
          ref={videoRef}
          src={p.video}
          loop muted playsInline
          style={{ 
            position: "absolute", 
            inset: 0, 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            opacity: 0, 
            transition: "opacity 0.5s, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)", 
            filter: "brightness(0.8) contrast(1.05) saturate(1.15)",
            transform: hovering ? "scale(1.04)" : "scale(1)"
          }}
        />
        {/* Gradient */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${p.accentColor}33, transparent 60%)`, pointerEvents: "none" }} />
        {/* Big number */}
        <div style={{ position: "absolute", top: "1rem", left: "1.5rem", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "5rem", color: "rgba(255,255,255,0.06)", lineHeight: 1 }}>{p.num}</div>
        {/* Badge */}
        <span style={{ position: "absolute", top: "1.2rem", right: "1.2rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", letterSpacing: "0.12em", padding: "0.25rem 0.7rem", background: p.badgeGradient, color: "white" }}>{p.badge}</span>
        {/* Hover CTA */}
        <AnimatePresence>
          {hovering && (
            <>
              {/* Cyber AI HUD Overlay on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                style={{
                  position: "absolute",
                  inset: "1.2rem",
                  pointerEvents: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  zIndex: 4,
                }}
              >
                {/* HUD Corners */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ width: "12px", height: "12px", borderTop: `2px solid ${p.accentColor}`, borderLeft: `2px solid ${p.accentColor}`, opacity: 0.8 }} />
                  <div style={{ width: "12px", height: "12px", borderTop: `2px solid ${p.accentColor}`, borderRight: `2px solid ${p.accentColor}`, opacity: 0.8 }} />
                </div>
                
                {/* AI HUD Telemetry */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div style={{ width: "12px", height: "12px", borderBottom: `2px solid ${p.accentColor}`, borderLeft: `2px solid ${p.accentColor}`, opacity: 0.8 }} />
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "1rem",
                    color: p.accentColor,
                    textShadow: `0 0 6px ${p.accentColor}bb`,
                    background: "rgba(0,0,0,0.65)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px",
                    border: `1px solid ${p.accentColor}33`,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    backdropFilter: "blur(4px)"
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#00ff66", boxShadow: "0 0 5px #00ff66", display: "inline-block", animation: "pulse-dot 1.2s infinite" }} />
                    AI ENGINE: RESOLVED
                  </div>
                  <div style={{ width: "12px", height: "12px", borderBottom: `2px solid ${p.accentColor}`, borderRight: `2px solid ${p.accentColor}`, opacity: 0.8 }} />
                </div>
              </motion.div>
              
              {/* Laser scan line */}
              <div style={{
                position: "absolute", left: 0, right: 0, height: "3px",
                background: `linear-gradient(90deg, transparent 0%, ${p.accentColor}aa 50%, transparent 100%)`,
                boxShadow: `0 0 15px ${p.accentColor}aa`,
                animation: "demoScanMove 3.5s linear infinite",
                zIndex: 3, pointerEvents: "none",
              }} />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", display: "flex", gap: "0.6rem", alignItems: "center", zIndex: 5 }}
              >
                <span style={{ 
                  fontFamily: "'JetBrains Mono', monospace", 
                  fontSize: "1.08rem", 
                  color: isLight ? "#121212" : "#ffffff", 
                  letterSpacing: "0.1em", 
                  mixBlendMode: isLight ? "normal" : "difference" 
                }}>CLICK TO EXPLORE →</span>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Body */}
      <div style={{ padding: isLarge ? "2.8rem" : "1.8rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: p.accentColor, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.6rem" }}>{p.year} · {p.role}</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: isLarge ? "2.2rem" : "1.4rem", lineHeight: 1.05, marginBottom: "0.3rem", color: "var(--cream)" }}>{p.name}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", marginBottom: "1rem" }}>{p.subtitle}</div>
        <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.85, marginBottom: "1.4rem", maxWidth: "480px" }}>{p.desc}</p>
        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.4rem" }}>
          {p.stack.slice(0, isLarge ? 7 : 4).map(t => (
            <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.22rem 0.6rem", border: `1px solid ${p.accentColor}44`, color: p.accentColor, background: `${p.accentColor}0d` }}>{t}</span>
          ))}
          {p.stack.length > (isLarge ? 7 : 4) && (
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", padding: "0.22rem 0.6rem", color: "var(--dim)", border: "1px dashed var(--border)" }}>+{p.stack.length - (isLarge ? 7 : 4)}</span>
          )}
        </div>
        {/* Metrics row */}
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {p.metrics.map((m, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: p.accentColor, display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)" }}>{m}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [filter, setFilter] = useState("All");
  const [selectedProj, setSelectedProj] = useState(null);
  const [activeTab, setActiveTab] = useState("desc");
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") { setSelectedProj(null); document.body.classList.remove("drawer-open"); } };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useEffect(() => {
    if (selectedProj) {
      setActiveVideoSrc(selectedProj.video);
    } else {
      setActiveVideoSrc(null);
    }
  }, [selectedProj]);

  useEffect(() => {
    if (!selectedProj) return;
    const observerOptions = {
      root: document.querySelector('.drawer-body-content'),
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id.replace('sec-', '');
          setActiveTab(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ['sec-desc', 'sec-features', 'sec-architecture', 'sec-metrics', 'sec-gallery'];
    
    const timer = setTimeout(() => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [selectedProj]);

  return (
    <PageTransition>
      <div className="page-wrapper">
        <section>
          <div className="section-inner">

            {/* Header */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: "4rem" }}>
              <div className="section-label">Selected Work</div>
              <h1 className="section-title" style={{ marginBottom: "1rem" }}>
                Real systems. <em>Real impact.</em>
              </h1>
              <p style={{ color: "var(--muted)", maxWidth: "550px", lineHeight: 1.8, fontSize: "0.82rem" }}>
                Production-shipped projects across SaaS, fintech, AI, and e-commerce. Click any card for architecture deep-dives.
              </p>
            </motion.div>

            {/* Counter Strip */}
            <motion.div
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              style={{ display: "flex", gap: "0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: "3rem" }}
            >
              {[["4", "Projects Shipped"], ["2+", "Years Experience"], ["5+", "Tech Stacks"], ["2×", "Azure Certified"]].map(([n, l]) => (
                <div key={l} style={{ flex: 1, padding: "1.5rem 2rem", borderRight: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: "2rem", background: "linear-gradient(135deg, var(--purple-light), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{n}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.2rem" }}>{l}</div>
                </div>
              ))}
            </motion.div>

            {/* Filter Tabs */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.5rem 1.2rem",
                    border: `1px solid ${filter === f ? "var(--purple-light)" : "var(--border)"}`,
                    background: filter === f ? "rgba(155,93,229,0.12)" : "transparent",
                    color: filter === f ? "var(--purple-light)" : "var(--dim)",
                    cursor: "pointer",
                    transition: "all 0.22s"
                  }}
                >
                  {f}
                </button>
              ))}
            </motion.div>

            {/* Bento Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}
                className="work-bento"
              >
                 {filtered.map((p, idx) => (
                  <div key={p.id} style={{ gridColumn: p.size === "large" ? "1 / -1" : "auto", background: "var(--bg)" }}>
                    <ProjectCard p={p} idx={idx} isLight={isLight} onClick={() => { setSelectedProj(p); setActiveTab("desc"); }} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "5rem 0", color: "var(--dim)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem" }}>
                No projects in this category yet.
              </div>
            )}
          </div>
        </section>

        {/* Slide Drawer */}
        <AnimatePresence>
          {selectedProj && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="drawer-container"
              onAnimationStart={() => document.body.classList.add("drawer-open")}
              onAnimationComplete={(def) => { if (def === "exit") document.body.classList.remove("drawer-open"); }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 2000,
                background: "var(--drawer-backdrop)",
                backdropFilter: "blur(18px)",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                overflowX: "hidden"
              }}
            >
              {/* Floating Close Button */}
              <button
                onClick={() => { setSelectedProj(null); document.body.classList.remove("drawer-open"); }}
                style={{
                  position: "fixed",
                  top: "1.5rem",
                  right: "1.5rem",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(18,18,18,0.85)",
                  border: "1px solid var(--border)",
                  color: "var(--cream)",
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                  zIndex: 2100,
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = selectedProj.accentColor; e.currentTarget.style.color = selectedProj.accentColor; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--cream)"; }}
              >
                ✕
              </button>

              {/* TOP ROW: Left = Video, Right = Purpose + Metrics */}
              <div style={{ display: "flex", flexDirection: "row", flexShrink: 0, borderBottom: "1px solid var(--border)" }}>

              {/* LEFT: Video + Title + Stack */}
              <motion.div
                className="drawer-video-side"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 16 }}
                style={{
                  flex: 1.1,
                  background: "var(--bg)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem 2.5rem",
                  borderRight: "1px solid var(--border)",
                  position: "relative"
                }}
              >
                {/* Title Block */}
                <div style={{ marginBottom: "1rem" }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.82rem",
                    letterSpacing: "0.15em",
                    padding: "0.3rem 0.8rem",
                    background: selectedProj.badgeGradient,
                    color: "white",
                    display: "inline-block",
                    marginBottom: "0.6rem",
                    borderRadius: "2px"
                  }}>
                    {selectedProj.badge}
                  </span>
                  <h2 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    lineHeight: 1.1,
                    color: "var(--cream)",
                    margin: "0 0 0.3rem 0",
                    letterSpacing: "-0.03em"
                  }}>
                    {selectedProj.name}
                  </h2>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "1rem",
                    color: selectedProj.accentColor
                  }}>
                    // {selectedProj.subtitle}
                  </div>
                </div>

                {/* Mockup Video Player */}
                <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
                  {/* Browser mockup container */}
                  <div style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: `1px solid ${selectedProj.accentColor}33`,
                    background: "#121212",
                    boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 20px ${selectedProj.accentColor}11`
                  }}>
                    {/* Browser Header dots */}
                    <div style={{ display: "flex", gap: "5px", padding: "0.6rem 0.8rem", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
                      <div style={{ flex: 1, textAlign: "center", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.5rem", color: "var(--dim)" }}>
                        preview.divyanshi.dev
                      </div>
                    </div>
                    <video
                      key={activeVideoSrc}
                      src={activeVideoSrc || selectedProj.video}
                      autoPlay loop muted playsInline
                      style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  {/* Video Selector Toggle if project has multi-video */}
                  {selectedProj.videoAdmin && (
                    <div
                      className="desktop-video-toggle"
                      style={{
                        display: "inline-flex",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid var(--border)",
                        borderRadius: "100px",
                        padding: "0.25rem",
                        gap: "0.25rem",
                        marginTop: "1rem",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <button
                        onClick={() => setActiveVideoSrc(selectedProj.video)}
                        style={{
                          background: activeVideoSrc === selectedProj.video ? "rgba(255, 255, 255, 0.08)" : "transparent",
                          color: activeVideoSrc === selectedProj.video ? "var(--cream)" : "var(--dim)",
                          border: "none",
                          borderRadius: "100px",
                          padding: "0.4rem 1rem",
                          fontSize: "0.78rem",
                          fontFamily: "'JetBrains Mono', monospace",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        Storefront
                      </button>
                      <button
                        onClick={() => setActiveVideoSrc(selectedProj.videoAdmin)}
                        style={{
                          background: activeVideoSrc === selectedProj.videoAdmin ? "rgba(255, 255, 255, 0.08)" : "transparent",
                          color: activeVideoSrc === selectedProj.videoAdmin ? "var(--cream)" : "var(--dim)",
                          border: "none",
                          borderRadius: "100px",
                          padding: "0.4rem 1rem",
                          fontSize: "0.78rem",
                          fontFamily: "'JetBrains Mono', monospace",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                      >
                        Admin Panel
                      </button>
                    </div>
                  )}
                </div>

                {/* Tech Stack Section */}
                <div style={{ marginTop: "1rem" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.6rem" }}>// Tech Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {selectedProj.stack.map(t => (
                      <span key={t} style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.82rem",
                        padding: "0.3rem 0.65rem",
                        border: `1px solid ${selectedProj.accentColor}33`,
                        color: selectedProj.accentColor,
                        background: `${selectedProj.accentColor}0a`,
                        borderRadius: "2px"
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Purpose + Key Metrics */}
              <motion.div
                className="drawer-info-side"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 16 }}
                style={{
                  flex: 1,
                  background: "var(--drawer-panel-bg)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem 2.5rem"
                }}
              >
                {/* Purpose */}
                <div style={{ marginBottom: "1.8rem" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.6rem" }}>// Purpose</div>
                  <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.85, margin: "0 0 0.8rem 0" }}>
                    {selectedProj.desc}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border)", padding: "0.8rem", borderRadius: "4px" }}>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)", textTransform: "uppercase" }}>Role</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "var(--cream)" }}>{selectedProj.role}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)", textTransform: "uppercase" }}>Year</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "var(--cream)" }}>{selectedProj.year}</div>
                    </div>
                  </div>
                </div>

                {/* Key Performance Metrics */}
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.8rem" }}>// Key Performance Metrics</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {selectedProj.metrics.map((m, i) => (
                      <div key={i} style={{ display: "flex", gap: "0.8rem", alignItems: "center", padding: "0.8rem 1rem", background: "var(--surface)", border: `1px solid ${selectedProj.accentColor}33` }}>
                        <span style={{ fontSize: "1rem" }}>⚡</span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--cream)" }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              </div>{/* END TOP ROW */}

              {/* BOTTOM: Full-width scrollable details */}
              <motion.div
                className="drawer-panel-main"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                style={{
                  background: "var(--drawer-panel-bg)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  zIndex: 2002
                }}
              >
                {/* Tabs */}
                <div style={{ display: "flex", borderBottom: "1px solid var(--border)", padding: "0 2.5rem", gap: "1.5rem", flexShrink: 0, overflowX: "auto" }}>
                  {[
                    { id: "desc", label: "Description" },
                    { id: "features", label: "Features" },
                    { id: "architecture", label: "Architecture" },
                    { id: "gallery", label: "Gallery" }
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setActiveTab(t.id);
                        const el = document.getElementById(`sec-${t.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }}
                      style={{
                        padding: "0.9rem 0",
                        background: "none",
                        border: "none",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.78rem",
                        textTransform: "uppercase",
                        color: activeTab === t.id ? "var(--purple-light)" : "var(--dim)",
                        cursor: "pointer",
                        position: "relative",
                        transition: "color 0.2s",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {t.label}
                      {activeTab === t.id && (
                        <motion.div
                          layoutId="dtab"
                          style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: selectedProj.accentColor }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Body Content */}
                <div
                  className="drawer-body-content"
                  style={{ padding: "2rem 2.5rem", fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85 }}
                >

                  {/* Section: Description */}
                  <div id="sec-desc" style={{ scrollMarginTop: "1.5rem" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      color: "var(--cream)",
                      marginBottom: "1.2rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      paddingBottom: "0.6rem",
                    }}>
                      <span style={{ color: selectedProj.accentColor }}>//</span> CASE STUDY DESCRIPTION
                    </div>
                    <p style={{ margin: 0, color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>
                      {selectedProj.longDesc}
                    </p>
                  </div>

                  {/* Section: Features */}
                  <div id="sec-features" style={{ scrollMarginTop: "1.5rem", marginTop: "2.5rem" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      color: "var(--cream)",
                      marginBottom: "1.2rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      paddingBottom: "0.6rem",
                    }}>
                      <span style={{ color: selectedProj.accentColor }}>//</span> CORE IMPLEMENTED FEATURES
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                      {selectedProj.features?.map((feat, idx) => (
                        <div key={idx} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.03)", padding: "0.8rem 1rem", borderRadius: "2px" }}>
                          <span style={{ color: selectedProj.accentColor, fontSize: "0.82rem", lineHeight: 1.2 }}>✦</span>
                          <span style={{ fontSize: "1.08rem", color: "var(--muted)" }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section: Architecture */}
                  <div id="sec-architecture" style={{ scrollMarginTop: "1.5rem", marginTop: "2.5rem" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      color: "var(--cream)",
                      marginBottom: "1.2rem",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      paddingBottom: "0.6rem",
                    }}>
                      <span style={{ color: selectedProj.accentColor }}>//</span> ARCHITECTURE & WORKFLOW
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                      {[
                        selectedProj.id === "zinkr" && ["Client", "React UI with geolocation APIs and real-time updates"],
                        selectedProj.id === "zinkr" && ["API Layer", "ASP.NET Core Web API with custom middleware, rate-limiting"],
                        selectedProj.id === "zinkr" && ["Auth", "Google OAuth2 + JWT session tokens with refresh pipelines"],
                        selectedProj.id === "zinkr" && ["Data", "EF Core → SQL Server with Redis hot-user cache cluster"],
                        selectedProj.id === "zinkr" && ["Real-time", "WebSocket channels for match notifications and chat"],
                        selectedProj.id === "inventory" && ["Frontend", "Angular 18 with lazy-loaded feature modules and RxJS"],
                        selectedProj.id === "inventory" && ["API", "Clean .NET 7 controller architecture with RBAC middleware"],
                        selectedProj.id === "inventory" && ["DB", "SQL Server with transactional stored procedures"],
                        selectedProj.id === "inventory" && ["Hosting", "Azure Web Apps + SQL Azure + Azure DevOps CI/CD"],
                        selectedProj.id === "wellness" && ["API Engine", "FastAPI (ASGI) with async PostgreSQL pools"],
                        selectedProj.id === "wellness" && ["ML Pipeline", "Scikit-Learn K-Means clustering for user segmentation"],
                        selectedProj.id === "wellness" && ["Task Queue", "Celery workers processing telemetry off main thread"],
                        selectedProj.id === "wellness" && ["Cache", "Redis for serving instant profile metric responses"],
                        selectedProj.id === "bellezbuy" && ["Frontend", "React SPA with cart state management"],
                        selectedProj.id === "bellezbuy" && ["Backend", "Node.js + Express decoupled REST routes"],
                        selectedProj.id === "bellezbuy" && ["Payments", "Razorpay API with cryptographic webhook signature checks"],
                        selectedProj.id === "bellezbuy" && ["Email", "Brevo Transactional API for instant PDF invoice delivery"],
                        selectedProj.id === "azure-microservices" && ["Ingestion", "Azure Event Hub/Service Bus parsing concurrent telemetry payloads"],
                        selectedProj.id === "azure-microservices" && ["Compute", "Serverless Azure Functions scaling execution nodes on-demand"],
                        selectedProj.id === "azure-microservices" && ["Database", "Cosmos DB multi-region writes for distributed replication"],
                        selectedProj.id === "azure-microservices" && ["Infrastructure", "Terraform modules defining reproducible environment resources"],
                        selectedProj.id === "iot-telemetry" && ["Broker", "MQTT Server listening to telemetry channels of 500+ remote devices"],
                        selectedProj.id === "iot-telemetry" && ["Buffer", "Redis Streams buffering spikes in signal data packets"],
                        selectedProj.id === "iot-telemetry" && ["Ingestion API", "FastAPI server running asynchronous worker processes"],
                        selectedProj.id === "iot-telemetry" && ["Storage", "InfluxDB optimized for time-series metrics data querying"],
                      ].filter(Boolean).map(([label, desc], i) => (
                        <div key={i} style={{ display: "flex", gap: "1rem", background: "var(--surface)", border: "1px solid var(--border)", padding: "1rem" }}>
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: selectedProj.accentColor, fontWeight: 700, minWidth: "80px", flexShrink: 0 }}>{label}</span>
                          <span style={{ fontSize: "1.08rem" }}>{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section: Gallery */}
                  {selectedProj.screenshots && selectedProj.screenshots.length > 0 && (
                    <div id="sec-gallery" style={{ scrollMarginTop: "1.5rem", marginTop: "2.5rem" }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: "0.82rem",
                        color: "var(--cream)",
                        marginBottom: "1.2rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        paddingBottom: "0.6rem",
                      }}>
                        <span style={{ color: selectedProj.accentColor }}>//</span> PROJECT GALLERY & SCREENSHOTS
                      </div>
                      
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                        {selectedProj.screenshots.map((s, i) => (
                          <div
                            key={i}
                            style={{
                              position: "relative",
                              overflow: "hidden",
                              border: "1px solid var(--border)",
                              borderRadius: "4px",
                              aspectRatio: "16/10",
                              background: "rgba(0,0,0,0.2)"
                            }}
                          >
                            <img
                              src={s}
                              alt={`Screenshot ${i + 1}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.4s ease-out, filter 0.3s"
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.transform = "scale(1.06)";
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            />
                            {/* HUD border decoration on hover */}
                            <div style={{ position: "absolute", inset: 0, border: `1px solid ${selectedProj.accentColor}33`, pointerEvents: "none" }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Discussion Button */}
                <div style={{ padding: "1rem 2.5rem", borderTop: "1px solid var(--border)", flexShrink: 0, background: "var(--bg2)" }}>
                  <Link to="/contact" onClick={() => setSelectedProj(null)} className="btn-primary" style={{ width: "100%", display: "block", textAlign: "center" }}>
                    <span>Discuss This Project →</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          .work-bento { grid-template-columns: 1fr 1fr; }
          @keyframes pulse-dot {
            0%, 100% { opacity: 0.35; transform: scale(0.9); }
            50%      { opacity: 1; transform: scale(1.2); }
          }
          @keyframes hudBar {
            0%   { height: 3px; }
            100% { height: 18px; }
          }
          body.drawer-open nav { display: none !important; }
          .drawer-container {
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          @media (max-width: 900px) {
            .work-bento { grid-template-columns: 1fr !important; }
            .work-bento > div { grid-column: auto !important; }
            .desktop-video-toggle { display: none !important; }
            .drawer-container { overflow-y: auto !important; }
            .drawer-container > div:first-of-type {
              flex-direction: column !important;
              height: auto !important;
            }
            .drawer-video-side {
              border-right: none !important;
              border-bottom: 1px solid var(--border) !important;
            }
            .drawer-panel-main { flex: none !important; }
          }
        `}</style>
      </div>
    </PageTransition>
  );
}
