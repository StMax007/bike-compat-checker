import {
  Component,
  ComponentCategory,
  CompatibilityResult,
  CompatibilitySource,
  CompatibilityStatus,
  Groupset,
} from './types';
import { groupsets, getGroupsetById } from './data/groupsets';
import { components } from './data/components';
import { CATEGORY_ORDER } from './types';
import { SOURCES } from './data/sources';

// ─── Compatibility group rules ────────────────────────────────────────────────
type CompatibilityGroupRule = {
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
  categories?: ComponentCategory[];
  sources: CompatibilitySource[];
};

const GROUP_RULES: Record<string, Record<string, CompatibilityGroupRule>> = {
  // ══════════════════════════════════════════════════════════
  // SHIMANO 11s ROAD
  // ══════════════════════════════════════════════════════════
  'shimano-11s-road': {
    'shimano-11s-road': {
      status: 'compatible',
      explanation: 'Gleiche Kompatibilitätsgruppe: Shimano 11-Gang Rennrad (R7000/R8000/R9100) Komponenten sind vollständig untereinander kompatibel.',
      sources: [SOURCES.shimano_road_rear_drivetrain, SOURCES.shimano_road_front_drivetrain],
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'Shimano 11-Gang und 12-Gang Komponenten verwenden unterschiedliche Schaltübersetzungen, Kettenteilung und Kassetteninterfaces. Nicht kreuzkompatibel.',
      sources: [SOURCES.shimano_road_front_drivetrain, SOURCES.shimano_road_rear_drivetrain],
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'Shimano und SRAM verwenden unterschiedliche Seilzugwege (2,8 mm vs. 3,1 mm). Schalthebel steuern die Schaltwerke des jeweils anderen Herstellers nicht.',
      sources: [SOURCES.sram_cable_pull],
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'SRAM AXS ist ein 12-Gang elektronisches System, das mit mechanischen Shimano 11-Gang Komponenten inkompatibel ist.',
      sources: [SOURCES.sram_axs_ecosystem],
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'Campagnolo verwendet einen anderen Seilzugweg (2,5 mm) und ein anderes Kassetteninterface. Nicht kompatibel mit Shimano.',
      sources: [SOURCES.campagnolo_cable_pull],
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 12-Gang erfordert den N3W-Freilaufkörper und verwendet andere Schaltmechanik. Inkompatibel mit Shimano 11-Gang.',
      sources: [SOURCES.campagnolo_n3w, SOURCES.campagnolo_cable_pull],
    },
  },

  // ══════════════════════════════════════════════════════════
  // SHIMANO 12s ROAD (Di2)
  // ══════════════════════════════════════════════════════════
  'shimano-12s-road': {
    'shimano-12s-road': {
      status: 'compatible',
      explanation: 'Gleiche Kompatibilitätsgruppe: Shimano 12-Gang Di2 (R7100/R8100/R9200) Komponenten sind vollständig untereinander kompatibel.',
      sources: [SOURCES.shimano_road_front_drivetrain, SOURCES.shimano_road_rear_drivetrain],
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'Shimano 12-Gang Di2 verwendet elektronische Betätigung und 12-Gang Kassetten. Nicht kompatibel mit mechanischen 11-Gang Komponenten.',
      sources: [SOURCES.shimano_road_front_drivetrain, SOURCES.shimano_road_rear_drivetrain],
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'Shimano 12-Gang Di2 und SRAM 11-Gang mechanisch sind vollständig inkompatibel.',
      sources: [SOURCES.sram_cable_pull],
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'SRAM AXS und Shimano Di2 sind beide elektronisch, verwenden aber unterschiedliche Protokolle und Antriebssysteme.',
      sources: [SOURCES.sram_axs_ecosystem],
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'Campagnolo 11-Gang Komponenten sind inkompatibel mit Shimano 12-Gang Di2.',
      sources: [SOURCES.campagnolo_cable_pull],
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 12-Gang und Shimano 12-Gang Di2 verwenden durchgehend unterschiedliche Standards.',
      sources: [SOURCES.campagnolo_n3w, SOURCES.campagnolo_cable_pull],
    },
  },

  // ══════════════════════════════════════════════════════════
  // SRAM 11s ROAD
  // ══════════════════════════════════════════════════════════
  'sram-11s-road': {
    'sram-11s-road': {
      status: 'compatible',
      explanation: 'Gleiche Kompatibilitätsgruppe: SRAM 11-Gang Rennrad (Rival22/Force22/Red22) Komponenten sind vollständig untereinander kompatibel.',
      sources: [SOURCES.sram_11s_compatibility],
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'SRAM verwendet einen anderen Seilzugweg (3,1 mm) als Shimano (2,8 mm). Schalthebel und Schaltwerke verschiedener Hersteller sind nicht kompatibel.',
      sources: [SOURCES.sram_cable_pull],
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'SRAM 11-Gang mechanisch und Shimano 12-Gang Di2 sind in jeder Hinsicht inkompatibel.',
      sources: [SOURCES.sram_11s_compatibility],
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'SRAM AXS ist ein 12-Gang elektronisches System. Nicht kompatibel mit SRAM 11-Gang mechanischen Komponenten.',
      sources: [SOURCES.sram_axs_ecosystem],
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'SRAM (3,1 mm Seilzug) und Campagnolo (2,5 mm) sind nicht kompatibel.',
      sources: [SOURCES.sram_cable_pull, SOURCES.campagnolo_cable_pull],
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'SRAM 11-Gang und Campagnolo 12-Gang sind inkompatibel.',
      sources: [SOURCES.sram_11s_compatibility, SOURCES.campagnolo_n3w],
    },
  },

  // ══════════════════════════════════════════════════════════
  // SRAM AXS 12s
  // ══════════════════════════════════════════════════════════
  'sram-axs-12s': {
    'sram-axs-12s': {
      status: 'compatible',
      explanation: 'Gleiche Kompatibilitätsgruppe: SRAM AXS 12-Gang (Rival/Force/Red AXS) Komponenten sind vollständig untereinander im AXS-Ökosystem kompatibel.',
      sources: [SOURCES.sram_axs_ecosystem, SOURCES.sram_xdr_freehub],
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'SRAM AXS ist elektronisches 12-Gang; inkompatibel mit Shimano mechanischem 11-Gang.',
      sources: [SOURCES.sram_axs_ecosystem],
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'SRAM AXS und Shimano Di2 sind beide elektronisch, verwenden aber völlig unterschiedliche Systeme.',
      sources: [SOURCES.sram_axs_ecosystem],
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'SRAM AXS 12-Gang erfordert XDR-Freilaufkörper und ist elektronisch – nicht kompatibel mit SRAM 11-Gang mechanisch.',
      sources: [SOURCES.sram_axs_ecosystem, SOURCES.sram_xdr_freehub],
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'SRAM AXS und Campagnolo sind inkompatibel.',
      sources: [SOURCES.sram_axs_ecosystem, SOURCES.campagnolo_cable_pull],
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'SRAM AXS und Campagnolo 12-Gang sind inkompatibel.',
      sources: [SOURCES.sram_axs_ecosystem, SOURCES.campagnolo_n3w],
    },
  },

  // ══════════════════════════════════════════════════════════
  // CAMPAGNOLO 11s
  // ══════════════════════════════════════════════════════════
  'campagnolo-11s': {
    'campagnolo-11s': {
      status: 'compatible',
      explanation: 'Gleiche Kompatibilitätsgruppe: Campagnolo 11-Gang (Chorus/Record/Super Record) Komponenten sind vollständig untereinander kompatibel.',
      sources: [SOURCES.campagnolo_11s_system],
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 11-Gang und 12-Gang sind nicht kreuzkompatibel. 12-Gang erfordert N3W-Freilaufkörper und andere Kettenteilung.',
      sources: [SOURCES.campagnolo_n3w, SOURCES.campagnolo_12s_system],
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo verwendet 2,5 mm Seilzugweg; Shimano verwendet 2,8 mm. Schaltwerke sind nicht kreuzkompatibel.',
      sources: [SOURCES.campagnolo_cable_pull],
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 11-Gang und Shimano 12-Gang Di2 sind vollständig inkompatibel.',
      sources: [SOURCES.campagnolo_cable_pull],
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo (2,5 mm Seilzug) und SRAM (3,1 mm) sind nicht kompatibel.',
      sources: [SOURCES.campagnolo_cable_pull, SOURCES.sram_cable_pull],
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 11-Gang und SRAM AXS 12-Gang sind inkompatibel.',
      sources: [SOURCES.campagnolo_cable_pull, SOURCES.sram_axs_ecosystem],
    },
  },

  // ══════════════════════════════════════════════════════════
  // CAMPAGNOLO 12s
  // ══════════════════════════════════════════════════════════
  'campagnolo-12s': {
    'campagnolo-12s': {
      status: 'compatible',
      explanation: 'Gleiche Kompatibilitätsgruppe: Campagnolo 12-Gang (Chorus/Record/Super Record 12s) Komponenten sind vollständig untereinander kompatibel. Erfordert N3W-Freilaufkörper.',
      sources: [SOURCES.campagnolo_12s_system, SOURCES.campagnolo_n3w],
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'Campagnolo 12-Gang erfordert N3W-Freilaufkörper und andere Schaltmechanik – nicht kompatibel mit 11-Gang.',
      sources: [SOURCES.campagnolo_n3w],
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 12-Gang und Shimano 11-Gang sind inkompatibel.',
      sources: [SOURCES.campagnolo_cable_pull],
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 12-Gang und Shimano 12-Gang Di2 verwenden durchgehend unterschiedliche Standards.',
      sources: [SOURCES.campagnolo_n3w, SOURCES.campagnolo_cable_pull],
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 12-Gang und SRAM 11-Gang sind inkompatibel.',
      sources: [SOURCES.campagnolo_n3w, SOURCES.sram_cable_pull],
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 12-Gang und SRAM AXS sind inkompatibel.',
      sources: [SOURCES.campagnolo_n3w, SOURCES.sram_axs_ecosystem],
    },
  },
};

// ─── Cross-group overrides with sources ──────────────────────────────────────
const CROSS_GROUP_OVERRIDES: {
  fromGroup: string;
  toGroup: string;
  category: ComponentCategory;
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
  sources: CompatibilitySource[];
}[] = [
  {
    fromGroup: 'shimano-11s-road',
    toGroup: 'sram-11s-road',
    category: 'chain',
    status: 'compatible',
    explanation: 'Shimano und SRAM 11-Gang Ketten teilen die gleiche Breite (5,62 mm) und sind austauschbar.',
    sources: [SOURCES.shimano_road_rear_drivetrain],
  },
  {
    fromGroup: 'sram-11s-road',
    toGroup: 'shimano-11s-road',
    category: 'chain',
    status: 'compatible',
    explanation: 'Shimano und SRAM 11-Gang Ketten teilen die gleiche Breite (5,62 mm) und sind austauschbar.',
    sources: [SOURCES.sram_11s_compatibility],
  },
  {
    fromGroup: 'shimano-11s-road',
    toGroup: 'sram-11s-road',
    category: 'cassette',
    status: 'compatible',
    explanation: 'Beide verwenden HG-kompatiblen Freilaufkörper (Shimano 11-Gang Kassette passt auf SRAM 11-Gang Freilaufkörper).',
    sources: [SOURCES.shimano_freehub_cassette],
  },
  {
    fromGroup: 'sram-11s-road',
    toGroup: 'shimano-11s-road',
    category: 'cassette',
    status: 'compatible',
    explanation: 'Beide verwenden HG-kompatiblen Freilaufkörper (SRAM 11-Gang Kassette passt auf Shimano 11-Gang Freilaufkörper).',
    sources: [SOURCES.shimano_freehub_cassette],
  },
  {
    fromGroup: 'campagnolo-11s',
    toGroup: 'shimano-11s-road',
    category: 'bottom_bracket',
    status: 'adapter',
    explanation: 'Campagnolo Ultra-Torque verwendet eine andere Spindeldurchmesser (25 mm) als Shimano Hollowtech II (24 mm). Das Rahmen-Tretlagergehäuse ist unabhängig, aber die Kurbel muss zum Tretlager passen.',
    adapter_name: 'Kompatibler BSA-Sitz, aber kurbelspezifisches Tretlager erforderlich',
    sources: [],
  },
];

// ─── Main compatibility check function ───────────────────────────────────────
export function checkCompatibility(
  targetGroupsetId: string
): { groupset: Groupset; byCategory: Record<string, CompatibilityResult[]> } | null {
  const targetGroupset = getGroupsetById(targetGroupsetId);
  if (!targetGroupset) return null;

  const byCategory: Record<string, CompatibilityResult[]> = {};
  for (const category of CATEGORY_ORDER) byCategory[category] = [];

  for (const component of components) {
    const componentGroupset = getGroupsetById(component.groupset_id);
    if (!componentGroupset) continue;
    const result = evaluateCompatibility(component, componentGroupset, targetGroupset);
    byCategory[component.category].push(result);
  }

  const order: CompatibilityStatus[] = ['compatible', 'adapter', 'incompatible'];
  for (const category of CATEGORY_ORDER) {
    byCategory[category].sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status));
  }

  return { groupset: targetGroupset, byCategory };
}

function evaluateCompatibility(
  component: Component,
  componentGroupset: Groupset,
  targetGroupset: Groupset
): CompatibilityResult {
  const fromGroup = componentGroupset.compatibility_group;
  const toGroup = targetGroupset.compatibility_group;

  const override = CROSS_GROUP_OVERRIDES.find(
    (o) => o.fromGroup === fromGroup && o.toGroup === toGroup && o.category === component.category
  );
  if (override) {
    return {
      component,
      groupset: componentGroupset,
      status: override.status,
      explanation: override.explanation,
      adapter_name: override.adapter_name,
      sources: override.sources,
    };
  }

  const groupRule = GROUP_RULES[fromGroup]?.[toGroup];
  if (!groupRule) {
    return {
      component,
      groupset: componentGroupset,
      status: 'incompatible',
      explanation: 'Keine Kompatibilitätsdaten für diese Kombination verfügbar.',
      sources: [],
    };
  }

  return {
    component,
    groupset: componentGroupset,
    status: groupRule.status,
    explanation: groupRule.explanation,
    adapter_name: groupRule.adapter_name,
    sources: groupRule.sources,
  };
}

export function getCompatibleGroupsets(targetGroupsetId: string): Groupset[] {
  const target = getGroupsetById(targetGroupsetId);
  if (!target) return [];
  return groupsets.filter(
    (g) => GROUP_RULES[g.compatibility_group]?.[target.compatibility_group]?.status === 'compatible'
  );
}

export { groupsets };
