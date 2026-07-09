import './MapView.css';

interface MapViewData {
  itemId: string;
  label: string;
  color: string;
  checked: boolean;
  opacity: number;
}

interface MapViewProps {
  layer: MapViewData;
}

export default function MapView({ layer }: MapViewProps) {
  return (
    <div className="map-view">
      <div className="map-area">
        {/* Coordinate grid background */}
        <div className="grid-bg"></div>

        {/* Layer overlay */}
        {layer.checked && (
          <div
            className="overlay"
            style={
              {
                '--layer-color': layer.color,
                '--layer-opacity': layer.opacity,
              } as React.CSSProperties
            }
          ></div>
        )}

        {/* Coordinates */}
        <div className="coords">51.5074° N, 7.4650° E — Zoom 12</div>

        {/* Empty state */}
        {!layer.checked && (
          <div className="empty">No active layers. Toggle layers in the panel.</div>
        )}
      </div>

      {/* Legend */}
      {layer.checked && (
        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: layer.color }}></span>
            <span className="legend-label">{layer.label}</span>
            <span className="legend-opacity">{Math.round(layer.opacity * 100)}%</span>
          </div>
        </div>
      )}
    </div>
  );
}

