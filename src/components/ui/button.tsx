"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  onClick,
}: ButtonProps) {
  const variants = {
    primary: "bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/25",
    secondary: "bg-gradient-secondary text-white hover:shadow-lg hover:shadow-accent/25",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-xl font-semibold transition-all duration-300",
        "relative overflow-hidden",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant !== "outline" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
}
