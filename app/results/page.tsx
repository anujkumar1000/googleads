'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import Link from 'next/link';

const mainStats = [
  { icon: Users, value: 100, suffix: '+', label: 'Clients Served' },
  { icon: DollarSign, value: 5, suffix: 'M+', label: 'Ad Spend Managed' },
  { icon: TrendingUp, value: 4.8, suffix: 'x', label: 'Average ROAS', decimals: 1 },
  { icon: Target, value: 95, suffix: '%', label: 'Client Retention' },
];

const industryResults = [
  { industry: 'E-commerce', metric: 'Average ROAS improvement', value: '3.2x', detail: 'Across 25+ stores' },
  { industry: 'Home Services', metric: 'Average cost-per-lead reduction', value: '-45%', detail: 'Across 15+ businesses' },
  { industry: 'B2B SaaS', metric: 'Average qualified lead growth', value: '+180%', detail: 'Across 10+ companies' },
  { industry: 'Local Business', metric: 'Average traffic increase', value: '+220%', detail: 'Across 30+ locations' },
  { industry: 'Healthcare', metric: 'Average appointment bookings', value: '+150%', detail: 'Across 8+ clinics' },
  { industry: 'Real Estate', metric: 'Average qualified inquiries', value: '+160%', detail: 'Across 12+ agencies' },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) { setCount(0); return; }
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
};

export default function ResultsPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-pink-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-32 sm:pt-40 md:pt-44 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest glass rounded-full px-4 py-1.5">
            Our Results
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Numbers that <span className="gradient-text">matter</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            Real results from real clients. Results vary by industry, budget and goals.
          </p>
        </motion.div>
      </section>

      {/* MAIN STATS */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pb-16 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {mainStats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={popUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="gradient-card p-5 sm:p-6 md:p-8 text-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="text-xs sm:text-sm text-gray-400">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* INDUSTRY RESULTS */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">
            By Industry
          </span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            Results Across <span className="gradient-text">Industries</span>
          </h2>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-400">
            Averages across our client base. Individual results may vary.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {industryResults.map((r) => (
            <motion.div
              key={r.industry}
              variants={popUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="gradient-card card-hover p-6 md:p-7"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  {r.industry}
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                {r.value}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-2">
                {r.metric}
              </p>
              <p className="text-xs text-gray-500">{r.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-xs text-gray-600 text-center mt-8 max-w-2xl mx-auto">
          * These are illustrative examples. Replace with your real client data before making claims.
        </p>
      </section>

      {/* CTA */}
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
              Want Results Like These?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              Book a free strategy call. We'll show you what's possible for your business.
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