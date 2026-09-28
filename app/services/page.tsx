'use client';

import { motion } from 'framer-motion';
import { Target, Search, Share2, Palette, ArrowRight, Check, BarChart3, Globe, Code2, Megaphone, Mail, Zap } from 'lucide-react';
import Link from 'next/link';

const mainServices = [
  {
    icon: Target,
    title: 'Google Ads',
    href: '/services/google-ads',
    tagline: 'Get in front of high-intent buyers',
    description: 'Search, Display, Shopping and YouTube campaigns built to bring qualified leads and sales — with full conversion tracking.',
    features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'YouTube Ads', 'Remarketing', 'Conversion Tracking'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Search,
    title: 'SEO',
    href: '/services/seo',
    tagline: 'Rank higher, grow organically',
    description: 'Technical SEO, on-page optimization and quality link building that improves rankings and drives consistent organic traffic.',
    features: ['Technical Audit', 'On-Page SEO', 'Keyword Research', 'Link Building', 'Content Strategy', 'Local SEO'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Share2,
    title: 'Meta Ads',
    href: '/services/meta-ads',
    tagline: 'Reach your ideal audience',
    description: 'Facebook and Instagram ad campaigns that target the right people at the right time — with creative that converts.',
    features: ['Facebook Ads', 'Instagram Ads', 'Retargeting', 'Lead Gen', 'Catalog Ads', 'Creative Design'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Web Design',
    href: '/services/web-design',
    tagline: 'Websites built to convert',
    description: 'Fast, mobile-first, conversion-focused websites that turn visitors into customers — designed for your brand.',
    features: ['Landing Pages', 'E-commerce', 'Redesign', 'Mobile-First', 'Speed Optimization', 'CMS Setup'],
    color: 'from-orange-500 to-red-500',
  },
];

const extraServices = [
  { icon: BarChart3, title: 'Analytics & Tracking', description: 'GA4, GTM, and conversion tracking setup done right.' },
  { icon: Megaphone, title: 'LinkedIn Ads', description: 'B2B lead generation with targeted LinkedIn campaigns.' },
  { icon: Mail, title: 'Email Marketing', description: 'Automated email flows that nurture leads and drive sales.' },
  { icon: Globe, title: 'Local SEO', description: 'Rank in local searches and Google Maps with Local SEO.' },
  { icon: Code2, title: 'Landing Pages', description: 'High-converting landing pages for your ad campaigns.' },
  { icon: Zap, title: 'CRO', description: 'Conversion rate optimization to get more from existing traffic.' },
];

const process = [
  { number: '01', title: 'Audit', description: 'We analyze your current setup and identify gaps.' },
  { number: '02', title: 'Strategy', description: 'We build a custom plan for your business goals.' },
  { number: '03', title: 'Execute', description: 'Campaigns launch with tracking and testing.' },
  { number: '04', title: 'Optimize', description: 'We refine weekly to maximize your ROI.' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 15 } },
};

const itemRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 15 } },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } },
};

export default function ServicesPage() {
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
            Our Services
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Everything you need to{' '}
            <span className="gradient-text">scale online</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            From Google Ads to SEO, we build full-funnel marketing systems that drive measurable growth.
          </p>
        </motion.div>
      </section>

      {/* MAIN SERVICES */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pb-16 md:pb-24">
        <div className="space-y-6 md:space-y-8">
          {mainServices.map((s, i) => {
            const Icon = s.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={s.title}
                variants={isLeft ? itemLeft : itemRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="gradient-card card-hover overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 md:p-12 ${!isLeft ? 'lg:order-2' : ''}`}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {s.title}
                    </h2>
                    <p className="text-purple-400 font-semibold mb-4 text-sm">
                      {s.tagline}
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {s.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {s.features.map((f) => (
                        <li key={f} className="text-sm text-gray-300 flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={s.href}>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition"
                      >
                        Get Started with {s.title}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </motion.button>
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`relative p-8 md:p-12 ${!isLeft ? 'lg:order-1' : ''} bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-center min-h-[300px]`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-10`} />
                    <div className="relative flex items-center justify-center">
                      <div className={`w-40 h-40 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br ${s.color} opacity-20 blur-2xl absolute`} />
                      <div className={`relative w-32 h-32 md:w-44 md:h-44 rounded-3xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-2xl`}>
                        <Icon className="w-16 h-16 md:w-24 md:h-24 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* EXTRA SERVICES */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">
            Also Offered
          </span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            Additional <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {extraServices.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={popUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="gradient-card card-hover p-6 md:p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg shadow-purple-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            How We <span className="gradient-text">Deliver</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {process.map((p) => (
            <motion.div
              key={p.number}
              variants={popUp}
              className="gradient-card p-6 md:p-7 relative"
            >
              <div className="text-5xl font-bold text-white/5 absolute top-5 right-5">
                {p.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
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
              Need Help Choosing?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              Book a free 30-minute call. We'll recommend the right strategy for your business.
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