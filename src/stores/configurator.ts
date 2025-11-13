import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Configuration, LaserHead, SensorSystem, Material } from '@/types/products'

export const useConfiguratorStore = defineStore('configurator', () => {
  // State
  const configuration = ref<Configuration>({
    laserHead: null,
    sensorSystem: null,
    material: null,
    powerRequirement: 0,
    totalCost: 0,
  })

  // Actions
  function setLaserHead(laserHead: LaserHead) {
    configuration.value.laserHead = laserHead
    updatePowerRequirement()
    updateTotalCost()
  }

  function setSensorSystem(sensorSystem: SensorSystem) {
    configuration.value.sensorSystem = sensorSystem
    updateTotalCost()
  }

  function setMaterial(material: Material) {
    configuration.value.material = material
    updatePowerRequirement()
  }

  function updatePowerRequirement() {
    if (configuration.value.material) {
      configuration.value.powerRequirement = configuration.value.material.requiredPower
    } else {
      configuration.value.powerRequirement = 0
    }
  }

  function updateTotalCost() {
    let total = 0

    if (configuration.value.laserHead) {
      total += configuration.value.laserHead.price
    }

    if (configuration.value.sensorSystem) {
      total += configuration.value.sensorSystem.price
    }

    configuration.value.totalCost = total
  }

  function resetConfiguration() {
    configuration.value = {
      laserHead: null,
      sensorSystem: null,
      material: null,
      powerRequirement: 0,
      totalCost: 0,
    }
  }

  // Getters (computer properties)
  const isConfigurationComplete = computed(() => {
    return (
      configuration.value.laserHead !== null &&
      configuration.value.sensorSystem !== null &&
      configuration.value.material !== null
    )
  })

  const configurationSummary = computed(() => {
    if (!isConfigurationComplete.value) {
      return null
    }

    return {
      system: `${configuration.value.laserHead?.name} + ${configuration.value.sensorSystem?.name}`,
      material: configuration.value.material?.name,
      power: configuration.value.powerRequirement,
      cost: configuration.value.totalCost,
    }
  })

  return {
    // State
    configuration,
    // Actions,
    setLaserHead,
    setSensorSystem,
    setMaterial,
    resetConfiguration,
    // Getters
    isConfigurationComplete,
    configurationSummary,
  }
})
