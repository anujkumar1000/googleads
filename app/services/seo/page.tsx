'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Search, Check, FileText, Link2, Gauge, BarChart3, MapPin } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Search, title: 'Keyword Research', description: 'Find the keywords your customers are actually searching for.' },
  { icon: FileText, title: 'On-Page SEO', description: 'Optimize titles, meta, content and internal linking for rankings.' },
  { icon: Link2, title: 'Link Building', description: 'Quality backlinks from relevant, authoritative websites.' },
  { icon: Gauge, title: 'Technical SEO', description: 'Site speed, mobile, crawlability and Core Web Vitals.' },
  { icon: MapPin, title: 'Local SEO', description: 'Rank in Google Maps and local searches for your area.' },
  { icon: BarChart3, title: 'Content Strategy', description: 'Content that ranks and converts — planned monthly.' },
];

const process = [
  { number: '01', title: 'Audit', description: 'Full technical, on-page and off-page SEO audit.' },
  { number: '02', title: 'Strategy', description: 'Custom roadmap with keywords, content and link targets.' },
  { number: '03', title: 'Execute', description: 'We implement fixes and create ranking content monthly.' },
  { number: '04', title: 'Report', description: 'Monthly reports on rankings, traffic and conversions.' },
];

const faqs = [
  { q: 'How long does SEO take?', a: 'SEO is a long-term strategy. Most clients see meaningful results in 3-6 months. Results vary by industry and competition.' },
  { q: 'Do you guarantee #1 rankings?', a: 'No. Google\'s algorithm changes constantly and no one can guarantee rankings. We use proven white-hat strategies to improve them.' },
  { q: 'Do you use black-hat tactics?', a: 'Never. We only use white-hat, Google-compliant SEO practices that are safe for long-term growth.' },
  { q: 'What do you need from me?', a: 'Access to your website (or CMS), Google Analytics, Google Search Console, and approval for content and changes.' },
  { q: 'Do you also write content?', a: 'Yes, we offer content writing as part of our SEO services or separately.' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const popUp = { hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } } };

export default function SEOPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-green-600/20 via-emerald-600/15 to-teal-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-gray-300 mb-6">
              <Search className="w-3.5 h-3.5 text-green-400" />
              <span>Search Engine Optimization</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              Rank higher, <span className="gradient-text">grow organically</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              We help businesses rank higher on Google with proven, white-hat SEO strategies that drive consistent organic traffic.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="btn-glow group w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-green-500/40">
                  Get Free SEO Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl rounded-3xl" />
            <div className="relative gradient-card p-8 md:p-12 flex items-center justify-center min-h-[300px]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 blur-3xl opacity-40" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
                  <Search className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <span className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-widest">Why SEO</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Build a <span className="gradient-text">long-term asset</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed">
              Unlike paid ads that stop the moment you stop paying, SEO builds compounding organic traffic that grows month after month.
            </p>
            <ul className="mt-6 space-y-3">
              {['Consistent free traffic from Google', 'Builds long-term brand authority', 'Lower cost-per-lead than paid ads over time', 'Works 24/7 — even while you sleep', 'Compounds as you add more content'].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Search, value: '75%', label: 'Never scroll past page 1' },
              { icon: BarChart3, value: '28%', label: 'Click #1 result' },
              { icon: FileText, value: '3-6mo', label: 'Typical results time' },
              { icon: Gauge, value: '24/7', label: 'Traffic even while asleep' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="gradient-card p-5 text-center">
                  <Icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-widest">What's Included</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            Full-Service <span className="gradient-text">SEO</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={popUp} whileHover={{ y: -6, scale: 1.02 }} className="gradient-card card-hover p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-5 shadow-lg shadow-green-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-widest">Our Process</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            How We <span className="gradient-text">Deliver</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {process.map((p) => (
            <motion.div key={p.number} variants={popUp} className="gradient-card p-6 md:p-7 relative">
              <div className="text-5xl font-bold text-white/5 absolute top-5 right-5">{p.number}</div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div key={f.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ delay: i * 0.08 }} className="gradient-card p-6 md:p-7">
              <h3 className="text-base md:text-lg font-bold text-white mb-3">{f.q}</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }} className="relative gradient-card p-8 sm:p-12 md:p-16 text-center overflow-hidden">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-green-500/40 to-emerald-500/30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">
              Ready to rank <span className="gradient-text">higher</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              Get a free SEO audit and see exactly what's holding your site back.
            </p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} className="btn-glow group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold inline-flex items-center justify-center gap-2 shadow-xl shadow-green-500/40">
                Get Free SEO Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}