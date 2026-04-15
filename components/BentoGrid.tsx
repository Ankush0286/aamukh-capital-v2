"use client";

import React from "react";
import EcosystemCard from "./BentoCards/EcosystemCard";
import FunnelCard from "./BentoCards/FunnelCard";
import Card4 from "./BentoCards/Card4";
import Card5 from "./BentoCards/Card5";

export default function BentoGrid() {
  return (
    <section className="w-full bg-snow py-24 px-6 md:px-10 font-geom overflow-hidden flex flex-col items-center relative selection:bg-brand selection:text-white">
      
      {/* Decorative Background Glows mimicking brand style */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] -left-[10%] w-[50%] max-w-[800px] h-[50%] max-h-[800px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] max-w-[600px] h-[50%] max-h-[600px] rounded-full bg-brand/10 blur-[120px]" />
      </div>

      {/* Header Area */}
      <div className="max-w-4xl text-center mb-16 z-10 flex flex-col items-center pt-8">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/60 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          <span className="font-mono text-[11px] font-bold tracking-widest text-text-muted uppercase">
            Aamukh Thesis
          </span>
        </div>
        
        {/* Headings */}
        <h2 className="font-geom font-medium text-4xl md:text-5xl lg:text-5xl text-text-primary mb-6 tracking-tight leading-[1.1]">
          Providing structured, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-300">belief-driven</span> capital.
        </h2>
        <p className="font-geom text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed text-balance">
          We operate dynamically across the inception and inflection stages, deploying founder-first capital alongside our active operator network.
        </p>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-[1100px] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Top Left - Ecosystem Card (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <EcosystemCard />
          </div>

          {/* Right Column - Funnel Card (Tall: Spans 2 rows) */}
          <div className="lg:col-span-1 lg:row-span-2 flex h-full">
            <FunnelCard />
          </div>

          {/* Bottom Left - Remaining Cards (1 column each) */}
          <div className="lg:col-span-1">
            <Card4 />
          </div>
          <div className="lg:col-span-1">
            <Card5 />
          </div>

        </div>
      </div>
      
    </section>
  );
}