"use client";

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
    <button
      className={cn(
        "rounded-xl font-semibold transition-all duration-300",
        "relative overflow-hidden",
        "hover:scale-105 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
