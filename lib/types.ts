export type GroupsetType = 'mechanical' | 'electronic' | 'hybrid';
export type CompatibilityStatus = 'compatible' | 'adapter' | 'incompatible';
export type ComponentCategory =
  | 'chain'
  | 'cassette'
  | 'rear_derailleur'
  | 'front_derailleur'
  | 'crankset'
  | 'shifters'
  | 'brake_caliper'
  | 'brake_lever'
  | 'bottom_bracket';

export type FreehubStandard = 'hg' | 'xdr' | 'n3w' | 'hg-ms';
export type BBStandard = 'bsa' | 'pf30' | 'bb86' | 'bb92' | 't47';

export interface Groupset {
  id: string;
  brand: 'shimano' | 'sram' | 'campagnolo';
  name: string;
  speeds: number;
  generation: string;
  type: GroupsetType;
  year_from: number;
  compatibility_group: string; // e.g. "shimano-11s-road", "sram-axs-12s"
  freehub_standard: FreehubStandard;
  bb_standard_default: BBStandard;
  chainline_mm: number;
  cable_pull_mm?: number;
}

export interface Component {
  id: string;
  groupset_id: string;
  category: ComponentCategory;
  name: string;
  model_number: string;
  price_eur: number;
  affiliate_url: string;
  description?: string;
}

export interface CompatibilityRule {
  id: string;
  component_a_id: string;
  component_b_id: string;
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
}

export interface CompatibilityResult {
  component: Component;
  groupset: Groupset;
  status: CompatibilityStatus;
  explanation: string;
  adapter_name?: string;
  sources?: CompatibilitySource[];
}

export interface CompatibilitySource {
  manufacturer: string;
  document: string;
  url?: string;
  page?: string;
  section?: string;
  quote?: string;
  /** Short label shown in the badge, e.g. "Shimano DM-R7000, S. 12" */
  label: string;
}

export interface CompatibilityCheckResult {
  checked_groupset: Groupset;
  results_by_category: Record<ComponentCategory, CompatibilityResult[]>;
}

export const CATEGORY_LABELS: Record<ComponentCategory, string> = {
  chain: 'Kette',
  cassette: 'Kassette',
  rear_derailleur: 'Hinteres Schaltwerk',
  front_derailleur: 'Vorderes Schaltwerk',
  crankset: 'Kurbelgarnitur',
  shifters: 'Schalthebel',
  brake_caliper: 'Bremssattel',
  brake_lever: 'Bremshebel',
  bottom_bracket: 'Tretlager',
};

export const CATEGORY_ORDER: ComponentCategory[] = [
  'shifters',
  'rear_derailleur',
  'front_derailleur',
  'cassette',
  'chain',
  'crankset',
  'bottom_bracket',
  'brake_lever',
  'brake_caliper',
];
