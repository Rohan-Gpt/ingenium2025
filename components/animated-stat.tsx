"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";

interface AnimatedStatProps {
  value: number;
  label: string;
  duration?: number;
  delay?: number;
}

export function AnimatedStat({
  value,
  label,
  duration = 2000,
  delay = 0,
}: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);

      const timeout = setTimeout(() => {
        let start = 0;
        const end = value;
        const increment = end / 40;
        const timer = setInterval(() => {
          start += increment;
          setCount(Math.min(Math.floor(start), end));

          if (start >= end) {
            clearInterval(timer);
          }
        }, duration / 40);

        return () => clearInterval(timer);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, value, duration, delay, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}
