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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { 
        scale: 1.03, 
        y: -8,
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)"
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={cn(
        "glass rounded-2xl p-6 glow-border cursor-pointer",
        "bg-gradient-to-br from-white/5 to-white/[0.02]",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:shadow-2xl hover:shadow-primary/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
