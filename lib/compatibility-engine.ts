import {
  Component,
  ComponentCategory,
  CompatibilityResult,
  CompatibilityStatus,
  Groupset,
} from './types';
import { groupsets, getGroupsetById } from './data/groupsets';
import { components } from './data/components';
import { CATEGORY_ORDER } from './types';

// ─── Compatibility group rules ────────────────────────────────────────────────
// Defines which groups are fully cross-compatible, partially compatible, or not
type CompatibilityGroupRule = {
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
  /** If specified, only applies to these categories */
  categories?: ComponentCategory[];
};

const GROUP_RULES: Record<string, Record<string, CompatibilityGroupRule>> = {
  'shimano-11s-road': {
    'shimano-11s-road': {
      status: 'compatible',
      explanation:
        'Same compatibility group: Shimano 11-speed road (R7000/R8000/R9100) components are fully cross-compatible.',
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation:
        'Shimano 11s and 12s road components use different shift ratios, chain pitch, and cassette interface. Not cross-compatible.',
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation:
        'Shimano and SRAM use different cable pull ratios (2.8 mm vs 3.1 mm). Shifters cannot control each other\'s derailleurs.',
      categories: ['shifters', 'rear_derailleur', 'front_derailleur'],
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'SRAM AXS is a 12-speed electronic system incompatible with Shimano mechanical 11-speed components.',
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation:
        'Campagnolo uses a different cable pull ratio (2.5 mm) and cassette interface. Not cross-compatible with Shimano.',
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation:
        'Campagnolo 12s requires N3W freehub and uses different shift mechanics. Incompatible with Shimano 11s.',
    },
  },
  'shimano-12s-road': {
    'shimano-12s-road': {
      status: 'compatible',
      explanation:
        'Same compatibility group: Shimano 12-speed Di2 (R7100/R8100/R9200) components are fully cross-compatible.',
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation:
        'Shimano 12s Di2 uses electronic actuation and 12-speed cassettes. Not compatible with 11-speed mechanical components.',
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'Shimano 12s Di2 and SRAM 11s mechanical systems are fully incompatible.',
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'SRAM AXS and Shimano Di2 are both electronic but use different protocols and drivetrains.',
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'Campagnolo 11s components are incompatible with Shimano 12s Di2.',
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 12s and Shimano 12s Di2 use different standards throughout.',
    },
  },
  'sram-11s-road': {
    'sram-11s-road': {
      status: 'compatible',
      explanation:
        'Same compatibility group: SRAM 11-speed road (Rival22/Force22/Red22) components are fully cross-compatible.',
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation:
        'SRAM uses a different cable pull ratio (3.1 mm) vs Shimano (2.8 mm). Shifters and derailleurs cannot mix.',
      categories: ['shifters', 'rear_derailleur', 'front_derailleur'],
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'SRAM 11s mechanical and Shimano 12s Di2 are incompatible in every aspect.',
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation:
        'SRAM AXS is a 12-speed electronic system. Not compatible with SRAM 11s mechanical components.',
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'SRAM and Campagnolo use different cable pull ratios and cassette interfaces.',
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'SRAM 11s and Campagnolo 12s are incompatible.',
    },
  },
  'sram-axs-12s': {
    'sram-axs-12s': {
      status: 'compatible',
      explanation:
        'Same compatibility group: SRAM AXS 12-speed (Rival/Force/Red AXS) components are fully cross-compatible within the AXS ecosystem.',
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'SRAM AXS is electronic 12-speed; incompatible with Shimano mechanical 11-speed.',
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'SRAM AXS and Shimano Di2 are both electronic but use entirely different systems.',
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'SRAM AXS 12s requires XDR freehub and is electronic — not compatible with SRAM 11s mechanical.',
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'SRAM AXS and Campagnolo are incompatible.',
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation: 'SRAM AXS and Campagnolo 12s are incompatible.',
    },
  },
  'campagnolo-11s': {
    'campagnolo-11s': {
      status: 'compatible',
      explanation:
        'Same compatibility group: Campagnolo 11-speed (Chorus/Record/Super Record) components are fully cross-compatible.',
    },
    'campagnolo-12s': {
      status: 'incompatible',
      explanation:
        'Campagnolo 11s and 12s are not cross-compatible. 12s requires N3W freehub and different chain pitch.',
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo uses a 2.5 mm cable pull ratio; Shimano uses 2.8 mm. Derailleurs are not cross-compatible.',
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 11s and Shimano 12s Di2 are completely incompatible.',
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo (2.5 mm pull) and SRAM (3.1 mm pull) are not compatible.',
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 11s and SRAM AXS 12s are incompatible.',
    },
  },
  'campagnolo-12s': {
    'campagnolo-12s': {
      status: 'compatible',
      explanation:
        'Same compatibility group: Campagnolo 12-speed (Chorus/Record/Super Record 12s) components are fully cross-compatible. Requires N3W freehub body.',
    },
    'campagnolo-11s': {
      status: 'incompatible',
      explanation: 'Campagnolo 12s requires N3W freehub and different shift mechanics — not compatible with 11s.',
    },
    'shimano-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 12s and Shimano 11s are incompatible.',
    },
    'shimano-12s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 12s and Shimano 12s use different standards throughout.',
    },
    'sram-11s-road': {
      status: 'incompatible',
      explanation: 'Campagnolo 12s and SRAM 11s are incompatible.',
    },
    'sram-axs-12s': {
      status: 'incompatible',
      explanation: 'Campagnolo 12s and SRAM AXS are incompatible.',
    },
  },
};

// Special overrides for specific cross-brand categories
// Some components (chains, cassettes) have broader compatibility
const CROSS_GROUP_OVERRIDES: {
  fromGroup: string;
  toGroup: string;
  category: ComponentCategory;
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
}[] = [
  // 11-speed chains are broadly compatible (KMC, etc.) — but we represent stock
  // Note: A Shimano 11s chain works fine on SRAM 11s cassettes
  {
    fromGroup: 'shimano-11s-road',
    toGroup: 'sram-11s-road',
    category: 'chain',
    status: 'compatible',
    explanation: 'Shimano and SRAM 11-speed chains share the same 5.62 mm width and are interchangeable.',
  },
  {
    fromGroup: 'sram-11s-road',
    toGroup: 'shimano-11s-road',
    category: 'chain',
    status: 'compatible',
    explanation: 'Shimano and SRAM 11-speed chains share the same 5.62 mm width and are interchangeable.',
  },
  // Shimano 11s cassette on SRAM 11s (same HG freehub)
  {
    fromGroup: 'shimano-11s-road',
    toGroup: 'sram-11s-road',
    category: 'cassette',
    status: 'compatible',
    explanation: 'Both use HG-compatible freehub body (Shimano 11s cassette fits SRAM 11s freehub).',
  },
  {
    fromGroup: 'sram-11s-road',
    toGroup: 'shimano-11s-road',
    category: 'cassette',
    status: 'compatible',
    explanation: 'Both use HG-compatible freehub body (SRAM 11s cassette fits Shimano 11s freehub).',
  },
  // Bottom brackets — BSA is universal among BSA frames
  // Campagnolo UT-BSA works on BSA frames (standard threaded)
  {
    fromGroup: 'campagnolo-11s',
    toGroup: 'shimano-11s-road',
    category: 'bottom_bracket',
    status: 'adapter',
    explanation: 'Campagnolo Ultra-Torque uses a different spindle interface (25 mm) than Shimano Hollowtech II (24 mm). Frame BB shell standard is independent, but crankset must match BB.',
    adapter_name: 'Compatible BSA shell, but crankset-specific BB required',
  },
];

// ─── Main compatibility check function ───────────────────────────────────────

export function checkCompatibility(
  targetGroupsetId: string
): {
  groupset: Groupset;
  byCategory: Record<string, CompatibilityResult[]>;
} | null {
  const targetGroupset = getGroupsetById(targetGroupsetId);
  if (!targetGroupset) return null;

  const byCategory: Record<string, CompatibilityResult[]> = {};

  for (const category of CATEGORY_ORDER) {
    byCategory[category] = [];
  }

  for (const component of components) {
    const componentGroupset = getGroupsetById(component.groupset_id);
    if (!componentGroupset) continue;

    // Skip showing the target groupset's own components (those are always compatible,
    // shown separately). Actually we DO want to show them as compatible.
    const result = evaluateCompatibility(component, componentGroupset, targetGroupset);
    byCategory[component.category].push(result);
  }

  // Sort each category: compatible first, then adapter, then incompatible
  const order: CompatibilityStatus[] = ['compatible', 'adapter', 'incompatible'];
  for (const category of CATEGORY_ORDER) {
    byCategory[category].sort(
      (a, b) => order.indexOf(a.status) - order.indexOf(b.status)
    );
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

  // Check cross-group overrides first
  const override = CROSS_GROUP_OVERRIDES.find(
    (o) =>
      o.fromGroup === fromGroup &&
      o.toGroup === toGroup &&
      o.category === component.category
  );
  if (override) {
    return {
      component,
      groupset: componentGroupset,
      status: override.status,
      explanation: override.explanation,
      adapter_name: override.adapter_name,
    };
  }

  // Look up group rule
  const groupRule = GROUP_RULES[fromGroup]?.[toGroup];
  if (!groupRule) {
    return {
      component,
      groupset: componentGroupset,
      status: 'incompatible',
      explanation: 'No compatibility data available for this combination.',
    };
  }

  return {
    component,
    groupset: componentGroupset,
    status: groupRule.status,
    explanation: groupRule.explanation,
    adapter_name: groupRule.adapter_name,
  };
}

export function getCompatibleGroupsets(targetGroupsetId: string): Groupset[] {
  const target = getGroupsetById(targetGroupsetId);
  if (!target) return [];
  return groupsets.filter(
    (g) =>
      GROUP_RULES[g.compatibility_group]?.[target.compatibility_group]?.status === 'compatible'
  );
}

export { groupsets };
