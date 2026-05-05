import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Overlay } from './components/Overlay';
import ASMRBackground from './components/ui/asmr-background';
import { ArchitectureManifesto } from './pages/ArchitectureManifesto';
import { NotFound } from './components/ui/ghost-404-page';

function LandingPage() {
  return (
    <main className="relative bg-brand-secondary selection:bg-brand-accent selection:text-white">
      {/* Interactive Kinetic Background */}
      <ASMRBackground />
      
      {/* Content Overlay Layer */}
      <Overlay />
      
      {/* Visual Accents */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[10px] items-center uppercase tracking-[0.4em] opacity-30 origin-left -rotate-90">
           <span className="w-12 h-[1px] bg-white mb-4" />
           SaaS Web Crafters Engineering
        </div>
        
        <div className="absolute bottom-10 right-10 hidden md:flex items-center gap-4 text-[10px] uppercase tracking-widest opacity-50">
           <span>EST. 2026</span>
           <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
           <span>LIVE FEED</span>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/manifesto" element={<ArchitectureManifesto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
