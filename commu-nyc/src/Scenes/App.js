import React, { Component } from 'react';
import '../Styles/App.css';
import {Route,Router} from 'react-router-dom'
import history from '../Utils/history'
import NavBar from '../Components/Navigation/NavBar';
import Home from './Home';
import RegisterVolunteer from './RegisterVolunteer';

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div >
          <NavBar/>
        <div>

          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/RegisterVolunteer" component = {RegisterVolunteer}/>
        </div>

        </div>
      </Router>
    );
  }
}

export default App;
