'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Award, Clock, Users, Star, TrendingUp } from 'lucide-react';
import AnimatedSection from './animated-section';
import Counter from './counter';

const STATS = [
  { icon: Users, value: 3000, suffix: '+', label: 'Happy Customers' },
  { icon: Award, value: 10, suffix: '+', label: 'Years Experience' },
  { icon: Star, value: 5000, suffix: '+', label: 'Policies Issued' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Success Rate' },
];

const WHY_US = [
  'Direct Agent of New India Assurance',
  'Expert guidance for all Kerala RTO procedures',
  'Competitive insurance premium rates',
  'Quick processing and doorstep service',
  'Complete documentation support',
  'Transparent and honest dealings',
  'Follow-up until task completion',
];

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091a2a] to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS?.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center p-6 bg-[hsl(207,50%,10%)] rounded-2xl border border-white/5 hover:border-[#00bcd4]/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#00bcd4]/10 flex items-center justify-center mb-4">
                {stat?.icon && <stat.icon className="w-7 h-7 text-[#00bcd4]" />}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <Counter end={stat?.value ?? 0} suffix={stat?.suffix ?? ''} />
              </div>
              <div className="text-white/50 text-sm">{stat?.label ?? ''}</div>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 bg-[#00bcd4]/10 border border-[#00bcd4]/20 rounded-full text-[#4fc3f7] text-sm font-medium mb-4">
              About MotoNet Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Your Trusted Partner for All{' '}
              <span className="text-[#00bcd4]">Vehicle</span> Needs
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              MotoNet Solutions is Kuttippuram&apos;s premier motor vehicle services centre, offering comprehensive
              online and offline solutions for every vehicle-related need. With years of dedicated service,
              we have built a reputation for reliability, efficiency, and customer satisfaction.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Whether it&apos;s getting the best insurance deal, renewing your license, paying vehicle tax,
              or navigating complex RTO procedures — our experienced team ensures a smooth, hassle-free experience
              every single time.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-[hsl(207,50%,10%)] rounded-2xl p-8 border border-white/5">
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#00bcd4]" />
                Why Choose Us
              </h3>
              <div className="space-y-4">
                {WHY_US?.map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00bcd4] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item ?? ''}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-4 bg-[#00bcd4]/10 rounded-xl border border-[#00bcd4]/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-[#00bcd4] flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Available 6 Days a Week</div>
                    <div className="text-white/60 text-sm">Mon - Sat, 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
