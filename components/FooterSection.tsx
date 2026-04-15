import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="w-full bg-white pt-[8rem] pb-[3rem] px-6 lg:px-10 flex flex-col items-center border-t border-border">
      <div className="max-w-[100rem] w-full mx-auto flex flex-col items-center gap-20">

        <div className="w-full flex flex-col md:flex-row justify-between gap-16 md:gap-8 pb-16 border-b border-border/60">
          
           <div className="flex flex-col gap-6 w-full md:w-1/3">
             <a href="/" className="relative h-10 w-48 z-10 block transition-transform hover:scale-105 duration-300">
              <Image 
                src="/logo.png" 
                alt="Aamukh Capital Logo" 
                fill
                className="object-contain object-left mix-blend-multiply"
              />
            </a>
            
            <p className="font-sans text-[15px] leading-relaxed text-text-secondary pr-8 w-5/6 md:w-3/4">
              The 1% Angel Collective. Operator-led capital for founders building generational companies.
            </p>
             <a 
              href="mailto:contact@aamukh.capital" 
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0A1128] text-white rounded-full text-sm font-sans font-medium hover:bg-[#4C6BE8] transition-colors duration-300 w-fit mt-2 shadow-sm"
            >
              contact@aamukh.capital
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
           </div>

          <div className="flex flex-col gap-6 w-full md:w-1/6">
             <h4 className="font-sans text-sm font-bold tracking-wide text-text-primary border-b border-border/80 pb-3">Platforms</h4>
             <ul className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
               <li><a href="#" className="inline-block text-text-secondary hover:text-[#4C6BE8] transition-all">Twitter // X</a></li>
               <li><a href="#" className="inline-block text-text-secondary hover:text-[#4C6BE8] transition-all">LinkedIn</a></li>
               <li><a href="#" className="inline-block text-text-secondary hover:text-[#4C6BE8] transition-all">Substack</a></li>
               <li><a href="#" className="inline-block text-text-secondary hover:text-[#4C6BE8] transition-all">AngelList</a></li>
             </ul>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/6">
             <h4 className="font-sans text-sm font-bold tracking-wide text-text-primary border-b border-border/80 pb-3">Entity</h4>
             <ul className="flex flex-col gap-3 font-sans text-[15px] font-medium tracking-tight">
               <li><a href="#thesis" className="inline-block text-text-secondary hover:text-[#4C6BE8] transition-all">Thesis</a></li>
               <li><a href="#portfolio" className="inline-block text-text-secondary hover:text-[#4C6BE8] transition-all">Portfolio</a></li>
               <li><a href="#team" className="inline-block text-text-secondary hover:text-[#4C6BE8] transition-all">Principals</a></li>
             </ul>
          </div>

          <div className="flex flex-col gap-6 w-full md:w-1/4">
             <h4 className="font-sans text-sm font-bold tracking-wide text-text-primary border-b border-border/80 pb-3">Headquarters</h4>
             <p className="font-mono text-xs text-text-secondary leading-relaxed uppercase tracking-wider">
               Bangalore, India <br/>
               The Global Hub for Technical Innovation.
             </p>
             <div className="mt-2 flex flex-col gap-2 items-start">
               <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                 </span>
                 <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Actively Investing</span>
               </div>
             </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
           <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
             <p className="font-sans font-medium text-sm text-text-muted cursor-default">
               © {new Date().getFullYear()} Aamukh Capital. All rights reserved.
             </p>
           </div>
           
           <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end">
             <a href="#" className="font-sans text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="font-sans text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;