import { LayerType } from '@/types';
import type { LayerServiceData } from '@/types';

export interface LayerDisplayConfig {
  itemId: string;
  label: string;
  color: string;
  serviceData: LayerServiceData;
}

export const layerConfig: LayerDisplayConfig = {
  itemId: 'item-4g',
  label: '4G LTE Coverage',
  color: '#4CAF50',
  serviceData: {
    serviceName: 'net-geoserver',
    serviceType: LayerType.WMS,
    opacity: 0.5,
  },
};
