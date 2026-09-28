'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  { title: 'Google Ads', description: 'High-converting search, display and shopping campaigns that bring qualified leads.', features: ['Search Ads', 'Display Ads', 'Shopping Ads'], image: '/images/services/google-ads.png', emoji: '🎯', href: '/services/google-ads' },
  { title: 'SEO', description: 'Rank higher on Google with proven on-page, off-page and technical SEO strategies.', features: ['On-Page SEO', 'Link Building', 'Technical SEO'], image: '/images/services/seo.png', emoji: '🔍', href: '/services/seo' },
  { title: 'Meta Ads', description: 'Reach your ideal audience on Facebook and Instagram with high-ROI ad campaigns.', features: ['Facebook Ads', 'Instagram Ads', 'Retargeting'], image: '/images/services/meta-ads.png', emoji: '📱', href: '/services/meta-ads' },
  { title: 'Web Design', description: 'Fast, modern, conversion-focused websites built to turn visitors into customers.', features: ['Landing Pages', 'E-commerce', 'Redesign'], image: '/images/services/web-design.png', emoji: '🎨', href: '/services/web-design' },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [imgError, setImgError] = useState(false);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15, delay: index * 0.15 }}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        <Link href={service.href} className="block">
          <div className="gradient-card card-hover overflow-hidden group cursor-pointer h-full">
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              {!imgError ? (
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" onError={() => setImgError(true)} />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3">
                  <span className="text-7xl md:text-8xl">{service.emoji}</span>
                  <span className="text-sm md:text-base font-semibold">{service.title}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="text-lg md:text-xl font-bold text-white">{service.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 px-5 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-widest">Our Services</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight px-2">
            Everything You Need To <span className="gradient-text">Grow</span>
          </h2>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-400 px-2">
            Full-service digital marketing built to scale your business profitably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}