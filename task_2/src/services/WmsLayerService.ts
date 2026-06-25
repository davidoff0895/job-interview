import { LayerServiceData } from '@/types';

export class WmsLayerService {
  readonly id: string;
  readonly serviceName: string;
  readonly opacity: number;

  constructor (itemId: string, serviceData: LayerServiceData) {
    this.id = `${itemId}-${serviceData.serviceName}`;
    this.serviceName = serviceData.serviceName;
    this.opacity = serviceData.opacity ?? 1;
  }
}
