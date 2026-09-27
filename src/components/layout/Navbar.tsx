'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/anish', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/anish', label: 'LinkedIn' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
      }
    },
    []
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 px-6 md:px-12 py-4 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-[#1a1a2e]/50'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl text-[#E4E4E7]"
          >
            Anish<span className="text-[#00D4FF]">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="relative text-sm font-[family-name:var(--font-outfit)] text-[#71717A] hover:text-[#E4E4E7] transition-colors group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#00D4FF] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/resume"
                  className="relative text-sm font-[family-name:var(--font-outfit)] text-[#71717A] hover:text-[#E4E4E7] transition-colors group"
                >
                  Resume
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#00D4FF] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-2 border-l border-[#1a1a2e] pl-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#71717A] hover:text-[#00D4FF] transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#E4E4E7] p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-[#0A0A0F] border-l border-[#1a1a2e] p-8 flex flex-col md:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-[#E4E4E7] mb-8"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-lg font-[family-name:var(--font-outfit)] text-[#71717A] hover:text-[#E4E4E7] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * navLinks.length }}
                >
                  <Link
                    href="/resume"
                    className="text-lg font-[family-name:var(--font-outfit)] text-[#71717A] hover:text-[#E4E4E7] transition-colors"
                  >
                    Resume
                  </Link>
                </motion.li>
              </ul>

              {/* Social Icons (Mobile) */}
              <div className="mt-auto flex items-center gap-4 pt-8 border-t border-[#1a1a2e]">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[#71717A] hover:text-[#00D4FF] transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
