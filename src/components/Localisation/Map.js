import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
const Map = () => {
  return (
    <>
      <div className="Map-Container">
        <div className="Map-Title">
          <h3>Notre emplacement</h3>
        </div>
        <div className="Map">
          <MapContainer
            center={[36.791190, 3.048560]}
            zoom={20}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[36.791190, 3.048560]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Map;
