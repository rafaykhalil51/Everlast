"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  scrollProgress?: number;
};

const FRAME_COLOR = new THREE.Color("#f5f2ee");
const ACCENT_COLOR = new THREE.Color("#c9a84c");
const STEEL_COLOR = new THREE.Color("#1d5ea8");

export default function WindowFrame3D({ scrollProgress = 0 }: Props) {
  const groupRef = useRef<THREE.Group | null>(null);
  const assembled = useRef(0);
  const { camera, viewport } = useThree();
  const pointer = useRef(new THREE.Vector2());

  const frameMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: FRAME_COLOR,
        roughness: 0.42,
        metalness: 0.08,
        clearcoat: 0.7,
        clearcoatRoughness: 0.18,
      }),
    []
  );

  const accentMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: ACCENT_COLOR,
        roughness: 0.32,
        metalness: 0.85,
        emissive: ACCENT_COLOR.clone().multiplyScalar(0.18),
      }),
    []
  );

  const handleMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#e6e6e6"),
        roughness: 0.18,
        metalness: 1,
      }),
    []
  );

  const glassMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#dceeff"),
        transmission: 0.95,
        thickness: 0.4,
        roughness: 0.05,
        ior: 1.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    []
  );

  const steelMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: STEEL_COLOR,
        roughness: 0.5,
        metalness: 0.4,
      }),
    []
  );

  useEffect(() => {
    void viewport;
    void camera;
  }, [viewport, camera]);

  useFrame((state, delta) => {
    const target = 1; // assemble once when mounted
    assembled.current = Math.min(1, assembled.current + delta * 0.7);

    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.06;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.06;

    const g = groupRef.current;
    if (!g) return;

    const a = assembled.current;
    g.children.forEach((child) => {
      const data = child.userData as {
        from?: THREE.Vector3;
        to?: THREE.Vector3;
        rotFrom?: THREE.Euler;
        rotTo?: THREE.Euler;
      };
      if (data?.from && data?.to) {
        child.position.lerpVectors(data.from, data.to, a);
      }
      if (data?.rotFrom && data?.rotTo) {
        child.rotation.x = THREE.MathUtils.lerp(data.rotFrom.x, data.rotTo.x, a);
        child.rotation.y = THREE.MathUtils.lerp(data.rotFrom.y, data.rotTo.y, a);
        child.rotation.z = THREE.MathUtils.lerp(data.rotFrom.z, data.rotTo.z, a);
      }
    });

    const baseSpin = state.clock.elapsedTime * 0.08 + scrollProgress * 0.6;
    g.rotation.y = baseSpin + pointer.current.x * 0.35;
    g.rotation.x = -0.05 + pointer.current.y * -0.18;

    void target;
  });

  // Dimensions
  const W = 2.8;
  const H = 3.2;
  const D = 0.18;
  const T = 0.18; // bar thickness

  type PieceProps = {
    pos: THREE.Vector3;
    geom: [number, number, number];
    mat: THREE.Material;
    fromOffset: THREE.Vector3;
  };

  const pieces: PieceProps[] = [
    // outer frame
    { pos: new THREE.Vector3(0, H / 2 - T / 2, 0), geom: [W, T, D], mat: frameMat, fromOffset: new THREE.Vector3(0, 4, 0) },
    { pos: new THREE.Vector3(0, -H / 2 + T / 2, 0), geom: [W, T, D], mat: frameMat, fromOffset: new THREE.Vector3(0, -4, 0) },
    { pos: new THREE.Vector3(-W / 2 + T / 2, 0, 0), geom: [T, H, D], mat: frameMat, fromOffset: new THREE.Vector3(-4, 0, 0) },
    { pos: new THREE.Vector3(W / 2 - T / 2, 0, 0), geom: [T, H, D], mat: frameMat, fromOffset: new THREE.Vector3(4, 0, 0) },
    // mullion
    { pos: new THREE.Vector3(0, 0, 0), geom: [T * 0.7, H - T * 2, D * 0.95], mat: frameMat, fromOffset: new THREE.Vector3(0, -6, 0) },
    // accent bar
    { pos: new THREE.Vector3(0, -H / 2 + T * 1.4, D * 0.55), geom: [W - T * 2, T * 0.18, D * 0.25], mat: accentMat, fromOffset: new THREE.Vector3(0, -8, 0) },
  ];

  const glassPanes = [
    { pos: new THREE.Vector3(-W / 4 - T * 0.05, 0, D * 0.05), w: W / 2 - T * 1.5, h: H - T * 2.4 },
    { pos: new THREE.Vector3(W / 4 + T * 0.05, 0, D * 0.05), w: W / 2 - T * 1.5, h: H - T * 2.4 },
  ];

  return (
    <>
      <Environment preset="studio" environmentIntensity={0.55} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} color="#fff8e0" castShadow />
      <pointLight position={[-3, 2, 4]} intensity={0.55} color="#dbeafe" />

      <group ref={groupRef} position={[0, 0, 0]}>
        {pieces.map((p, i) => {
          const userData = {
            from: p.pos.clone().add(p.fromOffset),
            to: p.pos.clone(),
            rotFrom: new THREE.Euler(0.4, 0.6, 0),
            rotTo: new THREE.Euler(0, 0, 0),
          };
          return (
            <mesh
              key={`piece-${i}`}
              material={p.mat}
              position={userData.from}
              rotation={userData.rotFrom}
              userData={userData}
              castShadow
              receiveShadow
            >
              <boxGeometry args={p.geom} />
            </mesh>
          );
        })}

        {glassPanes.map((g, i) => {
          const fromOffset = new THREE.Vector3(0, 0, -2);
          const userData = {
            from: g.pos.clone().add(fromOffset),
            to: g.pos.clone(),
            rotFrom: new THREE.Euler(0, 0, 0),
            rotTo: new THREE.Euler(0, 0, 0),
          };
          return (
            <mesh
              key={`glass-${i}`}
              material={glassMat}
              position={userData.from}
              userData={userData}
            >
              <planeGeometry args={[g.w, g.h]} />
            </mesh>
          );
        })}

        {/* steel reinforcement hint behind frame */}
        <mesh material={steelMat} position={new THREE.Vector3(0, 0, -D * 0.6)}>
          <boxGeometry args={[W * 1.02, H * 1.02, 0.02]} />
        </mesh>

        {/* handles */}
        {[
          new THREE.Vector3(-W / 4 - T * 0.05 - 0.08, -0.3, D * 0.5),
          new THREE.Vector3(W / 4 + T * 0.05 + 0.08, -0.3, D * 0.5),
        ].map((pos, i) => {
          const fromOffset = new THREE.Vector3(0, -2, 0);
          const userData = {
            from: pos.clone().add(fromOffset),
            to: pos.clone(),
            rotFrom: new THREE.Euler(0, 0, Math.PI / 2),
            rotTo: new THREE.Euler(0, 0, Math.PI / 2),
          };
          return (
            <mesh
              key={`handle-${i}`}
              material={handleMat}
              position={userData.from}
              rotation={userData.rotFrom}
              userData={userData}
            >
              <cylinderGeometry args={[0.04, 0.04, 0.36, 24]} />
            </mesh>
          );
        })}
      </group>
    </>
  );
}
