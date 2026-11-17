'use client';

import { useState, useEffect } from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  const handleScrollTop = () => {
    window?.scrollTo?.({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[hsl(207,55%,5%)] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/motonet-logo.png"
                  alt="MotoNet Solutions Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">Moto<span className="text-[#00bcd4]">Net</span></span>
                <span className="block text-[10px] text-[#4fc3f7]/70 -mt-1 tracking-widest uppercase">Solutions</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              The Complete Online Solutions for your vehicle. Trusted by thousands of vehicle owners in Kuttippuram and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Services', 'About', 'Contact']?.map((link: string) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.querySelector(`#${link?.toLowerCase?.() ?? ''}`);
                    el?.scrollIntoView?.({ behavior: 'smooth' });
                  }}
                  className="block text-white/50 hover:text-[#00bcd4] text-sm transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+919020217721" className="flex items-center gap-2 text-white/50 hover:text-[#00bcd4] text-sm transition-colors">
                <Phone className="w-4 h-4" /> +91-9020217721
              </a>
              <a
                href="https://wa.me/919020217721"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-green-400 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
              <span className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Amana Hospital Road, Near Taxi Stand, Bus Stand Kuttippuram, Malappuram, Kerala-679571
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
          <p className="text-white/30 text-xs">
            &copy; {year} MotoNet Solutions. All rights reserved.
          </p>
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-[#00bcd4]/10 border border-[#00bcd4]/20 flex items-center justify-center text-[#00bcd4] hover:bg-[#00bcd4]/20 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
