import React, { Component } from 'react';
import '../../Styles/App.css';
import {PanelGroup ,Panel} from 'react-bootstrap';
import { JobHeading,FeedContainer,Organization,DatePosted,Description } from '../../Styles/feed.style';


class JobPanel extends Component {

  constructor(props){
      super(props);
  }

  render() {

    return (
      <Panel collapsible header={ <JobHeading>Job Title 1</JobHeading> } eventKey="1">
        <Organization>Job Org 1</Organization>
        <DatePosted> Date Posted 1</DatePosted>
        <Description>Job Description 1</Description>
        <div> More details </div>
      </Panel>
    );
  }
}

export default JobPanel;
