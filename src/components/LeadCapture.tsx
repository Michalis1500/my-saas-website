import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/neon-button';
import { Loader2, CheckCircle2, User, Mail, Phone } from 'lucide-react';
import { Particles } from './ui/particles';

export const LeadCapture = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#0a0a0a] border border-white/5 p-10 md:p-14 relative group overflow-hidden shadow-2xl">
      {/* Interactive Particles Background */}
      <Particles
        color="#ffffff"
        quantity={40}
        size={0.6}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-6"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="text-white w-16 h-16" strokeWidth={1} />
              </div>
              <h3 className="text-4xl font-serif italic">Inquiry Filed.</h3>
              <p className="text-xs opacity-40 uppercase tracking-[0.3em] max-w-xs mx-auto leading-relaxed">
                Thank you. Your technical requirements have been received. Expect a response shortly.
              </p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-4 opacity-40 hover:opacity-100 uppercase tracking-widest text-[10px]"
                onClick={() => setStatus('idle')}
              >
                Send New Message
              </Button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-12"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-30 mb-4 block italic">Phase 01: Initiation</span>
                <h3 className="text-4xl font-serif mb-4 italic">Start the Engine.</h3>
                <p className="text-[11px] opacity-40 tracking-wider leading-relaxed font-sans max-w-sm uppercase">
                  Submit specification. I handle the architecture, you focus on the vision.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-20" />
                    <input 
                      required
                      type="text"
                      placeholder="FULL NAME"
                      className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.4em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-20"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-20" />
                    <input 
                      required
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.4em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-20"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-20" />
                    <input 
                      required
                      type="tel"
                      placeholder="PHONE NUMBER"
                      className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.4em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-20"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  variant="solid"
                  size="lg"
                  disabled={status === 'loading'}
                  className="w-full rounded-none h-16 text-[10px] tracking-[0.5em] font-bold"
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                      <motion.div 
                        key="loading"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        <Loader2 className="animate-spin w-4 h-4" />
                        TRANSMITTING
                      </motion.div>
                    ) : (
                      <motion.span 
                        key="idle"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                      >
                        REQUEST CONSULTATION
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

