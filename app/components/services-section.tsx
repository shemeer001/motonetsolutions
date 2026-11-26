'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Shield, FileText, CreditCard, ClipboardCheck, Building2, Car, ArrowRight } from 'lucide-react';
import AnimatedSection from './animated-section';

const SERVICES = [
  {
    icon: Shield,
    title: 'Motor Vehicle Insurance',
    description: 'Comprehensive insurance solutions for all vehicle types. Get the best coverage at competitive premiums with hassle-free claims.',
    image: '/images/abacus-originals/service-motor-insurance.jpg',
    color: '#00bcd4',
  },
  {
    icon: CreditCard,
    title: 'Vehicle Tax Services',
    description: 'Quick and efficient road tax payment and renewal services. Avoid penalties with timely tax processing.',
    image: '/images/abacus-originals/service-vehicle-tax.jpg',
    color: '#4fc3f7',
  },
  {
    icon: FileText,
    title: 'License Renewal',
    description: 'Seamless driving license renewal and new application assistance. Complete documentation support provided.',
    image: '/images/abacus-originals/service-license-renewal.jpg',
    color: '#26c6da',
  },
  {
    icon: ClipboardCheck,
    title: 'Vehicle Test Assistance',
    description: 'Expert guidance for fitness certificates, emission tests, and mandatory vehicle inspections.',
    image: '/images/abacus-originals/service-vehicle-test.jpg',
    color: '#00acc1',
  },
  {
    icon: Building2,
    title: 'RTO Services',
    description: 'Complete RTO-related services including registration, transfer of ownership, NOC, and address changes.',
    image: '/images/abacus-originals/service-rto.jpg',
    color: '#0097a7',
  },
  {
    icon: Car,
    title: 'Vehicle Registration',
    description: 'New vehicle registration, re-registration, and duplicate RC services with quick turnaround.',
    image: '/images/abacus-originals/service-registration.jpg',
    color: '#00838f',
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleContactClick = () => {
    const el = document.querySelector('#contact');
    el?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1929]/50 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00bcd4]/10 border border-[#00bcd4]/20 rounded-full text-[#4fc3f7] text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Complete Vehicle <span className="text-[#00bcd4]">Solutions</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From insurance to registration, we handle every aspect of your vehicle documentation needs.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES?.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[hsl(207,50%,10%)] rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 cursor-pointer"
              onClick={handleContactClick}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service?.image ?? ''}
                  alt={service?.title ?? 'Service'}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(207,50%,10%)] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md"
                    style={{ background: `${service?.color ?? '#00bcd4'}20`, border: `1px solid ${service?.color ?? '#00bcd4'}40` }}
                  >
                    {service?.icon && <service.icon className="w-6 h-6" style={{ color: service?.color ?? '#00bcd4' }} />}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#00bcd4] transition-colors">
                  {service?.title ?? ''}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {service?.description ?? ''}
                </p>
                <span className="inline-flex items-center gap-1 text-[#00bcd4] text-sm font-medium group-hover:gap-2 transition-all">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
