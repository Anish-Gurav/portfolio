'use client';

import { motion } from 'motion/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0D0A1A 0%, #0F0B24 100%)',
      }}
    >
      {/* Seamless transition from About */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0D0A1A] to-transparent pointer-events-none" />

      {/* Decorative: subtle diagonal lines pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.02,
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 40px, #E4E4E7 40px, #E4E4E7 41px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Tech Stack"
          accentGradient="bg-gradient-to-r from-blue-500 to-purple-500"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className={`col-span-2 ${category.gridSpan}`}
            >
              <GlowCard className="p-6 h-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#E4E4E7] mb-1">
                  {category.title}
                </h3>
                {category.description && (
                  <p className="text-sm font-[family-name:var(--font-outfit)] text-[#71717A] mb-4">
                    {category.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="bg-[#00D4FF]/10 text-[#00D4FF] text-xs px-3 py-1 rounded-full font-[family-name:var(--font-outfit)]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
