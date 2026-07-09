// ── Layer Types ──

export enum LayerType {
  WMS = 'wms',
}

// ── Layer Configuration ──

export interface LayerServiceData {
  /** Key to resolve the base URL from services config */
  serviceName: string;
  /** Type of the geo service */
  serviceType: LayerType;
  /** Opacity 0–1 */
  opacity?: number;
}

