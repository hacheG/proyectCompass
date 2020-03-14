import React from 'react';
import Camera from 'react-html5-camera-photo';
import download from 'downloadjs';
import axios from "axios";

class Camara extends React.Component {

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
    }

    render() {
        return(
            <div>
                <h1>camera</h1>
                <Camera
                    onTakePhoto = { (dataUri) => {
                        this.handleTakePhoto(dataUri);
                    } }
                />
            </div>

        );
    }
}

export default Camara;

