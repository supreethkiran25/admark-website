import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { JsonLd } from '@/components/JsonLd';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { CinematicSmoothScroll } from '@/components/CinematicSmoothScroll';
import { SpinningWheelerBadge } from '@/components/SpinningWheelerBadge';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.admarkdigitals.com'),
  title: {
    default: 'Best Software Development Agency in Mysore | AdMark Digitals',
    template: '%s | AdMark Digitals',
  },
  description:
    'Top software company in Mysore offering custom software development, website development, React, and Python solutions. Led by innovative startup founders in Saraswathipuram.',
  keywords: [
    'AdMark Digitals',
    'digital engineering studio',
    'Next.js development',
    'Flutter mobile development',
    'AI automation systems',
    'cloud infrastructure',
    'Mysuru',
    'Bengaluru',
    'Hyderabad',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.admarkdigitals.com',
    siteName: COMPANY.name,
    title: 'AdMark Digitals — Research-Led Digital Product & Engineering Studio',
    description: COMPANY.philosophy,
    images: [
      {
        url: '/admark-logo-live-cropped.png',
        width: 230,
        height: 230,
        alt: 'AdMark Digitals Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'AdMark Digitals — Research-Led Digital Product & Engineering Studio',
    description: COMPANY.philosophy,
    images: ['/admark-logo-live-cropped.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body>
        <ThemeProvider>
          <CinematicSmoothScroll />
          <ScrollProgressBar />
          <a href="#main-content" className="sr-only">
            Skip to main content
          </a>
          <Header />
          {children}
          <Footer />
          <SpinningWheelerBadge />
          <WhatsAppWidget />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
