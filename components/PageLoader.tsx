'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + Math.random() * 18 + 4, 95);
      setProgress(current);
    }, 160);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setIsLoading(false), 350);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          {/* Logo + progress bar stacked */}
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Logo */}
            <div className="relative w-52 h-16">
              <Image
                src="/logo.png"
                alt="Aamukh Capital"
                fill
                priority
                className="object-contain mix-blend-multiply"
              />
            </div>

            {/* Progress bar — directly below logo */}
            <motion.div
              className="w-52"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="w-full h-[2px] bg-[#4C6BE8]/12 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#4C6BE8]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
