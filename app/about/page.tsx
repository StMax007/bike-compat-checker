import { Bike, Database, Shield, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-white">About BikeCompat</h1>
        <p className="text-neutral-400">
          A free tool for road cyclists to navigate the complex world of component compatibility.
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-neutral-300">
        <section className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-3 flex items-center gap-2 text-white">
            <Bike className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-semibold">What is BikeCompat?</h2>
          </div>
          <p className="mb-3 text-neutral-400">
            BikeCompat is a compatibility checker for road bike components. It helps cyclists answer
            the perennial question: <em>&quot;Will this component work with my groupset?&quot;</em>
          </p>
          <p className="text-neutral-400">
            Whether you&apos;re upgrading your drivetrain, mixing component tiers within a brand, or
            crossing brands entirely, BikeCompat gives you a quick, clear answer — with an explanation
            of why.
          </p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-3 flex items-center gap-2 text-white">
            <Database className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-semibold">How is the data sourced?</h2>
          </div>
          <p className="mb-4 text-neutral-400">
            Compatibility rules are based on published technical specifications from Shimano, SRAM, and
            Campagnolo, as well as well-established cycling knowledge:
          </p>
          <ul className="space-y-2 text-neutral-400">
            {[
              'Shimano 11-speed road (R7000/R8000/R9100) components share the same cable pull ratio and sprocket spacing.',
              'Shimano 12-speed Di2 (R7100/R8100/R9200) is fully cross-compatible but not backward compatible with 11s.',
              'SRAM 11-speed (Rival22/Force22/Red22) uses DoubleTap and is cross-compatible within the tier group.',
              'SRAM AXS 12-speed requires XDR freehub and is a closed ecosystem — not compatible with other systems.',
              'Campagnolo uses a unique 2.5 mm cable pull and proprietary cassette interface (N3W for 12s).',
              'Bottom bracket compatibility depends on both the BB shell standard (BSA, PF30, BB86…) and spindle diameter.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-neutral-500">
            Note: Some edge cases and newer component variants may not yet be covered. Always verify
            with the manufacturer or a qualified mechanic before purchasing.
          </p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-3 flex items-center gap-2 text-white">
            <Shield className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-semibold">Affiliate disclosure</h2>
          </div>
          <p className="text-neutral-400">
            Component cards include links to{' '}
            <a
              href="https://www.bike-components.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              bike-components.de
            </a>
            . These are affiliate links — we may earn a small commission if you purchase through them,
            at no extra cost to you. This helps keep BikeCompat free.
          </p>
        </section>

        <section className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-3 flex items-center gap-2 text-white">
            <ExternalLink className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-semibold">Covered groupsets</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { brand: 'Shimano', items: ['105 R7000 (11s)', 'Ultegra R8000 (11s)', 'Dura-Ace R9100 (11s)', '105 R7100 Di2 (12s)', 'Ultegra R8100 Di2 (12s)', 'Dura-Ace R9200 Di2 (12s)'] },
              { brand: 'SRAM', items: ['Rival 22 (11s)', 'Force 22 (11s)', 'Red 22 (11s)', 'Rival AXS (12s)', 'Force AXS (12s)', 'Red AXS (12s)'] },
              { brand: 'Campagnolo', items: ['Chorus 11s', 'Record 11s', 'Super Record 11s', 'Chorus 12s', 'Record 12s', 'Super Record 12s'] },
            ].map((g) => (
              <div key={g.brand}>
                <h3 className="mb-2 font-medium text-white">{g.brand}</h3>
                <ul className="space-y-1">
                  {g.items.map((i) => (
                    <li key={i} className="text-xs text-neutral-500">• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
