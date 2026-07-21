import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SHE IS AI Intelligence Layer — AI that works with your consciousness',
  description:
    'Bring every lens you have — brain profile, Human Design, astrology, MBTI, DISC, numerology, your own words. Leave with one coherent map of who you are, and the files that teach your AI to work with all of it.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://intelligence.sheisai.ai'),
  openGraph: {
    title: 'SHE IS AI Intelligence Layer — AI that works with your consciousness',
    description:
      'Level 1 of the SHE IS AI journey: understand yourself first.',
    url: '/',
    siteName: 'SHE IS AI Intelligence Layer',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en">
      <head>
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
