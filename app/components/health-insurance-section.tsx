'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedSection from './animated-section';

const HEALTH_BENEFITS = [
  'Cashless treatment at 14,000+ network hospitals',
  'Individual & family floater plans available',
  'Coverage for pre-existing diseases',
  'No claim bonus benefits',
  'Day care procedures covered',
  'Free health check-ups',
];

export default function HealthInsuranceSection() {
  const handleContactClick = () => {
    const el = document.querySelector('#contact');
    el?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091a2a]/60 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
            <Heart className="w-4 h-4 inline mr-1.5 -mt-0.5 fill-current" />
            Health Insurance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Protect Your <span className="text-rose-400">Health</span> Too
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Beyond vehicles, we care about your well-being. MotoNet Solutions is a trusted agent of Star Health Insurance — India&apos;s leading standalone health insurer.
          </p>
        </AnimatedSection>

        {/* Star Health Highlight Card */}
        <AnimatedSection>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden bg-gradient-to-br from-[hsl(207,50%,12%)] via-[hsl(207,50%,10%)] to-[hsl(207,50%,8%)] border border-white/10 shadow-2xl"
          >
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-400" />

            <div className="p-6 sm:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Logo & Info */}
                <div>
                  {/* Agent Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-rose-500/20 to-orange-500/20 border border-rose-500/30 rounded-full mb-6">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    <span className="text-rose-300 text-xs font-bold uppercase tracking-wider">Authorized Agent</span>
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                  </div>

                  {/* Star Health Logo */}
                  <div className="relative w-full max-w-[280px] h-20 mb-6 bg-white rounded-xl p-3">
                    <Image
                      src="/images/insurance/star-health.svg"
                      alt="Star Health Insurance - Official Logo"
                      fill
                      className="object-contain p-2"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Star Health Insurance
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    India&apos;s first standalone health insurance company and a market leader in retail health insurance. Get comprehensive health coverage for you and your family with hassle-free claims and wide hospital networks.
                  </p>

                  <button
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 hover:scale-105"
                  >
                    Get Health Insurance Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right - Benefits */}
                <div className="bg-[hsl(207,45%,14%)]/50 rounded-xl p-6 border border-white/5">
                  <h4 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-400" />
                    Why Star Health?
                  </h4>
                  <div className="space-y-3.5">
                    {HEALTH_BENEFITS.map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust badges */}
                  <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-2">
                    {['No. 1 Health Insurer', 'Claim Ratio 67%+', '14,000+ Hospitals'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-300 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
