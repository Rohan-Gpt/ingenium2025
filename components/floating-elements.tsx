"use client";

import { useRef } from "react";
import { motion } from "motion/react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  color: string;
  shape: "circle" | "square" | "triangle" | "hexagon";
}

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random elements
  const elements: FloatingElement[] = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    rotation: Math.random() * 360,
    speed: Math.random() * 20 + 10,
    color: [
      "rgba(147, 51, 234, 0.15)",
      "rgba(79, 70, 229, 0.15)",
      "rgba(59, 130, 246, 0.15)",
    ][Math.floor(Math.random() * 3)],
    shape: ["circle", "square", "triangle", "hexagon"][
      Math.floor(Math.random() * 4)
    ] as any,
  }));

  const renderShape = (element: FloatingElement) => {
    switch (element.shape) {
      case "circle":
        return (
          <div
            className="absolute rounded-full"
            style={{
              width: element.size,
              height: element.size,
              backgroundColor: element.color,
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
            }}
          />
        );
      case "square":
        return (
          <div
            className="absolute"
            style={{
              width: element.size,
              height: element.size,
              backgroundColor: element.color,
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
            }}
          />
        );
      case "triangle":
        return (
          <div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${element.size / 2}px solid transparent`,
              borderRight: `${element.size / 2}px solid transparent`,
              borderBottom: `${element.size}px solid ${element.color}`,
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
            }}
          />
        );
      case "hexagon":
        return (
          <div
            className="absolute"
            style={{
              width: element.size,
              height: `${element.size * 0.866}px`,
              backgroundColor: element.color,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `rotate(${element.rotation}deg)`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{
            x: `${element.x}%`,
            y: `${element.y}%`,
            rotate: element.rotation,
          }}
          animate={{
            y: [`${element.y}%`, `${(element.y + 10) % 100}%`, `${element.y}%`],
            x: [`${element.x}%`, `${(element.x + 5) % 100}%`, `${element.x}%`],
            rotate: [
              element.rotation,
              element.rotation + 180,
              element.rotation + 360,
            ],
          }}
          transition={{
            duration: element.speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {renderShape(element)}
        </motion.div>
      ))}
    </div>
  );
}
