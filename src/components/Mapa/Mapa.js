import React, {Component} from 'react';
import './Mapa.css';
//import { render } from 'react-dom'
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
//import { Map, Marker, Popup, TileLayer, ZoomControl, ScaleControl } from 'leaflet';
import L from 'leaflet'
import laImangen from '../../giphy.gif'

class Mapa extends Component{
    render() {

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
            Popup for any custom information.
            </Popup>
        </Marker>
        <Marker position={[6, -70.057582] } icon = {greenIcon}>
            <Popup>
            Popup for any custom information.
            </Popup>
        </Marker>
        </LeafletMap>
      );
    }
} 







/*
{
   render() 
    {

    
        return (
             <div>"S3"</div>
             

        )
    }
}
*/
export default Mapa;