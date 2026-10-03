import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata: Metadata = {
  title: 'IT Geeks Digital — Google Ads & Digital Marketing',
  description:
    'Data-driven Google Ads campaigns that scale your business profitably.',
  verification: {
    google: 'hXTfJU6uS73BPHpmjmhg9atCsmBkM4htxWs1TKOkWgc',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}