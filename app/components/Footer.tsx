import Link from 'next/link';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#050509] border-t border-white/5 mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/40">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Your<span className="gradient-text">Agency</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Data-driven digital marketing agency helping businesses grow with
              Google Ads, SEO and paid social.
            </p>
          </div>

          {/* Services */}
        <div>
  <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
  <ul className="space-y-2.5 text-sm text-gray-400">
    <li><Link href="/services/google-ads" className="hover:text-purple-400 transition">Google Ads</Link></li>
    <li><Link href="/services/seo" className="hover:text-purple-400 transition">SEO</Link></li>
    <li><Link href="/services/meta-ads" className="hover:text-purple-400 transition">Meta Ads</Link></li>
    <li><Link href="/services/web-design" className="hover:text-purple-400 transition">Web Design</Link></li>
  </ul>
</div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-purple-400 transition">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-purple-400 transition">Case Studies</Link></li>
              <li><Link href="/results" className="hover:text-purple-400 transition">Results</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <a href="mailto:contact@geekstech.com" className="hover:text-purple-400 transition break-all">
                  contact@geekstech.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <a href="tel:+919463819937" className="hover:text-purple-400 transition">
                  +91 94638 19937
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Prime Towers D 108, Phase 8, 160055 Mohali</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} YourAgency. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-purple-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-purple-400 transition">Terms</Link>
            <Link href="/refund-policy" className="hover:text-purple-400 transition">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}