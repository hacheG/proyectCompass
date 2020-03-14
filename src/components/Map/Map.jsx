import React, { Component, PureComponent } from "react";
import ReactMapGL, {GeolocateControl, Marker, Popup} from "react-map-gl";
import CameraIcon from "../Mapa/CameraIcon.png";
import {Link} from "react-router-dom";
import CustomMarker from './Marker.svg';
import './Map.css'
import axios from "axios";

class Map extends Component {
    state = {
        viewport: {longitude: -74.057582, latitude: 4.652881, zoom: 12},
        locations:{},
        CurrentMarker: null
    };

    componentDidMount(){
        this.getLocations()
    }

    getLocations = async () => {
        let res = await axios.get('http://localhost:5000/api/location');
        this.setState({locations: res.data.locations})
        console.log(res.data.locations)
    };

    _onClickMarker = location => {
        this.setState({CurrentMarker: location});
    };

    _renderPopup() {
        const {CurrentMarker} = this.state;

        return (
            CurrentMarker && (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={Number(CurrentMarker.coordinates[0])}
                    latitude={Number(CurrentMarker.coordinates[1])}
                    closeOnClick={false}
                    onClose={() => this.setState({CurrentMarker: null})}
                >
                    <h1>{ CurrentMarker.name } </h1>
                </Popup>
            )
        );
    }

    render() {
        const {viewport} = this.state;
        return (
            <div>
                { !Array.isArray(this.state.locations) || !this.state.locations.length ?(
                    <div><h1>Loading ... </h1></div>):(
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

                    {
                        this.state.locations.map(location => (
                                <Marker key={location.name} longitude={Number(location.coordinates[0])} latitude={Number(location.coordinates[1])}>
                                    <button
                                        onClick={() => {
                                            this._onClickMarker(location);
                                        }}
                                    >
                                    <img src={CustomMarker}/>
                                    </button>
                                </Marker>
                            ))
                    }
                    {
                        this._renderPopup()
                    }
                </ReactMapGL>
                    )}
            </div>
        );
    }
}

export default Map;
