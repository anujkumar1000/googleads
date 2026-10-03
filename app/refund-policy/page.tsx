'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function RefundPolicyPage() {
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
            Refund <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="gradient-card p-6 sm:p-8 md:p-10 space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">1. Overview</h2>
              <p className="text-sm md:text-base">
                At IT Geeks Digital, we're committed to delivering high-quality digital marketing services. This Refund Policy outlines the terms under which refunds may be issued for our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">2. Service-Based Refunds</h2>
              <p className="text-sm md:text-base mb-3">
                Refund eligibility depends on the type of service and stage of delivery:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li><strong className="text-white">Before project start:</strong> Full refund if cancelled within 48 hours of payment and before work has begun.</li>
                <li><strong className="text-white">During project:</strong> Partial refund may be considered for undelivered portions of the work.</li>
                <li><strong className="text-white">After delivery:</strong> No refunds after the deliverables have been approved and delivered.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">3. Monthly Retainers</h2>
              <p className="text-sm md:text-base">
                For monthly retainer services (such as ongoing Google Ads management or SEO), refunds are not provided for months where services have already been delivered. You may cancel your retainer at any time with 30 days written notice, and you will not be charged for future months.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">4. Advertising Spend</h2>
              <p className="text-sm md:text-base">
                Advertising budget spent on platforms such as Google Ads, Meta, or LinkedIn is non-refundable. These amounts are paid directly to the advertising platforms and are outside our control. We are not responsible for the performance of third-party advertising platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">5. Setup Fees</h2>
              <p className="text-sm md:text-base">
                One-time setup fees are non-refundable once the setup work has begun, as these cover time and resources already invested.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">6. How to Request a Refund</h2>
              <p className="text-sm md:text-base mb-3">
                To request a refund, please contact us with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li>Your full name and company name</li>
                <li>Invoice number and date of payment</li>
                <li>Reason for the refund request</li>
                <li>Any supporting documentation</li>
              </ul>
              <p className="text-sm md:text-base mt-3">
                Requests must be sent to <a href="mailto:Info@itgeeksdigital.com" className="text-purple-400 hover:text-purple-300">Info@itgeeksdigital.com</a> within 14 days of the issue arising.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">7. Processing Time</h2>
              <p className="text-sm md:text-base">
                Approved refunds will be processed within 7-10 business days. Refunds will be issued using the same payment method used for the original transaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">8. Exceptions</h2>
              <p className="text-sm md:text-base mb-3">
                Refunds will not be issued in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li>Change of mind after work has begun</li>
                <li>Dissatisfaction with results that were not guaranteed</li>
                <li>Client's failure to provide necessary information or access</li>
                <li>Violation of our Terms & Conditions</li>
                <li>Requests made after the 14-day window</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">9. Disputes</h2>
              <p className="text-sm md:text-base">
                If you disagree with our refund decision, you may request a review by writing to us. We'll review your case fairly and respond within 7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">10. Contact Us</h2>
              <div className="mt-4 glass rounded-xl p-4 text-sm md:text-base space-y-1">
                <p><strong className="text-white">Email:</strong> Info@itgeeksdigital.com</p>
                <p><strong className="text-white">Phone:</strong> +91 94638 19937</p>
                <p><strong className="text-white">Address:</strong> Prime Towers D 108, Phase 8, 160055 Mohali</p>
              </div>
            </section>
          </div>
        </motion.div>
      </section>
    </main>
  );
}