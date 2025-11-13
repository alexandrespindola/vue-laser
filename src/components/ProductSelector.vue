<script setup lang="ts">
import type { LaserHead, SensorSystem, Material } from '@/types/products';

type Product = LaserHead | SensorSystem | Material

interface Props {
  products: Product[]
  selectedProduct: Product | null
  title: string
}

interface Emits {
  select: [product: Product]
}

const emit = defineEmits<Emits>()

defineProps<Props>()

function selectProduct(product: Product) {
  emit('select', product)
}

function isLaserHead(product: Product): product is LaserHead {
  return 'maxPower' in product
}

function isSensorSystem(product: Product): product is SensorSystem {
  return 'type' in product && 'compatibility' in product
}

function isMaterial(product: Product): product is Material {
  return 'requiredPower' in product
}
</script>

<template>
  <div class="mb-8">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">{{ title }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id"
        class="border-2 border-gray-200 rounded-lg p-6 cursor-pointer transition-all duration-300 bg-white hover:border-blue-500 hover:shadow-lg"
        :class="{
          'border-blue-500 bg-blue-100': selectedProduct?.id === product.id
        }" @click="selectProduct(product)">
        <h3 class="text-xl font-bold text-gray-900 mb-3">{{ product.name }}</h3>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>

        <div v-if="isLaserHead(product)" class="space-y-3">
          <div class="text-lg font-semibold text-gray-800">{{ product.maxPower.toLocaleString() }}W</div>
          <div class="text-xl font-bold text-green-600">€{{ product.price.toLocaleString() }}</div>
        </div>

        <div v-else-if="isSensorSystem(product)" class="space-y-3">
          <div class="text-lg font-semibold text-gray-800">{{ product.type }}</div>
          <div class="text-xl font-bold text-green-600">€{{ product.price.toLocaleString() }}</div>
        </div>

        <div v-else-if="isMaterial(product)" class="space-y-3">
          <div class="text-lg font-semibold text-gray-800">{{ product.type }}</div>
          <div class="text-lg font-semibold text-gray-800">{{ product.requiredPower }}W required</div>
        </div>
      </div>
    </div>
  </div>
</template>
