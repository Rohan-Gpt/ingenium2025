"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  image?: string;
  description: string;
  rules?: string[];
  price: string;
  link: string;
  attendees?: number;
  category?: string;
}

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({
  event,
  isOpen,
  onClose,
}: EventModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-b from-black to-[#08011c]  rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-blue-950/80 p-2 backdrop-blur-sm transition-colors hover:bg-accent"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-64 md:h-80">
          <Image
            src={event.image || "/main-poster.png"}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-4 left-4">
            <Badge className=" bg-white text-black hover:bg-gray-100 text-lg py-1 px-3">
              Competition
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {event.title}
          </h2>

          {/* Event details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-blue-400" />
                <span>8th & 9th April</span>
              </div>
              <Link
                className="flex items-center"
                href={"https://maps.app.goo.gl/kXUpgErZCNsd2x7N6"}
                target="_blank"
              >
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>GNIT</span>
              </Link>

              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-400" />
                <span>Doors open at 10:00 AM</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-3 text-blue-400" />
                <span>{event.price}</span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="text-white mb-4">{event.description}</p>

              <div className="flex gap-3">
                <Link href={event.link} target="_blank">
                  <Button className="flex-1 cursor-pointer bg-white text-black hover:bg-gray-100">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional content */}
          <div className="border-t pt-6">
            <h4 className="font-semibold mt-6 mb-2">Rules & Regulations:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              {event.rules?.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
