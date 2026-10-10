import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvasTest = document.createElement("canvas");
    const gl = canvasTest.getContext("webgl") || canvasTest.getContext("experimental-webgl");
    if (!gl) {
      setWebGLFailed(true);
      return;
    }

    let animationFrameId;
    let renderer, scene, camera;

    try {
      const width = container.clientWidth || 550;
      const height = container.clientHeight || 550;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 15);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // System group holding all 3D elements
      const systemGroup = new THREE.Group();
      scene.add(systemGroup);

      // ── PRODUCT.INC INSPIRED 3D DOT-MATRIX DIGITAL GLOBE ──
      const globeRadius = 2.8;
      const dotCount = 1400;
      const globeDotGeo = new THREE.BufferGeometry();
      const globePositions = new Float32Array(dotCount * 3);
      const globeColors = new Float32Array(dotCount * 3);

      const colorCyan = new THREE.Color(0x48e5ff);
      const colorPurple = new THREE.Color(0x8b5cff);
      const colorAmber = new THREE.Color(0xf59e0b);

      for (let i = 0; i < dotCount; i++) {
        // Fibonacci sphere point distribution
        const phi = Math.acos(1 - 2 * (i + 0.5) / dotCount);
        const theta = Math.PI * (1 + 5 ** 0.5) * i;

        const x = globeRadius * Math.sin(phi) * Math.cos(theta);
        const y = globeRadius * Math.sin(phi) * Math.sin(theta);
        const z = globeRadius * Math.cos(phi);

        globePositions[i * 3] = x;
        globePositions[i * 3 + 1] = y;
        globePositions[i * 3 + 2] = z;

        // Gradient interpolation
        const mixRatio = (y + globeRadius) / (globeRadius * 2);
        const col = mixRatio > 0.65
          ? colorCyan.clone().lerp(colorAmber, (mixRatio - 0.65) * 2.8)
          : colorPurple.clone().lerp(colorCyan, mixRatio / 0.65);

        globeColors[i * 3] = col.r;
        globeColors[i * 3 + 1] = col.g;
        globeColors[i * 3 + 2] = col.b;
      }

      globeDotGeo.setAttribute("position", new THREE.BufferAttribute(globePositions, 3));
      globeDotGeo.setAttribute("color", new THREE.BufferAttribute(globeColors, 3));

      const globeDotMat = new THREE.PointsMaterial({
        size: 0.085,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });

      const globeDots = new THREE.Points(globeDotGeo, globeDotMat);
      systemGroup.add(globeDots);

      // Central crystalline sculpture
      const coreOuterGeo = new THREE.IcosahedronGeometry(1.6, 2);
      const coreOuterMat = new THREE.MeshBasicMaterial({
        color: 0x48e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const coreOuter = new THREE.Mesh(coreOuterGeo, coreOuterMat);
      systemGroup.add(coreOuter);

      // Inner refractive marble sphere
      const coreInnerGeo = new THREE.SphereGeometry(1.1, 24, 24);
      const coreInnerMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cff,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const coreInner = new THREE.Mesh(coreInnerGeo, coreInnerMat);
      systemGroup.add(coreInner);

      // Pulsing center singularity
      const centerPointGeo = new THREE.OctahedronGeometry(0.5, 0);
      const centerPointMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        wireframe: true,
      });
      const centerPoint = new THREE.Mesh(centerPointGeo, centerPointMat);
      systemGroup.add(centerPoint);

      // ── MULTI-AXIS ATOMIC ORBITAL RINGS ──
      const createOrbitRing = (radius, tiltX, tiltY, tiltZ, colorHex) => {
        const curve = new THREE.EllipseCurve(
          0, 0,             // ax, aY
          radius, radius * 0.75, // xRadius, yRadius (elliptical atom feel)
          0, 2 * Math.PI,   // aStartAngle, aEndAngle
          false,            // aClockwise
          0                 // aRotation
        );
        const points = curve.getPoints(100);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: colorHex,
          transparent: true,
          opacity: 0.45,
        });
        const line = new THREE.Line(geometry, material);
        line.rotation.x = tiltX;
        line.rotation.y = tiltY;
        line.rotation.z = tiltZ;
        return line;
      };

      const ring1 = createOrbitRing(4.5, Math.PI / 3, 0.2, 0.4, 0x48e5ff);
      const ring2 = createOrbitRing(5.4, -Math.PI / 3.5, Math.PI / 5, -0.3, 0x8b5cff);
      const ring3 = createOrbitRing(6.2, Math.PI / 6, -Math.PI / 4, 0.6, 0x38bdf8);
      systemGroup.add(ring1);
      systemGroup.add(ring2);
      systemGroup.add(ring3);

      // ── AMBIENT CELESTIAL PARTICLES ──
      const particleCount = 220;
      const particleGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const r = 2.5 + Math.random() * 5.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        posArray[i] = r * Math.sin(phi) * Math.cos(theta);
        posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[i + 2] = r * Math.cos(phi);
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.08,
        color: 0x48e5ff,
        transparent: true,
        opacity: 0.75,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      systemGroup.add(particles);

      // ── ORBITING TECH NODES WITH HIGH-TECH BILLBOARDS ──
      const techNodes = [
        { name: ".NET", radius: 4.5, speed: 0.55, offset: 0, color: "#8b5cff" },
        { name: "SQL Server", radius: 4.5, speed: 0.55, offset: Math.PI, color: "#48e5ff" },
        { name: "React", radius: 5.4, speed: 0.42, offset: (Math.PI * 2) / 3, color: "#38bdf8" },
        { name: "Node.js", radius: 5.4, speed: 0.42, offset: (Math.PI * 5) / 3, color: "#10b981" },
        { name: "Angular", radius: 6.2, speed: 0.32, offset: Math.PI / 4, color: "#ef4444" },
        { name: "FastAPI / AI", radius: 6.2, speed: 0.32, offset: (Math.PI * 5) / 4, color: "#c084fc" },
      ];

      const satelliteMeshes = techNodes.map((tech) => {
        const group = new THREE.Group();

        // Node center marker
        const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const nodeMat = new THREE.MeshBasicMaterial({ color: tech.color });
        const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        group.add(nodeMesh);

        // Node outer energy ring
        const ringGeo = new THREE.RingGeometry(0.24, 0.28, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: tech.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7,
        });
        const rMesh = new THREE.Mesh(ringGeo, ringMat);
        group.add(rMesh);

        // Text Badge Billboard
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(7, 10, 18, 0.9)";
        ctx.strokeStyle = tech.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(8, 8, 240, 48, 12);
        ctx.fill();
        ctx.stroke();

        ctx.font = "bold 24px 'Space Grotesk', sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tech.name, 128, 32);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.set(1.4, 0.35, 1);
        sprite.position.set(0, 0.48, 0);
        group.add(sprite);

        systemGroup.add(group);
        return { group, tech };
      });

      // Pointer Parallax
      let mouseX = 0, mouseY = 0;
      let targetRotX = 0, targetRotY = 0;

      const handlePointerMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX = x * 0.9;
        mouseY = y * 0.9;
      };

      window.addEventListener("pointermove", handlePointerMove);

      const handleResize = () => {
        if (!container) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };
      window.addEventListener("resize", handleResize);

      // Render Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Smooth parallax damping
        targetRotY += (mouseX - targetRotY) * 0.05;
        targetRotX += (mouseY - targetRotX) * 0.05;

        // Globe dot-matrix rotation
        globeDots.rotation.y = elapsed * 0.14;
        globeDots.rotation.x = Math.sin(elapsed * 0.2) * 0.08;

        // Core ambient rotations
        coreOuter.rotation.y = elapsed * 0.3;
        coreOuter.rotation.x = elapsed * 0.15;
        coreInner.rotation.y = -elapsed * 0.4;
        centerPoint.rotation.z = elapsed * 0.5;
        centerPoint.rotation.x = elapsed * 0.5;

        ring1.rotation.z = elapsed * 0.2;
        ring2.rotation.z = -elapsed * 0.15;
        ring3.rotation.z = elapsed * 0.12;

        particles.rotation.y = elapsed * 0.06;

        // Update orbiting satellites
        satelliteMeshes.forEach(({ group, tech }) => {
          const angle = elapsed * tech.speed + tech.offset;
          group.position.x = Math.cos(angle) * tech.radius;
          group.position.y = Math.sin(angle) * (tech.radius * 0.45);
          group.position.z = Math.sin(angle * 1.4) * (tech.radius * 0.5);
        });

        systemGroup.rotation.y = targetRotY * 0.55;
        systemGroup.rotation.x = targetRotX * 0.55;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("resize", handleResize);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
        coreOuterGeo.dispose();
        coreOuterMat.dispose();
        coreInnerGeo.dispose();
        coreInnerMat.dispose();
        centerPointGeo.dispose();
        centerPointMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization failed:", err);
      setWebGLFailed(true);
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "530px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 2,
        }}
      />

      {/* Atmospheric depth glow */}
      <div
        style={{
          position: "absolute",
          inset: "15%",
          background: "radial-gradient(circle, rgba(72, 229, 255, 0.16) 0%, rgba(139, 92, 255, 0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* WebGL Fallback */}
      {webGLFailed && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(12, 18, 34, 0.8)",
            border: "1px solid rgba(72, 229, 255, 0.2)",
            borderRadius: "20px",
            padding: "2rem",
            textAlign: "center",
            zIndex: 3,
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "2px dashed #48e5ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "spin 20s linear infinite",
              marginBottom: "1.5rem",
              boxShadow: "0 0 30px rgba(72, 229, 255, 0.3)",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #48e5ff, #8b5cff)",
                boxShadow: "0 0 20px #48e5ff",
              }}
            />
          </div>
          <h4 style={{ fontFamily: "Space Grotesk", color: "#48e5ff", marginBottom: "0.5rem" }}>
            ARCHITECTURAL SYSTEM CORE
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", maxWidth: "340px" }}>
            Connected backend engineering engine: .NET · SQL Server · React · Node.js · Angular · AI / FastAPI
          </p>
        </div>
      )}

      {/* HUD System Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.75rem",
          background: "rgba(7, 10, 18, 0.85)",
          padding: "0.4rem 1.1rem",
          borderRadius: "999px",
          border: "1px solid rgba(72, 229, 255, 0.2)",
          backdropFilter: "blur(10px)",
          zIndex: 3,
          fontSize: "0.75rem",
          fontFamily: "'JetBrains Mono', monospace",
          color: "#94a3b8",
          pointerEvents: "none",
        }}
      >
        <span style={{ color: "#48e5ff" }}>● ATOM 3D REALM</span>
        <span>|</span>
        <span>HOVER / DRAG TO ROTATE SYSTEM</span>
      </div>
    </div>
  );
}
