"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WindowFrame3D from "./WindowFrame3D";
import MaterialParticles from "./MaterialParticles";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["#0d0d0d", 8, 18]} />
        <MaterialParticles count={180} intensity={0.7} />
        <group position={[0.1, -0.05, 0]} scale={1}>
          <WindowFrame3D />
        </group>
      </Suspense>
    </Canvas>
  );
}
