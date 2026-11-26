'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import AnimatedSection from './animated-section';

const VEHICLES = [
  {
    name: 'Cars & Sedans',
    image: '/images/abacus-originals/vehicle-cars.png',
    desc: 'Comprehensive coverage for personal cars and sedans',
  },
  {
    name: 'Motorcycles',
    image: '/images/abacus-originals/vehicle-motorcycles.jpg',
    desc: 'Insurance and RTO services for two-wheelers',
  },
  {
    name: 'Commercial Trucks',
    image: '/images/truck.png',
    desc: 'Fleet management and commercial vehicle documentation',
  },
  {
    name: 'SUVs & Crossovers',
    image: '/images/abacus-originals/vehicle-suvs.jpg',
    desc: 'Premium services for luxury and off-road vehicles',
  },
  {
    name: 'Auto Rickshaws',
    image: '/images/abacus-originals/vehicle-auto-rickshaw.png',
    desc: 'Specialized services for three-wheeler registration',
  },
  {
    name: 'Private Buses',
    image: '/images/abacus-originals/vehicle-buses.png',
    desc: 'Complete documentation for private and tourist buses',
  },
];

export default function VehicleShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  return (
    <section id="vehicles" ref={containerRef} className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/60 via-transparent to-[#0a1929]/60" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00bcd4]/10 border border-[#00bcd4]/20 rounded-full text-[#4fc3f7] text-sm font-medium mb-4">
            We Cover All Vehicles
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Services for <span className="text-[#00bcd4]">Every</span> Vehicle
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From two-wheelers to commercial trucks, we provide expert RTO and insurance services for all types of motor vehicles.
          </p>
        </AnimatedSection>

        <motion.div
          style={{ rotateX, perspective: 1000 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {VEHICLES?.map((vehicle: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative perspective-1000">
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="preserve-3d"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-[hsl(207,50%,12%)] to-[hsl(207,50%,8%)] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={vehicle?.image ?? ''}
                      alt={vehicle?.name ?? 'Vehicle'}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_10px_30px_rgba(0,188,212,0.2)]"
                      loading="lazy"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00bcd4]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#00bcd4] transition-colors">
                      {vehicle?.name ?? ''}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">{vehicle?.desc ?? ''}</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
