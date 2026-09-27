'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F]">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.03)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#71717A] text-lg font-[family-name:var(--font-outfit)] tracking-widest uppercase mb-4"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Animated Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-[family-name:var(--font-space-grotesk)] text-7xl md:text-8xl lg:text-9xl font-bold mb-6 animate-gradient-text bg-gradient-to-r from-[#00D4FF] via-[#0EA5E9] to-[#00D4FF] bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          ANISH
        </motion.h1>

        {/* Type Animation Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="rounded-full px-8 py-3 bg-[#00D4FF] text-[#0A0A0F] font-semibold font-[family-name:var(--font-outfit)] text-sm hover:bg-[#00D4FF]/90 transition-colors shadow-[0_0_20px_#00D4FF33] hover:shadow-[0_0_30px_#00D4FF55]"
          >
            View Projects
          </a>
          <Link
            href="/resume"
            className="rounded-full px-8 py-3 border border-[#00D4FF] text-[#00D4FF] font-semibold font-[family-name:var(--font-outfit)] text-sm hover:bg-[#00D4FF]/10 transition-colors"
          >
            Download Resume
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

      {/* CSS Animation for gradient */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-gradient-text {
          animation: gradient-shift 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
