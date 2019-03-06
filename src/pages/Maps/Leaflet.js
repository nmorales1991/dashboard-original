import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const Leaflet = () => (
  <Map center={[51.505, -0.09]} zoom={13}>
    <TileLayer
      attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        <span>
          A pretty CSS3 popup. <br /> Easily customizable.
        </span>
      </Popup>
    </Marker>
  </Map>
);

export default Leaflet;