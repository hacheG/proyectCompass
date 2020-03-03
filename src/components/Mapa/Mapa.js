import React, {Component} from 'react';
import './Mapa.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import laImangen from '../../giphy.gif'
import axios  from 'axios';

class Mapa extends Component{
    render() {
         axios.get(`http://localhost:5000/api/location`)
            .then(res => {
                console.log(res.data)
                
          })

        var greenIcon = L.icon({
            iconUrl: laImangen,
        
            iconSize:     [20, 20], // size of the icon
            iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
            
        return (
            <LeafletMap
            center={[4.652881, -74.057582]}
            zoom={12}
            maxZoom={15}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />

        <Marker position={[4.652881, -74.057582] } icon = {greenIcon}>
            <Popup>
            aqui esta Holberton
            </Popup>
        </Marker>
        <Marker position={[6, -70.057582] } icon = {greenIcon}>
            <Popup>
           algo
            </Popup>
        </Marker>
  )}

        </LeafletMap>
      );
    }
} 

export default Mapa;