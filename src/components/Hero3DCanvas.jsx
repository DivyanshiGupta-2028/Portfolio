import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef(null);
  const [webGLFailed, setWebGLFailed] = useState(false);
  const [activeNode, setActiveNode] = useState(null);

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
      camera.position.set(0, 0, 14);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Group holding the entire rotating system
      const systemGroup = new THREE.Group();
      scene.add(systemGroup);

      // Core: Inner Glowing Icosahedron
      const coreGeo = new THREE.IcosahedronGeometry(2.3, 2);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x48e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.75,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      systemGroup.add(coreMesh);

      // Inner dense glowing sphere
      const innerSphereGeo = new THREE.SphereGeometry(1.4, 24, 24);
      const innerSphereMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cff,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
      systemGroup.add(innerSphere);

      // Multi-Axis Orbital Rings
      const createRing = (radius, tiltX, tiltY, colorHex) => {
        const ringGeo = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: colorHex,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.45,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = tiltX;
        ringMesh.rotation.y = tiltY;
        return ringMesh;
      };

      const ring1 = createRing(4.2, Math.PI / 3, 0.2, 0x48e5ff);
      const ring2 = createRing(5.2, -Math.PI / 4, Math.PI / 6, 0x8b5cff);
      const ring3 = createRing(6.0, Math.PI / 6, -Math.PI / 5, 0x22d3ee);
      systemGroup.add(ring1);
      systemGroup.add(ring2);
      systemGroup.add(ring3);

      // Ambient Particle Cloud
      const particleCount = 180;
      const particleGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        const r = 3 + Math.random() * 5.5;
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
        opacity: 0.8,
      });
      const particlePoints = new THREE.Points(particleGeo, particleMat);
      systemGroup.add(particlePoints);

      // Orbiting Satellites with Labels
      const techNodes = [
        { name: ".NET", radius: 4.4, speed: 0.55, offset: 0, color: "#8b5cff" },
        { name: "SQL", radius: 4.4, speed: 0.55, offset: Math.PI, color: "#48e5ff" },
        { name: "React", radius: 5.3, speed: 0.42, offset: (Math.PI * 2) / 3, color: "#48e5ff" },
        { name: "Node.js", radius: 5.3, speed: 0.42, offset: (Math.PI * 5) / 3, color: "#10b981" },
        { name: "Angular", radius: 6.1, speed: 0.32, offset: Math.PI / 4, color: "#ef4444" },
        { name: "AI / FastAPI", radius: 6.1, speed: 0.32, offset: (Math.PI * 5) / 4, color: "#a855f7" },
      ];

      const satelliteMeshes = techNodes.map((tech) => {
        const group = new THREE.Group();

        // Satellite glowing dot
        const dotGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: tech.color });
        const dotMesh = new THREE.Mesh(dotGeo, dotMat);
        group.add(dotMesh);

        // Satellite outer pulse ring
        const ringGeo = new THREE.RingGeometry(0.24, 0.28, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: tech.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        group.add(ringMesh);

        // Billboard Canvas Sprite for Text Label
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(7, 10, 18, 0.85)";
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
        sprite.position.set(0, 0.5, 0);
        group.add(sprite);

        systemGroup.add(group);
        return { group, tech };
      });

      // Pointer tracking for subtle 3D tilt
      let mouseX = 0;
      let mouseY = 0;
      let targetRotX = 0;
      let targetRotY = 0;

      const handlePointerMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX = x * 0.8;
        mouseY = y * 0.8;
      };

      window.addEventListener("pointermove", handlePointerMove);

      // Resize listener
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

        // Parallax damping
        targetRotY += (mouseX - targetRotY) * 0.05;
        targetRotX += (mouseY - targetRotX) * 0.05;

        // Core ambient rotation + pointer parallax
        coreMesh.rotation.y = elapsed * 0.35;
        coreMesh.rotation.x = elapsed * 0.2;
        innerSphere.rotation.y = -elapsed * 0.45;

        ring1.rotation.z = elapsed * 0.2;
        ring2.rotation.z = -elapsed * 0.15;
        ring3.rotation.z = elapsed * 0.12;

        particlePoints.rotation.y = elapsed * 0.08;

        // Update satellite orbital positions
        satelliteMeshes.forEach(({ group, tech }) => {
          const angle = elapsed * tech.speed + tech.offset;
          group.position.x = Math.cos(angle) * tech.radius;
          group.position.y = Math.sin(angle) * (tech.radius * 0.4);
          group.position.z = Math.sin(angle * 1.5) * (tech.radius * 0.5);
        });

        systemGroup.rotation.y = targetRotY * 0.6;
        systemGroup.rotation.x = targetRotX * 0.6;

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
        coreGeo.dispose();
        coreMat.dispose();
        innerSphereGeo.dispose();
        innerSphereMat.dispose();
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
        height: "520px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 2,
        }}
      />

      {/* Atmospheric radial glow backdrop */}
      <div
        style={{
          position: "absolute",
          inset: "10%",
          background: "radial-gradient(circle, rgba(72, 229, 255, 0.15) 0%, rgba(139, 92, 255, 0.1) 45%, transparent 70%)",
          filter: "blur(35px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* WebGL Fallback if device doesn't support WebGL */}
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

      {/* HUD System Overlay Badges */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.75rem",
          background: "rgba(7, 10, 18, 0.85)",
          padding: "0.4rem 1rem",
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
        <span style={{ color: "#48e5ff" }}>● LIVE 3D ORBIT</span>
        <span>|</span>
        <span>DRAG / HOVER TO EXPLORE CORE</span>
      </div>
    </div>
  );
}
