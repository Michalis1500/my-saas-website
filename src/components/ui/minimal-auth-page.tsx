import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { ChevronLeftIcon, Grid2x2PlusIcon, User, Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { Particles } from '@/src/components/ui/particles';
import { motion, AnimatePresence } from 'motion/react';

export function MinimalAuthPage({ isSection = false }: { isSection?: boolean }) {
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
		<div className={`relative w-full overflow-hidden bg-brand-secondary text-brand-primary ${!isSection ? 'md:h-screen md:overflow-hidden' : ''}`}>
			<Particles
				color="#ffffff"
				quantity={120}
				ease={20}
				className="absolute inset-0"
			/>
			<div
				aria-hidden
				className="absolute inset-0 isolate -z-10 contain-strict"
			>
				<div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,0.06)_0,hsla(0,0%,55%,.02)_50%,rgba(255,255,255,0.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-[22rem] -rotate-45 rounded-full" />
				<div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
			</div>
			
			<div className={`relative mx-auto flex max-w-6xl flex-col justify-center px-4 ${isSection ? 'py-32' : 'min-h-screen'}`}>
				{!isSection && (
					<Button variant="ghost" className="absolute top-4 left-4 z-50 opacity-40 hover:opacity-100" asChild>
						<a href="/">
							<ChevronLeftIcon className="me-1 size-4" />
							Home
						</a>
					</Button>
				)}

				<div className="mx-auto space-y-4 sm:w-[400px]">
					<div className="flex items-center gap-2 mb-8 justify-center sm:justify-start">
						<Grid2x2PlusIcon className="size-6 text-white" />
						<p className="text-xl font-display font-bold tracking-tight">SaaS Web Crafters</p>
					</div>

					<AnimatePresence mode="wait">
						{status === 'success' ? (
							<motion.div 
								key="success"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-center sm:text-left space-y-6 pt-10"
							>
								<CheckCircle2 className="w-12 h-12 text-white mx-auto sm:mx-0" strokeWidth={1} />
								<h2 className="font-serif text-4xl italic">Inquiry Received.</h2>
								<p className="text-sm opacity-50 uppercase tracking-[0.2em] leading-relaxed">
									Your details have been archived. I will contact you shortly to discuss the specifications of your project.
								</p>
								<Button 
									variant="outline" 
									className="rounded-none border-white/10 uppercase tracking-widest text-[10px]"
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
								className="space-y-8"
							>
								<div className="flex flex-col space-y-1">
									<h1 className="font-serif text-3xl font-light tracking-wide italic">
										Let's talk pricing.
									</h1>
									<p className="text-muted-foreground text-sm opacity-50 uppercase tracking-[0.2em]">
										Enter your technical details below.
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="space-y-4">
										<div className="relative">
											<User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
											<input 
												required
												type="text"
												placeholder="FULL NAME"
												className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.3em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-20"
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											/>
										</div>

										<div className="relative">
											<Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
											<input 
												required
												type="email"
												placeholder="EMAIL ADDRESS"
												className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.3em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-20"
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
											/>
										</div>

										<div className="relative">
											<Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-20" />
											<input 
												required
												type="tel"
												placeholder="PHONE NUMBER"
												className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-[10px] tracking-[0.3em] uppercase focus:border-white focus:outline-none transition-colors placeholder:opacity-20"
												value={formData.phone}
												onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
											/>
										</div>
									</div>

									<Button 
										type="submit" 
										disabled={status === 'loading'}
										className="w-full h-16 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white/90 transition-all rounded-none"
									>
										{status === 'loading' ? (
											<span className="flex items-center gap-2">
												<Loader2 className="animate-spin w-4 h-4" />
												Transmitting...
											</span>
										) : (
											"Request Consultation"
										)}
									</Button>
								</form>
							</motion.div>
						)}
					</AnimatePresence>

					<p className="text-muted-foreground mt-8 text-[10px] opacity-40 uppercase tracking-widest leading-relaxed text-center sm:text-left">
						Personal service for high-performance SaaS. <br />
						Hosted at €75/mo upon completion.
					</p>
				</div>
			</div>
		</div>
	);
}
