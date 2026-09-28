
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none opacity-50" />

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 md:px-8 pt-32 sm:pt-40 pb-16 md:pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="gradient-card p-6 sm:p-8 md:p-10 space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">1. Agreement to Terms</h2>
              <p className="text-sm md:text-base">
                By accessing or using the services of YourAgency ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">2. Services</h2>
              <p className="text-sm md:text-base">
                We provide digital marketing services including but not limited to Google Ads management, SEO, Meta Ads, and web design. The specific scope of services will be outlined in a separate agreement or proposal signed by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">3. Client Responsibilities</h2>
              <p className="text-sm md:text-base mb-3">As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li>Provide accurate and complete information required for services</li>
                <li>Respond to requests in a timely manner</li>
                <li>Maintain necessary access to your accounts and platforms</li>
                <li>Comply with all applicable laws and platform policies</li>
                <li>Pay all fees as agreed in the service agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">4. Payment Terms</h2>
              <p className="text-sm md:text-base">
                Fees for our services are outlined in the service agreement. Unless otherwise stated, invoices are due within 7 days of receipt. Late payments may result in service suspension. All fees are exclusive of applicable taxes.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">5. Results Disclaimer</h2>
              <p className="text-sm md:text-base">
                While we use proven strategies and best practices, we cannot guarantee specific results. Marketing performance depends on many factors including market conditions, competition, budget, and your business. Any examples or case studies shown on our website are for illustration only and do not guarantee similar results.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">6. Intellectual Property</h2>
              <p className="text-sm md:text-base">
                All content, materials, and deliverables we create remain our intellectual property until full payment is received. Upon full payment, ownership of agreed deliverables transfers to you. We retain the right to display non-confidential work in our portfolio.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">7. Confidentiality</h2>
              <p className="text-sm md:text-base">
                Both parties agree to keep confidential any proprietary information shared during the engagement. This includes business strategies, customer data, and financial information.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">8. Limitation of Liability</h2>
              <p className="text-sm md:text-base">
                To the maximum extent permitted by law, YourAgency shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by you in the three months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">9. Termination</h2>
              <p className="text-sm md:text-base">
                Either party may terminate the service agreement with 30 days written notice. Upon termination, you agree to pay for all services rendered up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">10. Governing Law</h2>
              <p className="text-sm md:text-base">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Prime Towers D 108, Phase 8, 160055 Mohali.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">11. Changes to Terms</h2>
              <p className="text-sm md:text-base">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">12. Contact</h2>
              <div className="mt-4 glass rounded-xl p-4 text-sm md:text-base space-y-1">
                <p><strong className="text-white">Email:</strong> contact@geekstech.com</p>
                <p><strong className="text-white">Phone:</strong> +91 94638 19937</p>
              </div>
            </section>
          </div>
        </motion.div>
      </section>
    </main>
  );
}