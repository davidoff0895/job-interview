# 🗺️ Geo Layer Manager — Interview Task (React version)

## Context

You are working on a mapping application. Currently, the map displays **one layer** — 4G coverage. The application works and tests pass.

## Running

```bash
npm install
npm run dev       # http://localhost:5173
npm test          # run all tests
```

---

## Task

### Rules
- ✅ You can use AI (Copilot, ChatGPT, Claude, etc.)
- ✅ You can search the web
- ❗ You must **understand and be able to explain** every line of code you write
- ❗ After completion, we will discuss your solutions

---

### Business Requirement

> We are launching 5G coverage. We need to add a **5G layer** to the map alongside the existing 4G layer so that users can toggle each layer independently.
>
> The designer sent the color for 5G: **#2196F3**
>
> The backend team confirmed the service parameters:
> - serviceName: `net-geoserver`
> - serviceType: `WMS`

**Expected Result:**
1. The application shows **both layers** (4G and 5G), each can be toggled on/off
2. `npm test` — all tests pass
3. `npm run build` — build succeeds without errors

---

## Project Architecture

### Data Flow

```
config.ts → App.tsx → store/layers.ts
                ↓
        LayerPanel.tsx → LayerItem.tsx  (left panel)
        MapView.tsx                     (right map area)
```

1. `config.ts` describes the layer: its display properties (label, color) and service parameters (serviceName, opacity)
2. `App.tsx` reads the config, creates component state, and initializes the store
3. The store holds the service object and the active layer id
4. Components receive data via props and render the UI

---

### `config.ts` — Layer Configuration

Contains a `layerConfig` object describing the layer:

```ts
{
  itemId: string        // unique identifier
  label: string         // display name in the UI
  color: string         // visualization color on the map
  serviceData: {
    serviceName: string // backend service name (used to build the URL)
    serviceType: LayerType  // protocol type (currently only WMS)
    opacity: number     // layer transparency 0–1
  }
}
```

---

### `services/WmsLayerService.ts` — Why the services Folder

A service is an object that stores **connection parameters** with the geoserver for a specific layer. It is intentionally separated from UI logic: in a real application, WMS requests to the geoserver are formed here, the URL is built, and tile parameters are passed.

```ts
class WmsLayerService {
  id: string          // unique key: "itemId-serviceName"
  serviceName: string // service name from config
  opacity: number     // opacity from config (default 1)
}
```

---

### `store/layers.ts` — Reactive State

The store is implemented as a plain module holding shared state, plus a `useLayersModule` React hook (built on `useSyncExternalStore`) that exposes this state reactively to components.

**State:**

| Field | Type | Description |
|-------|------|-------------|
| `state.service` | `WmsLayerService \| null` | Service object of the current layer |
| `state.activeLayerId` | `string \| null` | `itemId` of the visible layer, `null` — layer is hidden |

**Exports:**

| Export | Description |
|--------|-------------|
| `initializeService(itemId, serviceData)` | Creates `WmsLayerService` from config data and stores it in `state.service`. Called once when `App.tsx` mounts |
| `setActiveLayer(itemId \| null)` | Writes `itemId` to `state.activeLayerId` when the layer is toggled on, and `null` when toggled off |
| `useLayersModule()` | React hook — returns `{ service, activeLayerId, initializeService, setActiveLayer }`, re-rendering the consuming component whenever the state changes |

---

### Components

| Component | Receives Props | Description |
|-----------|-----------------|-------------|
| `LayerPanel.tsx` | `layer`, `onToggle` | Left panel with layer list |
| `LayerItem.tsx` | `layer`, `onToggle` | Single layer row with toggle button |
| `MapView.tsx` | `layer` | Map visualization — renders a colored overlay if `layer.checked === true` |

---

## Project Structure

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Main component (state, logic)
├── config.ts                   # Layer configuration
├── types/index.ts              # Types and enums
├── components/
│   ├── LayerPanel.tsx          # Layers panel
│   ├── LayerItem.tsx           # Layer item (toggle)
│   └── MapView.tsx             # Map visualization
├── services/
│   └── WmsLayerService.ts      # WMS service
└── store/layers.ts             # Reactive state

tests/unit/                     # Unit tests
```

