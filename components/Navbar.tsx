'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bike, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <Bike className="h-5 w-5 text-blue-500" />
          <span>BikeCompat</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-neutral-400 md:flex">
          <Link href="/check" className="transition-colors hover:text-white">
            Compatibility Checker
          </Link>
          <Link href="/budget" className="transition-colors hover:text-white">
            Budget Calculator
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link
            href="/check"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-white transition-colors hover:bg-blue-500"
          >
            Check Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-neutral-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neutral-800 bg-neutral-950 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-neutral-400">
            <Link href="/check" onClick={() => setOpen(false)} className="hover:text-white">
              Compatibility Checker
            </Link>
            <Link href="/budget" onClick={() => setOpen(false)} className="hover:text-white">
              Budget Calculator
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-white">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
