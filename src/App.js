import React, {Component} from 'react';

import './App.css';

import 'react-html5-camera-photo/build/css/index.css';

import Mapa from './components/Mapa/Mapa'
import Camara from './components/camera/camera'

class App extends Component {
render() {
  return (
    <div className='App'>
      <Mapa />
      <Camara />

    </div>

  );
}
}


export default App;
