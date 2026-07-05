import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Peace Skill — a Claude skill that protects your peace',
  description:
    'Your AI already helps you do more. This teaches it to help you live well — self-care kept alive, weeks planned around your energy, balance actually defended.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://peaceskill.sheisai.ai'),
  openGraph: {
    title: 'Peace Skill — a Claude skill that protects your peace',
    description:
      'A Claude skill for your mindfulness, self-care routines, weekly rhythm, and work-life balance. Built by SHE IS AI.',
    url: '/',
    siteName: 'Peace Skill',
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
