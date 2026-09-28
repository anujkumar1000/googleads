'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Target, Check, Search, BarChart3, Zap, TrendingUp, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Search, title: 'Keyword Research', description: 'We find the exact keywords your ideal customers search for.' },
  { icon: Target, title: 'Campaign Setup', description: 'Structured campaigns built for maximum Quality Score and lower CPC.' },
  { icon: Zap, title: 'Ad Copywriting', description: 'High-CTR ad copy that turns clicks into qualified leads.' },
  { icon: BarChart3, title: 'Conversion Tracking', description: 'Full tracking setup with GA4, GTM and call tracking.' },
  { icon: TrendingUp, title: 'Landing Page Optimization', description: 'Landing pages built to convert your ad traffic.' },
  { icon: DollarSign, title: 'Budget Optimization', description: 'We scale what works and cut what doesn\'t — week by week.' },
];

const process = [
  { number: '01', title: 'Audit & Research', description: 'We analyze your market, competitors and current ads.' },
  { number: '02', title: 'Strategy & Setup', description: 'We build campaigns, ad copy and tracking infrastructure.' },
  { number: '03', title: 'Launch & Test', description: 'Campaigns go live with A/B testing from day one.' },
  { number: '04', title: 'Optimize & Scale', description: 'Weekly optimization to lower CPA and increase ROAS.' },
];

const faqs = [
  { q: 'How much budget do I need to start?', a: 'Most of our clients start with a minimum ad spend of $1,000/month. The exact amount depends on your industry and competition.' },
  { q: 'How long until I see results?', a: 'You\'ll start seeing data within the first week. Meaningful optimization usually takes 4-6 weeks. Results vary by industry and budget.' },
  { q: 'Do you charge a management fee or a percentage of ad spend?', a: 'We offer both models. Most clients prefer a fixed monthly retainer for predictability.' },
  { q: 'Do you handle the ad account setup?', a: 'Yes. We set up tracking, conversion goals, audiences and campaigns from scratch or optimize existing accounts.' },
  { q: 'Can you guarantee results?', a: 'No ethical agency can guarantee specific results. We use proven strategies and best practices to maximize your chances of success.' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const popUp = { hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } } };

export default function GoogleAdsPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-purple-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-gray-300 mb-6">
              <Target className="w-3.5 h-3.5 text-blue-400" />
              <span>Google Ads Management</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              Turn clicks into <span className="gradient-text">customers</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              We build high-converting Google Ads campaigns that bring qualified leads and sales — without wasting your budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="btn-glow group w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/40">
                  Get Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl rounded-3xl" />
            <div className="relative gradient-card p-8 md:p-12 flex items-center justify-center min-h-[300px]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 blur-3xl opacity-40" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl">
                  <Target className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest">Why Google Ads</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Reach buyers <span className="gradient-text">right now</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed">
              Google Ads puts your business in front of people who are actively searching for what you offer. Unlike social media, where you interrupt people, Google Ads captures existing demand.
            </p>
            <ul className="mt-6 space-y-3">
              {['Instant visibility on Google search results', 'Pay only when someone clicks', 'Highly targeted by keyword, location, device', 'Measurable ROI with conversion tracking', 'Scalable — increase budget to grow faster'].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, value: '3.5B+', label: 'Daily searches' },
              { icon: TrendingUp, value: '65%', label: 'Click on ads' },
              { icon: DollarSign, value: '$2', label: 'Avg. CPC (varies)' },
              { icon: Target, value: '8x', label: 'Avg. ROAS potential' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="gradient-card p-5 text-center">
                  <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest">What's Included</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            Full-Service <span className="gradient-text">Management</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={popUp} whileHover={{ y: -6, scale: 1.02 }} className="gradient-card card-hover p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest">Our Process</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            How We <span className="gradient-text">Deliver</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {process.map((p) => (
            <motion.div key={p.number} variants={popUp} className="gradient-card p-6 md:p-7 relative">
              <div className="text-5xl font-bold text-white/5 absolute top-5 right-5">{p.number}</div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="gradient-card p-6 md:p-7"
            >
              <h3 className="text-base md:text-lg font-bold text-white mb-3">{f.q}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }} className="relative gradient-card p-8 sm:p-12 md:p-16 text-center overflow-hidden">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-blue-500/40 to-indigo-500/30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">
              Ready to run <span className="gradient-text">Google Ads</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              Get a free audit of your current campaigns or a custom strategy proposal.
            </p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} className="btn-glow group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold inline-flex items-center justify-center gap-2 shadow-xl shadow-blue-500/40">
                Get Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}