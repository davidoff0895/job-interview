<script setup lang="ts">
defineProps<{
  layer: {
    itemId: string;
    label: string;
    color: string;
    checked: boolean;
    opacity: number;
    serviceData: { serviceType: string };
  };
}>();

const emit = defineEmits<{ toggle: [] }>();
</script>

<template>
  <div class="layer-item" :class="{ active: layer.checked }" @click="emit('toggle')">
    <span class="color-dot" :style="{ backgroundColor: layer.color }"></span>
    <span class="label">{{ layer.label }}</span>
    <span class="type-badge">{{ layer.serviceData.serviceType }}</span>
  </div>
</template>

<style scoped>
.layer-item {
  display: flex; align-items: center; gap: 8px;
  padding: 8px 10px; border-radius: 6px; cursor: pointer;
  transition: background 0.15s; margin-bottom: 2px; opacity: 0.5;
}
.layer-item:hover { background: rgba(255,255,255,0.05); }
.layer-item.active { opacity: 1; }
.color-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.label { flex: 1; font-size: 13px; }
.type-badge {
  font-size: 9px; text-transform: uppercase; padding: 2px 5px;
  border-radius: 3px; background: rgba(255,255,255,0.08); color: #888;
}
</style>

