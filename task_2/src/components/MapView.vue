<script setup lang="ts">
const props = defineProps<{
  layer: {
    itemId: string;
    label: string;
    color: string;
    checked: boolean;
    opacity: number;
  };
}>();
</script>

<template>
  <div class="map-view">
    <div class="map-area">
      <!-- Coordinate grid background -->
      <div class="grid-bg"></div>

      <!-- Layer overlay -->
      <div
        v-if="layer.checked"
        class="overlay"
        :style="{
          '--layer-color': layer.color,
          '--layer-opacity': layer.opacity,
        }"
      ></div>

      <!-- Coordinates -->
      <div class="coords">51.5074° N, 7.4650° E — Zoom 12</div>

      <!-- Empty state -->
      <div v-if="!layer.checked" class="empty">No active layers. Toggle layers in the panel.</div>
    </div>

    <!-- Legend -->
    <div v-if="layer.checked" class="legend">
      <div class="legend-item">
        <span class="legend-dot" :style="{ backgroundColor: layer.color }"></span>
        <span class="legend-label">{{ layer.label }}</span>
        <span class="legend-opacity">{{ Math.round(layer.opacity * 100) }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-view { flex: 1; display: flex; flex-direction: column; padding: 16px; gap: 12px; }

.map-area {
  flex: 1; position: relative; border-radius: 8px; overflow: hidden;
  background: #1b2838; border: 1px solid #2a2a4a;
}

/* Coordinate grid */
.grid-bg {
  position: absolute; inset: 0;
  background:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Layer overlay */
.overlay {
  position: absolute; inset: 0; pointer-events: none; transition: opacity 0.3s;
  background: radial-gradient(
    ellipse at 45% 50%,
    var(--layer-color) 0%, transparent 65%
  );
  opacity: var(--layer-opacity);
}

.coords {
  position: absolute; bottom: 8px; right: 12px;
  font-size: 11px; color: #556; background: rgba(0,0,0,0.4);
  padding: 3px 8px; border-radius: 4px;
}

.empty {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  color: #445; font-size: 14px;
}

/* Legend */
.legend {
  display: flex; gap: 16px; flex-wrap: wrap;
  padding: 8px 12px; background: #16213e; border-radius: 6px;
}
.legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; }
.legend-dot { width: 8px; height: 8px; border-radius: 50%; }
.legend-label { color: #aaa; }
.legend-opacity { color: #556; font-size: 10px; }
</style>
