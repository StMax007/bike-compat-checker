'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren'}
      className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
