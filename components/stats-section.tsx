"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedStat } from "./animated-stat";

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

      <motion.div
        ref={ref}
        className="container px-4 md:px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedStat value={5000} label="Attendees" />
          <AnimatedStat value={100} label="Events" delay={200} />
          <AnimatedStat value={50} label="Speakers" delay={400} />
          <AnimatedStat value={25} label="Sponsors" delay={600} />
        </div>
      </motion.div>
    </section>
  );
}
