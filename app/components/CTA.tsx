'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 18, duration: 0.9 }}
          className="relative gradient-card p-8 sm:p-12 md:p-16 text-center overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-indigo-500/40 to-purple-500/30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"
          />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6 px-2">
              Ready To <span className="gradient-text">Scale?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10 px-2">
              Book a free 30-minute strategy call. We'll audit your current ads and show you exactly where you're losing money.
            </p>

          <Link href="/contact" className="w-full sm:w-auto">
  <motion.button
    whileHover={{ scale: 1.05, y: -3 }}
    whileTap={{ scale: 0.96 }}
    animate={{
      boxShadow: [
        '0 20px 40px rgba(99, 102, 241, 0.3)',
        '0 20px 60px rgba(168, 85, 247, 0.5)',
        '0 20px 40px rgba(99, 102, 241, 0.3)',
      ],
    }}
    transition={{
      boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
    }}
    className="btn-glow group w-full px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold inline-flex items-center justify-center gap-2 transition-all"
  >
    Book Free Strategy Call
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </motion.button>
</Link>

            <p className="mt-5 md:mt-6 text-xs text-gray-500">
              No commitment required · Response within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}