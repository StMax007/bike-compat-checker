'use client';

import { useState, useEffect } from 'react';
import { Groupset, Component, ComponentCategory, CompatibilityResult, CATEGORY_LABELS, CATEGORY_ORDER } from '@/lib/types';
import GroupsetSelector from '@/components/GroupsetSelector';
import ComponentCard from '@/components/ComponentCard';
import { Loader2, ShoppingCart, Trash2, Calculator } from 'lucide-react';

export default function BudgetPage() {
  const [groupsets, setGroupsets] = useState<Groupset[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [results, setResults] = useState<Record<string, CompatibilityResult[]> | null>(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<Component[]>([]);

  useEffect(() => {
    fetch('/api/groupsets')
      .then((r) => r.json())
      .then(setGroupsets);
  }, []);

  useEffect(() => {
    if (!selectedId) {
      setResults(null);
      setCart([]);
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

  const toggleCart = (component: Component) => {
    setCart((prev) =>
      prev.find((c) => c.id === component.id)
        ? prev.filter((c) => c.id !== component.id)
        : [...prev, component]
    );
  };

  const isSelected = (component: Component) => cart.some((c) => c.id === component.id);
  const total = cart.reduce((sum, c) => sum + c.price_eur, 0);

  const compatibleResults = (cat: ComponentCategory): CompatibilityResult[] => {
    if (!results) return [];
    return (results[cat] ?? []).filter((r) => r.status !== 'incompatible');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-white">Budget Calculator</h1>
        <p className="text-neutral-400">
          Select compatible components to estimate your upgrade cost.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Left: component selector */}
        <div>
          <div className="mb-8 max-w-md">
            <GroupsetSelector
              groupsets={groupsets}
              value={selectedId}
              onChange={setSelectedId}
              label="Reference Groupset"
            />
          </div>

          {loading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          )}

          {!selectedId && !loading && (
            <div className="rounded-xl border border-dashed border-neutral-700 py-16 text-center">
              <Calculator className="mx-auto mb-3 h-8 w-8 text-neutral-600" />
              <p className="text-neutral-400">Select a groupset to browse compatible components</p>
            </div>
          )}

          {results && !loading && (
            <div className="space-y-4">
              <p className="text-sm text-neutral-500">
                Showing compatible and adapter components only. Click to add to your cart.
              </p>
              {CATEGORY_ORDER.map((cat) => {
                const items = compatibleResults(cat);
                if (items.length === 0) return null;
                return (
                  <div key={cat} className="rounded-xl border border-neutral-800 bg-neutral-900/50">
                    <div className="border-b border-neutral-800 px-5 py-3">
                      <h3 className="font-medium text-white">{CATEGORY_LABELS[cat]}</h3>
                    </div>
                    <div className="grid gap-3 p-5 sm:grid-cols-2">
                      {items.map((result) => (
                        <ComponentCard
                          key={result.component.id}
                          component={result.component}
                          status={result.status}
                          explanation={result.explanation}
                          adapter_name={result.adapter_name}
                          selectable
                          selected={isSelected(result.component)}
                          onToggle={toggleCart}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: cart / summary */}
        <div className="lg:sticky lg:top-20 lg:h-fit">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900">
            <div className="flex items-center gap-2 border-b border-neutral-800 px-5 py-4">
              <ShoppingCart className="h-4 w-4 text-blue-400" />
              <h2 className="font-semibold text-white">Your Selection</h2>
              {cart.length > 0 && (
                <span className="ml-auto rounded-full bg-blue-500/20 px-2 py-0.5 text-xs text-blue-400">
                  {cart.length}
                </span>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="px-5 py-8 text-center text-sm text-neutral-500">
                No components selected yet.
                <br />
                Click on a component card to add it.
              </div>
            ) : (
              <>
                <ul className="divide-y divide-neutral-800">
                  {cart.map((c) => (
                    <li key={c.id} className="flex items-center justify-between gap-2 px-5 py-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">{c.name}</p>
                        <p className="text-xs text-neutral-500">{c.model_number}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="text-sm font-semibold text-white">€{c.price_eur}</span>
                        <button
                          onClick={() => toggleCart(c)}
                          className="text-neutral-600 hover:text-red-400 transition-colors"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-neutral-800 px-5 py-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-neutral-400">Total estimate</span>
                    <span className="text-xl font-bold text-white">€{total.toLocaleString()}</span>
                  </div>
                  <a
                    href="#"
                    className="block w-full rounded-lg bg-blue-600 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-500"
                    onClick={(e) => e.preventDefault()}
                  >
                    View all on bike-components.de
                  </a>
                  <button
                    onClick={() => setCart([])}
                    className="mt-2 w-full rounded-lg border border-neutral-700 py-2.5 text-sm text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white"
                  >
                    Clear selection
                  </button>
                  <p className="mt-3 text-center text-xs text-neutral-600">
                    Affiliate links – we may earn a commission
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
