<script setup lang="ts">
import ProductSelector from './components/ProductSelector.vue'
import { useConfiguratorStore } from './stores/configurator'
import { laserHeads } from './data/products'
import type { LaserHead } from './types/products'

const store = useConfiguratorStore()

function selectLaserHead(product: LaserHead) {
  store.setLaserHead(product)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-12 text-center">Vue Laser Configurator</h1>

    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Laser Head Selection -->
      <ProductSelector
        :products="laserHeads"
        :selected-product="store.configuration.laserHead"
        title="Select Laser Head"
        @select="(p) => selectLaserHead(p as LaserHead)"
      />
    </div>
  </div>
</template>
