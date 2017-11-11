import React, { Component } from 'react';
import '../Styles/App.css';

class PostList extends Component {

  constructor(props){
      super(props);
  }

  render() {
    var styleBigHeader =  {
        color : 'orange',
        fontSize : 100,
        textAlign : 'center',
        align : 'center'
    }
    return (
          <div style = {styleBigHeader}>
            <button style = {styleBigHeader}>Job Posting</button>
          </div>
    );
  }
}

export default PostList;