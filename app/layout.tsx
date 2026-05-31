import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BikeCompat – Fahrrad-Kompatibilitätsprüfer',
  description:
    'Prüfe, ob Rennrad-Komponenten mit deiner Schaltgruppe kompatibel sind. Shimano, SRAM und Campagnolo – Upgrade-Kosten berechnen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-gray-200 py-8 text-center text-xs text-gray-400 dark:border-neutral-800 dark:text-neutral-500">
          <p>
            BikeCompat · Affiliate-Links – wir erhalten ggf. eine Provision ·{' '}
            <a href="/about" className="underline hover:text-gray-700 dark:hover:text-neutral-300">
              Über uns
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
