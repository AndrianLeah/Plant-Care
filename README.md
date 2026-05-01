# Plant Care

<p align="center">
  <img src="public/app-icon.svg" width="96" height="96" alt="Plant Care icon" />
</p>

A desktop app for tracking and caring for your houseplants, built with Vue 3, Tauri, and Tailwind CSS.

**[Live demo on GitHub Pages](https://andrianleah.github.io/Plant-Care/)**

## Features

- **Plant collection** - add plants from a catalog of 21 common houseplant species, give them a nickname and location
- **Watering log** - log waterings and see a chart of your history; get an estimated next-watering date
- **Moisture log** - track soil moisture level over time with per-species guidance on what to look for
- **Species catalog** - browse all supported species with photos, care details, light and water requirements
- **Water quality guide** - configure your local tap water profile (hardness, pH, minerals) and get per-plant compatibility advice
- **Bilingual** - English and Italian interface
- **Dark-friendly** - glassmorphism UI that adapts to the OS theme

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | [Vue 3](https://vuejs.org/) + TypeScript |
| Build | [Vite](https://vitejs.dev/) |
| Desktop shell | [Tauri v2](https://tauri.app/) (Rust) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| State | [Pinia](https://pinia.vuejs.org/) |
| Routing | [Vue Router](https://router.vuejs.org/) |
| i18n | [Vue I18n](https://vue-i18n.intlify.dev/) |
| Charts | [Chart.js](https://www.chartjs.org/) + [vue-chartjs](https://vue-chartjs.org/) |

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Rust](https://www.rust-lang.org/tools/install) (for Tauri desktop builds)
- [Tauri system dependencies](https://tauri.app/start/prerequisites/) for your OS

## Getting Started

```bash
npm install
```

### Run in the browser

```bash
npm run dev
```

### Run as a desktop app

```bash
npm run tauri dev
```

### Build

```bash
# Web only
npm run build

# Desktop (produces a native installer)
npm run tauri build
```

### Other scripts

```bash
npm run format          # Prettier - formats src/**/*.{ts,vue,css}
npm run optimize-images # Compress species photos in assets/species/
```

## Project Structure

```
src/
  views/          # Page-level components (Home, Catalog, PlantDetail, ...)
  components/     # Reusable UI components
  composables/    # Vue composables (useWaterWarning, usePlantImage, ...)
  stores/         # Pinia stores (plants, waterProfile)
  data/           # Static species data
  i18n/           # Locale files (en, it)
  router/         # Vue Router config
  types/          # Shared TypeScript types
src-tauri/        # Tauri / Rust backend
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) with the following extensions:

- [Vue - Official (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)
- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## License

MIT - see [LICENSE](LICENSE).
