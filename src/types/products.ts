export interface LaserHead {
  id: string
  name: string
  description: string
  maxPower: number
  suitableMaterials: string[]
  price: number
  type: 'procuter' | 'formcutter'
  features: string[]
}

export interface SensorSystem {
  id: string
  name: string
  type: 'monitoring' | 'measurement'
  compatibility: string[]
  features: string[]
  price: number
}

export interface Material {
  id: string
  name: string
  type: 'metal' | 'plastic' | 'composite'
  thickness: number[]
  requiredPower: number
}

export interface Configuration {
  laserHead: LaserHead | null
  sensorSystem: SensorSystem | null
  material: Material | null
  powerRequirement: number
  totalCost: number
}

export interface TechnicalSpecs {
  cuttingSpeed: number
  precision: number
  operatingCost: number
  maintenanceInterval: number
}
