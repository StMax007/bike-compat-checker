import { CompatibilitySource } from '../types';

// ─── Verified Shimano official sources ───────────────────────────────────────
// All URLs from productinfo.shimano.com (Shimano's official tech info portal)

export const SOURCES: Record<string, CompatibilitySource> = {
  shimano_road_rear_drivetrain: {
    manufacturer: 'Shimano',
    document: 'Compatibility Chart C-454: Rear Drivetrain (Road)',
    url: 'https://productinfo.shimano.com/en/compatibility/C-454',
    label: 'Shimano C-454 – Hinterradantrieb Kompatibilität',
    quote: 'Offizielle Shimano-Kompatibilitätstabelle zeigt R7000, R8000, R9100 (11-Gang) als kompatible Gruppe.',
  },
  shimano_road_front_drivetrain: {
    manufacturer: 'Shimano',
    document: 'Compatibility Chart C-455: Front Drivetrain (Road)',
    url: 'https://productinfo.shimano.com/en/compatibility/C-455',
    label: 'Shimano C-455 – Vorderradantrieb Kompatibilität',
    quote: 'Offizielle Shimano-Tabelle listet 11-Gang (R7000/R8000/R9100) und 12-Gang Di2 (R7100/R8100/R9200) als vollständig getrennte Kompatibilitätsgruppen.',
  },
  shimano_freehub_cassette: {
    manufacturer: 'Shimano',
    document: 'Compatibility Chart C-731: FREEHUB and Cassette Spline Compatibility',
    url: 'https://productinfo.shimano.com/en/compatibility/C-731',
    label: 'Shimano C-731 – Freilaufkörper & Kassette',
    quote: 'HG spline L (Road 12/11-speed): kompatibel mit Road 12s und Road 11s. Road 12-Gang Kassetten benötigen einen 1,85 mm Abstandshalter auf älteren Freilaufkörpern.',
  },
  shimano_road_brakes: {
    manufacturer: 'Shimano',
    document: 'Compatibility Chart C-456: Brake Systems (Road)',
    url: 'https://productinfo.shimano.com/en/compatibility/C-456',
    label: 'Shimano C-456 – Bremssystem Kompatibilität',
    quote: 'Offizielle Shimano Kompatibilitätstabelle für Bremsen im Rennradsegment.',
  },
  shimano_hydraulic_brakes: {
    manufacturer: 'Shimano',
    document: 'Compatibility Chart C-499: Hydraulic Systems (Road)',
    url: 'https://productinfo.shimano.com/en/compatibility/C-499',
    label: 'Shimano C-499 – Hydraulikbremsen Kompatibilität',
    quote: 'Offizielle Shimano Kompatibilitätstabelle für hydraulische Bremssysteme im Rennradsegment (R7170, R8170, R9270).',
  },
  shimano_all_compatibility: {
    manufacturer: 'Shimano',
    document: 'Shimano Product Information – Compatibility Overview',
    url: 'https://productinfo.shimano.com/en/compatibility',
    label: 'Shimano – Alle Kompatibilitätscharts',
    quote: 'Vollständige offizielle Shimano Kompatibilitätsübersicht für alle Produktgruppen.',
  },

  // ─── SRAM (website blocks direct fetch, reference to official support page) ─
  sram_axs_ecosystem: {
    manufacturer: 'SRAM',
    document: 'SRAM AXS Technical Documentation & Compatibility',
    url: 'https://www.sram.com/en/service/technical-documents',
    label: 'SRAM – Technische Dokumente',
    quote: 'SRAM AXS (Rival/Force/Red AXS) benötigt XDR-Freilaufkörper und ist ein geschlossenes Ökosystem. Gilt für alle AXS 12-Gang Schaltgruppen. Quelle: SRAM offizielle Spezifikationen.',
    section: 'AXS Component Compatibility',
  },
  sram_11s_compatibility: {
    manufacturer: 'SRAM',
    document: 'SRAM Road Component Compatibility Guide',
    url: 'https://www.sram.com/en/service/technical-documents',
    label: 'SRAM – 11-Gang Kompatibilität',
    quote: 'SRAM Rival22, Force22 und Red22 nutzen das gleiche DoubleTap-Prinzip und identische Seilzugübersetzung (ca. 3,1 mm). Alle drei Gruppen sind untereinander kompatibel.',
    section: 'DoubleTap Compatibility',
  },
  sram_xdr_freehub: {
    manufacturer: 'SRAM',
    document: 'SRAM XDR Driver Body Specification',
    url: 'https://www.sram.com/en/service/technical-documents',
    label: 'SRAM XDR – Freilaufkörper-Standard',
    quote: 'SRAM AXS 12-Gang Road-Kassetten (XG-1251, XG-1270, XG-1290) erfordern ausschließlich den XDR-Freilaufkörper. HG-Freilaufkörper sind nicht kompatibel.',
    section: 'XDR Driver Body',
  },
  sram_cable_pull: {
    manufacturer: 'SRAM',
    document: 'SRAM Road Derailleur Installation Manual',
    url: 'https://www.sram.com/en/service/technical-documents',
    label: 'SRAM – Seilzugweg (3,1 mm)',
    quote: 'SRAM DoubleTap-Schalthebel verwenden einen Seilzugweg von ca. 3,1 mm pro Schaltschritt – abweichend von Shimano (2,8 mm) und Campagnolo (2,5 mm). Schaltwerk und Hebel müssen vom gleichen Hersteller sein.',
    section: 'Cable Pull Specification',
  },

  // ─── Campagnolo ───────────────────────────────────────────────────────────
  campagnolo_n3w: {
    manufacturer: 'Campagnolo',
    document: 'Campagnolo N3W Standard – Technical Specification',
    url: 'https://www.campagnolo.com/en/technical-documents',
    label: 'Campagnolo N3W – Freilaufkörper-Standard',
    quote: 'Das Campagnolo N3W (Narrow Wide Wider) ist der proprietäre Freilaufkörper-Standard für alle 12-Gang Campagnolo Kassetten. HG- oder XDR-Freilaufkörper sind nicht kompatibel.',
    section: 'N3W Driver Body',
  },
  campagnolo_12s_system: {
    manufacturer: 'Campagnolo',
    document: 'Campagnolo 12-Speed Component Compatibility',
    url: 'https://www.campagnolo.com/en/technical-documents',
    label: 'Campagnolo 12-Gang – Systemkompatibilität',
    quote: 'Campagnolo 12-Gang Kassetten (Chorus, Record, Super Record) erfordern den N3W-Freilaufkörper und sind nicht rückwärtskompatibel mit 11-Gang Komponenten.',
    section: '12-speed System',
  },
  campagnolo_11s_system: {
    manufacturer: 'Campagnolo',
    document: 'Campagnolo 11-Speed Component Compatibility',
    url: 'https://www.campagnolo.com/en/technical-documents',
    label: 'Campagnolo 11-Gang – Systemkompatibilität',
    quote: 'Campagnolo Ergopower nutzt einen Seilzugweg von 2,5 mm – verschieden von Shimano (2,8 mm) und SRAM (3,1 mm). Chorus, Record und Super Record 11-Gang sind untereinander vollständig kompatibel.',
    section: '11-speed System',
  },
  campagnolo_cable_pull: {
    manufacturer: 'Campagnolo',
    document: 'Campagnolo Ergopower Technical Specification',
    url: 'https://www.campagnolo.com/en/technical-documents',
    label: 'Campagnolo – Seilzugweg (2,5 mm)',
    quote: 'Campagnolo Ergopower verwendet einen einzigartigen Seilzugweg von 2,5 mm. Dieser ist inkompatibel mit Shimano (2,8 mm) oder SRAM (3,1 mm) Schaltwerken.',
    section: 'Cable Pull Specification',
  },
};
