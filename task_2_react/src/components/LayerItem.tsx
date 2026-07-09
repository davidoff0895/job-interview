interface LayerItemData {
  itemId: string;
  label: string;
  color: string;
  checked: boolean;
  opacity: number;
  serviceData: { serviceType: string };
}

interface LayerItemProps {
  layer: LayerItemData;
  onToggle: () => void;
}

export default function LayerItem({ layer, onToggle }: LayerItemProps) {
  return (
    <div
      className={`layer-item${layer.checked ? ' active' : ''}`}
      onClick={onToggle}
    >
      <span className="color-dot" style={{ backgroundColor: layer.color }}></span>
      <span className="label">{layer.label}</span>
      <span className="type-badge">{layer.serviceData.serviceType}</span>
    </div>
  );
}

