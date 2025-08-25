"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveLoaderProps {
  onComplete: () => void;
  duration?: number;
}

const InteractiveLoader: React.FC<InteractiveLoaderProps> = ({
  onComplete,
  duration = 3000,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = 50;
    const increment = (100 / duration) * interval;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          clearInterval(timerRef.current!);
          setTimeout(() => {
            setShowLoader(false);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [onComplete, duration]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {showLoader && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #000000ff 0%, #000000ff 50%, #000000ff 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
              animate={{
                x: [0, 50],
                y: [0, 50],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(45deg, #ffffffff, #ffffffff, #ffffffff)",
                  left: `${10 + i * 6}%`,
                  top: `${20 + Math.sin(i) * 30}%`,
                  boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
                }}
                animate={{
                  y: [0, -150, -300],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-4xl font-extralight text-white tracking-[0.2em] mb-2">
                portofolio
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto"></div>
            </motion.div>

            {/* Modern Progress Ring */}
            <motion.div
              className="relative mb-12 mx-auto w-32 h-32"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: "backOut" }}
            >
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 45 * (1 - progress / 100)
                  }`}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.6))",
                  }}
                />

                <defs>
                  <linearGradient
                    id="progressGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ffffffff" />
                    <stop offset="50%" stopColor="#ffffffff" />
                    <stop offset="100%" stopColor="#ffffffff" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Progress Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-2xl font-bold text-white"
                  key={Math.round(progress)}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    textShadow: "0 0 20px rgba(96, 165, 250, 0.8)",
                  }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-white/80 text-lg font-light tracking-wide">
                Loading Experience...
              </p>
            </motion.div>

            {/* Modern Loading Dots */}
            <motion.div
              className="flex justify-center space-x-2 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: "linear-gradient(45deg, #60a5fa, #a78bfa)",
                    boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Background Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-25"
              style={{
                background:
                  "radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveLoader;
