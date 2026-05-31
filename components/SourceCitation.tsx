'use client';

import { useState } from 'react';
import { CompatibilitySource } from '@/lib/types';
import { ChevronDown, ExternalLink, BookOpen } from 'lucide-react';

const MANUFACTURER_COLORS: Record<string, string> = {
  Shimano: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/50',
  SRAM: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800/50',
  Campagnolo: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800/50',
};

function SourceItem({ source }: { source: CompatibilitySource }) {
  const color = MANUFACTURER_COLORS[source.manufacturer] ?? 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700';
  return (
    <div className={`rounded-md border p-2.5 text-xs ${color}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <p className="font-semibold">{source.manufacturer}</p>
          <p className="mt-0.5 opacity-80">{source.document}</p>
          {source.section && <p className="mt-0.5 opacity-70">Abschnitt: {source.section}</p>}
        </div>
        {source.url && (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            title="Quelle öffnen"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
      {source.quote && (
        <blockquote className="mt-2 border-l-2 pl-2 italic opacity-80 leading-relaxed">
          &ldquo;{source.quote}&rdquo;
        </blockquote>
      )}
    </div>
  );
}

interface SourceCitationProps {
  sources: CompatibilitySource[];
}

export default function SourceCitation({ sources }: SourceCitationProps) {
  const [open, setOpen] = useState(false);

  if (!sources || sources.length === 0) return null;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
      >
        <BookOpen className="h-3 w-3" />
        <span>Quellennachweis ({sources.length})</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="mt-2 space-y-2" onClick={(e) => e.stopPropagation()}>
          {sources.map((src, i) => (
            <SourceItem key={i} source={src} />
          ))}
        </div>
      )}
    </div>
  );
}
