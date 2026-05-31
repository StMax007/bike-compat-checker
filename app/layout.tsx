import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BikeCompat – Road Bike Component Compatibility Checker',
  description:
    'Check if road bike components are compatible with your groupset. Compare Shimano, SRAM, and Campagnolo components and estimate upgrade costs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-neutral-800 py-8 text-center text-xs text-neutral-500">
          <p>
            BikeCompat · Affiliate links – we may earn a commission ·{' '}
            <a href="/about" className="underline hover:text-neutral-300">
              About
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
