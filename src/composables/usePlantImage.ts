// Vite's import.meta.glob eagerly imports all species images as URL strings
const webpModules = import.meta.glob('../assets/species/compressed/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

// Build a map: species-id → resolved asset URL (webp preferred over jpg)
const imageMap: Record<string, string> = {}
for (const path in webpModules) {
  const id = path.replace('../assets/species/compressed/', '').replace('.webp', '')
  imageMap[id] = webpModules[path]
}

export function getSpeciesImageUrl(speciesId: string): string | null {
  return imageMap[speciesId] ?? null
}
