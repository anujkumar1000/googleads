'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 },
  { value: 12, suffix: 'M+', label: 'Ad Spend Managed' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
        transition={{ type: 'spring', stiffness: 70, damping: 18, delay: index * 0.12 }}
        whileHover={{ y: -6, scale: 1.03 }}
        className="gradient-card p-5 sm:p-6 md:p-8 text-center"
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">
          <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
        </div>
        <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
      </motion.div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="results" className="relative py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">Our Numbers</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight px-2">
            Results That <span className="gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}