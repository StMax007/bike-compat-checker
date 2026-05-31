import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, XCircle, Bike, Calculator } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.06)_0%,_transparent_70%)]" />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
            <Bike className="h-3.5 w-3.5" />
            Rennrad-Komponenten-Check
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Passt es zu{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              deinem Rad?
            </span>
          </h1>
          <p className="mb-10 text-lg text-gray-500 dark:text-neutral-400">
            Prüfe sofort, ob Rennrad-Komponenten mit deiner Schaltgruppe kompatibel sind.
            Shimano, SRAM und Campagnolo – alle Kompatibilitätsregeln an einem Ort.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/check" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500">
              Kompatibilität prüfen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/budget" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white">
              <Calculator className="h-4 w-4" /> Budget-Rechner
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-gray-200 px-4 py-16 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-white">So funktioniert es</h2>
          <p className="mb-12 text-center text-gray-500 dark:text-neutral-400">Drei Schritte zur Klarheit</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { step: '01', title: 'Schaltgruppe wählen', description: 'Wähle deine vorhandene Schaltgruppe – Shimano 105, Ultegra, Dura-Ace, SRAM Rival/Force/Red oder Campagnolo.' },
              { step: '02', title: 'Alle Komponenten sehen', description: 'Erhalte einen vollständigen Überblick über jede Antriebs-, Brems- und Tretlager-Komponente.' },
              { step: '03', title: 'Budget planen', description: 'Wähle die gewünschten Komponenten und erhalte sofort eine Kostenabschätzung mit Kauflinks.' },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="mb-4 text-3xl font-bold text-blue-300 dark:text-blue-500/30">{item.step}</div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status legend */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-white">Kompatibilität auf einen Blick</h2>
          <p className="mb-12 text-center text-gray-500 dark:text-neutral-400">Wir prüfen jede Komponente anhand der wichtigsten Kompatibilitätsregeln</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: CheckCircle, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 border-green-200 dark:bg-green-400/10 dark:border-green-400/20', label: 'Kompatibel', desc: 'Direkter Austausch möglich. Kein Adapter nötig.' },
              { icon: AlertTriangle, color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-400/10 dark:border-yellow-400/20', label: 'Mit Adapter', desc: 'Funktioniert mit einem zusätzlichen Adapter oder Konverter.' },
              { icon: XCircle, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 border-red-200 dark:bg-red-400/10 dark:border-red-400/20', label: 'Inkompatibel', desc: 'Funktioniert nicht mit dieser Schaltgruppen-Kombination.' },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl border p-6 ${item.bg}`}>
                <item.icon className={`mb-3 h-6 w-6 ${item.color}`} />
                <h3 className={`mb-1 font-semibold ${item.color}`}>{item.label}</h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered groupsets */}
      <section className="border-t border-gray-200 px-4 py-16 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-white">Abgedeckte Schaltgruppen</h2>
          <p className="mb-10 text-center text-gray-500 dark:text-neutral-400">18 Schaltgruppen von 3 großen Marken</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { brand: 'Shimano', items: ['105 R7000 (11-Gang mech.)', 'Ultegra R8000 (11-Gang mech.)', 'Dura-Ace R9100 (11-Gang mech.)', '105 R7100 Di2 (12-Gang)', 'Ultegra R8100 Di2 (12-Gang)', 'Dura-Ace R9200 Di2 (12-Gang)'] },
              { brand: 'SRAM', items: ['Rival 22 (11-Gang mech.)', 'Force 22 (11-Gang mech.)', 'Red 22 (11-Gang mech.)', 'Rival AXS (12-Gang)', 'Force AXS (12-Gang)', 'Red AXS (12-Gang)'] },
              { brand: 'Campagnolo', items: ['Chorus 11-Gang', 'Record 11-Gang', 'Super Record 11-Gang', 'Chorus 12-Gang (N3W)', 'Record 12-Gang (N3W)', 'Super Record 12-Gang (N3W)'] },
            ].map((group) => (
              <div key={group.brand} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">{group.brand}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-400">
                      <span className="h-1 w-1 rounded-full bg-blue-500" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 px-4 py-16 text-center dark:border-neutral-800">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Bereit, deinen Aufbau zu prüfen?</h2>
          <p className="mb-8 text-gray-500 dark:text-neutral-400">Wähle deine Schaltgruppe und sieh sofort die Kompatibilität in 9 Komponentenkategorien.</p>
          <Link href="/check" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 font-medium text-white transition-colors hover:bg-blue-500">
            Jetzt prüfen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
