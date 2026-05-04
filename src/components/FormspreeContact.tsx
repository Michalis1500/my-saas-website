import React from 'react';
import { motion } from 'motion/react';
import { Particles } from './ui/particles';
import { User, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button as NeonButton } from './ui/neon-button';

export const FormspreeContact = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 bg-brand-secondary">
      {/* Background Ambience - Desktop Only for performance */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <Particles
          color="#ffffff"
          quantity={60}
          className="absolute inset-0 opacity-10"
        />
      </div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Side: Copy & Pricing */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 mb-4 block italic">Phase 03: Global Deployment</span>
            <h2 className="text-5xl md:text-8xl font-serif font-light leading-none tracking-tighter mb-8">
              Let's <br />
              <span className="italic opacity-60">Connect.</span>
            </h2>
            <p className="text-xs md:text-sm opacity-40 leading-relaxed font-sans max-w-sm uppercase tracking-wider">
              Ready to scale your vision? Submit your specifications and I'll architect your solution.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="space-y-8 relative">
             <div className="space-y-4">
                <div className="flex items-center justify-between group cursor-default">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-[0.2em] opacity-20 uppercase">SIMPLE PACKAGE</span>
                    <span className="text-xl font-serif italic">€550.00</span>
                  </div>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity translate-x-4 group-hover:translate-x-0" />
                </div>

                <div className="flex items-center justify-between group cursor-default">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-[0.2em] opacity-20 uppercase">BETTER PACKAGE</span>
                    <span className="text-xl font-serif italic">€650.00</span>
                  </div>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity translate-x-4 group-hover:translate-x-0" />
                </div>

                <div className="flex items-center justify-between group cursor-default">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-[0.2em] opacity-20 uppercase">BESPOKE / ADVANCED</span>
                    <span className="text-xl font-serif italic">LET'S TALK.</span>
                  </div>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity translate-x-4 group-hover:translate-x-0" />
                </div>
             </div>

             {/* Connection to Maintenance */}
             <div className="pt-8 border-t border-white/5 relative">
                {/* Visual Arrow Connector */}
                <div className="absolute -top-4 left-4 w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <ArrowRight size={12} className="rotate-90 opacity-40" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.3em] opacity-30 uppercase block mb-1">INFRASTRUCTURE</span>
                    <p className="text-[10px] text-white font-bold tracking-[0.1em] uppercase">
                      €75/MO <span className="opacity-30 font-normal ml-2">FOR HOSTING, DOMAIN & 24/7 MAINTENANCE</span>
                    </p>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="flex items-center gap-6 opacity-40 pt-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold tracking-[0.2em] mb-1 uppercase">DIRECT CHANNEL</span>
              <span className="text-xs">michalisst8@gmail.com</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20" />
            <div className="flex flex-col text-[10px]">
              <span className="tracking-[0.1em]">EST. 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form (Exact logic requested) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#0c0c0c] border border-white/5 p-8 md:p-12 shadow-2xl relative"
        >
          {/* Internal Accents */}
          <div className="absolute top-0 right-0 w-20 h-[1px] bg-white/10" />
          <div className="absolute top-0 right-0 h-20 w-[1px] bg-white/10" />

          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif italic mb-2">Technical Inquiry</h3>
            <p className="text-[10px] tracking-[0.2em] opacity-30 uppercase">Secure Transmission via Formspree</p>
          </div>

          <form action="https://formspree.io/f/xgodavql" method="POST" className="space-y-6">
            <div className="space-y-6">
              <div className="relative group">
                <label htmlFor="name" className="block text-[9px] font-bold tracking-[0.3em] mb-2 opacity-30 group-focus-within:opacity-100 transition-opacity">FULL NAME</label>
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    placeholder="ENTER YOUR NAME" 
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.3em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-50 placeholder:text-white"
                  />
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="email" className="block text-[9px] font-bold tracking-[0.3em] mb-2 opacity-30 group-focus-within:opacity-100 transition-opacity">EMAIL ADDRESS</label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    placeholder="ENTER YOUR EMAIL" 
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.3em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-50 placeholder:text-white"
                  />
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="phone" className="block text-[9px] font-bold tracking-[0.3em] mb-2 opacity-30 group-focus-within:opacity-100 transition-opacity">PHONE NUMBER</label>
                <div className="relative">
                  <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    required 
                    placeholder="ENTER YOUR PHONE" 
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.3em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-50 placeholder:text-white"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-6 mt-8 bg-white text-black font-bold uppercase tracking-[0.5em] text-[10px] hover:bg-neutral-200 transition-all flex items-center justify-center gap-4 group"
            >
              TRANSMIT SPECIFICATIONS
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
