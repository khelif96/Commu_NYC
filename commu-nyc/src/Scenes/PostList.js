import React, { Component } from 'react';
import '../Styles/App.css';
import {PanelGroup ,Panel} from 'react-bootstrap';
import JobPanel from './Feed/JobPanel'
import { JobHeading,FeedContainer,Organization,DatePosted,Description } from '../Styles/feed.style';

class PostList extends Component {

  constructor(props){
      super(props);
  }

  render() {
    var pageStyle = {
        fontSize : 50,
    }
    var pageHeader = {
        color : 'orange',
        fontSize : 50
    }

    return (

        <div >
          <div style = {pageHeader}> Post List </div>
          <div style = {pageStyle}> 
            <a href = "/PostPage">Job 1</a>
          </div>
          <div style = {pageStyle}> 
            <a href = "/PostPage">Job 1</a>
          </div>
          <div style = {pageStyle}> 
            <a href = "/PostPage">Job 1</a>
          </div>
          <div style = {pageStyle}> 
            <a href = "/PostPage">Job 1</a>
          </div>
          <div style = {pageStyle}> 
            <a href = "/PostPage">Job 1</a>
          </div>
          <div style = {pageStyle}> 
            <a href = "/PostPage">Job 1</a>
          </div>
          <div style = {pageStyle}> 
            <a href = "/PostPage">Job 1</a>
          </div>

        </div>
    );
  }
}

export default PostList;