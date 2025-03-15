"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function TechPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
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
          <div className="relative w-64 md:w-80 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-auto">
              {/* Tech circuit pattern */}
              <path
                d="M10,50 L30,50 L35,45 L45,45 L50,50 L70,50 L75,45 L90,45"
                fill="none"
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="1"
              />
              <path
                d="M10,55 L25,55 L30,60 L40,60 L45,55 L60,55 L65,60 L90,60"
                fill="none"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
              />

              {/* Animated progress line */}
              <motion.path
                d="M10,50 L30,50 L35,45 L45,45 L50,50 L70,50 L75,45 L90,45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 100 - progress }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>

              {/* Tech nodes */}
              <circle cx="10" cy="50" r="2" fill="#8B5CF6" />
              <circle cx="30" cy="50" r="2" fill="#8B5CF6" />
              <circle cx="35" cy="45" r="2" fill="#8B5CF6" />
              <circle cx="45" cy="45" r="2" fill="#8B5CF6" />
              <circle cx="50" cy="50" r="2" fill="#8B5CF6" />
              <circle cx="70" cy="50" r="2" fill="#8B5CF6" />
              <circle cx="75" cy="45" r="2" fill="#8B5CF6" />
              <circle cx="90" cy="45" r="2" fill="#8B5CF6" />

              {/* Animated pulse at progress point */}
              <motion.circle
                cx={10 + progress * 0.8}
                cy="50"
                r="4"
                fill="rgba(139, 92, 246, 0.8)"
                animate={{
                  opacity: [1, 0.5, 1],
                  r: [4, 6, 4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Progress percentage */}
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <motion.div
                className="text-xl font-mono text-purple-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </div>

          <motion.h1
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.8 },
            }}
          >
            INGENIUM
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-400 max-w-md text-center px-4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.6, duration: 0.8 },
            }}
          >
            Initializing the future of technology...
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-4 gap-1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.9, duration: 0.8 },
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-purple-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
