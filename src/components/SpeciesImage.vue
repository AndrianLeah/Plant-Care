<template>
  <div
    class="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center overflow-hidden flex-shrink-0"
  >
    <img v-if="imageUrl" :src="imageUrl" :alt="speciesId" class="w-full h-full object-cover" />
    <i v-else class="mdi mdi-leaf text-leaf-400 text-2xl" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getSpeciesImageUrl } from '../composables/usePlantImage'

const props = defineProps<{
  speciesId: string
}>()

const imageUrl = computed(() => getSpeciesImageUrl(props.speciesId))
</script>
