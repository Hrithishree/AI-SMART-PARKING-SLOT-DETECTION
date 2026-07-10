// src/components/MapView.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// custom marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function MapView() {
  // Coordinates of Saranathan College of Engineering 4-wheeler parking
  const position = [10.7924, 78.6821]; // adjust if you have more precise GPS

  return (
    <div style={{ width: "500px", height: "300px", margin: "0 auto", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
      <MapContainer
        center={position}
        zoom={19} // close-up zoom
        style={{ height: "100%", width: "100%" }}
      >
        {/* Satellite view */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="&copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, USDA, USGS, AeroGRID"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>🚗 4-Wheeler Parking - Saranathan College of Engineering</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
