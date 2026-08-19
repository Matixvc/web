"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function VRHeadsetModel() {
  const meshRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scene } = useGLTF("/models/pico4-headset.glb/scene.gltf");

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Automatic rotation and mouse parallax
  useFrame((state) => {
    if (meshRef.current) {
      // Slow continuous rotation
      meshRef.current.rotation.y += 0.003;
      
      // Subtle mouse parallax effect
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.2,
        0.05
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        mousePosition.x * 0.2,
        0.05
      );
    }
  });

  return (
    <group ref={meshRef} position={[2, 0, 0]} scale={1.5}>
      <primitive object={scene} />
    </group>
  );
}

export default function VRHeadset() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render on very small screens for performance
  if (isMobile || hasError) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        onError={() => setHasError(true)}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <VRHeadsetModel />
        </Suspense>
        <Environment preset="city" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.3}
          scale={10}
          blur={2}
          far={4}
        />
      </Canvas>
    </div>
  );
}
