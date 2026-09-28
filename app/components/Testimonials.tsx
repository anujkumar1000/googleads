'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  { name: 'Client Name 1', role: 'CEO, Company Name', content: 'Placeholder review — replace with real client feedback once you have permission.', rating: 5 },
  { name: 'Client Name 2', role: 'Founder, Company Name', content: 'Placeholder review — replace with real client feedback once you have permission.', rating: 5 },
  { name: 'Client Name 3', role: 'Marketing Head, Company Name', content: 'Placeholder review — replace with real client feedback once you have permission.', rating: 5 },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: index * 0.2 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="gradient-card card-hover p-6 md:p-7 relative h-full"
      >
        <Quote className="w-7 h-7 md:w-8 md:h-8 text-purple-500/40 mb-3 md:mb-4" />
        <div className="flex gap-1 mb-3 md:mb-4">
          {Array.from({ length: t.rating }).map((_, idx) => (
            <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-gray-300 leading-relaxed mb-5 md:mb-6">"{t.content}"</p>
        <div className="flex items-center gap-3 pt-4 md:pt-5 border-t border-white/5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shrink-0">
            {t.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white truncate">{t.name}</div>
            <div className="text-xs text-gray-500 truncate">{t.role}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
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
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight px-2">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}