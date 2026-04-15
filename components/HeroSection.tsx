import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-start justify-center overflow-hidden bg-[#fffafa] px-[6vw] lg:px-[8vw]">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e5ecff] via-[#fffafa] to-[#fffafa]" />
        <div 
          className="absolute inset-0 opacity-[0.3] mix-blend-multiply"
          style={{
            backgroundImage: 'radial-gradient(#4C6BE8 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#4C6BE8]/15 blur-[120px] rounded-full mix-blend-multiply animate-pulse" />
      </div>

      <div className="relative z-10 flex w-full max-w-[1400px] flex-col justify-center mt-12 md:mt-0">
        
        <h1 className="text-left z-10 w-full text-text-primary font-sans font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(3.5rem,8.5vw,9rem)]">
          <span className="block blur-reveal" style={{ animationDelay: '0.1s' }}>
            BUILT IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C6BE8] to-[#869CE9]">BHARAT.</span>
          </span>
          <span className="block blur-reveal" style={{ animationDelay: '0.2s' }}>
            FOR THE <span className="editorial-italic lowercase text-[#869CE9] tracking-normal">world.</span>
          </span>
        </h1>

        <div className="mt-8 flex w-full max-w-2xl flex-col gap-8 md:mt-10 blur-reveal" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg leading-relaxed text-text-secondary md:text-xl font-sans">
            Aamukh Capital is <strong className="font-bold text-text-primary">The 1% Angel Collective</strong>. We deploy conviction-driven capital to India's next generation of global founders.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#model" className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#4C6BE8] text-white rounded-[10rem] text-[14px] font-mono font-semibold uppercase tracking-wider hover:bg-[#3a58d6] transition-all">
              View Investment Model
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute right-0 bottom-4 hidden lg:flex flex-col items-end gap-3 blur-reveal" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-[2rem] border border-[#4C6BE8]/10 bg-white/60 shadow-sm px-6 py-4 backdrop-blur-md flex flex-col items-end min-w-[180px]">
            <span className="font-mono text-[10px] text-[#4C6BE8] font-bold uppercase tracking-widest mb-1">Portfolio Conviction</span>
            <div className="text-3xl font-sans font-bold tracking-tight text-text-primary">98.5%</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;