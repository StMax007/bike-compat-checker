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
    fetch('/api/groupsets')
      .then((r) => r.json())
      .then(setGroupsets);
  }, []);

  useEffect(() => {
    if (!selectedId) {
      setResults(null);
      return;
    }
    setLoading(true);
    fetch(`/api/compatibility?groupset_id=${selectedId}`)
      .then((r) => r.json())
      .then((data) => {
        setResults(data.byCategory);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [selectedId]);

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const selectedGroupset = groupsets.find((g) => g.id === selectedId);

  const filteredResults = (cat: ComponentCategory): CompatibilityResult[] => {
    if (!results) return [];
    const items = results[cat] ?? [];
    if (filter === 'all') return items;
    return items.filter((r) => r.status === filter);
  };

  const totalStats = results
    ? CATEGORY_ORDER.reduce(
        (acc, cat) => {
          for (const r of results[cat] ?? []) {
            acc[r.status] = (acc[r.status] ?? 0) + 1;
          }
          return acc;
        },
        {} as Record<string, number>
      )
    : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-white">Compatibility Checker</h1>
        <p className="text-neutral-400">
          Select your groupset to see compatibility status for all components.
        </p>
      </div>

      {/* Selector */}
      <div className="mb-8 max-w-md">
        <GroupsetSelector
          groupsets={groupsets}
          value={selectedId}
          onChange={setSelectedId}
          label="Your Groupset"
        />
      </div>

      {/* Groupset info card */}
      {selectedGroupset && (
        <div className="mb-6 flex flex-wrap gap-3">
          {[
            { label: 'Speeds', value: `${selectedGroupset.speeds}-speed` },
            { label: 'Type', value: selectedGroupset.type },
            { label: 'Freehub', value: selectedGroupset.freehub_standard.toUpperCase() },
            { label: 'BB Default', value: selectedGroupset.bb_standard_default.toUpperCase() },
            { label: 'Chainline', value: `${selectedGroupset.chainline_mm} mm` },
            ...(selectedGroupset.cable_pull_mm
              ? [{ label: 'Cable Pull', value: `${selectedGroupset.cable_pull_mm} mm` }]
              : []),
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm"
            >
              <span className="text-neutral-500">{item.label}: </span>
              <span className="font-medium text-white">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Stats + filter bar */}
      {results && totalStats && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-sm text-neutral-400">Filter:</span>
          {(['all', 'compatible', 'adapter', 'incompatible'] as FilterStatus[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              {f === 'all' ? `All (${Object.values(totalStats).reduce((a, b) => a + b, 0)})` : null}
              {f === 'compatible' ? `✅ Compatible (${totalStats.compatible ?? 0})` : null}
              {f === 'adapter' ? `⚠️ Adapter (${totalStats.adapter ?? 0})` : null}
              {f === 'incompatible' ? `❌ Incompatible (${totalStats.incompatible ?? 0})` : null}
            </button>
          ))}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
      )}

      {/* Empty state */}
      {!selectedId && !loading && (
        <div className="rounded-xl border border-dashed border-neutral-700 py-16 text-center">
          <Filter className="mx-auto mb-3 h-8 w-8 text-neutral-600" />
          <p className="text-neutral-400">Select a groupset above to see compatibility results</p>
        </div>
      )}

      {/* Results */}
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
              <div key={cat} className="rounded-xl border border-neutral-800 bg-neutral-900/50">
                <button
                  className="flex w-full items-center justify-between px-5 py-4"
                  onClick={() => toggleCategory(cat)}
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-neutral-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-neutral-500" />
                    )}
                    <span className="font-medium text-white">{CATEGORY_LABELS[cat]}</span>
                    <span className="text-sm text-neutral-500">
                      {items.length} component{items.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {compatCount > 0 && (
                      <span className="rounded-full bg-green-400/10 px-2 py-0.5 text-xs text-green-400">
                        {compatCount} ✅
                      </span>
                    )}
                    {adapterCount > 0 && (
                      <span className="rounded-full bg-yellow-400/10 px-2 py-0.5 text-xs text-yellow-400">
                        {adapterCount} ⚠️
                      </span>
                    )}
                  </div>
                </button>

                {isExpanded && items.length > 0 && (
                  <div className="grid gap-3 border-t border-neutral-800 p-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((result) => (
                      <ComponentCard
                        key={result.component.id}
                        component={result.component}
                        status={result.status}
                        explanation={result.explanation}
                        adapter_name={result.adapter_name}
                      />
                    ))}
                  </div>
                )}
                {isExpanded && items.length === 0 && (
                  <p className="border-t border-neutral-800 px-5 py-4 text-sm text-neutral-500">
                    No components match the current filter.
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
