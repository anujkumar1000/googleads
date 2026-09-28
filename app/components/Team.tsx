'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Team() {
  const [error, setError] = useState(false);

  return (
    <section id="about" className="relative py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">
              Our Team
            </span>
            <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              The team you need to{' '}
              <span className="gradient-text">succeed</span>
            </h2>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Fueled by passion and a commitment to our clients, our team of
              digital experts drives performance for small businesses and
              growing brands alike.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { value: '10+', label: 'Experts' },
                { value: '5+', label: 'Years' },
                { value: '100%', label: 'Focus' },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow group mt-8 md:mt-10 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold inline-flex items-center gap-2 shadow-xl shadow-indigo-500/40"
              >
                Discover More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl" />
            <div className="relative gradient-card p-2 sm:p-3 rounded-3xl overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {!error ? (
                  <Image
                    src="/images/team/team-photo.jpg"
                    alt="Our team"
                    fill
                    className="object-cover"
                    onError={() => setError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3 p-4 text-center">
                    <span className="text-8xl md:text-9xl">👥</span>
                    <span className="text-base md:text-lg font-semibold">Team Photo Here</span>
                    <span className="text-xs text-gray-600">
                      Add: public/images/team/team-photo.png
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}