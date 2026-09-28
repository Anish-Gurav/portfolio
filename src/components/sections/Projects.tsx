'use client';

import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F0B24 0%, #0A1419 100%)',
      }}
    >
      {/* Seamless transition from Skills */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0F0B24] to-transparent pointer-events-none" />

      {/* Decorative: glowing teal accent blob at bottom-left */}
      <div
        className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: '#14B8A6',
          opacity: 0.05,
          filter: 'blur(100px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="What I've been building"
          accentGradient="bg-gradient-to-r from-purple-500 to-pink-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <GlowCard className="p-6 h-full flex flex-col relative">
                {/* Coming Soon Badge */}
                {project.comingSoon && (
                  <span className="absolute top-4 right-4 bg-[#00D4FF]/10 text-[#00D4FF] text-xs px-2 py-1 rounded-full font-[family-name:var(--font-outfit)]">
                    Coming Soon
                  </span>
                )}

                {/* Title */}
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[#E4E4E7] pr-24">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#71717A] text-sm font-[family-name:var(--font-outfit)] mt-2 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((t: string) => (
                    <span
                      key={t}
                      className="bg-[#1a1a2e] text-[#71717A] text-xs px-2 py-1 rounded font-[family-name:var(--font-outfit)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#1a1a2e]">
                  {project.github && (
                    <a
                      href={project.comingSoon ? undefined : project.github}
                      target={project.comingSoon ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className={`transition-colors ${
                        project.comingSoon
                          ? 'text-[#71717A]/30 cursor-not-allowed'
                          : 'text-[#71717A] hover:text-[#00D4FF]'
                      }`}
                      onClick={project.comingSoon ? (e) => e.preventDefault() : undefined}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.comingSoon ? undefined : project.live}
                      target={project.comingSoon ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className={`transition-colors ${
                        project.comingSoon
                          ? 'text-[#71717A]/30 cursor-not-allowed'
                          : 'text-[#71717A] hover:text-[#00D4FF]'
                      }`}
                      onClick={project.comingSoon ? (e) => e.preventDefault() : undefined}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-xs text-[#71717A]/40 font-[family-name:var(--font-outfit)]">
                      Links coming soon
                    </span>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
