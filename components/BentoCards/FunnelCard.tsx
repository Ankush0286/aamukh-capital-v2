"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate, Variants } from 'framer-motion';
import { Search, PhoneCall, CheckCircle, Microscope, FileText, Presentation } from 'lucide-react';

// Updated data with 6 stages and realistic funnel counts
const stagesData = [
  { Icon: Search, title: 'Initial screening', count: 5000 },
  { Icon: PhoneCall, title: 'Deep live call', count: 850 },
  { Icon: CheckCircle, title: 'Early validation from the IC team', count: 200 },
  { Icon: Microscope, title: 'Deep Research & Insights', count: 45 },
  { Icon: FileText, title: 'Detailed Investment memo', count: 12 },
  { Icon: Presentation, title: 'Investor Showcase', count: 3 },
];

const ANIMATION_INTERVAL = 7000;

const AnimatedCounter = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString() + (to > 1000 ? '+' : '');
      },
    });
    return () => controls.stop();
  }, [to]);

  return <span ref={ref} className="font-geom font-bold">0</span>;
};

const FunnelCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [animationKey, setAnimationKey] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [containerHeight, setContainerHeight] = useState(500);
  const [containerWidth, setContainerWidth] = useState(300);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        setContainerHeight(contentRef.current.offsetHeight);
        setContainerWidth(contentRef.current.offsetWidth);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setAnimationKey(prevKey => prevKey + 1);
      if (contentRef.current) {
        setContainerHeight(contentRef.current.offsetHeight);
        setContainerWidth(contentRef.current.offsetWidth);
      }
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hasAnimated) {
      interval = setInterval(() => {
        setAnimationKey(prevKey => prevKey + 1);
      }, ANIMATION_INTERVAL);
    }
    return () => clearInterval(interval);
  }, [hasAnimated]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, // Slightly faster stagger for 6 items
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 2, ease: 'easeInOut' } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Adjusted Control Points to create a pronounced "S" curve across the tall height
  const controlPoint1Y = containerHeight * 0.3;
  const controlPoint2Y = containerHeight * 0.7;
  const pathData = `M ${containerWidth / 2} 0 C ${-containerWidth / 2} ${controlPoint1Y}, ${containerWidth * 1.5} ${controlPoint2Y}, ${containerWidth / 2} ${containerHeight}`;

  return (
    // Increased min-h to 550px to comfortably fit 6 items
    <div ref={ref} className="w-full h-full min-h-[550px] bg-white rounded-card md:rounded-[2rem] p-6 md:p-8 flex flex-col border border-border shadow-sm font-geom relative overflow-hidden group">
      
      {/* Background Decor */}
      <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-brand/5 rounded-full blur-[40px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-50px] w-[150px] h-[150px] bg-brand/5 rounded-full blur-[50px] pointer-events-none" />

      {/* Header */}
      <div className="mb-6 text-center relative z-20 shrink-0">
        <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-2 tracking-tight">Investment Funnel</h3>
        <p className="text-[14px] text-text-secondary leading-relaxed mx-auto">
          Finding the signal in the noise.
        </p>
      </div>

      {/* Funnel Animation Area - Flex-1 makes it stretch the remaining height */}
      <div ref={contentRef} className="flex-1 w-full relative flex flex-col justify-center z-10 px-0 sm:px-2">
        {hasAnimated && (
          <motion.div
            key={animationKey}
            className="absolute inset-0 flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Base Line SVG */}
            <div className="absolute inset-0 z-0">
              <svg className="w-full h-full" fill="none" viewBox={`0 0 ${containerWidth} ${containerHeight}`} preserveAspectRatio="none">
                <motion.path
                  d={pathData}
                  stroke="#f3f3f3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  variants={pathVariants}
                />
              </svg>
            </div>

            {/* Particles over line */}
            <div className="absolute inset-0 z-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`noise-${i}`}
                  className="absolute w-1.5 h-1.5 bg-brand-200 rounded-full"
                  style={{ offsetPath: `path("${pathData}")` }}
                  initial={{ offsetDistance: "0%", opacity: 0.8 }}
                  animate={{ offsetDistance: `${Math.random() * 80 + 10}%`, opacity: 0 }}
                  transition={{ duration: 2 + Math.random() * 2, delay: 0.5 + Math.random(), ease: 'linear' }}
                />
              ))}
              <motion.div
                className="absolute w-3 h-3 bg-brand rounded-full shadow-[0_0_12px_rgba(76,107,232,0.6)]"
                style={{ offsetPath: `path("${pathData}")` }}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 4, delay: 1, ease: 'easeInOut' }}
              />
            </div>

            {/* Stages Grid Text Overlay - using justify-between to stretch items vertically */}
            <motion.div className="absolute inset-0 grid grid-cols-[1fr_auto] gap-2 sm:gap-4 z-10 py-4" variants={containerVariants}>
              
              {/* Left Side: Text and Icons */}
              <div className="flex flex-col justify-between h-full">
                {stagesData.map((stage) => (
                  <motion.div key={stage.title} variants={itemVariants} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-md p-1.5 rounded-xl border border-border shadow-sm group-hover:border-brand/30 transition-colors w-fit max-w-[180px] sm:max-w-[200px]">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-background-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <stage.Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand" />
                    </div>
                    {/* leading-tight and text-balance help long text (like IC validation) fit nicely */}
                    <h4 className="text-[10px] sm:text-[11px] font-medium text-text-primary pr-2 leading-tight">
                      {stage.title}
                    </h4>
                  </motion.div>
                ))}
              </div>

              {/* Right Side: Numbers */}
              <div className="flex flex-col justify-between items-end h-full">
                {stagesData.map((stage) => (
                  <motion.div key={`${stage.title}-count`} variants={itemVariants} className="bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-border shadow-sm">
                    {/* Adjusted text size down slightly to accommodate 6 items cleanly */}
                    <p className="text-xl sm:text-2xl font-medium text-brand tracking-tight">
                      <AnimatedCounter to={stage.count} />
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

    </div>
  );
};

export default FunnelCard;