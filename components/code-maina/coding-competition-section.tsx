"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronRight, Code2, Terminal, Zap } from "lucide-react";

export default function CodingCompetitionSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [competitionStarted, setCompetitionStarted] = useState(false);

  // Set this to your actual Quizzory link
  const quizzoryLink = "https://quizzory.in/id/67d937f0d96869610d6b0d5c";

  // Set this to your competition date (YYYY, MM-1, DD, HH, MM, SS)
  const competitionDate = new Date(2025, 3, 8, 11, 30, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = competitionDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setCompetitionStarted(true);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-950">
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-gray-200 text-opacity-20 font-mono text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {Math.random() > 0.5 ? "</" : "<"}
              {
                ["div", "span", "code", "h1", "p"][
                  Math.floor(Math.random() * 5)
                ]
              }
              {">"}
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              <Zap className="mr-1 h-3.5 w-3.5" />
              Round 1:MCQ round
            </span>

            <h2 className="mt-6 bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              CODE MANIA
            </h2>

            <p className="mt-6 text-xl text-gray-300 sm:text-2xl">
              Test your skills, solve complex problems, and compete for amazing
              prizes
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {Object.entries(countdown).map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm"
              >
                <span className="text-3xl font-bold text-white">{value}</span>
                <span className="text-sm text-gray-300">
                  {label.charAt(0).toUpperCase() + label.slice(1)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center text-gray-300">
              <div className="flex items-center">
                <Terminal className="mr-2 h-5 w-5 text-purple-400" />
                <span>Multiple Languages</span>
              </div>
              <div className="flex items-center">
                <Code2 className="mr-2 h-5 w-5 text-purple-400" />
                <span>Real-world Problems</span>
              </div>
              <div className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-purple-400" />
                <span>Exciting Prizes</span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: competitionStarted ? 1.05 : 1 }}
              whileTap={{ scale: competitionStarted ? 0.95 : 1 }}
              className="relative"
              onMouseEnter={() => competitionStarted && setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${
                  competitionStarted
                    ? "from-pink-600 to-purple-600"
                    : "from-gray-600 to-gray-700"
                } opacity-75 blur transition duration-1000 ${
                  isHovered ? "animate-pulse" : ""
                }`}
              />
              {competitionStarted ? (
                <a
                  href={quizzoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center rounded-lg bg-black px-8 py-4 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
                >
                  <span className="mr-2">Enter Competition</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </a>
              ) : (
                <button
                  disabled
                  className="relative flex cursor-not-allowed items-center justify-center rounded-lg bg-gray-800 px-8 py-4 font-medium text-gray-400 transition-all duration-200"
                >
                  <span className="mr-2">Competition Not Started</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              )}
            </motion.div>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            {competitionStarted
              ? "Hosted on Quizzory - The ultimate platform for coding competitions"
              : "The competition link will be accessible when the countdown reaches zero"}
          </p>
        </div>
      </div>
    </section>
  );
}
