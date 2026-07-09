import { useEffect, useState } from 'react';
import { layerConfig, type LayerDisplayConfig } from '@/config';
import { initializeService, setActiveLayer } from '@/store/layers';
import LayerPanel from '@/components/LayerPanel';
import MapView from '@/components/MapView';
import './App.css';

interface LayerState extends LayerDisplayConfig {
  checked: boolean;
  opacity: number;
}

function App() {
  const [layer, setLayer] = useState<LayerState>({
    ...layerConfig,
    checked: true,
    opacity: layerConfig.serviceData.opacity ?? 1,
  });

  useEffect(() => {
    initializeService(layer.itemId, layer.serviceData);
    setActiveLayer(layer.checked ? layer.itemId : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = (): void => {
    setLayer((prev) => {
      const checked = !prev.checked;
      setActiveLayer(checked ? prev.itemId : null);
      return { ...prev, checked };
    });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🗺️ Geo Layer Manager</h1>
      </header>
      <main className="main">
        <LayerPanel layer={layer} onToggle={handleToggle} />
        <MapView layer={layer} />
      </main>
    </div>
  );
}

export default App;

