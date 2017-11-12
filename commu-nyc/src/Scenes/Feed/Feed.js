import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../Styles/App.css';
import {PanelGroup ,Panel} from 'react-bootstrap';
import { FeedContainer } from '../../Styles/feed.style';
import JobPanel from './JobPanel';
import data from '../../jobs.json';

class Feed extends Component {
  constructor(props){
      super(props);
      this.jobs = [];
  }

  createPanel(job){
      return  (<JobPanel title = {job.title} posterID = {job.posterId} createdDate = {job.createdDate} description = {job.description}/>);
  }
  render() {
    for(var i = 0; i < data.length; i++) this.jobs.push(this.createPanel(data[i]))
    return (
      <FeedContainer>
          <PanelGroup>
          {this.jobs}
          </PanelGroup>

      </FeedContainer>
    );
  }
}

export default Feed;
