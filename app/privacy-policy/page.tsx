'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-[#08080f] min-h-screen">
      <div className="absolute inset-0 mesh-bg pointer-events-none opacity-50" />

      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 md:px-8 pt-32 sm:pt-40 pb-16 md:pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="gradient-card p-6 sm:p-8 md:p-10 space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">1. Introduction</h2>
              <p className="text-sm md:text-base">
                Welcome to YourAgency ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="text-sm md:text-base mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and company name when you fill out our contact form.</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                <li><strong className="text-white">Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
                <li><strong className="text-white">Communication Data:</strong> Records of your correspondence with us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p className="text-sm md:text-base mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our marketing services as agreed</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Improve our website, services, and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">4. Cookies and Tracking</h2>
              <p className="text-sm md:text-base">
                We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">5. Third-Party Services</h2>
              <p className="text-sm md:text-base">
                We may use third-party services such as Google Analytics, Google Ads, and Meta to analyze website traffic and improve our services. These services may collect information sent by your browser as part of a web page request. Please review their respective privacy policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">6. Data Security</h2>
              <p className="text-sm md:text-base">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">7. Your Rights</h2>
              <p className="text-sm md:text-base mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">8. Children's Privacy</h2>
              <p className="text-sm md:text-base">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">9. Changes to This Policy</h2>
              <p className="text-sm md:text-base">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">10. Contact Us</h2>
              <p className="text-sm md:text-base">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 glass rounded-xl p-4 text-sm md:text-base space-y-1">
                <p><strong className="text-white">Email:</strong> contact@geekstech.com</p>
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