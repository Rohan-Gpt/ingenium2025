"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl w-16 md:w-24 h-16 md:h-24 flex items-center justify-center border border-white/20">
          <span className="text-2xl md:text-4xl font-bold">
            {timeLeft.days}
          </span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl w-16 md:w-24 h-16 md:h-24 flex items-center justify-center border border-white/20">
          <span className="text-2xl md:text-4xl font-bold">
            {timeLeft.hours}
          </span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl w-16 md:w-24 h-16 md:h-24 flex items-center justify-center border border-white/20">
          <span className="text-2xl md:text-4xl font-bold">
            {timeLeft.minutes}
          </span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl w-16 md:w-24 h-16 md:h-24 flex items-center justify-center border border-white/20">
          <span className="text-2xl md:text-4xl font-bold">
            {timeLeft.seconds}
          </span>
        </div>
        <span className="text-xs md:text-sm mt-2 text-gray-400">Seconds</span>
      </div>
    </div>
  );
}
