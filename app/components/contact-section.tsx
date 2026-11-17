'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send, User, Mail, FileText, Loader2 } from 'lucide-react';
import AnimatedSection from './animated-section';
import { toast } from 'sonner';

const SERVICE_OPTIONS = [
  'Motor Vehicle Insurance',
  'Vehicle Tax Services',
  'License Renewal',
  'Vehicle Test Assistance',
  'RTO Services',
  'Vehicle Registration',
  'Other',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {};
    if (name) setFormData((prev) => ({ ...(prev ?? {}), [name]: value ?? '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    if (!formData?.name?.trim() || !formData?.message?.trim()) {
      toast.error('Please fill in your name and message.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res?.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/919020217721?text=${encodeURIComponent('Hello MotoNet Solutions, I would like to enquire about your vehicle services.')}`;
    window?.open?.(url, '_blank');
  };

  const handleCall = () => {
    window?.open?.('tel:+919020217721', '_self');
  };

  const handleMap = () => {
    window?.open?.('https://www.google.com/maps/search/Amana+Hospital+Road+Near+Taxi+Stand+Bus+Stand+Kuttippuram+Malappuram+Kerala+679571', '_blank');
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091a2a]/80 to-[#0d2137]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#00bcd4]/10 border border-[#00bcd4]/20 rounded-full text-[#4fc3f7] text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Contact <span className="text-[#00bcd4]">Us</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Reach out for any vehicle-related queries. We are here to help!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              {/* Quick Contact Cards */}
              <button
                onClick={handleCall}
                className="w-full group flex items-center gap-4 p-5 bg-[hsl(207,50%,10%)] rounded-xl border border-white/5 hover:border-[#00bcd4]/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00bcd4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00bcd4]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[#00bcd4]" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-[#4fc3f7]">+91-9020217721</div>
                </div>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full group flex items-center gap-4 p-5 bg-[hsl(207,50%,10%)] rounded-xl border border-white/5 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">WhatsApp</div>
                  <div className="text-green-400">Chat with us instantly</div>
                </div>
              </button>

              <button
                onClick={handleMap}
                className="w-full group flex items-center gap-4 p-5 bg-[hsl(207,50%,10%)] rounded-xl border border-white/5 hover:border-[#00bcd4]/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00bcd4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00bcd4]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#00bcd4]" />
                </div>
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-white/60">Amana Hospital Road, Near Taxi Stand, Bus Stand Kuttippuram, Malappuram, Kerala-679571</div>
                </div>
              </button>

              {/* Privacy Notice */}
              <p className="text-white/40 text-xs px-2">
                Your information is stored securely and used only to respond to your inquiry.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <form
              onSubmit={handleSubmit}
              className="bg-[hsl(207,50%,10%)] rounded-2xl p-6 sm:p-8 border border-white/5"
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="text"
                    name="name"
                    value={formData?.name ?? ''}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-[hsl(207,45%,14%)] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-1 focus:ring-[#00bcd4]/30 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="email"
                    name="email"
                    value={formData?.email ?? ''}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-11 pr-4 py-3 bg-[hsl(207,45%,14%)] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-1 focus:ring-[#00bcd4]/30 transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData?.phone ?? ''}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full pl-11 pr-4 py-3 bg-[hsl(207,45%,14%)] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-1 focus:ring-[#00bcd4]/30 transition-all"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <select
                    name="service"
                    value={formData?.service ?? ''}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-[hsl(207,45%,14%)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00bcd4]/50 focus:ring-1 focus:ring-[#00bcd4]/30 transition-all appearance-none"
                  >
                    <option value="" className="bg-[hsl(207,45%,14%)] text-white/50">Select Service</option>
                    {SERVICE_OPTIONS?.map((s: string) => (
                      <option key={s} value={s} className="bg-[hsl(207,45%,14%)] text-white">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData?.message ?? ''}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[hsl(207,45%,14%)] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#00bcd4]/50 focus:ring-1 focus:ring-[#00bcd4]/30 transition-all resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00bcd4] to-[#4fc3f7] text-[#0d2137] font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
