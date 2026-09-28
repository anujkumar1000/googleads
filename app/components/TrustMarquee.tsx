'use client';

import { motion } from 'framer-motion';

const brands = [
  'Google Ads',
  'Meta Ads',
  'LinkedIn',
  'Shopify',
  'Analytics',
  'YouTube',
  'HubSpot',
  'Mailchimp',
];

export default function TrustMarquee() {
  return (
    <section className="relative z-10 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-8 md:py-10 overflow-hidden">
      <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-6 md:mb-8 text-center font-semibold px-4">
        Platforms We Work With
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#08080f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#08080f] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 md:gap-14 whitespace-nowrap"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-base md:text-xl font-bold text-gray-600 hover:text-gray-300 transition-colors duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}