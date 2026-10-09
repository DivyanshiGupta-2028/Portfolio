import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Workstation3DCanvas() {
  const containerRef = useRef(null);
  const [activeItem, setActiveItem] = useState("Dual UltraWide Displays");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let renderer, scene, camera;

    try {
      const width = container.clientWidth || 550;
      const height = container.clientHeight || 480;

      scene = new THREE.Scene();

      // Isometric-style perspective camera
      camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.set(9, 7, 10);
      camera.lookAt(0, 0.5, 0);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const deskGroup = new THREE.Group();
      scene.add(deskGroup);

      // ── DESK SURFACE ──
      const deskGeo = new THREE.BoxGeometry(6.5, 0.25, 4.2);
      const deskMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
      const desk = new THREE.Mesh(deskGeo, deskMat);
      desk.position.set(0, -0.12, 0);
      deskGroup.add(desk);

      // Desk glowing edge line
      const deskEdgeGeo = new THREE.BoxGeometry(6.52, 0.05, 4.22);
      const deskEdgeMat = new THREE.MeshBasicMaterial({ color: 0x48e5ff, wireframe: true });
      const deskEdge = new THREE.Mesh(deskEdgeGeo, deskEdgeMat);
      deskEdge.position.set(0, -0.12, 0);
      deskGroup.add(deskEdge);

      // ── DUAL ULTRAWIDE MONITORS ──
      // Main Center Monitor
      const monitor1Geo = new THREE.BoxGeometry(2.8, 1.6, 0.08);
      const monitor1Mat = new THREE.MeshBasicMaterial({ color: 0x070a12 });
      const monitor1 = new THREE.Mesh(monitor1Geo, monitor1Mat);
      monitor1.position.set(-0.6, 1.2, -0.9);
      monitor1.rotation.y = 0.08;
      deskGroup.add(monitor1);

      // Main Monitor Screen (Cyan Code Glow)
      const screen1Geo = new THREE.PlaneGeometry(2.65, 1.45);
      const screen1Mat = new THREE.MeshBasicMaterial({ color: 0x48e5ff, wireframe: true });
      const screen1 = new THREE.Mesh(screen1Geo, screen1Mat);
      screen1.position.set(-0.6, 1.2, -0.85);
      screen1.rotation.y = 0.08;
      deskGroup.add(screen1);

      // Secondary Vertical Monitor (Purple Code Stream)
      const monitor2Geo = new THREE.BoxGeometry(1.2, 2.2, 0.08);
      const monitor2Mat = new THREE.MeshBasicMaterial({ color: 0x070a12 });
      const monitor2 = new THREE.Mesh(monitor2Geo, monitor2Mat);
      monitor2.position.set(1.5, 1.4, -0.6);
      monitor2.rotation.y = -0.35;
      deskGroup.add(monitor2);

      const screen2Geo = new THREE.PlaneGeometry(1.08, 2.05);
      const screen2Mat = new THREE.MeshBasicMaterial({ color: 0x8b5cff, wireframe: true });
      const screen2 = new THREE.Mesh(screen2Geo, screen2Mat);
      screen2.position.set(1.5, 1.4, -0.55);
      screen2.rotation.y = -0.35;
      deskGroup.add(screen2);

      // Monitor Stands
      const stand1Geo = new THREE.CylinderGeometry(0.06, 0.06, 0.8, 12);
      const stand1Mat = new THREE.MeshBasicMaterial({ color: 0x334155 });
      const stand1 = new THREE.Mesh(stand1Geo, stand1Mat);
      stand1.position.set(-0.6, 0.4, -0.9);
      deskGroup.add(stand1);

      const stand2Geo = new THREE.CylinderGeometry(0.06, 0.06, 0.8, 12);
      const stand2 = new THREE.Mesh(stand2Geo, stand1Mat);
      stand2.position.set(1.5, 0.4, -0.6);
      deskGroup.add(stand2);

      // ── MECHANICAL KEYBOARD & MOUSEPAD ──
      const matGeo = new THREE.BoxGeometry(3.6, 0.02, 1.6);
      const matMesh = new THREE.Mesh(matGeo, new THREE.MeshBasicMaterial({ color: 0x1e293b }));
      matMesh.position.set(-0.4, 0.02, 0.6);
      deskGroup.add(matMesh);

      const kbGeo = new THREE.BoxGeometry(1.8, 0.08, 0.7);
      const kbMesh = new THREE.Mesh(kbGeo, new THREE.MeshBasicMaterial({ color: 0x48e5ff, wireframe: true }));
      kbMesh.position.set(-0.6, 0.07, 0.6);
      deskGroup.add(kbMesh);

      // Mouse
      const mouseGeo = new THREE.BoxGeometry(0.25, 0.08, 0.4);
      const mouseMesh = new THREE.Mesh(mouseGeo, new THREE.MeshBasicMaterial({ color: 0x8b5cff }));
      mouseMesh.position.set(0.7, 0.07, 0.6);
      deskGroup.add(mouseMesh);

      // ── HIGH-PERFORMANCE WORKSTATION TOWER (PC) ──
      const towerGeo = new THREE.BoxGeometry(0.85, 2.0, 1.8);
      const towerMat = new THREE.MeshBasicMaterial({ color: 0x090d16 });
      const tower = new THREE.Mesh(towerGeo, towerMat);
      tower.position.set(2.4, 1.0, 0.2);
      deskGroup.add(tower);

      const towerGlassGeo = new THREE.PlaneGeometry(1.7, 1.9);
      const towerGlassMat = new THREE.MeshBasicMaterial({ color: 0x48e5ff, wireframe: true });
      const towerGlass = new THREE.Mesh(towerGlassGeo, towerGlassMat);
      towerGlass.position.set(1.97, 1.0, 0.2);
      towerGlass.rotation.y = -Math.PI / 2;
      deskGroup.add(towerGlass);

      // Internal GPU & Liquid Cooling Light
      const gpuGeo = new THREE.BoxGeometry(0.4, 0.6, 0.8);
      const gpuMesh = new THREE.Mesh(gpuGeo, new THREE.MeshBasicMaterial({ color: 0x8b5cff, wireframe: true }));
      gpuMesh.position.set(2.4, 0.9, 0.2);
      deskGroup.add(gpuMesh);

      // ── FLOATING HOLOGRAPHIC DIAGNOSTIC DATA CUBES ──
      const holoGroup = new THREE.Group();
      deskGroup.add(holoGroup);

      const cubeCount = 6;
      const holoCubes = [];
      for (let i = 0; i < cubeCount; i++) {
        const cGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
        const cMat = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x48e5ff : 0x8b5cff,
          wireframe: true,
        });
        const cMesh = new THREE.Mesh(cGeo, cMat);
        const angle = (i / cubeCount) * Math.PI * 2;
        cMesh.position.set(Math.cos(angle) * 2.8, 2.8 + Math.sin(angle * 2) * 0.4, Math.sin(angle) * 1.5);
        holoGroup.add(cMesh);
        holoCubes.push({ mesh: cMesh, speed: 0.8 + i * 0.2, basePos: cMesh.position.clone() });
      }

      // Pointer Parallax
      let mouseX = 0, mouseY = 0;
      let targetRotX = 0, targetRotY = 0;

      const handlePointer = (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8;
        mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8;
      };
      window.addEventListener("pointermove", handlePointer);

      const handleResize = () => {
        if (!container) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };
      window.addEventListener("resize", handleResize);

      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        targetRotY += (mouseX - targetRotY) * 0.05;
        targetRotX += (mouseY - targetRotX) * 0.05;

        deskGroup.rotation.y = targetRotY * 0.4;
        deskGroup.rotation.x = targetRotX * 0.2;

        // Floating holo cubes animation
        holoCubes.forEach(({ mesh, speed }, idx) => {
          mesh.rotation.x = elapsed * speed;
          mesh.rotation.y = elapsed * (speed * 0.8);
          mesh.position.y = 2.8 + Math.sin(elapsed * 2 + idx) * 0.25;
        });

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("pointermove", handlePointer);
        window.removeEventListener("resize", handleResize);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (err) {
      console.warn("Workstation WebGL error:", err);
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "460px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={containerRef} style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }} />

      {/* Atmospheric neon reflection glow */}
      <div
        style={{
          position: "absolute",
          inset: "15%",
          background: "radial-gradient(circle, rgba(72, 229, 255, 0.12) 0%, rgba(139, 92, 255, 0.1) 45%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* System HUD Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.6rem",
          background: "rgba(7, 10, 18, 0.85)",
          padding: "0.4rem 1rem",
          borderRadius: "999px",
          border: "1px solid rgba(72, 229, 255, 0.2)",
          backdropFilter: "blur(10px)",
          zIndex: 3,
          fontSize: "0.72rem",
          fontFamily: "'JetBrains Mono', monospace",
          color: "#94a3b8",
          pointerEvents: "none",
        }}
      >
        <span style={{ color: "#48e5ff" }}>● 3D ISOMETRIC WORKSTATION</span>
        <span>|</span>
        <span>ENGINEER RIG // LIVE</span>
      </div>
    </div>
  );
}
