import React, { Component } from 'react';
import '../Styles/App.css';
import {Route,Router} from 'react-router-dom'
import history from '../Utils/history'
import NavBar from '../Components/Navigation/NavBar';
import Home from './Home';
import ChooseUser from './UserPicker/ChooseUser';

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div >
          <NavBar/>
        <div>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/ChooseUser" component = {ChooseUser}/>
        </div>

        </div>
      </Router>
    );
  }
}

export default App;
