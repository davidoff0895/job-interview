import LayerItem from './LayerItem';
import './LayerItem.css';
import './LayerPanel.css';

interface LayerPanelData {
  itemId: string;
  label: string;
  color: string;
  checked: boolean;
  opacity: number;
  serviceData: { serviceType: string };
}

interface LayerPanelProps {
  layer: LayerPanelData;
  onToggle: () => void;
}

export default function LayerPanel({ layer, onToggle }: LayerPanelProps) {
  return (
    <aside className="panel">
      <div className="panel-title">Layers</div>
      <div className="group">
        <div className="group-label">Coverage</div>
        <LayerItem layer={layer} onToggle={onToggle} />
      </div>
    </aside>
  );
}

