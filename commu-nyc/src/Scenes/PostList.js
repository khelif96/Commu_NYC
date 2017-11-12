import React, { Component } from 'react';
import '../Styles/App.css';
import {PanelGroup ,Panel} from 'react-bootstrap';

import data from '../jobs.json';

class PostList extends Component {

  constructor(props){
      super(props);
      this.jobs = [];
  }
  createJob(job){
    return  (<div title = {job.title} posterID = {job.posterId} createdDate = {job.createdDate} description = {job.description}/>);
}

  render() {
    var pageStyle = {
        fontSize : 50,
    }
    var pageHeader = {
        color : 'orange',
        fontSize : 50
    }
    for(var i = 0; i < data.length; i++) this.jobs.push(this.createJob(data[i]))
    return (

        <div >
          
          <div style = {pageHeader}> Post List </div>
          <div style = {pageStyle}>
            <a href = "/PostPage">{this.jobs[i]}</a>
          </div>

        </div>
    );
  }
}

export default PostList;