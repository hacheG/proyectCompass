import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import 'react-html5-camera-photo/build/css/index.css';

import Mapa from './components/Mapa/Mapa'
import camera from './components/camera/camera'


class App extends Component {
render() {
  return (

    <div className='App'>
      <Router>
        <Mapa />
        <Route path='/camera' component={ camera }/>
      </Router>
    </div>

  );
}
}


export default App;
