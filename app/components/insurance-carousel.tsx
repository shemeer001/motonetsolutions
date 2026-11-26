'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Star } from 'lucide-react';
import AnimatedSection from './animated-section';

const INSURANCE_COMPANIES = [
  {
    name: 'New India Assurance',
    logo: '/images/insurance/new-india.png',
    isDirect: true,
    description: 'Direct Agent - Authorized partner for comprehensive insurance solutions',
  },
  {
    name: 'HDFC ERGO General Insurance',
    logo: '/images/insurance/hdfc-ergo.png',
    isDirect: false,
    description: 'Leading private sector general insurance company',
  },
  {
    name: 'ICICI Lombard General Insurance',
    logo: '/images/insurance/icici-lombard.png',
    isDirect: false,
    description: 'Trusted insurance with quick claim settlement',
  },
  {
    name: 'Bajaj Allianz General Insurance',
    logo: '/images/insurance/bajaj-allianz.png',
    isDirect: false,
    description: 'Reliable coverage with extensive network',
  },
  {
    name: 'Tata AIG General Insurance',
    logo: '/images/insurance/tata-aig.png',
    isDirect: false,
    description: 'Premium insurance backed by Tata Group',
  },
  {
    name: 'SBI General Insurance',
    logo: '/images/insurance/sbi-general.png',
    isDirect: false,
    description: 'Government-backed insurance solutions',
  },
  {
    name: 'Acko Insurance',
    logo: '/images/insurance/acko.png',
    isDirect: false,
    description: 'Digital-first insurance with instant policies',
  },
];

// Duplicate for infinite scroll effect
const MARQUEE_ITEMS = [...INSURANCE_COMPANIES, ...INSURANCE_COMPANIES];

export default function InsuranceCarousel() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/40 via-transparent to-[#0a1929]/40" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#00bcd4]/10 border border-[#00bcd4]/20 rounded-full text-[#4fc3f7] text-sm font-medium mb-4">
            <Shield className="w-4 h-4 inline mr-1.5 -mt-0.5" />
            Insurance Partners
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Trusted <span className="text-[#00bcd4]">Insurance</span> Partners
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We work with India&apos;s leading insurance companies to bring you the best coverage options.
          </p>
        </AnimatedSection>

        {/* Highlighted - New India Assurance Direct Agent */}
        <AnimatedSection className="mb-14">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative mx-auto max-w-2xl p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#00bcd4]/15 via-[hsl(207,50%,12%)] to-[#4fc3f7]/10 border-2 border-[#00bcd4]/40 shadow-xl shadow-cyan-500/10"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] rounded-full">
              <span className="flex items-center gap-1.5 text-[#0d2137] text-xs font-bold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" />
                Direct Agent
                <Star className="w-3.5 h-3.5 fill-current" />
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/images/insurance/new-india.png"
                  alt="New India Assurance - Direct Agent"
                  fill
                  className="object-contain p-2"
                  loading="eager"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  New India Assurance
                </h3>
                <p className="text-[#4fc3f7] font-semibold mb-2">Authorized Direct Agent</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  MotoNet Solutions is a proud direct agent of New India Assurance, one of India&apos;s oldest and most trusted government-owned insurance companies. Get the best rates and instant policy issuance through us.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                  {['Instant Policy', 'Best Rates', 'Claim Support', 'Direct Settlement'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#00bcd4]/10 border border-[#00bcd4]/20 rounded-full text-[#4fc3f7] text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Auto-scrolling Marquee Carousel */}
        <AnimatedSection>
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[hsl(207,55%,8%)] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[hsl(207,55%,8%)] to-transparent pointer-events-none" />

            {/* Marquee track - CSS animation for performance */}
            <div className="overflow-hidden">
              <div
                className="flex gap-8 animate-marquee"
                style={{ width: 'max-content' }}
              >
                {MARQUEE_ITEMS.map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className={`flex-shrink-0 w-48 sm:w-56 p-5 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                      company.isDirect
                        ? 'bg-gradient-to-br from-[#00bcd4]/15 to-[hsl(207,50%,12%)] border-2 border-[#00bcd4]/40 shadow-lg shadow-cyan-500/10'
                        : 'bg-[hsl(207,50%,10%)] border border-white/5 hover:border-[#00bcd4]/20 hover:shadow-lg hover:shadow-cyan-500/5'
                    }`}
                  >
                    <div className="relative h-16 sm:h-20 mb-3 bg-white rounded-lg p-2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain p-1"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-white text-sm font-semibold text-center leading-tight">
                      {company.name}
                    </h4>
                    {company.isDirect && (
                      <span className="mt-2 block text-center text-[10px] font-bold text-[#00bcd4] uppercase tracking-wider">
                        ★ Direct Agent
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}