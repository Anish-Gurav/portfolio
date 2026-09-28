'use client';

import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '∞', label: 'Curiosity' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0F 0%, #0D0A1A 100%)',
      }}
    >
      {/* Seamless transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A0A0F] to-transparent pointer-events-none" />

      {/* Decorative: large blurred purple circle on the right */}
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: '#8B5CF6',
          opacity: 0.05,
          filter: 'blur(120px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          accentGradient="bg-gradient-to-r from-cyan-400 to-blue-500"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="font-[family-name:var(--font-outfit)] text-[#71717A] text-lg leading-relaxed">
              I&apos;m a passionate{' '}
              <span className="text-[#00D4FF]">final-year student</span> who
              lives at the intersection of{' '}
              <span className="text-[#00D4FF]">DevOps</span> and{' '}
              <span className="text-[#00D4FF]">Artificial Intelligence</span>.
              I believe in building systems that don&apos;t just work — they
              scale, self-heal, and evolve.
            </p>
            <p className="font-[family-name:var(--font-outfit)] text-[#71717A] text-lg leading-relaxed">
              My journey started with a simple curiosity:{' '}
              <span className="text-[#00D4FF]">
                &quot;What if I could automate everything?&quot;
              </span>{' '}
              That question led me deep into{' '}
              <span className="text-[#00D4FF]">cloud infrastructure</span>,{' '}
              <span className="text-[#00D4FF]">CI/CD pipelines</span>,
              containerization, and eventually into the fascinating world of{' '}
              <span className="text-[#00D4FF]">machine learning</span>.
            </p>
            <p className="font-[family-name:var(--font-outfit)] text-[#71717A] text-lg leading-relaxed">
              When I&apos;m not deploying containers or training models,
              you&apos;ll find me exploring new tools, contributing to
              open-source, or writing about the tech that excites me. I thrive
              on solving complex problems and turning chaotic workflows into{' '}
              <span className="text-[#00D4FF]">elegant, automated pipelines</span>.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
              >
                <GlowCard className="p-6 text-center">
                  <div className="text-4xl font-[family-name:var(--font-space-grotesk)] font-bold text-[#00D4FF] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-[family-name:var(--font-outfit)] text-[#71717A]">
                    {stat.label}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
