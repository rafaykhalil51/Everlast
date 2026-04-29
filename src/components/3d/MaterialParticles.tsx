"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  count?: number;
  intensity?: number;
};

const COLORS = ["#c9a84c", "#1d5ea8", "#43b649", "#fafaf8", "#8a8a8a"];

export default function MaterialParticles({ count = 220, intensity = 1 }: Props) {
  const meshRef = useRef<THREE.InstancedMesh | null>(null);
  const { viewport } = useThree();

  const data = useMemo(() => {
    const arr: {
      base: THREE.Vector3;
      phase: number;
      speed: number;
      scale: number;
      color: THREE.Color;
    }[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        base: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width * 1.6,
          (Math.random() - 0.5) * viewport.height * 1.6,
          (Math.random() - 0.5) * 4
        ),
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.8,
        scale: 0.04 + Math.random() * 0.07,
        color: new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]),
      });
    }
    return arr;
  }, [count, viewport.width, viewport.height]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const pointer = useRef(new THREE.Vector2());

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.05;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.05;

    const t = state.clock.elapsedTime;
    for (let i = 0; i < data.length; i++) {
      const p = data[i];
      const x =
        p.base.x +
        Math.sin(t * p.speed + p.phase) * 0.4 * intensity +
        pointer.current.x * 0.3;
      const y =
        p.base.y +
        Math.cos(t * p.speed * 0.8 + p.phase) * 0.4 * intensity +
        pointer.current.y * 0.3;
      const z = p.base.z + Math.sin(t * 0.4 + p.phase) * 0.2;
      dummy.position.set(x, y, z);
      dummy.rotation.x = t * 0.3 + p.phase;
      dummy.rotation.y = t * 0.2 + p.phase;
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, p.color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }

    // expose for unused param compliance
    void delta;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow={false} receiveShadow={false}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        roughness={0.45}
        metalness={0.55}
        emissiveIntensity={0.25}
        emissive="#1c1c1e"
        toneMapped={false}
      />
    </instancedMesh>
  );
}
