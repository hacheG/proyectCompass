import React from 'react';

import './App.css';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import download from 'downloadjs';

class App extends Component {

  return () {
    <Map/>

  }
  

}
/*
function App (props) {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    console.log(dataUri)
    
    download(dataUri, "dlDataUrlText.png", "image/png");



  }
 
  return (
    
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri);
      } }
    />
    
  );
}*/

export default App;
