import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * PageHero3D — A reusable cinematic 3D canvas for page heroes.
 * Renders floating glowing shards / crystalline geometry that rotates
 * and responds to mouse parallax. Inspired by Glacial Marble dribbble shot.
 */
export default function PageHero3D({ accentColor = 0x48e5ff, secondColor = 0x8b5cff, height = 320 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvasTest = document.createElement("canvas");
    const gl = canvasTest.getContext("webgl") || canvasTest.getContext("experimental-webgl");
    if (!gl) return;

    let animId;
    let renderer, scene, camera;

    try {
      const w = container.clientWidth || 1200;
      const h = height;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 500);
      camera.position.set(0, 0, 18);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      // Floating crystalline shards — like Glacial Marble
      const shardData = [
        { geo: new THREE.OctahedronGeometry(1.8, 0), pos: [-4, 1.5, 0], rot: [0.4, 0.2, 0], color: accentColor },
        { geo: new THREE.TetrahedronGeometry(1.4, 0), pos: [4.5, -1, 0], rot: [-0.3, 0.5, 0.2], color: secondColor },
        { geo: new THREE.IcosahedronGeometry(1.1, 0), pos: [0.5, 2.5, -2], rot: [0.6, 0.1, 0], color: accentColor },
        { geo: new THREE.OctahedronGeometry(0.9, 0), pos: [-6.5, -1.8, 0.5], rot: [0.2, 0.7, 0.1], color: secondColor },
        { geo: new THREE.TetrahedronGeometry(0.7, 0), pos: [6.5, 2, -1], rot: [0.1, 0.3, 0.5], color: accentColor },
        { geo: new THREE.OctahedronGeometry(0.5, 0), pos: [2, -2.5, 1], rot: [0.9, 0.2, 0], color: secondColor },
      ];

      const shards = shardData.map(({ geo, pos, rot, color }) => {
        const mat = new THREE.MeshBasicMaterial({
          color,
          wireframe: true,
          transparent: true,
          opacity: 0.55,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(...pos);
        mesh.rotation.set(...rot);
        group.add(mesh);
        return { mesh, initRot: [...rot], speed: 0.15 + Math.random() * 0.25 };
      });

      // Large outer orbital ring
      const ringGeo = new THREE.TorusGeometry(9, 0.03, 8, 80);
      const ringMat = new THREE.MeshBasicMaterial({ color: accentColor, transparent: true, opacity: 0.18 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.5;
      group.add(ring);

      const ring2Geo = new THREE.TorusGeometry(11, 0.02, 8, 100);
      const ring2Mat = new THREE.MeshBasicMaterial({ color: secondColor, transparent: true, opacity: 0.12 });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = Math.PI / 4;
      ring2.rotation.y = Math.PI / 6;
      group.add(ring2);

      // Floating point stars
      const starCount = 150;
      const starGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i += 3) {
        starPos[i] = (Math.random() - 0.5) * 30;
        starPos[i + 1] = (Math.random() - 0.5) * 14;
        starPos[i + 2] = (Math.random() - 0.5) * 10 - 5;
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({ color: accentColor, size: 0.06, transparent: true, opacity: 0.6 });
      const stars = new THREE.Points(starGeo, starMat);
      group.add(stars);

      // Mouse parallax
      let mx = 0, my = 0, tx = 0, ty = 0;
      const onPointer = (e) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 0.6;
        my = (e.clientY / window.innerHeight - 0.5) * 0.4;
      };
      window.addEventListener("pointermove", onPointer);

      const onResize = () => {
        const nw = container.clientWidth;
        camera.aspect = nw / h;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, h);
      };
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        tx += (mx - tx) * 0.04;
        ty += (my - ty) * 0.04;

        group.rotation.y = tx * 0.5 + t * 0.05;
        group.rotation.x = ty * 0.4;

        ring.rotation.z = t * 0.08;
        ring2.rotation.z = -t * 0.06;

        shards.forEach(({ mesh, speed }, i) => {
          mesh.rotation.x += speed * 0.008;
          mesh.rotation.y += speed * 0.006;
          // Gentle float
          mesh.position.y += Math.sin(t * 0.5 + i) * 0.003;
        });

        stars.rotation.y = t * 0.02;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("resize", onResize);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (err) {
      console.warn("PageHero3D WebGL error:", err);
    }
  }, [accentColor, secondColor, height]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: `${height}px`,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  );
}
