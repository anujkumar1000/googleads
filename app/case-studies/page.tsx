'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const cases = [
  {
    title: 'Home Services Growth',
    client: 'Client Name 1',
    category: 'Google Ads',
    image: '/images/cases/case1.png',
    emoji: '🏠',
    challenge: 'Struggling to generate consistent leads from Google Ads with rising costs.',
    solution: 'Rebuilt account structure, added negative keywords, and set up conversion tracking properly.',
    results: [
      { value: '—', label: 'Lead growth' },
      { value: '—', label: 'Cost per lead' },
      { value: '—', label: 'ROAS' },
    ],
  },
  {
    title: 'E-commerce Revenue Scale',
    client: 'Client Name 2',
    category: 'Meta Ads + Google Ads',
    image: '/images/cases/case2.png',
    emoji: '🛒',
    challenge: 'High cart abandonment and low return on ad spend across channels.',
    solution: 'Implemented retargeting funnel, dynamic product ads, and improved landing pages.',
    results: [
      { value: '—', label: 'Revenue growth' },
      { value: '—', label: 'Conversion rate' },
      { value: '—', label: 'Customer LTV' },
    ],
  },
  {
    title: 'B2B SaaS Lead Gen',
    client: 'Client Name 3',
    category: 'SEO + LinkedIn Ads',
    image: '/images/cases/case3.png',
    emoji: '💻',
    challenge: 'Needed more qualified leads without inflating ad budget.',
    solution: 'Combined SEO content strategy with highly targeted LinkedIn campaigns.',
    results: [
      { value: '—', label: 'Qualified leads' },
      { value: '—', label: 'Organic traffic' },
      { value: '—', label: 'CPA decrease' },
    ],
  },
  {
    title: 'Local Business Expansion',
    client: 'Client Name 4',
    category: 'Local SEO + Google Ads',
    image: '/images/cases/case4.png',
    emoji: '📍',
    challenge: 'Wanted to expand to new locations without losing local presence.',
    solution: 'Local SEO + geo-targeted Google Ads in every new location.',
    results: [
      { value: '—', label: 'Local visibility' },
      { value: '—', label: 'Store visits' },
      { value: '—', label: 'New customers' },
    ],
  },
  {
    title: 'Healthcare Bookings',
    client: 'Client Name 5',
    category: 'Google Ads',
    image: '/images/cases/case5.png',
    emoji: '🏥',
    challenge: 'Low appointment bookings from existing ad campaigns.',
    solution: 'Restructured campaigns for appointment intent + call tracking + landing page CRO.',
    results: [
      { value: '—', label: 'Bookings' },
      { value: '—', label: 'Call volume' },
      { value: '—', label: 'Cost per booking' },
    ],
  },
  {
    title: 'Real Estate Inquiries',
    client: 'Client Name 6',
    category: 'Meta Ads + SEO',
    image: '/images/cases/case6.png',
    emoji: '🏢',
    challenge: 'Needed qualified buyer/seller inquiries at scale.',
    solution: 'Lead-gen campaigns + local SEO + retargeting for warm prospects.',
    results: [
      { value: '—', label: 'Inquiries' },
      { value: '—', label: 'Qualified leads' },
      { value: '—', label: 'Closing rate' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const popUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 70, damping: 15, duration: 0.7 } },
};

function CaseImage({ src, emoji, title }: { src: string; emoji: string; title: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3">
        <span className="text-7xl md:text-8xl">{emoji}</span>
        <span className="text-sm md:text-base font-semibold">{title}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setError(true)}
    />
  );
}

export default function CaseStudiesPage() {
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
            Case Studies
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white">
            Real projects, <span className="gradient-text">real outcomes</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            Explore how we've helped businesses across industries grow with data-driven marketing.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pb-16 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="space-y-6 md:space-y-8"
        >
          {cases.map((c) => (
            <motion.div
              key={c.title}
              variants={popUp}
              whileHover={{ y: -4 }}
              className="gradient-card card-hover overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 group">
                  <CaseImage src={c.image} emoji={c.emoji} title={c.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-40" />
                  <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-semibold text-white z-10">
                    {c.category}
                  </div>
                </div>

                <div className="lg:col-span-3 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {c.title}
                      </h2>
                      <p className="text-xs text-gray-500 mt-1">
                        Client: {c.client}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 hover:text-purple-400 transition shrink-0" />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                        Challenge
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                        Solution
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-white/5">
                    {c.results.map((r, i) => (
                      <div key={i}>
                        <div className="text-xl md:text-2xl font-bold gradient-text">
                          {r.value}
                        </div>
                        <div className="text-[10px] md:text-xs text-gray-500 leading-tight mt-1">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-xs text-gray-600 text-center mt-10 max-w-2xl mx-auto">
          * Replace placeholders with real client data once you have permission. Fake results may violate Google Ads policies.
        </p>
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
              Your Success Story <span className="gradient-text">Starts Here</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              Book a free strategy call and let's discuss your growth goals.
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