import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FundStructureSection = () => {
  return (
    <section id="structure" className="w-full bg-snow py-[10rem] px-6 lg:px-10 flex flex-col items-center">
      <div className="max-w-[100rem] w-full mx-auto flex flex-col items-center gap-24">

        {/* Section Header */}
        <div className="flex flex-col items-center w-full border-t border-border pt-16 md:pt-24 gap-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-border shadow-sm">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#4C6BE8] uppercase">
              The Architecture
            </span>
          </div>

          <h2 className="font-geom font-medium text-4xl md:text-5xl lg:text-6xl text-center leading-[1.1] tracking-[-0.04em] text-text-primary text-balance max-w-4xl">
            Structuring Alignment.
          </h2>
          <p className="font-geom text-lg md:text-xl text-text-secondary text-center max-w-[45rem] mt-2 leading-relaxed">
            We reject the industry standard of minimal GP commitment. Our structure is designed entirely around extreme skin in the game and shared upside with our LPs and founders.
          </p>
        </div>

        {/* Data Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-card p-10 flex flex-col gap-4 shadow-sm border border-border/50 hover:border-[#4C6BE8]/30 transition-colors">
             <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Discovery Program Commitment</div>
             <div className="font-geom text-5xl font-medium tracking-tight text-[#4C6BE8]">20%</div>
             <p className="font-geom text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/60">
               GP capital commitment for early-stage inception checks. Ensuring massive alignment.
             </p>
          </div>

           <div className="bg-white rounded-card p-10 flex flex-col gap-4 shadow-sm border border-border/50 hover:border-[#4C6BE8]/30 transition-colors">
             <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Signal Series Commitment</div>
             <div className="font-geom text-5xl font-medium tracking-tight text-[#4C6BE8]">10%</div>
             <p className="font-geom text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/60">
               Direct personal capital deployed alongside syndicate members for growth-stage checks.
             </p>
          </div>

           <div className="bg-white rounded-card p-10 flex flex-col gap-4 shadow-sm border border-border/50 hover:border-[#4C6BE8]/30 transition-colors">
             <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Sector Focus</div>
             <div className="font-geom text-3xl font-medium tracking-tight text-text-primary">Agnostic</div>
             <p className="font-geom text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-border/60">
               We back exceptional founders, regardless of category. Thesis-driven, not trend-following.
             </p>
          </div>

           <div className="bg-[#0A1128] rounded-card p-10 flex flex-col gap-4 shadow-lg border border-[#152873] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#4C6BE8]/20 blur-[40px] rounded-full pointer-events-none" />
             <div className="font-mono text-xs text-[#869CE9] uppercase tracking-wider mb-2 z-10">Application Status</div>
             <div className="font-geom text-3xl font-medium tracking-tight text-white mb-4 z-10">Open</div>
             
             <a href="#apply" className="mt-auto z-10 w-full group flex items-center justify-between gap-2 px-6 py-4 bg-[#4C6BE8] hover:bg-[#2A4ED9] text-white rounded-xl text-sm font-medium transition-all duration-300">
               Submit Thesis
               <ArrowUpRight className="w-4 h-4" />
             </a>
          </div>

        </div>

        {/* Closing Thesis Statement */}
        <div className="w-full max-w-4xl mx-auto text-center mt-12 bg-background-secondary p-12 md:p-16 rounded-[2rem] border border-border">
          <h3 className="font-geom font-medium text-2xl md:text-4xl tracking-[-0.02em] leading-tight text-text-primary mb-6">
            "We are not asset allocators. We are company builders deploying capital as a tool for acceleration."
          </h3>
          <p className="font-mono text-sm tracking-widest text-[#4C6BE8] uppercase">Aamukh Capital Thesis</p>
        </div>

      </div>
    </section>
  );
};

export default FundStructureSection;