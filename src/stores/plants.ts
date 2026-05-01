import { useLocalStorage } from '@vueuse/core'
import { mean, orderBy, takeRight } from 'lodash'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { getSpeciesById } from '../data/plants'
import type { MoistureLevel, MoistureLog, Plant } from '../types'

const STORAGE_KEY = 'plant-care-plants'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2)
}

export const usePlantsStore = defineStore('plants', () => {
  const plants = useLocalStorage<Plant[]>(STORAGE_KEY, [])

  const sortedPlants = computed(() => orderBy(plants.value, [(p) => p.nickname.toLowerCase()]))

  function addPlant(data: Omit<Plant, 'id' | 'addedDate' | 'moistureLogs'>): Plant {
    const plant: Plant = {
      ...data,
      id: generateId(),
      addedDate: new Date().toISOString(),
      moistureLogs: [],
    }
    plants.value.push(plant)
    return plant
  }

  function removePlant(id: string): void {
    plants.value = plants.value.filter((p) => p.id !== id)
  }

  function logMoisture(plantId: string, level: MoistureLevel, note?: string): void {
    const plant = plants.value.find((p) => p.id === plantId) // lodash find not used here to preserve Vue reactivity
    if (!plant) return
    const entry: MoistureLog = {
      id: generateId(),
      date: new Date().toISOString(),
      level,
      note,
    }
    plant.moistureLogs.push(entry)
  }

  function logWatering(plantId: string, isoDate?: string): void {
    const plant = plants.value.find((p) => p.id === plantId)
    if (!plant) return
    const date = isoDate ?? new Date().toISOString()
    plant.lastWateredDate = date
    if (!plant.wateringDates) plant.wateringDates = []
    plant.wateringDates.push(date)
  }

  function getPlantById(id: string): Plant | undefined {
    return plants.value.find((p) => p.id === id)
  }

  function getLastMoisture(plantId: string): MoistureLog | undefined {
    const plant = plants.value.find((p) => p.id === plantId)
    if (!plant || plant.moistureLogs.length === 0) return undefined
    return plant.moistureLogs[plant.moistureLogs.length - 1]
  }

  /** Returns estimated next watering date as ISO string, or null if not enough data */
  function getNextWateringEstimate(plantId: string): string | null {
    const plant = plants.value.find((p) => p.id === plantId)
    if (!plant) return null

    const species = getSpeciesById(plant.speciesId)

    // Seasonal multiplier: shorter interval in summer, longer in winter.
    // Scale is based on northern-hemisphere seasons.
    const month = new Date().getMonth() // 0=Jan … 11=Dec
    const SEASONAL: Record<number, number> = {
      0: 1.3, // Jan  : cold, slow growth
      1: 1.2, // Feb
      2: 1.0, // Mar  : spring baseline
      3: 0.9, // Apr
      4: 0.8, // May
      5: 0.7, // Jun  : hot, needs more water
      6: 0.65, // Jul  : peak heat
      7: 0.7, // Aug
      8: 0.85, // Sep
      9: 1.0, // Oct
      10: 1.2, // Nov
      11: 1.3, // Dec
    }
    const seasonal = SEASONAL[month] ?? 1.0

    let avgIntervalMs: number

    const dates = plant.wateringDates
    if (dates && dates.length >= 2) {
      // Use actual history: average of intervals between consecutive waterings
      const sorted = [...dates].map((d) => new Date(d).getTime()).sort((a, b) => a - b)
      // Use only the most recent 10 entries to stay relevant
      const recent = takeRight(sorted, 10)
      const intervals = recent.slice(1).map((t, i) => t - recent[i])
      const historicAvgMs = mean(intervals)
      // Blend 70% history + 30% species baseline so seasonality isn't ignored
      const baselineMs =
        (((species?.wateringFrequencyDays.min ?? 7) + (species?.wateringFrequencyDays.max ?? 14)) /
          2) *
        86400000
      avgIntervalMs = (historicAvgMs * 0.7 + baselineMs * 0.3) * seasonal
    } else if (species) {
      // No history: use species midpoint with seasonal adjustment
      const midDays = (species.wateringFrequencyDays.min + species.wateringFrequencyDays.max) / 2
      avgIntervalMs = midDays * 86400000 * seasonal
    } else {
      return null
    }

    const lastMs = plant.lastWateredDate ? new Date(plant.lastWateredDate).getTime() : Date.now()
    const baseEstimateMs = lastMs + avgIntervalMs

    // ── Moisture adjustment ───────────────────────────────────────────────────
    // If a recent moisture reading exists, shift the estimate forward or back.
    // Only apply if the log is fresh (logged within the last half-interval).
    const lastMoisture =
      plant.moistureLogs.length > 0 ? plant.moistureLogs[plant.moistureLogs.length - 1] : undefined

    const MOISTURE_SHIFT: Record<MoistureLevel, number> = {
      dry: -0.35, // soil already dry → water sooner
      'slightly-dry': -0.15, // drying out → a bit sooner
      moist: 0.1, // still fine → small buffer
      wet: 0.28, // clearly wet → push further
      waterlogged: 0.45, // oversaturated → push much further
    }

    let adjustedEstimateMs = baseEstimateMs
    if (lastMoisture) {
      const logAge = Date.now() - new Date(lastMoisture.date).getTime()
      const halfInterval = avgIntervalMs / 2
      if (logAge <= halfInterval) {
        const shift = MOISTURE_SHIFT[lastMoisture.level] ?? 0
        adjustedEstimateMs = baseEstimateMs + shift * avgIntervalMs
      }
    }

    return new Date(adjustedEstimateMs).toISOString()
  }

  // ── Export / Import ───────────────────────────────────────────────────────

  function exportPlants(): void {
    const payload = JSON.stringify({ version: 1, plants: plants.value }, null, 2)
    const blob = new Blob([payload], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `plant-care-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  /** Returns the number of plants imported, or throws on invalid payload. */
  function importPlants(json: string): number {
    let parsed: unknown
    try {
      parsed = JSON.parse(json)
    } catch {
      throw new Error('invalid_json')
    }
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !('plants' in parsed) ||
      !Array.isArray((parsed as { plants: unknown }).plants)
    ) {
      throw new Error('invalid_format')
    }
    const incoming = (parsed as { plants: Plant[] }).plants
    plants.value = incoming
    return incoming.length
  }

  return {
    plants,
    sortedPlants,
    addPlant,
    removePlant,
    logMoisture,
    logWatering,
    getPlantById,
    getLastMoisture,
    getNextWateringEstimate,
    exportPlants,
    importPlants,
  }
})
