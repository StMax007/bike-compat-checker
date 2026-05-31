'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bike, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
          <Bike className="h-5 w-5 text-blue-500" />
          <span>BikeCompat</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-gray-500 md:flex dark:text-neutral-400">
          <Link href="/check" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Kompatibilitätsprüfer
          </Link>
          <Link href="/budget" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Budget-Rechner
          </Link>
          <Link href="/about" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Über uns
          </Link>
          <ThemeToggle />
          <Link
            href="/check"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-white transition-colors hover:bg-blue-500"
          >
            Jetzt prüfen
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-500 dark:text-neutral-400"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-gray-500 dark:text-neutral-400">
            <Link href="/check" onClick={() => setOpen(false)} className="hover:text-gray-900 dark:hover:text-white">
              Kompatibilitätsprüfer
            </Link>
            <Link href="/budget" onClick={() => setOpen(false)} className="hover:text-gray-900 dark:hover:text-white">
              Budget-Rechner
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-gray-900 dark:hover:text-white">
              Über uns
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
