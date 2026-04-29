"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import StatsGlobe3D from "./StatsGlobe3D";

export default function StatsScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <StatsGlobe3D />
      </Suspense>
    </Canvas>
  );
}
