"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export default function GlassCard({ children, className, hover = true, delay = 0, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={hover ? { 
        scale: 1.08, 
        y: -12,
        rotate: 1,
        boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)",
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      onClick={onClick}
      className={cn(
        "glass rounded-2xl p-6 glow-border cursor-pointer",
        "bg-gradient-to-br from-white/5 to-white/[0.02]",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:shadow-2xl hover:shadow-primary/20",
        "border border-white/10 hover:border-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
