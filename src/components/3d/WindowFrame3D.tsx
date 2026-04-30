"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const MODEL_URL = "/window-model.glb";

// Sweep limits in degrees
const SWEEP_DEG = 18;       // gentle idle sine wave amplitude
const CURSOR_YAW_DEG = 28;  // extra rotation driven by the cursor
const SWEEP_SPEED = 0.35;   // radians of phase per second

const DEG = Math.PI / 180;

export default function WindowFrame3D() {
  const groupRef = useRef<THREE.Group | null>(null);
  const rawPointer = useRef(0);
  const easedPointer = useRef(0);

  const { scene } = useGLTF(MODEL_URL);

  // Clone so multiple mounts (StrictMode etc) do not share material state
  const cloned = useMemo(() => scene.clone(true), [scene]);

  // Auto fit and center the GLB into a known size box, regardless of how
  // it was authored. This avoids cases where the model is huge or tiny
  // or off-centre after export.
  const { scale, offset } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    const centre = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(centre);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    // target longest dimension ~3.6 units in scene
    const s = 3.6 / maxDim;
    return {
      scale: s,
      offset: centre.clone().multiplyScalar(-s),
    };
  }, [cloned]);

  // Improve material rendering and shadow casting where reasonable
  useEffect(() => {
    cloned.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
        if (mat && "envMapIntensity" in mat) {
          mat.envMapIntensity = 0.9;
          mat.needsUpdate = true;
        }
      }
    });
  }, [cloned]);

  // Track the pointer at the window level so the cursor moves the model
  // even when hovering over the text column or anywhere else on the page.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onMove = (e: PointerEvent) => {
      rawPointer.current = (e.clientX / window.innerWidth) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // ease the pointer toward the latest reading
    easedPointer.current +=
      (rawPointer.current - easedPointer.current) * 0.08;

    // gentle horizontal sweep so the model never feels frozen
    const sweep = Math.sin(state.clock.elapsedTime * SWEEP_SPEED) * SWEEP_DEG * DEG;
    const cursorYaw = easedPointer.current * CURSOR_YAW_DEG * DEG;

    // Y axis only. No 360 spin, no X tilt.
    groupRef.current.rotation.y = sweep + cursorYaw;
    groupRef.current.rotation.x = 0;
    groupRef.current.rotation.z = 0;

    // tiny vertical bob keeps it alive
    groupRef.current.position.y =
      offset.y + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;

    void delta;
  });

  return (
    <group
      ref={groupRef}
      scale={scale}
      position={[offset.x, offset.y, offset.z]}
    >
      <primitive object={cloned} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
