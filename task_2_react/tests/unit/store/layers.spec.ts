import { describe, it, expect, beforeEach } from 'vitest';
import { state, initializeService, setActiveLayer } from '@/store/layers';
import { LayerType, LayerServiceData } from '@/types';

const makeServiceData = (overrides: Partial<LayerServiceData> = {}): LayerServiceData => ({
  serviceName: 'geoserver-main',
  serviceType: LayerType.WMS,
  opacity: 0.8,
  ...overrides,
});

describe('layers store', () => {
  beforeEach(() => {
    state.service = null;
    state.activeLayerId = null;
  });

  it('should have no service before initialization', () => {
    expect(state.service).toBeNull();
  });

  it('should initialize a WMS service', () => {
    initializeService('item-4g', makeServiceData());

    const service = state.service;
    expect(service).not.toBeNull();
    expect(service!.id).toBe('item-4g-geoserver-main');
    expect(service!.serviceName).toBe('geoserver-main');
    expect(service!.opacity).toBe(0.8);
  });

  it('should replace service when initialized again', () => {
    initializeService('item-4g', makeServiceData({ serviceName: 'server-a' }));
    initializeService('item-5g', makeServiceData({ serviceName: 'server-b' }));

    expect(state.service!.id).toBe('item-5g-server-b');
  });

  it('should set the active layer', () => {
    setActiveLayer('item-4g');
    expect(state.activeLayerId).toBe('item-4g');
  });

  it('should clear the active layer', () => {
    setActiveLayer('item-4g');
    setActiveLayer(null);
    expect(state.activeLayerId).toBeNull();
  });
});

