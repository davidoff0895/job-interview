import { describe, it, expect } from 'vitest';
import { WmsLayerService } from '@/services/WmsLayerService';
import { LayerType } from '@/types';

describe('WmsLayerService', () => {
  it('should build id from itemId and serviceName', () => {
    const service = new WmsLayerService('item-4g', {
      serviceName: 'net-geoserver',
      serviceType: LayerType.WMS,
    });

    expect(service.id).toBe('item-4g-net-geoserver');
  });

  it('should store serviceName', () => {
    const service = new WmsLayerService('item-4g', {
      serviceName: 'net-geoserver',
      serviceType: LayerType.WMS,
    });

    expect(service.serviceName).toBe('net-geoserver');
  });

  it('should use provided opacity', () => {
    const service = new WmsLayerService('item-4g', {
      serviceName: 'net-geoserver',
      serviceType: LayerType.WMS,
      opacity: 0.5,
    });

    expect(service.opacity).toBe(0.5);
  });

  it('should default opacity to 1 when not provided', () => {
    const service = new WmsLayerService('item-4g', {
      serviceName: 'net-geoserver',
      serviceType: LayerType.WMS,
    });

    expect(service.opacity).toBe(1);
  });
});

