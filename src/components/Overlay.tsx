import React from 'react';
import { motion } from 'motion/react';
import { Server, Layout, ArrowRight, Zap, Target, Gauge } from 'lucide-react';
import { Button as NeonButton } from '@/src/components/ui/neon-button';
import GradientBordersButton from '@/src/components/ui/gradient-borders-button';
import { FormspreeContact } from './FormspreeContact';
import { useNavigate } from 'react-router-dom';

export const Overlay = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative z-10 scroll-container">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-12 py-8 bg-gradient-to-b from-brand-secondary to-transparent">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border border-brand-primary flex items-center justify-center rotate-45 transform hover:rotate-225 transition-transform duration-700">
            <span className="-rotate-45 font-bold text-xs">S</span>
          </div>
          <span className="text-[10px] tracking-[0.4em] uppercase font-light hidden sm:block">SaaS Web Crafters</span>
        </div>
        <div className="flex items-center space-x-6 md:space-x-10 text-[10px] tracking-[0.2em] uppercase opacity-60 font-medium h-fit">
          <GradientBordersButton 
            className="md:backdrop-blur-sm"
            onClick={() => navigate('/manifesto')}
          >
            Manifesto
          </GradientBordersButton>
          <NeonButton 
            className="text-[10px] uppercase font-bold tracking-widest h-auto py-2.5"
            onClick={scrollToContact}
          >
            Get In Touch
          </NeonButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl md:text-[110px] font-serif font-light leading-[1.1] md:leading-[0.9] tracking-tight mb-8 md:mb-12">
            Digital <br />
            <span className="italic opacity-60">Foundations</span>
          </h1>
          <div className="max-w-sm space-y-8">
            <p className="text-xs md:text-base leading-relaxed opacity-60 font-sans tracking-wide">
              I architect high-performance websites and bespoke SaaS platforms designed to scale with your ambition.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <NeonButton 
                variant="solid" 
                className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] h-auto py-4 px-8 w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Inquire Now
              </NeonButton>
              <div className="flex items-center space-x-4">
                <div className="h-[1px] w-8 md:w-12 bg-brand-primary opacity-30"></div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 italic whitespace-nowrap">Precision Engineering</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content Area: Responsive Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left/Middle Column: Services */}
        <div className="lg:col-span-2 relative">
          <section className="min-h-[150vh] lg:min-h-[250vh] relative pt-24 px-6 md:px-12">
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
              <div className="w-full flex flex-col gap-16 lg:gap-32 pb-20 lg:pb-0">
                <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   className="max-w-md border-l border-white/10 pl-6 md:pl-8 py-4"
                >
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-primary opacity-40 mb-3 block">Service 01</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-light mb-4">SaaS Engineering</h2>
                  <p className="text-xs md:text-sm text-brand-primary opacity-50 leading-relaxed font-sans uppercase tracking-widest">
                    Full-stack development architecture specializing in scalable microservices and lightning-fast cloud deployment.
                  </p>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   className="max-w-md border-l border-white/10 pl-6 md:pl-8 py-4"
                >
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-brand-primary opacity-40 mb-3 block">Service 02</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-light mb-4">User Architecture</h2>
                  <p className="text-xs md:text-sm text-brand-primary opacity-50 leading-relaxed font-sans uppercase tracking-widest">
                    Minimalist, high-conversion UI/UX design that prioritizes performance and technical elegance.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Pricing - Responsive Flow */}
        <div className="relative lg:pt-[100vh] lg:pb-[50vh] px-6 md:px-12 pb-32">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-left lg:text-right space-y-10"
            >
               <div className="space-y-4">
                 <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4 block">Development Phase</span>
                 <div className="space-y-6">
                    <div className="group">
                      <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] opacity-20 block uppercase">Simple Package</span>
                      <h3 className="text-3xl md:text-4xl font-light">€550 <span className="text-xs opacity-20 italic">Initial</span></h3>
                    </div>
                    <div className="group">
                      <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] opacity-20 block uppercase">Better Package</span>
                      <h3 className="text-3xl md:text-4xl font-light">€650 <span className="text-xs opacity-20 italic">Advanced</span></h3>
                    </div>
                    <div className="group">
                      <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] opacity-20 block uppercase">Bespoke</span>
                      <h3 className="text-xl md:text-2xl font-serif italic">Let's talk.</h3>
                    </div>
                 </div>
               </div>

               <div className="pt-10 border-t border-white/5 relative">
                  <div className="absolute -top-6 left-4 lg:left-auto lg:right-4 w-px h-12 bg-white/10" />
                  <ArrowRight size={14} className="rotate-90 opacity-20 absolute -top-1 left-[13px] lg:left-auto lg:right-[13px]" />
                  
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4 block text-left lg:text-right">Infrastructure Phase</span>
                  <h3 className="text-4xl md:text-5xl font-light mb-2">€75 <span className="text-xs md:text-sm opacity-30">/ MO</span></h3>
                  <p className="text-[9px] md:text-[10px] tracking-[0.1em] opacity-40 leading-relaxed uppercase">
                    Hosting, Domain &<br />24/7 Dedicated Maintenance<br />Security Audits
                  </p>
               </div>
            </motion.div>
        </div>
      </div>


      {/* Features Section - 3 Column Layout */}
      <section className="relative z-30 px-6 md:px-12 py-24 md:py-32 bg-brand-secondary border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 md:mb-24 gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic opacity-80 leading-tight">
              Engineered for <br className="hidden sm:block" />
              <span className="not-italic">Velocity.</span>
            </h2>
            <p className="max-w-xs text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 leading-relaxed">
              Three core principles drive every line of code. Performance is not a feature; it's the foundation.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-colors">
                <Zap size={20} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif italic">Lightning Fast</h3>
              <p className="text-xs opacity-40 leading-relaxed uppercase tracking-wider">
                Sub-300ms interactions and server-side optimization ensure zero friction for your users.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-colors">
                <Target size={20} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif italic">Tactical Precision</h3>
              <p className="text-xs opacity-40 leading-relaxed uppercase tracking-wider">
                Every pixel serves a purpose. High-conversion architecture designed for measurable results.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 group"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-colors">
                <Gauge size={20} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif italic">Infinite Scale</h3>
              <p className="text-xs opacity-40 leading-relaxed uppercase tracking-wider">
                Microservice-first approach that grows seamlessly from MVP to Enterprise scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Formspree Contact Section */}
      <FormspreeContact />

      {/* Footer Bar */}
      <footer className="relative z-30 border-t border-white/10 px-6 md:px-12 py-8 md:py-10 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-40 gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-12">
          <span>Based in Europe</span>
          <span className="hidden sm:inline-block md:hidden lg:inline-block">/</span>
          <span>Global Delivery</span>
        </div>
        <div className="text-center md:text-right italic">
          <span>&copy; 2026 / SaaS & Web Engineering</span>
        </div>
      </footer>

    </div>
  );
};
