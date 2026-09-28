'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { experiences } from '@/data/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1419 0%, #120A14 100%)',
      }}
    >
      {/* Seamless transition from Projects */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A1419] to-transparent pointer-events-none" />

      {/* Decorative: subtle radial gradient from center (pink) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #EC4899 0%, transparent 70%)',
          opacity: 0.03,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Experience & Education"
          accentGradient="bg-gradient-to-r from-pink-500 to-orange-500"
        />

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00D4FF]/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex items-start md:items-center"
                >
                  {/* Glowing dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF] -translate-x-1/2 mt-6 md:mt-0 z-10" />

                  {/* Desktop layout: alternating left/right */}
                  <div
                    className={`ml-10 md:ml-0 w-full md:w-1/2 ${
                      isLeft
                        ? 'md:pr-12 md:text-right'
                        : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isLeft ? -50 : 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      }}
                    >
                      <GlowCard className="p-6">
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            isLeft ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          {/* Type badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                              item.type === 'work'
                                ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                                : 'bg-purple-500/10 text-purple-400'
                            }`}
                          >
                            {item.type === 'work' ? (
                              <Briefcase className="w-3 h-3" />
                            ) : (
                              <GraduationCap className="w-3 h-3" />
                            )}
                            {item.type === 'work' ? 'Work' : 'Education'}
                          </span>

                          <span className="text-[#71717A] text-xs font-body">
                            {item.period}
                          </span>
                        </div>

                        <h3
                          className="font-display font-semibold text-lg text-[#E4E4E7]"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {item.role}
                        </h3>

                        <p className="text-[#00D4FF] text-sm mt-1">
                          {item.company}
                        </p>

                        {item.description && (
                          <p className="text-[#71717A] text-sm mt-3 font-body">
                            {item.description}
                          </p>
                        )}

                        {item.bullets && item.bullets.length > 0 && (
                          <ul
                            className={`text-[#71717A] text-sm list-disc mt-3 space-y-1 ${
                              isLeft
                                ? 'md:list-inside pl-4 md:pl-0'
                                : 'pl-4'
                            }`}
                          >
                            {item.bullets.map((bullet, bIndex) => (
                              <li key={bIndex} className="font-body">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </GlowCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
