'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 selection:bg-[#4C6BE8] selection:text-white">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image 
          src="/bg.jpeg" 
          alt="Aamukh Capital Background" 
          fill
          priority
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-white/30" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/80 border border-border backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#4C6BE8] animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-widest text-text-muted uppercase">
            Built in Bharat // <span className="text-[#4C6BE8]">For the world</span>
          </span>
        </motion.div>

        <h1 className="w-full text-text-primary font-sans font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(3.2rem,8vw,8.5rem)] mb-10 drop-shadow-sm">
          <span className="block blur-reveal" style={{ animationDelay: '0.1s' }}>
            The Future of <br className="hidden md:block" />
          </span>
          <span className="block blur-reveal" style={{ animationDelay: '0.2s' }}>
            Smarter <span className="editorial-italic lowercase tracking-normal text-[#4C6BE8]">investing.</span>
          </span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex w-full max-w-2xl flex-col items-center gap-12"
        >
          <p className="text-lg leading-relaxed text-text-secondary md:text-xl font-sans text-balance">
            Aamukh Capital is the 1% Angel Collective. We deploy conviction-driven capital to India's next generation of global founders.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="#apply" className="group flex items-center justify-center gap-2 px-10 py-5 bg-[#0A1128] text-white rounded-full text-[15px] font-sans font-semibold tracking-tight hover:bg-[#152873] transition-all duration-300 shadow-xl shadow-black/20">
              Join Syndicate
            </a>
            
            <button className="flex items-center justify-center gap-3 group">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Play className="w-5 h-5 text-[#4C6BE8] fill-[#4C6BE8] ml-1" />
              </div>
              <span className="font-mono text-[13px] font-bold uppercase tracking-widest text-text-primary">
                Watch Thesis
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;