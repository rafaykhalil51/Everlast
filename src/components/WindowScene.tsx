"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { MutableRefObject } from "react";
import { useMemo, useRef } from "react";

type WindowSceneProps = {
  progressRef: MutableRefObject<number>;
  accentHex: string;
};

export function WindowScene({ progressRef, accentHex }: WindowSceneProps) {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group | null>(null);

  const accentColor = useMemo(() => new THREE.Color(accentHex), [accentHex]);

  // Some lightweight "realistic-ish" material presets for a premium look.
  const materials = useMemo(() => {
    const frameMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#f8fff9"),
      metalness: 0.08,
      roughness: 0.42,
      clearcoat: 0.7,
      clearcoatRoughness: 0.2,
    });

    const accentMat = new THREE.MeshPhysicalMaterial({
      color: accentColor,
      metalness: 0.35,
      roughness: 0.28,
      clearcoat: 0.6,
      clearcoatRoughness: 0.15,
      emissive: accentColor.clone().multiplyScalar(0.15),
      emissiveIntensity: 0.8,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#effef4"),
      metalness: 0.02,
      roughness: 0.03,
      transmission: 0.92,
      thickness: 1.2,
      ior: 1.45,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    return { frameMat, accentMat, glassMat };
  }, [accentColor]);

  useFrame(() => {
    const p = progressRef.current ?? 0;
    const clamped = Math.max(0, Math.min(1, p));

    // Cinematic camera motion.
    const targetCam = new THREE.Vector3(
      0.3 + clamped * 0.65,
      0.35 + Math.sin(clamped * Math.PI) * 0.15,
      2.7 - clamped * 0.8
    );
    camera.position.lerp(targetCam, 0.06);
    camera.lookAt(0, 0.15, 0);

    // Gentle object motion tied to scroll.
    if (groupRef.current) {
      const rot = (clamped - 0.5) * 0.85;
      groupRef.current.rotation.y = rot;
      groupRef.current.rotation.x = Math.sin(clamped * Math.PI) * 0.04;
      groupRef.current.position.y = -0.12 + clamped * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <hemisphereLight args={["#ffffff", "#e8fceb", 0.55]} />
      <directionalLight position={[2.5, 3.2, 2.5]} intensity={1.0} color={accentColor} />
      <pointLight position={[-2, 1.2, 2]} intensity={0.42} color={"#f0fff4"} />

      <group ref={groupRef}>
        {/* Window frame */}
        <mesh material={materials.frameMat} position={[0, 0, 0]}>
          <boxGeometry args={[1.55, 1.05, 0.08]} />
        </mesh>

        {/* Inner accent bar */}
        <mesh material={materials.accentMat} position={[0, 0, 0.05]}>
          <boxGeometry args={[1.48, 0.12, 0.03]} />
        </mesh>

        {/* Glass pane */}
        <mesh material={materials.glassMat} position={[0, 0, 0.04]}>
          <planeGeometry args={[1.44, 0.95]} />
        </mesh>

        {/* Subtle "details" */}
        <mesh material={materials.frameMat} position={[0.68, 0.18, 0.04]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.02, 0.72, 0.08]} />
        </mesh>
        <mesh material={materials.frameMat} position={[-0.68, -0.05, 0.04]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.02, 0.6, 0.08]} />
        </mesh>
      </group>
    </>
  );
}

