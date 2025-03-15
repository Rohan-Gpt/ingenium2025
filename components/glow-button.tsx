"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export function GlowButton({
  children,
  className,
  onClick,
  variant = "default",
  size = "default",
}: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getGlowColor = () => {
    if (variant === "outline") return "rgba(255, 255, 255, 0.1)";
    return "rgba(139, 92, 246, 0.5)";
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: getGlowColor(),
          zIndex: -1,
        }}
      />

      <Button
        variant={variant}
        size={size}
        className={cn(
          "relative z-10 transition-all duration-300",
          variant === "default" &&
            "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white",
          variant === "outline" &&
            "border-white/20 text-white hover:bg-white/10",
          "rounded-full",
          className
        )}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Button>
    </div>
  );
}
