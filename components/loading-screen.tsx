"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] },
          }}
        >
          <div className="relative">
            <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
              {/* Outer circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="4"
                fill="none"
              />

              {/* Animated progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{
                  pathLength: 1,
                  transition: { duration: 2, ease: "easeInOut" },
                }}
                style={{
                  rotate: -90,
                  transformOrigin: "center",
                }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Pulsing dot in the center */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-purple-500"
              style={{
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.h1
            className="mt-8 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.8 },
            }}
          >
            INGENIUM
          </motion.h1>

          <motion.div
            className="mt-6 flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.8 },
            }}
          >
            <div
              className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"
              style={{ animationDelay: "300ms" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
              style={{ animationDelay: "600ms" }}
            ></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
