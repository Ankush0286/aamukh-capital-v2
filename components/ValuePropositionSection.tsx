import React from 'react';

const ValuePropositionSection = () => {
  return (
    <section id="context" className="w-full bg-snow pt-[8rem] pb-[4rem] px-6 lg:px-10 flex flex-col items-center">
      <div className="max-w-[100rem] w-full mx-auto flex flex-col items-center">
        
        {/* Global Context Stat Banner */}
        <div className="w-full bg-background-secondary rounded-card p-8 md:p-12 border border-border flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white border border-border shadow-sm">
              <span className="font-mono text-xs font-semibold tracking-widest text-brand uppercase">
                The Macro Context
              </span>
            </div>
            <h3 className="font-geom font-medium text-3xl md:text-4xl tracking-[-0.02em] mb-4 text-text-primary leading-tight">
              India's Unprecedented Scale
            </h3>
            <p className="font-geom text-lg text-text-secondary leading-relaxed">
              We are investing in the world's most dynamic startup ecosystem at a historic inflection point. The depth of talent and ambition is driving exponential value creation.
            </p>
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 w-full lg:w-auto shrink-0">
            <div className="bg-white px-6 py-6 rounded-2xl border border-border min-w-[140px] shadow-sm">
              <div className="font-geom text-3xl md:text-4xl font-medium text-brand tracking-tight mb-1">100+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Unicorns</div>
            </div>
            <div className="bg-white px-6 py-6 rounded-2xl border border-border min-w-[140px] shadow-sm">
              <div className="font-geom text-3xl md:text-4xl font-medium text-brand tracking-tight mb-1">100K+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Startups</div>
            </div>
            <div className="bg-white px-6 py-6 rounded-2xl border border-border min-w-[140px] shadow-sm">
              <div className="font-geom text-3xl md:text-4xl font-medium text-brand tracking-tight mb-1">$340B+</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted">Total Valuation</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuePropositionSection;