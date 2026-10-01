'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, Check, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-24 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT — Text */}
        <motion.div
          style={{ y: heroY }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-gray-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Trusted by growing brands</span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="gradient-text font-semibold hidden sm:inline whitespace-nowrap">
              New: Free Audit
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
          >
            Scale Your Business <br />
            With{' '}
            <span className="gradient-text relative inline-block">
              Profitable Ads
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8C50 2 100 2 150 6C200 10 250 6 298 4"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="300" y2="0">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            We build high-converting Google Ads campaigns that turn clicks into
            customers — <span className="text-white font-medium">without wasting a dollar</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow group w-full px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/40"
              >
                Get Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/case-studies" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 sm:px-7 py-3.5 sm:py-4 rounded-full glass text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
              >
                <PlayCircle className="w-5 h-5 text-purple-400" />
                See Our Work
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-3 text-xs sm:text-sm text-gray-400"
          >
            {['No long-term contracts', 'Real-time reporting', 'Certified team'].map(
              (point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  {point}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT — Image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl" />

          <div className="relative gradient-card p-2 sm:p-3 rounded-3xl overflow-hidden">
            <div className="flex gap-1.5 px-3 py-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              {!imgError ? (
                <Image
                  src="/images/hero/dashboard.jpeg"
                  alt="Google Ads dashboard showing performance metrics"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3 p-4 text-center">
                  <span className="text-8xl md:text-9xl">📊</span>
                  <span className="text-base md:text-lg font-semibold">Hero Image Here</span>
                  <span className="text-xs text-gray-600">
                    Add: public/images/hero/dashboard.png
                  </span>
                </div>
              )}
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass rounded-2xl p-3 sm:p-4 shadow-2xl z-20"
            >
              <div className="text-xs text-gray-400 mb-1">ROAS</div>
              <div className="text-xl sm:text-2xl font-bold gradient-text">4.8x</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 glass rounded-2xl p-3 sm:p-4 shadow-2xl z-20"
            >
              <div className="text-xs text-gray-400 mb-1">Conversions</div>
              <div className="text-xl sm:text-2xl font-bold text-green-400">+87%</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}