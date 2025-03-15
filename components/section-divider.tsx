"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div ref={ref} className="relative h-24 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </motion.div>
    </div>
  );
}
