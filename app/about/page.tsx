'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Zap, Heart, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const values = [
  { icon: Target, title: 'Data-Driven', description: 'Every decision we make is backed by real numbers, not guesses.' },
  { icon: Users, title: 'Client-First', description: 'Your growth is our growth. We win when you win.' },
  { icon: Zap, title: 'Fast Execution', description: 'We move quickly, test often, and scale what works.' },
  { icon: Heart, title: 'Transparent', description: 'No hidden fees. No confusing reports. Just clear results.' },
  { icon: Award, title: 'Certified Experts', description: 'Our team holds certifications in Google Ads, Analytics and more.' },
  { icon: TrendingUp, title: 'Results Focused', description: 'We optimize for ROI, not vanity metrics.' },
];

const timeline = [
  { year: '2020', title: 'Started', description: 'Founded with a mission to help small businesses grow online.' },
  { year: '2021', title: 'Expanded', description: 'Added SEO, Meta Ads and web design services.' },
  { year: '2022', title: 'Scaled', description: 'Served our first 50 clients across multiple industries.' },
  { year: '2023', title: 'Growing', description: 'Expanded team and opened new service offerings.' },
];

const stats = [
  { value: '100+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Team Members' },
  { value: '4.9', label: 'Average Rating' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const itemLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 15 } } };
const itemRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 15 } } };
const popUp = { hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } } };

export default function AboutPage() {
  const [imgError, setImgError] = useState(false);

  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-pink-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-32 sm:pt-40 md:pt-44 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest glass rounded-full px-4 py-1.5">
            About Us
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            We help businesses grow with{' '}
            <span className="gradient-text">data-driven marketing</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            We're an independent digital marketing agency specializing in Google Ads, SEO and paid social. Our mission is simple: help businesses scale profitably.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pb-16 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={popUp} whileHover={{ y: -6, scale: 1.03 }} className="gradient-card p-5 sm:p-6 md:p-8 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">{s.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">Our Story</span>
            <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Built by marketers, for <span className="gradient-text">business owners</span>
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-gray-400 leading-relaxed">
              <p>We started this agency because we saw too many businesses wasting money on ads that don't work. Agencies that overpromise and underdeliver. Reports that don't make sense.</p>
              <p>So we built a different kind of agency — one that's transparent, data-driven, and genuinely invested in your success. We don't just run ads; we build growth systems.</p>
              <p>Today, we work with businesses across multiple industries, helping them scale with Google Ads, SEO, and paid social.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl rounded-3xl" />
            <div className="relative gradient-card p-2 sm:p-3 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {!imgError ? (
                  <Image src="/images/about/office.png" alt="Our office" fill className="object-cover" onError={() => setImgError(true)} />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3 p-4 text-center">
                    <span className="text-8xl md:text-9xl">🏢</span>
                    <span className="text-base md:text-lg font-semibold">Office Photo Here</span>
                    <span className="text-xs text-gray-600">Add: public/images/about/office.png</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">Our Values</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            What <span className="gradient-text">Drives Us</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} variants={i % 2 === 0 ? itemLeft : itemRight} whileHover={{ y: -8, scale: 1.02 }} className="gradient-card card-hover p-6 md:p-7">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg shadow-purple-500/30">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">Our Journey</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            How We <span className="gradient-text">Grew</span>
          </h2>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="gradient-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
            >
              <div className="glass rounded-full px-4 py-1.5 text-sm font-semibold gradient-text shrink-0">
                {t.year}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{t.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }}
          className="relative gradient-card p-8 sm:p-12 md:p-16 text-center overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-indigo-500/40 to-purple-500/30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"
          />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6">
              Ready To <span className="gradient-text">Work With Us?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              Let's talk about your business goals. Free 30-minute strategy call — no commitment.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="btn-glow group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold inline-flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/40"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}