import { reactive, computed } from 'vue';
import { LayerServiceData } from '@/types';
import { WmsLayerService } from '@/services/WmsLayerService';

export const state = reactive({
  service: null as WmsLayerService | null,
  activeLayerId: null as string | null,
});

export default function useLayersModule () {

  /**
   * Initialize the WMS service for the layer.
   */
  const initializeService = (
    itemId: string,
    serviceData: LayerServiceData,
  ): void => {
    state.service = new WmsLayerService(itemId, serviceData);
  };

  /**
   * Set the active layer id (the layer that is currently visible on the map).
   */
  const setActiveLayer = (layerId: string | null): void => {
    state.activeLayerId = layerId;
  };

  return {
    getService: computed(() => state.service),
    getActiveLayerId: computed(() => state.activeLayerId),
    initializeService,
    setActiveLayer,
  };
}
