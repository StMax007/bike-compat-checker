import { Bike, Database, Shield, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">Über BikeCompat</h1>
        <p className="text-gray-500 dark:text-neutral-400">Ein kostenloses Tool für Rennradfahrer zur Komponentenkompatibilität.</p>
      </div>

      <div className="space-y-6">
        <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-3 flex items-center gap-2">
            <Bike className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Was ist BikeCompat?</h2>
          </div>
          <p className="mb-3 text-sm text-gray-500 dark:text-neutral-400">
            BikeCompat ist ein Kompatibilitätsprüfer für Rennrad-Komponenten. Er hilft Radfahrern,
            die ewige Frage zu beantworten: <em>&bdquo;Funktioniert diese Komponente mit meiner Schaltgruppe?&ldquo;</em>
          </p>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Ob du deinen Antriebsstrang aufrüstest, Komponenten verschiedener Qualitätsstufen einer Marke
            kombinierst oder markenübergreifend arbeitest – BikeCompat gibt dir eine schnelle, klare Antwort mit Begründung.
          </p>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-3 flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Woher stammen die Daten?</h2>
          </div>
          <p className="mb-4 text-sm text-gray-500 dark:text-neutral-400">
            Kompatibilitätsregeln basieren auf den technischen Spezifikationen von Shimano, SRAM und Campagnolo sowie auf etabliertem Fachwissen:
          </p>
          <ul className="space-y-2">
            {[
              'Shimano 11-Gang (R7000/R8000/R9100) sind untereinander vollständig kompatibel.',
              'Shimano 12-Gang Di2 (R7100/R8100/R9200) sind kompatibel, aber nicht rückwärtskompatibel mit 11-Gang.',
              'SRAM 11-Gang (Rival22/Force22/Red22) nutzt DoubleTap und ist gruppenübergreifend kompatibel.',
              'SRAM AXS 12-Gang benötigt einen XDR-Freilaufkörper und ist ein geschlossenes Ökosystem.',
              'Campagnolo nutzt einen eigenen Seilzugweg (2,5 mm) und eine proprietäre Kassettenschnittstelle (N3W bei 12-Gang).',
              'Tretlager-Kompatibilität hängt vom Tretlagergehäuse-Standard (BSA, PF30 usw.) und vom Spindeldurchmesser ab.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-neutral-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />{item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400 dark:text-neutral-500">
            Hinweis: Einige Randfälle und neuere Komponentenvarianten sind möglicherweise noch nicht abgedeckt. Bitte vor dem Kauf immer beim Hersteller oder einem qualifizierten Mechaniker nachfragen.
          </p>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Affiliate-Hinweis</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            Komponentenkarten enthalten Links zu{' '}
            <a href="https://www.bike-components.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              bike-components.de
            </a>
            . Dies sind Affiliate-Links – wir erhalten ggf. eine kleine Provision bei einem Kauf über diese Links, ohne dass dir zusätzliche Kosten entstehen. Das hilft, BikeCompat kostenlos zu halten.
          </p>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-3 flex items-center gap-2">
            <ExternalLink className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Abgedeckte Schaltgruppen</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { brand: 'Shimano', items: ['105 R7000 (11-Gang)', 'Ultegra R8000 (11-Gang)', 'Dura-Ace R9100 (11-Gang)', '105 R7100 Di2 (12-Gang)', 'Ultegra R8100 Di2 (12-Gang)', 'Dura-Ace R9200 Di2 (12-Gang)'] },
              { brand: 'SRAM', items: ['Rival 22 (11-Gang)', 'Force 22 (11-Gang)', 'Red 22 (11-Gang)', 'Rival AXS (12-Gang)', 'Force AXS (12-Gang)', 'Red AXS (12-Gang)'] },
              { brand: 'Campagnolo', items: ['Chorus 11-Gang', 'Record 11-Gang', 'Super Record 11-Gang', 'Chorus 12-Gang', 'Record 12-Gang', 'Super Record 12-Gang'] },
            ].map((g) => (
              <div key={g.brand}>
                <h3 className="mb-2 font-medium text-gray-900 dark:text-white">{g.brand}</h3>
                <ul className="space-y-1">
                  {g.items.map((i) => <li key={i} className="text-xs text-gray-400 dark:text-neutral-500">• {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
