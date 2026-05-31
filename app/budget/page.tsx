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
    fetch('/api/groupsets').then((r) => r.json()).then(setGroupsets);
  }, []);

  useEffect(() => {
    if (!selectedId) { setResults(null); setCart([]); return; }
    setLoading(true);
    fetch(`/api/compatibility?groupset_id=${selectedId}`)
      .then((r) => r.json())
      .then((data) => { setResults(data.byCategory); setLoading(false); })
      .catch(() => setLoading(false));
  }, [selectedId]);

  const toggleCart = (component: Component) =>
    setCart((prev) => prev.find((c) => c.id === component.id) ? prev.filter((c) => c.id !== component.id) : [...prev, component]);

  const isSelected = (c: Component) => cart.some((x) => x.id === c.id);
  const total = cart.reduce((s, c) => s + c.price_eur, 0);
  const allItemsUrl =
    cart.length > 0
      ? `https://www.bike-components.de/de/s/?keywords=${encodeURIComponent(cart.map((c) => c.model_number).join(' '))}`
      : '';

  const compatibleResults = (cat: ComponentCategory): CompatibilityResult[] =>
    (results?.[cat] ?? []).filter((r) => r.status !== 'incompatible');

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Budget-Rechner</h1>
        <p className="text-gray-500 dark:text-neutral-400">Wähle kompatible Komponenten, um deine Upgrade-Kosten zu schätzen.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-8 max-w-md">
            <GroupsetSelector groupsets={groupsets} value={selectedId} onChange={setSelectedId} label="Referenz-Schaltgruppe" />
          </div>

          {loading && <div className="flex items-center justify-center py-16"><Loader2 className="h-8 w-8 animate-spin text-blue-500" /></div>}

          {!selectedId && !loading && (
            <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center dark:border-neutral-700">
              <Calculator className="mx-auto mb-3 h-8 w-8 text-gray-300 dark:text-neutral-600" />
              <p className="text-gray-400 dark:text-neutral-500">Wähle eine Schaltgruppe, um kompatible Komponenten zu durchsuchen</p>
            </div>
          )}

          {results && !loading && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400 dark:text-neutral-500">
                Zeigt nur kompatible und Adapter-Komponenten. Klicke zum Hinzufügen zum Warenkorb.
              </p>
              {CATEGORY_ORDER.map((cat) => {
                const items = compatibleResults(cat);
                if (items.length === 0) return null;
                return (
                  <div key={cat} className="rounded-xl border border-gray-200 bg-gray-50/50 dark:border-neutral-800 dark:bg-neutral-900/50">
                    <div className="border-b border-gray-200 px-5 py-3 dark:border-neutral-800">
                      <h3 className="font-medium text-gray-900 dark:text-white">{CATEGORY_LABELS[cat]}</h3>
                    </div>
                    <div className="grid gap-3 p-5 sm:grid-cols-2">
                      {items.map((result) => (
                        <ComponentCard key={result.component.id} component={result.component} status={result.status} explanation={result.explanation} adapter_name={result.adapter_name} sources={result.sources} selectable selected={isSelected(result.component)} onToggle={toggleCart} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="lg:sticky lg:top-20 lg:h-fit">
          <div className="rounded-xl border border-gray-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4 dark:border-neutral-800">
              <ShoppingCart className="h-4 w-4 text-blue-500" />
              <h2 className="font-semibold text-gray-900 dark:text-white">Deine Auswahl</h2>
              {cart.length > 0 && <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">{cart.length}</span>}
            </div>

            {cart.length === 0 ? (
              <div className="px-5 py-8 text-center text-sm text-gray-400 dark:text-neutral-500">
                Noch keine Komponenten ausgewählt.<br />Klicke auf eine Komponentenkarte, um sie hinzuzufügen.
              </div>
            ) : (
              <>
                <ul className="divide-y divide-gray-100 dark:divide-neutral-800">
                  {cart.map((c) => (
                    <li key={c.id} className="flex items-center justify-between gap-2 px-5 py-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{c.name}</p>
                        <p className="text-xs text-gray-400 dark:text-neutral-500">{c.model_number}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">€{c.price_eur}</span>
                        <button onClick={() => toggleCart(c)} className="text-gray-300 transition-colors hover:text-red-500 dark:text-neutral-600 dark:hover:text-red-400" aria-label="Entfernen">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 px-5 py-4 dark:border-neutral-800">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-neutral-400">Gesamtschätzung</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">€{total.toLocaleString('de-DE')}</span>
                  </div>
                  <a
                    href={allItemsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-blue-600 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-500"
                  >
                    Alle auf bike-components.de ansehen
                  </a>
                  <button onClick={() => setCart([])} className="mt-2 w-full rounded-lg border border-gray-200 py-2.5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-white">
                    Auswahl löschen
                  </button>
                  <p className="mt-3 text-center text-xs text-gray-300 dark:text-neutral-600">Affiliate-Links – wir erhalten ggf. eine Provision</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
