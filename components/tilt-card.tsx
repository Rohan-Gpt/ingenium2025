"use client";

import type React from "react";

import { useState, useRef, type ReactNode } from "react";
import { motion } from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  scale?: number;
  perspective?: number;
  glareOpacity?: number;
}

export function TiltCard({
  children,
  className = "",
  glareColor = "rgba(255, 255, 255, 0.4)",
  scale = 1.05,
  perspective = 1000,
  glareOpacity = 0.2,
}: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center (in -1 to 1 range)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // Set tilt values (multiplied for more noticeable effect)
    setTilt({ x: y * -10, y: x * 10 });

    // Set glare position
    setGlarePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      }}
    >
      {children}

      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}px ${glarePosition.y}px, ${glareColor}, transparent 50%)`,
          mixBlendMode: "overlay",
        }}
        animate={{
          opacity: isHovered ? glareOpacity : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
