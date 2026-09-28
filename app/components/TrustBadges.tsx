'use client';

import { motion } from 'framer-motion';

const badges = [
  { name: 'Google Ads', color: 'from-blue-500 to-blue-600', letter: 'G' },
  { name: 'Meta Ads', color: 'from-blue-600 to-indigo-600', letter: 'M' },
  { name: 'HubSpot', color: 'from-orange-500 to-orange-600', letter: 'H' },
  { name: 'Shopify', color: 'from-green-500 to-green-600', letter: 'S' },
  { name: 'Analytics', color: 'from-yellow-500 to-orange-500', letter: 'A' },
];

export default function TrustBadges() {
  return (
    <section className="relative py-10 md:py-14 px-5 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-6 md:mb-8 text-center font-semibold">
          Certified & Experienced With
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-4"
        >
          {badges.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="glass rounded-xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3 hover:border-purple-500/40 transition"
            >
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${b.color} flex items-center justify-center shadow-lg`}>
                <span className="text-white text-xs md:text-sm font-bold">
                  {b.letter}
                </span>
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-300 whitespace-nowrap">
                {b.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-xs text-gray-600 text-center mt-6 max-w-2xl mx-auto">
          * Logos are for identification purposes. We are an independent agency and not officially affiliated with these companies.
        </p>
      </div>
    </section>
  );
}