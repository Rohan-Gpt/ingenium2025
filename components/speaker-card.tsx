"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SpeakerCardProps {
  name: string;
  role: string;
  image: string;
  topic: string;
}

export function SpeakerCard({ name, role, image, topic }: SpeakerCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-400 text-sm mb-3">{role}</p>
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-3 py-1 rounded-full inline-block">
          <span className="text-xs font-medium text-purple-300">{topic}</span>
        </div>
      </div>
    </motion.div>
  );
}
