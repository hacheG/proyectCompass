import React, { Component, PureComponent } from "react";
import ReactMapGL, {GeolocateControl, Marker, Popup} from "react-map-gl";
import CameraIcon from "../Mapa/CameraIcon.png";
import {Link} from "react-router-dom";
import CustomMarker from './Marker.svg';
import './Map.css'

const CITIES = [
    {
        name: 'Quebrada La Vieja',
        latitude: 4.650521,
        longitude: -74.049844
    },
    {
        name: 'Iglesia Lourdes',
        latitude: 4.650521,
        longitude: -74.061924
    },
    {
        name:'Parque Nacional',
        latitude: 4.623951,
        longitude: -74.065122
    },
    {
        name:'Universidad Distrital',
        latitude: 4.628800,
        longitude: -74.065485
    },
    {
        name:'Monumento a Los Heroes',
        latitude: 4.666483,
        longitude: -74.059658
    },
];

class Markers extends PureComponent {
    render() {
        const {data} = this.props;
        return data.map(
            city => <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} ><img src={CustomMarker} /></Marker>
        )
    }
}

class Map extends Component {
    state = {
        viewport: {longitude: -74.057582, latitude: 4.652881, zoom: 12}
    }

    render() {
        const {viewport} = this.state;
        return (
            <ReactMapGL {...viewport}
                        width="100vw"
                        height="100vh"
                        mapStyle="mapbox://styles/jsgalvish/ck7lzvl740cqe1ipeh56ti8vi"
                        onViewportChange={viewport => this.setState({viewport})}
                        mapboxApiAccessToken={"pk.eyJ1IjoianNnYWx2aXNoIiwiYSI6ImNrN2x6OXdsbTAxaG8zbGxodzUxYTlwbXoifQ.skHwW-diM_PatJm_OZPv1Q"}
            >
                <GeolocateControl
                    positionOptions={{enableHighAccuracy: true}}
                    trackUserLocation={true}
                />
                <Link to='/camera'>
                    <img className='laCamara' src= {CameraIcon} alt='icono camara'  />
                </Link>
                <Markers data={CITIES} />


            </ReactMapGL>
        );
    }
}

export default Map;
