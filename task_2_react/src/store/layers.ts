import { useSyncExternalStore } from 'react';
import { LayerServiceData } from '@/types';
import { WmsLayerService } from '@/services/WmsLayerService';

export const state: {
  service: WmsLayerService | null;
  activeLayerId: string | null;
} = {
  service: null,
  activeLayerId: null,
};

type Listener = () => void;
const listeners = new Set<Listener>();

const emitChange = (): void => {
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: Listener): (() => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

/**
 * Initialize the WMS service for the layer.
 */
export const initializeService = (
  itemId: string,
  serviceData: LayerServiceData,
): void => {
  state.service = new WmsLayerService(itemId, serviceData);
  emitChange();
};

/**
 * Set the active layer id (the layer that is currently visible on the map).
 */
export const setActiveLayer = (layerId: string | null): void => {
  state.activeLayerId = layerId;
  emitChange();
};

/**
 * React hook exposing the reactive layers state to components.
 */
export default function useLayersModule () {
  const service = useSyncExternalStore(subscribe, () => state.service);
  const activeLayerId = useSyncExternalStore(subscribe, () => state.activeLayerId);

  return {
    service,
    activeLayerId,
    initializeService,
    setActiveLayer,
  };
}

