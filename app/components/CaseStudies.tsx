'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

const cases = [
  { title: 'Home Services', category: 'Google Ads', image: '/images/cases/case1.png', emoji: '🏠', results: [{ value: '—', label: 'Traffic increase' }, { value: '—', label: 'Conversion lift' }] },
  { title: 'E-commerce Store', category: 'Meta Ads', image: '/images/cases/case2.png', emoji: '🛒', results: [{ value: '—', label: 'Revenue growth' }, { value: '—', label: 'CPA decrease' }] },
  { title: 'B2B SaaS', category: 'SEO + Ads', image: '/images/cases/case3.png', emoji: '💻', results: [{ value: '—', label: 'Organic traffic' }, { value: '—', label: 'Qualified leads' }] },
];

function CaseCard({ c, index }: { c: typeof cases[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [imgError, setImgError] = useState(false);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15, delay: index * 0.15 }}
        whileHover={{ y: -8 }}
      >
        <Link href="/case-studies" className="block">
          <div className="gradient-card card-hover overflow-hidden group cursor-pointer h-full">
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              {!imgError ? (
                <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" onError={() => setImgError(true)} />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3">
                  <span className="text-7xl md:text-8xl">{c.emoji}</span>
                  <span className="text-sm md:text-base font-semibold">{c.title}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60" />
              <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-semibold text-white z-10">
                {c.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4 gap-2">
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition shrink-0" />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                {c.results.map((r, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold gradient-text">{r.value}</div>
                    <div className="text-xs text-gray-500 leading-tight mt-1">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">Our Work</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight px-2">
            Real Results For <span className="gradient-text">Real Clients</span>
          </h2>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-400 px-2">
            Results vary by industry, budget and goals. Here are examples of what we've achieved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.title} c={c} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-10 md:mt-12"
        >
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm md:text-base transition">
            See All Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}