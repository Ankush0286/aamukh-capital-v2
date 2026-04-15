'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Import Next Image
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NavigationSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-3 mt-4 lg:px-6">
        <nav className="flex items-center justify-between bg-white/80 w-full rounded-full p-[0.3rem] pl-[0.9rem] shadow-sm border border-border backdrop-blur-md">
          
          {/* LOCAL NEXT IMAGE FOR LOGO */}
          <a href="/" className="relative h-9 w-40 z-10 block transition-transform hover:scale-105 duration-300">
            <Image 
              src="/logo.png" 
              alt="Aamukh Capital Logo" 
              fill
              priority
              className="object-contain object-left mix-blend-multiply"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {['Thesis', 'Programs', 'Portfolio', 'Collective'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-sans font-medium text-text-secondary hover:text-brand transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle Container */}
          <div className="flex items-center gap-2 z-10">
            <a 
              href="#apply" 
              className="hidden md:flex items-center justify-center gap-2 px-5 py-2.5 h-10 bg-[#4C6BE8] text-white rounded-full text-sm font-sans font-semibold hover:bg-brand-600 transition-all active:scale-95 group"
            >
              Join Syndicate
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-background-secondary text-text-primary hover:bg-border transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center pb-20 px-6 animate-in fade-in duration-300">
          <div className="flex flex-col items-center gap-8 w-full max-w-sm">
            {['Thesis', 'Programs', 'Portfolio', 'Collective'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-sans font-bold tracking-tight text-text-primary hover:text-brand transition-colors w-full text-center py-2"
              >
                {link}
              </a>
            ))}
            <div className="w-full flex justify-center mt-6">
              <a 
                href="#apply" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full max-w-[240px] px-8 py-5 bg-[#4C6BE8] text-white rounded-full text-lg font-sans font-bold shadow-xl shadow-brand/20 active:scale-95"
              >
                Join Syndicate
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationSection;