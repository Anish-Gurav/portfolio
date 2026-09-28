'use client';

import { motion } from 'motion/react';
import { Mail, Code2, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { MagneticButton } from '@/components/ui/MagneticButton';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/Anish-Gurav',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/anish',
    color: 'hover:text-blue-400',
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com/anish',
    color: 'hover:text-yellow-400',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:anish.gurav01@gmail.com',
    color: 'hover:text-[#00D4FF]',
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #120A14 0%, #0A0A0F 100%)',
      }}
    >
      {/* Seamless transition from Experience */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#120A14] to-transparent pointer-events-none" />

      {/* Decorative: subtle grid pattern (like Hero but dimmer) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.015,
          backgroundImage:
            'linear-gradient(#E4E4E7 1px, transparent 1px), linear-gradient(90deg, #E4E4E7 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Let's Connect"
          subtitle="Got a project in mind? Let's talk."
          accentGradient="bg-gradient-to-r from-orange-500 to-cyan-400"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left column: text + social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#71717A] text-lg font-body leading-relaxed mb-8">
              I'm currently looking for internship and full-time
              opportunities in DevOps and AI Engineering. Feel free to reach
              out!
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlowCard className="p-4 flex items-center gap-3 group cursor-pointer">
                    <link.icon
                      className={`w-5 h-5 text-[#71717A] transition-colors ${link.color}`}
                    />
                    <span className="text-[#E4E4E7] text-sm font-body group-hover:text-[#00D4FF] transition-colors">
                      {link.name}
                    </span>
                  </GlowCard>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right column: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
              
              {/* WEB3FORMS ACCESS KEY - Replace this value with your actual key */}
              <input type="hidden" name="access_key" value="0f9b7499-5436-4482-8526-8cda9353a54e" />
              
              {/* Optional: Redirect back to your site after sending */}
              <input type="hidden" name="redirect" value="https://anishgurav.vercel.app/#contact" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-[#E4E4E7] text-sm font-medium mb-2 font-body"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-[#111119] border border-[#1a1a2e] rounded-xl px-4 py-3 text-[#E4E4E7] placeholder-[#71717A] focus:border-[#00D4FF] focus:outline-none transition-colors font-body"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#E4E4E7] text-sm font-medium mb-2 font-body"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-[#111119] border border-[#1a1a2e] rounded-xl px-4 py-3 text-[#E4E4E7] placeholder-[#71717A] focus:border-[#00D4FF] focus:outline-none transition-colors font-body"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#E4E4E7] text-sm font-medium mb-2 font-body"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#111119] border border-[#1a1a2e] rounded-xl px-4 py-3 text-[#E4E4E7] placeholder-[#71717A] focus:border-[#00D4FF] focus:outline-none transition-colors font-body resize-none"
                />
              </div>

              <MagneticButton>
                <button
                  type="submit"
                  className="bg-[#00D4FF] text-[#0A0A0F] font-semibold rounded-full px-8 py-3 flex items-center gap-2 hover:bg-[#00D4FF]/90 transition-colors font-body"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#1a1a2e] pt-8 mt-16 text-center">
          <p className="text-[#71717A] text-sm font-body">
            Built with ❤️ and mass quantities of caffeine
          </p>
          <p className="text-[#71717A] text-sm font-body mt-2">
            © 2025 Anish. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
