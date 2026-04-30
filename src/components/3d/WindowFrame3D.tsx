"use client";

import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const FRAME_COLOR = "#f5f5f1";
const FRAME_DEPTH_COLOR = "#e6e6df";
const GASKET_COLOR = "#0d0d0d";
const REINFORCEMENT_COLOR = "#7e8a92";
const WOOD_COLOR = "#c79a6b";

type ChamberProps = {
  position: [number, number, number];
  size: [number, number, number];
};

function FrameWithChambers({ position, size }: ChamberProps) {
  const [w, h, d] = size;
  const chambers = useMemo(() => {
    // small inner cavities visible on the cut face
    const arr: { x: number; y: number; w: number; h: number }[] = [];
    const cellW = w / 4;
    const cellH = h / 4;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if ((i + j) % 2 === 0) continue;
        arr.push({
          x: -w / 2 + cellW / 2 + i * cellW,
          y: -h / 2 + cellH / 2 + j * cellH,
          w: cellW * 0.55,
          h: cellH * 0.55,
        });
      }
    }
    return arr;
  }, [w, h]);

  return (
    <group position={position}>
      {/* main body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial
          color={FRAME_COLOR}
          roughness={0.55}
          metalness={0.05}
        />
      </mesh>

      {/* cut face hint (left/right end caps) — subtle darker plane to imply the chambers */}
      {chambers.map((c, i) => (
        <mesh
          key={`chamber-${i}`}
          position={[w / 2 + 0.001, c.y, c.x * 0.0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <planeGeometry args={[c.h, 0.05]} />
          <meshBasicMaterial color={FRAME_DEPTH_COLOR} />
        </mesh>
      ))}
    </group>
  );
}

function MultiChamberPanel({
  position,
  size,
  axis = "horizontal",
}: ChamberProps & { axis?: "horizontal" | "vertical" }) {
  const [w, h, d] = size;

  // Render chambers as recessed darker stripes on the front face
  // axis horizontal => stripes along Y (running left-right)
  // axis vertical => stripes along X (running up-down)
  const stripes = useMemo(() => {
    const out: { offset: number; thickness: number; length: number }[] = [];
    const span = axis === "horizontal" ? w : h;
    const length = axis === "horizontal" ? h : w;
    const count = 5;
    const stripeT = span * 0.06;
    const gap = (span - count * stripeT) / (count + 1);
    for (let i = 0; i < count; i++) {
      out.push({
        offset: -span / 2 + gap + stripeT / 2 + i * (stripeT + gap),
        thickness: stripeT,
        length: length * 0.78,
      });
    }
    return out;
  }, [w, h, axis]);

  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial
          color={FRAME_COLOR}
          roughness={0.5}
          metalness={0.05}
        />
      </mesh>

      {stripes.map((s, i) => {
        const sx = axis === "horizontal" ? s.thickness : s.length;
        const sy = axis === "horizontal" ? s.length : s.thickness;
        const px = axis === "horizontal" ? s.offset : 0;
        const py = axis === "horizontal" ? 0 : s.offset;
        return (
          <mesh
            key={`stripe-${i}`}
            position={[px, py, d / 2 + 0.001]}
          >
            <planeGeometry args={[sx, sy]} />
            <meshStandardMaterial
              color={FRAME_DEPTH_COLOR}
              roughness={0.65}
              metalness={0}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function GlassPanel({
  position,
  size,
  tint = "#dfe7e3",
  opacity = 0.32,
}: {
  position: [number, number, number];
  size: [number, number, number];
  tint?: string;
  opacity?: number;
}) {
  return (
    <mesh position={position} castShadow={false} receiveShadow={false}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color={tint}
        transparent
        opacity={opacity}
        transmission={0.85}
        thickness={0.4}
        roughness={0.05}
        metalness={0}
        ior={1.5}
        clearcoat={1}
        clearcoatRoughness={0.08}
        attenuationColor="#cfe0d4"
        attenuationDistance={2}
      />
    </mesh>
  );
}

export default function WindowFrame3D() {
  const groupRef = useRef<THREE.Group | null>(null);
  const targetRot = useRef(new THREE.Vector2());

  const logo = useTexture("/logo.png");
  logo.colorSpace = THREE.SRGBColorSpace;
  logo.anisotropy = 8;

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // ease pointer into target rotation
    targetRot.current.x +=
      (state.pointer.y * 0.18 - targetRot.current.x) * 0.06;
    targetRot.current.y +=
      (state.pointer.x * 0.28 - targetRot.current.y) * 0.06;

    // continuous slow yaw + cursor offset
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.y += (targetRot.current.y - 0) * 0.0; // already accumulated above; placeholder
    groupRef.current.rotation.x = -targetRot.current.x * 0.6 + 0.05;

    // subtle bob
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.04 - 0.05;
  });

  return (
    <group ref={groupRef} scale={1} position={[0, -0.05, 0]}>
      {/* Wooden base */}
      <mesh position={[0, -1.95, 0.15]} receiveShadow>
        <boxGeometry args={[3.6, 0.16, 1.6]} />
        <meshStandardMaterial
          color={WOOD_COLOR}
          roughness={0.7}
          metalness={0}
        />
      </mesh>
      <mesh position={[0, -1.87, 0.15]} receiveShadow>
        <boxGeometry args={[3.6, 0.02, 1.6]} />
        <meshStandardMaterial
          color="#a87b4d"
          roughness={0.6}
        />
      </mesh>

      {/* L-shape uPVC frame */}
      {/* Bottom horizontal sill */}
      <MultiChamberPanel
        position={[0, -1.5, 0]}
        size={[3.0, 0.6, 1.05]}
        axis="horizontal"
      />

      {/* Vertical left jamb */}
      <MultiChamberPanel
        position={[-1.35, 0, 0]}
        size={[0.6, 3.4, 1.05]}
        axis="vertical"
      />

      {/* Inner sash frame (slightly inset) — gives the recessed look */}
      <FrameWithChambers
        position={[-1.05, -0.2, 0.45]}
        size={[0.18, 2.6, 0.18]}
      />
      <FrameWithChambers
        position={[-0.05, -1.2, 0.45]}
        size={[2.1, 0.18, 0.18]}
      />

      {/* Black gasket strips between sash and glass */}
      <mesh position={[-0.92, -0.2, 0.55]}>
        <boxGeometry args={[0.05, 2.6, 0.04]} />
        <meshStandardMaterial color={GASKET_COLOR} roughness={0.85} />
      </mesh>
      <mesh position={[-0.05, -1.07, 0.55]}>
        <boxGeometry args={[2.1, 0.05, 0.04]} />
        <meshStandardMaterial color={GASKET_COLOR} roughness={0.85} />
      </mesh>

      {/* Aluminium spacer between glass panes (visible at the edges) */}
      <mesh position={[-0.02, -1.0, 0.32]}>
        <boxGeometry args={[2.0, 0.07, 0.4]} />
        <meshStandardMaterial
          color={REINFORCEMENT_COLOR}
          roughness={0.35}
          metalness={0.7}
        />
      </mesh>
      <mesh position={[-0.85, -0.13, 0.32]}>
        <boxGeometry args={[0.07, 2.4, 0.4]} />
        <meshStandardMaterial
          color={REINFORCEMENT_COLOR}
          roughness={0.35}
          metalness={0.7}
        />
      </mesh>

      {/* Triple glazed glass panes (back -> front) */}
      <GlassPanel
        position={[-0.05, -0.13, -0.05]}
        size={[2.2, 2.5, 0.04]}
        tint="#cdd9d2"
        opacity={0.34}
      />
      <GlassPanel
        position={[0.05, -0.05, 0.18]}
        size={[2.2, 2.5, 0.04]}
        tint="#d6e2dd"
        opacity={0.32}
      />
      <GlassPanel
        position={[0.18, 0.04, 0.42]}
        size={[2.4, 2.7, 0.04]}
        tint="#e3ebe5"
        opacity={0.28}
      />

      {/* Front lip of glass: thin black trim */}
      <mesh position={[0.18, 0.04, 0.46]}>
        <boxGeometry args={[2.42, 2.72, 0.005]} />
        <meshBasicMaterial color={GASKET_COLOR} transparent opacity={0.0} />
      </mesh>

      {/* Logo decal on the front face of the bottom horizontal sill */}
      <mesh position={[0, -1.5, 0.531]}>
        <planeGeometry args={[1.6, 0.36]} />
        <meshStandardMaterial
          map={logo}
          transparent
          alphaTest={0.05}
          roughness={0.4}
          metalness={0}
          toneMapped={false}
        />
      </mesh>

      {/* Subtle decorative diamond near the bottom right (echoes the reference) */}
      <mesh position={[1.35, -1.85, 0.25]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.06, 0.06, 0.02]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
