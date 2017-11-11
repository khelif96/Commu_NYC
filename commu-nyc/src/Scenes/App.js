import React, { Component } from 'react';
import '../Styles/App.css';
import {Route,Router} from 'react-router-dom'
import history from '../Utils/history'
import NavBar from '../Components/Navigation/NavBar';
import Home from './Home';
import Login from './Login';
import PostList from './PostList';
import PostPage from './PostPage';
import Feed from './Feed/Feed'

class App extends Component {
  render() {
    return (
      <Router history = {history}>
        <div >
          <NavBar/>
        <div>

        <div>
          <Feed />
        </div>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/ChooseUser" component = {Login}/>
          <Route exact path = "/PostList" component = {PostList}/>
          <Route exact path = "/PostPage" component = {PostPage}/>
        </div>

        </div>
      </Router>
    );
  }
}

export default App;
