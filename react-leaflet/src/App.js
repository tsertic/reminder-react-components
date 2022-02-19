import "./App.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";

/* set marker on map and get its lat and lon */
function App() {
  return (
    <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

function LocationMarker() {
  const [marker, setMarkers] = useState(null);
  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng;
      console.log(newMarker);
      setMarkers(() => newMarker);
    },
  });

  return (
    <>
      {marker && (
        <Marker position={marker}>
          <Popup>Marker is at {marker.lat}</Popup>
        </Marker>
      )}
    </>
  );
}

export default App;
