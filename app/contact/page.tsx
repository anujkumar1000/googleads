'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@geekstech.com', href: 'mailto:contact@geekstech.com' },
  { icon: Phone, label: 'Phone', value: '+91 94638 19937', href: 'tel:+919463819937' },
  { icon: MapPin, label: 'Location', value: 'Prime Towers D 108, Phase 8, 160055 Mohali', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri, 9am - 6pm IST', href: null },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 15 } } };
const itemRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 15 } } };
const popUp = { hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } } };

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-pink-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-32 sm:pt-40 md:pt-44 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest glass rounded-full px-4 py-1.5">
            Contact Us
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Let's <span className="gradient-text">talk growth</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            Book a free 30-minute strategy call. We'll audit your current marketing and show you opportunities.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Get in <span className="gradient-text">touch</span>
            </h2>

            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  whileHover={{ x: 4 }}
                  className="gradient-card p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-white break-words">
                      {info.value}
                    </div>
                  </div>
                </motion.div>
              );

              return info.href ? (
                <a key={info.label} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            {/* Note */}
            <div className="gradient-card p-5 border-l-2 border-purple-500">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white mb-1">
                    Response Time
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We reply within 24 hours on business days. For urgent matters, call us directly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="gradient-card p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Send us a message
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Fill out the form and we'll get back to you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-400">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
                        placeholder="+91 94638 19937"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition appearance-none"
                    >
                      <option value="" className="bg-[#0a0a14]">Select a service</option>
                      <option value="Google Ads" className="bg-[#0a0a14]">Google Ads</option>
                      <option value="SEO" className="bg-[#0a0a14]">SEO</option>
                      <option value="Meta Ads" className="bg-[#0a0a14]">Meta Ads</option>
                      <option value="Web Design" className="bg-[#0a0a14]">Web Design</option>
                      <option value="Multiple Services" className="bg-[#0a0a14]">Multiple Services</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition resize-none"
                      placeholder="Tell us about your business and goals..."
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-glow group w-full px-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/40"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our{' '}
                    <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300">
                      Privacy Policy
                    </a>.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}