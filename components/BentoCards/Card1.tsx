import React from 'react';

const Card1: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px] bg-white rounded-card md:rounded-[2rem] p-6 md:p-8 flex flex-col border border-border shadow-sm font-geom relative overflow-hidden group">
      
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#4C6BE8 2px, transparent 2px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="flex-1 w-full relative flex flex-col items-center justify-center mb-6 z-10">
        
        {/* Floating Tag */}
        <div className="absolute top-4 right-4 animate-bounce z-20">
          <div className="px-3 py-1 bg-brand text-white text-[11px] font-mono tracking-widest uppercase rounded-full shadow-lg shadow-brand/20 flex items-center gap-1.5">
            <span>+15% CAGR</span>
          </div>
        </div>

        {/* Chart Canvas */}
        <div className="relative w-full max-w-[340px] h-[180px] mt-8">
          
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 340 160">
            {/* Soft dashed graph - Market Valuation */}
            <path 
              d="M 20 140 Q 180 130 320 60" 
              fill="none" 
              stroke="#D5DCF8" 
              strokeWidth="2.5" 
              strokeDasharray="6 6" 
              strokeLinecap="round" 
            />
            {/* Solid graph - Startups */}
            <path 
              d="M 20 140 C 140 140, 240 100, 320 20" 
              fill="none" 
              stroke="#4C6BE8" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              className="drop-shadow-[0_8px_12px_rgba(76,107,232,0.3)]"
            />

            {/* Axes Lines */}
            <path d="M 20 10 L 20 140 L 330 140" fill="none" stroke="#f3f3f3" strokeWidth="2" strokeLinecap="round" />

            {/* Glowing Peak Point */}
            <circle cx="320" cy="20" r="5" fill="#ffffff" stroke="#4C6BE8" strokeWidth="3" />
            <circle cx="320" cy="20" r="16" fill="#4C6BE8" className="opacity-20 animate-ping" />

            {/* Glowing Market Peak Point */}
            <circle cx="320" cy="60" r="4" fill="#ffffff" stroke="#869CE9" strokeWidth="2" />
          </svg>

          {/* Abstract Unicorn Icon at the Peak */}
          <div className="absolute top-[10px] right-[5px] bg-white border border-border rounded-xl p-2.5 shadow-md translate-x-[40%] -translate-y-full transform hover:scale-105 transition-transform z-30">
             <div className="flex items-center gap-1.5">
               <svg viewBox="0 0 24 24" fill="none" stroke="#4C6BE8" strokeWidth="2.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15 8M15 8L18 12L21 12C21 12 21.5 13 21 14L18 18L15 21H9L5 15C4.5 14 4.5 13 5 12L9 8L9 4Z" />
               </svg>
               <span className="font-mono text-[10px] font-bold text-text-primary tracking-wider uppercase whitespace-nowrap">100+ Unicorns</span>
             </div>
          </div>
          
          {/* Legend / Axes */}
          <div className="absolute bottom-[-24px] left-[20px] font-mono text-[10px] text-text-muted">2014</div>
          <div className="absolute bottom-[-24px] right-[10px] font-mono text-[10px] text-text-muted">2024</div>
          
          <div className="absolute top-[80px] left-[150px] font-geom text-[11px] text-[#869CE9] font-medium -rotate-12 bg-white/80 px-1 rounded backrop-blur-sm z-20">Market Val ($340B)</div>
          <div className="absolute top-[30px] left-[100px] font-geom text-[11px] text-brand font-bold -rotate-12 bg-white/80 px-1 rounded backdrop-blur-sm z-20">Startups (100k+)</div>

        </div>

      </div>

      <div className="mt-auto z-10 pt-6 border-t border-border/50 text-center">
        <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-2 tracking-tight">The India Opportunity</h3>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          Highlighting India&apos;s explosive startup landscape and valuation growth.
        </p>
      </div>
    </div>
  );
};

export default Card1;