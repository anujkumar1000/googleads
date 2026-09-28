'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Palette, Check, Smartphone, Gauge, Search, Code2, Shield } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: Palette, title: 'Custom Design', description: 'Unique design tailored to your brand — no templates.' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Designed for phones first — where 70% of traffic comes from.' },
  { icon: Gauge, title: 'Fast Loading', description: 'Optimized for speed and Core Web Vitals.' },
  { icon: Search, title: 'SEO Ready', description: 'Built with clean code, proper structure and SEO best practices.' },
  { icon: Code2, title: 'Modern Tech', description: 'Built with modern frameworks like Next.js for performance.' },
  { icon: Shield, title: 'Secure & Reliable', description: 'SSL, secure forms and reliable hosting setup.' },
];

const process = [
  { number: '01', title: 'Discovery', description: 'We understand your brand, goals and target audience.' },
  { number: '02', title: 'Design', description: 'We design and share mockups for your feedback.' },
  { number: '03', title: 'Build', description: 'We develop the site with clean, modern code.' },
  { number: '04', title: 'Launch', description: 'We test everything and launch on your domain.' },
];

const faqs = [
  { q: 'How long does a website take?', a: 'A typical business website takes 2-4 weeks. Larger projects with custom features can take 6-8 weeks.' },
  { q: 'Do you use templates?', a: 'No. Every website we build is custom-designed for your brand. We don\'t use pre-made themes.' },
  { q: 'Will my site work on mobile?', a: 'Yes. Every site we build is fully responsive and mobile-optimized by default.' },
  { q: 'Do you handle hosting?', a: 'We can recommend and set up hosting for you, or work with your existing hosting provider.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We offer full redesigns and can also build from scratch if your current site needs replacing.' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const popUp = { hidden: { opacity: 0, scale: 0.9, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 18 } } };

export default function WebDesignPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-gradient-to-br from-orange-600/20 via-red-600/15 to-pink-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-gray-300 mb-6">
              <Palette className="w-3.5 h-3.5 text-orange-400" />
              <span>Web Design & Development</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              Websites built to <span className="gradient-text">convert</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Fast, mobile-first, conversion-focused websites that turn visitors into customers — designed for your brand.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="btn-glow group w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-orange-500/40">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-3xl rounded-3xl" />
            <div className="relative gradient-card p-8 md:p-12 flex items-center justify-center min-h-[300px]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 blur-3xl opacity-40" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl">
                  <Palette className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <span className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest">Why It Matters</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Your website is your <span className="gradient-text">best salesperson</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed">
              A slow, outdated or confusing website kills conversions. We build fast, beautiful websites that guide visitors toward taking action.
            </p>
            <ul className="mt-6 space-y-3">
              {['Faster loading = higher conversions', 'Mobile-optimized for 70% of visitors', 'SEO-ready structure from day one', 'Built for conversions, not just looks', 'Easy to update and manage'].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Gauge, value: '<2s', label: 'Load time target' },
              { icon: Smartphone, value: '70%', label: 'Mobile traffic' },
              { icon: Search, value: '100', label: 'PageSpeed goal' },
              { icon: Shield, value: 'SSL', label: 'Secure by default' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="gradient-card p-5 text-center">
                  <Icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest">What's Included</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            Full-Service <span className="gradient-text">Web Design</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={popUp} whileHover={{ y: -6, scale: 1.02 }} className="gradient-card card-hover p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest">Our Process</span>
          <h2 className="mt-3 md:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
            How We <span className="gradient-text">Build</span>
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

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-center mb-12 md:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-orange-400 uppercase tracking-widest">FAQ</span>
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

      <section className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ type: 'spring' as const, stiffness: 60, damping: 18 }} className="relative gradient-card p-8 sm:p-12 md:p-16 text-center overflow-hidden">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-orange-500/40 to-red-500/30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">
              Ready for a <span className="gradient-text">new website</span>?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 md:mb-10">
              Let's build a site that actually grows your business.
            </p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.96 }} className="btn-glow group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold inline-flex items-center justify-center gap-2 shadow-xl shadow-orange-500/40">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}