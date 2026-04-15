import React from 'react';

const Card3: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[360px] bg-white rounded-card md:rounded-[2rem] p-6 md:p-8 flex flex-col border border-border shadow-sm font-geom relative overflow-hidden group">
      
      {/* Geometric background */}
      <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-brand/5 rotate-45 rounded-[3rem] pointer-events-none" />
      <div className="absolute bottom-[20px] left-[-30px] w-[150px] h-[150px] bg-brand/5 rounded-full pointer-events-none" />

      <div className="flex-1 w-full relative flex flex-col items-center justify-center mb-6 z-10 gap-8">
        
        {/* Mockups Container */}
        <div className="flex items-center gap-4 w-full justify-center max-w-[280px]">
          
          {/* Discovery Card */}
          <div className="flex-1 bg-white border border-border rounded-xl p-4 shadow-sm flex flex-col items-center gap-3 transform transition-transform duration-500 group-hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-8" />
                <path d="M12 14c-4-4-4-9 0-12 4 3 4 8 0 12z" />
              </svg>
            </div>
            <div className="text-center">
               <span className="block font-mono text-[10px] text-text-muted uppercase tracking-widest mb-0.5">₹5–25L</span>
               <span className="block font-medium text-[15px] text-text-primary">Discovery</span>
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex-shrink-0 w-8 flex items-center justify-center opacity-40">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4C6BE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4">
               <line x1="0" y1="12" x2="24" y2="12" />
               <polygon points="20 8 24 12 20 16" fill="#4C6BE8" stroke="none" />
             </svg>
          </div>

          {/* Signal Card */}
          <div className="flex-1 bg-white border border-brand/20 rounded-xl p-4 shadow-[0_8px_20px_rgba(76,107,232,0.1)] flex flex-col items-center gap-3 transform transition-transform duration-500 delay-100 group-hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22v-8" />
                  <path d="M12 14C8 14 5 11 5 7c0-3 3-5 7-5s7 2 7 5c0 4-3 7-7 7z" />
                  <circle cx="10" cy="7" r="1.5" fill="currentColor" />
                  <circle cx="14" cy="9" r="1.5" fill="currentColor" />
               </svg>
            </div>
            <div className="text-center">
               <span className="block font-mono text-[10px] text-brand/80 uppercase tracking-widest mb-0.5">₹1–10Cr</span>
               <span className="block font-medium text-[15px] text-text-primary">Signal</span>
            </div>
          </div>

        </div>

        {/* Sleek Progress Bar */}
        <div className="w-full max-w-[260px] flex flex-col gap-2">
          <div className="w-full bg-background-secondary rounded-full h-1.5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-brand to-[#869CE9] w-[75%] rounded-full shadow-[0_0_10px_rgba(76,107,232,0.5)] transition-all duration-1000 origin-left"></div>
          </div>
          <div className="flex justify-between w-full font-mono text-[10px] text-text-muted">
            <span>Inception</span>
            <span>Inflection</span>
          </div>
        </div>

      </div>

      <div className="mt-auto z-10 pt-5 border-t border-border/50 text-center">
        <h3 className="text-[19px] font-medium text-text-primary mb-2 tracking-tight">Two-Stage Thesis</h3>
        <p className="text-[14px] text-text-secondary leading-relaxed">
          Positioning the Discovery and Signal programs as the primary investment vehicles.
        </p>
      </div>
    </div>
  );
};

export default Card3;