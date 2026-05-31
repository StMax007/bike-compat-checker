import { Component, CompatibilityStatus, CompatibilitySource } from '@/lib/types';
import StatusBadge from './StatusBadge';
import SourceCitation from './SourceCitation';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface ComponentCardProps {
  component: Component;
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
  sources?: CompatibilitySource[];
  selectable?: boolean;
  selected?: boolean;
  onToggle?: (component: Component) => void;
}

export default function ComponentCard({
  component,
  status,
  explanation,
  adapter_name,
  sources,
  selectable = false,
  selected = false,
  onToggle,
}: ComponentCardProps) {
  const borderColor =
    status === 'compatible'
      ? 'border-gray-200 hover:border-gray-300 dark:border-neutral-800 dark:hover:border-neutral-600'
      : status === 'adapter'
      ? 'border-yellow-200 hover:border-yellow-300 dark:border-yellow-900/50 dark:hover:border-yellow-700/50'
      : 'border-gray-100 opacity-60 dark:border-neutral-800/50';

  return (
    <div
      className={`group relative rounded-xl border bg-white p-4 transition-all dark:bg-neutral-900 ${borderColor} ${
        selectable ? 'cursor-pointer' : ''
      } ${selected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={() => selectable && onToggle && onToggle(component)}
    >
      {selectable && status !== 'incompatible' && (
        <div
          className={`absolute right-3 top-3 h-4 w-4 rounded border-2 transition-colors ${
            selected
              ? 'border-blue-500 bg-blue-500'
              : 'border-gray-300 bg-transparent group-hover:border-gray-400 dark:border-neutral-600 dark:group-hover:border-neutral-400'
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
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{component.name}</p>
          <p className="mt-0.5 text-xs text-gray-400 dark:text-neutral-500">{component.model_number}</p>
        </div>
        <StatusBadge status={status} />
      </div>

      <p className="mb-3 text-xs leading-relaxed text-gray-500 dark:text-neutral-400">{explanation}</p>

      {adapter_name && (
        <div className="mb-3 rounded-md bg-yellow-50 px-2.5 py-1.5 text-xs text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300">
          Adapter: {adapter_name}
        </div>
      )}

      <SourceCitation sources={sources ?? []} />

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">€{component.price_eur}</span>
        <a
          href={component.affiliate_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:bg-blue-600/10 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          <ShoppingCart className="h-3 w-3" />
          Kaufen
          <ExternalLink className="h-2.5 w-2.5" />
        </a>
      </div>
    </div>
  );
}
