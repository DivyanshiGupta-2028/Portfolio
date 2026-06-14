import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "ASP.NET Core",
    "Angular 19",
    "FastAPI · Python",
    "React.js",
    "Node.js · Express",
    "C# · TypeScript",
    "SQL Server",
    "Azure DevOps",
    "Docker · CI/CD",
    "JWT · OAuth2",
    "AI / ML Pipelines",
    "Microservices",
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        padding: "1.2rem 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        background: "var(--bg2)",
      }}
    >
      <motion.div
        animate={{ x: [0, -1035] }} // Approximation of width, works better with pure CSS keyframes if dynamic width is an issue
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        style={{
          display: "flex",
          gap: "3rem",
          width: "max-content",
        }}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.82rem",
              color: "var(--muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "var(--teal)", fontSize: "0.82rem" }}>◆</span>{" "}
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
