import React from 'react';
import { Redirect } from 'react-router-dom'
import Camera from 'react-html5-camera-photo';
import download from 'downloadjs';
import axios from "axios";
import './camera.css';

class Camara extends React.Component {

    state = {
        redirect: false
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    };

    async handleTakePhoto (dataUri) {
        navigator.geolocation.getCurrentPosition(position=> {
            let coordinates= [];
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            let name = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;

            coordinates.push(position.coords.longitude.toString());
            coordinates.push(position.coords.latitude.toString());
            console.log(coordinates);

            axios.post('http://localhost:5000/api/add', {
                name: name,
                coordinates: coordinates,
                image: dataUri
            })
        });
        download(dataUri, "dlDataUrlText.png", "image/png");

        this.setRedirect();
    }

    render() {
        return(
            <div className="camera">
                <Camera
                    onTakePhoto = { (dataUri) => {
                        this.handleTakePhoto(dataUri);
                    } }
                />
                {this.renderRedirect()}
            </div>
        );
    }
}

export default Camara;

