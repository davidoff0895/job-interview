<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { layerConfig, type LayerDisplayConfig } from '@/config';
import useLayersModule from '@/store/layers';
import LayerPanel from '@/components/LayerPanel.vue';
import MapView from '@/components/MapView.vue';

const layersModule = useLayersModule();

interface LayerState extends LayerDisplayConfig {
  checked: boolean;
  opacity: number;
}

const layer = reactive<LayerState>({
  ...layerConfig,
  checked: true,
  opacity: layerConfig.serviceData.opacity ?? 1,
});

onMounted(() => {
  layersModule.initializeService(layer.itemId, layer.serviceData);
  layersModule.setActiveLayer(layer.checked ? layer.itemId : null);
});

function onToggle () {
  layer.checked = !layer.checked;
  layersModule.setActiveLayer(layer.checked ? layer.itemId : null);
}
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>🗺️ Geo Layer Manager</h1>
    </header>
    <main class="main">
      <LayerPanel :layer="layer" @toggle="onToggle" />
      <MapView :layer="layer" />
    </main>
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f0f1a; color: #e0e0e0; }

.app { display: flex; flex-direction: column; height: 100vh; }

.header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 20px; background: #1a1a2e; border-bottom: 1px solid #2a2a4a;
}
.header h1 { font-size: 18px; font-weight: 600; }

.main { display: flex; flex: 1; overflow: hidden; }
</style>
