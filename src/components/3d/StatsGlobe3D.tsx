"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const POINTS = [
  [10, 30],
  [40, -10],
  [-50, 20],
  [-130, -25],
  [70, 0],
  [120, 35],
  [-25, -40],
  [-70, -10],
];

export default function StatsGlobe3D() {
  const groupRef = useRef<THREE.Group | null>(null);
  const dotsRef = useRef<THREE.InstancedMesh | null>(null);

  const data = useMemo(() => {
    return POINTS.map(([lon, lat]) => {
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);
      const r = 2.5;
      return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    });
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.1;
    }
    if (dotsRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.25;
      data.forEach((p, i) => {
        dummy.position.copy(p);
        dummy.scale.setScalar(0.06 * pulse);
        dummy.updateMatrix();
        dotsRef.current!.setMatrixAt(i, dummy.matrix);
      });
      dotsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[2.5, 48, 32]} />
          <meshBasicMaterial color="#c9a84c" wireframe transparent opacity={0.55} />
        </mesh>
        <instancedMesh ref={dotsRef} args={[undefined, undefined, data.length]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial color="#43b649" transparent opacity={0.95} />
        </instancedMesh>
      </group>
    </>
  );
}
