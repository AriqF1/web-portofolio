"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveLoaderProps {
  onComplete: () => void;
  duration?: number;
}

const InteractiveLoader: React.FC<InteractiveLoaderProps> = ({
  onComplete,
  duration = 2800,
}) => {
  const [showLoader, setShowLoader] = useState<boolean>(true);

  // Kalimat yang akan dimunculkan kata per kata
  const text = "Crafting logic. Refining design.";
  const words = text.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: {
              duration: 1.2,
              ease: [0.33, 1, 0.68, 1],
            },
          }}
        >
          {/* Main Text Reveal */}
          <div className="flex space-x-2 md:space-x-3 overflow-hidden text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.15, // Muncul berurutan (stagger)
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="absolute bottom-16 w-[1px] bg-neutral-900 dark:bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "40px", opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Identity Stamp */}
          <motion.div
            className="absolute bottom-8 text-xs font-mono tracking-widest uppercase text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Ariq Farhan © {new Date().getFullYear()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveLoader;
