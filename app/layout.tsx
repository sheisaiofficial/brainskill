import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Brain Skill — your brain profile, turned into a Claude skill',
  description:
    "You've done the assessment. Now turn it into something your AI actually uses, every day.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://brainskill.sheisai.ai'),
  openGraph: {
    title: 'Brain Skill — your brain profile, turned into a Claude skill',
    description:
      'Built by SHE IS AI. In partnership with DivergenThinking.',
    url: '/',
    siteName: 'Brain Skill',
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
