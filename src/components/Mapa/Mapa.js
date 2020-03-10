import React, {Component} from 'react';
import './Mapa.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import CustomMarker from '../../giphy.gif'
import axios  from 'axios';
import CameraIcon from './CameraIcon.png'
import { Link } from 'react-router-dom';

import LocateControl from '../ElGps'

class Mapa extends Component{

  state = {
      locations:{}
  };

  componentDidMount(){
      this.getLocations()
    }
    getLocations = async () => {
        let res = await axios.get('http://localhost:5000/api/location');
        this.setState({locations: res.data})
    };
    
    render() {
        let greenIcon = L.icon({
            iconUrl: CustomMarker,
            iconSize:     [20, 20], // size of the icon
            iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        
        // Setup LocateControl options
        const locateOptions = {
            position: 'topright',
            strings: {
                title: 'Show me where I am, yo!'
            },
            onActivate: () => {} // callback before engine starts retrieving locations
        }
        
        return (
            <div>
                { this.state.locations.locations === undefined ?(
                    <div><h1>Loading ... </h1></div>):(
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
                        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                        <Link to='/camera'>
                            <img className='laCamara' src= {CameraIcon} alt='icono camara'  />
                        </Link>
                        {
                            this.state.locations.locations.map(location => (
                                <Marker
                                key={location.properties.PARK_ID}
                                position={[
                                    location.geometry.coordinates[1],
                                    location.geometry.coordinates[0]
                                ]}
                                icon = {greenIcon}
                                options={locateOptions}
                                >
                                    <Popup> Something </Popup>
                                </Marker>
                            ))
                        }
                        <LocateControl options={locateOptions} startDirectly/>
                    </LeafletMap>
                    )
                }
            </div>
      );
    }
}

export default Mapa;
