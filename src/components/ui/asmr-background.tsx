import React, { useEffect, useRef } from 'react';
import { cn } from "@/src/lib/utils";

/**
 * ASMRStaticBackground Component
 * 
 * Features:
 * - High-density particle system using HTML5 Canvas.
 * - Reactive "magnetic vortex" effect on mouse hover.
 * - Visual "friction glow" when particles accelerate.
 * - Glass-shard and charcoal-dust aesthetic.
 */
const ASMRStaticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number;
    let height: number;
    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const PARTICLE_COUNT = 800; 
    const MAGNETIC_RADIUS = isMobile ? 150 : 280; // Smaller radius on mobile
    const VORTEX_STRENGTH = 0.07;
    const PULL_STRENGTH = 0.12;

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 0;
      alpha: number = 0;
      color: string = '';
      rotation: number = 0;
      rotationSpeed: number = 0;
      frictionGlow: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        // 70% Charcoal, 20% Glass, 10% Accents
        const rand = Math.random();
        if (rand > 0.9) {
          this.color = '99, 102, 241'; // Indigo Accent
        } else if (rand > 0.7) {
          this.color = '240, 245, 255'; // Glass
        } else {
          this.color = '80, 80, 85'; // Charcoal
        }
        this.alpha = Math.random() * 0.4 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAGNETIC_RADIUS) {
          const force = (MAGNETIC_RADIUS - dist) / MAGNETIC_RADIUS;
          
          // Magnetic center pull
          this.vx += (dx / dist) * force * PULL_STRENGTH;
          this.vy += (dy / dist) * force * PULL_STRENGTH;

          // Swirl vortex motion (Perpendicular to radius)
          this.vx += (dy / dist) * force * VORTEX_STRENGTH * 10;
          this.vy -= (dx / dist) * force * VORTEX_STRENGTH * 10;

          // Glow based on proximity and velocity
          this.frictionGlow = force * 0.7;
        } else {
          this.frictionGlow *= 0.92;
        }

        // Physics application
        this.x += this.vx;
        this.y += this.vy;

        // Friction / Damping
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Background jitter (frozen static feel)
        this.vx += (Math.random() - 0.5) * 0.04;
        this.vy += (Math.random() - 0.5) * 0.04;

        this.rotation += this.rotationSpeed + (Math.abs(this.vx) + Math.abs(this.vy)) * 0.05;

        // Screen wrap
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;
      }

      draw() {
        if (!ctx) return;
        
        const finalAlpha = Math.min(this.alpha + this.frictionGlow, 0.9);
        ctx.fillStyle = `rgba(${this.color}, ${finalAlpha})`;

        if (isMobile) {
          // Draw simple squares on mobile - Much faster than paths with rotation
          ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
          return;
        }

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Skip shadowBlur on mobile for massive performance gain
        if (this.frictionGlow > 0.3) {
          ctx.shadowBlur = 8 * this.frictionGlow;
          ctx.shadowColor = `rgba(180, 220, 255, ${this.frictionGlow})`;
        }

        // Sharp shard geometry
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 2.5);
        ctx.lineTo(this.size, 0);
        ctx.lineTo(0, this.size * 2.5);
        ctx.lineTo(-this.size, 0);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Dynamic particle count based on screen area & device type
      const currentArea = width * height;
      const baseArea = 1920 * 1080;
      let densityMultiplier = Math.min(Math.max(currentArea / baseArea, 0.3), 1);
      
      // Much more aggressive reduction for mobile
      if (isMobile) densityMultiplier *= 0.3;

      const adjustedCount = Math.floor(PARTICLE_COUNT * densityMultiplier);

      particles = [];
      for (let i = 0; i < adjustedCount; i++) {
        particles.push(new Particle());
      }
    };

    const render = () => {
      // Skips frames on mobile to save CPU/GPU if needed, but 30fps is better than laggy 60
      // For now, let's just keep the simplified draw.
      
      // Create slight motion blur effect
      ctx.fillStyle = 'rgba(5, 5, 8, 0.12)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    init();
    render();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#050508] overflow-hidden">
      {/* Ambient background glow */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #1a1a2e 0%, transparent 70%)`
        }}
      />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />
      
      <style>{`
        :root {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
      `}</style>
      
      <script dangerouslySetInnerHTML={{ __html: `
        const updateCoords = (x, y) => {
          document.documentElement.style.setProperty('--mouse-x', (x / window.innerWidth * 100) + '%');
          document.documentElement.style.setProperty('--mouse-y', (y / window.innerHeight * 100) + '%');
        };
        window.addEventListener('mousemove', e => updateCoords(e.clientX, e.clientY));
        window.addEventListener('touchmove', e => {
          if (e.touches[0]) updateCoords(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });
      `}} />
    </div>
  );
};

export default ASMRStaticBackground;
