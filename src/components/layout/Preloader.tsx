"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Smooth, cinematic counter progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            onComplete?.();
          }, 350);
          return 100;
        }
        // Organic pacing curve
        const step = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 5) + 2;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 bg-stone-900 text-stone-100 select-none"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between text-xs tracking-mega uppercase font-mono text-stone-400">
            <span>Mitali Bardolia</span>
            <span>41.8781° N, 87.6298° W</span>
          </div>

          {/* Center Brand Identity */}
          <div className="my-auto text-center space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-stone-400 font-mono block">
              Quantitative Finance • FP&amp;A
            </span>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-stone-50">
              MITALI BARDOLIA
            </h1>
            <p className="text-xs text-stone-400 max-w-sm mx-auto font-mono">
              Directing $25M portfolio capital strategy &amp; predictive modeling.
            </p>
          </div>

          {/* Bottom Counter & Status Bar */}
          <div className="flex items-end justify-between border-t border-stone-800 pt-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono block">
                Status
              </span>
              <span className="text-xs text-stone-300 font-mono">
                {progress < 100 ? "Loading Architectural Engine..." : "Ready"}
              </span>
            </div>

            <div className="text-right">
              <span className="text-4xl sm:text-6xl font-light font-mono tracking-tight text-stone-100 tabular-nums">
                {progress.toString().padStart(2, "0")}
                <span className="text-lg sm:text-2xl text-stone-500 font-normal">%</span>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
