'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[hsl(207,55%,8%)]/90 backdrop-blur-xl shadow-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <Image
                  src="/motonet-logo.png"
                  alt="MotoNet Solutions Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white">Moto<span className="text-[#00bcd4]">Net</span></span>
                <span className="block text-[10px] text-[#4fc3f7]/70 -mt-1 tracking-widest uppercase">Solutions</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS?.map((item: any) => (
              <button
                key={item?.href}
                onClick={() => handleNavClick(item?.href ?? '#')}
                className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {item?.label ?? ''}
              </button>
            ))}
            <a
              href="tel:+919020217721"
              className="ml-3 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] text-[#0d2137] font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(207,55%,8%)]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS?.map((item: any) => (
                <button
                  key={item?.href}
                  onClick={() => handleNavClick(item?.href ?? '#')}
                  className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item?.label ?? ''}
                </button>
              ))}
              <a
                href="tel:+919020217721"
                className="flex items-center justify-center gap-2 mt-3 px-5 py-3 bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] text-[#0d2137] font-semibold rounded-full"
              >
                <Phone className="w-4 h-4" />
                Call +91-9020217721
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
