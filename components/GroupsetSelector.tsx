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
  label = 'Select Groupset',
}: GroupsetSelectorProps) {
  const grouped = groupsets.reduce<Record<string, Groupset[]>>((acc, g) => {
    const brand = g.brand;
    if (!acc[brand]) acc[brand] = [];
    acc[brand].push(g);
    return acc;
  }, {});

  return (
    <div className="relative">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-neutral-300">{label}</label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 pr-10 text-sm text-white shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">— Choose a groupset —</option>
          {Object.entries(grouped).map(([brand, items]) => (
            <optgroup key={brand} label={BRAND_LABELS[brand] ?? brand}>
              {items.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name} ({g.speeds}s, {g.type})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
      </div>
    </div>
  );
}
