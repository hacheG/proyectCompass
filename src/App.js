import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import camera from './components/camera/camera'
import Map from './components/Map/Map'
import Photos from "./components/Photos/Photos";
import Ranking from "./components/Ranking/Ranking";
import './App.css';
import 'react-html5-camera-photo/build/css/index.css';

class App extends Component {
    render() {
      return (
        <div className='App'>
            <Router>
                <nav className="navigator">
                    <ul>
                        <li><Link to="/">Map<img src="https://img.icons8.com/android/24/000000/map.png"/></Link></li>
                        <li><Link to="/photos">Photos <img src="https://img.icons8.com/dotty/80/000000/photo-editor.png"/></Link></li>
                        <li><Link to="/ranking">Ranking <img src="https://img.icons8.com/small/16/000000/ranking.png"/></Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={ Map } />
                    <Route exact path='/camera' component={ camera }/>
                    <Route exact path='/photos' component={ Photos }/>
                    <Route exact path='/ranking' component={ Ranking }/>
                </Switch>
            </Router>
        </div>
      );
    }
}

export default App;
