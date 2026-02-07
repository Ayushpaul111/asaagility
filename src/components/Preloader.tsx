"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BatteryPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F7F7F7]"
        >
          {/* Compact Brand Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 text-center">
              ASA AGILITY
            </h1>
          </motion.div>

          {/* Compact Battery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="relative flex flex-col items-center"
          >
            {/* Subtle glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 bg-[#42F5C2]/20 blur-xl rounded-full"
            />

            {/* Battery Container - Centered */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-32 sm:w-36">
                <div className="relative h-14 sm:h-16 border-2 border-gray-900 rounded-lg overflow-hidden bg-white shadow-sm">
                  {/* Battery Terminal */}
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-6 sm:h-7 bg-gray-900 rounded-r" />

                  {/* Battery Fill */}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0.5 bg-gradient-to-r from-[#5C905E] to-[#42F5C2] rounded"
                  >
                    {/* Subtle shine */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 0.3,
                      }}
                      className="absolute inset-0 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Minimal Progress Indicator - Centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 flex items-center justify-center"
            >
              <div className="text-sm text-gray-600 font-medium tabular-nums">
                {Math.round(progress)}%
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BatteryPreloader;
