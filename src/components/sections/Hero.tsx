'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate random star/dot particles
  const stars = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* LAYER 1: Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020014] via-[#0A0A2E] to-[#0A0A0F]" />

      {/* LAYER 2: Animated floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orb 1: Purple/Violet - top-left */}
        <div
          className="hero-orb-1 absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: '#8B5CF6', opacity: 0.15 }}
        />
        {/* Orb 2: Cyan - center-right */}
        <div
          className="hero-orb-2 absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: '#00D4FF', opacity: 0.12 }}
        />
        {/* Orb 3: Pink/Magenta - bottom-left */}
        <div
          className="hero-orb-3 absolute bottom-0 -left-24 w-[350px] h-[350px] rounded-full blur-[110px]"
          style={{ background: '#EC4899', opacity: 0.1 }}
        />
        {/* Orb 4: Blue - top-right */}
        <div
          className="hero-orb-4 absolute -top-16 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]"
          style={{ background: '#3B82F6', opacity: 0.08 }}
        />
      </div>

      {/* LAYER 3: Animated grid pattern overlay */}
      <div
        className="absolute inset-0 hero-grid-fade"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* LAYER 4: Mouse-following radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0, 212, 255, 0.06), rgba(139, 92, 246, 0.03) 40%, transparent 70%)`,
        }}
      />

      {/* LAYER 5: Star/dot particles */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full hero-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.id % 3 === 0 ? '#00D4FF' : star.id % 3 === 1 ? '#8B5CF6' : '#E4E4E7',
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-text-glow text-[#9CA3AF] text-lg font-[family-name:var(--font-outfit)] tracking-[0.3em] uppercase mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Animated Name — Multi-color gradient with glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-name-gradient font-[family-name:var(--font-space-grotesk)] text-7xl md:text-8xl lg:text-9xl font-bold mb-2 bg-clip-text text-transparent relative"
        >
          ANISH
        </motion.h1>

        {/* Animated glowing beam under the name */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-beam mx-auto mb-8 h-[2px] w-48 md:w-64 origin-center"
        />

        {/* Type Animation Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="h-8 mb-8"
        >
          <TypeAnimation
            sequence={[
              'DevOps Engineer',
              2000,
              'AI Enthusiast',
              2000,
              'Cloud Architect',
              2000,
              'Automation Expert',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl text-[#71717A] font-[family-name:var(--font-jetbrains)]"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="hero-shimmer-btn group relative rounded-full px-8 py-3 bg-[#00D4FF] text-[#0A0A0F] font-semibold font-[family-name:var(--font-outfit)] text-sm transition-all duration-300 shadow-[0_0_20px_#00D4FF33] hover:shadow-[0_0_40px_#00D4FF66] overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="hero-shimmer-sweep absolute inset-0 opacity-0 group-hover:opacity-100" />
          </a>
          <Link
            href="/resume"
            className="group relative rounded-full px-8 py-3 border border-[#00D4FF]/50 text-[#00D4FF] font-semibold font-[family-name:var(--font-outfit)] text-sm transition-all duration-300 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF] hover:shadow-[0_0_20px_#00D4FF22] overflow-hidden"
          >
            <span className="relative z-10">Download Resume</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#71717A]"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>

      {/* All CSS keyframe animations */}
      <style jsx global>{`
        /* ===== Orb floating animations ===== */
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, 60px) scale(1.1); }
          50% { transform: translate(40px, -40px) scale(0.95); }
          75% { transform: translate(-30px, 30px) scale(1.05); }
        }
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-70px, 50px) scale(1.08); }
          50% { transform: translate(-30px, -60px) scale(0.92); }
          75% { transform: translate(50px, -20px) scale(1.04); }
        }
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, -50px) scale(1.12); }
          50% { transform: translate(-40px, -30px) scale(0.9); }
          75% { transform: translate(-20px, 60px) scale(1.06); }
        }
        @keyframes orb-float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 40px) scale(1.1); }
          66% { transform: translate(30px, -30px) scale(0.95); }
        }

        .hero-orb-1 { animation: orb-float-1 20s ease-in-out infinite; }
        .hero-orb-2 { animation: orb-float-2 25s ease-in-out infinite; }
        .hero-orb-3 { animation: orb-float-3 22s ease-in-out infinite; }
        .hero-orb-4 { animation: orb-float-4 18s ease-in-out infinite; }

        /* ===== Star twinkle ===== */
        @keyframes hero-twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .hero-star {
          animation: hero-twinkle 3s ease-in-out infinite;
        }

        /* ===== Grid fade-in with mask ===== */
        .hero-grid-fade {
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }

        /* ===== Name multi-color animated gradient ===== */
        @keyframes hero-name-shift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .hero-name-gradient {
          background-image: linear-gradient(
            90deg,
            #00D4FF 0%,
            #8B5CF6 25%,
            #EC4899 50%,
            #8B5CF6 75%,
            #00D4FF 100%
          );
          background-size: 200% auto;
          animation: hero-name-shift 6s ease-in-out infinite;
          filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.3))
                  drop-shadow(0 0 60px rgba(139, 92, 246, 0.15));
        }

        /* ===== Glowing beam under the name ===== */
        @keyframes hero-beam-pulse {
          0%, 100% { opacity: 0.6; box-shadow: 0 0 8px #00D4FF55, 0 0 20px #00D4FF22; }
          50% { opacity: 1; box-shadow: 0 0 12px #00D4FFAA, 0 0 35px #8B5CF644; }
        }
        .hero-beam {
          background: linear-gradient(90deg, transparent, #00D4FF, #8B5CF6, #00D4FF, transparent);
          animation: hero-beam-pulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        /* ===== Text glow for subtitle ===== */
        .hero-text-glow {
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.15), 0 0 40px rgba(0, 212, 255, 0.05);
        }

        /* ===== Shimmer sweep for primary CTA ===== */
        @keyframes hero-shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .hero-shimmer-sweep {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          transition: opacity 0.3s ease;
        }
        .group:hover .hero-shimmer-sweep {
          animation: hero-shimmer 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
}
