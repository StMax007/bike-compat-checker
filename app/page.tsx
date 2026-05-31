import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, XCircle, Bike, Calculator } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            <Bike className="h-3.5 w-3.5" />
            Road Cycling Component Checker
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Will it work on{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              your bike?
            </span>
          </h1>
          <p className="mb-10 text-lg text-neutral-400">
            Instantly check whether road bike components are compatible with your groupset.
            Shimano, SRAM, and Campagnolo — all compatibility rules in one place.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/check"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
            >
              Check Compatibility
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/budget"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
            >
              <Calculator className="h-4 w-4" />
              Budget Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-neutral-800 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">How it works</h2>
          <p className="mb-12 text-center text-neutral-400">Three steps to compatibility clarity</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { step: '01', title: 'Pick your groupset', description: 'Select your existing groupset — Shimano 105, Ultegra, Dura-Ace, SRAM Rival/Force/Red, or Campagnolo.' },
              { step: '02', title: 'See all components', description: 'Get a full compatibility overview for every drivetrain, braking, and bottom bracket component.' },
              { step: '03', title: 'Plan your budget', description: 'Select the components you want and get an instant total cost estimate with affiliate links to buy.' },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-4 text-3xl font-bold text-blue-500/30">{item.step}</div>
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status legend */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Compatibility at a glance</h2>
          <p className="mb-12 text-center text-neutral-400">We check every component against key compatibility rules</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20', label: 'Compatible', desc: 'Direct drop-in replacement. No adapters needed.' },
              { icon: AlertTriangle, color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20', label: 'With Adapter', desc: 'Works with an additional adapter or converter.' },
              { icon: XCircle, color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20', label: 'Incompatible', desc: 'Does not work with this groupset combination.' },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl border p-6 ${item.bg}`}>
                <item.icon className={`mb-3 h-6 w-6 ${item.color}`} />
                <h3 className={`mb-1 font-semibold ${item.color}`}>{item.label}</h3>
                <p className="text-sm text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered groupsets */}
      <section className="border-t border-neutral-800 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Covered groupsets</h2>
          <p className="mb-10 text-center text-neutral-400">18 groupsets across 3 major brands</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { brand: 'Shimano', items: ['105 R7000 (11s mech)', 'Ultegra R8000 (11s mech)', 'Dura-Ace R9100 (11s mech)', '105 R7100 Di2 (12s)', 'Ultegra R8100 Di2 (12s)', 'Dura-Ace R9200 Di2 (12s)'] },
              { brand: 'SRAM', items: ['Rival 22 (11s mech)', 'Force 22 (11s mech)', 'Red 22 (11s mech)', 'Rival AXS (12s)', 'Force AXS (12s)', 'Red AXS (12s)'] },
              { brand: 'Campagnolo', items: ['Chorus 11s', 'Record 11s', 'Super Record 11s', 'Chorus 12s (N3W)', 'Record 12s (N3W)', 'Super Record 12s (N3W)'] },
            ].map((group) => (
              <div key={group.brand} className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                <h3 className="mb-3 font-semibold text-white">{group.brand}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-neutral-400">
                      <span className="h-1 w-1 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-800 px-4 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to check your build?</h2>
          <p className="mb-8 text-neutral-400">Select your groupset and instantly see compatibility across 9 component categories.</p>
          <Link href="/check" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 font-medium text-white transition-colors hover:bg-blue-500">
            Start Checking
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
