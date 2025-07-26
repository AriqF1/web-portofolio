'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveLoaderProps {
  onComplete: () => void;
  duration?: number;
}

const InteractiveLoader: React.FC<InteractiveLoaderProps> = ({
  onComplete,
  duration = 3000,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [glitchEffect, setGlitchEffect] = useState<boolean>(false);
  
  const loadingTexts: string[] = [
    "Initializing portfolio...",
    "Loading latest projects...",
    "Configuring skills & certifications...",
    "Almost there, finalizing setup!"
  ];

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = 50;
    const increment = (100 / duration) * interval;

    timerRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        setCurrentTextIndex(Math.min(textIndex, loadingTexts.length - 1));

        if (newProgress >= 95 && !glitchEffect) {
          setGlitchEffect(true);
          setTimeout(() => setGlitchEffect(false), 200);
        }

        if (newProgress >= 100) {
          clearInterval(timerRef.current!);
          setTimeout(() => {
            setShowLoader(false);
          }, 800);
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
  }, [onComplete, duration, loadingTexts.length, glitchEffect]);

  const particleVariants = {
    animate: {
      y: [0, -100, -200],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {showLoader && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { 
              duration: 1.2, 
              ease: [0.6, 0.05, 0.01, 0.9]
            } 
          }}
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'gridMove 20s linear infinite'
              }}
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${20 + Math.sin(i) * 30}%`,
                }}
                animate="animate"
                custom={i}
                transition={{
                  delay: i * 0.3,
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 text-center max-w-lg px-6">
            <motion.div
              className="mb-12 relative"
              initial={{ y: -80, opacity: 0, rotateX: 90 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                rotateX: 0,
                filter: glitchEffect ? 'hue-rotate(180deg)' : 'hue-rotate(0deg)'
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.6, 0.05, 0.01, 0.9],
                filter: { duration: 0.1 }
              }}
            >
              
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-white/70 text-sm font-medium tracking-wider">
                    PORTFOLIO 
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Modern Progress Ring */}
            <motion.div
              className="relative mb-8 mx-auto w-32 h-32"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
            >
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Progress percentage in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-2xl font-bold text-white"
                  key={Math.round(progress)}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Text with Typewriter Effect */}
            <motion.div
              className="mb-8 h-8 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.p
                key={currentTextIndex}
                className="text-white/80 text-lg font-medium"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {loadingTexts[currentTextIndex]}
              </motion.p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              className="flex justify-center space-x-6 opacity-60"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {[
                { icon: '⚡', label: 'Fast' },
                { icon: '💻', label: 'Modern' },
                { icon: '🚀', label: 'Optimized' },
                { icon: '🎨', label: 'Beautiful' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center space-y-1"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs text-white/40 font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Ambient Light Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut"
              }}
            />
          </div>

          <style jsx>{`
            @keyframes gridMove {
              0% { transform: translate(0, 0); }
              100% { transform: translate(50px, 50px); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveLoader;