'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, FileText, Car } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleGetCovered = () => {
    const el = document.querySelector('#contact');
    el?.scrollIntoView?.({ behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    const el = document.querySelector('#services');
    el?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="https://cdn.abacus.ai/images/1948d283-b725-4de4-9a34-23e22b29a8a7.png"
          alt="Modern city road with vehicles at dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2137]/95 via-[#0d2137]/80 to-[#0d2137]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137] via-transparent to-transparent" />
      </motion.div>

      {/* Floating 3D vehicle */}
      <motion.div
        className="absolute right-[5%] top-[20%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] hidden md:block z-10"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 5, 0],
          rotateX: [-5, 0, -5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ perspective: 1000 }}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          <Image
            src="https://cdn.abacus.ai/images/1b77c8cb-265e-4b35-89f3-4bb6f19418f8.png"
            alt="3D rendered luxury SUV"
            fill
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,188,212,0.3)]"
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bcd4]/10 border border-[#00bcd4]/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00bcd4] animate-pulse" />
            <span className="text-[#4fc3f7] text-sm font-medium">Kuttippuram&apos;s Trusted Vehicle Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
          >
            The Complete Online{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7]">Solutions</span>{' '}
            for Your Vehicle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-white/70 mb-8 max-w-lg leading-relaxed"
          >
            Insurance, Tax, License Renewal, Vehicle Tests, and all RTO services — handled professionally under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={handleGetCovered}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] text-[#0d2137] font-bold text-lg rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              Get Covered Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleExploreServices}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00bcd4]/30 text-white font-semibold text-lg rounded-full hover:bg-[#00bcd4]/10 hover:border-[#00bcd4]/50 transition-all duration-300"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-8 mt-12"
          >
            {[
              { icon: Shield, label: 'Insured Vehicles', value: '5000+' },
              { icon: FileText, label: 'Services Completed', value: '10000+' },
              { icon: Car, label: 'Happy Customers', value: '3000+' },
            ]?.map((stat: any, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00bcd4]/10 flex items-center justify-center">
                  {stat?.icon && <stat.icon className="w-5 h-5 text-[#00bcd4]" />}
                </div>
                <div className="hidden sm:block">
                  <div className="text-white font-bold text-sm">{stat?.value ?? ''}</div>
                  <div className="text-white/50 text-xs">{stat?.label ?? ''}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" fill="hsl(207,55%,8%)" />
        </svg>
      </div>
    </section>
  );
}
