"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function VRControllerModel() {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/vive-controller.glb/scene.gltf");

  // Simple rotation for secondary decorative element
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={1.2}>
      <primitive object={scene} />
    </group>
  );
}

export default function VRController() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    <div className="w-full h-64 md:h-80">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        onError={() => setHasError(true)}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <VRControllerModel />
        </Suspense>
        <Environment preset="apartment" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.2}
          scale={8}
          blur={1.5}
          far={3}
        />
      </Canvas>
    </div>
  );
}
