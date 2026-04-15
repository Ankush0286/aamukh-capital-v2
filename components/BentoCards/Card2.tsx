import React from 'react';

const Card2: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px] bg-white rounded-card md:rounded-[2rem] p-6 md:p-8 flex flex-col border border-border shadow-sm font-geom relative overflow-hidden group">
      
      <style>{`
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slowSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes energyFlow {
          to { stroke-dashoffset: -160; }
        }
        .anim-spin { animation: slowSpin 25s linear infinite; }
        .anim-spin-reverse { animation: slowSpinReverse 25s linear infinite; }
        .anim-energy { animation: energyFlow 2s linear infinite; }
      `}</style>
      
      <div className="flex-1 w-full relative flex items-center justify-center mb-6 z-10 py-10">
        
        {/* Soft Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand/10 blur-[50px] rounded-full pointer-events-none" />

        <div className="relative w-[260px] h-[260px] flex items-center justify-center">
          
          {/* Orbital Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 260">
             <circle cx="130" cy="130" r="90" fill="none" stroke="#f3f3f3" strokeWidth="2" strokeDasharray="8 8" className="anim-spin" style={{ transformOrigin: '130px 130px' }} />
             
             {/* Energy pulses */}
             <path d="M 40 130 a 90 90 0 1 1 180 0 a 90 90 0 1 1 -180 0" fill="none" stroke="#4C6BE8" strokeWidth="3" strokeDasharray="8 150" strokeLinecap="round" className="anim-energy absolute" style={{ transformOrigin: '130px 130px' }} />
          </svg>

          {/* Outermost Rotating Container */}
          <div className="absolute inset-0 anim-spin" style={{ transformOrigin: '130px 130px' }}>
             
             {/* Node 1: Founder Support */}
             <div className="absolute top-[40px] left-[130px] -translate-x-1/2 -translate-y-1/2">
                <div className="anim-spin-reverse w-[80px] h-[80px] bg-white border border-border shadow-lg rounded-2xl flex flex-col items-center justify-center gap-1 z-20">
                   <svg viewBox="0 0 24 24" fill="none" stroke="#4C6BE8" strokeWidth="2" className="w-6 h-6" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                     <circle cx="9" cy="7" r="4"></circle>
                     <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                   </svg>
                   <span className="font-mono text-[9px] uppercase tracking-wider text-text-primary text-center leading-tight mt-1">Founder<br/>Support</span>
                </div>
             </div>

             {/* Node 2: Capital */}
             <div className="absolute bottom-[40px] left-[130px] -translate-x-1/2 translate-y-1/2">
                <div className="anim-spin-reverse w-[80px] h-[80px] bg-white border border-border shadow-lg rounded-2xl flex flex-col items-center justify-center gap-1 z-20">
                   <svg viewBox="0 0 24 24" fill="none" stroke="#4C6BE8" strokeWidth="2" className="w-6 h-6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M6 12h.01M18 12h.01"></path>
                   </svg>
                   <span className="font-mono text-[9px] uppercase tracking-wider text-text-primary mt-1">Capital</span>
                </div>
             </div>

          </div>

          {/* Central Node: Conviction */}
          <div className="relative z-30 w-24 h-24 bg-brand rounded-2xl shadow-[0_10px_30px_rgba(76,107,232,0.4)] border border-brand/50 flex flex-col items-center justify-center text-white scale-100 transition-transform duration-500 hover:scale-110">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 mb-1" strokeLinecap="round" strokeLinejoin="round">
               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
             </svg>
             <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-white">Conviction</span>
          </div>

        </div>
      </div>

      <div className="mt-auto z-10 pt-6 border-t border-border/50 text-center">
        <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-2 tracking-tight">The Inflection Flywheel</h3>
        <p className="text-[15px] text-text-secondary leading-relaxed max-w-[90%] mx-auto">
          Showing the unique combination of founder-first support and high-conviction capital.
        </p>
      </div>
    </div>
  );
};

export default Card2;