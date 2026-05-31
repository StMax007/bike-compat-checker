import { Component, CompatibilityStatus } from '@/lib/types';
import StatusBadge from './StatusBadge';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface ComponentCardProps {
  component: Component;
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
  selectable?: boolean;
  selected?: boolean;
  onToggle?: (component: Component) => void;
}

export default function ComponentCard({
  component,
  status,
  explanation,
  adapter_name,
  selectable = false,
  selected = false,
  onToggle,
}: ComponentCardProps) {
  const borderColor =
    status === 'compatible'
      ? 'border-neutral-800 hover:border-neutral-600'
      : status === 'adapter'
      ? 'border-yellow-900/50 hover:border-yellow-700/50'
      : 'border-neutral-800/50 opacity-60';

  const handleClick = () => {
    if (selectable && onToggle) onToggle(component);
  };

  return (
    <div
      className={`group relative rounded-xl border bg-neutral-900 p-4 transition-all ${borderColor} ${
        selectable ? 'cursor-pointer' : ''
      } ${selected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={handleClick}
    >
      {selectable && status !== 'incompatible' && (
        <div
          className={`absolute right-3 top-3 h-4 w-4 rounded border-2 transition-colors ${
            selected
              ? 'border-blue-500 bg-blue-500'
              : 'border-neutral-600 bg-transparent group-hover:border-neutral-400'
          }`}
        >
          {selected && (
            <svg viewBox="0 0 10 10" className="h-full w-full p-0.5 text-white" fill="currentColor">
              <path d="M1.5 5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          )}
        </div>
      )}

      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">{component.name}</p>
          <p className="mt-0.5 text-xs text-neutral-500">{component.model_number}</p>
        </div>
        <StatusBadge status={status} />
      </div>

      <p className="mb-3 text-xs leading-relaxed text-neutral-400">{explanation}</p>

      {adapter_name && (
        <div className="mb-3 rounded-md bg-yellow-900/20 px-2.5 py-1.5 text-xs text-yellow-300">
          Adapter: {adapter_name}
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white">€{component.price_eur}</span>
        <a
          href={component.affiliate_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 rounded-md bg-blue-600/10 px-2.5 py-1 text-xs font-medium text-blue-400 transition-colors hover:bg-blue-600 hover:text-white"
        >
          <ShoppingCart className="h-3 w-3" />
          Buy
          <ExternalLink className="h-2.5 w-2.5" />
        </a>
      </div>
    </div>
  );
}
