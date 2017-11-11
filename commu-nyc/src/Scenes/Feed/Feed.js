import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../Styles/App.css';
import {PanelGroup ,Panel} from 'react-bootstrap';
import { FeedContainer } from '../../Styles/feed.style';
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
            <JobPanel/>
            <JobPanel/>
          </PanelGroup>

      </FeedContainer>
    );
  }
}

export default Feed;
