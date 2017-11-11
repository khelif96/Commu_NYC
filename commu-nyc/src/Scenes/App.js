import React, { Component } from 'react';
import '../Styles/App.css';
import {Route,Router} from 'react-router-dom'
import history from '../Utils/history'
import NavBar from '../Components/Navigation/NavBar';
import Home from './Home';
import RegisterVolunteer from './RegisterVolunteer';
import Login from './Login';
import PostPage from './PostPage';

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div >
          <NavBar/>
        <div>

          <Route exact path = "/" component = {Home}/>
          <Route  path = "/Login" component = {Login}/>
          <Route  path = "/RegisterVolunteer" component = {RegisterVolunteer}/>
          <Route  path = "/PostPage" component = {PostPage}/>

        </div>

        </div>
      </Router>
    );
  }
}

export default App;
