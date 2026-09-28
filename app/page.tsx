'use client';

import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Stats from './components/Stats';
import Team from './components/Team';
import TrustBadges from './components/TrustBadges';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#08080f]">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      <div className="absolute top-[-10%] md:top-[-20%] left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-25%] md:right-[-15%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-pink-600/20 to-purple-600/10 blur-[100px] md:blur-[160px] rounded-full pointer-events-none" />

      <Hero />
      <TrustMarquee />
      <Services />
      <CaseStudies />
      <Stats />
      <Team />
      <TrustBadges />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}