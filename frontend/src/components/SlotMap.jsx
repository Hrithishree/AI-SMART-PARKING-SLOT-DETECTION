import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function SlotMap() {
  const position = [10.7905, 78.7047]; // Saranathan College coordinates

  return (
    <div style={{ height: 300, margin: "20px 0" }}>
      <MapContainer center={position} zoom={17} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OSM</a>'
        />
        <Marker position={position}>
          <Popup>Saranathan College of Engineering</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
