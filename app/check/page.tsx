'use client';

import { useState, useEffect } from 'react';
import { Groupset, ComponentCategory, CompatibilityResult, CATEGORY_LABELS, CATEGORY_ORDER } from '@/lib/types';
import GroupsetSelector from '@/components/GroupsetSelector';
import ComponentCard from '@/components/ComponentCard';
import { Loader2, Filter, ChevronDown, ChevronRight } from 'lucide-react';

type FilterStatus = 'all' | 'compatible' | 'adapter' | 'incompatible';

export default function CheckPage() {
  const [groupsets, setGroupsets] = useState<Groupset[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [results, setResults] = useState<Record<string, CompatibilityResult[]> | null>(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(CATEGORY_ORDER));

  useEffect(() => {
    fetch('/api/groupsets').then((r) => r.json()).then(setGroupsets);
  }, []);

  useEffect(() => {
    if (!selectedId) { setResults(null); return; }
    setLoading(true);
    fetch(`/api/compatibility?groupset_id=${selectedId}`)
      .then((r) => r.json())
      .then((data) => { setResults(data.byCategory); setLoading(false); })
      .catch(() => setLoading(false));
  }, [selectedId]);

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  };

  const filteredResults = (cat: ComponentCategory): CompatibilityResult[] => {
    if (!results) return [];
    const items = results[cat] ?? [];
    return filter === 'all' ? items : items.filter((r) => r.status === filter);
  };

  const totalStats = results
    ? CATEGORY_ORDER.reduce((acc, cat) => {
        for (const r of results[cat] ?? []) acc[r.status] = (acc[r.status] ?? 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    : null;

  const selectedGroupset = groupsets.find((g) => g.id === selectedId);

  const typeLabel = (t: string) => t === 'mechanical' ? 'mechanisch' : t === 'electronic' ? 'elektronisch' : t;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Kompatibilitätsprüfer</h1>
        <p className="text-gray-500 dark:text-neutral-400">
          Wähle deine Schaltgruppe, um den Kompatibilitätsstatus aller Komponenten zu sehen.
        </p>
      </div>

      <div className="mb-8 max-w-md">
        <GroupsetSelector groupsets={groupsets} value={selectedId} onChange={setSelectedId} label="Deine Schaltgruppe" />
      </div>

      {selectedGroupset && (
        <div className="mb-6 flex flex-wrap gap-3">
          {[
            { label: 'Gänge', value: `${selectedGroupset.speeds}-Gang` },
            { label: 'Typ', value: typeLabel(selectedGroupset.type) },
            { label: 'Freilaufkörper', value: selectedGroupset.freehub_standard.toUpperCase() },
            { label: 'Tretlager-Standard', value: selectedGroupset.bb_standard_default.toUpperCase() },
            { label: 'Kettenlinie', value: `${selectedGroupset.chainline_mm} mm` },
            ...(selectedGroupset.cable_pull_mm ? [{ label: 'Seilzug', value: `${selectedGroupset.cable_pull_mm} mm` }] : []),
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900">
              <span className="text-gray-400 dark:text-neutral-500">{item.label}: </span>
              <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {results && totalStats && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-500 dark:text-neutral-400">Filter:</span>
          {(['all', 'compatible', 'adapter', 'incompatible'] as FilterStatus[]).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                filter === f ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white'
              }`}>
              {f === 'all' && `Alle (${Object.values(totalStats).reduce((a, b) => a + b, 0)})`}
              {f === 'compatible' && `✅ Kompatibel (${totalStats.compatible ?? 0})`}
              {f === 'adapter' && `⚠️ Adapter (${totalStats.adapter ?? 0})`}
              {f === 'incompatible' && `❌ Inkompatibel (${totalStats.incompatible ?? 0})`}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      )}

      {!selectedId && !loading && (
        <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center dark:border-neutral-700">
          <Filter className="mx-auto mb-3 h-8 w-8 text-gray-300 dark:text-neutral-600" />
          <p className="text-gray-400 dark:text-neutral-500">Wähle oben eine Schaltgruppe, um Ergebnisse zu sehen</p>
        </div>
      )}

      {results && !loading && (
        <div className="space-y-4">
          {CATEGORY_ORDER.map((cat) => {
            const items = filteredResults(cat);
            const allItems = results[cat] ?? [];
            const isExpanded = expandedCategories.has(cat);
            const compatCount = allItems.filter((r) => r.status === 'compatible').length;
            const adapterCount = allItems.filter((r) => r.status === 'adapter').length;
            if (filter !== 'all' && items.length === 0) return null;

            return (
              <div key={cat} className="rounded-xl border border-gray-200 bg-gray-50/50 dark:border-neutral-800 dark:bg-neutral-900/50">
                <button className="flex w-full items-center justify-between px-5 py-4" onClick={() => toggleCategory(cat)}>
                  <div className="flex items-center gap-3">
                    {isExpanded ? <ChevronDown className="h-4 w-4 text-gray-400 dark:text-neutral-500" /> : <ChevronRight className="h-4 w-4 text-gray-400 dark:text-neutral-500" />}
                    <span className="font-medium text-gray-900 dark:text-white">{CATEGORY_LABELS[cat]}</span>
                    <span className="text-sm text-gray-400 dark:text-neutral-500">{items.length} Komponente{items.length !== 1 ? 'n' : ''}</span>
                  </div>
                  <div className="flex gap-2">
                    {compatCount > 0 && <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-400/10 dark:text-green-400">{compatCount} ✅</span>}
                    {adapterCount > 0 && <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-600 dark:bg-yellow-400/10 dark:text-yellow-400">{adapterCount} ⚠️</span>}
                  </div>
                </button>

                {isExpanded && items.length > 0 && (
                  <div className="grid gap-3 border-t border-gray-200 p-5 dark:border-neutral-800 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((result) => (
                      <ComponentCard key={result.component.id} component={result.component} status={result.status} explanation={result.explanation} adapter_name={result.adapter_name} />
                    ))}
                  </div>
                )}
                {isExpanded && items.length === 0 && (
                  <p className="border-t border-gray-200 px-5 py-4 text-sm text-gray-400 dark:border-neutral-800 dark:text-neutral-500">
                    Keine Komponenten entsprechen dem aktuellen Filter.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
