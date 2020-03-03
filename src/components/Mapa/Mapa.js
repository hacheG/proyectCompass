import React, {Component} from 'react';
import './Mapa.css';
//import { render } from 'react-dom'
//import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Mapa extends Component{
    render() {
      return (
        <LeafletMap
          center={[50, 10]}
          zoom={6}
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
          <Marker position={[4.652881, -74.057582]}>
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