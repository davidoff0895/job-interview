import { describe, it, expect, beforeEach } from 'vitest';
import useLayersModule, { state } from '@/store/layers';
import { LayerType, LayerServiceData } from '@/types';

const makeServiceData = (overrides: Partial<LayerServiceData> = {}): LayerServiceData => ({
  serviceName: 'geoserver-main',
  serviceType: LayerType.WMS,
  opacity: 0.8,
  ...overrides,
});

describe('layers store', () => {
  let layers: ReturnType<typeof useLayersModule>;

  beforeEach(() => {
    state.service = null;
    state.activeLayerId = null;
    layers = useLayersModule();
  });

  it('should have no service before initialization', () => {
    expect(layers.getService.value).toBeNull();
  });

  it('should initialize a WMS service', () => {
    layers.initializeService('item-4g', makeServiceData());

    const service = layers.getService.value;
    expect(service).not.toBeNull();
    expect(service!.id).toBe('item-4g-geoserver-main');
    expect(service!.serviceName).toBe('geoserver-main');
    expect(service!.opacity).toBe(0.8);
  });

  it('should replace service when initialized again', () => {
    layers.initializeService('item-4g', makeServiceData({ serviceName: 'server-a' }));
    layers.initializeService('item-5g', makeServiceData({ serviceName: 'server-b' }));

    expect(layers.getService.value!.id).toBe('item-5g-server-b');
  });

  it('should set the active layer', () => {
    layers.setActiveLayer('item-4g');
    expect(layers.getActiveLayerId.value).toBe('item-4g');
  });

  it('should clear the active layer', () => {
    layers.setActiveLayer('item-4g');
    layers.setActiveLayer(null);
    expect(layers.getActiveLayerId.value).toBeNull();
  });
});
