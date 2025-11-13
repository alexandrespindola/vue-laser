# VueLaser - Laser System Configurator

## Project Overview

A Vue.js product configurator for Precitec's laser cutting systems, designed to showcase fundamental Vue concepts while demonstrating domain knowledge for the upcoming interview.

## Business Context

Based on Precitec's real product portfolio:

- **ProCutter 2.0**: High-performance laser cutting heads (up to 30 kW)
- **FormCutter**: For complex 3D components (up to 6 kW)
- **Sensor Systems**: Sentry (process monitoring), LPF Scanner (profile measurement)
- **Target Users**: Industrial customers needing customized laser solutions

## Technical Requirements

- **Framework**: Pure Vue.js 3 with Composition API
- **Language**: TypeScript
- **Styling**: SCSS (already configured in your project)
- **State Management**: Local component state (no Pinia needed for this scope)
- **Build Tool**: Vite (already configured)

## Core Features to Implement

### 1. Product Selection Interface

- Laser head selection (ProCutter vs FormCutter)
- Sensor system configuration
- Power requirements specification
- Material type selection

### 2. Dynamic Configuration Summary

- Real-time specification updates
- Technical specifications display
- Performance indicators
- Compatibility validation

### 3. Vue.js Concepts to Practice

- **Component Composition**: Breaking UI into reusable components
- **Props & Events**: Parent-child component communication
- **Reactive State**: `ref()`, `reactive()`, `computed()`
- **Conditional Rendering**: `v-if`, `v-show` for different configurations
- **List Rendering**: `v-for` for product options
- **Event Handling**: User interactions and state updates
- **TypeScript Integration**: Strong typing for props and data

## Project Structure

```
src/
├── components/
│   ├── ProductSelector.vue      # Reusable product selection component
│   ├── LaserHeadCard.vue        # Individual laser head display
│   ├── SensorCard.vue           # Sensor system display
│   ├── ConfigurationSummary.vue # Real-time summary component
│   └── TechnicalSpecs.vue       # Technical specifications display
├── types/
│   └── products.ts              # TypeScript interfaces
├── data/
│   └── products.ts              # Mock product data
└── App.vue                      # Main application component
```

## Implementation Plan (Weekend Timeline)

### Saturday - Core Components

1. **Setup TypeScript interfaces** for products
2. **Create mock data** for Precitec products
3. **Build ProductSelector component** with props and events
4. **Implement individual product cards** (LaserHeadCard, SensorCard)

### Sunday - Integration & Interactivity

1. **Create ConfigurationSummary component** with computed properties
2. **Implement App.vue** as the main orchestrator
3. **Add conditional rendering** for different configurations
4. **Style with SCSS** for professional appearance

### Monday Morning - Polish & Documentation

1. **Add responsive design** considerations
2. **Implement form validation** and compatibility checks
3. **Write README** with technical explanations
4. **Prepare for demo** in interview

## Data Model Preview

```typescript
interface LaserHead {
  id: string
  name: string
  description: string
  maxPower: number
  suitableMaterials: string[]
  price: number
}

interface SensorSystem {
  id: string
  name: string
  type: 'monitoring' | 'measurement'
  compatibility: string[]
  features: string[]
}

interface Configuration {
  laserHead: LaserHead | null
  sensorSystem: SensorSystem | null
  material: string
  powerRequirement: number
}
```

## Interview Talking Points

- **Domain Research**: "I researched Precitec's actual product line to create realistic data"
- **Vue Fundamentals**: "Focused on core concepts without over-engineering"
- **Component Design**: "Practiced prop validation and event emission patterns"
- **TypeScript Integration**: "Used strong typing for better development experience"
- **Responsive Approach**: "Considered different screen sizes for industrial tablets"

## Success Metrics

- ✅ Working product configurator by Monday
- ✅ Clean, readable Vue.js code
- ✅ Demonstrates understanding of core Vue concepts
- ✅ Shows genuine interest in Precitec's business
- ✅ Ready to explain technical decisions in interview

## Next Steps After Interview

- Add unit tests with Vitest (already configured)
- Implement local storage for configurations
- Add animation/transitions for better UX
- Create PDF export for specifications

---

**Goal**: Have a concrete, portfolio-ready project (VueLaser) that demonstrates both Vue.js skills and genuine interest in Precitec's business domain.
