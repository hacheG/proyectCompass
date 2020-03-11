import React from 'react';
import Camera from 'react-html5-camera-photo';
import download from 'downloadjs';

class Camara extends React.Component {

    handleTakePhoto (dataUri) {
        console.log('Location');
        navigator.geolocation.getCurrentPosition(position => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude, longitude)
        });
        console.log('takePhoto');
        console.log(dataUri)
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

