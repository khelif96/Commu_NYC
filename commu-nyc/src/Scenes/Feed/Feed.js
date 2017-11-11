import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../Styles/App.css';
import {PanelGroup ,Panel} from 'react-bootstrap';
import { FeedContainer } from '../../Styles/feed.style';
import JobPanel from './JobPanel';
import jobs from '../../jobs.json';

class Feed extends Component {
  constructor(props){
      super(props);
      this.jobs = [];
  }

  createPanel(job){

      return  (<JobPanel title = {job.title} posterID = {job.posterId} createdDate = {job.createdDate} description = {job.description}/>
      );
  }
  render() {
    console.log("jobs : " + jobs[0]._id)
    //this.jobs.push(this.createPanel(jobs[0]._id))
    return (
      <FeedContainer>
          <PanelGroup>
            <JobPanel/>
          </PanelGroup>

      </FeedContainer>
    );
  }
}

export default Feed;
