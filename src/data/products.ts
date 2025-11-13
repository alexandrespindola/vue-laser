import type { LaserHead, SensorSystem, Material } from '@/types/products'

// Mock data for Precitec laser systems
export const laserHeads: LaserHead[] = [
  {
    id: 'procutter-20',
    name: 'ProCutter 2.0',
    description: 'High-performance cutting system for industrial applications',
    maxPower: 30000,
    suitableMaterials: ['steel', 'aluminum', 'copper', 'titanium'],
    price: 125000,
    type: 'procuter',
    features: [
      'Up to 30 kW power',
      'High-precision cutting',
      'Integrated cooling system',
      'Automatic focus control',
    ],
  },
  {
    id: 'formcutter-6',
    name: 'FormCutter',
    description: 'Specialized system for complex 3D components',
    maxPower: 6000,
    suitableMaterials: ['steel', 'aluminum', 'stainless-steel'],
    price: 89000,
    type: 'formcutter',
    features: [
      'Up to 6 kW power',
      'Ideal for 3D applications',
      'Adjustable angular head',
      'Integrated vision system',
    ],
  },
]

export const sensorSystems: SensorSystem[] = [
  {
    id: 'sentry-pro',
    name: 'Sentry Pro',
    description: 'Advanced monitoring system for real-time process control and quality assurance',
    type: 'monitoring',
    compatibility: ['procutter-20', 'formcutter-6'],
    features: [
      'Real-time monitoring',
      'Fault detection',
      'Cut quality analysis',
      'Preventive alerts',
    ],
    price: 25000,
  },
  {
    id: 'lpf-scanner',
    name: 'LPF Scanner',
    description: 'High-precision measurement system for profile analysis and dimensional control',
    type: 'measurement',
    compatibility: ['procutter-20', 'formcutter-6'],
    features: [
      'Profile measurement',
      'Dimensional control',
      'Post-cut inspection',
      'Detailed reports',
    ],
    price: 32000,
  },
]

export const materials: Material[] = [
  {
    id: 'steel-carbon',
    name: 'Carbon Steel',
    description: 'Versatile steel alloy ideal for general industrial cutting applications',
    type: 'metal',
    thickness: [1, 2, 5, 10, 20],
    requiredPower: 2000,
  },
  {
    id: 'aluminum-6061',
    name: 'Aluminum 6061',
    description: 'Lightweight aluminum alloy with excellent corrosion resistance',
    type: 'metal',
    thickness: [1, 3, 6, 12],
    requiredPower: 1500,
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    description: 'High-strength corrosion-resistant steel for demanding applications',
    type: 'metal',
    thickness: [1, 2, 4, 8],
    requiredPower: 2500,
  },
]
