"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import WindowFrame3D from "./WindowFrame3D";

export default function HeroProductScene() {
  return (
    <Canvas
      camera={{ position: [0.6, 0.4, 5.4], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      shadows
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        {/* fill */}
        <ambientLight intensity={0.55} />
        {/* key light from upper right */}
        <directionalLight
          position={[4, 6, 5]}
          intensity={1.2}
          color="#fff7e2"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* rim light from behind for glass edge highlights */}
        <directionalLight position={[-4, 3, -4]} intensity={0.6} color="#9fb6d4" />
        {/* warm bounce from below to lift the wooden base */}
        <pointLight position={[0, -3, 2]} intensity={0.4} color="#c79a6b" />

        {/* Environment for reflections on glass and metal spacers */}
        <Environment preset="studio" environmentIntensity={0.55} />

        <group position={[0.1, 0.0, 0]}>
          <WindowFrame3D />
        </group>
      </Suspense>
    </Canvas>
  );
}
