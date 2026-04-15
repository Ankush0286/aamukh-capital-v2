'use client';

import NavigationSection from '@/components/NavigationSection';
import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import MarketVisionSection from '@/components/MarketVisionSection';
import CorePhilosophySection from '@/components/CorePhilosophySection';
import BentoGrid from '@/components/BentoGrid';
import FundStructureSection from '@/components/FundStructureSection';
import InteractiveDualModel from '@/components/InteractiveDualModel';
import PipelineShowcaseSection from '@/components/PipelineShowcaseSection';
import FlywheelModelSection from '@/components/FlywheelModelSection';
import TeamExpertiseSection from '@/components/TeamExpertiseSection';
import CallToActionSection from '@/components/CallToActionSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-snow selection:bg-brand selection:text-white">
      <NavigationSection />
      
      {/* 1. THE HOOK */}
      <HeroSection />
      <MarqueeSection baseVelocity={-30} scrollSensitivity={0.5} />
      
      {/* 2. THE CONTEXT (Breather) */}
      <ValuePropositionSection />
      
      {/* 3. THE MINDSET */}
      <CorePhilosophySection />
      
      {/* 4. EXECUTIVE SUMMARY (Heavy Visual) */}
      <BentoGrid />
      
      {/* 5. ALIGNMENT & MATH (Breather) */}
      {/* Putting this here breaks up the Bento & Dual Model perfectly */}
      <FundStructureSection />
      
      {/* 6. CAPITAL DEPLOYMENT (Heavy Visual) */}
      <InteractiveDualModel />
      
      
      {/* 7. PROOF OF WORK (Breather) */}
      {/* "Now that you know how we invest, here is who we invested in." */}
      <PipelineShowcaseSection />
      
      {/* 8. POST-INVESTMENT VALUE (Heavy Visual) */}
      {/* "Now that they are in the portfolio, here is how we accelerate them." */}
      <FlywheelModelSection />
      
      
      {/* 9. THE OPERATORS (Breather) */}
      {/* "Here are the people spinning that flywheel." */}
      <TeamExpertiseSection />

      <MarketVisionSection />
      
      {/* 10. THE ASK */}
      <CallToActionSection />
      
      <FooterSection />
    </main>
  );
}