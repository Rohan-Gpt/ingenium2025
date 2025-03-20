"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import EventModal from "./event-modal";
import { Button } from "../ui/button";

interface Event {
  id: number;
  title: string;
  description: string;
  image?: string;
  date: string;
  category: string;
  rules?: string[];
  price: string;
  link: string;
  isExclusive?: boolean;
  isFeatured?: boolean;
}

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <>
      <motion.div
        ref={ref}
        className={`cursor-pointer group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 ${
          event.isExclusive
            ? "border-2 border-purple-400"
            : "border border-white/10"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-video overflow-hidden">
          <Image
            src={event.image || "/main-poster.png"}
            alt={event.title}
            width={600}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-4 right-4">
          <Badge
            className={`text-white border-none ${
              event.isFeatured
                ? "bg-gradient-to-r from-red-600 to-yellow-500"
                : "bg-gradient-to-r from-purple-600 to-blue-600"
            }`}
          >
            {event.category}
          </Badge>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{event.description}</p>
          <Button
            className="flex-1 cursor-pointer bg-white text-black hover:bg-gray-100"
            onClick={() => setIsModalOpen(true)}
          >
            Register Now
          </Button>
        </div>
      </motion.div>
      <EventModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
