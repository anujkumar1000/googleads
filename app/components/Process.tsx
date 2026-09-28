'use client';

import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { icon: Search, number: '01', title: 'Discovery', description: 'We audit your current marketing, understand your business goals and identify growth opportunities.' },
  { icon: Lightbulb, number: '02', title: 'Strategy', description: 'We build a custom growth plan with clear KPIs, target audiences and budget allocation.' },
  { icon: Rocket, number: '03', title: 'Launch', description: 'Campaigns go live with tracking, conversion pixels and A/B tests from day one.' },
  { icon: TrendingUp, number: '04', title: 'Scale', description: 'We optimize weekly, double down on winners and scale what works profitably.' },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const Icon = step.icon;

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 40 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15, delay: index * 0.18 }}
        whileHover={{ y: -10, scale: 1.03, rotate: -1 }}
        className="gradient-card card-hover p-6 md:p-7 relative"
      >
        <div className="absolute top-5 md:top-6 right-5 md:right-6 text-4xl md:text-5xl font-bold text-white/5">
          {step.number}
        </div>
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 md:mb-5 shadow-lg shadow-purple-500/30">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-white mb-2">{step.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="relative py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">How We Work</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight px-2">
            Our Simple <span className="gradient-text">4-Step Process</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}