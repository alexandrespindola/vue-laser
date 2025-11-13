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
- **State Management**: Pinia for centralized state management
- **Testing**: Playwright for end-to-end testing
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
- **Pinia Store**: Centralized state management with stores
- **Reactive State**: `ref()`, `reactive()`, `computed()` in stores
- **Conditional Rendering**: `v-if`, `v-show` for different configurations
- **List Rendering**: `v-for` for product options
- **Event Handling**: User interactions and state updates
- **TypeScript Integration**: Strong typing for props and data

## Project Structure

```text
src/
├── components/
│   ├── ProductSelector.vue      # Reusable product selection component
│   ├── LaserHeadCard.vue        # Individual laser head display
│   ├── SensorCard.vue           # Sensor system display
│   ├── ConfigurationSummary.vue # Real-time summary component
│   └── TechnicalSpecs.vue       # Technical specifications display
├── stores/
│   └── configurator.ts          # Pinia store for configuration state
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
3. **Create Pinia store** for configuration state management
4. **Build ProductSelector component** with props and events
5. **Implement individual product cards** (LaserHeadCard, SensorCard)

### Sunday - Integration & Interactivity

1. **Create ConfigurationSummary component** with computed properties
2. **Implement App.vue** as the main orchestrator with Pinia integration
3. **Add conditional rendering** for different configurations
4. **Style with SCSS** for professional appearance

### Monday Morning - Polish & Documentation

1. **Add responsive design** considerations
2. **Implement form validation** and compatibility checks
3. **Write comprehensive Playwright tests** for E2E coverage
4. **Write README** with technical explanations
5. **Prepare for demo** in interview

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
- **Vue Fundamentals**: "Focused on core concepts with modern state management using Pinia"
- **Component Design**: "Practiced prop validation and event emission patterns"
- **State Management**: "Implemented centralized state with Pinia stores for better scalability"
- **TypeScript Integration**: "Used strong typing for better development experience"
- **Testing Strategy**: "Created comprehensive E2E tests with Playwright for reliability"
- **Responsive Approach**: "Considered different screen sizes for industrial tablets"

## Success Metrics

- ✅ Working product configurator by Monday
- ✅ Clean, readable Vue.js code with Pinia state management
- ✅ Demonstrates understanding of core Vue concepts
- ✅ Shows genuine interest in Precitec's business
- ✅ Comprehensive Playwright E2E test coverage
- ✅ Ready to explain technical decisions in interview

## Next Steps After Interview

- Add unit tests with Vitest (already configured)
- Implement local storage for configurations
- Add animation/transitions for better UX
- Create PDF export for specifications
- Expand Playwright test suite for edge cases

---

**Goal**: Have a concrete, portfolio-ready project (VueLaser) that demonstrates both Vue.js skills and genuine interest in Precitec's business domain.
