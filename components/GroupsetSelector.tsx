'use client';

import { Groupset } from '@/lib/types';
import { ChevronDown } from 'lucide-react';

interface GroupsetSelectorProps {
  groupsets: Groupset[];
  value: string;
  onChange: (id: string) => void;
  label?: string;
}

const BRAND_LABELS: Record<string, string> = {
  shimano: 'Shimano',
  sram: 'SRAM',
  campagnolo: 'Campagnolo',
};

export default function GroupsetSelector({
  groupsets,
  value,
  onChange,
  label = 'Schaltgruppe wählen',
}: GroupsetSelectorProps) {
  const grouped = groupsets.reduce<Record<string, Groupset[]>>((acc, g) => {
    if (!acc[g.brand]) acc[g.brand] = [];
    acc[g.brand].push(g);
    return acc;
  }, {});

  return (
    <div className="relative">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 font-sans text-sm text-gray-900 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        >
          <option value="">— Schaltgruppe wählen —</option>
          {Object.entries(grouped).map(([brand, items]) => (
            <optgroup key={brand} label={BRAND_LABELS[brand] ?? brand}>
              {items.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name} ({g.speeds}-Gang, {g.type === 'mechanical' ? 'mechanisch' : g.type === 'electronic' ? 'elektronisch' : g.type})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-neutral-400" />
      </div>
    </div>
  );
}
