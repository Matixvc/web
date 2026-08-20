"use client";

import { useEffect, useState, useRef } from "react";

export default function MeshGradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [blobPositions, setBlobPositions] = useState([
    { x: 25, y: 10 },
    { x: 75, y: 33 },
    { x: 33, y: 75 }
  ]);
  const animationRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      // Throttle updates for performance (60fps max)
      if (now - lastUpdateRef.current < 16) return;
      lastUpdateRef.current = now;

      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });

      // Update blob positions with parallax effect
      setBlobPositions([
        { x: 25 + (x - 50) * 0.3, y: 10 + (y - 50) * 0.2 },
        { x: 75 + (x - 50) * 0.2, y: 33 + (y - 50) * 0.3 },
        { x: 33 + (x - 50) * 0.4, y: 75 + (y - 50) * 0.1 }
      ]);
    };

    // Add passive listener for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth animation loop for blob movement
  useEffect(() => {
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(139, 92, 246, 0.6) 0%, 
          transparent 70%),
          radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
          rgba(59, 130, 246, 0.5) 0%, 
          transparent 70%),
          radial-gradient(circle at ${blobPositions[0].x}% ${blobPositions[0].y}%, 
          rgba(244, 114, 182, 0.4) 0%, 
          transparent 50%),
          linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)
        `,
        transition: 'background 0.08s ease-out',
        willChange: 'background'
      }}
    >
      {/* Premium animated gradient blobs */}
      <div 
        className="absolute w-[700px] h-[700px] bg-primary/30 rounded-full blur-3xl animate-blob opacity-90"
        style={{
          left: `${blobPositions[0].x}%`,
          top: `${blobPositions[0].y}%`,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform, left, top'
        }}
      />
      <div 
        className="absolute w-[700px] h-[700px] bg-secondary/30 rounded-full blur-3xl animate-blob opacity-90"
        style={{
          left: `${blobPositions[1].x}%`,
          top: `${blobPositions[1].y}%`,
          transform: 'translate(-50%, -50%)',
          animationDelay: '2s',
          willChange: 'transform, left, top'
        }}
      />
      <div 
        className="absolute w-[700px] h-[700px] bg-accent/30 rounded-full blur-3xl animate-blob opacity-90"
        style={{
          left: `${blobPositions[2].x}%`,
          top: `${blobPositions[2].y}%`,
          transform: 'translate(-50%, -50%)',
          animationDelay: '4s',
          willChange: 'transform, left, top'
        }}
      />
      
      {/* Premium noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          willChange: 'opacity'
        }}
      />
      
      {/* Animated grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          willChange: 'opacity'
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              willChange: 'transform'
            }}
          />
        ))}
      </div>
    </div>
  );
}
