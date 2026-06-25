<script setup lang="ts">
import LayerItem from './LayerItem.vue';

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
  <aside class="panel">
    <div class="panel-title">Layers</div>
    <div class="group">
      <div class="group-label">Coverage</div>
      <LayerItem
        :layer="layer"
        @toggle="emit('toggle')"
      />
    </div>
  </aside>
</template>

<style scoped>
.panel {
  width: 260px; min-width: 260px;
  background: #16213e; border-right: 1px solid #2a2a4a;
  padding: 16px; overflow-y: auto;
}
.panel-title { font-size: 13px; font-weight: 600; text-transform: uppercase; color: #666; margin-bottom: 16px; letter-spacing: 1px; }
.group { margin-bottom: 20px; }
.group-label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #5a6a8a; margin-bottom: 8px; letter-spacing: 0.5px; }
</style>
