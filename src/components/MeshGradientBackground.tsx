"use client";

import { useEffect, useState } from "react";

export default function MeshGradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(139, 92, 246, 0.4) 0%, 
          transparent 60%),
          radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
          rgba(59, 130, 246, 0.3) 0%, 
          transparent 60%),
          linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)
        `,
        transition: 'background 0.15s ease-out'
      }}
    >
      {/* Animated gradient blobs - MÁS VISIBLES */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-blob opacity-70" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-blob opacity-70" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-blob opacity-70" style={{ animationDelay: '4s' }} />
      
      {/* Más visible grid overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')] bg-[size:64px_64px]" />
    </div>
  );
}
