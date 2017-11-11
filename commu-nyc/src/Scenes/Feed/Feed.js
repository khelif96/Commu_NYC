import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../Styles/App.css';
import {PanelGroup ,Panel} from 'react-bootstrap';
import { JobHeading,FeedContainer } from '../../Styles/feed.style';
import JobPanel from './JobPanel'
class Feed extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <FeedContainer>
          <PanelGroup>
            <JobPanel/>
            <Panel collapsible header="Job 2" eventKey="2">Job Description 2 </Panel>
            <Panel collapsible header="Job 3" eventKey="3">Job Description 3 </Panel>
            <Panel collapsible header="Job 4" eventKey="4">Job Description 4 </Panel>
          </PanelGroup>

      </FeedContainer>
    );
  }
}

export default Feed;
