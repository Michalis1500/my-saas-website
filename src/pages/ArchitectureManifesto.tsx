import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ShieldCheck, Cpu, Zap, Globe, TrendingUp, Award, BarChart } from 'lucide-react';
import ASMRBackground from '../components/ui/asmr-background';

export const ArchitectureManifesto = () => {
  return (
    <main className="relative bg-brand-secondary selection:bg-brand-accent selection:text-white min-h-screen">
      {/* Interactive Background */}
      <ASMRBackground />
      
      {/* Content */}
      <div className="relative z-10 px-6 py-12 md:p-24 max-w-6xl mx-auto">
        {/* Header */}
        <nav className="mb-16 md:mb-24 flex justify-between items-center">
            <a href="/" className="group flex items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ChevronLeft size={14} />
                </div>
                Return to Core
            </a>
            <span className="text-[9px] uppercase tracking-[0.5em] opacity-20 hidden lg:block italic">Document v1.0.4 / Architecture Manifesto</span>
        </nav>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="space-y-24 md:space-y-32"
        >
          {/* Hero Section */}
          <section className="space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-9xl font-serif leading-[1] md:leading-[0.85] tracking-tighter">
              The Digital <br className="sm:hidden" />
              <span className="italic opacity-60">Architecture.</span>
            </h1>
            <p className="max-w-xl text-xs md:text-base leading-relaxed opacity-40 uppercase tracking-widest">
              Why most digital products fail and how we architect for the top 1%. 
              Stability is not an accident; it is the result of intentional precision.
            </p>
          </section>

          {/* Section 01: What We Fix */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-12">
                <div>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-8 block">Problem Matrix</span>
                    <h2 className="text-3xl md:text-4xl font-serif italic mb-12">The Friction We Eliminate.</h2>
                </div>
                <div className="space-y-12">
                   {[
                     { 
                       icon: <Cpu className="opacity-40" size={24} strokeWidth={1} />, 
                       title: "Operational Stagnation", 
                       desc: "Traditional businesses lose 40% of their efficiency to manual repetitive tasks. We automate the mundane, freeing human capital for creative vision." 
                     },
                     { 
                       icon: <ShieldCheck className="opacity-40" size={24} strokeWidth={1} />, 
                       title: "Security Fragility", 
                       desc: "Outdated systems are liabilities. Our architecture implements Zero-Trust protocols and real-time security auditing by default." 
                     },
                     { 
                       icon: <TrendingUp className="opacity-40" size={24} strokeWidth={1} />, 
                       title: "Scaling Bottlenecks", 
                       desc: "If your software can't handle 1,000x traffic in a minute, it's a liability. We use serverless, globally distributed clusters." 
                     }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="shrink-0 pt-1">{item.icon}</div>
                        <div className="space-y-2">
                           <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase">{item.title}</h3>
                           <p className="text-xs opacity-40 leading-relaxed max-w-sm uppercase tracking-wider">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-[1px] bg-white/10" />
                <div className="absolute top-0 right-0 h-24 w-[1px] bg-white/10" />
                
                <h3 className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase opacity-20 italic">The Performance Gap</h3>
                <div className="space-y-4 text-[11px] md:text-xs opacity-40 leading-relaxed uppercase tracking-wider">
                    <p>A website shouldn't just sit there. It should work for you.</p>
                    <p>Most websites are like paper flyers. They look nice, but they don't do anything.</p>
                    <p className="pt-2 font-bold opacity-60">We build smart websites that act like a full-time sales team:</p>
                    <ul className="space-y-2 list-none">
                        <li>— They grab people's attention.</li>
                        <li>— They turn casual visitors into paying customers.</li>
                        <li>— They make you money even when you're not working.</li>
                    </ul>
                </div>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[9px] opacity-20">LATENCY REDUCTION</span>
                        <span className="text-xl font-serif">94.2%</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] opacity-20">AVAILABILITY</span>
                        <span className="text-xl font-serif">99.9%</span>
                    </div>
                </div>
            </div>
          </section>

          {/* Section 02: Why Website */}
          <section className="space-y-12 md:space-y-16">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <h2 className="text-3xl md:text-6xl font-serif italic">Why a Website is Non-Negotiable.</h2>
                <p className="max-w-xs text-[8px] md:text-[9px] uppercase tracking-[0.3em] opacity-30">The Digital HQ is the source of all authority in modern business.</p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                    { icon: <Globe size={20} strokeWidth={1} />, title: "Global reach", desc: "Open to every time zone, every device, 24/7." },
                    { icon: <Award size={20} strokeWidth={1} />, title: "Brand Authority", desc: "Control the narrative and establish instant credibility." },
                    { icon: <BarChart size={20} strokeWidth={1} />, title: "Data Insights", desc: "Understand exactly who your users are and what they want." },
                    { icon: <Zap size={20} strokeWidth={1} />, title: "Velocity", desc: "Deploy changes, products, and ideas in milliseconds." }
                ].map((item, i) => (
                    <div key={i} className="border border-white/5 p-8 space-y-6 hover:bg-white/[0.02] transition-colors group">
                        <div className="opacity-20 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                        <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase">{item.title}</h4>
                        <p className="text-[11px] opacity-30 leading-relaxed uppercase tracking-widest">{item.desc}</p>
                    </div>
                ))}
             </div>
          </section>

          {/* CTA Footer */}
          <section className="py-24 md:py-32 border-t border-white/5 text-center space-y-8">
             <h2 className="text-3xl md:text-4xl font-serif italic opacity-60">Ready to Upgrade your Layer?</h2>
             <a 
                href="/" 
                className="inline-block px-10 py-5 md:px-12 md:py-6 bg-white text-black font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] hover:bg-neutral-200 transition-all w-full sm:w-auto"
             >
                Initialize Project
             </a>
          </section>

        </motion.div>
      </div>

      {/* Side Label */}
      <div className="fixed top-1/2 left-10 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[10px] items-center uppercase tracking-[0.4em] opacity-10 origin-left -rotate-90">
            <span className="w-12 h-[1px] bg-white mb-4" />
            Theoretical Framework: The Digital HQ
      </div>
    </main>
  );
};
