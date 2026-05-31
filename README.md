# BikeCompat – Road Bike Component Compatibility Checker

A production-ready web app for road cyclists to check component compatibility across groupsets and estimate upgrade costs.

🚀 **Live at:** https://bike-compat-checker.vercel.app

## Features

- **Compatibility Checker** – Select any groupset and instantly see which components are compatible, need an adapter, or are incompatible
- **Budget Calculator** – Click to select components and get a real-time cost estimate
- **18 Groupsets** – Shimano (R7000–R9200), SRAM (Rival/Force/Red 22 + AXS), Campagnolo (Chorus/Record/Super Record 11s + 12s)
- **9 Component Categories** – Shifters, derailleurs, cassettes, chains, cranksets, BBs, brakes
- **Affiliate Links** – Buy links to bike-components.de on every component card
- Dark mode, mobile responsive, instant results

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Covered Groupsets

| Brand | 11-speed | 12-speed |
|-------|----------|----------|
| Shimano | 105 R7000, Ultegra R8000, Dura-Ace R9100 | 105 R7100 Di2, Ultegra R8100 Di2, Dura-Ace R9200 Di2 |
| SRAM | Rival 22, Force 22, Red 22 | Rival AXS, Force AXS, Red AXS |
| Campagnolo | Chorus, Record, Super Record (11s) | Chorus, Record, Super Record (12s / N3W) |

## Key Compatibility Rules

- Shimano 11s (R7000/R8000/R9100): fully cross-compatible
- Shimano 12s Di2 (R7100/R8100/R9200): fully cross-compatible, not backward-compatible
- SRAM 11s AXS: closed ecosystem, XDR freehub required
- Campagnolo 12s: requires N3W freehub standard
- 11s and 12s chains are NOT interchangeable

## Development

```bash
npm install
npm run dev
```

## Affiliate Disclosure

Component cards include links to bike-components.de. These are affiliate links.

---

Built with ❤️ for road cyclists
