"use client";
import React, { useEffect, useState } from "react";
import "./preloader.css";
import { motion } from "motion/react";

interface PreloaderProps {
  text: string;
  minLoadingTime?: number;
  onLoadingComplete?: () => void;
}
const Preloader: React.FC<PreloaderProps> = ({
  text,
  minLoadingTime = 2000,
  onLoadingComplete,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) onLoadingComplete();
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [minLoadingTime, onLoadingComplete]);
  return (
    <div className="preloader-container ">
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="flex justify-center items-center mt-20 font-bold text-white">
        {text}
      </h1>
      <div className="absolute mt-20">
        <motion.div
          className="mt-40 h-1 w-48 md:w-64 bg-gray-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5 },
          }}
        >
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: minLoadingTime / 1000,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
